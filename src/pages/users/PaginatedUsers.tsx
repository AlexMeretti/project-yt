import { FC, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useTypedDispatch } from "../../redux/redux-store";
import { getCurrentUsers } from "../../redux/users-reducer";
import CurrentUsers from "./CurrentUsers";
// @ts-ignore 
import styles from './scss/PaginatedUsers.module.scss'

const PaginatedUsers: FC = () => {
    const [page, setPage] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(0);
    const perPage = 10;
    const dispatch = useTypedDispatch()
    useEffect(() => {
      dispatch(getCurrentUsers(page, perPage)).then((totalCount: number) =>
        setPageCount(Math.ceil(totalCount / perPage))
      );
    }, [page, getCurrentUsers, dispatch]);
    const handlePageClick = (event: any) => {
      setPage(event.selected + 1);
    };
    return (
      <>
        <CurrentUsers />
        <div className={styles.paginate}>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            activeClassName={styles.paginateActive}
            previousClassName={styles.paginateLi}
            nextClassName={styles.paginateLi}
            breakClassName={styles.paginateLi}
            pageClassName={styles.paginateLi}
            disabledClassName={styles.paginateActive}
          />
        </div>
      </>
    );
  };

  export default PaginatedUsers