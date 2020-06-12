import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { TicTacToeComponent } from './component/tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
    {path: '', component: TicTacToeComponent, pathMatch: 'full'}
];

@NgModule({
    declarations: [
        TicTacToeComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    providers: [
    ],
})

export class GamesModule {
}
