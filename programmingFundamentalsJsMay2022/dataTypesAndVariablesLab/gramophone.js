function gramophone(band, album, song) {
    let songDuration = (album.length * band.length) * song.length / 2;
    let plateRotations = songDuration / 2.5;

    console.log(`The plate was rotated ${Math.ceil(plateRotations)} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')