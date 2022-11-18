import { Component, OnInit } from '@angular/core';
import { locationlistI } from 'src/app/model/locationList.interface';
import { RegisterService } from 'src/app/services/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { activitiesClass } from 'src/app/model/activities-class';
import { locationClass } from 'src/app/model/location-class';
import { activitiesListI } from 'src/app/model/activitiesList.interface';
import { chemicalListI } from 'src/app/model/chemicalList.interface';
import { chemicalClass } from 'src/app/model/chemical-class';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  //interfaces
  activitiesList: activitiesListI[] = [];
  locationList: locationlistI[] = [];
  chemicalList: chemicalListI[] = [];

  //classes
  selectedChemical?: chemicalListI;
  selectedLocation?: locationlistI;
  selectedActivity?: activitiesListI;

  action = 'Agregar';
  id: Number | undefined;

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,

    private _RegisterService: RegisterService
  ) {
    this.fb.control(new Date());
    this.form = this.fb.group({
      Supervisor: [''],
      Plan: [''],
      Location: [''],
      Block: [''],
      Ship: [''],
      BedID: [''],
      Side: [''],
      Chemical: [''],
      Date: [''],
    });
  }

  ngOnInit(): void {
    this.obtainActivitesList();
    this.obtainLocationList();
    this.getChemicalsList();
  }

  obtainActivitesList() {
    this._RegisterService.getActivitiesList().subscribe(
      (data) => {
        this.activitiesList = data;
        console.log(data);
        console.log(' DATOS DE LA ACTIVIDAD ');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtainLocationList() {
    this._RegisterService.getLocationList().subscribe(
      (data) => {
        this.locationList = data;
        console.log(data);
        console.log(' DATOS DE LA CAMA ');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getChemicalsList() {
    this._RegisterService.getChemicalsList().subscribe(
      (data) => {
        this.chemicalList = data;
        console.log(data);
        console.log('Datos listados en tabla de forma exitosa!! PLAGAS');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveActivity() {
    let activitiesClas = new activitiesClass();
    let chemicalClas = new chemicalClass();
    let locationClas = new locationClass();

    (activitiesClas.planDate = this.form.get('Date')?.value),
    (chemicalClas = this.form.get('Chemical')?.value),
    (activitiesClas.chemicalID = chemicalClas.chemicalID),
    (activitiesClas.supervisorID = this.form.get('Supervisor')?.value),
    (activitiesClas.planChemical = this.form.get('Plan')?.value),
    (locationClas = this.form.get('Location')?.value);
    activitiesClas.bedID = locationClas.bedID;

    console.log('BED ID: ', activitiesClas.bedID);

    const activity: any = {
      Monitor: this.form.get('Monitor')?.value,
      MonitorID: this.form.get('MonitorID')?.value,
      Plan: this.form.get('Plan')?.value,
      /* Supervisor: this.form.get('Supervisor')?.value,
      Location: this.form.get('Location')?.value,
      Block: this.form.get('Block')?.value,
      Ship: this.form.get('Ship')?.value, */
      Bed: this.form.get('Bed')?.value,
      /* Square: this.form.get('Square')?.value, */
      Chemical: this.form.get('Chemical')?.value,
      /* Description: this.form.get('Description')?.value, */
      Date: this.form.get('Date')?.value,
    };

    if (this.id == undefined) {
      //aAdd new register
      console.log('DATOS A ENVIAR!!: ', activitiesClas);
      this._RegisterService.saveActivity(activitiesClas).subscribe(
        (data) => {
          this.toastr.success(
            'Se registraron exitosamente los datos',
            'Registro Exitoso'
          );
          this.obtainActivitesList();
          this.form.reset();
        },
        (error) => {
          this.toastr.error('Ups... algo malio sal', 'Error');
          console.log(error);
        }
      );
    } else {
      //Edit register
      activity.planID = this.id;
      this._RegisterService.updateActivities(this.id, activity).subscribe(
        (data) => {
          this.form.reset();
          this.action = 'Agregar';
          this.id = undefined;
          this.toastr.info(
            'Registro actualizado exitosamente',
            'Registro actualizado'
          );
          this.obtainActivitesList();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  /*   constructor() { }

  displayedColumns: string[] = ['position', 'date', 'hour', 'zone', 'solution' ];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  } */
}
