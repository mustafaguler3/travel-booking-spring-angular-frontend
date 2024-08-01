import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { JwtResponse } from 'src/app/shared/models/jwt-response';
import { User } from 'src/app/shared/models/user';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';
  private fileUrl = "http://localhost:8080/api/auth/uploads"

  storedUser = localStorage.getItem("currentUser");
  parsedUser = this.storedUser ? JSON.parse(this.storedUser) : null

  currentUserSubject = new BehaviorSubject<any>(this.parsedUser)
  currentUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}


  login(user: User): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.apiUrl + "/login",user)
    .pipe(map(response => {
      if(response.token){
        localStorage.setItem("currentUser",JSON.stringify(response));
        this.currentUserSubject.next(response);
      }
      
      return response;
      
    }))
    
  }

  getCurrentUserValue(){
    return this.currentUserSubject.value;
  }

  logout(){
    localStorage.removeItem("currentUser")
    this.currentUserSubject.next(null)
  }

  getProfilePicture(user: User,fileType: string){
    return `${this.fileUrl}/${fileType}/${user.profilePictureUrl}`
  }

}


