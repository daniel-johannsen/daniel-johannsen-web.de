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
    document.getElementById('homepage').classList.remove('d-none');
    document.getElementById('all').classList.remove('button-active');
    document.getElementById('javaScript').classList.remove('button-active');
    document.getElementById('angular').classList.add('button-active');
    window.scroll(0, 1789);
  }


  /**
   * This function is used to show all the JavaScript projects.
   */
  showJavaScriptProjects() {
    document.getElementById('kanbanProject').classList.remove('d-none');
    document.getElementById('elPolloLoco').classList.remove('d-none');
    document.getElementById('pokedex').classList.remove('d-none');
    document.getElementById('homepage').classList.add('d-none');
    document.getElementById('all').classList.remove('button-active');
    document.getElementById('javaScript').classList.add('button-active');
    document.getElementById('angular').classList.remove('button-active');
    window.scroll(0, 1789);
  }


  /**
   * This function is used to show all the projects.
   */
  showAllProjects() {
    document.getElementById('kanbanProject').classList.remove('d-none');
    document.getElementById('elPolloLoco').classList.remove('d-none');
    document.getElementById('pokedex').classList.remove('d-none');
    document.getElementById('homepage').classList.remove('d-none');
    document.getElementById('all').classList.add('button-active');
    document.getElementById('javaScript').classList.remove('button-active');
    document.getElementById('angular').classList.remove('button-active');
    window.scroll(0, 1789);
  }


  /**
   * This function is used to show that the e-mail is sent sucessfully.
   */
  success() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    
    if ((name as HTMLInputElement).value != "" &&
        (email as HTMLInputElement).value != "" &&
        (message as HTMLInputElement).value !="") {
          alert('e-mail sent successfully!');
        }    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
