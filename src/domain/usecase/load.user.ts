import { User } from "@/domain/model";

export interface LoadUser {
    loadUser: () => Promise<User>
}