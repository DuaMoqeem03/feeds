import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import {FirebaseListObservable} from "angularfire2/database-deprecated/firebase_list_observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
posts: FirebaseListObservable<any>

  constructor(public navCtrl: NavController,public af: AngularFireDatabase) {
  this.posts = af.list('/posts').valueChanges();;
}

}
