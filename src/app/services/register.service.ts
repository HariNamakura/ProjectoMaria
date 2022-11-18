import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { locationlistI } from '../model/locationList.interface';
import { monitorlistI } from '../model/monitorList.interface';
import { plaguelistI } from '../model/plagueList.interface';
import { BinnacleListI } from '../model/binnacleList.interface';
import { BinnacleAdd } from '../model/AddBinnacle';
import { activitiesListI } from '../model/activitiesList.interface';
import { chemicalListI } from '../model/chemicalList.interface';
import { activitiesClass } from '../model/activities-class';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private myAppUrl = 'https://localhost:7266/';
  private myApiUrl = 'api/Binnacle/';
  
  constructor(private http: HttpClient) { }

    getRegistersList(): Observable<BinnacleListI[]>{
        return this.http.get<BinnacleListI[]>(this.myAppUrl + this.myApiUrl);
      }

    deleteRegister(id: Number): Observable<BinnacleListI[]>{
        return this.http.delete<BinnacleListI[]>(this.myAppUrl + this.myApiUrl + id)
      }

    saveRegister(binnacle: BinnacleAdd): Observable<BinnacleAdd>{
        return this.http.post<BinnacleAdd>(this.myAppUrl + this.myApiUrl, binnacle);
    }

    updateRegister(id: Number, binnacle: any): Observable<any>{
        return this.http.put(this.myAppUrl + this.myApiUrl + id, binnacle);
    }

    private monitorAPIUrl = 'https://localhost:7266/';
    private monitorAPI = 'api/Monitor/';

    getMonitorList(): Observable<monitorlistI[]>{
      return this.http.get<monitorlistI[]>(this.monitorAPIUrl + this.monitorAPI);
    }

    private lcoationAPIUrl = 'https://localhost:7266/';
    private LocationAPI = 'api/Bed/';


    getLocationList(): Observable<locationlistI[]>{
      return this.http.get<locationlistI[]>(this.lcoationAPIUrl + this.LocationAPI);
    }

    private plagueAPIUrl = 'https://localhost:7266/';
    private plagueAPI = 'api/Desease/';


    getPlagueList(): Observable<plaguelistI[]>{
      return this.http.get<plaguelistI[]>(this.plagueAPIUrl + this.plagueAPI);
    }

    
    private ActivitiesAPIUrl = 'https://localhost:7266/';
    private ActivitiesAPI = 'api/ActionPlan/';


    getActivitiesList(): Observable<activitiesListI[]>{
      return this.http.get<activitiesListI[]>(this.ActivitiesAPIUrl + this.ActivitiesAPI);
    }
    
    
    updateActivities(id: Number, activity: any): Observable<any>{
      return this.http.put(this.ActivitiesAPIUrl + this.ActivitiesAPI + id, activity);
    }

    saveActivity(activity: activitiesClass): Observable<activitiesClass>{
    return this.http.post<activitiesClass>(this.ActivitiesAPIUrl + this.ActivitiesAPI, activity);
    }

    deleteActivity(id: Number): Observable<activitiesListI[]>{
      return this.http.delete<activitiesListI[]>(this.myAppUrl + this.myApiUrl + id)
    }
    private chemicalAPIUrl = 'https://localhost:7266/';
    private chemicalAPI = 'api/Chemical/';

    getChemicalsList(): Observable<chemicalListI[]>{
      return this.http.get<chemicalListI[]>(this.chemicalAPIUrl + this.chemicalAPI);
    }


  }

