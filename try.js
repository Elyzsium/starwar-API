async function fetchPeople()  {
    fetch ("https://swapi.dev/api/people").then(
        data = await data.json
        .then(people => {
            let html = ''
            people.result.forEach(cast => {
                `<div></div>`
                
            });
        })
    )
}