// script.js
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const description = urlParams.get('description');
    const genre = urlParams.get('genre');
    const releaseDate = urlParams.get('releaseDate');
    const rating = urlParams.get('rating');
    const trailerUrl = urlParams.get('trailerUrl');
    const reviews = JSON.parse(urlParams.get('reviews') || '[]');

    if (title) {
        document.getElementById('content-title').innerText = title;
    }
    if (description) {
        document.getElementById('content-description').innerText = description;
    }
    if (genre) {
        document.getElementById('content-genre').innerText = genre;
    }
    if (releaseDate) {
        document.getElementById('content-release-date').innerText = releaseDate;
    }
    if (rating) {
        document.getElementById('content-rating').innerText = rating;
    }
    if (trailerUrl) {
        document.getElementById('trailer').src = trailerUrl;
    }
    if (reviews.length > 0) {
        const reviewsList = document.getElementById('reviews-list');
        reviews.forEach(review => {
            const li = document.createElement('li');
            li.innerText = review;
            reviewsList.appendChild(li);
        });
    }

    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');

    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
    }

    if (searchBar) {
        searchBar.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                handleSearch();
            }
        });
    }
});

function handleSearch() {
    const searchBar = document.getElementById('search-bar');
    const query = searchBar.value.toLowerCase();
    const searchResults = document.getElementById('search-results');

    searchResults.innerHTML = ''; // Clear previous results

    const contentItems = [
        { title: 'Movie 1', description: 'Description of Movie 1', genre: 'Action', releaseDate: '2022-01-01', rating: '4.5', image: 'images/poster 1.png', trailerUrl: 'https://www.youtube.com/embed/QWbMckU3AOQ', reviews: ['Great movie!', 'Loved it!'] },
        { title: 'Movie 2', description: 'Description of Movie 2', genre: 'Drama', releaseDate: '2022-02-01', rating: '4.0', image: 'images/poster 2.png', trailerUrl: 'https://www.youtube.com/embed/KK8FHdFluOQ', reviews: ['Very touching.', 'Well acted.'] },
        { title: 'Movie 3', description: 'Description of Movie 3', genre: 'Comedy', releaseDate: '2022-03-01', rating: '3.5', image: 'images/poster 3.png', trailerUrl: 'https://www.youtube.com/embed/Hgeu5rhoxxY', reviews: ['Hilarious!', 'A fun watch.'] },
        { title: 'Movie 4', description: 'Description of Movie 4', genre: 'Horror', releaseDate: '2022-04-01', rating: '4.8', image: 'images/poster 4.png', trailerUrl: 'https://www.youtube.com/embed/hA6hldpSTF8', reviews: ['Scary!', 'Very intense.'] },
        { title: 'Series 1', description: 'Description of Series 1', genre: 'Action', releaseDate: '2022-01-01', rating: '4.5', image: 'images/poster 5.png', trailerUrl: 'https://www.youtube.com/embed/ue80QwXMRHg', reviews: ['Exciting!', 'Full of action.'] },
        { title: 'Series 2', description: 'Description of Series 2', genre: 'Drama', releaseDate: '2022-02-01', rating: '4.0', image: 'images/poster 6.png', trailerUrl: 'https://www.youtube.com/embed/dug56u8NN7g', reviews: ['Very dramatic.', 'Emotional.'] },
        { title: 'Series 3', description: 'Description of Series 3', genre: 'Comedy', releaseDate: '2022-03-01', rating: '3.5', image: 'images/poster 7.png', trailerUrl: 'https://www.youtube.com/embed/IWBsDaFWyTE', reviews: ['Laugh out loud!', 'So funny.'] },
        { title: 'Series 4', description: 'Description of Series 4', genre: 'Horror', releaseDate: '2022-04-01', rating: '4.8', image: 'images/poster 8.png', trailerUrl: 'https://www.youtube.com/embed/xOsLIiBStEs', reviews: ['Terrifying!', 'Can\'t watch alone.'] },
        { title: 'Recommended 1', description: 'Description of Recommended 1', genre: 'Action', releaseDate: '2022-01-01', rating: '4.5', image: 'images/poster 9.png', trailerUrl: 'https://www.youtube.com/embed/1VIZ89FEjYI', reviews: ['Highly recommended!', 'Must watch.'] },
        { title: 'Recommended 2', description: 'Description of Recommended 2', genre: 'Drama', releaseDate: '2022-02-01', rating: '4.0', image: 'images/poster 10.png', trailerUrl: 'https://www.youtube.com/embed/6ZfuNTqbHE8', reviews: ['Very moving.', 'Great story.'] },
        { title: 'Recommended 3', description: 'Description of Recommended 3', genre: 'Comedy', releaseDate: '2022-03-01', rating: '3.5', image: 'images/poster 11.png', trailerUrl: 'https://www.youtube.com/embed/mYfJxlgR2jw', reviews: ['So funny!', 'Loved every episode.'] },
        { title: 'Recommended 4', description: 'Description of Recommended 4', genre: 'Horror', releaseDate: '2022-04-01', rating: '4.8', image: 'images/poster 12.png', trailerUrl: 'https://www.youtube.com/embed/zyYgDtY2AMY', reviews: ['Frightening!', 'So scary.'] }
    ];

    const results = contentItems.filter(item => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query));

    results.forEach(item => {
        const contentItem = document.createElement('a');
        contentItem.href = `details.html?title=${encodeURIComponent(item.title)}&description=${encodeURIComponent(item.description)}&genre=${encodeURIComponent(item.genre)}&releaseDate=${encodeURIComponent(item.releaseDate)}&rating=${encodeURIComponent(item.rating)}&trailerUrl=${encodeURIComponent(item.trailerUrl)}&reviews=${encodeURIComponent(JSON.stringify(item.reviews))}`;
        contentItem.className = 'content-item';
        
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        
        const p = document.createElement('p');
        p.innerText = item.title;
        
        contentItem.appendChild(img);
        contentItem.appendChild(p);
        searchResults.appendChild(contentItem);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slider');
    const totalSlides = slides.length;

    // Clone first and last slides
    const firstSlideClone = slides[0].cloneNode(true);
    const lastSlideClone = slides[totalSlides - 1].cloneNode(true);

    // Append and prepend clones
    carousel.appendChild(firstSlideClone);
    carousel.insertBefore(lastSlideClone, slides[0]);

    let currentIndex = 1; // Start with the first actual slide
    const slideWidth = 100 / (totalSlides + 2); // Including the cloned slides

    function showNextSlide() {
        currentIndex++;
        const offset = -currentIndex * slideWidth;

        carousel.style.transition = 'transform 1s ease';
        carousel.style.transform = `translateX(${offset}%)`;

        // Reset position after reaching the last clone
        if (currentIndex === totalSlides + 1) {
            setTimeout(() => {
                carousel.style.transition = 'none';
                currentIndex = 1;
                carousel.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
            }, 1000);
        }
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds

    // Reset position after reaching the first clone
    carousel.addEventListener('transitionend', () => {
        if (currentIndex === 0) {
            carousel.style.transition = 'none';
            currentIndex = totalSlides;
            carousel.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});



