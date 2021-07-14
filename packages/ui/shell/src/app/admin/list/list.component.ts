import {Component, OnInit} from '@angular/core';
import {ShellService} from 'src/app/services/shell.service';
import {BtnCellRenderer} from 'src/app/shared/button-cell-renderer.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public columnDefs = [
    {field: 'id'},
    {field: 'name'},
    {field: 'remote'},
    {field: 'module'},
    {field: 'path'},
    {field: 'url'},
    {
      field: 'delete',
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        message: 'Delete',
        action: 'delete'
      },

      minWidth: 150
    }
  ];
  public context: any;
  public defaultColDef: any;
  public frameworkComponents: any;
  public rowData = [];
  constructor(private shellService: ShellService) {
    this.context = {componentParent: this};
    this.defaultColDef = {
      flex: 1,
      minWidth: 100
    };
    this.frameworkComponents = {
      btnCellRenderer: BtnCellRenderer
    };
  }

  ngOnInit(): void {
    this.loadData();
  }
  gridCellClick(evt: any) {
    this.shellService.deleteModule(evt?.node?.data?.id).subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.shellService.getRoutes().subscribe((data) => {
      this.rowData = data as any;
    });
  }
}
