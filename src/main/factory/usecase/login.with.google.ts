import { RemoteLogin } from "@/data/usecase";
import { LoginWithGoogle } from "@/domain/usecase";
import { FirebaseAuthentication } from "@/infra/auth";
import { LocalStorageRepository } from "@/infra/db";

export const makeLoginWithGoogle = (): LoginWithGoogle => {
    const firebaseAuthentication = new FirebaseAuthentication()
    const localstorage = new LocalStorageRepository()
    return new RemoteLogin(localstorage, firebaseAuthentication)
}