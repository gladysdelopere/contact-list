import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
//phase1
//import {Contact} from '../contactmodel'
import { MyserviceService } from 'src/app/service/myservice.service';
// import { Router } from '@angular/router';
// import { NgForm } from '@angular/forms';
import { ContactTableComponent } from 'src/app/contact-table/contact-table.component';
import { Contact } from '../contactmodel';
import { HomeComponent } from 'src/app/home/home.component';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
//export class AddComponent implements OnInit { //phase 1
export class AddComponent  {

  constructor(private contactservice:MyserviceService, private homepage:HomeComponent){

  }
 // @ViewChild('contactform')contactform:NgForm;


  display:boolean = false;
  DisplayForm(){
    this.display = !this.display;
    //this.contactform.resetForm()
  }


  @ViewChild(ContactTableComponent) viewData !: ContactTableComponent //phase2
  title = 'parent Component';
  // inputname='';
  // inputemail='';
  // inputnumber='';
  inputobj: any;

  addData(name:any, email:any, number:any){
    // this.inputname=name;
    // this.inputemail=email;
    // this.inputnumber=number;
    console.log(name+" "+ email +" "+ number)
    this.inputobj={name,email,number}
    this.contactservice.addData(this.inputobj).subscribe(result=>{
      console.log(result)
      this.homepage.fetchData()
    })

  }







}


//phase1
  // @ViewChild('contactform')contactform: NgForm;


  // display:boolean = false;
  // DisplayForm(){
  //   this.display = !this.display;
  //   this.contactform.resetForm()
  // }

//   public cnct:Contact={} as Contact;



//   constructor(private contactservice:MyserviceService){ }
//   ngOnInit(): void {

//   }
//   onSubmit(form: NgForm){
//     this.contactservice.addData(form.value).subscribe(res=>{
//       console.log(res)
//       alert("Contact successfully added")
//     })
//     this.contactform.resetForm()
//     //console.log(form)


//   }



// }













  //ngOnInit(): void {

//}
    //add(){
      //this.contactservice.createcontact(this.cnct).subscribe((data:contact)=>{
       //console.log(data)
       // alert("Contact added successfully")
//         this.router.navigate(['/view'])
//     },
//     err=>{
//       alert("Something went wrong")
//       this.router.navigate(['/'])
//     })
//   }

