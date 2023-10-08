import { Component, OnInit } from '@angular/core';
import { Font } from 'src/app/types/font.type';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'shared-font-select',
  templateUrl: './font-select.component.html',
})
export class FontSelectComponent implements OnInit {
  constructor(private readonly sharedService: SharedService) {}
  public currentFont?: Font;
  public readonly fonts: Font[] = ['Sans Serif', 'Sans', 'Mono'];
  public isFontSelectopen: boolean = false;

  ngOnInit(): void {
    this.currentFont = this.sharedService.currentFont;
  }

  toggleFontSelect(): void {
    this.isFontSelectopen = !this.isFontSelectopen;
  }

  changeFont(font: Font): void {
    this.sharedService.changeFont(font);
    this.currentFont = font;
  }
}
