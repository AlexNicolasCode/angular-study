import { LoginWithGoogle } from "@/domain/usecase";
import { RemoteLoginWithGoogle, SaveAccessTokenRepository } from "@/data";

export class RemoteLogin implements LoginWithGoogle {
    constructor (
        private readonly saveAccessTokenRepository: SaveAccessTokenRepository,
        private readonly remoteLoginWithGoogle: RemoteLoginWithGoogle
    ) {}

    async loginWithGoogle (): Promise<LoginWithGoogle.Result> {
        const { user, token } = await this.remoteLoginWithGoogle.loginWithGoogle()
        if (token) {
            this.saveAccessTokenRepository.saveAccessToken(token)
        }
        return user
    }
}