import { SaveAccessTokenRepository } from "@/data";

export class LocalStorageRepository implements SaveAccessTokenRepository {
    saveAccessToken (token: string): void {
        localStorage.setItem('access-token', token)
    }
}