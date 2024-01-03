import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {dispatch} from './Observables/main.service'
import {MainService} from './Observables/main.service'
import {
  ITEMS_GET_REQUEST,
  ITEMS_GET_SUCCESS,
  ITEMS_GET_FAIL
} from "./constants/itemConstant"

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient,public ms:MainService) {}

  fetchItem():void {
    try {
      this.ms.dispatch({
        type: ITEMS_GET_REQUEST,
      });

      this.http.get<any>('http://127.0.0.1:8000/').subscribe(
        (data) => {
          console.log(data)
          this.ms.dispatch({
            type: ITEMS_GET_SUCCESS,
            payload: data,
          });
        },
        (err) => {
          this.ms.dispatch({
            type: ITEMS_GET_FAIL,
            payload: err,
          });
        }
      );
    } catch (err) {
      this.ms.dispatch({
        type: ITEMS_GET_FAIL,
        payload: 'Client Side Error',
      });
    }
  }
}
