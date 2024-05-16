import React from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { registerParticipant } from '../../redux/Events/eventsSlice';
import { selectEvents } from '../../redux/Events/eventsSelectors';
import { toastRejected } from 'services/notify';
import { convertToISOString } from 'utilities/convertDateFunction';
import { FormWrap } from './Form.styled';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  dateOfBirth: Yup.string()
    .matches(
      /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/,
      'Invalid date format. Use dd/mm/yyyy'
    )
    .required('Date of Birth is required'),
  heardAboutEvent: Yup.string().required(
    'Method of hearing about the event is required'
  ),
});

export const FormElement = () => {
  const events = useSelector(selectEvents);
  const { eventId } = useParams();
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        dateOfBirth: '',
        heardAboutEvent: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString();
        
        const participantData = {
          name: values.fullName,
          email: values.email,
          dateOfRegistration: formattedDate,
          dateOfBirth: convertToISOString(values.dateOfBirth),
          heardAboutEvent: values.heardAboutEvent,
        };
        console.log(participantData)
          const event = events.find((event) => event._id === eventId);
          const participants = event.participants;
          const isEmailRegistered = participants.some(participant => participant.email === values.email);
  if (isEmailRegistered) {
    toastRejected('This email is already registered for the event. Please use different email');
    setSubmitting(false); 
    return;
  }
        dispatch(registerParticipant({ eventId, participantData }));
        setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <FormWrap>
          <div className='wrap'>
            <label className='lable' htmlFor="fullName">Full Name</label>
            <Field className="field" type="text" id="fullName" name="fullName" />
            <ErrorMessage name="fullName" component="div" className="error" />
          </div>
          <div className='wrap'>
            <label className='lable' htmlFor="email">Email</label>
            <Field className="field" type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className='wrap'>
            <label className='lable' htmlFor="dateOfBirth">Date of Birth (dd/mm/yyyy)</label>
            <Field className="field" type="text" id="dateOfBirth" name="dateOfBirth" />
            <ErrorMessage
              name="dateOfBirth"
              component="div"
              className="error"
            />
          </div>
          <div>
            <label className='lable'>Where did you hear about us?</label>
            <div>
              <label>
                <Field
                  type="radio"
                  name="heardAboutEvent"
                  value="social_media"
                />
                Social Media
              </label>
            </div>
            <div>
              <label>
                <Field type="radio" name="heardAboutEvent" value="friends" />
                Friends
              </label>
            </div>
            <div>
              <label>
                <Field type="radio" name="heardAboutEvent" value="myself" />
                Found Myself
              </label>
            </div>
            <ErrorMessage
              name="heardAboutEvent"
              component="div"
              className="error"
            />
          </div>
          <button className='button' type="submit">Submit</button>
        </FormWrap>
      )}
    </Formik>
  );
};
