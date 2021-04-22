import React, { useEffect, useState } from "react";


let Pagination = ({ onClickHandler, pageSize, dataCount, pSizeHandler }) => {
    //let pageSize = 25;
    const [pages, setPages] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
    const [tempPages, setTempPages] = useState([]);

    let pageCount = Math.ceil(dataCount / pageSize);
    useEffect(() => {
        let pgs = [];
        for (let index = 1; index <= pageCount; index++) {
            pgs.push(index);
        }
        setPages(pgs);
        changePage(pageIndex);
    }, [])

    let changePage = (page) => {
        onClickHandler(page);
        setPageIndex(page);
        let pgs = pages.slice(page > 5 ? page - 5 : 0, page < pageCount - 5 ? page + 5 : pageCount);
        setTempPages(pgs);
    }


    return (
        <div>
            <ul className="flex pl-0 list-none rounded my-2 justify-center flex-wrap">
                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200">
                    <button disabled={pageIndex === 1} className="page-link" onClick={() => { changePage(1); }}>First</button></li>
                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200">
                    <button disabled={pageIndex === 1} className="page-link" onClick={() => { changePage(pageIndex - 1); }}>Previous</button></li>
                {tempPages.map((page) => (<li key={page} className={"relative block py-2 px-3 leading-tight " + (pageIndex == page ? 'bg-blue-200' : 'bg-white') + " border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"}>
                    <button className="page-link" onClick={() => { changePage(page); }}>{page}</button></li>))}
                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200">
                    <button disabled={pageIndex === pageCount} className="page-link" onClick={() => { changePage(pageIndex + 1); }}>Next</button></li>
                <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200">
                    <button disabled={pageIndex === pageCount} className="page-link" onClick={() => { changePage(pageCount) }}>Last</button></li>
            </ul>
            <div className="pl-20">
            <p>Display elements</p>
                <select value={pageSize} onChange={pSizeHandler} className="appearance-none">
                    <option value="3">3</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                </select>
            </div>
        </div>
    )
}

export default Pagination;