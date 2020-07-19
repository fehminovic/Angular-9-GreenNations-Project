import { Component } from '@angular/core';

import { ScreenService } from '../../services/screen.service';
import { MenuService } from '../../services/menu.service';

/**
 * Displays the Title Bare of the framework whic includes a logo.png and the configurable Top Bar.
 *
 * User CSS Styles allowed: user-title-bar
 *
 * @export
 * @class TitleBarComponent
 */
@Component({
  selector: 'ss-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent {

  constructor(
    public screenService: ScreenService,
    public menuService: MenuService,
  ) { }

}
