import { User } from "@/domain/model";

export interface LoadUser {
    LoadUser: () => Promise<User>
}