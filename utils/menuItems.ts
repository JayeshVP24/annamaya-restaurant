
export interface items {
    item: string;
    price: string;
}

const menu: {
    starters: items[];
    mainCourse: items[];
    desserts: items[];
} = {
    starters: [
        {
            item: "Manchow Soup",
            price: "170",
        },
        {
            item: "Sweet Corn Soup",
            price: "170",
        },
        {
            item: "Cream of Tomato Soup",
            price: "170",
        },
        {
            item: "Veg. Clear Soup",
            price: "170",
        },
        {
            item: "Seven Treasure Soup",
            price: "170",
        },
        {
            item: "Eight Treasure Soup",
            price: "170",
        },
        {
            item: "Hot & Sour Soup",
            price: "170",
        },
        {
            item: "Tom Yum Soup",
            price: "170",
        },
        {
            item: "Minestrone Soup",
            price: "170",
        },
        {
            item: "Cream of Broccoli",
            price: "180",
        },
        {
            item: "Mushroom Cappuccino",
            price: "190",
        },
        {
            item: "Tomato Basil Soup",
            price: "170",
        },
        {
            item: "Roasted Papad",
            price: "40",
        },
        {
            item: "Fried Papad",
            price: "50",
        },
        {
            item: "Masala Papad",
            price: "70",
        },
        {
            item: "Khichiya Masala Papad Fried",
            price: "120",
        },
        {
            item: "Khichiya Masala Papad Roasted",
            price: "120",
        },
        {
            item: "Khichiya Papad Roasted / Fried",
            price: "90",
        },
        {
            item: "Extra Butter / Cheese",
            price: "30",
        },
        {
            item: "Russian Salad",
            price: "190",
        },
        {
            item: "Greek Salad",
            price: "190",
        },
        {
            item: "Mexican Salad",
            price: "190",
        },
        {
            item: "Pasta Salad",
            price: "170",
        },
        {
            item: "Paneer Tikka Salad",
            price: "200",
        },
        {
            item: "Slice Green Salad",
            price: "100",
        },
        {
            item: "Avacado Feta Salad",
            price: "220",
        },
        {
            item: "Vegetable in Choice of Sauce",
            price: "260",
        },
        {
            item: "Paneer Chilli Dry",
            price: "280",
        },
        {
            item: "Spring Rolls",
            price: "230",
        },
        {
            item: "Crispy Veg",
            price: "250",
        },
        {
            item: "Classic Manchurian Dry",
            price: "230",
        },
        {
            item: "Shanghai Paneer",
            price: "280",
        },
        {
            item: "Paneer Crispy",
            price: "280",
        },
        {
            item: "Crispy Potato in Spring Onion",
            price: "210",
        },
        {
            item: "Paneer Satay",
            price: "280",
        },
        {
            item: "Phonese Paneer",
            price: "280",
        },
        {
            item: "Tapanese Paneer",
            price: "280",
        },
        {
            item: "Paneer in Lemon Grass",
            price: "230",
        },
        {
            item: "Crispy Corn Waterchestnut",
            price: "240",
        },
        {
            item: "Threaded Paneer",
            price: "280",
        },
        {
            item: "Summer Rolls",
            price: "200",
        },
        {
            item: "Crispy Fried Wonton",
            price: "240",
        },
        {
            item: "Kaj Methi Roll",
            price: "280",
        },
        {
            item: "Zilmill Kebab",
            price: "270",
        },
        {
            item: "Paneer Desi Tadka",
            price: "270",
        },
        {
            item: "Veg. Hara Bhara Kebab",
            price: "230",
        },
        {
            item: "Hariyali Paneer Tikka",
            price: "260",
        },
        {
            item: "Malai Paneer Tikka",
            price: "270",
        },
        {
            item: "Veg. Shikampuri Kebab",
            price: "250",
        },
        {
            item: "Hariyali Cheese Paneer Seekh Kebab",
            price: "275",
        },
        {
            item: "Tiranga Tikka",
            price: "330",
        },
        {
            item: "Cheese Chilli Seekh Kabab",
            price: "290",
        },
        {
            item: "Tandoori Paneer Tikka Dry",
            price: "260",
        },
        {
            item: "Paneer Achari Tikka",
            price: "270",
        },
        {
            item: "Baby Corn Tikka",
            price: "230",
        },
        {
            item: "Mushroom Tikka",
            price: "250",
        },
        {
            item: "Lahori Paneer Seekh Kebab",
            price: "260",
        },
        {
            item: "Paneer Keshariya Tikka",
            price: "280",
        },
        {
            item: "Mushroom Galawati Kebab",
            price: "250",
        },
        {
            item: "Arrabiata Pasta",
            price: "380",
        },
        {
            item: "Creamy Mushroom Alfredo",
            price: "380",
        },
        {
            item: "Mac & Cheese",
            price: "390",
        },
        {
            item: "Creamy Pesto Pasta",
            price: "390",
        },
        {
            item: "Veg. Paprika",
            price: "380",
        },
        {
            item: "Lasagna",
            price: "400",
        },
        {
            item: "Cheese Fondue",
            price: "400",
        },
        {
            item: "Vegetable Au-gratin",
            price: "350",
        },
        {
            item: "Pesto Lasagna",
            price: "400",
        },
        {
            item: "Cannelloni",
            price: "400",
        },
        {
            item: "Spinach Fromage",
            price: "380",
        },
        {
            item: "Risotto (Mushroom / Pesto)",
            price: "380",
        },
        {
            item: "Arancini",
            price: "300",
        },
        {
            item: "Ravioli",
            price: "380",
        },
        {
            item: "Tacos with Beans and Salad",
            price: "250",
        },
        {
            item: "Nachos with Cheese Sauce & Salsa",
            price: "350",
        },
        {
            item: "Enchiladas",
            price: "400",
        },
        {
            item: "Mexican Ragout",
            price: "380",
        },
        {
            item: "Quesadillas",
            price: "300",
        },
        {
            item: "Jalapeno Cheese Poppers",
            price: "300",
        },
        {
            item: "Cheese Corn Balls",
            price: "300",
        },
        {
            item: "Burrito",
            price: "300",
        },
        {
            item: "Aloo Tikka Burger",
            price: "170",
        },
        {
            item: "Galawait Mushroom Burger",
            price: "170",
        },
        {
            item: "Black Bean Patty Burger",
            price: "170",
        },
        {
            item: "Mixed Veggie Burger",
            price: "170",
        },
        {
            item: "Soya Tikka Burger",
            price: "170",
        },
        {
            item: "Aloo Tikka Roll",
            price: "180",
        },
        {
            item: "Tandoori Paneer Tikka Roll",
            price: "190",
        },
        {
            item: "Tandoori Mushroom Tikka Roll",
            price: "190",
        },
        {
            item: "Paneer Chilli Roll",
            price: "190",
        },
        {
            item: "Manchorian Roll",
            price: "180",
        },
        {
            item: "Soya Chaap Roll",
            price: "180",
        },
        {
            item: "Paneer Chilli Sizzler",
            price: "500",
        },
        {
            item: "Mexican Sizzler",
            price: "500",
        },
        {
            item: "Tandoori Paneer Tikka Sizzler",
            price: "500",
        },
        {
            item: "Paneer Shashlik Sizzler",
            price: "500",
        },
        {
            item: "Manchurian Sizzler",
            price: "500",
        },
        {
            item: "Italian Sizzler",
            price: "500",
        },
    ],
    mainCourse: [
        {
            item: "Veg. Zilmil",
            price: "240",
        },
        {
            item: "Veg. / Paneer Kolhapuri",
            price: "260 / 270",
        },
        {
            item: "Veg. / Paneer Kadai",
            price: "250 / 260",
        },
        {
            item: "Veg. / Paneer Handi",
            price: "260 / 270",
        },
        {
            item: "Veg. / Paneer Tawa",
            price: "260 / 270",
        },
        {
            item: "Veg. Maratha",
            price: "260",
        },
        {
            item: "Veg. Kofta Masala / Malai Kofta",
            price: "260 / 300",
        },
        {
            item: "Veg. Chilli Milli",
            price: "280",
        },
        {
            item: "Veg. Makhanwala",
            price: "260",
        },
        {
            item: "Veg. Garden Fresh",
            price: "310",
        },
        {
            item: "Veg. Hangama",
            price: "310",
        },
        {
            item: "Mushroom Handi",
            price: "280",
        },
        {
            item: "Paneeer Mushroom Baby Corn Masala",
            price: "290",
        },
        {
            item: "Veg. Makhmali",
            price: "300",
        },
        {
            item: "Dum Aloo Punjabi",
            price: "260",
        },
        {
            item: "Chana Amritsarwala",
            price: "260",
        },
        {
            item: "Soya Malai Chaap",
            price: "280",
        },
        {
            item: "Soya Butter Masala Chaap",
            price: "280",
        },
        {
            item: "Veg. Maharaja",
            price: "300",
        },
        {
            item: "Veg. Peshawari",
            price: "300",
        },
        {
            item: "Kaju Masala / Kaj Curry",
            price: "320",
        },
        {
            item: "Kaju Paneer Masala",
            price: "320",
        },
        {
            item: "Paneer Tikka Masala",
            price: "300",
        },
        {
            item: "Paneer Lajawab",
            price: "300",
        },
        {
            item: "Paneer Albela",
            price: "290",
        },
        {
            item: "Paneer Butter Masala",
            price: "270",
        },
        {
            item: "Paneer Makhanwala",
            price: "270",
        },
        {
            item: "Paneer Koliwada",
            price: "320",
        },
        {
            item: "Paneer Chingara",
            price: "300",
        },
        {
            item: "Paneer Chatpata",
            price: "310",
        },
        {
            item: "Plain Rice",
            price: "150",
        },
        {
            item: "Jeera Rice",
            price: "160",
        },
        {
            item: "Curd Rice",
            price: "180",
        },
        {
            item: "Veg. Pulav",
            price: "210",
        },
        {
            item: "Green Peas Pulav",
            price: "190",
        },
        {
            item: "Paneer Pulav",
            price: "240",
        },
        {
            item: "Dal Khichdi with Curd",
            price: "230",
        },
        {
            item: "Palak Khichdi",
            price: "230",
        },
        {
            item: "Masala Khichdi",
            price: "240",
        },
        {
            item: "Handi Biryani",
            price: "260",
        },
        {
            item: "Veg. Biryani",
            price: "240",
        },
        {
            item: "Paneer Biryani",
            price: "260",
        },
        {
            item: "Hyderabadi Paneer Biryani",
            price: "260",
        },
        {
            item: "Veg. Hyderabadi Biryani",
            price: "250",
        },
        {
            item: "Laccho Dum Biryani",
            price: "280",
        },
        {
            item: "Dal Fry",
            price: "170",
        },
        {
            item: "Dal Tadka",
            price: "180",
        },
        {
            item: "Dal Makhani",
            price: "210",
        },
        {
            item: "Dal Kolhapuri",
            price: "190",
        },
        {
            item: "Butter Chilli Fried Rice / Noodles",
            price: "240",
        },
        {
            item: "Vegetable Chowmein",
            price: "300",
        },
        {
            item: "Herb Pepper Pot Rice",
            price: "300",
        },
        {
            item: "Paneer Black Pepper Rice / Noodles",
            price: "280",
        },
        {
            item: "Pot Rice",
            price: "300",
        },
        {
            item: "Mushroom Fried Rice",
            price: "240",
        },
        {
            item: "Veg. Fried Rice",
            price: "220",
        },
        {
            item: "Veg. Schezwan Rice / Noodles",
            price: "240",
        },
        {
            item: "Manchurian Fried Rice",
            price: "270",
        },
        {
            item: "Veg. Hakka Noodles",
            price: "220",
        },
        {
            item: "Cantonese Noodles",
            price: "280",
        },
        {
            item: "Triple Schezwan Fried Rice",
            price: "300",
        },
        {
            item: "Seven Treasure Triple Rice",
            price: "300",
        },
        {
            item: "Signapore Rice / Noodles",
            price: "220",
        },
        {
            item: "Thai Rice / Noodles",
            price: "300",
        },
        {
            item: "Paneer Cord Fried Rice",
            price: "250",
        },
        {
            item: "Burnt Chilli Garlic Rice / Noodles",
            price: "240",
        },
        {
            item: "Malaysian Rice / Noodles",
            price: "300",
        },
        {
            item: "Paneer Chilli Fried Rice",
            price: "300",
        },
        {
            item: "Paneer in Choice of Sauce",
            price: "280",
        },
        {
            item: "Mushroom in choice of Sauce",
            price: "260",
        },
        {
            item: "Veg. Manchurian Gravy",
            price: "250",
        },
        {
            item: "Veg. Cheese Pizza",
            price: "260",
        },
        {
            item: "Margheritta Pizza",
            price: "260",
        },
        {
            item: "Napolitana Pizza",
            price: "270",
        },
        {
            item: "Indian Paneer Tikka Pizza",
            price: "270",
        },
        {
            item: "Piccante Pizza",
            price: "280",
        },
        {
            item: "Farm House Pizza",
            price: "290",
        },
        {
            item: "Crispy Pav Bhaji",
            price: "190",
        },
        {
            item: "Only Bhaji",
            price: "145",
        },
        {
            item: "Pav Bhaji",
            price: "170",
        },
        {
            item: "Khada Pav Bhaji",
            price: "200",
        },
        {
            item: "Tawa Pulav",
            price: "230",
        },
        {
            item: "Masala Pav",
            price: "160",
        },
        {
            item: "Extra Pav",
            price: "15",
        },
        {
            item: "Extra Crispy Pav",
            price: "20",
        },
        {
            item: "Extra Cheese",
            price: "25",
        },
        {
            item: "Extra Paneer",
            price: "30",
        },
        {
            item: "Bread Butter",
            price: "60",
        },
        {
            item: "Bread Butter Jam",
            price: "70",
        },
        {
            item: "Toast Butter Jam",
            price: "80",
        },
        {
            item: "Veg. Sandwich",
            price: "80",
        },
        {
            item: "Veg. Toast Sandwich",
            price: "90",
        },
        {
            item: "Avocado Toast Sandwich",
            price: "200",
        },
        {
            item: "Veg. Grilled Sandwich",
            price: "130",
        },
        {
            item: "Club Sandwich",
            price: "180",
        },
        {
            item: "Cheese Chilli Garlic Toast",
            price: "160",
        },
        {
            item: "Cheese Chilli Toast",
            price: "150",
        },
        {
            item: "Melting Sandwich",
            price: "180",
        },
        {
            item: "Cheese Garlic Bread",
            price: "170",
        },
        {
            item: "Schezwan Cheese Garlic Bread",
            price: "180",
        },
        {
            item: "Additional Cheese",
            price: "20",
        },
        {
            item: "Additional Paneer",
            price: "20",
        },
    ],
    desserts: [
        {
            item: "Orange Juice",
            price: "120",
        },
        {
            item: "Mosambi Juice",
            price: "120",
        },
        {
            item: "Watermelon Juice",
            price: "120",
        },
        {
            item: "Pineapple Juice",
            price: "120",
        },
        {
            item: "Anar Juice",
            price: "120",
        },
        {
            item: "Grape Juice",
            price: "120",
        },
        {
            item: "Ganga Jamuna",
            price: "140",
        },
        {
            item: "Apple Juice",
            price: "140",
        },
        {
            item: "Cocktail Juice",
            price: "140",
        },
        {
            item: "Maramari Juice",
            price: "140",
        },
        {
            item: "Masala Chhas",
            price: "70",
        },
        {
            item: "Lassi",
            price: "90",
        },
        {
            item: "Choco Deluge",
            price: "350",
        },
        {
            item: "Mr. Lava Lava",
            price: "350",
        },
        {
            item: "Sundae Goodness",
            price: "350",
        },
        {
            item: "Choco-Mess",
            price: "350",
        },
        {
            item: "Tri-Choco Bae",
            price: "350",
        },
        {
            item: "Kitkat Shake",
            price: "260",
        },
        {
            item: "Oreo Cookie Shake",
            price: "260",
        },
        {
            item: "Cookies and Cream Shake",
            price: "260",
        },
        {
            item: "Black Forest Shake",
            price: "260",
        },
        {
            item: "Wild Chocolate Indulgence",
            price: "260",
        },
        {
            item: "Brownie Shake",
            price: "260",
        },
        {
            item: "Almond Coffee",
            price: "200",
        },
        {
            item: "Irish Coffee",
            price: "210",
        },
        {
            item: "Iced Cappucino",
            price: "200",
        },
        {
            item: "Iced Caramel Macchiato",
            price: "230",
        },
        {
            item: "Nescafe",
            price: "110",
        },
        {
            item: "Cappuccino",
            price: "130",
        },
        {
            item: "Caramel Custard",
            price: "130",
        },
        {
            item: "Gulab Jamun",
            price: "70",
        },
        {
            item: "Sizzling Chocolate Brownie",
            price: "360",
        },
        {
            item: "Fruit Cream",
            price: "180",
        },
        {
            item: "Fruit Custard with Cream and Jelly",
            price: "200",
        },
        {
            item: "Kulfi Sliced",
            price: "110",
        },
        {
            item: "Dry Fruit Milkshake",
            price: "270",
        },
        {
            item: "Avocado Smoothie",
            price: "220",
        },
        {
            item: "Kaju Milkshake",
            price: "260",
        },
        {
            item: "Kaju Anjeer Milkshake",
            price: "270",
        },
        {
            item: "Chocolate / Chiku Milkshake",
            price: "140",
        }, {
            item: "Apple / Vanilla Milkshake", 
            price: "130"
        }, {
            item: "Seasonal Milkshakes",
            price: "180"
        }, {
            item: "Rose Falooda",
            price: "160"
        }, {
            item: "Kulfi Falooda",
            price: "170"
        }, {
            item: "Kesar Falooda",
            price: "180"
        }, {
            item: "Dry Fruit Falooda",
            price: "200"
        }, {
            item: "Shobhaa Special Falooda",
            price: "210"
        }
    ],
};

export default menu;
