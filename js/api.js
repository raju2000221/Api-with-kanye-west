const loadquote = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => showquotes(data))

}
const showquotes = quote =>{
    const quoteText = document.getElementById('quote');
    console.log(quote);
    quoteText.innerText = quote.quote;
}
loadquote();