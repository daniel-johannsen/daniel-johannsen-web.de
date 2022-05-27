import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  showOverlay(x) {
    let id = 'overlay' + x;
    document.getElementById(id).classList.remove('d-none');
  }

  removeOverlay(x) {
    let id = 'overlay' + x;
    document.getElementById(id).classList.add('d-none');
  }

  showAngularProjects() {
    document.getElementById('kanbanProject').classList.add('d-none');
    document.getElementById('elPolloLoco').classList.add('d-none');
    document.getElementById('pokedex').classList.add('d-none');
  }

  showJavaScriptProjects() {
    document.getElementById('homepage').classList.add('d-none');
  }

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
