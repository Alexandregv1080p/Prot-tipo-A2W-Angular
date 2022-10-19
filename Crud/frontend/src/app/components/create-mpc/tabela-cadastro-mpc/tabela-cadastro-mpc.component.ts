import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaCadastroMpcDataSource, TabelaCadastroMpcItem } from './tabela-cadastro-mpc-datasource';

@Component({
  selector: 'app-tabela-cadastro-mpc',
  templateUrl: './tabela-cadastro-mpc.component.html',
  styleUrls: ['./tabela-cadastro-mpc.component.css']
})
export class TabelaCadastroMpcComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TabelaCadastroMpcItem>;
  dataSource: TabelaCadastroMpcDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new TabelaCadastroMpcDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
