quoteClass = document.querySelector('.Quote-content')
authorClass = document.querySelector('.author-name')

function getQuote(){
    return new Promise((resolve,reject) =>{
    fetch("https://api.quotable.io/random")
        .then(response => {
            return response.json()
        }).then(data => {
                const quote = data.content;
                const author = data.author;
                resolve([quote,author]);
            })
        .catch(error => {
            console.log("An error occurred while fetching the quote:", error);
        });
    })
}

getQuote().then( data =>{
    const quote = data[0]
    const author = data[1]
    quoteClass.innerText = quote
    authorClass.innerText = author
})


