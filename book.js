function addBook(){
    book=b1.value
    if(book in localStorage){
        alert('Book already exist!')
    }
    else{
        author=a1.value
        details=details.value
        user={book,author,details}
        localStorage.setItem(book,JSON.stringify(user))
        window.location='search.html'
    }
}
function cnt(){
    window.location='search.html'
}
function search(){
    books=b2.value
    if(books in localStorage){
        userObj=JSON.parse(localStorage.getItem(books))
        output.innerHTML=`<p>Book Name :${userObj.book }</p>`
        au.innerHTML=` Book Author:${userObj.author} `
        de.innerHTML=`Book Details:${userObj.details}`
   }
   else{
    al.innerHTML=`The Book doesnot Exist!`
   }
    
}