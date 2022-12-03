function destinationMapper(input) {
    const pattern = /([=|\/])(?<name>[A-Z][a-zA-Z]{2,})\1/g;

    let matches = pattern.exec(input);
    
    const destinations = [];
    let travelPoints = 0;
    while (matches) {

        destinations.push(matches.groups.name);
        const currentPoints = Number(matches.groups.name.length);
        travelPoints += currentPoints;

        matches = pattern.exec(input);
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");