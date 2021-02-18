/*
    contar o numero de categorias e o numero de livros em cada categoria
    contar numero de autores
    mostrar livros de autores
    mostrat livros do autor augusto cury
    transformar a função acima em uma função que ira receber o nome do autor e devolver livros
*/

const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: "os segredos da mente milionaria",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T"
            }
        ],
    },
    {
        category: 'Inteligencia emocional',
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como Enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 habitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }
        ],
    }
]

const totalCategories = booksByCategory.length

for(let category of booksByCategory){
    console.log('total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = [];
    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }
    console.log("total de autores: ", authors.length)
}
countAuthors();

function booksOfAugusto(){
    let books = [];
    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === 'Augusto Cury'){
                books.push(book.title)
            }
        }
    }
    console.log("os livros do augusto cury são: ", books)
}

booksOfAugusto();

function booksOfAuthor(author){
    let books = [];
    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }
    console.log(`livros do autor ${author}: ${books.join(", ")}`)
}
booksOfAuthor('Robert T');