// Store timestamps (in seconds) in array
const lyricSync = 
	[4,
	12, // Sintang Paaralan
	15, // Tanglaw ka ng bayan
	18, // Pandayan ng isip ng kabataan
	24, // Kami ay dumating nang salat sa yaman
	29.5, // Hanap na dunong ay iyong alay
	35, // Ang layunin mong makatao
	41.5, // Dinarangal ang Pilipino
	48, // Ang iyong aral, diwa, adhikang taglay
	54, // PUP, aming gabay
	56, // Paaralang dakila
	62, // PUP, pinagpala
	68, // Gagamitin ang karunungan
	75, // Mula sa iyo, para sa bayan
	80, // Ang iyong aral, diwa, adhikang taglay
	86, // PUP, aming gabay
	89, // Paaralang dakila
	96, // PUP, pinagpala
	108];

// References to HTML elements
const audio = document.getElementById('puphymn');
const lyrics = document.getElementById('lyrics');

// Function to sync lyrics with audio playback
function syncLyrics() {
	var audioTime = audio.currentTime;
	var lyricLine = 0;
	const x = lyricSync.length;

	for (let i = 0; i < x; i++) {
		if (lyricLine < x && audioTime >= lyricSync[i])
			{ lyricLine = i; }
	}
	
	// Get current line
	var currentLine = document.getElementById('lyric' + lyricLine);

	// Calculate scroll position
	var scrollPosition = (lyricLine - 4) * (x + 9);

	// Update scroll position
	lyrics.scrollTop = scrollPosition;

	// Set lyric lines that have already been passed back to normal
	for(let i = 0; i <= x - 1; i++){
		document.getElementById('lyric' + i).style.color = "gray";
        document.getElementById('lyric' + i).style.fontWeight = "normal";
	}
	
	// Highlights the current lyric lines
    if (lyricLine >= 0 && lyricLine <= x - 1){
            currentLine.style.color = "red";
            currentLine.style.fontWeight = "bold";
	}
}

// Takes the current time and runs function "syncLyrics"
audio.addEventListener('timeupdate', syncLyrics);