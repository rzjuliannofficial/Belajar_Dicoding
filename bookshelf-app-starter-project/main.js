document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'BOOKSHELF_APPS';
  let books = [];
  let isEditing = false;
  let editingBookId = null;

  // DOM Elements
  const bookForm = document.getElementById('bookForm');
  const bookFormTitle = document.getElementById('bookFormTitle');
  const bookFormAuthor = document.getElementById('bookFormAuthor');
  const bookFormYear = document.getElementById('bookFormYear');
  const bookFormIsComplete = document.getElementById('bookFormIsComplete');
  const bookFormSubmit = document.getElementById('bookFormSubmit');
  const formHeader = document.getElementById('formHeader');

  const searchBookForm = document.getElementById('searchBook');
  const searchBookTitle = document.getElementById('searchBookTitle');

  const incompleteBookList = document.getElementById('incompleteBookList');
  const completeBookList = document.getElementById('completeBookList');

  // Load books from localStorage
  function loadBooks() {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    if (serializedData) {
      books = JSON.parse(serializedData);
    }
    renderBooks();
  }

  // Save books to localStorage
  function saveBooks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    renderBooks();
  }

  // Generate unique ID
  function generateId() {
    return +new Date();
  }

  // Create Book Object
  function createBookObject(id, title, author, year, isComplete) {
    return { id, title, author, year: parseInt(year), isComplete };
  }

  // Add Book
  function addBook(event) {
    event.preventDefault();

    const title = bookFormTitle.value;
    const author = bookFormAuthor.value;
    const year = bookFormYear.value;
    const isComplete = bookFormIsComplete.checked;

    if (isEditing) {
      const bookIndex = books.findIndex((book) => book.id === editingBookId);
      if (bookIndex !== -1) {
        books[bookIndex] = createBookObject(editingBookId, title, author, year, isComplete);
      }
      isEditing = false;
      editingBookId = null;
      bookFormSubmit.innerHTML = `Masukkan Buku ke rak <span>Belum selesai dibaca</span>`;
      formHeader.innerText = 'Tambah Buku Baru';
    } else {
      const newBook = createBookObject(generateId(), title, author, year, isComplete);
      books.push(newBook);
    }

    bookForm.reset();
    updateSubmitButtonText();
    saveBooks();
  }

  // Toggle Book Status
  function toggleBookStatus(bookId) {
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if (bookIndex !== -1) {
      books[bookIndex].isComplete = !books[bookIndex].isComplete;
      saveBooks();
    }
  }

  // Delete Book
  function deleteBook(bookId) {
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if (bookIndex !== -1) {
      books.splice(bookIndex, 1);
      saveBooks();
    }
  }

  // Edit Book (Fill Form)
  function editBook(bookId) {
    const book = books.find((b) => b.id === bookId);
    if (book) {
      bookFormTitle.value = book.title;
      bookFormAuthor.value = book.author;
      bookFormYear.value = book.year;
      bookFormIsComplete.checked = book.isComplete;

      isEditing = true;
      editingBookId = bookId;
      bookFormSubmit.innerHTML = `Simpan Perubahan`;
      formHeader.innerText = 'Edit Buku';
      
      // Scroll to form
      bookForm.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Search Book
  function searchBook(event) {
    event.preventDefault();
    const query = searchBookTitle.value.toLowerCase();
    renderBooks(query);
  }

  // Update Submit Button Text based on checkbox
  function updateSubmitButtonText() {
    if (isEditing) return;
    const span = bookFormSubmit.querySelector('span');
    span.innerText = bookFormIsComplete.checked ? 'Selesai dibaca' : 'Belum selesai dibaca';
  }

  // Render Books to UI
  function renderBooks(filterQuery = '') {
    incompleteBookList.innerHTML = '';
    completeBookList.innerHTML = '';

    const filteredBooks = books.filter((book) => 
      book.title.toLowerCase().includes(filterQuery)
    );

    filteredBooks.forEach((book) => {
      const bookElement = createBookElement(book);
      if (book.isComplete) {
        completeBookList.appendChild(bookElement);
      } else {
        incompleteBookList.appendChild(bookElement);
      }
    });

    // Handle Empty States
    if (incompleteBookList.innerHTML === '') {
      incompleteBookList.innerHTML = '<div class="empty-state">Tidak ada buku di rak ini</div>';
    }
    if (completeBookList.innerHTML === '') {
      completeBookList.innerHTML = '<div class="empty-state">Tidak ada buku di rak ini</div>';
    }
  }

  // Create Book DOM Element
  function createBookElement(book) {
    const container = document.createElement('div');
    container.classList.add('book-item');
    container.setAttribute('data-bookid', book.id);
    container.setAttribute('data-testid', 'bookItem');

    const title = document.createElement('h3');
    title.setAttribute('data-testid', 'bookItemTitle');
    title.innerText = book.title;

    const author = document.createElement('p');
    author.setAttribute('data-testid', 'bookItemAuthor');
    author.innerText = `Penulis: ${book.author}`;

    const year = document.createElement('p');
    year.setAttribute('data-testid', 'bookItemYear');
    year.innerText = `Tahun: ${book.year}`;

    const actionContainer = document.createElement('div');
    actionContainer.classList.add('book-item-actions');

    const toggleBtn = document.createElement('button');
    toggleBtn.setAttribute('data-testid', 'bookItemIsCompleteButton');
    toggleBtn.classList.add('btn-complete');
    toggleBtn.innerText = book.isComplete ? 'Belum selesai dibaca' : 'Selesai dibaca';
    toggleBtn.addEventListener('click', () => toggleBookStatus(book.id));

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-testid', 'bookItemDeleteButton');
    deleteBtn.classList.add('btn-delete');
    deleteBtn.innerText = 'Hapus Buku';
    deleteBtn.addEventListener('click', () => deleteBook(book.id));

    const editBtn = document.createElement('button');
    editBtn.setAttribute('data-testid', 'bookItemEditButton');
    editBtn.classList.add('btn-edit');
    editBtn.innerText = 'Edit Buku';
    editBtn.addEventListener('click', () => editBook(book.id));

    actionContainer.append(toggleBtn, deleteBtn, editBtn);
    container.append(title, author, year, actionContainer);

    return container;
  }

  // Event Listeners
  bookForm.addEventListener('submit', addBook);
  searchBookForm.addEventListener('submit', searchBook);
  bookFormIsComplete.addEventListener('change', updateSubmitButtonText);

  // Initial Load
  loadBooks();
});
