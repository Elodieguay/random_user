
export const randomApi = async () => {

    try {
        const response = await fetch(`https://randomuser.me/api/?results=100`) 
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log('Erreur de récupération des données', error);
        throw new Error( 'Erreur de récupération des données');
    } 

};

