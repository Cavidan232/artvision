// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Rəssamlar məlumatları
    const artists = [
        {
            id: 1,
            name: "Səma Qarayeva",
            bio: "Müasir rəssam, abstrakt və portret janrlarında işləyir. 15 illik təcrübəsi var.",
            specialty: "Abstrakt rəsm",
            image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            artworks: [
                {
                    title: "Qırmızı Arzu",
                    year: 2022,
                    price: "1200 AZN",
                    description: "Bu əsər insanın daxili arzularını və ehtiraslarını təsvir edir. Qırmızı rəng enerji və həyat sevincini simvollaşdırır.",
                    image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "Mavi Sakitlik",
                    year: 2021,
                    price: "950 AZN",
                    description: "Dərin mavi rənglərlə işlənmiş bu əsər dənizin sakitliyini və sonsuzluq hissini təqdim edir.",
                    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "Şəhər Həyatı",
                    year: 2023,
                    price: "1500 AZN",
                    description: "Müasir metropolisdə gündəlik həyatın dinamikasını əks etdirən bu əsər şəhər sakinlərinin mürəkkəb münasibətlərini araşdırır.",
                    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                }
            ]
        },
        {
            id: 2,
            name: "Əli Məmmədov",
            bio: "Klassik rəsm üzrə ixtisaslaşmış, neft boya ilə işləyən rəssam. Realizm üslubunda portretlər və mənzərələr yaradır.",
            specialty: "Realizm",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            artworks: [
                {
                    title: "Qoca Balıqçı",
                    year: 2020,
                    price: "2000 AZN",
                    description: "Bu portret həyatın ağırlığını daşıyan, lakin hələ də ümidi olan bir balıqçını təsvir edir. Hər bir xətt onun həyat hekayəsini danışır.",
                    image: "https://images.unsplash.com/photo-1543857778-c4a1a5697173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "Qədim Şəhər",
                    year: 2019,
                    price: "1800 AZN",
                    description: "İçərişəhərin dar küçələrini və tarixi memarlığını əks etdirən bu əsər Azərbaycanın zəngin mədəni irsini təqdim edir.",
                    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                }
            ]
        },
        {
            id: 3,
            name: "Leyla Hüseynova",
            bio: "Rəngarəng və enerjili əsərləri ilə tanınan müasir rəssam. Əsasən akril və qarışıq texnika ilə işləyir.",
            specialty: "Müasir incəsənət",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            artworks: [
                {
                    title: "Rəqs Eden Rənglər",
                    year: 2023,
                    price: "1100 AZN",
                    description: "Bu əsər rənglərin harmonik rəqsini təsvir edir. Hər bir rəng öz hekayəsini danışır və digər rənglərlə dialoq qurur.",
                    image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "Qadın Gücü",
                    year: 2022,
                    price: "1350 AZN",
                    description: "Bu əsər müasir dövrdə qadınların gücünü və müstəqilliyini tərifləyir. Simvollar və metaforalar vasitəsilə qadın həssaslığını və qüdrətini birləşdirir.",
                    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "Təbiət Səsi",
                    year: 2021,
                    price: "900 AZN",
                    description: "Təbiətin gözəlliyini və sakitliyini əks etdirən bu əsər insanın təbiətlə olan əlaqəsini araşdırır.",
                    image: "https://images.unsplash.com/photo-1543857778-c4a1a5697173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                }
            ]
        },
        {
            id: 4,
            name: "Nigar Əliyeva",
            bio: "Miniatür və kaligrafiya üzrə ixtisaslaşmış ənənəvi incəsənət rəssamı. Əsərlərində Şərq motivlərindən geniş istifadə edir.",
            specialty: "Miniatür",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            artworks: [
                {
                    title: "Şahnamə Səhnəsi",
                    year: 2022,
                    price: "2500 AZN",
                    description: "Firdovsinin Şahnamə əsərindən bir səhnəni təsvir edən bu miniatür ənənəvi texnika ilə işlənmişdir. Hər bir detal diqqətlə işlənib.",
                    image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "Səma Yazısı",
                    year: 2023,
                    price: "1800 AZN",
                    description: "Ənənəvi ərəb kaligrafiyası ilə yaradılmış bu əsər məhəbbət haqqında şeiri təsvir edir. Hərflərin harmonik axını izləyicini sehrləyir.",
                    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                }
            ]
        }
    ];

    const artistsContainer = document.getElementById('artistsContainer');
    const artworksSection = document.getElementById('artworksSection');
    const artistInfo = document.getElementById('artistInfo');
    const artworksContainer = document.getElementById('artworksContainer');
    const backButton = document.getElementById('backButton');

    // Rəssamları yüklə
    function loadArtists() {
        artistsContainer.innerHTML = '';
        artists.forEach(artist => {
            const artistCard = document.createElement('div');
            artistCard.className = 'artist-card';
            artistCard.innerHTML = `
                <img src="${artist.image}" alt="${artist.name}" class="artist-image">
                <div class="artist-details">
                    <h3 class="artist-name">${artist.name}</h3>
                    <p class="artist-bio">${artist.bio}</p>
                    <span class="artist-specialty">${artist.specialty}</span>
                </div>
            `;
            artistCard.addEventListener('click', () => showArtistArtworks(artist));
            artistsContainer.appendChild(artistCard);
        });
    }

    // Rəssamın əsərlərini göstər
    function showArtistArtworks(artist) {
        document.querySelector('.artists-section').style.display = 'none';
        artworksSection.style.display = 'block';
        
        // Rəssam məlumatlarını yüklə
        artistInfo.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}" class="artist-info-image">
            <div class="artist-info-details">
                <h2>${artist.name}</h2>
                <p>${artist.bio}</p>
                <span class="artist-specialty">${artist.specialty}</span>
            </div>
        `;
        
        // Əsərləri yüklə
        artworksContainer.innerHTML = '';
        artist.artworks.forEach(artwork => {
            const artworkCard = document.createElement('div');
            artworkCard.className = 'artwork-card';
            artworkCard.innerHTML = `
                <img src="${artwork.image}" alt="${artwork.title}" class="artwork-image">
                <div class="artwork-details">
                    <h3 class="artwork-title">${artwork.title}</h3>
                    <p class="artwork-year">${artwork.year}</p>
                    <p class="artwork-price">${artwork.price}</p>
                    <p class="artwork-description">${artwork.description}</p>
                    <button class="buy-button">Satın Al</button>
                </div>
            `;
            artworksContainer.appendChild(artworkCard);
        });
    }

    // Geri düyməsinə klik etdikdə
    backButton.addEventListener('click', () => {
        artworksSection.style.display = 'none';
        document.querySelector('.artists-section').style.display = 'block';
    });

    // Səhifə yükləndikdə rəssamları yüklə
    loadArtists();
});