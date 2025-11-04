import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowCaseService {

  constructor() { }

  getDataApi(): Observable<any> {
    const data = [
      {
        name: "Pudgy Penguin #1",
        price: 0.2,
        image: "https://ipfs.io/ipfs/QmNf1UsmdGaMbpatQ6toXSkzDpizaGmC9zfunCyoz1enD5/penguin/1.png"
      },
      {
        name: "Pudgy Penguin #2",
        price: 0.1,
        image: "https://ipfs.io/ipfs/QmNf1UsmdGaMbpatQ6toXSkzDpizaGmC9zfunCyoz1enD5/penguin/2.png"
      },
      {
        name: "Pudgy Penguin #3",
        price: 0.3,
        image: "https://ipfs.io/ipfs/QmNf1UsmdGaMbpatQ6toXSkzDpizaGmC9zfunCyoz1enD5/penguin/3.png"
      },
      {
        name: "Pudgy Penguin #4",
        price: 0.4,
        image: "https://ipfs.io/ipfs/QmNf1UsmdGaMbpatQ6toXSkzDpizaGmC9zfunCyoz1enD5/penguin/4.png"
      },
      {
        name: "Pudgy Penguin #5",
        price: 0.5,
        image: "https://ipfs.io/ipfs/QmNf1UsmdGaMbpatQ6toXSkzDpizaGmC9zfunCyoz1enD5/penguin/5.png"
      },
      {
        name: "Pudgy Penguin #6",
        price: 0.6,
        image: "https://ipfs.io/ipfs/QmNf1UsmdGaMbpatQ6toXSkzDpizaGmC9zfunCyoz1enD5/penguin/6.png"
      },
      {
        name: "Pudgy Penguin #7",
        price: 0.7,
        image: "https://ipfs.io/ipfs/QmNf1UsmdGaMbpatQ6toXSkzDpizaGmC9zfunCyoz1enD5/penguin/7.png"
      },
      {
        name: "Pudgy Penguin #8",
        price: 0.8,
        image: "https://ipfs.io/ipfs/QmNf1UsmdGaMbpatQ6toXSkzDpizaGmC9zfunCyoz1enD5/penguin/8.png"
      },
      {
        name: "Pudgy Penguin #9",
        price: 0.9,
        image: "https://ipfs.io/ipfs/QmNf1UsmdGaMbpatQ6toXSkzDpizaGmC9zfunCyoz1enD5/penguin/9.png"
      },
      {
        name: "Pudgy Penguin #10",
        price: 0.9,
        image: "https://ipfs.io/ipfs/QmNf1UsmdGaMbpatQ6toXSkzDpizaGmC9zfunCyoz1enD5/penguin/10.png"
      },
      {
        name: "Pudgy Penguin #11",
        price: 0.9,
        image: "https://ipfs.io/ipfs/QmNf1UsmdGaMbpatQ6toXSkzDpizaGmC9zfunCyoz1enD5/penguin/11.png"
      },
      {
        name: "Pudgy Penguin #12",
        price: 0.9,
        image: "https://ipfs.io/ipfs/QmNf1UsmdGaMbpatQ6toXSkzDpizaGmC9zfunCyoz1enD5/penguin/12.png"
      }
    ];

    return of(data).pipe(
      delay(1500)
    );
  }
}
