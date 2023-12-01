import { User } from "@/domain/model"

export interface RemoteLoadUser {
    loadUser: () => Promise<User>
}