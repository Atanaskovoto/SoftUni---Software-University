function seriesCalculator(input) {

    let nameOfSeries = input[0];
    let numberOfSeasons = Number(input[1]);
    let numberOfEpisodes = Number(input[2]);
    let timeOfEpisode = Number(input[3]);

    let timeOfAdvertising = timeOfEpisode * 0.20;
    let extraTime = numberOfSeasons * 10;
    let episodeWithAdvertising = timeOfEpisode + timeOfAdvertising;
    let totalTime = Math.floor(episodeWithAdvertising * numberOfEpisodes *
        numberOfSeasons + extraTime);

    console.log(`Total time needed to watch the ${nameOfSeries} series is ${totalTime} minutes.`);

}
seriesCalculator(["Game of Thrones", "7", "10", "50"])