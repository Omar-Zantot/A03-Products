import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // all directives and components selectors follow css selectors pattern
  selector: 'button[app-btn], a[app-btn]',
  // both syntax are valid to apply attributes or register events: host/@HostBinding-@HostListener
  host: {
    class: 'btn',
  },
})
export class BtnDirective {
  @Input() @HostBinding('class') color: 'btn-primary' | 'btn-secondary' =
    'btn-primary';
}
