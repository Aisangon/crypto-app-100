import { Component, OnInit, OnDestroy } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { CryptoCurrency, SortValues } from '../models';
import { sortValues } from '../models/datasets';
import { Subscription } from '../../node_modules/rxjs';


@Component ({
    // tslint:disable-next-line:component-selector
    selector: 'crypto-table',
    templateUrl: './crypto-table.component.html',
    styleUrls: ['./crypto-table.component.css']
})
export class CryptoTableComponent implements OnInit, OnDestroy {
    public top100Cryptos: CryptoCurrency[];
    public filteredCryptos: CryptoCurrency[];
    public sortValues: SortValues = sortValues;
    // tslint:disable-next-line:no-inferrable-types
    public priceUnit: string = 'USD';
    public top100CryptosSub: Subscription;

    constructor(public cryptoService: CryptoService) {}

    public ngOnInit(): void {
        this.getTop100Cryptos();
    }

    public ngOnDestroy(): void {
        this.top100CryptosSub.unsubscribe();
    }

    public getTop100Cryptos(): void {
        this.top100CryptosSub = this.cryptoService.getAllCryptos().subscribe((data: any) => {
            this.top100Cryptos = data.map((element: any) => {
                return new CryptoCurrency(element);
        });
        this.filteredCryptos = this.top100Cryptos;
    });
    }

    public listenFilterCryptos(e: CryptoCurrency[]): void {
        this.filteredCryptos = e;
    }

    public listenPriceUnit(e: string): void {
        this.priceUnit = e;
    }

    public sortString(sortValue: boolean): void {
        if (sortValue) {
            this.top100Cryptos = this.top100Cryptos.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();

                if (nameA < nameB) {
                    return -1;
                } else if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
        } else {
            this.top100Cryptos = this.top100Cryptos.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();

                if (nameA > nameB) {
                    return -1;
                } else if (nameA < nameB) {
                    return 1;
                }
                return 0;
            });
        }
    }

    public sortNumeric(sortValue: boolean, key: string): void {
        if (sortValue) {
            this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b: CryptoCurrency) => {
                return a[key] - b[key];
            });
        } else {
            this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b: CryptoCurrency) => {
                return b[key] - a[key];
            });
        }
    }

}
