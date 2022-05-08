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

  constructor() { }

  ngOnInit(): void {
  }

}
