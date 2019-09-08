import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  abc = 'Ajay Kumar';

  constructor(private route: Router) { }

  ngOnInit() {
  }

  router(path) {
    this.route.navigate([path]);
  }

}
