import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seller-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent implements OnInit {
  
  ngOnInit(): void {
  }

  submit(data:object){
    console.log(data);
    

  }
}
