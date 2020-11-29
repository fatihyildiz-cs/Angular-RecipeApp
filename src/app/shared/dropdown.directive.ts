import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen: boolean;

  // tslint:disable-next-line:typedef
  @HostListener('click') toggleDropdown(eventData: Event){
    this.isOpen = !this.isOpen;
  }
}
