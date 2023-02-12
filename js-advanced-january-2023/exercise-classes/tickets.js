function sortedTickets(array, sortingCrit) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const allTickets = [];

    array.forEach(el => {
        let [destination, price, status] = el.split('|');
        price = Number(price);
        const currentTicket = new Ticket(destination, price, status);
        allTickets.push(currentTicket);
    });

    return allTickets.sort((a, b) => {
        if (typeof a[sortingCrit] == 'number') {
            return a[sortingCrit] - b[sortingCrit];
        } else {
            return a[sortingCrit].localeCompare(b[sortingCrit]);
        }
    });
}

console.log(sortedTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));



