import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MyUpperPipe } from '../pipes/myupper.pipe';
import { RestSearchPipe } from '../pipes/search.pipe';


@NgModule({
    declarations: [
        MyUpperPipe,
        RestSearchPipe,
        
    ],

    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule
    ],

    exports: [
        CommonModule,
        AppRoutingModule,
        FormsModule,
        MyUpperPipe,
        RestSearchPipe
    ],
    
})


export class SharedModule{}