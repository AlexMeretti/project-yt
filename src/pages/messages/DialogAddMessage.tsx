import { Col, Row } from "antd"
import { Formik } from "formik"
import { Form, Input, SubmitButton } from "formik-antd"
import { sendMessage } from "../../redux/reducers/messages-reducer"
import { useTypedThunkDispatch } from "../../redux/redux-store"

const DialogAddMessage = ({userId}: {userId: number }) => {
    const thunkDispatch = useTypedThunkDispatch()
    return (
        <Formik initialValues={{message: ""}} onSubmit={(values, actions) => {
        actions.setSubmitting(true)
         const {message} = values
         thunkDispatch(sendMessage(userId, message))
          actions.resetForm()
          actions.setSubmitting(false)
        }}
      >
          <Form>
          <div className="form">
              <Row gutter={8}>
                  <Col flex='auto'><Input name="message" placeholder="Enter message" /></Col>
                  <Col flex='80px'><SubmitButton>Submit</SubmitButton></Col>
              </Row>
            </div>
          </Form>
      </Formik>
        
    )
}
export default DialogAddMessage