import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true,
})
export class ScrollAnimateDirective {
  private hasAnimated = false;
  @Input() index!: number;
  
  constructor(private el: ElementRef, private renderer: Renderer2) {
    const hiddenClass = this.index % 2 === 0 ? 'hidden-left' : 'hidden-right';
    this.renderer.addClass(this.el.nativeElement, hiddenClass);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkVisibility();
  }

  ngAfterViewInit() {
    this.checkVisibility();
  }

  private checkVisibility() {
    if (this.hasAnimated) return;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const visibilityThreshold = 50;

    if (rect.top <= windowHeight - visibilityThreshold) {
      this.hasAnimated = true;
      
      const isEven = this.index % 2 === 0;
      const hiddenClass = isEven ? 'hidden-left' : 'hidden-right';
      const animationClass = isEven ? 'animate-left-to-right' : 'animate-right-to-left';
      
      this.renderer.removeClass(this.el.nativeElement, hiddenClass);
      this.renderer.addClass(this.el.nativeElement, animationClass);
    }
  }
}