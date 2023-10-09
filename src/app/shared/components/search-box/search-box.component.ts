import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @Input() public initialValue : string = "Keyboard";
  @Output() public onValue = new EventEmitter();


  emitValue(value: string){
    this.onValue.emit(value);
  }
}
