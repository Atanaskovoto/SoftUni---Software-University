function projectsCreation(input) {
    let name = input[0];
    let projectscount = Number(input[1]);
    let time = projectscount * 3;
    console.log(`The architect ${name} will need ${time} hours to complete ${projectscount} project/s.`)
}
projectsCreation(['George', "4"])