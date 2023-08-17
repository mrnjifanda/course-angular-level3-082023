import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bgSize'
})
export class BgSizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    // return (value.length > 20) ? value.slice(0, 19) + ' ...' : value;
  
    let world: string = value;
    if (value.length > 20) {
      world = value.slice(0, 19) + ' ...';
    }
    return world;
  }

}
