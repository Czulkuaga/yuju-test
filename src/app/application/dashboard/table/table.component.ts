import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  sales = [
    {
        id_shop: 456,
        id_channel: 666,
        id_order: "987987987",
        reference: "78979879",
        total: 5646546.0,
        last_notified_progress: "paid",
        status: "open",
        payment_accredited_at: "2021-10-18T18:07:59-05:00",
        cart_orders: [],
        ff_type: "zzz",
        shipment_pk: "897864654654",
        id_pack: null,
        shipment_pack_id: [
            {
                name: "shipment_pk",
                value: "7897897987"
            }
        ],
        customer_name: "Test Test",
        brands: "Xbox",
        no_items: 1,
        invoice_status: "not_invoiced"
    },
    {
        id_shop: 456,
        id_channel: 666,
        id_order: "987987987",
        reference: "78979879",
        total: 5646546.0,
        last_notified_progress: "paid",
        status: "open",
        payment_accredited_at: "2021-10-18T18:07:59-05:00",
        cart_orders: [],
        ff_type: "zzz",
        shipment_pk: "897864654654",
        id_pack: null,
        shipment_pack_id: [
            {
                name: "shipment_pk",
                value: "7897897987"
            }
        ],
        customer_name: "Test Test",
        brands: "Xbox",
        no_items: 1,
        invoice_status: "not_invoiced"
    },
    {
      id_shop: 456,
      id_channel: 666,
      id_order: "987987987",
      reference: "78979879",
      total: 5646546.0,
      last_notified_progress: "paid",
      status: "open",
      payment_accredited_at: "2021-10-18T18:07:59-05:00",
      cart_orders: [],
      ff_type: "zzz",
      shipment_pk: "897864654654",
      id_pack: null,
      shipment_pack_id: [
          {
              name: "shipment_pk",
              value: "7897897987"
          }
      ],
      customer_name: "Test Test",
      brands: "Xbox",
      no_items: 1,
      invoice_status: "not_invoiced"
  },
  {
    id_shop: 456,
    id_channel: 666,
    id_order: "987987987",
    reference: "78979879",
    total: 5646546.0,
    last_notified_progress: "paid",
    status: "open",
    payment_accredited_at: "2021-10-18T18:07:59-05:00",
    cart_orders: [],
    ff_type: "zzz",
    shipment_pk: "897864654654",
    id_pack: null,
    shipment_pack_id: [
        {
            name: "shipment_pk",
            value: "7897897987"
        }
    ],
    customer_name: "Test Test",
    brands: "Xbox",
    no_items: 1,
    invoice_status: "not_invoiced"
},
{
  id_shop: 456,
  id_channel: 666,
  id_order: "987987987",
  reference: "78979879",
  total: 5646546.0,
  last_notified_progress: "paid",
  status: "open",
  payment_accredited_at: "2021-10-18T18:07:59-05:00",
  cart_orders: [],
  ff_type: "zzz",
  shipment_pk: "897864654654",
  id_pack: null,
  shipment_pack_id: [
      {
          name: "shipment_pk",
          value: "7897897987"
      }
  ],
  customer_name: "Test Test",
  brands: "Xbox",
  no_items: 1,
  invoice_status: "not_invoiced"
},
{
  id_shop: 456,
  id_channel: 666,
  id_order: "987987987",
  reference: "78979879",
  total: 5646546.0,
  last_notified_progress: "paid",
  status: "open",
  payment_accredited_at: "2021-10-18T18:07:59-05:00",
  cart_orders: [],
  ff_type: "zzz",
  shipment_pk: "897864654654",
  id_pack: null,
  shipment_pack_id: [
      {
          name: "shipment_pk",
          value: "7897897987"
      }
  ],
  customer_name: "Test Test",
  brands: "Xbox",
  no_items: 1,
  invoice_status: "not_invoiced"
}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
