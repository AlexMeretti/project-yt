import { Formik } from "formik"
import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { usersActions } from "../../../redux/users-reducer"

export const Filter = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const queryString = require('query-string');
    const location = useLocation()
    const parsed = queryString.parse(location.search)
    const parsedFriend = parsed.friend === 'null' ? null : parsed.friend === 'true' ? true : parsed.friend === false

    useEffect(()=> {
        if(!location.search) {
          dispatch(usersActions.setFilters({term: '', friend: null}))
          //@ts-ignore
          Formik.setFieldValue("term", '');
          //@ts-ignore
          Formik.setFieldValue("friend", null);
        }
    },[location.search])

    return <div>
        <Formik
       initialValues={{ term: parsed.term || '', friend: parsedFriend || null }}
       onSubmit={(values, { setSubmitting }) => {
           const filters = {...values}
           dispatch(usersActions.setFilters(filters))
           dispatch(usersActions.setCurrentPage(1))
           navigate({
            pathname: '/users',
            search: `?page=${1}&term=${filters.term}&friend=${filters.friend}`,
          });

           setSubmitting(false)
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
        //@ts-ignore
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="term"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.term}
           />
           {errors.term && touched.term && errors.term}
           <input
             type="checkbox"
             name="friend"
             onChange={handleChange}
             onBlur={handleBlur}
             //@ts-ignore
             value={values.friend}
             //@ts-ignore
             defaultChecked={parsedFriend}
           />
           {errors.friend && touched.friend && errors.friend}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
}

