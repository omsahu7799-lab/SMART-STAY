// Hotel Data with detailed pricing
const hotelsData = [
    {
        id: 1,
        name: "Grand Palace Hotel",
        location: "New York",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 299,
        rating: 4.8,
        description: "Luxury hotel in the heart of Manhattan with stunning city views and world-class amenities.",
        amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Gym", "Parking"],
        roomTypes: {
            "standard": { name: "Standard Room", price: 299 },
            "deluxe": { name: "Deluxe Room", price: 399 },
            "suite": { name: "Suite", price: 599 },
            "presidential": { name: "Presidential Suite", price: 999 }
        },
        featured: true
    },
    {
        id: 2,
        name: "Château de Paris",
        location: "Paris",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
        price: 399,
        rating: 4.9,
        description: "Historic luxury hotel near the Eiffel Tower with elegant French architecture and Michelin-starred dining.",
        amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Concierge", "Valet"],
        roomTypes: {
            "classic": { name: "Classic Room", price: 399 },
            "deluxe": { name: "Deluxe Room", price: 499 },
            "suite": { name: "Suite", price: 699 },
            "royal": { name: "Royal Suite", price: 1299 }
        },
        featured: true
    },
    {
        id: 3,
        name: "Tokyo Sky Resort",
        location: "Tokyo",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 249,
        rating: 4.7,
        description: "Modern high-rise hotel with panoramic city views and traditional Japanese hospitality.",
        amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Gym", "Business Center"],
        roomTypes: {
            "standard": { name: "Standard Room", price: 249 },
            "deluxe": { name: "Deluxe Room", price: 349 },
            "suite": { name: "Suite", price: 549 },
            "penthouse": { name: "Penthouse", price: 899 }
        },
        featured: true
    },
    {
        id: 4,
        name: "London Heritage Inn",
        location: "London",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 199,
        rating: 4.6,
        description: "Charming boutique hotel in historic London with traditional British elegance.",
        amenities: ["WiFi", "Restaurant", "Bar", "Concierge", "Room Service"],
        roomTypes: {
            "standard": { name: "Standard Room", price: 199 },
            "deluxe": { name: "Deluxe Room", price: 299 },
            "suite": { name: "Suite", price: 449 }
        },
        featured: false
    },
    {
        id: 5,
        name: "Dubai Marina Resort",
        location: "Dubai",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 349,
        rating: 4.8,
        description: "Ultra-modern resort with private beach access and luxury shopping district proximity.",
        amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Gym", "Beach Access", "Shopping"],
        roomTypes: {
            "standard": { name: "Standard Room", price: 349 },
            "deluxe": { name: "Deluxe Room", price: 449 },
            "suite": { name: "Suite", price: 649 },
            "villa": { name: "Villa", price: 999 }
        },
        featured: true
    },
    {
        id: 6,
        name: "Sydney Harbour Hotel",
        location: "Sydney",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 279,
        rating: 4.7,
        description: "Waterfront hotel with spectacular Opera House views and contemporary Australian design.",
        amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Gym", "Harbor Views"],
        roomTypes: {
            "standard": { name: "Standard Room", price: 279 },
            "deluxe": { name: "Deluxe Room", price: 379 },
            "suite": { name: "Suite", price: 579 },
            "harbor": { name: "Harbor Suite", price: 799 }
        },
        featured: false
    },
    {
        id: 7,
        name: "Barcelona Beach Resort",
        location: "Barcelona",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 189,
        rating: 4.5,
        description: "Mediterranean-style resort with beachfront location and vibrant Spanish culture.",
        amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Beach Access", "Tennis"],
        roomTypes: {
            "standard": { name: "Standard Room", price: 189 },
            "deluxe": { name: "Deluxe Room", price: 289 },
            "suite": { name: "Suite", price: 429 }
        },
        featured: false
    },
    {
        id: 8,
        name: "Rome Imperial Palace",
        location: "Rome",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 229,
        rating: 4.6,
        description: "Historic hotel near the Colosseum with authentic Italian charm and modern comforts.",
        amenities: ["WiFi", "Restaurant", "Bar", "Concierge", "Room Service"],
        roomTypes: {
            "standard": { name: "Standard Room", price: 229 },
            "deluxe": { name: "Deluxe Room", price: 329 },
            "suite": { name: "Suite", price: 499 },
            "imperial": { name: "Imperial Suite", price: 799 }
        },
        featured: false
    }
];

// Global Variables
let currentPage = window.location.pathname.split('/').pop() || 'index.html';
let filteredHotels = [...hotelsData];
let displayedHotels = 6;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    setupNavigation();
    setupModals();
    setupForms();
    setupFAQ();
    
    switch(currentPage) {
        case 'index.html':
        case '':
            loadFeaturedHotels();
            setupSearch();
            break;
        case 'hotels.html':
            loadAllHotels();
            setupFilters();
            break;
        case 'booking.html':
            setupBookingForm();
            break;
        case 'contact.html':
            setupContactForm();
            break;
        case 'about.html':
            // About page doesn't need special initialization
            break;
    }
}

// Navigation Functions
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Modal Functions
function setupModals() {
    const modal = document.getElementById('hotelModal');
    const closeBtn = document.querySelector('.close');
    
    if (modal && closeBtn) {
        closeBtn.addEventListener('click', closeModal);
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
}

function openHotelModal(hotelId) {
    const hotel = hotelsData.find(h => h.id === hotelId);
    if (!hotel) return;
    
    const modal = document.getElementById('hotelModal');
    const modalContent = document.getElementById('modalContent');
    
    // Create room types options
    const roomTypesOptions = Object.entries(hotel.roomTypes).map(([key, room]) => 
        `<option value="${key}">${room.name} - $${room.price}/night</option>`
    ).join('');
    
    modalContent.innerHTML = `
        <div class="hotel-modal-content">
            <div class="hotel-modal-image">
                <img src="${hotel.image}" alt="${hotel.name}">
                <div class="hotel-rating">${hotel.rating} ⭐</div>
            </div>
            <div class="hotel-modal-info">
                <h2>${hotel.name}</h2>
                <p class="hotel-location">
                    <i class="fas fa-map-marker-alt"></i> ${hotel.location}
                </p>
                <p class="hotel-description">${hotel.description}</p>
                
                <div class="hotel-amenities">
                    <h3>Amenities</h3>
                    <div class="amenities-grid">
                        ${hotel.amenities.map(amenity => `
                            <span class="amenity-tag">
                                <i class="fas fa-check"></i> ${amenity}
                            </span>
                        `).join('')}
                    </div>
                </div>
                
                <div class="hotel-rooms">
                    <h3>Room Types & Pricing</h3>
                    <div class="rooms-pricing">
                        ${Object.entries(hotel.roomTypes).map(([key, room]) => `
                            <div class="room-pricing-item">
                                <span class="room-name">${room.name}</span>
                                <span class="room-price">$${room.price}/night</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="hotel-pricing">
                    <div class="price-display">
                        <span class="price">From $${hotel.price}</span>
                        <span class="price-unit">per night</span>
                    </div>
                    <button class="btn-primary" onclick="bookHotel(${hotel.id})">
                        <i class="fas fa-calendar-check"></i> Book Now
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('hotelModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function bookHotel(hotelId) {
    const hotel = hotelsData.find(h => h.id === hotelId);
    if (hotel) {
        // Store hotel data for booking page
        localStorage.setItem('selectedHotel', JSON.stringify(hotel));
        // Redirect to booking page
        window.location.href = 'booking.html';
    }
}

// Homepage Functions
function loadFeaturedHotels() {
    const featuredHotelsContainer = document.getElementById('featuredHotels');
    if (!featuredHotelsContainer) return;
    
    const featuredHotels = hotelsData.filter(hotel => hotel.featured);
    
    featuredHotelsContainer.innerHTML = featuredHotels.map(hotel => `
        <div class="hotel-card" onclick="openHotelModal(${hotel.id})">
            <div class="hotel-image">
                <img src="${hotel.image}" alt="${hotel.name}">
                <div class="hotel-rating">${hotel.rating} ⭐</div>
            </div>
            <div class="hotel-content">
                <h3 class="hotel-name">${hotel.name}</h3>
                <p class="hotel-location">
                    <i class="fas fa-map-marker-alt"></i> ${hotel.location}
                </p>
                <div class="hotel-price">
                    $${hotel.price} <span>per night</span>
                </div>
                <button class="btn-primary">View Details</button>
            </div>
        </div>
    `).join('');
}

function setupSearch() {
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', searchHotels);
    }
}

function searchHotels() {
    const destination = document.getElementById('destination').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;
    
    // Basic validation
    if (!destination || !checkin || !checkout) {
        alert('Please fill in all search fields');
        return;
    }
    
    // Store search parameters
    const searchParams = {
        destination,
        checkin,
        checkout,
        guests
    };
    
    localStorage.setItem('searchParams', JSON.stringify(searchParams));
    
    // Redirect to hotels page
    window.location.href = 'hotels.html';
}

// Hotels Page Functions
function loadAllHotels() {
    const hotelsGrid = document.getElementById('hotelsGrid');
    if (!hotelsGrid) return;
    
    displayHotels(filteredHotels.slice(0, displayedHotels));
}

function displayHotels(hotels) {
    const hotelsGrid = document.getElementById('hotelsGrid');
    if (!hotelsGrid) return;
    
    if (hotels.length === 0) {
        hotelsGrid.innerHTML = `
            <div class="no-results">
                <h3>No hotels found</h3>
                <p>Try adjusting your filters to see more results.</p>
            </div>
        `;
        return;
    }
    
    hotelsGrid.innerHTML = hotels.map(hotel => `
        <div class="hotel-card" onclick="openHotelModal(${hotel.id})">
            <div class="hotel-image">
                <img src="${hotel.image}" alt="${hotel.name}">
                <div class="hotel-rating">${hotel.rating} ⭐</div>
            </div>
            <div class="hotel-content">
                <h3 class="hotel-name">${hotel.name}</h3>
                <p class="hotel-location">
                    <i class="fas fa-map-marker-alt"></i> ${hotel.location}
                </p>
                <div class="hotel-price">
                    $${hotel.price} <span>per night</span>
                </div>
                <button class="btn-primary">View Details</button>
            </div>
        </div>
    `).join('');
}

function setupFilters() {
    const locationFilter = document.getElementById('locationFilter');
    const priceFilter = document.getElementById('priceFilter');
    const ratingFilter = document.getElementById('ratingFilter');
    const sortBy = document.getElementById('sortBy');
    
    if (locationFilter) {
        locationFilter.addEventListener('change', applyFilters);
    }
    if (priceFilter) {
        priceFilter.addEventListener('change', applyFilters);
    }
    if (ratingFilter) {
        ratingFilter.addEventListener('change', applyFilters);
    }
    if (sortBy) {
        sortBy.addEventListener('change', applyFilters);
    }
    
    // Load search parameters from homepage
    const searchParams = localStorage.getItem('searchParams');
    if (searchParams) {
        const params = JSON.parse(searchParams);
        if (locationFilter) locationFilter.value = params.destination;
        localStorage.removeItem('searchParams');
    }
}

function applyFilters() {
    const locationFilter = document.getElementById('locationFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const ratingFilter = document.getElementById('ratingFilter').value;
    const sortBy = document.getElementById('sortBy').value;
    
    // Filter hotels
    filteredHotels = hotelsData.filter(hotel => {
        let matches = true;
        
        if (locationFilter && hotel.location !== locationFilter) {
            matches = false;
        }
        
        if (priceFilter) {
            const [min, max] = priceFilter.split('-').map(p => p === '+' ? Infinity : parseInt(p));
            if (hotel.price < min || hotel.price > max) {
                matches = false;
            }
        }
        
        if (ratingFilter && hotel.rating < parseFloat(ratingFilter)) {
            matches = false;
        }
        
        return matches;
    });
    
    // Sort hotels
    switch(sortBy) {
        case 'price-low':
            filteredHotels.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredHotels.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredHotels.sort((a, b) => b.rating - a.rating);
            break;
        case 'name':
        default:
            filteredHotels.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    displayedHotels = 6;
    loadAllHotels();
}

function clearFilters() {
    document.getElementById('locationFilter').value = '';
    document.getElementById('priceFilter').value = '';
    document.getElementById('ratingFilter').value = '';
    document.getElementById('sortBy').value = 'name';
    
    filteredHotels = [...hotelsData];
    displayedHotels = 6;
    loadAllHotels();
}

function loadMoreHotels() {
    displayedHotels += 6;
    displayHotels(filteredHotels.slice(0, displayedHotels));
    
    const loadMoreBtn = document.querySelector('.load-more button');
    if (displayedHotels >= filteredHotels.length) {
        loadMoreBtn.style.display = 'none';
    }
}

// Booking Form Functions
function setupBookingForm() {
    const form = document.getElementById('bookingForm');
    if (!form) return;
    
    // Load selected hotel
    const selectedHotel = localStorage.getItem('selectedHotel');
    if (selectedHotel) {
        const hotel = JSON.parse(selectedHotel);
        document.getElementById('hotelName').value = hotel.name;
        document.getElementById('summaryHotel').textContent = hotel.name;
        
        // Populate room types based on selected hotel
        const roomTypeSelect = document.getElementById('roomType');
        roomTypeSelect.innerHTML = '<option value="">Select room type</option>';
        
        Object.entries(hotel.roomTypes).forEach(([key, room]) => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = `${room.name} - $${room.price}/night`;
            roomTypeSelect.appendChild(option);
        });
        
        localStorage.removeItem('selectedHotel');
    }
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('checkIn').min = today;
    document.getElementById('checkOut').min = today;
    
    // Add event listeners
    form.addEventListener('submit', handleBookingSubmit);
    
    // Update summary on input change
    ['checkIn', 'checkOut', 'guests', 'roomType'].forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('change', updateBookingSummary);
        }
    });
    
    // Validate dates
    document.getElementById('checkIn').addEventListener('change', validateDates);
    document.getElementById('checkOut').addEventListener('change', validateDates);
}

function validateDates() {
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    
    if (checkIn && checkOut) {
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);
        
        if (checkOutDate <= checkInDate) {
            alert('Check-out date must be after check-in date');
            document.getElementById('checkOut').value = '';
        }
    }
}

function updateBookingSummary() {
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const guests = document.getElementById('guests').value;
    const roomType = document.getElementById('roomType').value;
    
    document.getElementById('summaryCheckIn').textContent = checkIn || '-';
    document.getElementById('summaryCheckOut').textContent = checkOut || '-';
    document.getElementById('summaryGuests').textContent = guests || '-';
    document.getElementById('summaryRoomType').textContent = roomType || '-';
    
    if (checkIn && checkOut && roomType) {
        const nights = Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
        document.getElementById('summaryNights').textContent = nights;
        
        // Get selected hotel and room price
        const selectedHotel = localStorage.getItem('selectedHotel');
        let roomPrice = 200; // Default price
        
        if (selectedHotel) {
            const hotel = JSON.parse(selectedHotel);
            if (hotel.roomTypes && hotel.roomTypes[roomType]) {
                roomPrice = hotel.roomTypes[roomType].price;
            }
        }
        
        // Calculate total price
        const totalPrice = nights * roomPrice;
        document.getElementById('summaryTotal').textContent = `$${totalPrice}`;
    } else {
        document.getElementById('summaryNights').textContent = '-';
        document.getElementById('summaryTotal').textContent = '$0';
    }
}

function handleBookingSubmit(e) {
    e.preventDefault();
    
    // Validate form
    if (!validateBookingForm()) {
        return;
    }
    
    // Get form data
    const formData = new FormData(e.target);
    const bookingData = Object.fromEntries(formData);
    
    // Show success modal
    showBookingSuccess(bookingData);
}

function validateBookingForm() {
    const requiredFields = ['firstName', 'lastName', 'email', 'checkIn', 'checkOut', 'guests', 'roomType'];
    const termsChecked = document.getElementById('terms').checked;
    
    for (const field of requiredFields) {
        const element = document.getElementById(field);
        if (!element.value.trim()) {
            alert(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
            element.focus();
            return false;
        }
    }
    
    if (!termsChecked) {
        alert('Please accept the terms and conditions');
        return false;
    }
    
    // Validate email
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    return true;
}

function showBookingSuccess(bookingData) {
    const modal = document.getElementById('bookingModal');
    const bookingDetails = document.getElementById('bookingDetails');
    
    // Calculate final price
    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    
    // Get room price
    const selectedHotel = localStorage.getItem('selectedHotel');
    let roomPrice = 200;
    let roomName = bookingData.roomType;
    
    if (selectedHotel) {
        const hotel = JSON.parse(selectedHotel);
        if (hotel.roomTypes && hotel.roomTypes[bookingData.roomType]) {
            roomPrice = hotel.roomTypes[bookingData.roomType].price;
            roomName = hotel.roomTypes[bookingData.roomType].name;
        }
    }
    
    const totalPrice = nights * roomPrice;
    
    bookingDetails.innerHTML = `
        <div class="booking-detail-item">
            <strong>Hotel:</strong> ${bookingData.hotelName || 'Selected Hotel'}
        </div>
        <div class="booking-detail-item">
            <strong>Guest:</strong> ${bookingData.firstName} ${bookingData.lastName}
        </div>
        <div class="booking-detail-item">
            <strong>Email:</strong> ${bookingData.email}
        </div>
        <div class="booking-detail-item">
            <strong>Phone:</strong> ${bookingData.phone}
        </div>
        <div class="booking-detail-item">
            <strong>Check-in:</strong> ${bookingData.checkIn}
        </div>
        <div class="booking-detail-item">
            <strong>Check-out:</strong> ${bookingData.checkOut}
        </div>
        <div class="booking-detail-item">
            <strong>Guests:</strong> ${bookingData.guests}
        </div>
        <div class="booking-detail-item">
            <strong>Room Type:</strong> ${roomName}
        </div>
        <div class="booking-detail-item">
            <strong>Nights:</strong> ${nights}
        </div>
        <div class="booking-detail-item">
            <strong>Price per Night:</strong> $${roomPrice}
        </div>
        <div class="booking-detail-item total-price">
            <strong>Total Price:</strong> $${totalPrice}
        </div>
        <div class="booking-detail-item">
            <strong>Booking Reference:</strong> SS${Date.now().toString().slice(-6)}
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Clear the selected hotel from storage
    localStorage.removeItem('selectedHotel');
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'none';
    
    // Reset form
    document.getElementById('bookingForm').reset();
    updateBookingSummary();
}

// Contact Form Functions
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', handleContactSubmit);
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    // Validate form
    if (!validateContactForm()) {
        return;
    }
    
    // Get form data
    const formData = new FormData(e.target);
    const contactData = Object.fromEntries(formData);
    
    // Show success modal
    showContactSuccess();
    
    // Reset form
    e.target.reset();
}

function validateContactForm() {
    const requiredFields = ['firstName', 'lastName', 'email', 'subject', 'message'];
    
    for (const field of requiredFields) {
        const element = document.getElementById('contact' + field.charAt(0).toUpperCase() + field.slice(1));
        if (!element.value.trim()) {
            alert(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
            element.focus();
            return false;
        }
    }
    
    // Validate email
    const email = document.getElementById('contactEmail').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    return true;
}

function showContactSuccess() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'block';
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'none';
}

// FAQ Functions
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                // Close other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });
}

// Utility Functions
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    const bookingModal = document.getElementById('bookingModal');
    const contactModal = document.getElementById('contactModal');
    
    if (bookingModal && e.target === bookingModal) {
        closeBookingModal();
    }
    
    if (contactModal && e.target === contactModal) {
        closeContactModal();
    }
});

// Close modals with close buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('close')) {
        const modal = e.target.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
});
