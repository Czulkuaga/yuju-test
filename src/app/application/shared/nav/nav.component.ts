import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  accounts = [
    {name: 'Front test prueba 1', id:777},
    {name: 'Cuenta uno', id:1},
    {name: 'Cuenta dos', id:2},

  ]

  shops = [
    {
        id_shop: 80001,
        currency: "Peso mexicano",
        language: "Spanish",
        country: "Mexico",
        email: "pruebafront_1@gmail.com",
        name: "Tienda 1"
    },
    {
        id_shop: 80002,
        currency: "Peso mexicano",
        language: "Spanish",
        country: "Mexico",
        url: "https://web.whatsapp.com/",
        email: "pruebafront_2@hotmail.com",
        name: "Tienda 2"
    },
    {
        id_shop: 80003,
        currency: "Peso mexicano",
        language: "Spanish",
        country: "Mexico",
        url: "https://web.whatsapp.com/",
        email: "pruebafront_3@hotmail.com",
        name: "Tienda 3"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
