import { useCallback } from "react";

const usePagination = (initialPage = 1, itemsPerPage = 10) => {

    const [currentPage, setCurrentPage] = useState(initialPage);

    const paginate = useCallback((pageNumber) => {
        setCurrentPage(pageNumber);
    }, []);

    const nextPage = useCallback(() => {
        setCurrentPage((prevPage) => prevPage + 1);
    }, []);

    const prevPage = useCallback(() => {
        setCurrentPage((prevPage) => prevPage - 1);
    }, []);

    return [
        currentPage,
        itemsPerPage,
        paginate,
        nextPage,
        prevPage
    ]
}

export default usePagination;