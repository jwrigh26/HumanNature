import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { hasValue, trimSpaces, sleep } from 'helpers/utils.js';
import * as R from 'ramda';
import * as yup from 'yup';

export default function useContactFrom() {
  const history = useHistory();
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    email: null,
    message: null,
    name: null,
  };

  const validators = yup.object().shape({
    email: yup.string().email(),
    message: yup.string().min(1).max(512).required(),
    name: yup.string().min(1).max(32).required(),
  });

  const formikBag = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validators,
    onSubmit: async (values) => {
      await sleep(2500);

      setSubmitted(true);

      // TEST
      console.log('Submitted:');
      if (values) {
        console.log('Values:');
        console.log(JSON.stringify(values, null, 2));
      } else {
        console.log('No Values found :(');
      }
    },
  });



  return {
    submitted,
    ...formikBag,
  };
}
