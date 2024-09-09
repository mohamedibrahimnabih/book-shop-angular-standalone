import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightProductCart]',
  standalone: true
})
export class HighlightProductCartDirective {

  @Input() hightLightClass = 'btn-light';

  constructor(private ele: ElementRef) { 
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.classList.replace('btn-light', this.hightLightClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.classList.replace(this.hightLightClass, 'btn-light');
  }
}
