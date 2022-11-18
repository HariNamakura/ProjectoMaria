
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/register.service';
import { BinnacleListI } from 'src/app/model/binnacleList.interface';


@Component({
  selector: 'app-binnacle',
  templateUrl: './binnacle.component.html',
  styleUrls: ['./binnacle.component.css']

  
})
export class BinnacleComponent implements OnInit {

  binnacleList: BinnacleListI[] = [];

  form: FormGroup;
  constructor(private fb: FormBuilder,
    private toastr: ToastrService,


    private _RegisterService: RegisterService) { 
    this.fb.control(new Date())
    this.form = this.fb.group({
      
      Supervisor:[''],
      Square:[''],
      Monitor:[''],
      MonitorID:[''],
      Location: [''],
      Block:[''],
      Ship:[''],
      BedID:[''],
      Side:[''],
      Plague:[''],
      Description:[''],
      Date:[''],

    })
  }

  ngOnInit(): void {
    this.obtainBinnacleList();
  }
  obtainBinnacleList(){
    this._RegisterService.getRegistersList().subscribe(data =>{
      this.binnacleList = data;
      console.log(data);
      console.log("Datos listados en tabla de forma exitosa!! REGISTRO")
    },error =>{
      console.log(error);
    })
  }
 
}

 
  

