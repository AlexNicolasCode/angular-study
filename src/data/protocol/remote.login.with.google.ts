import { LoginWithGoogle } from "@/domain/usecase"

export interface RemoteLoginWithGoogle {
    loginWithGoogle: () => Promise<RemoteLoginWithGoogle.Result>
}

export namespace RemoteLoginWithGoogle {
    export type Result = {
        user?: LoginWithGoogle.Result
        token?: string
    }
}