let library = []
let title = document.getElementById('title')
let author=document.getElementById('author')
let pages = document.getElementById('pages')
let p = document.querySelectorAll('p')



function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
}

function addToLibrary(){
    let book = new Book(title = document.getElementById('title').value, author=document.getElementById('author').value, pages = document.getElementById('pages').value)
        library.push(book)
        console.log(library)
        libraryList()
        document.getElementById("myForm").style.display = "none";
        document.getElementById('bookList').style.display = 'block'
}

function libraryList(){
    let div = document.createElement('div')
    div.setAttribute('class', 'libCard')
    let bookList = document.querySelector('#bookList')
    let titleP =document.createElement('p')
    let authorP =document.createElement('p')
    let pagesP = document.createElement('p')
    let btn =document.createElement('button')
    btn.innerHTML = 'remove'
  
    library.map(function(book){
        titleP.textContent = `title: ${book.title}`
        authorP.textContent= `author: ${book.author}`
        pagesP.textContent= `pages: ${book.pages}`
        bookList.appendChild(div)
        div.appendChild(titleP)
        div.appendChild(authorP)
        div.appendChild(pagesP)
        div.appendChild(btn)

        btn.addEventListener('click', ()=>{
            div.remove()
            library.pop()
        })
    })
    
}

let closeBtn = document.getElementById('close')
closeBtn.addEventListener('click', ()=>{
    document.getElementById("myForm").style.display = "none";
})
let openBtn = document.getElementById('open')
openBtn.addEventListener('click', ()=>{
    document.getElementById('myForm').style.display = "block";
    document.getElementById('bookList').style.display ='none'
})
