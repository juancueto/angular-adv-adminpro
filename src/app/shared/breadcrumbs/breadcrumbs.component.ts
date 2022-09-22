import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {
  title: string = '';
  public tituloSubs$: Subscription;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    console.log(this.route.snapshot.data); // subscribe((data) => console.log(data));
    // console.log(this.route.snapshot.children[0].data);
    // console.log(this.route.snapshot.data['title']);
    this.tituloSubs$ = this.getArgumentoRuta()
      .subscribe( ({titulo}) => {
        this.title = titulo;
        document.title = `AdminPro - ${titulo}`;
      });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }
  
  getArgumentoRuta(){
    return this.router.events
      .pipe(
        filter( (event: any )=> event instanceof ActivationEnd),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
        map( (event: ActivationEnd) => event.snapshot.data),
      );
  }
}
