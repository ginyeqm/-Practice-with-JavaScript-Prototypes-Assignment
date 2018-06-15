class Library {
  constructor(name, creator){
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlist) {
    if (playlist instanceof Playlist) {
      this.playlists.push(playlist)
    }
  }

}

class Playlist {
  constructor(name){
    this.name = name;
    this.tracks = [];
  }

addTrack(track) {
  if (track instanceof Track) {
      this.tracks.push(track);
    }
  }

  overallRating() {
    let sum = 0;
    this.tracks.forEach((item) => {
      sum += item.rating;
    })
    return sum / this.tracks.length
  }

  totalDuration() {
    let time = 0;
    this.tracks.forEach((item) => {
      time += item.length;
    })
    return time;
  }
}

class Track {
  constructor(libarayTitle, libarayRating, libarayLength){
    this.title = libarayTitle;
    this.rating = libarayRating;
    this.length = libarayLength;
  }
}

const library1 = new Library("chris", "kim");
const playlist1 = new Playlist("Rain");
const track1 = new Track("Victor Wooten", 4, 11.1);


playlist1.addTrack(track1);
library1.addPlaylist(playlist1);


console.log("library1: ", library1);
console.log("playlist1: ", playlist1);
console.log("track1: ", track1);
console.log("Rating: ", playlist1.overallRating());
console.log("Duration: ", playlist1.totalDuration());
