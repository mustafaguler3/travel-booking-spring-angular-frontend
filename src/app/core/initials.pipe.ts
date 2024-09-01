import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value
      .split(' ')                    
      .map(word => word.charAt(0))    
      .join('');                     
  }

}
