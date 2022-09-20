import { FC, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTypedThunkDispatch } from "../../redux/redux-store";
import { getCurrentUsers } from "../../redux/reducers/users-reducer";
import CurrentUsers from "./CurrentUsers";
import { usersActions } from "../../redux/reducers/users-reducer";
import {getPaginationCurrentPage, getPaginationTotalCount, getUsersFilters } from "../../redux/selectors/users-selector";
import { Pagination } from "antd";

const Users: FC = () => {
    const currentPage = useSelector(getPaginationCurrentPage)
    const totalCount = useSelector(getPaginationTotalCount)
    const filters = useSelector(getUsersFilters)
    const thunkDispatch = useTypedThunkDispatch()
    const dispatch = useDispatch()
    
    useEffect(() => {
      thunkDispatch(getCurrentUsers());
    }, [currentPage , filters, thunkDispatch]);
    const handlePageClick = (event: any) => {
      dispatch(usersActions.setCurrentPage(event));
    };
    const onShowSizeChange = (current: number, size: number) => {
      dispatch(usersActions.setCurrentPage(current));
      dispatch(usersActions.setPerPage(size))
      thunkDispatch(getCurrentUsers());
    };
    return (
      <div className="usersBlock">
        <CurrentUsers totalCount={totalCount? totalCount : 0}/>
        <Pagination className="pagination" showQuickJumper current={currentPage} total={totalCount} onChange={handlePageClick} onShowSizeChange={onShowSizeChange} defaultPageSize={10} />
      </div>
    )
  }

  export default Users