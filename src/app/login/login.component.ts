import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [
        trigger('buttonTextStateTrigger', [
          state('shown', style({
            opacity: 1
          })),
          state('transitioning', style({
            opacity: 0.3
          })),
          transition('shown => transitioning', animate('600ms ease-out')),
          transition('transitioning => shown', animate('600ms ease-in'))
        ])
      ]    
})
export class LoginComponent {
    
  // The current state of the button text
  buttonTextState = 'shown';
  // The text currently being show
  buttonText = ['ADD TO CART','ADD TO CART','ADD TO CART','ADD TO CART'];
  // The text that will be shown when the transition is finished
  transitionButtonText = this.buttonText;
  totalProduct = 0;
  productList = [];
  products = [
    {
      imgSrc: "assets/images/product/p-1.jpg",
      title: "Fibre Chair",
      price: 49,
      descr: "helloa there it is anoie mansmns.jn .janf. .afkabfhk"
    },
    {
      imgSrc: "assets/images/product/p-1.jpg",
      title: "Fibnre Chair",
      price: 29,
      descr: "helloa there it is anoie mansmns.jn .janf. .afkabfhk"
    },
    {
      imgSrc: "assets/images/product/p-1.jpg",
      title: "Famsnjasnibre Chair",
      price: 99,
      descr: "helloa there it is anoie mansmns.jn .janf. .afkabfhk"
    },
    {
      imgSrc: "assets/images/product/p-1.jpg",
      title: "Fhelo Chair",
      price: 99,
      descr: "helloa there it is anoie mansmns.jn .janf. .afkabfhk"
    }
  ]
  constructor (
    private router: Router
){}
  /**
   * Respond to the transition event of the button text
   * by setting the text awaiting transition then setting the state as shown
   */
  buttonTextTransitioned(event) {
    this.buttonText = this.transitionButtonText;
    this.buttonTextState = this.buttonTextState = 'shown';
  }

  moveToCheckout(){
    if(this.productList.length>0){
      this.router.navigateByData({
        url: ["/checkout"],
        data: this.productList
    });
    }
  }

  onAddToCart(i, item, quan) {
  if(this.transitionButtonText[i]==="ADD TO CART"){
    this.totalProduct ++;
    if(quan===''){
      item.quantity = 1;
    }else{
      item.quantity = quan;
    }
      this.productList.push(item);
    setTimeout(() => {
      this.buttonTextState = 'transitioning';
      this.transitionButtonText[i] = 'ADDED';
    }, 1800);    

    // Reset button text
    setTimeout(() => {
      this.buttonTextState = 'transitioning';
      this.transitionButtonText[i] = 'REMOVE FROM CART';
    }, 3600);    
  }
  else if(this.transitionButtonText[i]==="REMOVE FROM CART"){
    this.totalProduct--;
      var index = this.productList.indexOf(item);
      if (index > -1) {
        this.productList.splice(index, 1);
      }
    setTimeout(() => {
      this.buttonTextState = 'transitioning';
      this.transitionButtonText[i] = 'Removing';
    }, 1800);    

    // Reset button text
    setTimeout(() => {
      this.buttonTextState = 'transitioning';
      this.transitionButtonText[i] = 'ADD TO CART';
    }, 3600);
  }
  }
}
