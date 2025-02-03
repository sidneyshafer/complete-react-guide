import { useState } from "react";
import BookDetails from "./BookDetails";

import styles from "./BookList.module.css";

function BookList({ bookData, error }) {
    const [showResults, setShowResults] = useState(true);

    function handleClearResults() {
        setShowResults(false);
    }
    
    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!bookData) return null;

    return (
        <div>
            <div className={styles.resultsHeader} >
                <h2>Search Results</h2>
                <div>
                    <button 
                    onClick={handleClearResults} 
                    className={`${styles.btn} ${styles.clearBtn}`}
                    >Clear
                    </button>
                    
                </div>
            </div>

            <div className={styles.results} >
                {showResults ?
                bookData.docs.map((book, idx) => (
                    <BookDetails key={idx} book={book} />
                )) : <div></div>
                }
            </div>
        </div>
        
    );
}

export default BookList;