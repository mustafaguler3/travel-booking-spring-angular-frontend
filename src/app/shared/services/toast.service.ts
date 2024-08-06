import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }

  showSuccess(summary:string,detail: string){
    this.messageService.add({severity: "success",summary,detail})
  }

  showError(summary:string,detail: string){
    this.messageService.add({severity: "error",summary,detail})
  }
}
