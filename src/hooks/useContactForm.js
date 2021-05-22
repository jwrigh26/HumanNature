import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useHistory, useLocation } from 'react-router-dom';
import { hasValue, trimSpaces, sleep } from 'helpers/utils.js';
import emailjs from 'emailjs-com';
import * as yup from 'yup';

import config from 'helpers/config';

export default function useContactFrom() {
  useEffect(() => {
    emailjs.init(config.emailJSUserId);
  }, []);
  const history = useHistory();
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    message: null,
    user_email: null,
    user_name: null,
  };

  const validators = yup.object().shape({
    message: yup
      .string()
      .min(1, 'Message: Too short.')
      .max(512)
      .required('Must provide a message.'),
    user_email: yup
      .string()
      .email('Must be a valid email. (e.g., cool_penguin@unimath.app)')
      .required('Email is required.'),
    user_name: yup
      .string()
      .min(1, 'Name is too short.')
      .max(3, 'Name is too long.')
      .required('Name is required.'),
  });

  const formikBag = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validators,
    onSubmit: async (values) => {
      // TODO: Remove for production

      console.log(location);
      console.log(history);

      await sleep(1500);

      setSubmitted(true);

      // Need to show loader
      // If success show success message and button to go back to home
      // If error show error message via a snackbar perhaps?
      // TODO: Error handling
      // Perhaps good time to set up error handling

      // try {
      //   const response = await emailjs.send(
      //     config.emailJSServiceId,
      //     config.emailJSTemplateId,
      //     values
      //   );
      //   console.log('SUCCESS', response.status, response.text);
      //   setSubmitted(true);
      // } catch (error) {
      //   console.log('FAILED...', error);
      // }
    },
  });

  const isDisabled =
    !formikBag.dirty ||
    !formikBag?.isValid ||
    formikBag?.isSubmitting ||
    submitted;

  const isSubmitting = !submitted && formikBag.isSubmitting;

  function goBack() {
    history.goBack();
  }

  return {
    goBack,
    formikBag,
    isDisabled,
    isSubmitting,
    submitted,
  };
}
