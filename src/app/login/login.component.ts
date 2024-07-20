import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import {StyleClassModule} from 'primeng/styleclass';
import { FloatLabelModule } from "primeng/floatlabel"  

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,StyleClassModule,ButtonModule,CheckboxModule,FloatLabelModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  value: string | undefined;

}
