// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}`);
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(`Searching for: ${searchTerm}`);
            }
        }
    });
    
    // Product quick view
    const quickViewButtons = document.querySelectorAll('.quick-view');
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h4').textContent;
            alert(`Quick view for: ${productName}`);
        });
    });
    
    // Category card clicks
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').textContent;
            alert(`Browsing ${categoryName} category`);
        });
    });
    
    // Brand card clicks
    const brandCards = document.querySelectorAll('.brand-card');
    brandCards.forEach(card => {
        card.addEventListener('click', function() {
            alert('Browsing brand products');
        });
    });
    
    // Shopping cart functionality
    const cartIcon = document.querySelector('.nav-icons a:last-child');
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Shopping cart opened');
    });
    
    // Wishlist functionality
    const wishlistIcon = document.querySelector('.nav-icons a:nth-child(2)');
    wishlistIcon.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Wishlist opened');
    });
    
    // User account
    const userIcon = document.querySelector('.nav-icons a:first-child');
    userIcon.addEventListener('click', function(e) {
        e.preventDefault();
        alert('User account/login');
    });
    
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add to cart functionality for products
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('quick-view')) {
                const productName = this.querySelector('h4').textContent;
                const productPrice = this.querySelector('.current-price').textContent;
                alert(`Product: ${productName}\nPrice: ${productPrice}\n\nClick "Add to Cart" to purchase`);
            }
        });
    });
    
    // Newsletter signup (if added later)
    function setupNewsletterSignup() {
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value;
                if (email) {
                    alert(`Thank you for subscribing with email: ${email}`);
                    this.reset();
                }
            });
        }
    }
    
    // Call newsletter setup
    setupNewsletterSignup();
    
    // Lazy loading for images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});