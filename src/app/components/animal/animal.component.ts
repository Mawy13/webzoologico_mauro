import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-animal',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {

  animalList: any = [];
  animalForm: FormGroup | any;
  constructor(private animalService: AnimalService, private toastr: ToastrService, private formbuilder: FormBuilder, private router: Router) { }

  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data;
    });
  }
  ngOnInit() {
    this.animalForm = this.formbuilder.group({
      nombre: '', edad: 0, tipo: ''
    });
    this.getAllAnimals();
  }

  newMessage(messageText: string) {
    this.toastr.success('Clic aquí para actualizar la lista', messageText)
      .onTap
      .pipe(take(1))
      .subscribe(() => window.location.reload());
  }

  newAnimalEntry() {
    this.animalService.newAnimal(this.animalForm.value).subscribe(
      () => {
        //Redirigiendo a la ruta actual /inicio y recargando la ventana
        this.router.navigate(['/inicio'])
        .then(() => {
          this.newMessage('Registro exitoso');
        })
      }
    );
  }

}
