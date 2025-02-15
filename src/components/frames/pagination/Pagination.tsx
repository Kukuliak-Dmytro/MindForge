import './Pagination.css'
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    }
export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {

    return (
        <div className="paginationWrapper">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <span>{currentPage}/{totalPages}</span>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </div>
    )
}