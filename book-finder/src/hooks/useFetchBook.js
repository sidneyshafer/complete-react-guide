import { useState } from "react";

function useFetchBook() {
    const [bookData, setBookData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    function isValidLength(query) {
        return query.length > 0;
    }

    async function fetchBookData(query) {
        if (!isValidLength(query)) {
            setError('Error: Search must be longer than 0 characters.');
            setBookData(null);
            return;
        }

        try {
            setIsLoading(true);
            setError(null);
            setBookData(null);

            const response = await fetch(`https://openlibrary.org/search.json?q=${query}&format=json`);
            if (!response.ok) {
                throw new Error('Book not found. Please check your search input.');
                // console.log(response);
            }

            const data = await response.json();
            // console.log(data);
            setBookData(data);

        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }

    return { bookData, error, isLoading, fetchBookData };
}

export default useFetchBook;