export class ReclamationService {
    static getReclamations = async () => {
        return [
            {
                id: 'R-1',
                nom: "John",
                pren: "Doe",
                email: "johndoe@example.com",
                tel: "1234567890",
                address: "123 Main St, City, Country",
                sujet: "Inquiry",
                msg: "This is a sample message."
            },
            {
                id: 'R-2',
                nom: "Jane",
                pren: "Smith",
                email: "janesmith@example.com",
                tel: "0987654321",
                address: "456 Elm St, Town, Country",
                sujet: "Feedback",
                msg: "This is another sample message."
            }
        ];
    }

    static replaceReclamation = async (reclamation) => {
        // TODO: Implement this method
        return true;
    }

    static deleteReclamation = async (reclamation) => {
        // TODO: Implement this method
        return true;
    }
}