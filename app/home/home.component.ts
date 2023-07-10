import { Component, Injectable } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { Contact } from '../component/contactmodel';


@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
list:Contact[]

constructor(private contactservice:MyserviceService){

}
  ngOnInit(): void {
    this.fetchData()
  }
fetchData(){
  this.contactservice.getData().subscribe((result)=>{
    this.list=result as Contact[]
    })
}
}
