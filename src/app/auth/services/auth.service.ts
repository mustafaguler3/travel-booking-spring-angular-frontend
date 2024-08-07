import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { JwtResponse } from 'src/app/shared/models/jwt-response';
import { User } from 'src/app/shared/models/user';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  private apiUrl = 'http://localhost:8080/api/auth';
  private fileUrl = "http://localhost:8080/api/auth/uploads"
  private profileUrl = 'http://localhost:8080/api/user'

  storedUser = localStorage.getItem("currentUser");
  parsedUser = this.storedUser ? JSON.parse(this.storedUser) : null

  currentUserSubject = new BehaviorSubject<any>(this.parsedUser)
  currentUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}


  login(user: User): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.apiUrl + "/login",user)
    .pipe(
      map(response => {
      if(response.token){
        localStorage.setItem("currentUser",JSON.stringify(response));
        this.currentUserSubject.next(response);
      }
    
      return response;  
    }))
    
  }

  register(user: User,profilePicture: File): Observable<any> {
    const formData = new FormData();
    formData.append('user', new Blob([JSON.stringify(user)], { type: 'application/json' }));
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }

    return this.http.post<any>(`${this.apiUrl}/register`, formData)
    .pipe(
      catchError(this.handleError.bind(this))
    );
  }

  resendVerificationEmail(email: string): Observable<any> {

    let params = new HttpParams().set("email", email);

    return this.http.post<any>(this.apiUrl+ "/resend-verification",null,{params:params})
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  profile(): Observable<User>{
    return this.http.get<any>(this.profileUrl + "/profile")
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


