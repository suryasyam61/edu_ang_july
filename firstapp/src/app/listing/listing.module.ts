import { NgModule } from "@angular/core";
import { ListingComponent } from "./listing.component";
import { CuisineFilterComponent } from "../filters/cuisineFilter.component";
import { ListingService } from "../services/listing.service";
import { SharedModule } from "../shared/shared.module";
import { CostFilterComponent } from "../filters/costFilter.component";

@NgModule({
    declarations: [
        ListingComponent,
        CuisineFilterComponent,
        CostFilterComponent
    ],
    imports: [
        SharedModule
    ],
    providers: [
        ListingService
    ]
})

export class ListingModule {}