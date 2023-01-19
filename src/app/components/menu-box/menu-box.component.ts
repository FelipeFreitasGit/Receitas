import { Component, Input } from '@angular/core';
import { IMenuBox } from './menu-box';

@Component({
  selector: 'app-menu-box',
  templateUrl: './menu-box.component.html',
  styleUrls: ['./menu-box.component.scss']
})
export class MenuBoxComponent {

  @Input() menu!: IMenuBox;
}
