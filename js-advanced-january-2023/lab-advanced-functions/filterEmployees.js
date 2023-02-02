function filterEmployees(data, criteria) {
    const [param, info] = criteria.split('-');
    // const result = [];
    // for (const el of JSON.parse(data)) {
    //     if (el[param] == info) {
    //         const infoEmploy = el.first_name + ' ' + el.last_name + ' ' + '-' + ' ' + el.email;
    //         result.push(infoEmploy);
    //     }
    // }

    // result.forEach((element, i) => {
    //     console.log(`${i}. ${element}`);
    // });

    // Another solution:

    const result = JSON.parse(data).filter((el) => el[param] == info);
    result.forEach((el, i) => {
        console.log(`${i}. ${el.first_name} ${el.last_name} - ${el.email}`);
    });
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
   {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
    'gender-Female')