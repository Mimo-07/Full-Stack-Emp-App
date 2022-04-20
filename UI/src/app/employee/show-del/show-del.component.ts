import { Component, OnInit } from '@angular/core';
import {SharedService} from './../../shared.service';

@Component({
  selector: 'app-show-del',
  templateUrl: './show-del.component.html',
  styleUrls: ['./show-del.component.css']
})
export class ShowDelComponent implements OnInit {
  constructor(private service:SharedService) { }

  EmployeeList:any=[];
  ModalTitle!:string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;

  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.getEmpList().subscribe(data=>
      this.EmployeeList=data);
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      DateOfJoining:"",
      PhotoFileName:"anonymous.jpeg"
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshDepList();
  }

  editClick(item:any){
    this.emp=item;
    this.ActivateAddEditEmpComp=true;
    this.ModalTitle="Edit Employee";
  }

  deleteClick(item:any){
    if(confirm("Are you sure?")){
      this.service.deleteEmployee(item.EmployeeId).subscribe(res=>{
        alert(res.toString());
        this.refreshDepList();
      });
    }
  }

 

}
