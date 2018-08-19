import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CryptoCurrency } from '../models';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'crypto-filter',
    templateUrl: './crypto-filter.component.html',
    styleUrls: ['./crypto-filter.component.css']
})
export class CryptoFilterComponent {
    @Input() public cryptos: CryptoCurrency[];
    @Output() public filterCryptosEvent = new EventEmitter<CryptoCurrency[]>();
    @Output() public priceUnitEvent = new EventEmitter<string>();
    public filteredCryptos: CryptoCurrency[] = [];
    // tslint:disable-next-line:no-inferrable-types
    public percentChange: string = 'All';
    // tslint:disable-next-line:no-inferrable-types
    public showAmount: number = 100;
    // tslint:disable-next-line:no-inferrable-types
    public priceUnit: string = 'USD';

    public filterCryptos(): void {
        this.percentChangeFilter();
        this.showOnlyFilter();
    }

    public filterEvent(): void {
        this.filterCryptosEvent.emit(this.filteredCryptos);
    }

    public priceEvent(): void {
        this.priceUnitEvent.emit(this.priceUnit);
    }

    public percentChangeFilter(): void {
        this.filteredCryptos = this.cryptos.filter((crypto: CryptoCurrency) => {
            if (this.percentChange === 'Positive') {
                return crypto.percent_change_24h >= 0;
            } else if (this.percentChange === 'Negative') {
                return crypto.percent_change_24h < 0;
            }
            return crypto;
        });
    }

    public showOnlyFilter(): void {
        this.filteredCryptos = this.filteredCryptos.slice(0, this.showAmount);
        this.filterEvent();
        this.priceEvent();
    }
}
