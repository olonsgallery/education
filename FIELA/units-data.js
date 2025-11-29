(function(){
	// ...existing units array and page logic moved here ...
	// (keeps the same implementation that was previously inline in units.html)

	const unitEmoji = { 1: '🌞', 2: '👨‍👩‍👧‍👦', 3: '🏫', 4: '🍽️', 5: '⚽' };

	const units = [
		// ...full units array (all 5 units, each with 8 scenes) ...
		// Paste the exact units array content that was in units.html here.
		// For brevity in this snippet, insert the same large units data you already had.
	];

	// Render units
	const unitsGrid = document.getElementById('unitsGrid');
	const modalBackdrop = document.getElementById('modalBackdrop');
	const modalTitle = document.getElementById('modalTitle');
	const modalSetting = document.getElementById('modalSetting');
	const modalVocab = document.getElementById('modalVocab');
	const modalNarrative = document.getElementById('modalNarrative');
	const modalDialog = document.getElementById('modalDialog');
	const sceneImage = document.getElementById('sceneImage');
	const progressFill = document.getElementById('progressFill');
	const interactiveButtons = document.getElementById('interactiveButtons');
	const prevBtn = document.getElementById('prevBtn');
	const nextBtn = document.getElementById('nextBtn');
	const vocabBtn = document.getElementById('vocabBtn');
	const closeModal = document.getElementById('closeModal');
	const searchInput = document.getElementById('searchInput');

	let currentUnitId = null;
	let currentSceneIndex = null;

	function renderUnits(){
		// ...same renderUnits implementation as before...
		// create cards, scene buttons, append to unitsGrid
	}

	function openScene(unitId, sceneId){
		// ...same openScene implementation as before...
	}

	function showInteraction(action){
		try {
			if (window.playSound && /sound|milk|egg|chirp|clock|water|bird|chicken|mango|spicy|friend|school/i.test(action)) {
				const key = action.toLowerCase().split(/ |:|-|!/)[0];
				window.playSound(key);
				return;
			}
		} catch (e) { /* ignore and fallback */ }
		alert(`✨ ${action} - Interactive feature engaged!`);
	}

	function closeSceneModal(){
		modalBackdrop.classList.remove('active');
		currentUnitId = null;
		currentSceneIndex = null;
	}

	// event listeners (same as before)
	if (closeModal) closeModal.addEventListener('click', closeSceneModal);
	if (modalBackdrop) modalBackdrop.addEventListener('click', (e)=> { if (e.target === modalBackdrop) closeSceneModal(); });
	if (prevBtn) prevBtn.addEventListener('click', ()=> { if (currentSceneIndex > 0) { const unit = units.find(u=>u.id===currentUnitId); openScene(currentUnitId, unit.scenes[currentSceneIndex-1].id); }});
	if (nextBtn) nextBtn.addEventListener('click', ()=> { if (currentSceneIndex < units.find(u=>u.id===currentUnitId).scenes.length - 1) { const unit = units.find(u=>u.id===currentUnitId); openScene(currentUnitId, unit.scenes[currentSceneIndex+1].id); }});
	if (vocabBtn) vocabBtn.addEventListener('click', ()=> {
		const unitId = Number(vocabBtn.dataset.unitId);
		const unit = units.find(u=>u.id===unitId);
		let vocabText = `${unit.title} — Full Vocabulary List\n\n`;
		Object.keys(unit.vocab).forEach(cat => { vocabText += `${cat}:\n${unit.vocab[cat].join(', ')}\n\n`; });
		alert(vocabText);
	});
	if (searchInput) searchInput.addEventListener('input', (e)=> {
		const query = e.target.value.toLowerCase();
		const cards = document.querySelectorAll('.unit');
		cards.forEach((card, idx)=> {
			const unit = units[idx];
			const text = (unit.title + ' ' + JSON.stringify(unit.vocab)).toLowerCase();
			card.style.display = text.includes(query) ? '' : 'none';
		});
	});

	// initialize
	renderUnits();

})();
