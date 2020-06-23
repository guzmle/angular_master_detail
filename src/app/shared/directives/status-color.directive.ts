import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appStatusColor]'
})
export class StatusColorDirective implements OnInit, OnDestroy {

  @Input() public objeto;

  constructor(private ref: ElementRef) {
    console.log('objeto por parametro', this.objeto);
  }

  ngOnInit(): void {
    console.log('objeto por parametro en el init', this.objeto);
    this.ref.nativeElement.style.background = this.objeto?.active ? 'blue' : 'red';
  }

  ngOnDestroy(): void {
  }

}
