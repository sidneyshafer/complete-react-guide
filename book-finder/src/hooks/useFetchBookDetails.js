import { useState, useEffect } from "react";

function useFetchBookDetails(editionKey) {
    const [bookDetails, setBookDetails] = useState(null);
    const [bookDetailsError, setBookDetailsError] = useState(null);

    useEffect(() => {
        if (!editionKey) return;

        async function fetchDetails() {
            try {
                const response = await fetch(`https://openlibrary.org/books/${editionKey}.json`);
                if (!response.ok) {
                    throw new Error("Failed to fetch book details.");
                }
                const data = await response.json();
                setBookDetails(data);
            } catch (error) {
                setBookDetailsError(error.message);
            }
        }

        fetchDetails();
    }, [editionKey]);

    return { bookDetails, bookDetailsError };
}

export default useFetchBookDetails;