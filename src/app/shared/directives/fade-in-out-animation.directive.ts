import { Directive, HostListener, ElementRef, Input, Output, EventEmitter, OnInit, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Directive({
  selector: '[fadeInOutAnimation]',
  standalone: true
})
export class FadeInOutAnimationDirective implements OnInit, OnDestroy, AfterViewInit {
    private eleRef = inject(ElementRef)
  @Output() appear: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() disappear: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() enabled: boolean = true;
  
  subscriptionScroll!: Subscription;
  subscriptionResize!: Subscription;

  constructor() {
    this.eleRef.nativeElement.classList.add('fade-effect');
  }

  ngOnInit() {
    this.subscribe();
  }

  ngAfterViewInit() {
    this.checkVisibility();
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  @HostListener("window:scroll")
  @HostListener("window:resize")
  checkVisibility() {
    if (this.isVisible()) {
      this.eleRef.nativeElement.classList.add('visible');
      this.appear.emit(true);
    } else {
      this.eleRef.nativeElement.classList.remove('visible');
      this.disappear.emit(false);
    }
  }

  isVisible(): boolean {
    const pos = this.eleRef.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    return pos.top <= windowHeight && pos.bottom >= 0; // Ajusta según necesidad
  }

  subscribe() {
    this.subscriptionScroll = fromEvent(window, 'scroll').pipe(startWith(null))
      .subscribe(() => this.checkVisibility());
    this.subscriptionResize = fromEvent(window, 'resize').pipe(startWith(null))
      .subscribe(() => this.checkVisibility());
  }

  unsubscribe() {
    if (this.subscriptionScroll) this.subscriptionScroll.unsubscribe();
    if (this.subscriptionResize) this.subscriptionResize.unsubscribe();
  }
}
