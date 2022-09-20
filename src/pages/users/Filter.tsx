import { Button } from "antd"
import { Formik } from "formik"
import { useDispatch} from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import {
  SubmitButton,
  Input,
  Form,
  FormItem,
  Select,
} from "formik-antd"
import { usersActions } from "../../redux/reducers/users-reducer"
import { useEffect } from "react"
export const Filter = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const queryString = require('query-string');
    const location = useLocation()
    const parsedSearch = queryString.parse(location.search)
    useEffect(()=>{
      /* if(parsedSearch.friend === 'null' && parsedSearch.page === '1' && parsedSearch.term === '') {
        navigate({
          pathname: '/users',
          search: ``
        });
      }  */
    }, [parsedSearch, navigate])
    useEffect(()=>{
      if((Object.entries(parsedSearch).length > 0) && (parsedSearch.friend !== 'null' || parsedSearch.page !== '1' || parsedSearch.term !== '')) {
        const term = parsedSearch.term
        const friend = parsedSearch.friend === 'null' ? null : parsedSearch.friend === 'true' ? true : false
        const newCurrentPage = +parsedSearch.page
        const newFilters = {term, friend}
        dispatch(usersActions.setFilters(newFilters))
        dispatch(usersActions.setCurrentPage(newCurrentPage))
      } 
    }, [parsedSearch, dispatch])
    
    const queryTerm = parsedSearch.term
    const queryFriend = parsedSearch.friend === 'null' ? 'all' : parsedSearch.friend === 'true' ? 'isFriend' : parsedSearch.friend === 'false' ? 'notFriend' : ''
    return <div className="filtersBlock">
        <Formik initialValues={{ term: queryTerm || '', friend: queryFriend || 'all' }} onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true)
           const term = values.term
           const friend = values.friend === 'all' ? null : values.friend === 'isFriend' ? true : false
           const submitFilters = {term, friend}
           dispatch(usersActions.setFilters(submitFilters))
           dispatch(usersActions.setCurrentPage(1))
           navigate({
            pathname: '/users',
            search: `?page=${1}&term=${term}&friend=${friend}`
          })
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
       }) => (
        //@ts-ignore
         <Form onSubmit={handleSubmit} layout='vertical'>
              <FormItem name="Search by name" label="Search by name:" >
                <Input 
                type="text" 
                name="term" 
                onChange={handleChange} 
                onBlur={handleBlur} 
                value={values.term} />
              </FormItem>
           {errors.term && touched.term && errors.term}
           <FormItem name='friend' label="Search for:">
             <Select name="friend" placeholder="Select" style={{ width: "100%" }} onChange={handleChange} onBlur={handleBlur}>
                <Select.Option value='all'>all</Select.Option>
                <Select.Option value='isFriend'>friend</Select.Option>
                <Select.Option value='notFriend'>not friend</Select.Option>
              </Select>
            </FormItem>
            {errors.friend && touched.friend && errors.friend}
           <Button.Group style={{ marginTop: 10 }}>
                <SubmitButton>Submit</SubmitButton>
              </Button.Group>
         </Form>
       )}
     </Formik>
    </div>
}

