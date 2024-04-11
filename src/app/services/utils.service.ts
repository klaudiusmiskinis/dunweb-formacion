import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
    safeSerialize(component: any): string {
        if (component === null || component === undefined) {
          return 'null';
        }
        const simpleObject: any = {};
        Object.keys(component).forEach(key => {
          try {
            JSON.stringify(component[key]);
            simpleObject[key] = component[key];
          } catch (error) {
            
          }
        });
      
        return JSON.stringify(simpleObject, null, 4);
      }
}
