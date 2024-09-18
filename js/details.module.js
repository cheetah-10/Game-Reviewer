import { UI } from "./ui.module.js";

export class Details {
    constructor(id) {
    this.ui = new UI;

    document.getElementById("btnClose").addEventListener("click", () => {
        document.querySelector(".games").classList.remove("d-none");
        document.querySelector(".details").classList.add("d-none");
     });
    this.getDetailsApi(id);
    }

    async getDetailsApi(idGames) {
        const loading = document.querySelector(".loading");
      
     
            loading.classList.remove("d-none");
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                },
            };
            const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options);
            const response = await api.json();
            console.log(response);
            this.ui.displayDetails(response);
            loading.classList.add("d-none");
  

       
            loading.classList.add("d-none");
            window.alert(error);
    
    }
}


