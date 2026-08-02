import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRipple]',
  standalone: true // Remove if using NgModule
})
export class RippleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const button = this.el.nativeElement;
    
    // Remove any existing ripples
    const existingRipple = button.querySelector('.ripple-effect');
    if (existingRipple) {
      this.renderer.removeChild(button, existingRipple);
    }

    // Create the ripple element
    const ripple = this.renderer.createElement('span');
    this.renderer.addClass(ripple, 'ripple-effect');

    // Calculate dimensions and position
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    // Apply styles to the ripple
    this.renderer.setStyle(ripple, 'width', `${size}px`);
    this.renderer.setStyle(ripple, 'height', `${size}px`);
    this.renderer.setStyle(ripple, 'left', `${x}px`);
    this.renderer.setStyle(ripple, 'top', `${y}px`);

    // Append to button
    this.renderer.appendChild(button, ripple);

    // Remove the ripple after animation completes (600ms)
    setTimeout(() => {
      this.renderer.removeChild(button, ripple);
    }, 600);
  }
}
