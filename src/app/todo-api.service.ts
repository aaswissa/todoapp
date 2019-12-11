import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { ITodoItem } from './itodo-item'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  itemsCollection: AngularFirestoreCollection<ITodoItem>;
  items: Observable<ITodoItem[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection= this.afs.collection("")

   }
}
