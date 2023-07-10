import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../component/contactmodel';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  //public cnct:Contact={} as Contact; phase 1

  constructor(private http: HttpClient) {}

  //listArray=[{"id":"1", "name":"Amelia Brown", "email":"amebrown@gmail.com", "number":"09123456789"}];

getData(){
  return this.http.get("http://localhost:3000/contactlist")
}

addData(contactData:Contact){
  return this.http.post("http://localhost:3000/contactlist", contactData)
}

deleteData(contactId:string){
  return this.http.delete("http://localhost:3000/contactlist/"+ contactId)

}



   //phase1
   //addData(contactData:Contact) {
    //return this.http.post("http://localhost:3000/contactlist", contactData);

   //}

  // getData() {
  //   return this.http.get("http://localhost:3000/contactlist");
  // }

  // delete(contactData:any){
  //   return this.http.delete("http://localhost:3000/contactlist/"+contactData.id)
  // }








  // editData(contactData:Contact) : Observable<Contact> {
  //   return this.http.<Contact>(this.serviceURL, contactData)
  // }

  // getData(){
  //   return this.http.get("http://localhost:3000/contactinfo").subscribe(res=>{
  //     console.log(res)
  //   }

  // addData(contactData:Contact) {
  //     return this.http.post("http://localhost:3000/contactinfo", contactData)

   }

  // createcontact(data:any){
  //  return this.http.post<any>("http://localhost:3000/contactinfo",data)
  //  .pipe(map((data:any)=>{
  //   console.log(data)
  //   return data;
  //  }))
  // }

  // getcontact(){
  //   return this.http.get("http://localhost:3000/contactinfo")
  // }

