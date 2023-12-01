import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { makeLoginWithGoogle } from '@/main/factory/usecase';

const loginWithGoogle = makeLoginWithGoogle()

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
})

export class LoginPage {
  async loginWithGoogle() {
    await loginWithGoogle.loginWithGoogle()
  }
}
