const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const fetch = require('node-fetch');
const gtts = require('google-tts-api'); // npm i google-tts-api

// require the units data (units-data.js exports the units array)
const units = require('./units-data.js');

// base folders
const BASE = path.join(__dirname, 'assets', 'audio');
const UNITS_BASE = path.join(BASE, 'units');
const EFFECTS_BASE = path.join(BASE, 'effects');

// ensure base folders
mkdirp.sync(UNITS_BASE);
mkdirp.sync(EFFECTS_BASE);

// helper to download an url to file
async function downloadUrlToFile(url, destPath) {
	const res = await fetch(url, { timeout: 30000 });
	if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
	const buffer = await res.buffer();
	fs.writeFileSync(destPath, buffer);
	console.log('Saved', destPath);
}

// generate TTS for text -> mp3 using google-tts-api URL
async function generateTTS(text, destFile, lang='en') {
	if (!text || !text.trim()) return;
	const url = gtts.getAudioUrl(text, { lang, slow: false, host: 'https://translate.google.com' });
	await downloadUrlToFile(url, destFile);
}

// main: iterate units/scenes
(async ()=> {
	try {
		for (const unit of units) {
			const unitDir = path.join(UNITS_BASE, `unit${unit.id}`);
			mkdirp.sync(unitDir);
			for (const scene of unit.scenes) {
				const safeSceneFile = path.join(unitDir, `scene${scene.id}_narration.mp3`);
				if (scene.narrative) {
					// truncate long text to 2000 chars to avoid URL limits; you can split into parts if needed
					const text = scene.narrative.length > 1900 ? scene.narrative.slice(0,1900) : scene.narrative;
					console.log(`Generating narration for unit ${unit.id} scene ${scene.id} -> ${safeSceneFile}`);
					await generateTTS(text, safeSceneFile, 'en');
				}
			}
		}

		// short effects (keywords) — add as needed
		const shortKeys = ['alarm','chirp','water','clock','milk','egg','door','friend','school','chicken','mango','spicy'];
		for (const k of shortKeys) {
			const dest = path.join(EFFECTS_BASE, `${k}.mp3`);
			// generate a short spoken label as fallback effect (e.g., "alarm")
			console.log(`Generating effect ${k} -> ${dest}`);
			await generateTTS(k, dest, 'en');
		}

		console.log('All audio generation done.');
	} catch (err) {
		console.error('Error generating audio:', err);
		process.exit(1);
	}
})();
