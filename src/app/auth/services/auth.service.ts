import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { JwtResponse } from 'src/app/shared/models/jwt-response';
import { User } from 'src/app/shared/models/user';
import { jwtDecode } from "jwt-decode";
import { MyJwtPayload } from 'src/app/shared/models/my-jwt-payload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://localhost:8080/api/auth';
  private fileUrl = "http://localhost:8080/api/auth/uploads"

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem("currentUser");
    this.currentUserSubject = new BehaviorSubject<any>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  /*getCurrentUserValue(){
    return this.currentUserSubject.value;
  }*/

  getCurrentUserValue(){
    const currentUser = this.currentUserSubject.value;
    console.log('Current user in getCurrentUserValue:', currentUser);
    return {
      token: currentUser?.token,
      userId: currentUser?.userId,
      username: currentUser?.username,
      profilePictureUrl: currentUser?.profilePictureUrl
    }
  }

  login(user: any): Observable<JwtResponse> {
    console.log("User => "+JSON.stringify(user))
    return this.http.post<JwtResponse>(this.apiUrl + "/login",user)
    .pipe(
      map(response => {
      if(response.token && response){
        const decodedToken = jwtDecode<MyJwtPayload>(response.token)
        const userId = decodedToken.userId;
        const username = decodedToken.username;
        const profilePictureUrl = decodedToken.profilePictureUrl

        const currentUser = {
          token: response.token,
          userId: userId,
          username: username,
          profilePictureUrl:profilePictureUrl
        };

        // Store the current user in localStorage
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        this.currentUserSubject.next(currentUser)

        /*localStorage.setItem("currentUser",JSON.stringify({
          token: response.token,
          userId,
          username,
          profilePictureUrl
        }));

        this.currentUserSubject.next({
          token: response.token,
          userId,
          username,
          profilePictureUrl
        });*/

        console.log('Stored user:', localStorage.getItem('currentUser'));
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
    return this.http.get<any>(this.apiUrl + "/profile")
  }

  

  logout(){
    localStorage.removeItem("currentUser")
    this.currentUserSubject.next(null)
  }

  getProfilePicture(user: User,fileType: string){
    return `${this.fileUrl}/${fileType}/${user.profilePictureUrl}`
  }

}


