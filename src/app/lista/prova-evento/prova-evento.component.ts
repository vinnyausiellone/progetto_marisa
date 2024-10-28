import { Component, EventEmitter, Input, input, Output } from "@angular/core";

@Component({
    selector: 'app-prova-evento',
    templateUrl: './prova-evento.component.html',
    styleUrl: './prova-evento.component.scss',
  })
  export class ProvaEventoComponent {
 
    @Output() testevento: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() pippo?: boolean;

    testEvent() {
      this.testevento.emit(true)
    }
  }