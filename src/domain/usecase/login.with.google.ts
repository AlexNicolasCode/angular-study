import { User } from "@/domain/model";

export interface LoginWithGoogle {
    loginWithGoogle: () => Promise<User | undefined>
}