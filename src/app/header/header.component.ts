import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }
  menuType: string = "default";
  sellerName : string = "";

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      // console.log(val.url);
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.log("in seller area");
          this.menuType = "seller";
          if(localStorage.getItem('seller')){
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];            
            this.sellerName = sellerData.name;
          }

        } else {
          console.log("outside area");
          this.menuType = "default";
        }
      }
    })
  };

  logout(){
    localStorage.removeItem('seller');
    this.router.navigate(['/'])
  }


}
