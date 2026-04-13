export class UserService {
    static getUserProfile = async (userId) => {
        return {
            username: "farahbelhajali",
            password: "farahbelhajali",
            email: "farah@gmail.com",
            adress: "Nabeul, Tunisia",
            tel: "+216 22 222 222",
            profilePic: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg",
            role: "User",
            emailToken: "",
            isVerified: ""
        }
    }

    static async getAdminProfile(userId) {
        return {
            username: "CosmoGlowy",
            password: "gerant123",
            email: "parfemeriebeaute@gmail.com",
            profilePic: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg",
            role: "Admin",
            emailToken: "",
            isVerified: ""
        }
    }
}