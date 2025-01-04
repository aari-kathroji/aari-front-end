import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true,
})
export class ScrollAnimateDirective {
  private isVisible = false; // Tracks if the element is in view
  private scrollPosition = 0; // Tracks the last scroll position

  @Input() index!: number; // Accept the index of the element

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Initially hide the element
    const hiddenClass = this.index % 2 === 0 ? 'hidden-left' : 'hidden-right';
    this.renderer.addClass(this.el.nativeElement, hiddenClass);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const position = this.el.nativeElement.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    // Trigger animation only when scrolling down and element is not already visible
    if (!this.isVisible && position < screenHeight && position > 0) {
      this.isVisible = true;
      this.applyAnimation();
    }
  }

  private applyAnimation() {
    // Alternate animations based on index
    if (this.index % 2 === 0) {
      this.renderer.removeClass(this.el.nativeElement, 'hidden-left');
      this.renderer.addClass(this.el.nativeElement, 'animate-left-to-right');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'hidden-right');
      this.renderer.addClass(this.el.nativeElement, 'animate-right-to-left');
    }
  }
}
