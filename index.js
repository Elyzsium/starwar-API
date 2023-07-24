    let starArr = []

    function fetchPeople(){

        try {
            fetch("https://swapi.dev/api/people")
            .then(data => data.json())
            .then(cast => {
        
                passItems(cast.results)
        
            })
            
        } catch (error) {

            console.log(error);
            alert('people are not found')
        }     
    } 
    
    function passItems(items){

        // console.log(items)

        let html = "";
       
        
       for(let index =0; index<items.length; index++){

        let people = items[index]


            let info = ` <table class='info' id='${people.name}'>
                         <tr>
                          <td>Name:<td>
                          <td>${people.name}<td>
                         </tr>  
                         <tr>
                         <td>Name:<td>
                         <td>${people.gender}<td>
                        </tr>  
                        <tr>
                        <td>height:<td>
                        <td>${people.height}<td>
                    </tr>

            </table>`
            
                       
            let images = `./asset/${people.name}.jpeg`;
          
            let content = `<div class="list">
            
                <div class="item">
                        <img class="imgs" src="${images}">
                    
                           <div class="content">
                            
                             <button class="btn" id='${index}' onClick="show(${index})"> More Details </button>
                             ${info}
                           
                           </div>
                         
                </div>  
                             
            </div>`;

            
            html += content;
         
            
        };
     
        let list = document.querySelector('.list');
        list.innerHTML = html;

        starArr = items

    }

fetchPeople();

function show(index){
    // console.log(starArr[index].name)

 let starInfo =  document.getElementById(`${starArr[index].name}`)
 let btn = document.getElementById(`${index}`) 
 
 starInfo.classList.toggle('show')

 window.addEventListener('click', function(event){
    
    if(!btn.contains(event.target)){
        starInfo.classList.remove('show')
    }
 })
    

}





