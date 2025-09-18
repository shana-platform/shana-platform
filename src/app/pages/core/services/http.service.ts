import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }


    localData(key:any,value?:any,action?:any){
    if(action =='set'){return localStorage.setItem(key,value);}
    if(action =='remove'){localStorage.removeItem(key);return}
    if(action == 'get'){const data = localStorage.getItem(key);return data || null}
  }
}
