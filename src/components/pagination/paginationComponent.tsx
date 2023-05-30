import { useEffect, useMemo, useState } from "react";
import { Pagination } from "react-bootstrap";

interface IPaginationComponentProps {
  pagesCount: number;
  visibleItemsNumber: number;
  pageHandler?: (page: number) => void;
}

export const PaginationComponent = (props: IPaginationComponentProps) => {
  const [page, setPage] = useState(1);
  const [firstVisiblePage, setFirstVisiblePage] = useState(1);
  const { pagesCount, visibleItemsNumber, pageHandler } = props;

  const items = useMemo(
    () =>
      Array(pagesCount)
        .fill(null)
        .map((_, i) => i + 1),
    [pagesCount]
  );

  const firstPage = items.at(0);
  const lastPage = items.at(-1);

  const lastVisiblePage = firstVisiblePage + visibleItemsNumber - 1;

  useEffect(() => {
    if (page < firstVisiblePage) {
      setFirstVisiblePage((prevState) => prevState - 1);
    } else if (page > lastVisiblePage) {
      setFirstVisiblePage((prevState) => prevState + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastVisiblePage, page]);

  useEffect(() => {
    if (pageHandler) {
      pageHandler(page);
    }
  }, [page, pageHandler]);

  return (
    <Pagination>
      <Pagination.First
        disabled={page === firstPage}
        onClick={() => {
          setPage(firstPage ?? 1);
        }}
      />
      <Pagination.Prev
        disabled={page === firstPage}
        onClick={() => {
          setPage((prevState) => prevState - 1);
          if (page < firstVisiblePage) {
            setFirstVisiblePage((prevState) => prevState - 1);
          }
          if (page > lastVisiblePage) {
            setFirstVisiblePage((prevState) => prevState + 1);
          }
        }}
      />
      {items.slice(firstVisiblePage - 1, lastVisiblePage).map((pageNumber) => (
        <Pagination.Item
          key={pageNumber}
          onClick={() => {
            setPage(pageNumber);
          }}
          active={page === pageNumber}
        >
          {pageNumber}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={page === lastPage}
        onClick={() => {
          setPage((prevState) => prevState + 1);
        }}
      />
      <Pagination.Last
        disabled={page === lastPage}
        onClick={() => {
          setPage(lastPage ?? 1);
        }}
      />
    </Pagination>
  );
};
