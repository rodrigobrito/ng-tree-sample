import {Component, Input} from '@angular/core';
import { Menu } from './models/menu.model';

@Component({
    selector: 'app-menu',
    templateUrl: './app-menu.component.html'
})
export class MenuTreeComponent {
    @Input() menus: Array<Menu>;
}
