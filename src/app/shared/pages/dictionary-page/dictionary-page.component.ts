import { Component } from '@angular/core';
import { environment } from 'src/environment/environment';


@Component({
  selector: 'shared-dictionary-page',
  templateUrl: './dictionary-page.component.html',
})
export class DictionaryPageComponent {
  private readonly apiUrl = environment.apiUrl;
  emitValue(value: string){
    console.log(`${this.apiUrl}${value}`);
  }
}
