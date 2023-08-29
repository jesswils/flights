import fs from 'fs/promises'

const fetchAllFlights = async () => {
    const contents = await fs.readFile('flights.json');
    return JSON.parse(contents);
};

export default fetchAllFlights;