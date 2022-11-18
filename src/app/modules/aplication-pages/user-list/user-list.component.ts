import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

 export interface UserListElement {
  name: string;
  id: number;
  rol: string;
  email: string;
};

const ELEMENT_DATA: UserListElement[] = [
  {id: 1, name: 'Maria',  rol: 'Monitor', email: 'm@gmail.com'},
  {id: 2, name: 'Maria',  rol: 'Monitor', email: 'm@gmail.com'},
  {id: 3, name: 'Maria',  rol: 'Monitor', email: 'm@gmail.com'},
  {id: 4, name: 'Maria',  rol: 'Monitor', email: 'm@gmail.com'},
  {id: 5, name: 'Maria',  rol: 'Monitor', email: 'm@gmail.com'},
  {id: 6, name: 'Maria',  rol: 'Monitor', email: 'm@gmail.com'},
  
]; 
export class UserListComponent {

  displayedColumns: string[] = ['id', 'name', 'rol', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  /* applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } */
} 
