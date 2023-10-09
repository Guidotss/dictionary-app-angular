import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryPageComponent } from './pages/dictionary-page/dictionary-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BookIconComponent } from './components/book-icon/book-icon.component';
import { ThemeSelectComponent } from './components/theme-select/theme-select.component';
import { MoonIconComponent } from './components/moon-icon/moon-icon.component';
import { FontSelectComponent } from './components/font-select/font-select.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';




@NgModule({
  declarations: [
    BookIconComponent,
    DictionaryPageComponent,
    FontSelectComponent,
    MoonIconComponent,
    NavBarComponent,
    SearchBoxComponent,
    ThemeSelectComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DictionaryPageComponent
  ]
})
export class SharedModule { }
