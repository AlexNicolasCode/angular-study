import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "@/presentation/component";

@Component({
    selector: 'root',
    standalone: true,
    templateUrl: './base.html',
    imports: [CommonModule, RouterOutlet, HeaderComponent]
})

export class AppComponent {
  title = 'Welcome to my Angular Study home page!';
}
