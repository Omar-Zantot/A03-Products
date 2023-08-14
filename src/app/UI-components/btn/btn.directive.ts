import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  // all directives and components selectors follow css selectors pattern
  selector: 'button[app-btn], a[app-btn]',
  // both syntax are valid to apply attributes or register events: host/@HostBinding-@HostListener
  host: {
    class: 'btn',
    // style: 'background: red !important',
  },
})
export class BtnDirective implements OnInit {
  constructor(
    private renderer: Renderer2,
    private _el: ElementRef<HTMLElement>
  ) {
    console.log(this._el);
    this.renderer.setStyle(this._el.nativeElement, 'background', 'green', 1);
    // this._el.nativeElement.style.background = 'red';
  }

  ngOnInit(): void {}
  @Input() @HostBinding('class') color: 'btn-primary' | 'btn-secondary' =
    'btn-primary';

  /**
   * thia method repesent click me
   * */
  @HostListener('click', ['$event']) clickMe(event: Event) {
    console.log(event);
    console.log('I`m clicked');
  }
}
