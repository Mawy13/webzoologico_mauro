import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimalComponent } from './components/animal/animal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AnimalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webzoologico_mauro';

  
}
