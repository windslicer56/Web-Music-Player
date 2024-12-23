//DOM Manipulation
const playButton = document.getElementById("play");
const playerSongTitle = document.getElementById("player-song-title");
const playerSongArtist = document.getElementById("player-song-artist");
const previousButton = document.getElementById("previous");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const shuffleButton = document.getElementById("shuffle");
const playlistSongs = document.getElementById("playlist-songs");

//Array of Song objects
const allSongs = [
  {
    id: 0,
    title: "We Must Go",
    artist: "Yuki Hayashi",
    duration: "6:15",
    src: "1.01 We Must Go.mp3", 
  },
  {
    id: 1,
    title: "Campus Life",
    artist: "Yuki Hayashi",
    duration: "1:36",
    src: "1.02 Campus Life.mp3",
  },
  {
    id: 2,
    title: "Chikusei Dorm",
    artist: "Yuki Hayashi",
    duration: "1:33",
    src: "1.03 Chikusei Dorm.mp3",
  },
  {
    id: 3,
    title: "Shooting Star",
    artist: "Yuki Hayashi",
    duration: "2:45",
    src: "1.04 Shooting Star.mp3",
  },
  {
    id: 4,
    title: "What It Means to Run",
    artist: "Yuki Hayashi",
    duration: "2:28",
    src: "1.05 What It Means to Run.mp3",
  },
  { 
    id: 5,
    title: "The Residents",
    artist: "Yuki Hayashi",
    duration: "1:22",
    src: "1.06 The Residents.mp3",
  },
  {
    id: 6, 
    title: "Motive",
    artist: "Yuki Hayashi",
    duration: "2:27",
    src: "1.07 Motive.mp3",
  },
  {
    id: 7,
    title: "The Only Girl",
    artist: "Yuki Hayashi",
    duration: "1:19",
    src: "1.08 The Only Girl.mp3",
  },
  {
    id: 8,
    title: "Still Wear The Jersey",
    artist: "Yuki Hayashi",
    duration: "1:34",
    src: "1.09 Still Wear The Jersey.mp3",
  },
  {
    id: 9,
    title: "The Past",
    artist: "Yuki Hayashi",
    duration: "2:13",
    src: "1.10 The Past.mp3",
  },
  {
    id: 10,
    title: "Mutual",
    artist: "Yuki Hayashi",
    duration: "2:04",
    src: "1.11 Mutual.mp3",
  },
  {
    id: 11,
    title: "The Scream",
    artist: "Yuki Hayashi",
    duration: "1:39",
    src: "1.12 The Scream.mp3",
  },
  {
    id: 12,
    title: "Alone",
    artist: "Yuki Hayashi",
    duration: "4:17",
    src: "1.13 Alone.mp3",
  },
  {
    id: 13,
    title: "Eyecatch",
    artist: "Yuki Hayashi",
    duration: "0:11",
    src: "1.14 Eyecatch.mp3",
  },
  {
    id: 14, 
    title: "Haiji the Strategist",
    artist: "Yuki Hayashi",
    duration: "1:18",
    src: "1.15 Haiji the Strategist.mp3",
  },
  {
    id: 15,
    title: "Demon Sergeant",
    artist: "Yuki Hayashi",
    duration: "1:32",
    src: "1.16 Demon Sergeant.mp3",
  },
  {
    id: 16,
    title: "Team",
    artist: "Yuki Hayashi",
    duration: "1:48",
    src: "1.17 Team.mp3",
  },
  {
    id: 17,
    title: "In a Sweat!",
    artist: "Yuki Hayashi",
    duration: "2:00",
    src: "1.18 In a Sweat!.mp3",
  },
  {
    id: 18,
    title: "Onward to Hakone",
    artist: "Yuki Hayashi",
    duration: "1:39",
    src: "1.19 Onward to Hakone.mp3",
  },
  {
    id: 19,
    title: "One Step Forward",
    artist: "Yuki Hayashi",
    duration: "2:19",
    src: "1.20 One Step Forward.mp3",
  },
  {
    id: 20,
    title: "Reality",
    artist: "Yuki Hayashi",
    duration: "4:30",
    src: "1.21 Reality.mp3",
  },
  {
    id: 21,
    title: "Night Sky",
    artist: "Yuki Hayashi",
    duration: "2:28",
    src: "1.22 Night Sky.mp3",
  },
  {
    id: 22,
    title: "Track Meet",
    artist: "Yuki Hayashi",
    duration: "3:05",
    src: "1.23 Track Meet.mp3",
  },
  {
    id: 23,
    title: "Distance",
    artist: "Yuki Hayashi",
    duration: "2:42",
    src: "1.24 Distance.mp3",
  },
  {
    id: 24,
    title: "Trust",
    artist: "Yuki Hayashi",
    duration: "2:17",
    src: "1.25 Trust.mp3",
  },
];

//initializing variables for playing songs + audio object
let newSongIndex = 0;
let currentSongIndex = 0;
let hasPlayed = false; 
const audio = new Audio();

//creates event listeners based on the index of songs rendered
const loadSongEvent = () => { 
  for (const songNumber in allSongs) { 
    document.getElementById(songNumber).addEventListener("click", () => {loadSong(songNumber)});
  }
}

const deleteSongEvent = () => { 
  for (const songNumber in allSongs) { 
    document.getElementById(`button-${songNumber}`).addEventListener("click", () => {
      allSongs.splice(Number(songNumber), 1);
      renderSongs();
    })
  }
}
//renderSongs creates lists of buttons that eventHandlers() creates event handlers out of
const renderSongs = () => { 
  playlistSongs.innerHTML = "";
  for (const song in allSongs) { 
    let songTemplate = 
    `<button id="${allSongs[song].id}"> 
      <li class="song-text"><span>${allSongs[song].title}</span><span class="song-info">${allSongs[song].artist} ${allSongs[song].duration} <span id="button-${song}">
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
      </span></span></li>
      </button>`;
    playlistSongs.insertAdjacentHTML("beforeend", songTemplate);
  }
  deleteSongEvent();
}

renderSongs();
loadSongEvent(); 
deleteSongEvent();

//loads a new song into the CD player for playSong() to make decisions
const loadSong = (index) => {
  newSongIndex = index;
  console.log("loadSong: ", newSongIndex);
}

//decides what to do with audio.src based on comparison between newSongIndex and currentSongIndex
const playSong = (index) => { 
  if (currentSongIndex === newSongIndex && hasPlayed) { 
    audio.play();
  } else {
    currentSongIndex = index;
    audio.src = allSongs[index].src;
    audio.play();
  }
  hasPlayed = true;
  playerSongArtist.innerHTML = allSongs[index].artist;
  playerSongTitle.innerHTML = allSongs[index].title;
}

const pauseSong = () => {
  audio.pause();
}

const nextSong = () => { 
  if (hasPlayed && currentSongIndex < allSongs.length - 1) { 
    loadSong(Number(currentSongIndex) + 1);
  }  else { 
    loadSong(0);
  }
    playSong(newSongIndex)
}

const previousSong = () => { 
  if (currentSongIndex === 0) { 
    loadSong(0)
  } else { 
    loadSong(Number(currentSongIndex) - 1);
  }
  playSong(newSongIndex);
}

const shuffleSongs = () => { 
  allSongs.sort(() => {return Math.random() - 0.5});
  renderSongs();
}

//event handlers
playButton.addEventListener("click", () => playSong(newSongIndex));
pauseButton.addEventListener("click", pauseSong);
nextButton.addEventListener("click", nextSong);
previousButton.addEventListener('click', previousSong);
shuffleButton.addEventListener('click', shuffleSongs);
audio.addEventListener("ended", () => { 
  loadSong(Number(currentSongIndex) + 1);
  playSong(newSongIndex);
})