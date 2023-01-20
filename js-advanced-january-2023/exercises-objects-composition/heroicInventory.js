function heroicInventory(input) {
    const heroesInfo = [];

    for (const el of input) {
        const currentInfo = {};
        const [name, level, items] = el.split(' / ');
        currentInfo.name = name;
        currentInfo.level = Number(level);
        currentInfo.items = items ? items.split(', ') : [];

        heroesInfo.push(currentInfo);
    }

    const result = JSON.stringify(heroesInfo);
    return result;
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);