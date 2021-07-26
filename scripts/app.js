let submitBtn = document.getElementById('submit')

let library = []

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = true

}

function addToLibrary(){
    let book = new Book(title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        pages = document.getElementById('pages').value)
    library.push(book)
}

