import urllib.request
import re
import json

asins = ["B0CX4ST3JH", "B0H4RHQHTC", "B0CX1KYQZJ", "B0H3QKWFND", "B0CQTLCX2D", "B0CR184KSY", "B0H6SYTF7V"]
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Accept-Language": "en-IN,en;q=0.9",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
}

results = []
for asin in asins:
    url = f"https://www.amazon.in/dp/{asin}"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode("utf-8", errors="ignore")
            title_m = re.search(r'id=["\']productTitle["\'][^>]*>(.*?)</span>', html, re.DOTALL)
            title = title_m.group(1).strip() if title_m else ""
            if not title:
                t2 = re.search(r'<title>(.*?)</title>', html, re.DOTALL)
                title = t2.group(1).strip() if t2 else "Unknown"
            
            price_m = re.search(r'class=["\']a-price-whole["\']>([^<]+)', html)
            price = price_m.group(1).strip().replace(',', '') if price_m else ""
            
            # extract features / bullets
            bullets = re.findall(r'<span class="a-list-item">\s*(.*?)\s*</span>', html, re.DOTALL)
            clean_bullets = [re.sub(r'<[^>]+>', '', b).strip() for b in bullets if len(b) > 15 and "a-declarative" not in b][:5]
            
            # images
            imgs = re.findall(r'"hiRes":"(https://[^"]+)"', html)
            if not imgs:
                imgs = re.findall(r'"large":"(https://[^"]+)"', html)
            
            results.append({
                "asin": asin,
                "url": url,
                "title": title,
                "price": price,
                "bullets": clean_bullets,
                "images": list(set(imgs))[:4]
            })
            print(f"Processed {asin}: {title[:60]}")
    except Exception as e:
        print(f"Error {asin}: {e}")
        results.append({"asin": asin, "error": str(e)})

with open("/Users/Abhinav/ecom/products_info.json", "w") as f:
    json.dump(results, f, indent=2)

print("Saved to products_info.json")
