const phrases = [
    {
        content: "We cannot solve problems with the kind of thinking we employed when we came up with them.",
        author: "Albert Einstein"
    },
    {
        content: "When you change your thoughts, remember to also change your world.",
        author: "Norman Vincent Peale"
    },
    {
        content: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        content: "Time is an illusion, lunchtime doubly so.",
        author: "Ford Prefect"
    }
]

const getRandomPhrase = (oldPhrase = null) => {
    let newPhrase = phrases[Math.floor(Math.random() * phrases.length)]
    if (oldPhrase !== null) {
        while (oldPhrase === newPhrase) {
            newPhrase = phrases[Math.floor(Math.random() * phrases.length)]
        }
    }
    return newPhrase
}

export {
    getRandomPhrase
}