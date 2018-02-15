import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMessages]'
})
export class MessagesDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
