import {AfterViewInit, Component, ElementRef, Input, OnInit} from '@angular/core';
import {Renderer2} from '@angular/core';

@Component({
    selector: 'bs-card-img-overlay',
    template: `
    @if (cardTitle) {
      <h3 class="card-title" [innerHTML]="cardTitle"></h3>
    }
    @if (cardSubTitle) {
      <h5 class="card-subtitle mb-2 text-muted" [innerHTML]="cardSubTitle"></h5>
    }
    @if (cardText) {
      <p class="card-text" [innerHTML]="cardText"></p>
    }
    <ng-content></ng-content>
    `,
    styles: [':host{display: block;}'],
    standalone: false
})
export class CardImgOverlayComponent implements OnInit, AfterViewInit {
  @Input('card-title') cardTitle: any = '';
  @Input('card-subtitle') cardSubTitle: any = '';
  @Input('card-text') cardText: any = '';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.renderer.addClass(this.elRef.nativeElement, 'card-img-overlay');
  }

}
