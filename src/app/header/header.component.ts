import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{

  @Output() featureSelected = new EventEmitter<string>();

  // tslint:disable-next-line:typedef
  onSelectDisplay(choice: string) {
    this.featureSelected.emit(choice);
  }
}
