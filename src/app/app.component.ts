import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cardValue: any = {
    options: []
  };

  selectOptions: Array<string> = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ];

  selectChange = (event: any) => {
    const key: string = event.key;
    this.cardValue[key] = [ ...event.data ];

    console.log(this.cardValue);
  };

}
