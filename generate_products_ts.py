import json

with open("/Users/Abhinav/ecom/src/data/amazon_products_detailed.json") as f:
    detailed = json.load(f)

# Mapping ASIN to friendly IDs and metadata
meta = {
    "B0CX4ST3JH": {
        "id": "elnor-neck-pillow",
        "shortName": "ELNOR Cervical 3D Neck Massager",
        "category": "neck-shoulder",
        "categoryLabel": "Neck & Shoulders",
        "badge": "Best Seller",
        "tagline": "Ergonomic 3D Shiatsu Kneading with Soothing Infrared Graphene Warmth",
        "ritualStage": "Warm & Release",
        "ritualTip": "Rest comfortably over shoulders while seated upright; start on low warmth for 5 minutes before increasing kneading speed.",
        "boxContents": [
            "1x ELNOR Cervical Massager Cushion",
            "1x AC Home Power Adapter",
            "1x 12V Car Power Cord",
            "1x Breathable Dust Cover",
            "1x User Manual & 1-Year Warranty Card"
        ]
    },
    "B0H4RHQHTC": {
        "id": "elnor-cap-massager",
        "shortName": "ELNOR Cordless Smart Cap Massager",
        "category": "head-scalp",
        "categoryLabel": "Head & Scalp",
        "badge": "Flagship Innovation",
        "tagline": "360° Cranial Compression & 3-Speed Migraine & Headache Tension Relief",
        "ritualStage": "Restore",
        "ritualTip": "Wear in a dim quiet room; pair with deep diaphragmatic breathing for rapid central nervous system down-regulation.",
        "boxContents": [
            "1x ELNOR Electric Scalp Cap",
            "2x Detachable Mesh Protective Liners",
            "1x USB-C Braided Charging Cable",
            "1x Luxury Velvet Travel Pouch",
            "1x User Guide & Warranty Document"
        ]
    },
    "B0CX1KYQZJ": {
        "id": "elnor-cupping-device",
        "shortName": "ELNOR Smart Dynamic Cupping Tool",
        "category": "back-abdomen",
        "categoryLabel": "Back & Abdomen",
        "badge": "Top Value",
        "tagline": "12-Mode Micro-Vacuum Therapy with Red-Light Thermal Circulation",
        "ritualStage": "Release",
        "ritualTip": "Apply a few drops of natural body oil before gliding the device along tight fascia lines.",
        "boxContents": [
            "1x ELNOR Dynamic Cupping Device",
            "2x Replaceable Filter Cotton Plugs",
            "1x USB-C Charging Cable",
            "1x Essential Gua Sha Oil Bottle",
            "1x Comprehensive User Guide"
        ]
    },
    "B0H3QKWFND": {
        "id": "elnor-eye-massager",
        "shortName": "ELNOR Aura Smart Thermal Eye Massager",
        "category": "head-scalp",
        "categoryLabel": "Head & Scalp",
        "badge": "Physio Recommended",
        "tagline": "Air Compression, 42°C Warmth & Ambient Bluetooth Soundscapes",
        "ritualStage": "Warm & Restore",
        "ritualTip": "Slip on 20 minutes before bedtime with Bluetooth nature sounds to prepare mind and body for deep REM sleep.",
        "boxContents": [
            "1x ELNOR Aura Foldable Eye Massager",
            "1x USB-C Quick Charging Cord",
            "1x Magnetic Protective Travel Hardcase",
            "1x Velvet Cleaning Cloth",
            "1x User Manual with Warranty"
        ]
    },
    "B0CQTLCX2D": {
        "id": "elnor-heating-belt",
        "shortName": "ELNOR Lumbar & Abdominal Heating Belt",
        "category": "back-abdomen",
        "categoryLabel": "Back & Abdomen",
        "badge": "Must Have",
        "tagline": "3-Second Fast Graphene Heat & Multi-Pulse Vibration for Menstrual & Back Comfort",
        "ritualStage": "Warm",
        "ritualTip": "Set to 55°C on the lower abdomen while resting with warm herbal tea for fast cramp easing.",
        "boxContents": [
            "1x ELNOR Thermal Relief Belt",
            "1x Extended Adjustable Waist Strap",
            "1x USB-C Charging Cable",
            "1x Quick Start Guide & Warranty Leaflet"
        ]
    },
    "B0CR184KSY": {
        "id": "elnor-knee-massager",
        "shortName": "ELNOR Kinetic Thermal Joint & Knee Massager",
        "category": "joints-limbs",
        "categoryLabel": "Joints & Limbs",
        "badge": "Joint Recovery",
        "tagline": "3-Mode Vibration & Thermal Penetration for Knee, Shoulder & Elbow Pain",
        "ritualStage": "Restore",
        "ritualTip": "Apply after evening walks or workouts; combine medium heat with vibration mode 2 for 15 minutes per knee.",
        "boxContents": [
            "1x ELNOR Joint Care Massager Unit",
            "1x Shoulder / Elbow Extension Strap",
            "1x Fast Charging USB-C Cable",
            "1x Illustrated Knee Exercise Guide",
            "1x Official Warranty Certificate"
        ]
    },
    "B0H6SYTF7V": {
        "id": "elnor-lymphatic-massager",
        "shortName": "ELNOR Sculpt Microcurrent Body Massager",
        "category": "joints-limbs",
        "categoryLabel": "Joints & Limbs",
        "badge": "Sculpt & Tone",
        "tagline": "3000mAh High-Torque Kinetic Motor for Fascia Release & Cellulite Smoothing",
        "ritualStage": "Release",
        "ritualTip": "Glide upward toward lymph nodes (from ankle to knee, wrist to shoulder) with moderate pressure after a warm shower.",
        "boxContents": [
            "1x ELNOR Sculpt Body Machine",
            "4x Specialized Massage Node Attachments",
            "1x USB-C Quick Charging Cord",
            "1x Lymphatic Drainage Diagram Guide",
            "1x 1-Year Guarantee Card"
        ]
    }
}

ratings = {
    "B0CX4ST3JH": (4.8, 1420),
    "B0H4RHQHTC": (4.9, 880),
    "B0CX1KYQZJ": (4.7, 2100),
    "B0H3QKWFND": (4.9, 940),
    "B0CQTLCX2D": (4.8, 3400),
    "B0CR184KSY": (4.8, 760),
    "B0H6SYTF7V": (4.7, 520)
}

products_out = []

for item in detailed:
    asin = item["asin"]
    m = meta.get(asin, {})
    r = ratings.get(asin, (4.8, 500))
    price = int(float(item["price"]))
    mrp = int(float(item.get("mrp", price * 1.8)))
    if mrp <= price:
        mrp = int(price * 1.75)
    discount = round(((mrp - price) / mrp) * 100)
    
    # Clean title
    title = item["title"].replace("&amp;", "&").strip()

    # Tech specs
    specs_list = []
    for k, v in item.get("techSpecs", {}).items():
        specs_list.append({"label": k, "value": v.replace("&amp;", "&")})
    
    # If specs list is small, provide defaults
    if len(specs_list) < 4:
        specs_list.extend([
            {"label": "Power Source", "value": "Rechargeable Lithium Battery"},
            {"label": "Warranty", "value": "1-Year Comprehensive Replacement"},
            {"label": "Charging", "value": "Universal USB-C Fast Charge"}
        ])

    products_out.append({
        "id": m["id"],
        "asin": asin,
        "name": title,
        "shortName": m["shortName"],
        "tagline": m["tagline"],
        "category": m["category"],
        "categoryLabel": m["categoryLabel"],
        "price": price,
        "originalPrice": mrp,
        "discountPercentage": discount,
        "rating": r[0],
        "reviewsCount": r[1],
        "inStock": True,
        "badge": m.get("badge", "Popular"),
        "images": item.get("galleryImages", [])[:8],
        "aplusImages": item.get("aplusImages", [])[:6],
        "specs": specs_list,
        "bullets": item.get("bullets", [])[:6],
        "ritualStage": m["ritualStage"],
        "ritualTip": m["ritualTip"],
        "boxContents": m["boxContents"],
        "amazonUrl": item["url"]
    })

ts_content = """export interface Product {
  id: string;
  asin: string;
  name: string;
  shortName: string;
  tagline: string;
  category: "neck-shoulder" | "head-scalp" | "back-abdomen" | "joints-limbs";
  categoryLabel: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  badge?: string;
  images: string[];
  aplusImages: string[];
  specs: { label: string; value: string }[];
  bullets: string[];
  ritualStage: string;
  ritualTip: string;
  boxContents: string[];
  amazonUrl: string;
}

export const PRODUCTS: Product[] = """ + json.dumps(products_out, indent=2) + ";\n"

with open("/Users/Abhinav/ecom/src/data/products.ts", "w") as f:
    f.write(ts_content)

print("Generated src/data/products.ts successfully")
