function songs(input) {
    let numbersOfSongs = input.shift();
    let songsName = input.pop();

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
        print() {
            if (songsName === this.typeList) {
                console.log(this.name);
            } else if (songsName === 'all') {
                console.log(this.name);
            }
        }
    }
    for (let song of input) {
        let songData = song.split('_');
        let currentSong = new Song(songData[0], songData[1], songData[2]);
        currentSong.print();
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])