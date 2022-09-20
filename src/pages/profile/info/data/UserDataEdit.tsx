import { useDispatch } from "react-redux";
import { Formik} from "formik";
import { ProfileType } from "../../../../types/types";
import { useTypedThunkDispatch } from "../../../../redux/redux-store";
import { profileActions, setProfileData } from "../../../../redux/reducers/profile-reducer";
import { Checkbox, Form, Input} from "formik-antd";
import { Button } from "antd";
type propsTypes = {
  profile: ProfileType
}
const UserDataEdit = ({profile}: propsTypes) => {
  const newContacts = Object.keys(profile.contacts)
  const thunkDispatch = useTypedThunkDispatch()
  const dispatch = useDispatch()
  //@ts-ignore
  return <div className='userDataEdit'>
    <Formik onSubmit={(values) => {
      thunkDispatch(setProfileData(values))
      dispatch(profileActions.profileEditModeToggle(false))
    }} initialValues={profile}>
    <Form className="editForm">
          <div className="editBlock"><label>About me: </label><Input name="aboutMe" placeholder="about me" /></div>
          <div className="editBlock"><label>Looking job:</label><Checkbox name="lookingForAJob" /></div>
          <div className="editBlock"><label>About me: </label><Input name="lookingForAJobDescription" placeholder="Description" /></div>
          <>
          {newContacts.map((el)=> {
            return <div key={el} className='editBlock'>
              <label>{el}:</label>
              <Input placeholder={el} 
              name={'contacts.' + el}></Input>
            </div>
          })}
        </>
        <div className="editFormButtons">
          <Button size='small' type='primary' htmlType='submit'>Submit</Button>
          <Button size='small'type='primary' danger onClick={()=> dispatch(profileActions.profileEditModeToggle(false))}>X</Button>
        </div>
    </Form>
    </Formik>
  </div>
};

export default UserDataEdit;