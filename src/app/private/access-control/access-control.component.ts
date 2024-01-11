import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-super-admin',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.scss']
})
export class AccessControlComponent implements OnDestroy{
  constructor(private elementRef: ElementRef) {
  }
  ngOnInit(): void {
    // this.elementRef.nativeElement.remove();
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
  }
}
