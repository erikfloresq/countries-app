export interface Country {
    image: string;
    name: string;
    population: string;
    region: string;
    subregion: string;
    capital: string;
    tld?: string,
    cca2: string,
    ccn3: string,
    currencies?: string[],
    languages?: string[],
    borders?: string[];
}