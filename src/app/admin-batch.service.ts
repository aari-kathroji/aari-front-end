import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminBatchService {

  constructor(private http: HttpClient) { }

  getBatch(batch_id: string) {
    console.log(batch_id);
    return this.http.get('http://localhost:4500/user/studentsByBatch/' + batch_id);
  }
}
