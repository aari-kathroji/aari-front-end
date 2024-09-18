import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, pipe, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BatchService {

  private apiUrl = 'http://localhost:4500';

  constructor(private http: HttpClient) {}

  getAllBatch(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/batch`);
  }

  getBatch(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/batch/${id}`).pipe(
          catchError(error=>{
            console.error('Error  Fetching batch id :', error);
            return throwError(error);
          })
        );
    }

  saveBatch(newBatchData : any) : Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/batch`, newBatchData).pipe(
      catchError(error=>{
        console.error('Error while posting batch :', error);
        return throwError(error);
      })
    )
  }

  deleteBatch(id : string) : Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/batch/${id}`).pipe(
      catchError(error=>{
        console.error('Error while posting batch :', error);
        return throwError(error);
      })
    )
  }

  updateBatch(updatedBatchData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/batch`, updatedBatchData).pipe(
      catchError(error => {
        console.error('Error updating batch:', error);
        return throwError(error);
      })
    );
  }



  
}
