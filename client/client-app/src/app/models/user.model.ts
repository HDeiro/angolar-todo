export class User {

    id: number = null;
    name: string = null;
    email: string = null;
    password: string;
    createdAt: Date = null;
    googlePhotoUrl: string;
    googleUserId: string;
    facebookPhotoUrl: string;
    facebookUserId: string;
    
    getProfilePhoto() {
        return this.googlePhotoUrl || this.facebookPhotoUrl
    }
}
