// ===== Sample Data Structure =====
// This is where you'll store your album and photo data
const albumsData = [
    {
        id: 1,
        year: "2024",
        coverImage: "https://via.placeholder.com/400x300/4B0082/FFFFFF?text=2024",
        photoCount: 12,
        photos: [
            {
                id: 1,
                src: "https://via.placeholder.com/600x400/FF8C00/FFFFFF?text=Photo+1",
                title: "Summer Adventure",
                date: "July 15, 2024",
                description: "An amazing summer day at the beach with friends. The sunset was absolutely breathtaking and we spent hours just enjoying the moment.",
                likes: 0,
                additionalPhotos: [
                    "https://via.placeholder.com/600x400/DC143C/FFFFFF?text=Extra+1",
                    "https://via.placeholder.com/600x400/2E0854/FFFFFF?text=Extra+2"
                ]
            },
            {
                id: 2,
                src: "https://via.placeholder.com/600x400/DC143C/FFFFFF?text=Photo+2",
                title: "Birthday Celebration",
                date: "August 22, 2024",
                description: "Celebrating another year surrounded by loved ones. The cake was delicious and the memories even sweeter.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 3,
                src: "https://via.placeholder.com/600x400/2E0854/FFFFFF?text=Photo+3",
                title: "Mountain Hiking",
                date: "September 10, 2024",
                description: "Conquering new heights and discovering beautiful views. Nature always reminds me of how small we are.",
                likes: 0,
                additionalPhotos: [
                    "https://via.placeholder.com/600x400/FF8C00/FFFFFF?text=Extra+1"
                ]
            },
            {
                id: 4,
                src: "https://via.placeholder.com/600x400/FF8C00/FFFFFF?text=Photo+4",
                title: "Fall Foliage",
                date: "October 5, 2024",
                description: "The colors of autumn never cease to amaze me. A perfect day for a walk in the park.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 5,
                src: "https://via.placeholder.com/600x400/4B0082/FFFFFF?text=Photo+5",
                title: "Coffee Shop Moment",
                date: "November 12, 2024",
                description: "Finding peace in a cozy corner with a good book and great coffee.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 6,
                src: "https://via.placeholder.com/600x400/DC143C/FFFFFF?text=Photo+6",
                title: "Holiday Preparations",
                date: "December 20, 2024",
                description: "Getting into the holiday spirit with decorations and festive cheer.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 7,
                src: "https://via.placeholder.com/600x400/2E0854/FFFFFF?text=Photo+7",
                title: "New Year's Eve",
                date: "December 31, 2024",
                description: "Saying goodbye to an amazing year filled with growth and memories.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 8,
                src: "https://via.placeholder.com/600x400/FF8C00/FFFFFF?text=Photo+8",
                title: "Spring Blossoms",
                date: "April 3, 2024",
                description: "Cherry blossoms in full bloom marking the arrival of spring.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 9,
                src: "https://via.placeholder.com/600x400/4B0082/FFFFFF?text=Photo+9",
                title: "Concert Night",
                date: "May 18, 2024",
                description: "Live music and unforgettable performances under the stars.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 10,
                src: "https://via.placeholder.com/600x400/DC143C/FFFFFF?text=Photo+10",
                title: "Road Trip",
                date: "June 7, 2024",
                description: "Adventures on the open road with no destination in mind.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 11,
                src: "https://via.placeholder.com/600x400/2E0854/FFFFFF?text=Photo+11",
                title: "Family Dinner",
                date: "March 14, 2024",
                description: "Nothing beats a home-cooked meal with family.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 12,
                src: "https://via.placeholder.com/600x400/FF8C00/FFFFFF?text=Photo+12",
                title: "Graduation Day",
                date: "May 30, 2024",
                description: "Celebrating achievements and looking forward to new beginnings.",
                likes: 0,
                additionalPhotos: []
            }
        ]
    },
    {
        id: 2,
        year: "2023",
        coverImage: "https://via.placeholder.com/400x300/DC143C/FFFFFF?text=2023",
        photoCount: 8,
        photos: [
            {
                id: 13,
                src: "https://via.placeholder.com/600x400/4B0082/FFFFFF?text=2023-Photo+1",
                title: "Winter Wonderland",
                date: "January 10, 2023",
                description: "First snow of the year transforming everything into a magical landscape.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 14,
                src: "https://via.placeholder.com/600x400/FF8C00/FFFFFF?text=2023-Photo+2",
                title: "Valentine's Day",
                date: "February 14, 2023",
                description: "Love is in the air and chocolate is everywhere!",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 15,
                src: "https://via.placeholder.com/600x400/2E0854/FFFFFF?text=2023-Photo+3",
                title: "Beach Sunset",
                date: "July 20, 2023",
                description: "Golden hour by the ocean - pure perfection.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 16,
                src: "https://via.placeholder.com/600x400/DC143C/FFFFFF?text=2023-Photo+4",
                title: "Halloween Fun",
                date: "October 31, 2023",
                description: "Spooky season with creative costumes and lots of candy!",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 17,
                src: "https://via.placeholder.com/600x400/FF8C00/FFFFFF?text=2023-Photo+5",
                title: "Thanksgiving Feast",
                date: "November 23, 2023",
                description: "Grateful for good food and even better company.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 18,
                src: "https://via.placeholder.com/600x400/4B0082/FFFFFF?text=2023-Photo+6",
                title: "City Lights",
                date: "September 5, 2023",
                description: "Urban exploration and discovering hidden gems in the city.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 19,
                src: "https://via.placeholder.com/600x400/2E0854/FFFFFF?text=2023-Photo+7",
                title: "Garden Party",
                date: "June 15, 2023",
                description: "Afternoon tea surrounded by blooming flowers.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 20,
                src: "https://via.placeholder.com/600x400/DC143C/FFFFFF?text=2023-Photo+8",
                title: "Art Museum Visit",
                date: "April 8, 2023",
                description: "Appreciating creativity and getting inspired by masterpieces.",
                likes: 0,
                additionalPhotos: []
            }
        ]
    },
    {
        id: 3,
        year: "2022",
        coverImage: "https://via.placeholder.com/400x300/2E0854/FFFFFF?text=2022",
        photoCount: 6,
        photos: [
            {
                id: 21,
                src: "https://via.placeholder.com/600x400/FF8C00/FFFFFF?text=2022-Photo+1",
                title: "New Year Resolutions",
                date: "January 1, 2022",
                description: "Starting the year with goals and aspirations.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 22,
                src: "https://via.placeholder.com/600x400/DC143C/FFFFFF?text=2022-Photo+2",
                title: "Spring Break",
                date: "March 20, 2022",
                description: "Much needed break and adventures with friends.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 23,
                src: "https://via.placeholder.com/600x400/4B0082/FFFFFF?text=2022-Photo+3",
                title: "Summer Festival",
                date: "August 12, 2022",
                description: "Music, food, and amazing vibes all around.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 24,
                src: "https://via.placeholder.com/600x400/2E0854/FFFFFF?text=2022-Photo+4",
                title: "First Day of School",
                date: "September 1, 2022",
                description: "New beginnings and exciting opportunities ahead.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 25,
                src: "https://via.placeholder.com/600x400/FF8C00/FFFFFF?text=2022-Photo+5",
                title: "Thanksgiving Together",
                date: "November 24, 2022",
                description: "Family traditions and creating new memories.",
                likes: 0,
                additionalPhotos: []
            },
            {
                id: 26,
                src: "https://via.placeholder.com/600x400/DC143C/FFFFFF?text=2022-Photo+6",
                title: "Christmas Magic",
                date: "December 25, 2022",
                description: "The most wonderful time of the year with loved ones.",
                likes: 0,
                additionalPhotos: []
            }
        ]
    }
];

// ===== State Management =====
let currentAlbum = null;
let currentPhoto = null;
let subscribedAlbums = new Set();
let likedPhotos = new Set();

// Load saved data from localStorage
function loadSavedData() {
    const savedSubscriptions = localStorage.getItem('subscribedAlbums');
    const savedLikes = localStorage.getItem('likedPhotos');

    if (savedSubscriptions) {
        subscribedAlbums = new Set(JSON.parse(savedSubscriptions));
    }

    if (savedLikes) {
        likedPhotos = new Set(JSON.parse(savedLikes));
        // Update like counts
        likedPhotos.forEach(photoId => {
            albumsData.forEach(album => {
                const photo = album.photos.find(p => p.id === photoId);
                if (photo) photo.likes++;
            });
        });
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('subscribedAlbums', JSON.stringify([...subscribedAlbums]));
    localStorage.setItem('likedPhotos', JSON.stringify([...likedPhotos]));
}

// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Load saved data
    loadSavedData();

    // Initialize blog page if we're on it
    if (document.getElementById('albumsGrid')) {
        initBlogPage();
    }

    // Initialize contact form if we're on it
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
});

// ===== Blog Page Initialization =====
function initBlogPage() {
    const albumsGrid = document.getElementById('albumsGrid');

    // Sort albums by year (newest first)
    const sortedAlbums = [...albumsData].sort((a, b) => parseInt(b.year) - parseInt(a.year));

    sortedAlbums.forEach(album => {
        const albumCard = createAlbumCard(album);
        albumsGrid.appendChild(albumCard);
    });
}

function createAlbumCard(album) {
    const card = document.createElement('div');
    card.className = 'album-card';
    card.innerHTML = `
        <img src="${album.coverImage}" alt="${album.year}" class="album-cover">
        <div class="album-info">
            <div class="album-year">${album.year}</div>
            <div class="album-count">${album.photoCount} memories</div>
        </div>
    `;

    card.addEventListener('click', () => openAlbum(album));

    return card;
}

// ===== Album Modal =====
function openAlbum(album) {
    currentAlbum = album;
    const modal = document.getElementById('albumModal');
    const albumTitle = document.getElementById('albumTitle');
    const photosGrid = document.getElementById('photosGrid');
    const subscribeBtn = document.getElementById('subscribeBtn');

    albumTitle.textContent = album.year;
    photosGrid.innerHTML = '';

    // Update subscribe button
    updateSubscribeButton(album.id);

    album.photos.forEach(photo => {
        const photoItem = createPhotoItem(photo);
        photosGrid.appendChild(photoItem);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function createPhotoItem(photo) {
    const item = document.createElement('div');
    item.className = 'photo-item';
    item.innerHTML = `
        <img src="${photo.src}" alt="${photo.title}">
        <div class="photo-overlay">
            <p>${photo.title}</p>
        </div>
    `;

    item.addEventListener('click', () => openPhotoDetail(photo));

    return item;
}

function updateSubscribeButton(albumId) {
    const subscribeBtn = document.getElementById('subscribeBtn');
    const isSubscribed = subscribedAlbums.has(albumId);

    subscribeBtn.className = isSubscribed ? 'subscribe-btn subscribed' : 'subscribe-btn';
    subscribeBtn.querySelector('.text').textContent = isSubscribed ? 'Subscribed' : 'Subscribe';
}

// Subscribe button handler
document.addEventListener('DOMContentLoaded', function() {
    const subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (currentAlbum) {
                if (subscribedAlbums.has(currentAlbum.id)) {
                    subscribedAlbums.delete(currentAlbum.id);
                } else {
                    subscribedAlbums.add(currentAlbum.id);
                }
                updateSubscribeButton(currentAlbum.id);
                saveData();
            }
        });
    }
});

// Close album modal
document.addEventListener('DOMContentLoaded', function() {
    const closeAlbumBtn = document.getElementById('closeAlbumModal');
    if (closeAlbumBtn) {
        closeAlbumBtn.addEventListener('click', function() {
            const modal = document.getElementById('albumModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            currentAlbum = null;
        });
    }
});

// ===== Photo Detail Modal =====
function openPhotoDetail(photo) {
    currentPhoto = photo;
    const modal = document.getElementById('photoModal');
    const mainPhoto = document.getElementById('mainPhoto');
    const photoTitle = document.getElementById('photoTitle');
    const photoDate = document.getElementById('photoDate');
    const photoDescription = document.getElementById('photoDescription');
    const additionalPhotos = document.getElementById('additionalPhotos');
    const shareLink = document.getElementById('shareLink');
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('likeCount');

    mainPhoto.src = photo.src;
    mainPhoto.alt = photo.title;
    photoTitle.textContent = photo.title;
    photoDate.textContent = photo.date;
    photoDescription.textContent = photo.description;

    // Generate unique share link
    const baseUrl = window.location.origin + window.location.pathname;
    const photoLink = `${baseUrl}?photo=${photo.id}`;
    shareLink.value = photoLink;

    // Update like button
    updateLikeButton(photo);

    // Load additional photos
    additionalPhotos.innerHTML = '';
    if (photo.additionalPhotos && photo.additionalPhotos.length > 0) {
        photo.additionalPhotos.forEach(additionalSrc => {
            const img = document.createElement('img');
            img.src = additionalSrc;
            img.alt = 'Additional photo';
            img.addEventListener('click', () => {
                mainPhoto.src = additionalSrc;
            });
            additionalPhotos.appendChild(img);
        });
    }

    modal.classList.add('active');
}

function updateLikeButton(photo) {
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('likeCount');
    const isLiked = likedPhotos.has(photo.id);

    likeBtn.className = isLiked ? 'like-btn liked' : 'like-btn';
    likeCount.textContent = photo.likes;
}

// Like button handler
document.addEventListener('DOMContentLoaded', function() {
    const likeBtn = document.getElementById('likeBtn');
    if (likeBtn) {
        likeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (currentPhoto) {
                if (likedPhotos.has(currentPhoto.id)) {
                    likedPhotos.delete(currentPhoto.id);
                    currentPhoto.likes--;
                } else {
                    likedPhotos.add(currentPhoto.id);
                    currentPhoto.likes++;
                }
                updateLikeButton(currentPhoto);
                saveData();
            }
        });
    }
});

// Copy link button handler
document.addEventListener('DOMContentLoaded', function() {
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', function() {
            const shareLink = document.getElementById('shareLink');
            shareLink.select();
            document.execCommand('copy');

            copyLinkBtn.textContent = 'Copied!';
            copyLinkBtn.classList.add('copied');

            setTimeout(() => {
                copyLinkBtn.textContent = 'Copy Link';
                copyLinkBtn.classList.remove('copied');
            }, 2000);
        });
    }
});

// Close photo modal
document.addEventListener('DOMContentLoaded', function() {
    const closePhotoBtn = document.getElementById('closePhotoModal');
    if (closePhotoBtn) {
        closePhotoBtn.addEventListener('click', function() {
            const modal = document.getElementById('photoModal');
            modal.classList.remove('active');
            currentPhoto = null;
        });
    }
});

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    const albumModal = document.getElementById('albumModal');
    const photoModal = document.getElementById('photoModal');

    if (e.target === albumModal) {
        albumModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        currentAlbum = null;
    }

    if (e.target === photoModal) {
        photoModal.classList.remove('active');
        currentPhoto = null;
    }
});

// ===== Contact Form Handler =====
function handleContactFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Here you would typically send this data to a server
    console.log('Form submitted:', { name, email, subject, message });

    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
}

// ===== Deep linking support for photos =====
window.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const photoId = urlParams.get('photo');

    if (photoId && document.getElementById('albumsGrid')) {
        // Find the photo and open it
        let foundPhoto = null;
        let foundAlbum = null;

        for (const album of albumsData) {
            const photo = album.photos.find(p => p.id === parseInt(photoId));
            if (photo) {
                foundPhoto = photo;
                foundAlbum = album;
                break;
            }
        }

        if (foundPhoto && foundAlbum) {
            openAlbum(foundAlbum);
            setTimeout(() => {
                openPhotoDetail(foundPhoto);
            }, 300);
        }
    }
});
