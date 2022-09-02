
import { ProfileType } from "../../../../../../types/types";
import { profileActions, setProfileData } from '../../../../../../redux/profile-reducer'
//@ts-ignore
import styles from "./scss/UserDataEdit.module.scss";
import { useDispatch } from "react-redux";
import { Field, Formik} from "formik";
import { useTypedThunkDispatch } from "../../../../../../redux/redux-store";
type propsTypes = {
  profile: ProfileType
}
const UserDataEdit = ({profile}: propsTypes) => {
  const newContacts = Object.keys(profile.contacts)
  const thunkDispatch = useTypedThunkDispatch()
  const dispatch = useDispatch()
  //@ts-ignore
  return (
    <div className={styles.editForm}>
    <Formik initialValues={profile} 
    onSubmit={(values, { setSubmitting }) =>{
      setSubmitting(false)
      thunkDispatch(setProfileData(values))
    }}>{({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,}) => (
        <form onSubmit={handleSubmit} className={styles.LoginForm}>
        <div>
          <label>About me: </label>
          <Field name="aboutMe" type="text" placeholder="about me" onChange={handleChange}
          onBlur={handleBlur}
          value={values.aboutMe}/>
        </div>
        <div>
          <label>Looking job:</label>
          <Field name="lookingForAJob" type="checkbox" checked={values.lookingForAJob} onChange={handleChange}
          onBlur={handleBlur}
          value={values.lookingForAJob}/>
        </div>
        <div>
        <label>Job Description:</label>
        <Field
          name="lookingForAJobDescription"
          type="text"
          placeholder="Description"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lookingForAJobDescription}
        />
        </div>
        
        <div className={styles.contacts}>
          {newContacts.map((el)=> {
            return <div key={el}>
              <label>{el}</label>
              <Field placeholder={el} 
              name={'contacts.' + el} 
              type="text" 
              onChange={handleChange} 
              onBlur={handleBlur} 
              //@ts-ignore
              value={values.contacts[el] || ''}></Field>
            </div>
          })}
        </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <button onClick={() => dispatch(profileActions.profileEditModeToggle(false))}>X</button>
        </form>
      )}
    </Formik>
    </div>
  );
};

export default UserDataEdit;
