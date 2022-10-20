import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CadastrClienteTabelaDataSource, Cliente } from './cadastr-cliente-tabela-datasource';

@Component({
  selector: 'app-cadastr-cliente-tabela',
  templateUrl: './cadastr-cliente-tabela.component.html',
  styleUrls: ['./cadastr-cliente-tabela.component.css']
})
export class CadastrClienteTabelaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Cliente>;
  dataSource: CadastrClienteTabelaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','status'];

  constructor() {
    this.dataSource = new CadastrClienteTabelaDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
