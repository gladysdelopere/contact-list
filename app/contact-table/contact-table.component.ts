import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../component/contactmodel'
import { MyserviceService } from '../service/myservice.service';
import { HomeComponent } from '../home/home.component';



@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent {


@Input() contactList:Contact[]=[]

  constructor(private contactservice:MyserviceService, private home:HomeComponent){

  }

deleteData(contactId:string){
  this.contactservice.deleteData(contactId).subscribe(result=>{
    console.log(result)
    this.home.fetchData()
  })
  console.log(contactId)
}



}

//phase1
  // public cnct:Contact={} as Contact;
  // mycontact:any;
  // constructor(private contactservice:MyserviceService){}

  // ngOnInit(): void {
  //   this.getmyData();

  // }

  // getmyData(): void{
  //   this.contactservice.getData().subscribe(res=>{
  //     this.mycontact = res;
  //     console.log(res);
  //     //this.getmyData();

  //   })
  // }
  //phase1
  // getmyData(): void{
  //   this.contactservice.getData().subscribe(res=>{
  //     this.mycontact = res;
  //     console.log(res);
  //     //this.getmyData();

  //   })
  // }
  // deleteData(contactData:any){
  //   if(confirm('Are you sure to delete?'))
  //   this.contactservice.delete(contactData).subscribe(() =>{
  //   this.getmyData();
  //   })
  // }
//}
