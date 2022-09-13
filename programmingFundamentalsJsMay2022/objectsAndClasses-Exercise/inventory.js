function inventory(input) {
    let allHeroes = [];
    input.forEach(hero => {
        allHeroes.push(hero.split(' / '));

    });

    allHeroes.forEach(hero => {
        hero[1] = Number(hero[1]);
    });
    
    allHeroes.sort((a, b) => a[1] - b[1]);

    allHeroes.forEach(hero => {
        console.log(`Hero: ${hero[0]}\nlevel => ${hero[1]}\nitems => ${hero[2]}`);
    });
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'

]);