import { HttpClient, HttpClientModule ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class HttpServiceService {

  headers= {
    "Content-type": "application/json"
  }

  constructor(private http: HttpClient) { }
  

  /**
  *this method posts data to a server
  *@param url - the url to post data to 
  *@param data - the data to send to the url
  */
  postData(url, data){
  	return new Promise((resolve, reject)=>{
      const httpOptions: { headers} = {
        headers: new HttpHeaders(this.headers)
       };
  		this.http.post(url, data, httpOptions).subscribe(
  			res=>{
  				resolve(res);
  			},
  			err=>{
  				if(err){
  					reject(err);
  				}
  			});
  	});
  }


  /**
   * this method returns an observeable. this method gets data from a url and returns it
   * @param url the url from which data is to be fetched
   */
  getData(url){
    return new Promise((resolve, reject)=>{
      const httpOptions: { headers} = {
        headers: new HttpHeaders(this.headers)
       };  		
      this.http.get(url, httpOptions)
        .subscribe(data=>{
          resolve(data)
        },
        err=>{
          reject(err)
        });
    });
  }

}