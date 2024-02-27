import { Component, OnInit } from '@angular/core';
import { Product, PRODUCTS } from './data/products-data';

@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrl: './workbench.component.css'
})
export class WorkbenchComponent implements OnInit {
  products: Product[] = PRODUCTS;

  constructor() {}

  ngOnInit() {}
}
