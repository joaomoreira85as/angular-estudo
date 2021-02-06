import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-por-especialidade',
  templateUrl: './consulta-por-especialidade.component.html',
  styleUrls: ['./consulta-por-especialidade.component.css'],
})
export class ConsultaPorEspecialidadeComponent implements OnInit {
  @Input() consultas = [];

  @Input() titulo: string;
  @Input() col: number;
  @Input() tipo: string = 'info';
  @Input() erro: boolean;
  constructor() {}

  ngOnInit(): void {}
}
