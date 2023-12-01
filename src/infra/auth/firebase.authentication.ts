import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, Auth } from "firebase/auth";

import { RemoteLoginWithGoogle } from "@/data";
import { environment } from "@/main/config/environments";

export class FirebaseAuthentication implements RemoteLoginWithGoogle {
  private readonly auth: Auth;
  private readonly provider: GoogleAuthProvider;

  constructor () {
    const firebaseConfig = initializeApp({
      apiKey: environment.apiKey,
      authDomain: environment.authDomain,
      projectId: environment.projectId,
    })
    this.auth = getAuth(firebaseConfig);
    this.provider = new GoogleAuthProvider();
  }

  async loginWithGoogle (): Promise<RemoteLoginWithGoogle.Result> {
    const result = await signInWithPopup(this.auth, this.provider)
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = {
      name: result.user.displayName ?? undefined,
      email: result.user.email ?? undefined,
      photoUrl: result.user.photoURL ?? undefined,
      isEmailVerified: result.user.emailVerified,
    };
    return { user, token: credential?.accessToken }
  }
} 