import {AfterContentInit, Component, contentChildren, signal} from '@angular/core';
import {Tab} from '../tab/tab';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class Tabs implements AfterContentInit {
  tabs = contentChildren(Tab);
  selectedIndex = signal<number>(0);

  ngAfterContentInit() {
    //Select 1st tab by default
    this.tabs().at(this.selectedIndex())?.onSelect(true);
  }

  protected onSelect(index: number) {
    this.selectedIndex.set(index);
    this.tabs().forEach((tab, _index) => tab.onSelect(index === _index))
  }
}
