interface Flag {
    png: string;
}

interface Name {
    common: string
}

export interface CountryResponse {
    flags: Flag;
    name: Name;
    population: string;
    region: string;
    capital: string;
    cca2: string;
    ccn3: string;
}