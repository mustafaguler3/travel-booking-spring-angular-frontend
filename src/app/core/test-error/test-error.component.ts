import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent {

  apiUrl = environment.apiUrl
  validationErrors: string[] = [];

  constructor(private http: HttpClient){}

  get404Error(){
    this.http.get(this.apiUrl+"/hotels").subscribe({
      next: response => console.log(response),
      error: err => console.log(err)
    })
  }

  get500Error(){
    this.http.get(this.apiUrl+"/buggy/serverError").subscribe({
      next: response => console.log(response),
      error: err => console.log(err)
    })
  }

  get400Error(){
    this.http.get(this.apiUrl+"/buggy/badrequest").subscribe({
      next: response => console.log(response),
      error: err => console.log(err)
    })
  }

  get400ValidationError(){
    this.http.get(this.apiUrl+"/hotels/60").subscribe({
      next: response => console.log(response),
      error: err => {
        console.log(err)
        this.validationErrors = err.errors;
      }
    })
  }
}
