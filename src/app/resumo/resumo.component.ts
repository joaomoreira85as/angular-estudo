import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResumoService } from './resumo.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css'],
})
export class ResumoComponent implements OnInit, OnDestroy {
  resumo: any;
  inscricao;
  constructor(private resumoService: ResumoService) {}

  ngOnInit(): void {
    this.inscricao = this.resumoService
      .getResumo()
      .subscribe((resumo) => (this.resumo = resumo));
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
