import { Component, OnDestroy } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";
@Component({
    selector: 'btn-cell-renderer',
    template: `
      <button mat-button (click)="btnClickedHandler()" color="primary">{{message}}</button>
    `,
  })
  export class BtnCellRenderer implements ICellRendererAngularComp, OnDestroy {
    public message =''
    refresh(params: ICellRendererParams): boolean {
      throw new Error("Method not implemented.");
    }
    private params: any;
  
    agInit(params: any): void {
      this.params = params;
      this.message = params.message;
    }
  
    btnClickedHandler() {
      this.params.context.componentParent.gridCellClick({action:
        this.params.action,node:this.params.node});
    }
  
    ngOnDestroy() {
    }
  }