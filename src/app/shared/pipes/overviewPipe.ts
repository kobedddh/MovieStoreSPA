import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'overviewPipe' })
export class OverviewPipe implements PipeTransform {
    transform(value: string):string {
        if(value.length>50){
            var s1=value.slice(0,150);
            var s2="...";
            return s1+s2;
        }
        return value;
    }
}