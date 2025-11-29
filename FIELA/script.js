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