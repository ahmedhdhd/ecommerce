import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from "../login/login.component";
@Component({
  selector: 'app-components',
  standalone: true,
  imports: [ButtonModule, LoginComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent {

}
