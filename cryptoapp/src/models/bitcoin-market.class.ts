export class BitcoinMarket {
    public bitcoin_percentage_of_market_cap: number;
    public active_cryptocurrencies: number;
    public total_volume_24h: number;
    public active_markets: number;
    public total_market_cap: number;

    constructor(data?: any) {
        const defaults = {
            data: {
                quotes: {
                USD: {}
            }
        },
            ...data
        };

        this.bitcoin_percentage_of_market_cap = defaults.data.bitcoin_percentage_of_market_cap;
        this.active_cryptocurrencies = defaults.data.active_cryptocurrencies;
        this.total_volume_24h = defaults.data.quotes.USD.total_volume_24h;
        this.active_markets = defaults.data.active_markets;
        this.total_market_cap = defaults.data.quotes.USD.total_market_cap;
    }
}
