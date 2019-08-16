import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  route= "http://localhost:1234/products/";
  login = this.route+"login";

  constructor() {
  }

}