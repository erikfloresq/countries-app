interface Flag {
    png: string;
}

interface Name {
    common: string
}

interface Currency {
    name: string;
    symbol: string;
}

export interface CountryDetailResponse {
    flags: Flag;
    name: Name;
    population: string;
    region: string;
    subregion: string;
    capital: string;
    tld: string;
    cca2: string;
    ccn3: string;
    currencies: Record<string, Partial<Currency>>;
    languages: Record<string, string>;
    borders: string[];
}