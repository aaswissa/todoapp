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
    this.itemsCollection= this.afs.collection('todo')
    console.log('service: this.itemCollection', this.itemsCollection);
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(
        actions=>{
          console.log('actionCounter');
          console.log('Service(pipe)', actions);

          return actions.map( item => {
            console.log('Service(pipe): actions.item', item)
            const data = item.payload.doc.data() as ITodoItem;
            const id = item.payload.doc.id;
            console.log('service(pipe): action.item.payload.doc.data', data)
            console.log('service(pipe): action.item.payload.doc.id', id)

            return {id, ...data}
          })
        }
      )
    )
   }

   addItem(item: ITodoItem){
     this.itemsCollection.add(item);
   }

}
