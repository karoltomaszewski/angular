import { Component } from '@angular/core';
import { FormsModule} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logowanie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.scss'
})
export class LogowanieComponent {
  constructor(private authService: AuthService, private router: Router) {
  }

  formData = {
    username: '',
    password: '',
  };

  logowanie() {
    if (this.formData.username === 'Karol' && this.formData.password === 'Tomaszewski') {
      this.authService.login();
      this.router.navigate(['/dashboard']);
    } else {
      alert('Błąd logowania. Sprawdź dane.');
    }
  }
}
