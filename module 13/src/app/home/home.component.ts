import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable, pipe } from 'rxjs';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private firstSub : Subscription;
  constructor() { }

  ngOnInit() {
  //   this.firstSub = interval(1000).subscribe((count) => {
  //     console.log(count);
  // });
  const customIntervalObservable = Observable.create(observer =>
    {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 2){
          observer.complete();
        }
        if(count > 3){
          observer.error(new Error('an error occured'));
        }
        count++;
      }, 1000);
    })

    

    this.firstSub = customIntervalObservable.pipe(
      map((data: number) => {
        return 'Round: ' + (data + 1);
      })
    ).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('completed');
      }
    );
}
  ngOnDestroy(): void {
      this.firstSub.unsubscribe();
  }

}
