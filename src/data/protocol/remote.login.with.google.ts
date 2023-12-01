import { User } from "@/domain/model"

export interface RemoteLoginWithGoogle {
    loginWithGoogle: () => Promise<RemoteLoginWithGoogle.Result>
}

export namespace RemoteLoginWithGoogle {
    export type Result = {
        user?: User
        token?: string
    }
}