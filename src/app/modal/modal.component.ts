import { Component,ViewChild, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { RunScriptsService } from '../run-scripts/run-scripts.service';
import { ModalService } from './modal.service';

import { RunScriptsComponent } from '../run-scripts/run-scripts.component';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {    constructor(private el: ElementRef) { }    ngOnInit() {
  // we added this so that when the backdrop is clicked the modal is closed.
  this.el.nativeElement.addEventListener('click', ()=> {
      this.close()
  })
}    close() {
  this.el.nativeElement.classList.remove('sshow')
  this.el.nativeElement.classList.add('hhidden')
}
}