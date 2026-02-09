/**
 * Emplaza Creation - App Logic
 */

// Mock Product Data
const products = [
    {
        id: 1,
        title: "Vintage Rose Border",
        category: "floral",
        price: 8.99,
        image: "vintage_rose_border_1766976389297.png",
        images: [
            "vintage_rose_border_1766976389297.png",
            "https://placehold.co/600x600/f0f4f4/008080?text=Rose+Detail+1",
            "https://placehold.co/600x600/f0f4f4/008080?text=Rose+Detail+2"
        ],
        formats: ["PES", "DST", "EXP"]
    },
    {
        id: 2,
        title: "Velvet Heart Applique",
        category: "applique",
        price: 5.50,
        image: "velvet_heart_applique_1766976408118.png",
        images: [
            "velvet_heart_applique_1766976408118.png",
            "https://placehold.co/600x600/f0f4f4/D4AF37?text=Heart+Detail+1",
            "https://placehold.co/600x600/f0f4f4/D4AF37?text=Heart+Detail+2"
        ],
        formats: ["PES", "JEF"]
    },
    {
        id: 3,
        title: "Baby Elephant",
        category: "kids",
        price: 6.00,
        image: "baby_elephant_embroidery_1766976427598.png",
        images: [
            "baby_elephant_embroidery_1766976427598.png",
            "https://placehold.co/600x600/f0f4f4/008080?text=Elephant+Detail+1"
        ],
        formats: ["PES", "DST", "VIP"]
    },
    {
        id: 4,
        title: "Golden Leaf Frame",
        category: "floral",
        price: 7.25,
        image: "golden_leaf_frame_1766976442976.png",
        images: [
            "golden_leaf_frame_1766976442976.png",
            "https://placehold.co/600x600/f0f4f4/D4AF37?text=Leaf+Detail+1"
        ],
        formats: ["PES", "DST"]
    },
    {
        id: 5,
        title: "Monogram Set 'A-Z'",
        category: "applique",
        price: 12.99,
        image: "https://placehold.co/600x600/f0f4f4/008080?text=Monogram",
        formats: ["All Formats"]
    },
    {
        id: 6,
        title: "Cute Dino Patch",
        category: "kids",
        price: 4.50,
        image: "https://placehold.co/600x600/f0f4f4/D4AF37?text=Dino+Patch",
        formats: ["PES", "JEF"]
    },
    {
        id: 7,
        title: "Royal Gold Crest",
        category: "applique",
        price: 9.99,
        image: "https://placehold.co/600x600/f0f4f4/D4AF37?text=Royal+Crest",
        formats: ["PES", "DST", "XXX"]
    },
    {
        id: 8,
        title: "Spring Meadow Border",
        category: "floral",
        price: 8.50,
        image: "https://placehold.co/600x600/f0f4f4/008080?text=Meadow+Border",
        formats: ["PES", "JEF", "VIP"]
    },
    {
        id: 9,
        title: "Space Explorer Set",
        category: "kids",
        price: 11.00,
        image: "https://placehold.co/600x600/f0f4f4/2c3e50?text=Space+Set",
        formats: ["PES", "DST", "EXP"]
    },
    {
        id: 10,
        title: "Victorian Lace Corner",
        category: "floral",
        price: 6.75,
        image: "https://placehold.co/600x600/f0f4f4/D4AF37?text=Lace+Corner",
        formats: ["PES", "VP3"]
    }
];

// Publish products globally for product.html
window.products = products;

// DOM Elements
const productGrid = document.getElementById('productGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const faqItems = document.querySelectorAll('.accordion-item');
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

// Global Payment Modal Handler
window.openPaymentModal = function (e) {
    if (e) e.preventDefault();
    const modal = document.getElementById('paymentModal');
    if (modal) modal.classList.add('active');
}

// Close Modal Handler
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay') || e.target.closest('.modal-close')) {
        const modal = document.getElementById('paymentModal');
        if (modal) modal.classList.remove('active');
    }
});

// Init
document.addEventListener('DOMContentLoaded', () => {
    if (productGrid) renderProducts(products); // Only render if grid exists (home page)
    initFAQ();
    initMobileMenu();
    initFilters();
    initPaymentTriggers();
});

function initPaymentTriggers() {
    // Buttons in Grid
    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.add-btn')) {
            window.openPaymentModal(e);
        }
    });

    // Button on Product Page (if exists)
    const addBtn = document.getElementById('add-cart-btn');
    if (addBtn) {
        addBtn.addEventListener('click', window.openPaymentModal);
    }
}

function renderProducts(items) {
    productGrid.innerHTML = items.map(product => `
        <div class="product-card">
            <div class="card-img">
                <img src="${product.image.split('/').pop()}" alt="${product.title}" loading="lazy">
                <span class="badge-new">New</span>
            </div>
            <div class="card-body">
                <div class="card-meta">${product.category.toUpperCase()}</div>
                <h3 class="card-title"><a href="product.html?id=${product.id}">${product.title}</a></h3>
                <div class="card-actions">
                    <span class="card-price">$${product.price.toFixed(2)}</span>
                    <button class="add-btn" aria-label="Add to Cart"><i class="fas fa-plus"></i></button>
                </div>
            </div>
        </div>
    `).join('');
}

function initFilters() {
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            if (filter === 'all') {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.category === filter);
                renderProducts(filtered);
            }
        });
    });
}

function initFAQ() {
    faqItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        if (!header) return;

        header.addEventListener('click', () => {
            // Toggle current
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(i => i.classList.remove('active'));

            // Open clicked if not already open
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

function initMobileMenu() {
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            const icon = mobileToggle.querySelector('i');

            if (navLinks.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}
