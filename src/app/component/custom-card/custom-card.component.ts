import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

class Republica {
  title:string;
  subtitle:string;
  content:string;
  
}

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent implements OnInit {
  @Input() republica:Republica

  
  @Output() buttonPressed = new EventEmitter<string>();
 
  constructor() { }

  ngOnInit() {}

  handleButton(BoloDoPote): void{
    this.buttonPressed.emit(BoloDoPote);
  }
}
