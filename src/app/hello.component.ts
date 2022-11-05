import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <div (cdkObserveContent)="contentChanged($event)">
      <ng-content></ng-content><span [hidden]="!isAho">🤪</span>
    </div>`,
})
export class HelloComponent {
  isAho = false;

  constructor(private ngZone: NgZone) {}

  contentChanged(event: MutationRecord[]): void {
    const valueStr = event[0].target.nodeValue;
    const valueNum = parseInt(valueStr);
    if (isNaN(valueNum) || !Number.isSafeInteger(valueNum)) return;

    const isContain3 = valueStr.includes('3');
    const isMultipleOf3 = valueNum % 3 === 0;

    this.ngZone.run(() => {
      this.isAho = isContain3 || isMultipleOf3;
    });
  }
}
