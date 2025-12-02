import {Component, input, signal, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-tab',
  imports: [],
  templateUrl: './tab.html',
  styleUrl: './tab.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Tab {
  selected = signal(false);
  btnLabel = input.required<string>();

  onSelect(isSelected = false) {
    this.selected.set(isSelected);
  }
}
