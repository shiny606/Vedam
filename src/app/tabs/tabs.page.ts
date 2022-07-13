import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  selectTab = 'tab1';
  constructor() { }
  tabChange(e) {
    this.selectTab = e.tab;
    console.log(e);
    console.log(this.selectTab);

}
}
