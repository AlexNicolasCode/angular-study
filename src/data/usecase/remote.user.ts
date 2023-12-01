import { User } from "@/domain/model";
import { LoadUser } from "@/domain/usecase";
import { RemoteLoadUser } from "@/data/protocol/remote.load.user";

export class RemoteUser implements LoadUser {
    constructor (
        private readonly remoteLoadUser: RemoteLoadUser
    ) {}

    async loadUser (): Promise<User | undefined> {
        return await this.remoteLoadUser.loadUser()
    }
}