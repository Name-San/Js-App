function sortSongs(songPreferences) {
  const songPopularity = new Map();

  // Step 1: Count song preferences
  songPreferences.forEach(preferences => {
    for (let i = 0; i < preferences.length; i++) {
      const songId = preferences[i];
      
      if (!songPopularity.has(songId)) {
        songPopularity.set(songId, { beats: 0, id: songId });
      }

      songPopularity.get(songId).beats += (preferences.length-1) - preferences.indexOf(songId);
      /* if (i === 0) {
        songPopularity.get(songId).beats++;
      }*/
    }
  });

  
  // Step 2: Sort songs based on the criteria
  const sortedSongs = [...songPopularity.values()].sort((a, b) => {
    if (a.beats > b.beats) {
      return -1;
    } else if (a.beats < b.beats) {
      return 1;
    } else {
      return a.id - b.id;
    }
  });

  return sortedSongs.map(song => song.id);
}

const songPreferences = [[2, 0, 1], [2, 1, 0], [1, 0, 2], [0, 1, 2]];
const sortedSongs = sortSongs(songPreferences);

console.log(sortedSongs); // This will give you the sorted song IDs
