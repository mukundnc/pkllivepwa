import { Component, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { SwipeCardsModule } from 'ng2-swipe-cards';
// import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myData: Array<any>;
  card: any = {};
  orientation: string = "x";
  overlay: any = {
      like: {
          backgroundColor: '#28e93b'
      },
      dislike: {
          backgroundColor: '#e92828'
      }
  };

  constructor(private http:Http) {
    
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      // .map(response => response.json())
      .subscribe(res => {
        this.myData = res.json();
        console.log(this.myData)
        this.card = {
          likeEvent: new EventEmitter(),
          destroyEvent: new EventEmitter(),
          url: this.myData[1].url
        }
      });

  }

  like(like) {
        console.log(1);
    }

    onCardLike(event) {
        console.log(1)
    }

    onRelease(event) {
        console.log(1)
        this.card.url = this.myData[2].url;
    }

    onAbort(event) {
        console.log(1)
    }

    onSwipe(event) {
        console.log(1)
    }
}