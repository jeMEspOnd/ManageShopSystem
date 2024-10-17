import { Component } from '@angular/core';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent{
  isSidebarOpen = false;
  isShopMenuOpen = false; // State for shop submenu

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleShopMenu() {
    this.isShopMenuOpen = !this.isShopMenuOpen;
  }

}
