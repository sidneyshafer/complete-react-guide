// import React, { useState, useEffect, useCallback } from "react";
import useFetchBookDetails from "../hooks/useFetchBookDetails";

import styles from "./BookDetails.module.css";

function BookDetails({ book }) {

   const bookTitle = book.title;
   // const authors = book.author_name;
   // const firstPublish = book.first_publish_year;
   // const editionCount = book.edition_count;
   const editionKey = book.cover_edition_key;
   const coverId = book.cover_i;

   const { bookDetails, bookDetailsError } = useFetchBookDetails(editionKey);

   //Book Details 
   // const publishers = bookDetails?.publishers;
   // const pageCount = bookDetails?.number_of_pages;
   // const publishPlaces = bookDetails?.publish_places;
   const isbn10 = bookDetails?.isbn_10;
   const isbn13 = bookDetails?.isbn_13;

   let src;
   if (isbn10 || isbn13) {
      src = `https://covers.openlibrary.org/b/isbn/${isbn10 ? isbn10 : isbn13}-L.jpg`;
   } else {
      src = `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
   }

   return (
   <div className={styles.container}>
       <div className={styles.book}
      style={{ 
         backgroundImage: src ? `url(${src})` : "none",
      }}
      >
         <div className={styles.info}>
            <h4>{bookTitle}</h4>
            <p>View Details</p>
         </div>
      </div>
   </div>
   );
}

export default BookDetails;