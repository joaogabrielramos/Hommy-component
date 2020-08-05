import { Component,OnInit } from '@angular/core';




class Republica{
  title:string;
  subtitle:string;
  content:string;
  address:string;
  img:string;
  rate:string;
  kitchenComplete:boolean;
  freeWifi:boolean;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    republicas:Republica[];

    constructor(){ }
    
    ngOnInit() {
      this.republicas=[{
        title:"Republica Fundão",
        subtitle:"Quarto compartilhado",
        content:"Republica com contas inclusas, quarto e cozinha completa, preço R$:950.00",
        address:'Rua do Cobal 1234',
        img:"https://images.unsplash.com/photo-1585821569272-21e611bb532f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        rate:"9.5",
        kitchenComplete:true,
        freeWifi:true
      },{
      title:"Republica Maracanã",
      subtitle:"Quarto compartilhado",
      content:"Republica com conta não inclusas, quarto completo, preço R$750.00",
      address:'Rua da UERJ 1234',
      img:"https://images.unsplash.com/photo-1572496973076-dc34056ceb87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      rate:"7.8",
      kitchenComplete:false,
      freeWifi:true
      },
      {
        title:"Republica UFRRJ",
        subtitle:"Quarto compartilhado",
        content:"Republica com contas inclusas,quarto completo e wifi liberado,R$:880.00 ",
        address:"Rua Seropédica 178",
        img:"https://images.unsplash.com/photo-1576095910326-9de5a8b207e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        rate:"8.4",
        kitchenComplete:true,
        freeWifi:false
      }
    ]
    }
      

      
  emitRepublica(){
  };
}