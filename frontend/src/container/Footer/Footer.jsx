import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      _type: 'contact',
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Namn krävs'),
      email: Yup.string().email('Invalid email').required('Email krävs'),
      message: Yup.string().required('Meddelandet får inte vara tomt'),
    }),
    onSubmit: (values) => {
      setLoading(true);
      client.create(values)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
    },
  });

  return (
    <>
      <h2 className="head-text">Chatta Med Oss</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:info@sfhsweden.se" className="p-text">info@sfhsweden.se</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form 
          onSubmit={formik.handleSubmit}
          className='flex_center'
        >
          <TextField
            fullWidth
            id="name"
            name="name"
            placeholder="Ditt namn"
            className="app__footer-form app__flex"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{
              "& fieldset": { border: 'none' },
            }}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            placeholder="Din email"
            className="app__footer-form app__flex"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{
              "& fieldset": { border: 'none' },
            }}
          />
          <TextField
            fullWidth
            id="message"
            name="message"
            placeholder="Ditt meddelande"
            className="app__footer-form app__flex"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            sx={{
              "& fieldset": { border: 'none' },
            }}
          />
          <div className="">
            <button
              type="submit"
              className="p-text"
            >
              {!loading ? 'Skicka meddelande' : 'Skickar...'}
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Tack För Att Du Hör Av Dig!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'kontakta oss',
  'app__whitebg',
);
