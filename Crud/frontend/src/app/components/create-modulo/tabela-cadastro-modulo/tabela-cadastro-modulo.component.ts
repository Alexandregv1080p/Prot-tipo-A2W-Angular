import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaCadastroModuloDataSource, Modulo } from './tabela-cadastro-modulo-datasource';

@Component({
  selector: 'app-tabela-cadastro-modulo',
  templateUrl: './tabela-cadastro-modulo.component.html',
  styleUrls: ['./tabela-cadastro-modulo.component.css']
})
export class TabelaCadastroModuloComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Modulo>;
  dataSource: TabelaCadastroModuloDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','status'];

  constructor() {
    this.dataSource = new TabelaCadastroModuloDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
