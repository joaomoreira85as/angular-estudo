import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-simples',
  templateUrl: './painel-simples.component.html',
  styleUrls: ['./painel-simples.component.css'],
})
export class PainelSimplesComponent implements OnInit {
  @Input() titulo: string;
  @Input() col: number;
  @Input() tipo: string = 'info';

  constructor() {}

  ngOnInit(): void {}
}
