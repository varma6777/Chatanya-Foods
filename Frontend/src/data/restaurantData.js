export const RESTAURANT_INFO = {
  name: "Chaitanya Food Court",
  shortName: "CFC",
  tagline: "The Authentic Taste of India in Hyderabad",
  subTagline: "Awarded Best Andhra QSR of the Year 2023 • Bringing Back Desi Spice",
  establishedYear: 2008,
  award: "Awarded as the Best Andhra QSR of the Year by Restaurant Awards 2023",
  primaryPhone: "9618447733",
  secondaryPhone: "9618086669",
  email: "chaitanyafoodcourt.ofc@gmail.com",
  onlineOrderUrl: "https://order.chaitanyafoodcourt.com/",
  disclaimer: "Please note that we are not associated with any alcoholic entities.",
  socials: {
    facebook: "https://www.facebook.com/chaitanyafoodcourt",
    instagram: "https://www.instagram.com/chaitanyafoodcourt/",
    pinterest: "https://pin.it/J6p2TL6dI"
  },
  timings: {
    tiffins: "6:00 AM – 11:30 PM",
    dining: "11:30 AM – 11:30 PM",
    breakfastNonVeg: "7:30 AM – 11:30 AM",
    curryPoint: "11:30 AM – 3:30 PM & 7:00 PM – 10:30 PM"
  },
  promo: {
    badge: "Limited Time Offer",
    text: "Flat 25% Off on Online Orders!",
    code: "FLAT25"
  }
};

export const LOCATIONS = [
  {
    id: "kukatpally",
    name: "Kukatpally (Flagship)",
    isMain: true,
    address: "MIG 25-26, 3rd Phase, Near Malaysian Township Circle, JNTU - Hitech City Road, KPHB Colony, Hyderabad, Telangana 500085",
    phone: "9618447733",
    secondaryPhone: "9618086669",
    mapUrl: "https://maps.google.com/?q=Chaitanya+Food+Court+Kukatpally+Hyderabad",
    timings: "Tiffins: 6:00 AM – 11:30 PM | Dining: 11:30 AM – 11:30 PM",
    facilities: ["Pure Veg Tiffins (Ground Floor)", "Family Restaurant (1st Floor)", "Curry Point", "Deluxe Mess", "Pride Hotel Rooms"]
  },
  {
    id: "nizampet",
    name: "Nizampet",
    isMain: false,
    address: "GPR Multiplex, 2nd Floor, Nizampet Road, Hyderabad, Telangana 500090",
    phone: "9618447733",
    mapUrl: "https://maps.google.com/?q=Chaitanya+Food+Court+GPR+Multiplex+Nizampet",
    timings: "11:00 AM – 11:00 PM",
    facilities: ["Family Dining", "Takeaway & Delivery", "Air Conditioned"]
  },
  {
    id: "kondapur",
    name: "Kondapur",
    isMain: false,
    address: "1-55-199, Botanical Garden Rd, Sri Ram Nagar, Kondapur, Hyderabad, Telangana 500084",
    phone: "9618447733",
    mapUrl: "https://maps.google.com/?q=Chaitanya+Food+Court+Kondapur+Hyderabad",
    timings: "11:00 AM – 11:00 PM",
    facilities: ["Dine-in", "Takeaway Counter", "Quick Delivery"]
  },
  {
    id: "banjara-hills",
    name: "Banjara Hills",
    isMain: false,
    address: "Road No. 12, Banjara Hills, Hyderabad, Telangana 500034",
    phone: "9618447733",
    mapUrl: "https://maps.google.com/?q=Chaitanya+Food+Court+Banjara+Hills+Hyderabad",
    timings: "11:30 AM – 11:00 PM",
    facilities: ["Premium Ambience", "Family Seating", "Party Catering"]
  },
  {
    id: "aaa-mall",
    name: "AAA Mall (Ameerpet)",
    isMain: false,
    address: "Satyam Theatre Rd, Kumar Basti, Srinivasa Nagar, Ameerpet, Hyderabad, Telangana 500038",
    phone: "9618447733",
    mapUrl: "https://maps.google.com/?q=Chaitanya+Food+Court+AAA+Mall+Ameerpet+Hyderabad",
    timings: "10:30 AM – 11:00 PM",
    facilities: ["Mall Food Court", "Express Counter", "Combos & Meals"]
  }
];

export const SIGNATURE_DISHES = [
  {
    id: "sig-1",
    name: "Mint Chicken Biryani",
    category: "Biryani",
    isVeg: false,
    price: 429,
    image: "/assets/mint-biryani.png",
    badge: "Customer Favorite",
    rating: 4.9,
    description: "Tender chicken pieces slow-cooked with fresh organic mint leaves, saffron-infused long grain basmati rice, and authentic Andhra royal spices."
  },
  {
    id: "sig-2",
    name: "Avakaya Mutton Biryani",
    category: "Biryani",
    isVeg: false,
    price: 499,
    image: "/assets/avakaya-mutton.png",
    badge: "Heritage Special",
    rating: 4.9,
    description: "Juicy mutton cuts infused with traditional coastal Andhra spicy mango pickle (Avakaya), layered with aromatic dum basmati rice."
  },
  {
    id: "sig-3",
    name: "Golconda Prawns Biryani",
    category: "Biryani",
    isVeg: false,
    price: 599,
    image: "/assets/golconda-prawns.png",
    badge: "Chef's Signature",
    rating: 5.0,
    description: "Premium jumbo bay prawns marinated in Nizami spices, sautéed in desi ghee, and slow-dum cooked with fragrant saffron rice."
  },
  {
    id: "sig-4",
    name: "Ulavacharu Veg Biryani",
    category: "Biryani",
    isVeg: true,
    price: 359,
    image: "/assets/ulavacharu-veg.png",
    badge: "Pure Veg Delight",
    rating: 4.8,
    description: "Traditional slow-brewed horse gram extract (Ulavacharu) simmered with fresh garden vegetables and layered with aged basmati rice."
  },
  {
    id: "sig-5",
    name: "Chicken Sambar Rice",
    category: "Rice Specialty",
    isVeg: false,
    price: 239,
    priceLarge: 349,
    image: "/assets/sambar-rice.png",
    badge: "Legendary Dish",
    rating: 4.9,
    description: "Hyderabad's most famous comfort dish! Freshly tempered authentic home-style sambar rice tossed with spiced succulent chicken chunks."
  },
  {
    id: "sig-6",
    name: "Ulavacharu Chicken Biryani",
    category: "Biryani",
    isVeg: false,
    price: 429,
    image: "/assets/ulavacharu-chicken.png",
    badge: "Andhra Pride",
    rating: 4.9,
    description: "Tender chicken cooked in rich and tangy Ulavacharu broth, fused seamlessly with Hyderabadi aromatic dum basmati rice."
  },
  {
    id: "sig-7",
    name: "Ulavacharu Prawns Biryani",
    category: "Biryani",
    isVeg: false,
    price: 539,
    image: "/assets/ulavacharu-prawns.png",
    badge: "Coastal Classic",
    rating: 4.9,
    description: "Fresh coastal prawns delicately simmered in authentic Ulavacharu sauce and sealed with layers of steaming saffron rice."
  },
  {
    id: "sig-8",
    name: "Matka Kodi Pulav",
    category: "Biryani",
    isVeg: false,
    price: 419,
    priceLarge: 559,
    image: "/assets/matka-kodi.png",
    badge: "Claypot Special",
    rating: 4.9,
    description: "Village-style rustic chicken pulav prepared in unglazed earthen pots (matka) for an authentic smoky aroma and deep flavor profile."
  }
];

export const MENU_CATEGORIES = [
  { id: "all", name: "All Dishes" },
  { id: "biryanis", name: "Biryanis & Pulavs" },
  { id: "starters-chicken", name: "Chicken Starters" },
  { id: "starters-veg", name: "Veg Starters" },
  { id: "starters-seafood", name: "Fish & Prawns Starters" },
  { id: "starters-mutton", name: "Mutton Starters" },
  { id: "tandoori", name: "Tandoori Kebabs" },
  { id: "breakfast", name: "South Indian Breakfast (Tiffins)" },
  { id: "curries", name: "Curries & Indian Breads" },
  { id: "rice-specials", name: "Rice & Sambar Specialties" },
  { id: "chinese", name: "Chinese & Noodles" },
  { id: "desserts-drinks", name: "Desserts & Beverages" },
  { id: "pan", name: "Jagapathi Pan" }
];

export const ALL_MENU_ITEMS = [
  // Biryanis
  { id: "biry-1", name: "Chicken Dhum Biryani", category: "biryanis", price: 339, isVeg: false, popular: true, description: "Authentic Hyderabadi slow-dum basmati rice cooked with succulent marinated chicken and saffron." },
  { id: "biry-2", name: "Fried Piece Chicken Biryani", category: "biryanis", price: 379, isVeg: false, popular: true, description: "Classic spicy Andhra fried chicken pieces served over aromatic biryani rice." },
  { id: "biry-3", name: "Mint Chicken Biryani", category: "biryanis", price: 429, isVeg: false, popular: true, image: "/assets/mint-biryani.png", description: "Infused with refreshing crushed garden mint and royal spices." },
  { id: "biry-4", name: "Avakaya Chicken Biryani", category: "biryanis", price: 399, isVeg: false, popular: false, description: "Spicy and tangy Andhra mango pickle blended with tender chicken and basmati." },
  { id: "biry-5", name: "Ulava Charu Chicken Biryani", category: "biryanis", price: 429, isVeg: false, popular: true, image: "/assets/ulavacharu-chicken.png", description: "Rich and wholesome Ulavacharu broth slow-dum cooked with chicken." },
  { id: "biry-6", name: "Spl Ulava Charu Chicken Biryani", category: "biryanis", price: 459, isVeg: false, popular: false, description: "Extra rich boneless chicken pieces steeped in concentrated Ulavacharu essence." },
  { id: "biry-7", name: "Avakaya Mutton Biryani", category: "biryanis", price: 499, isVeg: false, popular: true, image: "/assets/avakaya-mutton.png", description: "Prime tender mutton infused with Andhra's prized fiery mango pickle." },
  { id: "biry-8", name: "Special Mutton Biryani", category: "biryanis", price: 459, isVeg: false, popular: true, description: "Slow-braised spiced tender mutton layered with long aromatic grains." },
  { id: "biry-9", name: "Mutton Keema Biryani", category: "biryanis", price: 479, isVeg: false, popular: false, description: "Minced lamb cooked with green chillies, mint, and whole spices." },
  { id: "biry-10", name: "Ulava Charu Mutton Biryani (BL)", category: "biryanis", price: 489, isVeg: false, popular: true, description: "Boneless tender mutton in thick Ulavacharu gravy layered with biryani rice." },
  { id: "biry-11", name: "Golconda Prawns Biryani", category: "biryanis", price: 599, isVeg: false, popular: true, image: "/assets/golconda-prawns.png", description: "Royal jumbo prawns tossed in spicy coastal masala and saffron dum rice." },
  { id: "biry-12", name: "Ulavacharu Prawns Biryani", category: "biryanis", price: 539, isVeg: false, popular: false, image: "/assets/ulavacharu-prawns.png", description: "Fresh bay prawns infused in rich horse gram broth with fragrant basmati." },
  { id: "biry-13", name: "Fish Biryani", category: "biryanis", price: 479, isVeg: false, popular: false, description: "Marinated fish fillets gently layered with spiced basmati rice." },
  { id: "biry-14", name: "Matka Kodi Pulav (Small / Large)", category: "biryanis", price: 419, priceLarge: 559, isVeg: false, popular: true, image: "/assets/matka-kodi.png", description: "Rustic country chicken pulav prepared in earthen claypots." },
  { id: "biry-15", name: "Potlam Chicken Biryani", category: "biryanis", price: 459, isVeg: false, popular: true, description: "Aromatic chicken biryani wrapped and steamed in an egg omelette pouch." },
  { id: "biry-16", name: "Potlam Mutton Biryani", category: "biryanis", price: 559, isVeg: false, popular: false, description: "Spiced mutton biryani steamed inside a soft savory egg parcel." },
  { id: "biry-17", name: "Lollipop Chicken Biryani", category: "biryanis", price: 439, isVeg: false, popular: true, description: "Crispy chicken lollipops served over steaming hot biryani rice." },
  { id: "biry-18", name: "Ulavacharu Veg Biryani", category: "biryanis", price: 359, isVeg: true, popular: true, image: "/assets/ulavacharu-veg.png", description: "Garden vegetables simmered in tangy horse gram reduction and fragrant rice." },
  { id: "biry-19", name: "Avakaya Veg Biryani", category: "biryanis", price: 329, isVeg: true, popular: false, description: "Zesty Avakaya mango pickle tossed with fresh vegetables and basmati." },
  { id: "biry-20", name: "Paneer Biryani", category: "biryanis", price: 319, isVeg: true, popular: true, description: "Cottage cheese cubes marinated in tandoori yogurt spice blend." },
  { id: "biry-21", name: "Mushroom Biryani", category: "biryanis", price: 319, isVeg: true, popular: false, description: "Fresh button mushrooms tossed with herbs and fragrant basmati." },
  { id: "biry-22", name: "Veg Biryani / Pulao", category: "biryanis", price: 299, isVeg: true, popular: false, description: "Traditional spiced vegetable rice with green peas, carrots and beans." },
  { id: "biry-23", name: "Egg Biryani", category: "biryanis", price: 339, isVeg: false, popular: false, description: "Pan-roasted boiled eggs with spicy biryani masala and basmati rice." },

  // Starters - Chicken
  { id: "sc-1", name: "Chicken Manchurian", category: "starters-chicken", price: 429, isVeg: false, popular: true, image: "/assets/chicken-manchuria.png", description: "Crispy fried chicken balls tossed in garlic, green chilli, soy and ginger." },
  { id: "sc-2", name: "Chilly Chicken / Chicken 65", category: "starters-chicken", price: 429, isVeg: false, popular: true, description: "Crispy battered chicken tossed with spicy curry leaves and Andhra green chillies." },
  { id: "sc-3", name: "Chicken Lollipop", category: "starters-chicken", price: 439, isVeg: false, popular: true, description: "Frenched chicken wings seasoned and deep fried to golden crispness." },
  { id: "sc-4", name: "Pepper Chicken", category: "starters-chicken", price: 469, isVeg: false, popular: false, description: "Dry roasted black pepper chicken sautéed with shallots and curry leaves." },
  { id: "sc-5", name: "Kaju Chicken", category: "starters-chicken", price: 479, isVeg: false, popular: true, description: "Crispy chicken tossed with roasted golden cashews in a rich spicy coating." },
  { id: "sc-6", name: "Pachi Mirapa Kodi (BL)", category: "starters-chicken", price: 459, isVeg: false, popular: true, description: "Spicy green chilli chicken preparation with fiery native Andhra flavours." },
  { id: "sc-7", name: "Ulavacharu Chicken Fry", category: "starters-chicken", price: 479, isVeg: false, popular: true, description: "Crispy chicken coated with concentrated Ulavacharu masala reduction." },
  { id: "sc-8", name: "Chicken Majestic", category: "starters-chicken", price: 469, isVeg: false, popular: true, description: "Shredded chicken strips cooked with curd, mint, and fresh coriander." },
  { id: "sc-9", name: "Chicken 555", category: "starters-chicken", price: 469, isVeg: false, popular: false, description: "Tangy chicken fingers with a punchy chilli garlic profile." },
  { id: "sc-10", name: "Mint Chicken Fry", category: "starters-chicken", price: 509, isVeg: false, popular: true, description: "Tender chicken pieces fried with rich garden mint puree and spices." },
  { id: "sc-11", name: "Andhra Chicken Fry", category: "starters-chicken", price: 399, isVeg: false, popular: false, description: "Rustic country-style roasted chicken in traditional Andhra spice powder." },
  { id: "sc-12", name: "Natu Kodi Vepudu", category: "starters-chicken", price: 469, isVeg: false, popular: true, description: "Authentic free-range country chicken pan fried with rustic village spices." },
  { id: "sc-13", name: "Chicken Drum Sticks", category: "starters-chicken", price: 429, isVeg: false, popular: false, description: "Crispy drumsticks tossed in hot schezwan garlic sauce." },

  // Starters - Veg
  { id: "sv-1", name: "Veg Manchurian", category: "starters-veg", price: 309, isVeg: true, popular: true, description: "Crispy vegetable dumplings tossed in tangy soy and ginger sauce." },
  { id: "sv-2", name: "Chilly Veg / Veg 65 / Aloo 65", category: "starters-veg", price: 309, isVeg: true, popular: false, description: "Battered vegetables fried crisp with chillies and curry leaves." },
  { id: "sv-3", name: "Gobi Manchurian / Crispy Veg", category: "starters-veg", price: 309, isVeg: true, popular: true, description: "Crisp cauliflower florets wok-tossed with aromatics." },
  { id: "sv-4", name: "Paneer Manchurian", category: "starters-veg", price: 359, isVeg: true, popular: false, description: "Soft cottage cheese cubes in savory Indo-Chinese sauce." },
  { id: "sv-5", name: "Paneer Majestic", category: "starters-veg", price: 359, isVeg: true, popular: true, description: "Crispy paneer fingers infused with yoghurt, mint and coriander." },
  { id: "sv-6", name: "Chilly Paneer / Paneer 65", category: "starters-veg", price: 359, isVeg: true, popular: true, description: "Paneer tossed with capsicum, onion and zesty sauces." },
  { id: "sv-7", name: "Mushroom Pepper Salt", category: "starters-veg", price: 359, isVeg: true, popular: false, description: "Crisp button mushrooms seasoned with cracked black pepper and sea salt." },
  { id: "sv-8", name: "Baby Corn Manchurian / Baby Corn 65", category: "starters-veg", price: 359, isVeg: true, popular: false, description: "Tender golden baby corn tossed in spicy seasonings." },
  { id: "sv-9", name: "Golden Fried Baby Corn", category: "starters-veg", price: 379, isVeg: true, popular: false, description: "Crisp corn spears served with sweet chilli dip." },
  { id: "sv-10", name: "Veg Spring Rolls", category: "starters-veg", price: 309, isVeg: true, popular: false, description: "Crispy golden pastry rolls filled with shredded seasonal vegetables." },

  // Starters - Seafood & Mutton
  { id: "sf-1", name: "Apollo Fish", category: "starters-seafood", price: 479, isVeg: false, popular: true, description: "Hyderabadi legendary boneless fish fillets tossed with curd, curry leaves and chillies." },
  { id: "sf-2", name: "Ulavacharu Fish Fry (BL)", category: "starters-seafood", price: 529, isVeg: false, popular: true, description: "Boneless fish slices crisped with concentrated Ulavacharu marinade." },
  { id: "sf-3", name: "Full Fish Roast (Murrel - Korameenu)", category: "starters-seafood", price: 579, isVeg: false, popular: true, description: "Whole fresh Korameenu fish pan-roasted with spicy coastal tawa masala." },
  { id: "sf-4", name: "Loose Fried Prawns", category: "starters-seafood", price: 479, isVeg: false, popular: true, description: "Crispy batter-fried prawns tossed with sliced chillies and spring onion." },
  { id: "sf-5", name: "Andhra Prawns Vepudu", category: "starters-seafood", price: 479, isVeg: false, popular: false, description: "Spicy dry-roasted coastal prawns with onions, ginger and curry leaves." },
  { id: "sf-6", name: "Ulava Charu Prawns Fry", category: "starters-seafood", price: 539, isVeg: false, popular: true, description: "Juicy prawns sautéed in tangy, thick Ulavacharu reduction." },
  { id: "sm-1", name: "Pepper Mutton", category: "starters-mutton", price: 479, isVeg: false, popular: true, description: "Tender boneless mutton pieces coated with freshly crushed black peppercorns." },
  { id: "sm-2", name: "Andhra Mutton Fry (BL)", category: "starters-mutton", price: 479, isVeg: false, popular: true, description: "Succulent mutton roast prepared with spicy traditional Andhra garam masala." },
  { id: "sm-3", name: "Ulavacharu Mutton Fry (BL)", category: "starters-mutton", price: 529, isVeg: false, popular: true, description: "Boneless mutton fried with rich horse gram extract and browned onions." },

  // Tandoori
  { id: "td-1", name: "Paneer Tikka", category: "tandoori", price: 379, isVeg: true, popular: true, description: "Skewered cottage cheese cubes char-grilled in a clay tandoor." },
  { id: "td-2", name: "Chicken Tikka", category: "tandoori", price: 429, isVeg: false, popular: true, description: "Boneless chicken marinated in tandoori spices and roasted to perfection." },
  { id: "td-3", name: "Murgh Malai Tikka", category: "tandoori", price: 439, isVeg: false, popular: true, description: "Creamy, tender chicken chunks marinated in cream, cheese and mild spices." },
  { id: "td-4", name: "Tangdi Kabab (2pc / 4pc)", category: "tandoori", price: 329, priceLarge: 579, isVeg: false, popular: false, description: "Juicy chicken drumsticks marinated and roasted in the clay tandoor." },
  { id: "td-5", name: "Tandoori Chicken (Half / Full)", category: "tandoori", price: 369, priceLarge: 649, isVeg: false, popular: true, description: "Whole chicken marinated with Kashmiri chillies and yogurt, roasted on hot coals." },
  { id: "td-6", name: "Chicken Reshmi Kabab", category: "tandoori", price: 469, isVeg: false, popular: false, description: "Silky minced chicken patties blended with cashew paste and herbs." },

  // South Indian Breakfast (Tiffins)
  { id: "bf-1", name: "Steaming Hot Idly (Plate)", category: "breakfast", price: 59, isVeg: true, popular: true, description: "Soft, fluffy steamed rice cakes served with spicy sambar and fresh chutneys." },
  { id: "bf-2", name: "Sambar Idly", category: "breakfast", price: 69, isVeg: true, popular: true, description: "Piping hot idlis submerged in rich, aromatic vegetable sambar." },
  { id: "bf-3", name: "Crispy Medu Wada", category: "breakfast", price: 79, isVeg: true, popular: true, description: "Crispy golden lentil doughnuts seasoned with cumin and curry leaves." },
  { id: "bf-4", name: "Mysore Bajji", category: "breakfast", price: 79, isVeg: true, popular: true, description: "Crisp outside, fluffy inside traditional fried batter fritters." },
  { id: "bf-5", name: "Poori with Masala", category: "breakfast", price: 79, isVeg: true, popular: true, description: "Fluffy puffed pooris served with spiced potato curry." },
  { id: "bf-6", name: "Plain Dosa", category: "breakfast", price: 69, isVeg: true, popular: false, description: "Golden crispy thin crepe made from fermented rice and lentil batter." },
  { id: "bf-7", name: "Onion Dosa", category: "breakfast", price: 79, isVeg: true, popular: false, description: "Crispy dosa topped with finely chopped caramelized onions." },
  { id: "bf-8", name: "Masala Dosa", category: "breakfast", price: 89, isVeg: true, popular: true, description: "Stuffed with seasoned spiced potato masala, served with chutneys." },
  { id: "bf-9", name: "Ghee Karam Dosa", category: "breakfast", price: 79, isVeg: true, popular: true, description: "Smothered with pure desi ghee and spicy red chilli garlic powder." },
  { id: "bf-10", name: "Ragi Butter Dosa", category: "breakfast", price: 99, isVeg: true, popular: false, description: "Nutritious finger millet crepe roasted with fresh creamy butter." },
  { id: "bf-11", name: "Upma Pesarattu", category: "breakfast", price: 105, isVeg: true, popular: true, description: "Andhra classic whole green gram crepe folded over savory semolina upma." },
  { id: "bf-12", name: "Pongal", category: "breakfast", price: 89, isVeg: true, popular: false, description: "Comforting ghee-laden rice and moong dal porridge tempered with black pepper and cashews." },
  { id: "bf-13", name: "Uggani with Mirchi Bajji", category: "breakfast", price: 75, isVeg: true, popular: true, description: "Rayalaseema specialty puffed rice upma served with hot stuffed chilli bajji." },
  { id: "bf-14", name: "Kodi Kura with Dosa / Poori", category: "breakfast", price: 189, isVeg: false, popular: true, description: "Authentic spicy Andhra chicken curry served with crisp dosas or fluffy pooris." },
  { id: "bf-15", name: "Talakaya Mamsam with Dosa / Poori", category: "breakfast", price: 219, isVeg: false, popular: true, description: "Traditional goat head curry combo with choice of dosa, poori or wada." },
  { id: "bf-16", name: "Natukodi Kura with Dosa / Poori", category: "breakfast", price: 249, isVeg: false, popular: true, description: "Country chicken curry with hot tiffins, a weekend morning favourite." },
  { id: "bf-17", name: "Mutton Kheema with Dosa / Poori", category: "breakfast", price: 289, isVeg: false, popular: true, description: "Spicy minced mutton gravy served hot with your favourite tiffin." },

  // Rice & Sambar Specials
  { id: "rs-1", name: "Chicken Sambar Rice (Small / Large)", category: "rice-specials", price: 239, priceLarge: 349, isVeg: false, popular: true, image: "/assets/sambar-rice.png", description: "The iconic dish Chaitanya is famous for across Hyderabad!" },
  { id: "rs-2", name: "Traditional Sambar Rice (Small / Large)", category: "rice-specials", price: 149, priceLarge: 249, isVeg: true, popular: true, description: "Homestyle tempered sambar blended with steaming rice and ghee." },
  { id: "rs-3", name: "Curd Rice", category: "rice-specials", price: 119, isVeg: true, popular: true, description: "Creamy seasoned yoghurt rice tempered with mustard, ginger and pomegranate." },
  { id: "rs-4", name: "Special Chicken Fried Rice", category: "rice-specials", price: 359, isVeg: false, popular: false, description: "Wok tossed basmati with shredded chicken, eggs, and seasonings." },
  { id: "rs-5", name: "Veg Fried Rice", category: "rice-specials", price: 259, isVeg: true, popular: false, description: "Classic Chinese wok fried rice with diced garden vegetables." },

  // Curries & Indian Breads
  { id: "cr-1", name: "Butter Chicken", category: "curries", price: 429, isVeg: false, popular: true, description: "Tandoori chicken simmered in rich creamy tomato, butter and fenugreek gravy." },
  { id: "cr-2", name: "Chicken Tikka Masala", category: "curries", price: 429, isVeg: false, popular: true, description: "Charcoal roasted chicken tikka cooked in spicy onion tomato masala." },
  { id: "cr-3", name: "Andhra Chicken Curry", category: "curries", price: 389, isVeg: false, popular: true, description: "Fiery regional gravy with poppy seeds, coriander and green chillies." },
  { id: "cr-4", name: "Ulavacharu Chicken Curry", category: "curries", price: 479, isVeg: false, popular: true, description: "Chicken slow cooked in dense horse gram sauce with roasted spices." },
  { id: "cr-5", name: "Natu Kodi Curry", category: "curries", price: 449, isVeg: false, popular: true, description: "Country chicken cooked in rustic village-style spicy broth." },
  { id: "cr-6", name: "Andhra Mutton Curry", category: "curries", price: 489, isVeg: false, popular: true, description: "Tender goat meat slow-simmered in aromatic roasted Andhra spices." },
  { id: "cr-7", name: "Mutton Kheema Curry", category: "curries", price: 539, isVeg: false, popular: false, description: "Spicy minced mutton cooked with fresh peas and ground garam masala." },
  { id: "cr-8", name: "Paneer Butter Masala", category: "curries", price: 379, isVeg: true, popular: true, description: "Velvety cottage cheese in rich tomato cream sauce." },
  { id: "cr-9", name: "Dal Tadka", category: "curries", price: 299, isVeg: true, popular: true, description: "Yellow lentils tempered with ghee, garlic, cumin, and dry red chillies." },
  { id: "cr-10", name: "Kaju Paneer Curry", category: "curries", price: 399, isVeg: true, popular: true, description: "Roasted cashew nuts and soft paneer cubes in royal creamy gravy." },
  { id: "cr-11", name: "Butter Naan / Garlic Naan", category: "curries", price: 70, isVeg: true, popular: true, description: "Clay oven baked leavened bread brushed generously with butter." },
  { id: "cr-12", name: "Tandoori Roti / Butter Roti", category: "curries", price: 50, priceLarge: 60, isVeg: true, popular: false, description: "Whole wheat bread baked fresh in the clay tandoor." },

  // Chinese & Noodles
  { id: "ch-1", name: "Veg Soft Noodles / Fried Noodles", category: "chinese", price: 259, isVeg: true, popular: false, description: "Wok tossed hakka noodles with crunchy shredded vegetables." },
  { id: "ch-2", name: "Chicken Soft Noodles", category: "chinese", price: 299, isVeg: false, popular: true, description: "Stir-fried noodles with chicken strips, spring onion and soy." },
  { id: "ch-3", name: "Chicken Schezwan Noodles", category: "chinese", price: 349, isVeg: false, popular: true, description: "Spicy Schezwan noodles with garlic, chilli oil and chicken." },
  { id: "ch-4", name: "Chicken Manchurian (Wet Gravy)", category: "chinese", price: 399, isVeg: false, popular: true, description: "Chicken dumplings in thick savory garlic coriander gravy." },

  // Desserts & Drinks
  { id: "ds-1", name: "Gulab Jamun (2 pcs)", category: "desserts-drinks", price: 79, isVeg: true, popular: true, description: "Deep fried milk solids soaked in rose cardamom sugar syrup." },
  { id: "ds-2", name: "Double Ka Meetha", category: "desserts-drinks", price: 79, isVeg: true, popular: true, description: "Royal Hyderabadi bread pudding enriched with saffron milk and nuts." },
  { id: "ds-3", name: "Qurbani Ka Meetha", category: "desserts-drinks", price: 169, isVeg: true, popular: true, description: "Classic Hyderabadi delicacy made from stewed apricots, topped with almonds." },
  { id: "ds-4", name: "Gulab Jamun with Ice Cream", category: "desserts-drinks", price: 169, isVeg: true, popular: true, description: "Hot gulab jamun served with cold rich vanilla ice cream scoop." },
  { id: "ds-5", name: "Apricot Delight", category: "desserts-drinks", price: 129, isVeg: true, popular: true, description: "Layers of sponge cake, apricot puree and whipped fresh cream." },
  { id: "ds-6", name: "Sweet Lassi / Salt Lassi", category: "desserts-drinks", price: 99, isVeg: true, popular: true, description: "Traditional thick churned yogurt drink served chilled." },
  { id: "ds-7", name: "Mango / Pista Lassi", category: "desserts-drinks", price: 169, isVeg: true, popular: true, description: "Thick creamy yogurt whipped with real mango pulp or ground pistachios." },
  { id: "ds-8", name: "Fresh Lime Soda (Sweet / Salt)", category: "desserts-drinks", price: 79, isVeg: true, popular: false, description: "Refreshing bubbly lime soda made with fresh squeezed lemons." },
  { id: "ds-9", name: "Authentic Filter Coffee", category: "desserts-drinks", price: 40, isVeg: true, popular: true, description: "Traditional South Indian frothy chicory-blended filter kaapi." },

  // Jagapathi Pan
  { id: "pan-1", name: "Krishna District Famous Jagapathi Pan (70 Years Old)", category: "pan", price: 50, isVeg: true, popular: true, description: "The authentic after-meal sweet pan from Krishna district, crafted with 70 years of legendary recipe." }
];

export const GALLERY_IMAGES = [
  { id: "g1", title: "Signature Mint Biryani", category: "biryanis", src: "/assets/signature-mint-biryani.png", caption: "Slow-dum cooked Mint Chicken Biryani with fragrant spices" },
  { id: "g2", title: "Andhra Tiffin Specialties", category: "dishes", src: "/assets/andhra-thali.jpg", caption: "Traditional Andhra banana leaf thali with sambar, curries and chutneys" },
  { id: "g3", title: "Family Dining Ambience", category: "ambience", src: "/assets/restaurant-interior.jpg", caption: "Spacious and comfortable dining at Chaitanya Food Court" },
  { id: "g4", title: "Crispy Chicken Manchurian", category: "dishes", src: "/assets/chicken-manchuria.png", caption: "Freshly prepared Indo-Chinese starters" },
  { id: "g5", title: "Avakaya Mutton Biryani", category: "biryanis", src: "/assets/signature-avakaya-biryani.png", caption: "Simmered in clay pots and hand-ground spices" },
  { id: "g6", title: "Festive Banquet & Catering", category: "catering", src: "/assets/catering-hero.jpg", caption: "Premium catering setups for weddings and celebrations" },
  { id: "g7", title: "Signature Chicken Sambar Rice", category: "dishes", src: "/assets/sambar-rice.png", caption: "Well known across Hyderabad for authentic Sambar Rice" },
  { id: "g8", title: "Golconda Prawns Biryani", category: "biryanis", src: "/assets/signature-prawns-biryani.png", caption: "Royal jumbo prawns with Hyderabadi saffron dum rice" },
  { id: "g9", title: "Ulavacharu Delicacies", category: "biryanis", src: "/assets/ulavacharu-chicken.png", caption: "Made headlines for the best Ulavacharu recipes in Hyderabad" },
  { id: "g10", title: "Celebrations & Group Dining", category: "ambience", src: "/assets/gallery-7.jpg", caption: "Welcoming warm dining environment for friends and family" },
  { id: "g11", title: "Fresh Starters & Tandoor", category: "dishes", src: "/assets/gallery-8.jpg", caption: "Char-grilled and pan-tossed appetizers hot from the kitchen" },
  { id: "g12", title: "Krishna District Jagapathi Pan", category: "dishes", src: "/assets/about-dish.png", caption: "70-year legacy sweet pan to complete your royal meal" }
];


export const CATERING_SERVICES = [
  {
    title: "Weddings & Receptions",
    icon: "HeartHandshake",
    description: "Grand multi-course feast menus with live counters, royal biryani stations, and traditional welcome beverages."
  },
  {
    title: "Engagements & Sangeet",
    icon: "Sparkles",
    description: "Vibrant live food stalls, chaat & starter counters, and fusion delights tailored to your celebratory theme."
  },
  {
    title: "Housewarming & Get-Togethers",
    icon: "Home",
    description: "Homestyle authentic Andhra and Telangana meals, pure veg satvik spreads or rich non-veg banquets."
  },
  {
    title: "Birthday & Anniversary Parties",
    icon: "Cake",
    description: "Crowd-pleaser menus featuring biryanis, starters, noodles, and decadent Hyderabadi desserts."
  },
  {
    title: "Cradle Ceremonies & Poojas",
    icon: "Baby",
    description: "Specialized traditional vegetarian cooking, auspicious dishes, and courteous serving staff."
  },
  {
    title: "Corporate Lunches & Conferences",
    icon: "Briefcase",
    description: "Punctual, hygienic, executive buffet arrangements and customized box meals for seamless corporate events."
  }
];

export const BUILDING_FLOORS = [
  {
    floor: "Ground Floor",
    title: "Chaitanya Tiffins (Pure Veg)",
    timings: "7:00 AM – 11:00 PM",
    description: "Piping hot South Indian tiffins including idlis, dosas, wadas, and filter coffee in a quick-service clean setup."
  },
  {
    floor: "First Floor",
    title: "Exclusive Breakfast (Veg & Non-Veg)",
    timings: "7:30 AM – 11:30 AM",
    description: "Unique breakfast combinations like Kodi Kura Dosa, Talakaya Mamsam Wada, Natukodi Kura & Kheema combos."
  },
  {
    floor: "First Floor",
    title: "Family Restaurant (Veg & Non-Veg)",
    timings: "11:30 AM – 11:00 PM",
    description: "Lavish air-conditioned family dining serving our signature biryanis, tandoor, curries, and regional Andhra feasts."
  },
  {
    floor: "Adjacent Lane",
    title: "Curry Point & Deluxe Mess",
    timings: "11:30 AM – 3:30 PM & 7:00 PM – 10:30 PM",
    description: "Daily fresh curry takeaway counter and traditional unlimited meals mess for homestyle hearty dining."
  },
  {
    floor: "Adjacent Lane",
    title: "Chaitanya Pride Hotel Rooms",
    timings: "Check-in: 12:00 PM | Check-out: 11:00 AM",
    description: "Comfortable, modern guest rooms for visitors, families, and business travelers near JNTU / Hitech City."
  }
];

export const PHYSICAL_MENU_PAGES = [
  {
    page: 1,
    title: "Breakfast & Tiffins Menu",
    subtitle: "Veg & Non-Veg Breakfast Combos, Tiffins & Beverages",
    src: "/assets/menu-page-1.jpg"
  },
  {
    page: 2,
    title: "Starters & Chinese Menu",
    subtitle: "Soups, Veg & Non-Veg Starters, Tandoor & Noodles",
    src: "/assets/menu-page-2.png"
  },
  {
    page: 3,
    title: "Biryanis & Curries Menu",
    subtitle: "Famous Hyderabadi & Andhra Biryanis, Curries & Breads",
    src: "/assets/menu-page-3.jpg"
  },
  {
    page: 4,
    title: "Restaurant Guide & Desserts",
    subtitle: "Desserts, Milkshakes, Floor Timings & Jagapathi Pan",
    src: "/assets/menu-page-4.jpg"
  }
];
