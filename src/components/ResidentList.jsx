import { useEffect, useState } from "react"
import { paginationLogic } from "../utils/pagination"
import ResidentCard from "./ResidentCard"

const ResidentList = ({ residents }) => {
    useEffect(() => {
        setCurrentPage(1)
    }, [residents])
    const [currentPage, setCurrentPage] = useState(1)
    
    const {pages, residentsInCurrentPage} =paginationLogic(currentPage, residents)

    const handleNewPage = (newPage) => {
        setCurrentPage(newPage)
    }
    return (
        <section className="max-w-[1000px] mx-auto">
            <section className="grid gap-8 grid-cols-[repeat(auto-fill,_250px)] 
                justify-center">
                {
                    residentsInCurrentPage.map((resident) =>
                        <ResidentCard key={resident} residentURL={resident} />
                    )
                }
            </section>
            <ul className="flex justify-center p-4 gap-6 flex-wrap">
                {
                    pages.map((page) => (
                        <li key={page}>
                            <button 
                            className={`${currentPage === page ? "bg-green-950 pt-2 pb-2 pl-4 pr-4 text-white rounded-sm"
                            : "bg-gray-800 pt-2 pb-2 pl-4 pr-4 font-medium text-white rounded-sm"}`}
                            onClick={() => handleNewPage(page)}>{page}</button>
                        </li>
                    ))
                }
            </ul>
        </section>

    )
}
export default ResidentList