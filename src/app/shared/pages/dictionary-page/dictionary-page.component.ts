import { Component } from '@angular/core';
import { map } from 'rxjs';
import { WordDefinitionService } from 'src/app/word-definition/services/word-definition.service';

import { environment } from 'src/environment/environment';

@Component({
  selector: 'shared-dictionary-page',
  templateUrl: './dictionary-page.component.html',
})
export class DictionaryPageComponent {
  private readonly apiUrl = environment.apiUrl;
  public wordDefinition: any;
  constructor(private readonly wordDefinitionService: WordDefinitionService) {}

  public searchWord(value: string) {
    this.wordDefinitionService.searchWord(value).subscribe((data) => {
      this.wordDefinition = data;
    });
  }
}
