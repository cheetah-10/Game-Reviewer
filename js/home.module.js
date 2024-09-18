import { Details } from "./details.module.js";
import { UI } from "./ui.module.js";

export class Home{
    loading = document.querySelector('.loading');
    constructor(){
        document.querySelectorAll('.menu a').forEach((link) =>{
            link.addEventListener('click', ()=>{
                this.changeColorLink(link);
                const category = link.dataset.category;
                this.getGames(category);
               
            })

            this.getGames('mmorpg')
        })
        this.ui = new UI();
        

    }


    changeColorLink(link){
        document.querySelector('.menu .active').classList.remove('active');
        link.classList.add('active');
    }


    async getGames(cat) {
        this.loading.classList.remove('d-none')
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
        };
        
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options);
        const response = await api.json();
        this.ui.displayGames(response);
     
        this.loading.classList.add('d-none')

        document.querySelectorAll(".card").forEach((card) => {
            card.addEventListener("click", () => {
               const id = card.dataset.id;
               const details = new Details(id);
               document.querySelector(".games").classList.add("d-none");
               document.querySelector(".details").classList.remove("d-none");
            });
         });

    }



}


  