import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {
  despesas: any;

  constructor() { }

  ngOnInit() {
    this.chamaApi();
  }

  async chamaApi() {
    const dados = await axios.get('http://localhost:8080/despesas');
    this.despesas = dados.data;
  }

  async excluie(id) {
    let res = await axios.delete(`http://localhost:8080/despesas/${id}`);
    this.chamaApi();
    console.log(res.data);
    alert(res.data.message);
  }

}
