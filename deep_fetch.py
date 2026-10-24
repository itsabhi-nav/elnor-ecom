import urllib.request
import re
import json

asins = ["B0CX4ST3JH", "B0H4RHQHTC", "B0CX1KYQZJ", "B0H3QKWFND", "B0CQTLCX2D", "B0CR184KSY", "B0H6SYTF7V"]
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Accept-Language": "en-IN,en;q=0.9",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
}

all_products = []

for asin in asins:
    url = f"https://www.amazon.in/dp/{asin}"
    print(f"Fetching {asin}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode("utf-8", errors="ignore")

            # Title
            title_m = re.search(r'id=["\']productTitle["\'][^>]*>(.*?)</span>', html, re.DOTALL)
            title = title_m.group(1).strip() if title_m else ""

            # Price
            price_m = re.search(r'class=["\']a-price-whole["\']>([^<]+)', html)
            price = price_m.group(1).strip().replace(',', '') if price_m else "1999"

            # MRP / original price
            mrp_m = re.search(r'class=["\']a-price a-text-price[^>]*>.*?<span class="a-offscreen">₹?([^<]+)</span>', html, re.DOTALL)
            mrp = mrp_m.group(1).strip().replace(',', '') if mrp_m else str(int(float(price) * 1.8))

            # Feature bullets
            bullets_raw = re.findall(r'<span class="a-list-item">\s*(.*?)\s*</span>', html, re.DOTALL)
            clean_bullets = []
            for b in bullets_raw:
                cleaned = re.sub(r'<[^>]+>', '', b).strip()
                if len(cleaned) > 20 and "a-declarative" not in cleaned and "Previous page" not in cleaned and "Next page" not in cleaned:
                    clean_bullets.append(cleaned)

            # High-res gallery images
            hi_res_imgs = re.findall(r'"hiRes":"(https://[^"]+)"', html)
            large_imgs = re.findall(r'"large":"(https://[^"]+)"', html)
            
            # A+ Content / Product Description images
            aplus_imgs = re.findall(r'data-src="(https://m\.media-amazon\.com/images/S/aplus-media[^"]+)"', html)
            if not aplus_imgs:
                aplus_imgs = re.findall(r'src="(https://m\.media-amazon\.com/images/S/aplus-media[^"]+)"', html)

            all_gallery = []
            seen = set()
            for img in hi_res_imgs + large_imgs:
                if img not in seen and not any(x in img for x in ["icon", "sprite", "play", "pixel"]):
                    seen.add(img)
                    all_gallery.append(img)

            all_aplus = []
            seen_ap = set()
            for img in aplus_imgs:
                if img not in seen_ap and "grey-pixel" not in img:
                    seen_ap.add(img)
                    all_aplus.append(img)

            # Extract technical details / spec table
            tech_specs = {}
            spec_rows = re.findall(r'<th[^>]*>\s*(.*?)\s*</th>\s*<td[^>]*>\s*(.*?)\s*</td>', html, re.DOTALL)
            for k, v in spec_rows:
                k_clean = re.sub(r'<[^>]+>', '', k).strip()
                v_clean = re.sub(r'<[^>]+>', '', v).strip()
                if k_clean and v_clean and len(k_clean) < 40 and len(v_clean) < 100:
                    tech_specs[k_clean] = v_clean

            # Product description text
            desc_m = re.search(r'id=["\']productDescription["\'][^>]*>(.*?)</div>', html, re.DOTALL)
            desc = re.sub(r'<[^>]+>', ' ', desc_m.group(1)).strip() if desc_m else ""

            all_products.append({
                "asin": asin,
                "url": url,
                "title": title,
                "price": price,
                "mrp": mrp,
                "bullets": clean_bullets[:8],
                "description": desc,
                "galleryImages": all_gallery[:8],
                "aplusImages": all_aplus[:6],
                "techSpecs": tech_specs
            })
            print(f"Successfully processed {asin} ({len(all_gallery)} gallery imgs, {len(all_aplus)} aplus imgs)")
    except Exception as e:
        print(f"Error fetching {asin}: {e}")

with open("/Users/Abhinav/ecom/src/data/amazon_products_detailed.json", "w") as f:
    json.dump(all_products, f, indent=2)

print("Saved to src/data/amazon_products_detailed.json")
