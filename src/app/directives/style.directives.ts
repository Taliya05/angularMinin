import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";


@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input  ('appStyle') color: string = 'blue'
 @Input () dStyles: { border?: string; borderRadius?: string; fontWeight?: string; }  | undefined
 @HostBinding('style.color') elColor = null
  constructor(private elRef: ElementRef, private r: Renderer2) {
    // this.r.setStyle(this.elRef.nativeElement, 'color','#ad0000')   // а можно через второй объект (r)
    // // elRef.nativeElement.style.color = '#ad0000'    // можно так
  }
  // @HostListener('click', ['$event.target']) onClick(event: Event) {
  //   console.log(event)
  // }
  @HostListener('mouseenter') onEnter() {
    // @ts-ignore
    this.elColor = this.color
    // this.r.setStyle(this.elRef.nativeElement, 'color', this.color)
    // this.r.setStyle(this.elRef.nativeElement, 'fontWeight', this.dStyles!.fontWeight)
    // this.r.setStyle(this.elRef.nativeElement, 'border', this.dStyles!.border)
    // this.r.setStyle(this.elRef.nativeElement, 'borderRadius', this.dStyles!.borderRadius)
  }
  @HostListener('mouseleave') onLeave() {
    this.elColor = null
    // this.r.setStyle(this.elRef.nativeElement, 'color',null)
  //   this.r.setStyle(this.elRef.nativeElement, 'fontWeight',null)
  //   this.r.setStyle(this.elRef.nativeElement, 'border', null)
  //   this.r.setStyle(this.elRef.nativeElement, 'borderRadius', null)
  }

}
