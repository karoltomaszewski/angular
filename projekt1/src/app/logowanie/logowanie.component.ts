import { Component } from '@angular/core';
import { FormsModule} from "@angular/forms";

@Component({
  selector: 'app-logowanie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.scss'
})
export class LogowanieComponent {
  formData = {
    username: '',
    password: '',
  };

  logowanie() {
    if (this.formData.username === 'Karol' && this.formData.password === 'Tomaszewski') {
      alert('Zalogowano pomyślnie!');
    } else {
      alert('Błąd logowania. Sprawdź dane.');
    }
  }
}
