import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

const accounts = [
  {name: 'Account test1', id:777},
  {name: 'Account test2', id:778},
  {name: 'Account test3', id:779},
  {name: 'Account test4', id:780},
  {name: 'Account test5', id:781},
  {name: 'Account test6', id:782},
]

const shops = [
  {
    id_shop: 80001,
    currency: "Peso mexicano",
    language: "Spanish",
    country: "Mexico",
    account: 777,
    email: "pruebafront_1@gmail.com",
    name: "Tienda 1"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 777,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 2"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 777,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 3"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 778,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 4"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 778,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 5"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 778,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 6"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 778,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 7"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 778,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 8"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 778,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 9"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 779,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 10"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 779,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 11"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 779,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 12"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 779,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 13"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 779,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 14"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 779,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 15"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 780,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 16"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 780,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 17"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 780,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 18"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 780,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 19"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 780,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 20"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 780,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 21"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 780,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 22"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 780,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 23"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 780,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 24"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 781,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 25"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 781,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 26"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 781,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 27"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 781,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 28"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 781,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 29"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 781,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 31"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 781,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 32"
  },
  {
      id_shop: 80001,
      currency: "Peso mexicano",
      language: "Spanish",
      country: "Mexico",
      account: 782,
      email: "pruebafront_1@gmail.com",
      name: "Tienda 33"
  }
]

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private accountsSubject = new BehaviorSubject<any[]>(accounts)
  accounts$ = this.accountsSubject.asObservable()

  private shopsSubject = new BehaviorSubject<any[]>(shops)

  constructor(){}

  getShops(idAccount:any){
    const shops = this.shopsSubject.pipe().subscribe()
    return shops
  }

  // getDataAccounts():void{
  //   this.accounts$.pipe().subscribe(account => {
  //     console.log(account)
  //   })
  // } 
}
