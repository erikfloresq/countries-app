export interface Country {
    image: string;
    name: string;
    population: string;
    region: string;
    subregion: string;
    capital: string;
    tld?: string,
    currencies?: string[],
    languages?: string[],
    borders?: string[];
}