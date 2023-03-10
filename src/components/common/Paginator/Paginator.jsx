import React, { useState } from 'react'
import styles from './Paginator.module.css'
import cn from 'classnames'
import Button from '@mui/material/Button'

let Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage = 1,
  onPageChanged = (x) => x,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={cn(styles.paginator)}>
      {portionNumber > 1 && (
        <Button
          onClick={() => {
            setPortionNumber(portionNumber - 1)
          }}
          variant="contained"
        >
          PREV
        </Button>
        // <button
        //   onClick={() => {
        //     setPortionNumber(portionNumber - 1)
        //   }}
        // >
        //   PREV
        // </button>
      )}

      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={cn(
                {
                  [styles.selectedPage]: currentPage === p,
                },
                styles.pageNumber
              )}
              key={p}
              onClick={(e) => {
                onPageChanged(p)
              }}
            >
              {p}
            </span>
          )
        })}
      {portionCount > portionNumber && (
        <Button
          onClick={() => {
            setPortionNumber(portionNumber + 1)
          }}
          variant="contained"
        >
          NEXT
        </Button>
        // <button
        //     onClick={() => {
        //         setPortionNumber(portionNumber + 1)
        //     }}
        // >
        //     NEXT
        // </button>
      )}
    </div>
  )
}

export default Paginator
