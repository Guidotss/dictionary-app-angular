import { Injectable } from '@angular/core';
import { Font } from 'src/app/types/font.type';

@Injectable({providedIn: 'root'})
export class SharedService {
  constructor() {}
  public currentFont: Font = "Sans Serif";

  public changeFont(font: Font): void {
    this.currentFont = font;
  }
}
