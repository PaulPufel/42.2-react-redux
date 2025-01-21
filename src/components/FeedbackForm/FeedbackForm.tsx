import { useFormik } from 'formik';
import Input from '../Input/Input';
import {  FeedbackFormContainer, Message } from "./styles";
import Button from '../Button/Button';
import { FeedbackFormValue, FEEDBACK_FIELD_NAMES } from './types';
import { feedbackFormSliceAction, feedbackFormSliceSelectors } from '../../store/redux/feedbackForm/feedbackFornSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';


function FeedbackForm () {
  const dispatch = useAppDispatch ()
  const { error, status} = useAppSelector (feedbackFormSliceSelectors.returnedData) 

  const formik = useFormik({
    initialValues: {
      [FEEDBACK_FIELD_NAMES.NAME]: '',
      [FEEDBACK_FIELD_NAMES.EMAIL]: '',
    } as FeedbackFormValue,
    validateOnChange: false,
    onSubmit: (values: FeedbackFormValue, formikHelpers ) => {
      dispatch(feedbackFormSliceAction.sendData())
      formikHelpers.resetForm();
    },
  })

  return (
    <FeedbackFormContainer onSubmit={formik.handleSubmit}>
      <Input
        name={FEEDBACK_FIELD_NAMES.NAME}
        label='Name'
        placeholder='Enter your name'
        id='name_id'
        value={formik.values[FEEDBACK_FIELD_NAMES.NAME]}
        onChange={formik.handleChange}
      />
      <Input
        name={FEEDBACK_FIELD_NAMES.EMAIL}
        label='Email'
        placeholder='Enter email'
        id='email_id'
        value={formik.values[FEEDBACK_FIELD_NAMES.EMAIL]}
        onChange={formik.handleChange}
      />
      <Button name='SEND' type='submit' />
      { status === 'success' && <Message>Data successfully saved</Message>}
    </FeedbackFormContainer>
  )
}

export default FeedbackForm;
