import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  /**
   * This function is used to show the overlay on the project image.
   * @param x number
   */
  showOverlay(x) {
    let id = 'overlay' + x;
    document.getElementById(id).classList.remove('d-none');
  }


/**
   * This function is used to show the overlay on the project image.
   * @param x number
   */
  removeOverlay(x) {
    let id = 'overlay' + x;
    document.getElementById(id).classList.add('d-none');
  }


  /**
   * This function is used to show all the Angular projects.
   */
  showAngularProjects() {
    document.getElementById('kanbanProject').classList.add('d-none');
    document.getElementById('elPolloLoco').classList.add('d-none');
    document.getElementById('pokedex').classList.add('d-none');
  }


  /**
   * This function is used to show all the JavaScript projects.
   */
  showJavaScriptProjects() {
    document.getElementById('homepage').classList.add('d-none');
  }


  /**
   * This function is used to show all the projects.
   */
  showAllProjects() {
    document.getElementById('kanbanProject').classList.remove('d-none');
    document.getElementById('elPolloLoco').classList.remove('d-none');
    document.getElementById('pokedex').classList.remove('d-none');
    document.getElementById('homepage').classList.remove('d-none');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
