
// Product Data Array
const products = [
    {
        id: 1,
        title: "Traditional Maithili Fish Painting",
        image: "https://img1.wsimg.com/isteam/ip/913222f5-f12a-4389-9b63-128a1da1692e/C0134.jpg/:/rs=w:1280",
        category: "Paintings"
    },
    {
        id: 2,
        title: "Handmade Mithila Cushion Cover",
        image: "https://i.pinimg.com/736x/80/e7/73/80e7735391c530e3727289599525c317.jpg",
        category: "Cushions"
    },
    {
        id: 3,
        title: "Cultural Art Wall Decor",
        image: "https://images.tv9hindi.com/wp-content/uploads/2021/08/mithila-art-history-6.jpg",
        category: "Decor"
    },
    {
        id: 4,
        title: "Intricate Elephant Embroidery",
        image: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=451368916386561",
        category: "Embroidery"
    },
    {
        id: 5,
        title: "Peacock Motif Handkerchief",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq4994m16900iM5P_O86mI7Y172oTf-T-N0g&s",
        category: "Accessories"
    },
    {
        id: 6,
        title: "Village Life Madhubani Art",
        image: "https://i.pinimg.com/736x/21/df/b4/21dfb4c3e745672a91253e20e82c5054.jpg",
        category: "Paintings"
    },
    {
        id: 7,
        title: "Festive Decor Piece",
        image: "https://m.media-amazon.com/images/I/71Y87t-D1FL.jpg",
        category: "Decor"
    },
    {
        id: 8,
        title: "Custom Embroidered Fabric",
        image: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1411516632363198",
        category: "Embroidery"
    },
    {
        id: 9,
        title: "Shubham Unlimited Cushion",
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/cushion-cover/z/w/a/su-2-shubham-unlimited-original-imaggfdfd5qyz4n8.jpeg",
        category: "Cushions"
    },
    {
        id: 10,
        title: "Geometric Pattern Art",
        image: "https://i.pinimg.com/736x/4d/91/98/4d91986927439050302b1f885f822e1b.jpg",
        category: "Paintings"
    },
    {
        id: 11,
        title: "Hand-painted Tote Bag",
        image: "https://itokri.com/cdn/shop/files/0A5A3522_d61a09d3-5483-4a69-8263-54446b7a0665.jpg?v=1711100572&width=1400",
        category: "Accessories"
    },
    {
        id: 12,
        title: "Sun God Motif Art",
        image: "https://i.pinimg.com/236x/85/3e/26/853e2645802353f868bc86e082873105.jpg",
        category: "Paintings"
    },
    {
        id: 13,
        title: "Vibrant Wall Hanging",
        image: "https://m.media-amazon.com/images/I/71wLpW5I1kL.AC_UF894,1000_QL80.jpg",
        category: "Decor"
    },
    {
        id: 14,
        title: "Traditional Bird Design",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6A7D-B6m_P-Y6UfR72lYI6k9q1E0A0A0A0A&s",
        category: "Paintings"
    },
    {
        id: 15,
        title: "Tree of Life Art",
        image: "https://i.pinimg.com/originals/7c/4a/0f/7c4a0f44356614744474661474447466.jpg",
        category: "Paintings"
    },
    {
        id: 16,
        title: "Handcrafted Dupatta",
        image: "https://itokri.com/cdn/shop/products/IMG_3959_91071da5-2636-4766-8386-368736873687.jpg",
        category: "Apparel"
    },
    {
        id: 17,
        title: "Floral Border Design",
        image: "https://i.pinimg.com/736x/9e/3e/4e/9e3e4e9e3e4e9e3e4e9e3e4e9e3e4e9e.jpg",
        category: "Embroidery"
    },
    {
        id: 18,
        title: "Folk Art Coasters",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6A7D-B6m_P-Y6UfR72lYI6k9q1E0A0A0A0A&s",
        category: "Decor"
    },
    {
        id: 19,
        title: "Wedding Ceremony Art",
        image: "https://i.pinimg.com/originals/a1/b1/c1/a1b1c1a1b1c1a1b1c1a1b1c1a1b1c1a1.jpg",
        category: "Paintings"
    },
    {
        id: 20,
        title: "Designer Saree Border",
        image: "https://m.media-amazon.com/images/I/81x1x1x1x1L.jpg",
        category: "Apparel"
    },
    // Adding placeholders to reach ~30 products as requested
    {
        id: 21,
        title: "Maithili Art Scarf",
        image: "https://i.pinimg.com/736x/80/e7/73/80e7735391c530e3727289599525c317.jpg", // Reusing for placeholder
        category: "Apparel"
    },
    {
        id: 22,
        title: "Handpainted Kettle",
        image: "https://m.media-amazon.com/images/I/71Y87t-D1FL.jpg", // Reusing for placeholder
        category: "Decor"
    },
    {
        id: 23,
        title: "Madhubani Pen Holder",
        image: "https://i.pinimg.com/736x/21/df/b4/21dfb4c3e745672a91253e20e82c5054.jpg", // Reusing for placeholder
        category: "Decor"
    },
    {
        id: 24,
        title: "Decorative Tray",
        image: "https://i.pinimg.com/736x/4d/91/98/4d91986927439050302b1f885f822e1b.jpg", // Reusing for placeholder
        category: "Decor"
    },
    {
        id: 25,
        title: "Embroidered Cushion Set",
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/cushion-cover/z/w/a/su-2-shubham-unlimited-original-imaggfdfd5qyz4n8.jpeg", // Reusing for placeholder
        category: "Cushions"
    },
    {
        id: 26,
        title: "Wall Plate Art",
        image: "https://i.pinimg.com/236x/85/3e/26/853e2645802353f868bc86e082873105.jpg", // Reusing for placeholder
        category: "Decor"
    },
    {
        id: 27,
        title: "Cultural Notebook",
        image: "https://itokri.com/cdn/shop/files/0A5A3522_d61a09d3-5483-4a69-8263-54446b7a0665.jpg?v=1711100572&width=1400", // Reusing for placeholder
        category: "Stationery"
    },
    {
        id: 28,
        title: "Handmade Rug",
        image: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=451368916386561", // Reusing for placeholder
        category: "Decor"
    },
    {
        id: 29,
        title: "Festive Toran",
        image: "https://images.tv9hindi.com/wp-content/uploads/2021/08/mithila-art-history-6.jpg", // Reusing for placeholder
        category: "Decor"
    },
    {
        id: 30,
        title: "Custom Gift Box",
        image: "https://img1.wsimg.com/isteam/ip/913222f5-f12a-4389-9b63-128a1da1692e/C0134.jpg/:/rs=w:1280", // Reusing for placeholder
        category: "Gifts"
    }
];

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navList = document.querySelector('.nav-list');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (navList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Render Products
const shopGrid = document.querySelector('#shop-grid');
const featuredGrid = document.querySelector('#featured-products-grid');

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    // Create a message for WhatsApp
    const message = `Hi Emplaza Creations, I am interested in ordering: ${product.title} (ID: ${product.id})`;
    const whatsappUrl = `https://wa.me/917838641457?text=${encodeURIComponent(message)}`;

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x250?text=Emplaza+Art'">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-category" style="color: #666; font-size: 0.9rem; margin-bottom: 10px;">${product.category}</p>
            <button onclick="window.open('${whatsappUrl}', '_blank')" class="btn-order">
                <i class="fab fa-whatsapp"></i> Order on WhatsApp
            </button>
        </div>
    `;
    return card;
}

// Render featured products on Home Page (First 4)
if (featuredGrid) {
    products.slice(0, 4).forEach(product => {
        featuredGrid.appendChild(createProductCard(product));
    });
}

// Render all products on Shop Page
if (shopGrid) {
    products.forEach(product => {
        shopGrid.appendChild(createProductCard(product));
    });
}
