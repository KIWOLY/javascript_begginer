const quotes= [
    "A good programmer is someone who always looks both ways before crossing a one-way street. – Doug Linder",
    "Programming isn't about what you know; it's about what you can figure out. – Chris Pine",
    "Weeks of programming can save you hours of planning. – Unknown",
    "Talk is cheap. Show me the code. – Linus Torvalds",
    "If debugging is the process of removing bugs, then programming must be the process of putting them in. – Edsger W. Dijkstra",
    "The best error message is the one that never shows up. – Thomas Fuchs",
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
    "There are two ways to write error-free programs; only the third one works. – Alan J. Perlis"
]


const useIndexes= new Set()
const quoteElement= document.getElementById("quote")

function generateQuote(){
    const random= Math.floor(Math.random()*quotes.length)
    const quote= quotes[random]
    quoteElement.innerHTML=quote
}