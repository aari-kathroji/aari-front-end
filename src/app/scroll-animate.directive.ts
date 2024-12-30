import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true,
})
export class ScrollAnimateDirective {
  private isVisible = false; // Tracks if the element is in view
  private scrollPosition = 0; // Tracks the last scroll position

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const position = this.el.nativeElement.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    const isScrollingDown = window.scrollY > this.scrollPosition;
    this.scrollPosition = window.scrollY;

    if (position < screenHeight && position > 0) {
      // If the element is in view and scrolling down
      if (!this.isVisible && isScrollingDown) {
        this.isVisible = true;
        if (this.el.nativeElement.classList.contains('oneside')) {
          this.renderer.addClass(this.el.nativeElement, 'animate-left-to-right');
        } else if (this.el.nativeElement.classList.contains('secondside')) {
          this.renderer.addClass(this.el.nativeElement, 'animate-right-to-left');
        }
      }
    } else {
      // If the element is out of view
      if (this.isVisible && !isScrollingDown) {
        this.isVisible = false;
        this.renderer.removeClass(this.el.nativeElement, 'animate-left-to-right');
        this.renderer.removeClass(this.el.nativeElement, 'animate-right-to-left');
      }
    }
  }
}
