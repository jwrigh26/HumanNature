import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import emailjs from 'emailjs-com';
import * as yup from 'yup';

import { errorSelector, setError } from 'store/errorSlice';
import { appSelector} from 'store/appSlice.js';
import config from 'helpers/config';

export default function useContactFrom() {
  useEffect(() => {
    emailjs.init(config.emailJSUserId);
  }, []);
  const history = useHistory();
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const { hasError } = useSelector(errorSelector);
  const { navigation: { routes } } = useSelector(appSelector);

  const initialValues = {
    message: null,
    user_email: null,
    user_name: null,
  };

  const textAreaMax = 512;

  const validators = yup.object().shape({
    message: yup
      .string('Message is required.')
      .typeError('Message is required.')
      .min(1, 'Message: Too short.')
      .max(textAreaMax)
      .required('Message is required.'),
    user_email: yup
      .string('Email is required')
      .typeError('Email is required.')
      .email('Must be a valid email. (e.g., cool_penguin@unimath.app)')
      .required('Email is required.'),
    user_name: yup
      .string()
      .typeError('Name is required.')
      .min(1, 'Name is too short.')
      .max(3, 'Name is too long.')
      .required('Name is required.'),
  });

  const formikBag = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validators,
    onSubmit: async (values) => {
      try {
        const response = await emailjs.send(
          config.emailJSServiceId,
          config.emailJSTemplateId,
          values
        );
        console.log('SUCCESS', response.status, response.text);
        setSubmitted(true);
      } catch (error) {
        const message = `Oops. It looks like our magical servers are having issues.\n
Please try again later.`;
        dispatch(setError({ error: { ...error, message } }));
      }
    },
  });

  const isDisabled =
    !formikBag.dirty ||
    !formikBag?.isValid ||
    formikBag?.isSubmitting ||
    hasError ||
    submitted;

  const isSubmitting = !submitted && formikBag.isSubmitting;

  function goHome() {
    history.push(routes?.home?.route);
  }

  return {
    goHome,
    formikBag,
    isDisabled,
    isSubmitting,
    submitted,
    textAreaMax,
  };
}
