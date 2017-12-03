import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { ContentfulService } from './contentful.service';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

// define the available routes
const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products',  component: ProductListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
