import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {
  title:string;
  constructor() { }

  ngOnInit(): void {
    this.title="Add money to wallet"
  }

}
