import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';

import { CryptoService } from '../services/crypto.service';
import { CryptoFilterComponent } from './crypto-filter.component';


describe('CryptoFilterComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CryptoFilterComponent
            ],
            providers: [CryptoService],
            imports: [HttpClientModule],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(CryptoFilterComponent);
        const app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    }));

});
