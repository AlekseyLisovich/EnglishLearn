import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { DataService } from './data-services/data.service';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
        declarations: [AppComponent, ProductListComponent, ProductCreateComponent, ProductEditComponent,
                ProductFormComponent, NotFoundComponent],
        providers: [DataService], // регистрация сервисов
        bootstrap: [AppComponent]
})
export class AppModule { }