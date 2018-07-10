import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
const appRoutes: Routes = [
    { path: '', component: ProductsComponent},
    // { path: 'product-list', component: ProductListComponent}
    // { path: 'product-detail', component: ProductDetailComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

// tslint:disable-next-line:eofline
}