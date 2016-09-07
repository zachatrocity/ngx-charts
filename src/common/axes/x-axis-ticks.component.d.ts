import { OnInit, OnChanges } from '@angular/core';
export declare class XAxisTicks implements OnInit, OnChanges {
    scale: any;
    orient: any;
    tickArguments: number[];
    tickStroke: string;
    tickFormatting: any;
    showGridLines: boolean;
    gridLineHeight: any;
    verticalSpacing: any;
    rotateLabels: any;
    innerTickSize: any;
    outerTickSize: any;
    tickPadding: any;
    textAnchor: any;
    maxTicksLength: any;
    trimLabel: any;
    adjustedScale: any;
    tickValues: any;
    textTransform: any;
    ticks: any;
    tickFormat: any;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    update(): void;
    getTicks(): any;
    tickTransform(tick: any): string;
    gridLineTransform(): string;
}
