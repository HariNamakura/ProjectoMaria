import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/register.service';
import { BinnacleListI } from 'src/app/model/binnacleList.interface';
import { monitorlistI } from 'src/app/model/monitorList.interface';
import { locationlistI } from 'src/app/model/locationList.interface';
import { plaguelistI } from 'src/app/model/plagueList.interface';
import { BinnacleAdd } from 'src/app/model/AddBinnacle';
import { plagueAdd } from 'src/app/model/plague-class';
import { locationClass } from 'src/app/model/location-class';

@Component({
  selector: 'app-monitor-register.component',
  templateUrl: './monitor-register.component.html',
  styleUrls: ['./monitor-register.component.css'],

  
})
export class MonitorRegisterComponent implements OnInit {

  binnacleList: BinnacleListI[] = [];
  selected: BinnacleListI[] = [];
  monitorList: monitorlistI[] = [];
  locationList: locationlistI[] = [];
  deseaseList: plaguelistI[] = [];


  selectedDesease?: plaguelistI;
  selectedLocation?: locationlistI;
  selectedMonitor?: monitorlistI;

  binnacleclas?: BinnacleAdd;

  action = 'Agregar';
  id: Number | undefined;
  date: Date = new Date()

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
    this.obtainMonitorList();
    this.obtainLocationList();
    this.obtainPlagueList();
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
    obtainMonitorList(){
    this._RegisterService.getMonitorList().subscribe(data =>{
      this.monitorList = data;
      console.log(data);
      console.log("Datos listados en tabla de forma exitosa!!")
    },error =>{
      console.log(error);
    })
  }
    obtainLocationList(){
      this._RegisterService.getLocationList().subscribe(data =>{
        this.locationList = data;
        console.log(data);
        console.log(" DATOS DE LA CAMA ")
      },error =>{
        console.log(error);
      })
  }

  obtainPlagueList(){
    this._RegisterService.getPlagueList().subscribe(data =>{
      this.deseaseList = data;
      console.log(data);
      console.log("Datos listados en tabla de forma exitosa!! PLAGAS")
    },error =>{
      console.log(error);
    })
}

  saveRegister(){

    let addBinnacle = new BinnacleAdd();
    let plagueClass = new plagueAdd();
    let locationClas = new locationClass();


    addBinnacle.binnacleDate = this.form.get('Date')?.value,
    plagueClass = this.form.get('Plague')?.value,
    addBinnacle.deseaseID = plagueClass.deseaseID,
    addBinnacle.monitorID = this.form.get('MonitorID')?.value,
    addBinnacle.supervisorID = this.form.get('Supervisor')?.value,
    locationClas = this.form.get('Location')?.value
    addBinnacle.bedID = locationClas.bedID

    console.log("BED ID: ",  addBinnacle.bedID )



    const binnacle: any = {
      Monitor: this.form.get('Monitor')?.value,
      MonitorID: this.form.get('MonitorID')?.value,
      /* Supervisor: this.form.get('Supervisor')?.value, */
     /*  Location: this.form.get('Location')?.value,
      Block: this.form.get('Block')?.value,
      Ship: this.form.get('Ship')?.value, */
      Bed: this.form.get('Bed')?.value,
      /* Square: this.form.get('Square')?.value, */
      Plague: this.form.get('Plague')?.value,
      /* Description: this.form.get('Description')?.value, */
      Date: this.form.get('Date')?.value
    }
 
      if (this.id == undefined) {
        //aAdd new register
        console.log("DATOS A ENVIAR!!: ", addBinnacle)
        this._RegisterService.saveRegister(addBinnacle).subscribe(data =>{
          this.toastr.success('Se registraron exitosamente los datos', 'Registro Exitoso');
          this.obtainBinnacleList();
          this.form.reset();
        },error => {
          this.toastr.error('Ups... algo malio sal','Error')
          console.log(error)
        })

      }else{
        //Edit register
        binnacle.binnacleID = this.id;
          this._RegisterService.updateRegister(this.id,binnacle).subscribe(data => {
            this.form.reset();
            this.action = 'Agregar';
            this.id = undefined;
            this.toastr.info('Registro actualizado exitosamente', 'Registro actualizado');
            this.obtainBinnacleList();
          },error =>{
            console.log(error);
          })

      }

    
  } 

  deleteRegister(id: Number){
    this._RegisterService.deleteRegister(id).subscribe(data =>{
      this.toastr.error('Registro eliminado Exitosamente', "Registro Eliminado");
      this.obtainBinnacleList();
    }, error => {
      console.log(error);
    })
  }

  editRegister(binnacle: any){
      this.action = 'Editar';
      this.id = binnacle.binnacleID;

      this.form.patchValue({

        Monitor: binnacle.monitorName,
        Date: binnacle.binnacleDate,
        Bed: binnacle.bedID,
        Plague: binnacle.plagues,
        
      })
  }
  
}
