import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css'],
})
export class BarraNavegacaoComponent implements OnInit {
  @Output() onToggle = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  disparaEvento() {
    this.onToggle.emit();
  }
}
