import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { ChartViewComponent } from './component/chart-view/chart-view.component';
import { LineChartComponent } from './component/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './component/pie-chart/pie-chart.component';
import { BarChartComponent } from './component/bar-chart/bar-chart.component';
import { BubbleChartComponent } from './component/bubble-chart/bubble-chart.component';
import { DoughnutChartComponent } from './component/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './component/radar-chart/radar-chart.component';
import { PolarChartComponent } from './component/polar-chart/polar-chart.component';
import { ScatterChartComponent } from './component/scatter-chart/scatter-chart.component';

const routes: Routes = [
    {path: '', component: ChartViewComponent, pathMatch: 'full'}
];

@NgModule({
    declarations: [
        ChartViewComponent,
        LineChartComponent,
        PieChartComponent,
        BarChartComponent,
        BubbleChartComponent,
        DoughnutChartComponent,
        RadarChartComponent,
        PolarChartComponent,
        ScatterChartComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        ChartsModule
    ],
    providers: [
    ],
})

export class ChartModule {
}
