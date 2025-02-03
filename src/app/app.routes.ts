import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';


export const routes: Routes = [
    {
        path:'pagenotfound',
        component:PageNotFoundComponent
    },
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'seller-auth',
        component:SellerAuthComponent
    },
    {
        path:'seller-home',
        component:SellerHomeComponent,
        canActivate: [authGuard]
    },
    {
        path:'seller-add-product',
        component:SellerAddProductComponent,
        canActivate:[authGuard]

    },
    {
        path: '**',
        redirectTo : 'pagenotfound'
    }
];
