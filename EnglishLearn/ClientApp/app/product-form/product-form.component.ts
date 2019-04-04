import { Component, Input } from '@angular/core';
import { Product } from './../view-models/product';

@Component({
        selector: "product-form",
        templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
        @Input() product: Product;
}