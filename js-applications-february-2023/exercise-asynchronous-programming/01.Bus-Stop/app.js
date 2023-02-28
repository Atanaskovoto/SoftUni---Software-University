function getInfo() {
    const stopId = document.getElementById('stopId');
    const url = 'http://localhost:3030/jsonstore/bus/businfo';
    const stopBusName = document.getElementById('stopName');
    const busInfoElement = document.getElementById('buses');

    fetch(`${url}/${stopId.value}`)
        .then(res => res.json())
        .then(busInfo => {
            stopBusName.textContent = busInfo.name;
            busInfoElement.innerHTML = '';
            for (const key in busInfo.buses) {
                const liElement = document.createElement('li');
                liElement.textContent = `Bus ${key} arrives in ${busInfo.buses[key]} minutes`;
                busInfoElement.appendChild(liElement);
            }
        })
        .catch(er => {
            busInfoElement.innerHTML = '';
            stopBusName.textContent = 'Error';
        });
}