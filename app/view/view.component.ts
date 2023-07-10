import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

@Input() id: string
  constructor(private router:Router, private route: ActivatedRoute){}

  // goBack(){
  //   this.router.navigate(['/home']);
  // }



  ngOnInit(): void {

  }


}
