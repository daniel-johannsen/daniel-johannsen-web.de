import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  
/**
 * This function is used to show the dropdown menu.
 */
dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
};

  constructor() { }

  ngOnInit(): void {
  }

}
