let con1 = document.getElementsByClassName("con1")[0];
let showAll = document.getElementById("showAll");
let bookName = document.getElementById("bookName");
let authorName = document.getElementById("authorName");
let descip = document.getElementById("descrip");
let pho = document.getElementById("pho");
let submit = document.getElementById("submit")

// create book

let dataBook;

if(localStorage.book != null){
    dataBook = JSON.parse(localStorage.book);
}else{
    dataBook = [];
};

function create() {
    let newBook = {
        bookName: bookName.value,
        authorName: authorName.value,
        descip: descip.value,
        pho: pho.files,
    }
    dataBook.push(newBook);
    localStorage.setItem("book", JSON.stringify(dataBook));
    clearInputs();
    showData();
    
}

function clearInputs() {
    bookName.value = "";
    authorName.value = "";
    descip.value = "";
}



// read

function showData() {
    let content = "";
    
    for(let i = 0; i < dataBook.length; i++){
        content += `
        <div id="book">
            <div id="img"><img src="books.png" width="100%" height="100%"></div>
            <div id="info">
                <p>${dataBook[i].bookName}</p>
                <p>${dataBook[i].authorName}</p>
                <p>${dataBook[i].descip}</p>
            </div>
        </div>
        `; // ${dataBook[i].pho} in src
    }
    con1.innerHTML = content;

}
showData()




































// class Library{
//     static a = 0;
//     constructor(id){
//         this.id = id
//     }
// }

// class Books extends Library{
//     constructor(id, title, publishingDate, version, author){
//         super(id);
//         this.title = title;
//         this.publishingDate = publishingDate;
//         this.version = version;
//         this.author = author;
//     }
// }

// class Author extends Library{
//     constructor(id, name, phone, email){
//         super(id);
//         this.name = name;
//         this.phone = phone;
//         this.email = email;
//     }
// }

// let d = new Books(1, "block", "25 oct 2010", "v2", "hassan")
// let c = new Author(2 , "hassan", "05652", "hebbgb")
// console.log(Library)

