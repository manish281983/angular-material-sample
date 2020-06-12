import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        CommonModule,
        MatTreeModule,
        MatIconModule,
        MatTableModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        InfiniteScrollModule
    ],
    declarations: [
    ],
    providers: [
        CommonModule,
        MatTreeModule,
        MatIconModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        InfiniteScrollModule
    ],
    entryComponents: [
    ]
})
export class SharedModule {
    constructor() {
    }
}
