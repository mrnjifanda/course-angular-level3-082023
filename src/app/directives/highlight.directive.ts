import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter () {
    this.highlight('yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave () {
    this.highlight('');
  }

  private highlight(color: string) {

    console.log(this.element);
    this.element.nativeElement.style.backgroundColor = color;
  }

}
