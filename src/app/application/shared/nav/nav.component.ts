import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  account$ = this.dataSrv.accounts$

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {

  }
  @Input()
  onChangeSeletor(selectosValue:string){
    console.log(selectosValue)
  }

}
