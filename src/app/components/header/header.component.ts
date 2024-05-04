import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {

    constructor() {
      console.log('1. Primero ');
    }
  
    ngOnInit(): void {
      console.log('2. segundo');
    }
  
    ngAfterViewInit(): void {
      console.log('3. tercero');
    }
  
    ngOnDestroy(): void {
      console.log('4. Finalmente esto (cuando el componente sea destruido)');
    }
}
