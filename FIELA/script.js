const vocabulary = [
    { word: "apple", pronunciation: "ˈæp.əl" },
    { word: "banana", pronunciation: "bəˈnæn.ə" },
    { word: "cherry", pronunciation: "ˈtʃer.i" },
];

function displayWord() {
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    const wordObj = vocabulary[randomIndex];
    const wordElement = document.getElementById("word");
    const pronunciationElement = document.getElementById("pronunciation");

    wordElement.textContent = `Word: ${wordObj.word}`;
    pronunciationElement.textContent = `Pronunciation: ${wordObj.pronunciation}`;
}

function playAudio(word) {
    const audio = new Audio(`path/to/audio/${word}.mp3`);
    audio.play();
}

document.getElementById("nextWord").addEventListener("click", () => {
    displayWord();
});

document.getElementById("pronounce").addEventListener("click", () => {
    const currentWord = document.getElementById("word").textContent.split(": ")[1];
    playAudio(currentWord);
});

// Initial call to display a word
displayWord();

function startLearning() {
    alert('Welcome to FIELA! Learning module coming soon! 🎉');
    // Replace with actual navigation to learning page
    // window.location.href = '/learning.html';
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});