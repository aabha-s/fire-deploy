// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-projects',
//   templateUrl: './projects.component.html',
//   styleUrls: ['./projects.component.scss']
// })
// export class ProjectsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
// import { ContentfulService } from './../../shared/services/contentful.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import "core-js/stable";
import "regenerator-runtime/runtime"; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],

})
export class ProjectsComponent {

  // projects$: Observable<any>;

  // constructor(private contentfulApiService: ContentfulService) { }

  // ngOnInit() { 
  //   this.projects$ = this.contentfulApiService.getDetails('projects');
  // }

}