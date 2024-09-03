import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  saveFormData(data: any): Promise<void> {
    const id = this.firestore.createId(); // Genera un ID único
    data.f_creado = new Date ();
    return this.firestore.collection('encuesta-compromiso-empleados').doc(id).set(data);
  }

  getFormData(): Observable<any[]> {
    return this.firestore.collection('encuesta-compromiso-empleados').valueChanges();
  }
}