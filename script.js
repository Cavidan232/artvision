
document.addEventListener('DOMContentLoaded', function () {
    // Rəssamlar məlumatları - daha zəngin və real məlumatlar
    const artists = [
        {
            id: 1,
            name: "Səma Qarayeva",
            bio: "Müasir rəssam, abstrakt və portret janrlarında işləyir. 15 illik təcrübəsi var. Əsərləri bir çox beynəlxalq sərgilərdə nümayiş etdirilib.",
            specialty: "Abstrakt Rəsm",
            category: "abstract",
            image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            artworksCount: 24,
            followers: "1.2K",
            rating: 4.9,
            social: {
                instagram: "@sema_art",
                facebook: "SemaQarayevaArt"
            },
            artworks: [
                {
                    id: 101,
                    title: "Qırmızı Arzu",
                    year: 2022,
                    price: 1200,
                    size: "120×128 cm",
                    medium: "Akril, kətan",
                    description: "Bu əsər insanın daxili arzularını və ehtiraslarını təsvir edir. Qırmızı rəng enerji və həyat sevincini simvollaşdırır.",
                    image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    tags: ["abstrakt", "qırmızı", "modern"]
                },
                {
                    id: 102,
                    title: "Mavi Sakitlik",
                    year: 2021,
                    size: "100×120 cm",
                    price: 950,
                    medium: "Yağlı boya, kətan",
                    description: "Dərin mavi rənglərlə işlənmiş bu əsər dənizin sakitliyini və sonsuzluq hissini təqdim edir.",
                    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    tags: ["mavi", "sakitlik", "dəniz"]
                }
            ]
        },
        {
            id: 2,
            name: "Əli Məmmədov",
            bio: "Klassik rəsm üzrə ixtisaslaşmış, neft boya ilə işləyən rəssam. Realizm üslubunda portretlər və mənzərələr yaradır.",
            specialty: "Realizm",
            category: "realism",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            artworksCount: 18,
            followers: "980",
            rating: 4.8,
            social: {
                instagram: "@eli_memmedov",
                facebook: "EliMemmedovArt"
            },
            artworks: [
                {
                    id: 201,
                    title: "Qoca Balıqçı",
                    year: 2020,
                    price: 2000,
                    size: "150×180 cm",
                    medium: "Yağlı boya, kətan",
                    description: "Bu portret həyatın ağırlığını daşıyan, lakin hələ də ümidi olan bir balıqçını təsvir edir. Hər bir xətt onun həyat hekayəsini danışır.",
                    image: "https://images.squarespace-cdn.com/content/v1/64e77c29df845c11ffd166d2/b7827adc-8fb5-4cd1-bafb-e0432aea8998/Stocksy_comp_4896564_V3.jpg?format=1000w",
                    tags: ["portret", "realizm", "yaşlı"]
                }
            ]
        },
        {
            id: 3,
            name: "Leyla Əliyeva",
            bio: "Müasir miniatür sənətinin gənc və istedadlı nümayəndəsi. Ənənəvi və müasir üslubları harmoniya şəklində birləşdirir.",
            specialty: "Miniatür",
            category: "miniature",
            image: "https://images.squarespace-cdn.com/content/v1/64e77c29df845c11ffd166d2/41b88135-a9b5-4d4f-a7a9-d20892deecae/Stocksy_comp_1155665_V3.jpg?format=1000w",
            artworksCount: 32,
            followers: "2.1K",
            rating: 4.7,
            social: {
                instagram: "@leyla_miniature",
                facebook: "LeylaMiniatureArt"
            },
            artworks: [
                {
                    id: 301,
                    title: "Şəhər Həyatı",
                    year: 2023,
                    price: 750,
                    size: "40×50 cm",
                    medium: "Sulu boya, kağız",
                    description: "Müasir şəhər həyatının dinamikasını miniatür üslubunda təsvir edən incə işlənmiş əsər.",
                    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    tags: ["miniatur", "şəhər", "müasir"]
                }
            ]
        }
    ];

    // DOM elementləri - daha aydın qruplaşdırma
    const elements = {
        // Konteyner elementləri
        artistsContainer: document.getElementById('artistsContainer'),
        artworksSection: document.getElementById('artworksSection'),
        artistInfo: document.getElementById('artistInfo'),
        artworksContainer: document.getElementById('artworksContainer'),
        cartItems: document.getElementById('cartItems'),

        // Düymə elementləri
        backButton: document.getElementById('backButton'),
        searchToggle: document.getElementById('searchToggle'),
        searchBtn: document.getElementById('searchBtn'),
        applyFilters: document.getElementById('applyFilters'),
        resetFilters: document.getElementById('resetFilters'),
        favoritesBtn: document.getElementById('favoritesBtn'),
        cartBtn: document.getElementById('cartBtn'),
        closeCart: document.getElementById('closeCart'),
        exploreArtists: document.getElementById('exploreArtists'),
        mobileMenuBtn: document.getElementById('mobileMenuBtn'),

        // Input elementləri
        searchInput: document.getElementById('searchInput'),
        categoryFilter: document.getElementById('categoryFilter'),
        minPrice: document.getElementById('minPrice'),
        maxPrice: document.getElementById('maxPrice'),
        sortBy: document.getElementById('sortBy'),

        // Sayğac elementləri
        favoritesCount: document.getElementById('favoritesCount'),
        cartCount: document.getElementById('cartCount'),
        cartTotal: document.getElementById('cartTotal'),

        // UI elementləri
        searchFilter: document.getElementById('searchFilter'),
        cartSidebar: document.getElementById('cartSidebar'),
        overlay: document.getElementById('overlay'),
        toast: document.getElementById('toast'),
        mobileMenu: document.getElementById('mobileMenu')
    };

    // Dəyişənlər - daha təşkil edilmiş
    const state = {
        favorites: JSON.parse(localStorage.getItem('artvision_favorites')) || [],
        cart: JSON.parse(localStorage.getItem('artvision_cart')) || [],
        currentArtist: null,
        filteredArtists: [...artists],
        isFilterOpen: false
    };

    // Əsas funksiyalar - daha moduler və oxunaqlı
    class ArtGallery {
        // Rəssamları yüklə
        static loadArtists() {
            elements.artistsContainer.innerHTML = '';

            if (state.filteredArtists.length === 0) {
                this.showEmptyState('Heç bir rəssam tapılmadı');
                return;
            }

            state.filteredArtists.forEach(artist => {
                elements.artistsContainer.appendChild(this.createArtistCard(artist));
            });

            this.attachArtistEventListeners();
            this.updateFavoritesCount();
        }

        // Boş state göstər
        static showEmptyState(message) {
            elements.artistsContainer.innerHTML = `
                    <div class="empty-state fade-in">
                        <i class="fas fa-palette"></i>
                        <h3>${message}</h3>
                        <p>Başqa axtarış kriteriyaları ilə cəhd edin</p>
                    </div>
                `;
        }

        // Rəssam kartı yarat
        static createArtistCard(artist) {
            const isFavorite = state.favorites.includes(artist.id);
            const artistCard = document.createElement('div');
            artistCard.className = 'artist-card fade-in';
            artistCard.innerHTML = `
                    <div class="artist-actions">
                        <button class="action-btn favorite ${isFavorite ? 'active' : ''}" 
                                data-id="${artist.id}"
                                aria-label="${isFavorite ? 'Favorilərdən çıxar' : 'Favoritlərə əlavə et'}">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                    <img src="${artist.image}" alt="${artist.name}" class="artist-image" loading="lazy">
                    <div class="artist-details">
                        <h3 class="artist-name">${artist.name}</h3>
                        <p class="artist-bio">${artist.bio}</p>
                        <span class="artist-specialty">${artist.specialty}</span>
                        <div class="artist-stats">
                            <div class="stat">
                                <div class="stat-value">${artist.artworksCount}</div>
                                <div class="stat-label">Əsər</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">${artist.followers}</div>
                                <div class="stat-label">İzləyici</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">${artist.rating}</div>
                                <div class="stat-label">Reytinq</div>
                            </div>
                        </div>
                        <div class="artist-social">
                          <a href="${artist.social.instagram}" class="social-btn">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="${artist.social.facebook}" class="social-btn">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                        </div>
                    </div>
                `;

            artistCard.addEventListener('click', (e) => {
                if (!e.target.closest('.artist-actions')) {
                    this.showArtistArtworks(artist);
                }
            });

            return artistCard;
        }

        // Rəssamın əsərlərini göstər
        static showArtistArtworks(artist) {
            state.currentArtist = artist;
            document.querySelector('.section').style.display = 'none';
            elements.artworksSection.style.display = 'block';

            this.loadArtistInfo(artist);
            this.loadArtworks(artist.artworks);
            this.scrollToTop();
        }

        // Rəssam məlumatlarını yüklə
        static loadArtistInfo(artist) {
            elements.artistInfo.innerHTML = `
                    <div class="artist-info-content">
                        <img src="${artist.image}" alt="${artist.name}" class="artist-info-image">
                        <div class="artist-info-details">
                            <h2>${artist.name}</h2>
                            <p class="artist-info-bio">${artist.bio}</p>
                            <span class="artist-specialty large">${artist.specialty}</span>
                            <div class="artist-info-stats">
                                <div class="info-stat">
                                    <strong>${artist.artworksCount}</strong>
                                    <span>Əsər</span>
                                </div>
                                <div class="info-stat">
                                    <strong>${artist.followers}</strong>
                                    <span>İzləyici</span>
                                </div>
                                <div class="info-stat">
                                    <strong>${artist.rating}</strong>
                                    <span>Reyting</span>
                                </div>
                            </div>
                            <div class="artist-info-social">
                                <span>İzlə:</span>
                                <a href="${artist.social.instagram}" class="social-btn">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="${artist.social.facebook}" class="social-btn">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                `;
        }

        // Əsərləri yüklə
        static loadArtworks(artworks) {
            elements.artworksContainer.innerHTML = '';

            artworks.forEach(artwork => {
                elements.artworksContainer.appendChild(this.createArtworkCard(artwork));
            });

            this.attachArtworkEventListeners();
        }

        // Əsər kartı yarat
        static createArtworkCard(artwork) {
            const isInCart = state.cart.some(item => item.id === artwork.id);
            const isFavorite = state.favorites.includes(artwork.id);

            const artworkCard = document.createElement('div');
            artworkCard.className = 'artwork-card fade-in';
            artworkCard.innerHTML = `
                    <div class="artwork-image-container">
                        <img src="${artwork.image}" alt="${artwork.title}" class="artwork-image" loading="lazy">
                        <div class="artwork-overlay">
                            <button class="artwork-overlay-btn favorite-button ${isFavorite ? 'active' : ''}" 
                                    data-id="${artwork.id}"
                                    aria-label="${isFavorite ? 'Favorilərdən çıxar' : 'Favoritlərə əlavə et'}">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                    <div class="artwork-details">
                        <h3 class="artwork-title">${artwork.title}</h3>
                        <div class="artwork-meta">
                            <span class="artwork-year">${artwork.year}</span>
                            <span class="artwork-size">${artwork.size}</span>
                            <span class="artwork-medium">${artwork.medium}</span>
                        </div>
                        <p class="artwork-price">${this.formatPrice(artwork.price)} AZN</p>
                        <p class="artwork-description">${artwork.description}</p>
                        <div class="artwork-tags">
                            ${artwork.tags.map(tag => `<span class="artwork-tag">#${tag}</span>`).join('')}
                        </div>
                        <div class="artwork-actions">
                            <button class="artwork-btn buy-button ${isInCart ? 'added' : ''}" 
                                    data-id="${artwork.id}">
                                <i class="fas fa-shopping-cart"></i>
                                ${isInCart ? 'Səbətdə' : 'Səbətə əlavə et'}
                            </button>
                        </div>
                    </div>
                `;

            return artworkCard;
        }

        // Qiyməti formatla
        static formatPrice(price) {
            return new Intl.NumberFormat('az-AZ').format(price);
        }

        // Favorit əlavə et/çıxar
        static toggleFavorite(itemId, element) {
            const index = state.favorites.indexOf(itemId);
            const isAdding = index === -1;

            if (isAdding) {
                state.favorites.push(itemId);
                if (element) {
                    element.classList.add('active');
                    element.setAttribute('aria-label', 'Favorilərdən çıxar');
                }
                this.showToast('Favorilərə əlavə edildi', 'success');
            } else {
                state.favorites.splice(index, 1);
                if (element) {
                    element.classList.remove('active');
                    element.setAttribute('aria-label', 'Favoritlərə əlavə et');
                }
                this.showToast('Favorilərdən çıxarıldı', 'info');
            }

            this.saveToStorage('artvision_favorites', state.favorites);
            this.updateFavoritesCount();
        }

        // Səbətə əlavə et/çıxar
        static addToCart(artwork, element) {
            const existingIndex = state.cart.findIndex(item => item.id === artwork.id);
            const isAdding = existingIndex === -1;

            if (isAdding) {
                state.cart.push({
                    id: artwork.id,
                    title: artwork.title,
                    price: artwork.price,
                    image: artwork.image,
                    artist: state.currentArtist.name,
                    size: artwork.size
                });
                if (element) {
                    element.classList.add('added');
                    element.innerHTML = '<i class="fas fa-shopping-cart"></i> Səbətdə';
                }
                this.showToast('Məhsul səbətə əlavə edildi', 'success');
            } else {
                state.cart.splice(existingIndex, 1);
                if (element) {
                    element.classList.remove('added');
                    element.innerHTML = '<i class="fas fa-shopping-cart"></i> Səbətə əlavə et';
                }
                this.showToast('Məhsul səbətdən çıxarıldı', 'info');
            }

            this.saveToStorage('artvision_cart', state.cart);
            this.updateCartCount();
            this.updateCartDisplay();
        }

        // Səbətdən çıxar
        static removeFromCart(itemId) {
            state.cart = state.cart.filter(item => item.id !== itemId);
            this.saveToStorage('artvision_cart', state.cart);
            this.updateCartCount();
            this.updateCartDisplay();
            this.updateArtworkButtons();
        }

        // Səbəti yenilə
        static updateCartDisplay() {
            elements.cartItems.innerHTML = '';
            let total = 0;

            if (state.cart.length === 0) {
                elements.cartItems.innerHTML = `
                        <div class="empty-cart">
                            <i class="fas fa-shopping-cart"></i>
                            <h4>Səbətiniz boşdur</h4>
                            <p>İncəsənət əsərləri əlavə edin</p>
                        </div>
                    `;
            } else {
                state.cart.forEach(item => {
                    total += item.price;
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    cartItem.innerHTML = `
                            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                            <div class="cart-item-details">
                                <div class="cart-item-title">${item.title}</div>
                                <div class="cart-item-artist">${item.artist}</div>
                                <div class="cart-item-size">${item.size}</div>
                                <div class="cart-item-price">${this.formatPrice(item.price)} AZN</div>
                            </div>
                            <button class="remove-item" data-id="${item.id}" aria-label="Sil">
                                <i class="fas fa-times"></i>
                            </button>
                        `;
                    elements.cartItems.appendChild(cartItem);
                });

                this.attachCartEventListeners();
            }

            elements.cartTotal.textContent = `${this.formatPrice(total)} AZN`;
        }

        // Əsər düymələrini yenilə
        static updateArtworkButtons() {
            document.querySelectorAll('.buy-button').forEach(btn => {
                const artworkId = parseInt(btn.getAttribute('data-id'));
                const isInCart = state.cart.some(item => item.id === artworkId);

                if (isInCart) {
                    btn.classList.add('added');
                    btn.innerHTML = '<i class="fas fa-shopping-cart"></i> Səbətdə';
                } else {
                    btn.classList.remove('added');
                    btn.innerHTML = '<i class="fas fa-shopping-cart"></i> Səbətə əlavə et';
                }
            });
        }

        // Filtirlə
        static filterArtists() {
            const searchTerm = elements.searchInput.value.toLowerCase();
            const category = elements.categoryFilter.value;
            const min = elements.minPrice.value ? parseInt(elements.minPrice.value) : 0;
            const max = elements.maxPrice.value ? parseInt(elements.maxPrice.value) : Infinity;
            const sort = elements.sortBy.value;

            // Filtrlə
            state.filteredArtists = artists.filter(artist => {
                const matchesSearch = artist.name.toLowerCase().includes(searchTerm) ||
                    artist.specialty.toLowerCase().includes(searchTerm) ||
                    artist.bio.toLowerCase().includes(searchTerm);

                const matchesCategory = category === 'all' || artist.category === category;

                const avgPrice = artist.artworks.reduce((sum, artwork) => sum + artwork.price, 0) / artist.artworks.length;
                const matchesPrice = avgPrice >= min && avgPrice <= max;

                return matchesSearch && matchesCategory && matchesPrice;
            });

            // Sırala
            this.sortArtists(sort);
            this.loadArtists();
        }

        // Sırala
        static sortArtists(sortType) {
            switch (sortType) {
                case 'price-low':
                    state.filteredArtists.sort((a, b) => {
                        const avgPriceA = a.artworks.reduce((sum, artwork) => sum + artwork.price, 0) / a.artworks.length;
                        const avgPriceB = b.artworks.reduce((sum, artwork) => sum + artwork.price, 0) / b.artworks.length;
                        return avgPriceA - avgPriceB;
                    });
                    break;
                case 'price-high':
                    state.filteredArtists.sort((a, b) => {
                        const avgPriceA = a.artworks.reduce((sum, artwork) => sum + artwork.price, 0) / a.artworks.length;
                        const avgPriceB = b.artworks.reduce((sum, artwork) => sum + artwork.price, 0) / b.artworks.length;
                        return avgPriceB - avgPriceA;
                    });
                    break;
                case 'name':
                    state.filteredArtists.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'newest':
                    state.filteredArtists.sort((a, b) => b.id - a.id);
                    break;
                case 'rating':
                    state.filteredArtists.sort((a, b) => b.rating - a.rating);
                    break;
            }
        }

        // Toast mesajı göstər
        static showToast(message, type = 'info') {
            const toast = elements.toast;
            toast.className = `toast ${type} active`;
            toast.querySelector('.toast-message').textContent = message;

            setTimeout(() => {
                toast.classList.remove('active');
            }, 3000);
        }

        // LocalStorage-a yaz
        static saveToStorage(key, data) {
            localStorage.setItem(key, JSON.stringify(data));
        }

        // Sayğacları yenilə
        static updateFavoritesCount() {
            elements.favoritesCount.textContent = state.favorites.length;
        }

        static updateCartCount() {
            elements.cartCount.textContent = state.cart.length;
        }

        // Səhifənin yuxarısına sürüş
        static scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Event listenerları əlavə et
        static attachArtistEventListeners() {
            document.querySelectorAll('.action-btn.favorite').forEach(btn => {
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const artistId = parseInt(this.getAttribute('data-id'));
                    ArtGallery.toggleFavorite(artistId, this);
                });
            });
        }

        static attachArtworkEventListeners() {
            document.querySelectorAll('.favorite-button').forEach(btn => {
                btn.addEventListener('click', function () {
                    const artworkId = parseInt(this.getAttribute('data-id'));
                    ArtGallery.toggleFavorite(artworkId, this);
                });
            });

            document.querySelectorAll('.buy-button').forEach(btn => {
                btn.addEventListener('click', function () {
                    const artworkId = parseInt(this.getAttribute('data-id'));
                    const artwork = state.currentArtist.artworks.find(a => a.id === artworkId);
                    ArtGallery.addToCart(artwork, this);
                });
            });
        }

        static attachCartEventListeners() {
            document.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', function () {
                    const itemId = parseInt(this.getAttribute('data-id'));
                    ArtGallery.removeFromCart(itemId);
                });
            });
        }
    }

    // Event listenerlar - daha təşkil edilmiş
    class EventHandlers {
        static init() {
            this.handleNavigation();
            this.handleSearch();
            this.handleCart();
            this.handleMobile();
            this.handleFilters();
        }

        static handleNavigation() {
            // Geri düyməsi
            elements.backButton.addEventListener('click', () => {
                elements.artworksSection.style.display = 'none';
                document.querySelector('.section').style.display = 'block';
                ArtGallery.scrollToTop();
            });

            // Navbar linkləri
            document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
                link.addEventListener('click', function (e) {
                    if (this.getAttribute('href').startsWith('#')) {
                        e.preventDefault();
                        const targetId = this.getAttribute('href');
                        const targetSection = document.querySelector(targetId);
                        if (targetSection) {
                            window.scrollTo({
                                top: targetSection.offsetTop - 80,
                                behavior: 'smooth'
                            });
                        }
                    }
                    elements.mobileMenu.classList.remove('active');
                });
            });

            // Rəssamları kəşf et
            elements.exploreArtists.addEventListener('click', () => {
                document.querySelector('.section').scrollIntoView({ behavior: 'smooth' });
            });
        }

        static handleSearch() {
            // Axtarış panelini aç/bağla
            elements.searchToggle.addEventListener('click', () => {
                state.isFilterOpen = !state.isFilterOpen;
                elements.searchFilter.style.display = state.isFilterOpen ? 'block' : 'none';
            });

            // Axtarış
            elements.searchBtn.addEventListener('click', () => ArtGallery.filterArtists());
            elements.searchInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    ArtGallery.filterArtists();
                }
            });
        }

        static handleFilters() {
            // Filtrləri tətbiq et
            elements.applyFilters.addEventListener('click', () => ArtGallery.filterArtists());

            // Filtrləri sıfırla
            elements.resetFilters.addEventListener('click', () => {
                elements.searchInput.value = '';
                elements.categoryFilter.value = 'all';
                elements.minPrice.value = '';
                elements.maxPrice.value = '';
                elements.sortBy.value = 'default';
                ArtGallery.filterArtists();
                ArtGallery.showToast('Filtrlər sıfırlandı', 'info');
            });
        }

        static handleCart() {
            // Səbəti aç/bağla
            elements.cartBtn.addEventListener('click', () => {
                elements.cartSidebar.classList.add('active');
                elements.overlay.classList.add('active');
            });

            elements.closeCart.addEventListener('click', this.closeCart);
            elements.overlay.addEventListener('click', this.closeCart);
        }

        static closeCart() {
            elements.cartSidebar.classList.remove('active');
            elements.overlay.classList.remove('active');
        }

        static handleMobile() {
            // Mobil menyu
            elements.mobileMenuBtn.addEventListener('click', () => {
                elements.mobileMenu.classList.toggle('active');
            });

            // Overlay klik
            elements.overlay.addEventListener('click', () => {
                elements.mobileMenu.classList.remove('active');
                elements.cartSidebar.classList.remove('active');
                elements.overlay.classList.remove('active');
            });
        }
    }

    // İlkin yüklənmə
    function init() {
        ArtGallery.loadArtists();
        ArtGallery.updateCartCount();
        ArtGallery.updateCartDisplay();
        EventHandlers.init();

        // Saytın yükləndiyini göstər
        setTimeout(() => {
            ArtGallery.showToast('ArtVision-a xoş gəlmisiniz!', 'success');
        }, 1000);
    }

    // App-i başlat
    init();
});
