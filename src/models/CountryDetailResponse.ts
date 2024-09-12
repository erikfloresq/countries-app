interface Flag {
    png: string;
}

interface Name {
    common: string
}

export interface CountryDetailResponse {
    flags: Flag;
    name: Name;
    population: string;
    region: string;
    capital: string;
    flag: string;
    timezones: string;
    borders: string[];
}