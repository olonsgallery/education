document.addEventListener('DOMContentLoaded', ()=>{

	// vocabulary dataset
	const vocabulary = [
		{ word: "apple", pronunciation: "ˈæp.əl" },
		{ word: "banana", pronunciation: "bəˈnæn.ə" },
		{ word: "cherry", pronunciation: "ˈtʃer.i" },
	];

	// helper: update widget if present
	function displayWord() {
		const wordEl = document.getElementById("word");
		const pronEl = document.getElementById("pronunciation");
		if (!wordEl || !pronEl) return;
		const randomIndex = Math.floor(Math.random() * vocabulary.length);
		const wordObj = vocabulary[randomIndex];
		wordEl.textContent = `Word: ${wordObj.word}`;
		pronEl.textContent = `Pronunciation: ${wordObj.pronunciation}`;
		// store current word for pronounce button
		wordEl.dataset.current = wordObj.word;
	}

	// shared sound player (fallback to emoji/alert if no audio file)
	window.playSound = function(wordKey) {
		// attempt to play audio file in a safe way; path can be replaced with real assets
		try {
			const base = 'assets/audio/'; // adjust if you have assets
			const src = `${base}${encodeURIComponent(wordKey)}.mp3`;
			const audio = new Audio(src);
			audio.play().catch(()=> {
				// fallback message if audio can't play
				console.log('Audio play failed for', src);
				alert(`🔊 (sound) ${wordKey}`);
			});
		} catch (e) {
			alert(`🔊 ${wordKey}`);
		}
	};

	// safe playAudio wrapper (keeps backward compatibility)
	function playAudio(word) {
		if (!word) return;
		window.playSound(word);
	}

	// expose startLearning globally and make it navigate to units page
	window.startLearning = function() {
		// try to navigate to units page; fallback to alert
		const unitsPath = 'units.html';
		try {
			location.href = unitsPath;
		} catch (e) {
			alert('Welcome to FIELA! Open Units at ' + unitsPath);
		}
	};

	// hook up widget buttons only when present
	const nextBtn = document.getElementById("nextWord");
	if (nextBtn) nextBtn.addEventListener("click", displayWord);

	const pronounceBtn = document.getElementById("pronounce");
	if (pronounceBtn) {
		pronounceBtn.addEventListener("click", () => {
			const wordEl = document.getElementById("word");
			const current = wordEl && wordEl.dataset.current ? wordEl.dataset.current : (wordEl ? wordEl.textContent.split(': ')[1] : '');
			if (current) playAudio(current);
			else alert('No word selected');
		});
	}

	// initial show if widget exists
	displayWord();

	// Smooth scroll for navigation links (only when anchors exist)
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) target.scrollIntoView({ behavior: 'smooth' });
		});
	});

	// Add animation on scroll for any feature-card elements
	const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
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

}); // DOMContentLoaded end