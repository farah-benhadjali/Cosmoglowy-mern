export class ClientService{
    static getClients = async () => {
        return [
            {
                id: 1,
                userName: "farahbelhajali",
            password: "farahbelhajali",
            email: "farah@gmail.com",
            adress: "Nabeul, Tunisia",
            tel: "+216 22 222 222",
            img: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg",
            role: "Client",
            emailToken: "token123",
            isVerified: "false"
            }
            
        ];
    }

    static deleteClient = async (clientId) => {
        // TODO: Implement deleteClient
        return true;
    }

}