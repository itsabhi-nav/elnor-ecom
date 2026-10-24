export interface Product {
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

export const PRODUCTS: Product[] = [
  {
    "id": "elnor-neck-pillow",
    "asin": "B0CX4ST3JH",
    "name": "Elnor Neck Pillow Massager with Soothing Heat & Deep Tissue | 3D Mode Therapy Massage Cushion for Shoulder, Neck Muscle Pain Relief | Suitable for Air Travel, Home, Office, Car | With 1_Year_Warranty",
    "shortName": "ELNOR Cervical 3D Neck Massager",
    "tagline": "Ergonomic 3D Shiatsu Kneading with Soothing Infrared Graphene Warmth",
    "category": "neck-shoulder",
    "categoryLabel": "Neck & Shoulders",
    "price": 2099,
    "originalPrice": 4999,
    "discountPercentage": 58,
    "rating": 4.8,
    "reviewsCount": 1420,
    "inStock": true,
    "badge": "Best Seller",
    "images": [
      "https://m.media-amazon.com/images/I/71n6QFuxi1L._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/71MWJhuQ1FL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71IHVbBVQlL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/71TGAoN2cXL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/71mmV8Y+Y1L._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/71QX1eqHhQL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/71YOe5hCUfL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/410EamL4rwL.jpg"
    ],
    "aplusImages": [
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/df03837c-c829-4e0a-88f2-1d537a016cc6.__CR0,0,1594,986_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/c36c15a0-0701-47be-bb9d-3883ab3eea6b.__CR0,0,1594,986_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/5885f901-a2e2-4f72-b847-7021541e12a6.__CR0,0,1594,986_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/8e2c161f-1d8a-4128-98a4-a72753b489b1.__CR0,0,1594,986_PT0_SX970_V1___.png"
    ],
    "specs": [
      {
        "label": "Power Source",
        "value": "Battery Powered"
      },
      {
        "label": "Other Special Features of the Product",
        "value": "Heat Therapy Function,Multi-Body Massage Use,Ergonomic Pillow Design"
      },
      {
        "label": "Massager Form",
        "value": "Wrap Around Neck Massager"
      },
      {
        "label": "Product Benefits",
        "value": "Pain Relief, Muscle Therapy, Blood Flow Control"
      },
      {
        "label": "Is Product Cordless",
        "value": "Yes"
      },
      {
        "label": "Product Grade",
        "value": "Home"
      },
      {
        "label": "Water Resistance Level",
        "value": "Not Water Resistant"
      },
      {
        "label": "Massage Therapy Technique",
        "value": "Kneading, Shiatsu"
      },
      {
        "label": "Item Weight",
        "value": "200 Grams"
      },
      {
        "label": "Item Dimensions L x W x H",
        "value": "20L x 10W x 10H Centimeters"
      },
      {
        "label": "Colour",
        "value": "Grey"
      },
      {
        "label": "Style Name",
        "value": "Modern"
      },
      {
        "label": "Form Factor",
        "value": "wrap-around neck massager pillow"
      },
      {
        "label": "Brand",
        "value": "Elnor"
      },
      {
        "label": "Model Name",
        "value": "Neck Pillow Massager with Heat"
      },
      {
        "label": "Model number",
        "value": "Elnor-05"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Grams"
      },
      {
        "label": "Manufacturer",
        "value": "ELNOR, ELNOR"
      },
      {
        "label": "Manufacturer Warranty Description",
        "value": "1 Years Warranty"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Item Nype Name",
        "value": "Neck Pillow Massager with Heat"
      },
      {
        "label": "Manufacturer Contact Information",
        "value": "ELNOR"
      },
      {
        "label": "Packer Contact Information",
        "value": "MAUREX TRADINGS"
      },
      {
        "label": "Manufacturer Part Number",
        "value": "NMP_3"
      },
      {
        "label": "ASIN",
        "value": "B0CX4ST3JH"
      },
      {
        "label": "Material",
        "value": "Plastic"
      }
    ],
    "bullets": [
      "Health & Personal Care",
      "Massage & Relaxation",
      "Electric Massage Cushions",
      "EMAIL DELIVERY ONLY: Download your extended warranty certificate by sharing your device details. The link is available under buyer/seller messages at www.amazon.in/msg and is also sent to your Amazon registered email ID",
      "Repair or Reimbursement Guarantee: We will either get Your device repaired or offer You a reimbursement in case repair is not possible or spare part is not available. This reimbursement will be offered after adjusting the applicable depreciation value as explained in the Depreciation section below. The settlement amount will be reimbursed in the form of gift vouchers, which will be issued after You submit the invoice for the newly purchased replacement Device.",
      "HASSLE-FREE SERVICE: Doorstep Service/Pick & Drop: Whether it involves sending an engineer to Your home or picking up Your Device for repair, We will arrange the service at your doorstep"
    ],
    "ritualStage": "Warm & Release",
    "ritualTip": "Rest comfortably over shoulders while seated upright; start on low warmth for 5 minutes before increasing kneading speed.",
    "boxContents": [
      "1x ELNOR Cervical Massager Cushion",
      "1x AC Home Power Adapter",
      "1x 12V Car Power Cord",
      "1x Breathable Dust Cover",
      "1x User Manual & 1-Year Warranty Card"
    ],
    "amazonUrl": "https://www.amazon.in/dp/B0CX4ST3JH"
  },
  {
    "id": "elnor-cap-massager",
    "asin": "B0H4RHQHTC",
    "name": "ELNOR Cordless Electric Cap Head Massager With Protective Mesh Fabric Cover (Blue) | 3 Adjustable Speed Settings, Deep Tissue Massage, Relieve Headache, Cervical & Migraine Pain (Blue)",
    "shortName": "ELNOR Cordless Smart Cap Massager",
    "tagline": "360\u00b0 Cranial Compression & 3-Speed Migraine & Headache Tension Relief",
    "category": "head-scalp",
    "categoryLabel": "Head & Scalp",
    "price": 3799,
    "originalPrice": 5999,
    "discountPercentage": 37,
    "rating": 4.9,
    "reviewsCount": 880,
    "inStock": true,
    "badge": "Flagship Innovation",
    "images": [
      "https://m.media-amazon.com/images/I/51LSbWxN6YL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/71McogEtF2L._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/61X+KiPDzwL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/61F3v+H7ntL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/71AkAOq1sFL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/61s8bnsqNNL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/61CzKLx7d+L._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/51zJ8JbEo2L._SL1254_.jpg"
    ],
    "aplusImages": [
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/d784ebfb-d914-44ea-9ee0-e597b4ea8d46.__CR5,0,1591,984_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/75e9d0b3-2954-4f12-aea1-51be39e43eca.__CR0,10,1552,960_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/447bf3b1-7b5f-4ab8-bf61-896d5c1fcd62.__CR0,37,1536,950_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/401770f7-6ceb-4de8-aa4d-73871c338f35.__CR0,0,1586,981_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/c1ed219a-2d75-4a6b-a309-ee2d8057f0df.__CR40,0,1555,962_PT0_SX970_V1___.png"
    ],
    "specs": [
      {
        "label": "Power Source",
        "value": "Battery Powered"
      },
      {
        "label": "Usage",
        "value": "Headache, Migraine, Cervical Pain, Stress Relief"
      },
      {
        "label": "Product Benefits",
        "value": "Stress Relief, Pain Relief, Relieve Headache"
      },
      {
        "label": "Is Product Cordless",
        "value": "Yes"
      },
      {
        "label": "Product Grade",
        "value": "Home"
      },
      {
        "label": "Water Resistance Level",
        "value": "Not Water Resistant"
      },
      {
        "label": "Massage Therapy Technique",
        "value": "Compression, Kneading"
      },
      {
        "label": "Item Weight",
        "value": "0.2 Kilograms"
      },
      {
        "label": "Item Dimensions L x W x H",
        "value": "20L x 10W x 10H Centimeters"
      },
      {
        "label": "Colour",
        "value": "Blue"
      },
      {
        "label": "Style Name",
        "value": "Modern"
      },
      {
        "label": "Form Factor",
        "value": "Cap"
      },
      {
        "label": "Brand",
        "value": "Elnor"
      },
      {
        "label": "Model Name",
        "value": "Head Massager Cap"
      },
      {
        "label": "Model number",
        "value": "Elnor-03_Blue"
      },
      {
        "label": "Unit Count",
        "value": "1 Count"
      },
      {
        "label": "Manufacturer",
        "value": "Elnor"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Item Nype Name",
        "value": "Head Massager Cap"
      },
      {
        "label": "Packer Contact Information",
        "value": "Maurex Tradings"
      },
      {
        "label": "Manufacturer Part Number",
        "value": "Elnor-03_Blue"
      },
      {
        "label": "ASIN",
        "value": "B0H4RHQHTC"
      },
      {
        "label": "Material",
        "value": "Soft Fabric"
      }
    ],
    "bullets": [
      "Health & Personal Care",
      "Massage & Relaxation",
      "Electric Handheld Massagers",
      "EMAIL DELIVERY ONLY: Download your extended warranty certificate by sharing your device details. The link is available under buyer/seller messages at www.amazon.in/msg and is also sent to your Amazon registered email ID",
      "Repair or Reimbursement Guarantee: We will either get Your device repaired or offer You a reimbursement in case repair is not possible or spare part is not available. This reimbursement will be offered after adjusting the applicable depreciation value as explained in the Depreciation section below. The settlement amount will be reimbursed in the form of gift vouchers, which will be issued after You submit the invoice for the newly purchased replacement Device.",
      "HASSLE-FREE SERVICE: Doorstep Service/Pick & Drop: Whether it involves sending an engineer to Your home or picking up Your Device for repair, We will arrange the service at your doorstep"
    ],
    "ritualStage": "Restore",
    "ritualTip": "Wear in a dim quiet room; pair with deep diaphragmatic breathing for rapid central nervous system down-regulation.",
    "boxContents": [
      "1x ELNOR Electric Scalp Cap",
      "2x Detachable Mesh Protective Liners",
      "1x USB-C Braided Charging Cable",
      "1x Luxury Velvet Travel Pouch",
      "1x User Guide & Warranty Document"
    ],
    "amazonUrl": "https://www.amazon.in/dp/B0H4RHQHTC"
  },
  {
    "id": "elnor-cupping-device",
    "asin": "B0CX1KYQZJ",
    "name": "Elnor Smart Dynamic Cupping Therapy Device | Rechargeable Cupping Therapy Massage Tool | 3 in 1 Vacuum Therapy Machine for Body Massage Pain Relief, Best Massagers for Neck and Back with 12 Modes",
    "shortName": "ELNOR Smart Dynamic Cupping Tool",
    "tagline": "12-Mode Micro-Vacuum Therapy with Red-Light Thermal Circulation",
    "category": "back-abdomen",
    "categoryLabel": "Back & Abdomen",
    "price": 999,
    "originalPrice": 2999,
    "discountPercentage": 67,
    "rating": 4.7,
    "reviewsCount": 2100,
    "inStock": true,
    "badge": "Top Value",
    "images": [
      "https://m.media-amazon.com/images/I/51tYsHDz9CL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/61WayDd1gdL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/61hjz75QaYL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/61PCrvxyq-L._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/71fBGXHkicL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/61igDeNlrIL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/71ZHacOIsFL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71WRpt23dIL._SL1254_.jpg"
    ],
    "aplusImages": [
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/cb33525d-4848-40cb-9aea-bf22a4929f3e.__CR0,0,1594,986_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/8ee8052c-a603-4e5d-978f-0195c512a407.__CR0,0,3666,2268_PT0_SX970_V1___.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/6ade10b1-f6db-42b7-80c4-0c65a16f112c.__CR0,0,3666,2268_PT0_SX970_V1___.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/390b4a21-f43b-422b-a885-bf2665e39ad3.__CR0,0,3666,2268_PT0_SX970_V1___.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/b02f1551-baed-4c3b-8260-27e1c516fe3d.__CR0,0,3666,2268_PT0_SX970_V1___.jpg"
    ],
    "specs": [
      {
        "label": "Power Source",
        "value": "Battery Powered"
      },
      {
        "label": "Other Special Features of the Product",
        "value": "Speed Control"
      },
      {
        "label": "Massager Form",
        "value": "Massage Cup"
      },
      {
        "label": "Usage",
        "value": "Back Pain, Back pain, Neck pain, Shoulder pain"
      },
      {
        "label": "Product Benefits",
        "value": "Pain Relief, Stress Relief, Muscle Therapy, Tissue Therapy"
      },
      {
        "label": "Is Product Cordless",
        "value": "No"
      },
      {
        "label": "Product Grade",
        "value": "Home"
      },
      {
        "label": "Water Resistance Level",
        "value": "Not Water Resistant"
      },
      {
        "label": "Massage Therapy Technique",
        "value": "Cupping"
      },
      {
        "label": "Item Weight",
        "value": "150 Grams"
      },
      {
        "label": "Item Dimensions L x W x H",
        "value": "10L x 6W x 10H Centimeters"
      },
      {
        "label": "Colour",
        "value": "Black"
      },
      {
        "label": "Style Name",
        "value": "Modern"
      },
      {
        "label": "Form Factor",
        "value": "Stand Alone"
      },
      {
        "label": "Brand",
        "value": "Elnor"
      },
      {
        "label": "Model Name",
        "value": "Cupping Therapy Machine"
      },
      {
        "label": "Model number",
        "value": "Elnor-04"
      },
      {
        "label": "Unit Count",
        "value": "1 Count"
      },
      {
        "label": "Manufacturer",
        "value": "Elnor, Elnor"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Item Nype Name",
        "value": "Massager"
      },
      {
        "label": "Manufacturer Contact Information",
        "value": "Elnor"
      },
      {
        "label": "Packer Contact Information",
        "value": "Elnor"
      },
      {
        "label": "Manufacturer Part Number",
        "value": "CT-4"
      },
      {
        "label": "ASIN",
        "value": "B0CX1KYQZJ"
      },
      {
        "label": "Material",
        "value": "Plastic"
      }
    ],
    "bullets": [
      "Health & Personal Care",
      "Massage & Relaxation",
      "Electric Handheld Massagers",
      "Plan is valid up to 1 year post manufacturer comprehensive warranty ends.",
      "Plan is email delivered and auto activated if purchased along with appliance on Amazon.",
      "Wear and tear, theft, accessories, intentional damages and brand warranty exclusions are not covered; plan is not valid if purchased standalone."
    ],
    "ritualStage": "Release",
    "ritualTip": "Apply a few drops of natural body oil before gliding the device along tight fascia lines.",
    "boxContents": [
      "1x ELNOR Dynamic Cupping Device",
      "2x Replaceable Filter Cotton Plugs",
      "1x USB-C Charging Cable",
      "1x Essential Gua Sha Oil Bottle",
      "1x Comprehensive User Guide"
    ],
    "amazonUrl": "https://www.amazon.in/dp/B0CX1KYQZJ"
  },
  {
    "id": "elnor-eye-massager",
    "asin": "B0H3QKWFND",
    "name": "Maurex Eye Massager with Heat & Bluetooth Music | Rechargeable Eye Care Device for Eye Strain Relief, Dry Eyes, Dark Circles & Relaxation | Foldable Eye Massager for Sleep Support",
    "shortName": "ELNOR Aura Smart Thermal Eye Massager",
    "tagline": "Air Compression, 42\u00b0C Warmth & Ambient Bluetooth Soundscapes",
    "category": "head-scalp",
    "categoryLabel": "Head & Scalp",
    "price": 3899,
    "originalPrice": 4999,
    "discountPercentage": 22,
    "rating": 4.9,
    "reviewsCount": 940,
    "inStock": true,
    "badge": "Physio Recommended",
    "images": [
      "https://m.media-amazon.com/images/I/612cXfIBu9L._SL1470_.jpg",
      "https://m.media-amazon.com/images/I/71r6l2VtvYL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71OiyqZQAjL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/615XRPwLHtL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Dz2SN6x7L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61f-jeAIpbL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71XvDBGsKoL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/515bD66G93L._SL1500_.jpg"
    ],
    "aplusImages": [
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/32dbdc3b-c97f-48b5-8fd8-9e7d8faac4e8.__CR0,0,970,600_PT0_SX970_V1___.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/96da9d15-ad7c-4624-8f6e-85135b698bc5.__CR0,0,970,600_PT0_SX970_V1___.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/111b74e4-99d0-4f67-8128-091e689e025e.__CR0,0,970,600_PT0_SX970_V1___.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/a8811440-45d2-4496-80a6-5888f7ac6fbf.__CR0,0,970,600_PT0_SX970_V1___.jpg"
    ],
    "specs": [
      {
        "label": "Target Use Body Part",
        "value": "Face"
      },
      {
        "label": "Power Source",
        "value": "Rechargeable"
      },
      {
        "label": "Massager Form",
        "value": "Massage Belt"
      },
      {
        "label": "Product Benefits",
        "value": "Fatigue Relief"
      },
      {
        "label": "Is Product Cordless",
        "value": "Yes"
      },
      {
        "label": "Massage Therapy Technique",
        "value": "Vibration"
      },
      {
        "label": "Item Weight",
        "value": "0.6 Kilograms"
      },
      {
        "label": "Item Dimensions L x W x H",
        "value": "10L x 10W x 5H Centimeters"
      },
      {
        "label": "Colour",
        "value": "Upgraded White"
      },
      {
        "label": "Form Factor",
        "value": "foldable"
      },
      {
        "label": "Material",
        "value": "Abs Plastic"
      },
      {
        "label": "Brand",
        "value": "MAUREX TRADINGS"
      },
      {
        "label": "Model number",
        "value": "MT-EM-01"
      },
      {
        "label": "Unit Count",
        "value": "1 Count"
      },
      {
        "label": "Number of Packs",
        "value": "1"
      },
      {
        "label": "Manufacturer",
        "value": "Maurex Tradings"
      },
      {
        "label": "Country of Origin",
        "value": "China"
      },
      {
        "label": "Importer Contact Information",
        "value": "Maurex Tradings"
      },
      {
        "label": "Included Components",
        "value": "Eye Massager, Charging Cable, User Manual"
      },
      {
        "label": "Item Nype Name",
        "value": "Eye Massager"
      },
      {
        "label": "Packer Contact Information",
        "value": "Maurex Tradings"
      },
      {
        "label": "Manufacturer Part Number",
        "value": "MT-EM-01"
      },
      {
        "label": "ASIN",
        "value": "B0H3QKWFND"
      }
    ],
    "bullets": [
      "Industrial & Scientific",
      "Occupational Health & Safety Products",
      "Work Safety Equipment & Gear",
      "Eye Protection Accessories",
      "EMAIL DELIVERY ONLY: Download your extended warranty certificate by sharing your device details. The link is available under buyer/seller messages at www.amazon.in/msg and is also sent to your Amazon registered email ID",
      "Repair or Reimbursement Guarantee: We will either get Your device repaired or offer You a reimbursement in case repair is not possible or spare part is not available. This reimbursement will be offered after adjusting the applicable depreciation value as explained in the Depreciation section below. The settlement amount will be reimbursed in the form of gift vouchers, which will be issued after You submit the invoice for the newly purchased replacement Device."
    ],
    "ritualStage": "Warm & Restore",
    "ritualTip": "Slip on 20 minutes before bedtime with Bluetooth nature sounds to prepare mind and body for deep REM sleep.",
    "boxContents": [
      "1x ELNOR Aura Foldable Eye Massager",
      "1x USB-C Quick Charging Cord",
      "1x Magnetic Protective Travel Hardcase",
      "1x Velvet Cleaning Cloth",
      "1x User Manual with Warranty"
    ],
    "amazonUrl": "https://www.amazon.in/dp/B0H3QKWFND"
  },
  {
    "id": "elnor-heating-belt",
    "asin": "B0CQTLCX2D",
    "name": "ELNOR Electric Heating Pad Belt for Belly Pain Relief | Portable Menstrual Heat & Massage Belt for Abdomen & Back | 3 Heat Levels & 3 Modes | USB Powered Heating Belt for Women",
    "shortName": "ELNOR Lumbar & Abdominal Heating Belt",
    "tagline": "3-Second Fast Graphene Heat & Multi-Pulse Vibration for Menstrual & Back Comfort",
    "category": "back-abdomen",
    "categoryLabel": "Back & Abdomen",
    "price": 799,
    "originalPrice": 4999,
    "discountPercentage": 84,
    "rating": 4.8,
    "reviewsCount": 3400,
    "inStock": true,
    "badge": "Must Have",
    "images": [
      "https://m.media-amazon.com/images/I/41YTntvml9L._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/71pSTCBU7VL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51IUXAwWybL._SL1280_.jpg",
      "https://m.media-amazon.com/images/I/61cNFTXRtFL._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/51NrFLh4X4L._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/610OkZI0qFL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/614cykP9tWL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/3131ktwNfNL.jpg"
    ],
    "aplusImages": [
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/c69331d1-f753-4d5c-98ff-b7c8b0c592da.__CR2,0,1592,985_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/3bb22a5f-8ce8-4f85-ac3d-08e2f1bee946.__CR1,0,1594,986_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/a3e18d2d-1a61-4722-a6ae-3a6201883375.__CR1,0,1594,986_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/09ea443a-611e-4178-b0ca-e4012c2a6a87.__CR1,0,1594,986_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/ed905978-a2fe-4320-bcea-d86d1f62a974.__CR0,0,1594,986_PT0_SX970_V1___.png"
    ],
    "specs": [
      {
        "label": "Brand",
        "value": "Elnor"
      },
      {
        "label": "Model Name",
        "value": "Menstrual Massager"
      },
      {
        "label": "Unit Count",
        "value": "1 Count"
      },
      {
        "label": "Number of Items",
        "value": "1"
      },
      {
        "label": "Manufacturer",
        "value": "CB-1, support@elnor.in"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Item Nype Name",
        "value": "Massage Belt"
      },
      {
        "label": "Manufacturer Contact Information",
        "value": "support@elnor.in"
      },
      {
        "label": "Model number",
        "value": "Elnor-02"
      },
      {
        "label": "Manufacturer Part Number",
        "value": "CB-1"
      },
      {
        "label": "ASIN",
        "value": "B0CQTLCX2D"
      },
      {
        "label": "Special Features",
        "value": "Breathable"
      },
      {
        "label": "Number of settings",
        "value": "3"
      },
      {
        "label": "Item Weight",
        "value": "100 Grams"
      },
      {
        "label": "Material",
        "value": "Plastic"
      },
      {
        "label": "Colour",
        "value": "Menstrual Massager"
      }
    ],
    "bullets": [
      "Health & Personal Care",
      "Hot & Cold Therapies",
      "Electric Heating Pads",
      "EMAIL DELIVERY ONLY: Download your extended warranty certificate by sharing your device details. The link is available under buyer/seller messages at www.amazon.in/msg and is also sent to your Amazon registered email ID",
      "REPAIR OR REPLACEMENT GUARANTEE: We will either repair your device or give a replacement. The replacement device will be provided at the discretion of Onsitego on the basis of the depreciated value of your device",
      "HASSLE-FREE SERVICE: \u2018No Questions Asked\u2019 Repair Policy | Zero-Paperwork Claims Process | Free Pick & Drop or At-Home Service"
    ],
    "ritualStage": "Warm",
    "ritualTip": "Set to 55\u00b0C on the lower abdomen while resting with warm herbal tea for fast cramp easing.",
    "boxContents": [
      "1x ELNOR Thermal Relief Belt",
      "1x Extended Adjustable Waist Strap",
      "1x USB-C Charging Cable",
      "1x Quick Start Guide & Warranty Leaflet"
    ],
    "amazonUrl": "https://www.amazon.in/dp/B0CQTLCX2D"
  },
  {
    "id": "elnor-knee-massager",
    "asin": "B0CR184KSY",
    "name": "Elnor Leg & Knee Massager | For Joint Pain & Arthritis Pain | Electric Knee Massage Machine | Useful For Arms 8 Elbows Also | 3 Mode of Vibration | 1 Year Warranty",
    "shortName": "ELNOR Kinetic Thermal Joint & Knee Massager",
    "tagline": "3-Mode Vibration & Thermal Penetration for Knee, Shoulder & Elbow Pain",
    "category": "joints-limbs",
    "categoryLabel": "Joints & Limbs",
    "price": 3599,
    "originalPrice": 11999,
    "discountPercentage": 70,
    "rating": 4.8,
    "reviewsCount": 760,
    "inStock": true,
    "badge": "Joint Recovery",
    "images": [
      "https://m.media-amazon.com/images/I/61UNRGLtTvL._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/712vIR-8wHL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/710Xgj+4+iL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/61kkN8xafVL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/61kuDMNKu1L._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/71OqtbIaOYL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/71usezdM-dL._SL1254_.jpg",
      "https://m.media-amazon.com/images/I/31XF7LW1sXL.jpg"
    ],
    "aplusImages": [
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/a0e4d600-fcdf-4e44-83c5-1de777ae74f3.__CR0,0,600,180_PT0_SX600_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/1fe7a1e7-61d9-4baa-b450-54b372fe8e2e.__CR0,37,1536,950_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/9e348296-96f1-49eb-9ebd-3a8c1590b312.__CR0,37,1536,950_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/e67aab7f-d69a-4d74-a5c0-924b2a5788b7.__CR0,37,1536,950_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/de9ac0ce-cb48-46c5-a75e-ec90ae28188b.__CR0,37,1536,950_PT0_SX970_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/06e935c0-8270-49c7-b5eb-78509e3e6eb8.__CR44,0,1434,887_PT0_SX970_V1___.png"
    ],
    "specs": [
      {
        "label": "Power Source",
        "value": "Corded Electric"
      },
      {
        "label": "Other Special Features of the Product",
        "value": "Rechargeable"
      },
      {
        "label": "Massager Form",
        "value": "Foot Massager Machine"
      },
      {
        "label": "Product Benefits",
        "value": "Pain Relief, Stress Relief"
      },
      {
        "label": "Is Product Cordless",
        "value": "No"
      },
      {
        "label": "Product Grade",
        "value": "Home"
      },
      {
        "label": "Water Resistance Level",
        "value": "Not Water Resistant"
      },
      {
        "label": "Massage Therapy Technique",
        "value": "Compression"
      },
      {
        "label": "Item Weight",
        "value": "775 Grams"
      },
      {
        "label": "Item Dimensions L x W x H",
        "value": "29L x 11W x 10H Centimeters"
      },
      {
        "label": "Colour",
        "value": "Foot Massager"
      },
      {
        "label": "Style Name",
        "value": "Modern"
      },
      {
        "label": "Brand",
        "value": "Elnor"
      },
      {
        "label": "Model Name",
        "value": "knee massager01"
      },
      {
        "label": "Model number",
        "value": "knee massager01"
      },
      {
        "label": "Unit Count",
        "value": "1 Count"
      },
      {
        "label": "Item Nype Name",
        "value": "knee massager01"
      },
      {
        "label": "Manufacturer Part Number",
        "value": "LNM-1"
      },
      {
        "label": "ASIN",
        "value": "B0CR184KSY"
      },
      {
        "label": "Material",
        "value": "Cotton"
      }
    ],
    "bullets": [
      "Health & Personal Care",
      "Massage & Relaxation",
      "Electric Foot Massagers",
      "EMAIL DELIVERY ONLY: Download your extended warranty certificate by sharing your device details. The link is available under buyer/seller messages at www.amazon.in/msg and is also sent to your Amazon registered email ID",
      "Repair or Reimbursement Guarantee: We will either get Your device repaired or offer You a reimbursement in case repair is not possible or spare part is not available. This reimbursement will be offered after adjusting the applicable depreciation value as explained in the Depreciation section below. The settlement amount will be reimbursed in the form of gift vouchers, which will be issued after You submit the invoice for the newly purchased replacement Device.",
      "HASSLE-FREE SERVICE: Doorstep Service/Pick & Drop: Whether it involves sending an engineer to Your home or picking up Your Device for repair, We will arrange the service at your doorstep"
    ],
    "ritualStage": "Restore",
    "ritualTip": "Apply after evening walks or workouts; combine medium heat with vibration mode 2 for 15 minutes per knee.",
    "boxContents": [
      "1x ELNOR Joint Care Massager Unit",
      "1x Shoulder / Elbow Extension Strap",
      "1x Fast Charging USB-C Cable",
      "1x Illustrated Knee Exercise Guide",
      "1x Official Warranty Certificate"
    ],
    "amazonUrl": "https://www.amazon.in/dp/B0CR184KSY"
  },
  {
    "id": "elnor-lymphatic-massager",
    "asin": "B0H6SYTF7V",
    "name": "Maurex Rechargeable Lymphatic Drainage Massager and Cellulite Massager with 3000mAh Fascia Blaster to Reduce Stretch Marks for Legs, Arms and Abdomen, Body Shaping Device with Microcurrent",
    "shortName": "ELNOR Sculpt Microcurrent Body Massager",
    "tagline": "3000mAh High-Torque Kinetic Motor for Fascia Release & Cellulite Smoothing",
    "category": "joints-limbs",
    "categoryLabel": "Joints & Limbs",
    "price": 1499,
    "originalPrice": 3999,
    "discountPercentage": 63,
    "rating": 4.7,
    "reviewsCount": 520,
    "inStock": true,
    "badge": "Sculpt & Tone",
    "images": [
      "https://m.media-amazon.com/images/I/71ie-8xAdLL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/616LXvxvlKL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/716BGPm+lpL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61aTM0tZ1yL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61IBrZrnyyL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61r4iyFAUYL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/41YrkZ7qpQL.jpg",
      "https://m.media-amazon.com/images/I/31WinP5ZlpL.jpg"
    ],
    "aplusImages": [
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/eaed9870-7b9e-4d4c-be12-2abde15f6f2a.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/54eba72e-8ffe-4eee-8b93-69fdafea7cab.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/08bb4e48-d130-4522-a1bc-3c001f7b44a9.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/84d3d989-4cf7-409d-bd1f-7d00494edce5.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/d9957efc-b91f-47ce-9a85-5f7cd07b1619.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
    ],
    "specs": [
      {
        "label": "Power Source",
        "value": "Rechargeable"
      },
      {
        "label": "Other Special Features of the Product",
        "value": "Heat, Portable, Quiet, red light therapy"
      },
      {
        "label": "Massager Form",
        "value": "Massage Wand"
      },
      {
        "label": "Usage",
        "value": "Anti Cellulite, Heat Therapy, Lymphatic Drainage, Massage Therapy, Skin Tightening"
      },
      {
        "label": "Product Benefits",
        "value": "Cellulite Removal, Fatigue Relief, Skin Care"
      },
      {
        "label": "Is Product Cordless",
        "value": "Yes"
      },
      {
        "label": "Product Grade",
        "value": "New"
      },
      {
        "label": "Water Resistance Level",
        "value": "Not Water Resistant"
      },
      {
        "label": "Massage Therapy Technique",
        "value": "Scraping"
      },
      {
        "label": "Charging Time",
        "value": "3 Hours"
      },
      {
        "label": "Battery Average Life",
        "value": "1 Hours"
      },
      {
        "label": "Item Weight",
        "value": "170 Grams"
      },
      {
        "label": "Item Dimensions L x W x H",
        "value": "12L x 10W x 10H Centimeters"
      },
      {
        "label": "Material",
        "value": "Abs Plastic"
      },
      {
        "label": "Brand",
        "value": "MAUREX TRADINGS"
      },
      {
        "label": "Model Name",
        "value": "Maurex Anti Cellulite and lymphatic Drainage Massager"
      },
      {
        "label": "Model number",
        "value": "Maurex-06"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Manufacturer",
        "value": "MAUREX TRADINGS"
      },
      {
        "label": "Country of Origin",
        "value": "China"
      },
      {
        "label": "Importer Contact Information",
        "value": "MAUREX TRADINGS"
      },
      {
        "label": "Item Nype Name",
        "value": "Anti Cellulite & Lymphatic Drainage massager"
      },
      {
        "label": "Packer Contact Information",
        "value": "MAUREX TRADINGS"
      },
      {
        "label": "Manufacturer Part Number",
        "value": "Maurex-06"
      },
      {
        "label": "ASIN",
        "value": "B0H6SYTF7V"
      },
      {
        "label": "Colour",
        "value": "Blue"
      },
      {
        "label": "Style Name",
        "value": "Modern"
      },
      {
        "label": "Form Factor",
        "value": "Stand alone"
      }
    ],
    "bullets": [
      "Health & Personal Care",
      "Massage & Relaxation",
      "Electric Handheld Massagers",
      "Plan is valid up to 1 year post manufacturer comprehensive warranty ends.",
      "Plan is email delivered and auto activated if purchased along with appliance on Amazon.",
      "Wear and tear, theft, accessories, intentional damages and brand warranty exclusions are not covered; plan is not valid if purchased standalone."
    ],
    "ritualStage": "Release",
    "ritualTip": "Glide upward toward lymph nodes (from ankle to knee, wrist to shoulder) with moderate pressure after a warm shower.",
    "boxContents": [
      "1x ELNOR Sculpt Body Machine",
      "4x Specialized Massage Node Attachments",
      "1x USB-C Quick Charging Cord",
      "1x Lymphatic Drainage Diagram Guide",
      "1x 1-Year Guarantee Card"
    ],
    "amazonUrl": "https://www.amazon.in/dp/B0H6SYTF7V"
  }
];
