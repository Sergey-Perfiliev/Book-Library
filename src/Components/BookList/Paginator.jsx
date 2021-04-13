import React, { useState } from 'react'
import './Paginator.css'
import cn from 'classnames'

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 5 }) => {
	let pagesCount = Math.ceil(totalItemsCount / pageSize)

	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let portionCount = Math.ceil(pagesCount / portionSize)
	let [portionNumber, setPortionNumber] = useState(1)

	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	let rightPortionPageNumber = portionNumber * portionSize

	return <div className="pagination">
		{portionNumber > 1 &&
			<button onClick={() => { setPortionNumber(portionNumber - 1) }}>&laquo;</button>
		}
		{pages
			.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
			.map((p) => {
				return <span className={cn({
					["selectedPage"]: currentPage === p
				}, "pageNumber")}
					key={p}
					onClick={(e) => {
						onPageChanged(p);
					}}>{p}</span>
			})
		}
		{portionCount > portionNumber &&
			<button onClick={() => { setPortionNumber(portionNumber + 1) }}>&raquo;</button>
		}
	</div>
}

export default Paginator
