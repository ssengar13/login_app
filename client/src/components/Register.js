import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/validate.js';
import convertToBase64 from '../helper/convert.js';

export default function Register() {

  const[file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: 'sonal@gmail.com',
      username: 'example123',
      password: 'admin@123'
    },
    validate: registerValidation,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async values => {
      values = await Object.assign(values, { profile : file || ''})
      console.log(values)
    }
  })

/** formik doesn't support file upload so we need to create this handler */
   const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
   }
  
  return (

<div className="container mx-auto">

<Toaster position='top-center' reverseOrder={false}></Toaster>

<div className='flex justify-center items-center h-screen'>
  <div className={styles.glass} style={{height: "95%", width: "35%"}}>

    <div className="title flex flex-col items-center">
      <h4 className='text-3xl font-bold'>Register</h4>
      <span className='py-4 text-md w-2/3 text-center text-gray-500'>
        Happy to join you...!
      </span>
    </div>

    <form className='py-1' onSubmit={formik.handleSubmit}>
        <div className='profile flex justify-center py-4'>
          <label htmlFor='profile'>
          <img src={file || avatar} className={styles.profile_img} alt="avatar" />
          </label>
          <input onChange={onUpload} type="file" id='profile' name='profile'/>
        </div>

        <div className="textbox flex flex-col items-center gap-6">
            <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='Email*' />
            <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username*' />
            <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Password*' />
            <button className={styles.btn} type='submit'>Register</button>
        </div>

        <div className="text-center py-4">
          <span className='text-gray-500 text-sm'>Already Register? <Link className='text-red-500 text-sm' to="/"> Login Now</Link></span>
        </div>

    </form>

  </div>
</div>
</div>
  )
}

