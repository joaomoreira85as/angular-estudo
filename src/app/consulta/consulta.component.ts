import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConsultaService } from './consulta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
})
export class ConsultaComponent implements OnInit, OnDestroy {
  consultas;
  erro;
  consultaInscricao;
  constructor(private consultaService: ConsultaService) {}

  ngOnInit(): void {
    this.consultaInscricao = this.consultaService.getConsultas().subscribe(
      (data) => (this.consultas = data),
      (erro) => {
        this.erro = true;
        console.log(erro);
      }
    );
  }

  ngOnDestroy(): void {
    this.consultaInscricao.unsubscribe();
  }
}
