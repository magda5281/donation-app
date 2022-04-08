import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';


function Items({currentItems}) {
    return (
        <>
            {currentItems &&
            currentItems.map((item) => (
                <div key = {item.key} className="items">
                    <div>
                        <h3>Fundacja "{item.name}"</h3>
                        <p>Cel i misja: {item.goal}</p>
                    </div>
                    <p className='items__donations'>{item.donations}</p>
                </div>

            ))}
        </>
    );
}

function PaginatedItems({itemsPerPage, items}) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems}/>
            <ReactPaginate
                breakLabel="..."
                // nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3} 
                pageCount={pageCount}
                // previousLabel="< previous"
                renderOnZeroPageCount={null}
                previousClassName={"pagination__previous"}
                nextClassName={"pagination__next"}
                containerClassName={"pagination"}
                pageClassName={"pagination__page"}
                activeClassName={"pagination__link--active"}
            />
        </>
    );
}

export default PaginatedItems;