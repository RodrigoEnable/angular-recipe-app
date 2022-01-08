import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpace',
  pure: true,
})
export class RemoveSpace implements PipeTransform {
  transform(value: string[] | string) {
    if (typeof value === 'object') {
      return value.map((text) => text.replace(/\s+/g, ' ').trim());
    }
    return value.replace(/\s/g, '').trim();
  }
}
