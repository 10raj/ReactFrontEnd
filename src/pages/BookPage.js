import {React,useState} from 'react';
import '../App.css';
import {  getBookDetails } from '../service/UserService';

function BookPage(props) {
  
  const[bookName,setBookName] = useState ({
    bookName:props.bookName,
  });

  const[bookDetails, setBookDetails] = useState({
    
      id: '',
      category: '',
      price: '',
      isbn: '',
      authorNames: '',
      publisher: {
          id: '',
          name: '',
          address: ''
      },
      readerId: '',
      isuueDate: '',
      returnDate: '',
      title: '',
      edition: ''
  
});

  const handleBookDetails = (e) => {
    e.preventDefault();
    getBookDetails().then((res)=>{
      console.log("Book Details from handleBookDetails",res);
      let updatedValue = {};
        updatedValue = {
        id: res.id,
        category: res.category,
        price: res.price,
        isbn: res.isbn,
        authorNames: res.authorNames,
        publisher: {
            id: res.publisher.id,
            name: res.publisher.name,
            address: res.publisher.address
        },
        readerId: res.readerId,
        isuueDate: res.isuueDate,
        returnDate: res.returnDate,
        title: res.title,
        edition: res.edition
  };
  setBookDetails(bookDetails => ({
    ...bookDetails,
    ...updatedValue
  }));

  console.info(bookDetails)
    }).catch((error)=>{
      console.log(error);
      console.log("Registration Failed");
    })
  };


  return (
    <div className="book-page text-white" >
      <h1 className="title">{bookDetails.title}</h1>
      <h2 className="author">{bookDetails.authorNames}</h2>
      <p className="price">{bookDetails.price}</p>
      <div className="description-box">
        <h3 className="description-title">Book Description</h3>
        <p className="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id aliquam mi. Ut at congue lacus. Sed malesuada felis sit amet felis dapibus, nec sagittis urna varius. Aenean porttitor, tortor non pulvinar placerat, justo ipsum pretium enim, ac vulputate mauris mauris vitae libero. Donec eget est at mauris eleifend faucibus. Mauris bibendum sapien nec felis ultrices, ut commodo eros laoreet. Duis in est eros.</p>
      </div>
      {/* <button className="btn btn-primary" type="submit" onClick={handleBookDetails}>Get</button> */}
    </div>
  );
}

export default BookPage;
