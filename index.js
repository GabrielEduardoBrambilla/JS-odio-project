function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = () => {
    return `${this.title}, ${this.author}, ${this.pages} pages. Already read? ${
      this.read ? 'yes' : 'no'
    }`
  }
}

const Lib = []

function addBookToLib(event) {
  event.preventDefault() // Prevents the default form submission behavior

  // Get form values
  const title = document.getElementById('title').value
  const author = document.getElementById('auth').value
  const pages = document.getElementById('pages').value

  // Process the data - for example, add it to your library
  const book = { title, author, pages }
  displayBook(book)
}

function displayBook(book) {
  const showItem = document.querySelector('.show-item')
  // Create an element to display book details
  const bookDetails = document.createElement('div')
  bookDetails.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`
  // Append the book details to the show-item div
  showItem.appendChild(bookDetails)
}
