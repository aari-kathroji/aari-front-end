import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http:HttpClient) { }

  getAllPrograms(){
    return this.http.get('http://localhost:4500/program');
  }
  postProgram(programForm:any){
    return this.http.post('http://localhost:4500/program/addCourse', programForm);
  }
  getProgram(id:any){
    return this.http.get('http://localhost:4500/program/' + id);
  }
  getProgram_2(id:any){
    return this.http.get('http://localhost:4500/program/getSingleProgram/' + id);
  }
  deleteProgram(id:any){
    return this.http.delete('http://localhost:4500/program/' + id);
  }
  updateProgram(id: string, program: any) {
    return this.http.put(`http://localhost:4500/program/${id}`, program, {
      responseType: 'text'
    });
  }
}
