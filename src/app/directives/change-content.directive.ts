import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeContent]'
})
export class ChangeContentDirective {

  private old_text: string;
  constructor(
    private element: ElementRef
  ) {
    this.old_text = this.element.nativeElement.innerText;
  }

  @HostListener(('mouseenter'))
  changeBg() {

    this.element.nativeElement.innerText = 
    "Hello";

    setTimeout(() => {
      this.element.nativeElement.innerText = this.old_text;
    }, 3000);
  }

}
