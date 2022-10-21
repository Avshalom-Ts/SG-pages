import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  // @Input() backgroundColor!: string;

  constructor(private element: ElementRef) {
    // console.log('Class Directive used');
    //Never use setTimeout to pass the ERROR..!!!()
    // setTimeout(() => {
    //   this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    // }, 500);
  }
  //1.
  // @Input() set backgroundColor(color: String) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }
  // @Input() set color(color: String) {
  //   this.element.nativeElement.style.color = color;
  // }
  //2.
  // @Input() set appClass(color: string) {
  //   this.element.nativeElement.style.color = color;
  // }
  //3.
  // @Input('appClass') set backgroundColor(color: String) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }
  //4.
  @Input('appClass') set classNames(classObj: any) {
    // this.element.nativeElement.style.backgroundColor = color;
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
