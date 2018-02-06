/**
 * Common App Services.
 */

import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalVariable } from '../services/static-variable';
import { Observable } from 'rxjs/Observable';

import * as _ from 'underscore';

@Injectable()
export class CommonAppService {
	public headers: Headers;
	public currentUser: any;
	public dialogResult: any;

	constructor(
	) {
	}

	public isUndefined(obj: any) {
		if (typeof obj == 'undefined' || obj == null || obj == '') {
			return true;
		} else {
			return false;
		}
	}

	public isSuccess(data: any) {
		return (data.status == "1" || data.status == true) ? true : false;
	}

	public isFail(data: any) {
		return (data.status == "0" || data.status == false) ? true : false;
	}

	public getDayDiffFromTwoDate(firstDate: any, secondDate: any) {
		let dayDiff = (secondDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24);
		return dayDiff;
	}

	public getFullFormattedDate(date: any){
		let dt= new Date(date);
	   	return (this.isUndefined(date))?"" :(dt.getFullYear() + '-' + ('0' + (dt.getMonth()+1)).slice(-2) + '-' + ('0' + dt.getDate()).slice(-2)) + ' ' + 
    		('00' + dt.getHours()).slice(-2) + ':' + 
    		('00' + dt.getMinutes()).slice(-2) + ':' + 
    		('00' + dt.getSeconds()).slice(-2);
	}

	public getDateByTimestamp(timestamp: any){
		return (this.isUndefined(timestamp))?"" : new Date(parseInt(timestamp)).toString();
	}

	public getCurrentTimeZoneDate(timestamp: any){
		return (this.getFullFormattedDate(new Date(parseInt(timestamp)).toString()));
	}
}

interface Wrapped<T> {
	valueOf(): T;
}

class NumberWrapper {
	constructor(public value: number) { }
	valueOf(): number { return this.value; }
}