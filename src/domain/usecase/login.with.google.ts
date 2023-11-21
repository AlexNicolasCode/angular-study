export interface LoginWithGoogle {
    loginWithGoogle: () => LoginWithGoogle.Result
}

export namespace LoginWithGoogle {
    export type Result = {
        name: string
        email: string
        photoUrl: string
        isEmailVerified: boolean
    }
}