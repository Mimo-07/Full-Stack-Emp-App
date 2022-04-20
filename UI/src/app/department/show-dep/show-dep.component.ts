import { Component, OnInit } from '@angular/core';
import {SharedService} from './../../shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any=[];
  ModalTitle!:string;
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  DepartmentIdFilter:string="";
  DepartmentNameFilter:string="";
  DepartmentListWithoutFilter=[];

  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.getDepList().subscribe(data=>
      this.DepartmentList=data,
      this.DepartmentListWithoutFilter=this.DepartmentList);

  }

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditDepComp=true;
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }

  editClick(item:any){
    this.dep=item;
    this.ActivateAddEditDepComp=true;
    this.ModalTitle="Edit Department";
  }

  deleteClick(item:any){
    if(confirm("Are you sure?")){
      this.service.deleteDepartment(item.DepartmentId).subscribe(res=>{
        alert(res.toString());
        this.refreshDepList();
      });
    }
  }
}
