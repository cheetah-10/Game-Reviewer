export class UI {
    constructor() {}
        displayGames(gameData){
            let Box = ``;
            for (let i = 0; i < gameData.length; i++) {
                Box += `
            <div class="col">
            <div data-id="${gameData[i].id}"  class="card h-100 bg-transparent" role="button" ">
              <div  class="card-body">
              
               <figure class="position-relative">
                  <img class="card-img-top object-fit-cover h-100" src="${gameData[i].thumbnail}" />
               
               </figure>
   
               <figcaption>
   
                  <div class="hstack justify-content-between">
                     <h3 class="h6 small">${gameData[i].title}</h3>
                     <span class="badge text-bg-primary p-2">Free</span>
                  </div>
   
                  <p class="card-text style="color: #fff;" small text-center opacity-50">
                     ${gameData[i].short_description.split(" ", 8)}
                  </p>
   
               </figcaption>
            </div>
   
            <footer class="card-footer small hstack justify-content-between">
   
               <span class="badge badge-color">${gameData[i].genre}</span>
               <span class="badge badge-color">${gameData[i].platform}</span>
   
            </footer>
            </div>
            </div>`;

            }
            document.getElementById("gameData").innerHTML = Box;

        
    }




    displayDetails(id) {
        const content = `
        <div class="col-md-4">
        <img src="${id.thumbnail}" class="w-100" alt="image details" />
     </div>
     <div class="col-md-8">
        <h3>Title: ${id.title}</h3>
        <p>Category: <span class="badge text-bg-info"> ${id.genre}</span> </p>
        <p>Platform: <span class="badge text-bg-info"> ${id.platform}</span> </p>
        <p>Status: <span class="badge text-bg-info"> ${id.status}</span> </p>
        <p class="small">${id.description}</p>
        <a class="btn btn-outline-warning" target="_blank" href="${id.game_url}">Show Game</a>
     </div>
        
        `;
  
        document.getElementById("detailsContent").innerHTML = content;
     }
  }
  


