import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface Modulo {
  name: string;
  id: number;
  status: boolean;
  description?:string;
}
const EXAMPLE_DATA: Modulo[] = [
  {id: 1, name: 'Hydrogen',status:true},
  {id: 2, name: 'Helium',status:true},
  {id: 3, name: 'Lithium',status:true},
  {id: 4, name: 'Beryllium',status:true},
  {id: 5, name: 'Boron',status:true},
  {id: 6, name: 'Carbon',status:true},
  {id: 7, name: 'Nitrogen',status:true},
  {id: 8, name: 'Oxygen',status:true},
  {id: 9, name: 'Fluorine',status:true},
  {id: 10, name: 'Neon',status:true},
  {id: 11, name: 'Sodium',status:true},
  {id: 12, name: 'Magnesium',status:true},
  {id: 13, name: 'Aluminum',status:true},
  {id: 14, name: 'Silicon',status:true},
  {id: 15, name: 'Phosphorus',status:true},
  {id: 16, name: 'Sulfur',status:true},
  {id: 17, name: 'Chlorine',status:true},
  {id: 18, name: 'Argon',status:true},
  {id: 19, name: 'Potassium',status:true},
  {id: 20, name: 'Calcium',status:true},
];

/**
 * Data source for the TabelaCadastroModulo view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TabelaCadastroModuloDataSource extends DataSource<Modulo> {
  data: Modulo[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Modulo[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Modulo[]): Modulo[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Modulo[]): Modulo[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
