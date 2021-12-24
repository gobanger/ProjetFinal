import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QcmService {

  constructor() { }
  
  qcmFormation:any;

  createQCM(info:any){
    this.qcmFormation =info.formation;
    localStorage.setItem('result'+this.qcmFormation, JSON.stringify(info));
  }


}
