import { render, API } from "./utils.js";

  const Add = () => {
  const container = document.querySelector("#container");
  
  render ( container, `<div>
  <h3> Aggiungi un nuovo dato </h3>
    <form id="create">
    
    <div class="row">

      <label for="title"> Titolo: </label>
      <input type="text" id="title" name="title" />
    

    
      <label for="completed"> Checked:</label>
      <input type="checkbox" id="completed name="completed" />
    

    
      <label for="expired"> Expiry date:</label>
      <input type="date" min="2021-11-15" value="2021-11-15" id="expired" name="expired" />
    </div>

    
    <button>Salva scheda</button>
  </form>
</div>`
);

 const form = document.querySelector("#create");
 form.addEventListener('submit', (event) => {
   event.preventDefault();

   const todos = {
     title: event.target.title.value,
     completed: event.target.completed.checked,
     expired: event.target.expired.value,
   };

 console.log(todos);
 


   fetch(API, {
     method: 'POST',
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(todos),
   });
 });
 
 };

 export { Add};
