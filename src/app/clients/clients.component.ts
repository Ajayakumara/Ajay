import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  allowNewClients= false;

  constructor() {
    // setTimeout(() => {
    //   this.allowNewClients= true;
    // }, 2000);
   }

  ngOnInit() {
  }

}
