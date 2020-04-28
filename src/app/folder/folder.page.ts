import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string = "Home";
  ano:string;
  mes:string;
  dia:string;
  tipo:string;
  descricao:string;
  valor:string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async cadastrarDispesa(){
    let despesa = {
      ano: this.ano,
      mes: this.mes,
      dia: this.dia, 
      tipo: this.tipo,
      descricao: this.descricao,
      valor: this.valor
    }
    await axios.post('http://localhost:8080/despesas', despesa);
    this.ano = '';
    this.mes = '';
    this.dia = '';
    this.tipo = '';
    this.descricao = '';
    this.valor = '';
    alert("Despesa cadastrada com sucesso ;)");
  }
}
