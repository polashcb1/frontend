import {Component, ElementRef, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnDestroy{
  constructor(private elementRef: ElementRef) {
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
  }
}
