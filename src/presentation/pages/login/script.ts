import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { makeLoginWithGoogle } from '@/main/factory/usecase';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
})

export class LoginPage {
    loginWithGoogle() { return makeLoginWithGoogle() }
}
