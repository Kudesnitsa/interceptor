import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  // todo any to User[]
  transform(items: any[], params: { searchText: string, fields: string[] }): any[] {
    if (!items) {
      return [];
    }
    if (!params.searchText) {
      return items;
    }
    const searchText = params.searchText.toLowerCase();
    return items.filter(item => {
      for (const field of params.fields) {
        const temp = field.split('.');
        if (temp.length > 1) {
          let value = item;
          for (const tempField of temp) {
            value = value[tempField];
          }
          if (value.toLowerCase().includes(searchText)) {
            return true;
          }
        } else {
          if (item[field].toLowerCase().includes(searchText)) {
            return true;
          }
        }
      }
      return false;
    });
  }
}


