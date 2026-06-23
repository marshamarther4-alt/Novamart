const products = [

/* 👕 CLOTHES (20) */

{id:1,name:"Men's Premium T-Shirt",price:8000,category:"clothes",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"},

{id:2,name:"Women's Fashion Dress",price:7000,category:"clothes",image:"https://images.unsplash.com/photo-1520975916090-3105956dac38"},

{id:3,name:"Men's Polo Shirt",price:10000,category:"clothes",image:"https://images.unsplash.com/photo-1521335629791-ce4aec67dd49"},

{id:4,name:"Women's Handbag",price:5000,category:"clothes",image:"https://images.unsplash.com/photo-1590874103328-eac38a683ce7"},

{id:5,name:"Men's Jeans Trouser",price:15000,category:"clothes",image:"https://images.unsplash.com/photo-1542272604-787c3835535d"},

{id:6,name:"Women's Jeans Trouser",price:12000,category:"clothes",image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246"},

{id:7,name:"Men's Hoodie",price:20000,category:"clothes",image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7"},

{id:8,name:"Women's Hoodie",price:18000,category:"clothes",image:"https://images.unsplash.com/photo-1520975682031-ae4f0d9c7c2e"},

{id:9,name:"Men's Corporate Shirt",price:8000,category:"clothes",image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"},

{id:10,name:"Women's Corporate Blouse",price:8000,category:"clothes",image:"https://images.unsplash.com/photo-1550639525-c97d455acf70"},

{id:11,name:"Men's Joggers",price:30000,category:"clothes",image:"https://images.unsplash.com/photo-1528701800489-20be3c2ea3f1"},

{id:12,name:"Women's Leggings",price:20000,category:"clothes",image:"https://images.unsplash.com/photo-1520975926090-3105956dac38"},

{id:13,name:"Men's Native Wear",price:20000,category:"clothes",image:"https://images.unsplash.com/photo-1593032465171-8f3f1b0a8a8a"},

{id:14,name:"Women's Ankara Gown",price:10000,category:"clothes",image:"https://images.unsplash.com/photo-1520975682031-ae4f0d9c7c2e"},

{id:15,name:"Men's Shorts",price:7000,category:"clothes",image:"https://images.unsplash.com/photo-1562157873-818bc0726f68"},

{id:16,name:"Women's Skirt",price:6000,category:"clothes",image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2"},

{id:17,name:"Men's Jacket",price:20000,category:"clothes",image:"https://images.unsplash.com/photo-1520975916090-3105956dac38"},

{id:18,name:"Women's Jacket",price:15000,category:"clothes",image:"https://images.unsplash.com/photo-1514996937319-344454492b37"},

{id:19,name:"Children's T-Shirt",price:5000,category:"clothes",image:"https://images.unsplash.com/photo-1520975682031-ae4f0d9c7c2e"},

{id:20,name:"Children's School Uniform",price:15000,category:"clothes",image:"https://images.unsplash.com/photo-1520975926090-3105956dac38"},

/* 👟 SHOES (15) */

{id:21,name:"Running Sneakers",price:20000,category:"shoes",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"},

{id:22,name:"Fashion Sneakers",price:25000,category:"shoes",image:"https://images.unsplash.com/photo-1528701800489-20be3c2ea3f1"},

{id:23,name:"Men's Loafers",price:15000,category:"shoes",image:"https://images.unsplash.com/photo-1528701800489-20be3c2ea3f1"},

{id:24,name:"Women's Flat Shoes",price:15000,category:"shoes",image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2"},

{id:25,name:"Men's Sandals",price:18000,category:"shoes",image:"https://images.unsplash.com/photo-1528701800489-20be3c2ea3f1"},

{id:26,name:"Women's Sandals",price:15000,category:"shoes",image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2"},

{id:27,name:"Football Boots",price:20000,category:"shoes",image:"https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a"},

{id:28,name:"School Shoes",price:15000,category:"shoes",image:"https://images.unsplash.com/photo-1528701800489-20be3c2ea3f1"},

{id:29,name:"Men's Corporate Shoes",price:20000,category:"shoes",image:"https://images.unsplash.com/photo-1528701800489-20be3c2ea3f1"},

{id:30,name:"Women's Heels",price:8000,category:"shoes",image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2"},

{id:31,name:"Canvas Shoes",price:6000,category:"shoes",image:"https://images.unsplash.com/photo-1528701800489-20be3c2ea3f1"},

{id:32,name:"Slippers",price:4000,category:"shoes",image:"https://images.unsplash.com/photo-1528701800489-20be3c2ea3f1"},

{id:33,name:"Safety Boots",price:15000,category:"shoes",image:"https://images.unsplash.com/photo-1519741497674-611481863552"},

{id:34,name:"Hiking Shoes",price:20000,category:"shoes",image:"https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf"},

{id:35,name:"Children's Sneakers",price:10000,category:"shoes",image:"https://images.unsplash.com/photo-1528701800489-20be3c2ea3f1"},

/* 📱 ELECTRONICS (10) */

{id:36,name:"Smart Watch",price:25000,category:"electronics",image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"},

{id:37,name:"Wireless Earbuds",price:15000,category:"electronics",image:"https://images.unsplash.com/photo-1585386959984-a41552231693"},

{id:38,name:"Bluetooth Speaker",price:28000,category:"electronics",image:"https://images.unsplash.com/photo-1589003077984-894e133dabab"},

{id:39,name:"Power Bank",price:27000,category:"electronics",image:"https://images.unsplash.com/photo-1609592806596-4d2f6b2b7d4d"},

{id:40,name:"Phone Charger",price:4000,category:"electronics",image:"https://images.unsplash.com/photo-1583863788434-e58a36330b51"},

{id:41,name:"USB Cable",price:2000,category:"electronics",image:"https://images.unsplash.com/photo-1583863788434-e58a36330b51"},

{id:42,name:"Ring Light",price:12000,category:"electronics",image:"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6"},

{id:43,name:"Mini Fan",price:5500,category:"electronics",image:"https://images.unsplash.com/photo-1593642532973-d31b6557fa68"},

{id:44,name:"Wireless Mouse",price:5000,category:"electronics",image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3"},

{id:45,name:"Bluetooth Headphones",price:15000,category:"electronics",image:"https://images.unsplash.com/photo-1518441902117-f0a4b0c0f0c3"},

/* 🛒 GROCERIES (5) */

{id:46,name:"Rice (5kg)",price:5000,category:"groceries",image:"https://images.unsplash.com/photo-1603048297172-c92544798d5a"},

{id:47,name:"Spaghetti Pack",price:15000,category:"groceries",image:"https://images.unsplash.com/photo-1604908177522-0409a0a5b6c7"},

{id:48,name:"Cooking Oil",price:5000,category:"groceries",image:"https://images.unsplash.com/photo-1604908177522-0409a0a5b6c7"},

{id:49,name:"Sugar",price:1000,category:"groceries",image:"https://images.unsplash.com/photo-1586201375761-83865001e31c"},

{id:50,name:"Beverage Pack",price:4000,category:"groceries",image:"https://images.unsplash.com/photo-1622484212850-eb596d8f66f7"}

];
