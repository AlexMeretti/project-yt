import { FC, useEffect} from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useTypedThunkDispatch } from "../../redux/redux-store";
import { getCurrentUsers } from "../../redux/users-reducer";
import CurrentUsers from "./CurrentUsers";
import { usersActions } from "../../redux/users-reducer";
// @ts-ignore 
import styles from './scss/PaginatedUsers.module.scss'
import {getPaginationCurrentPage, getPaginationFilters, getPaginationPagesCount } from "../../redux/selectors/users-selector";
import { useLocation } from "react-router-dom";

const PaginatedUsers: FC = () => {
    const pagesCount = useSelector(getPaginationPagesCount)
    const currentPage = useSelector(getPaginationCurrentPage)
    const filters = useSelector(getPaginationFilters)
    const thunkDispatch = useTypedThunkDispatch()
    const dispatch = useDispatch()
    const location = useLocation()
    const queryString = require('query-string');
    
  useEffect(()=> {
    const parsed = queryString.parse(location.search)
    if(Object.keys(parsed).length !== 0) {
      let actualFilters = {...filters, term: parsed.term, friend: parsed.friend === 'true' ? true : parsed.friend === false ? false : parsed.friend === null}
      dispatch(usersActions.setCurrentPage(+parsed.page))
      dispatch(usersActions.setFilters(actualFilters))
    }
  },[dispatch, queryString, location.search])
    useEffect(() => {
      thunkDispatch(getCurrentUsers());
    }, [currentPage , filters, thunkDispatch]);

    /* useEffect(()=> {
      if(!location.search) {
        dispatch(usersActions.setFilters({term: '', friend: null}))
      }
    },[]) */

    const handlePageClick = (event: any) => {
      dispatch(usersActions.setCurrentPage(event.selected + 1));
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
            pageCount={pagesCount}
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
    )
  }

  export default PaginatedUsers