import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { BitcoinMarket } from '../models';

@Injectable()
export class CryptoService {
    constructor(public http: HttpClient) {}

    public getBitcoinmarketCap() {
        return this.http.get('https://api.coinmarketcap.com/v2/global/');
    }

    public getAllCryptos() {
        return this.http.get('https://api.coinmarketcap.com/v1/ticker/');
    }

    public getBitCoinPriceStats() {
        return this.http.get('https://api.blockchain.info/charts/market-price?cors=true&format=json&lang=en');
    }

}
