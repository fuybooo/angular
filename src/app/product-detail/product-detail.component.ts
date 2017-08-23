import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public productTitle: string;
  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => this.productTitle = params['productTitle']);
  }

}
