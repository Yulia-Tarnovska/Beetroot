import './Form.scss'
import React from 'react';
import { useFormik } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import * as Yup from "yup";


const Form = () => {
  const formik = useFormik({
    initialValues: {
                name: '',
                email: '',
                phone: '',
                message: '',
                check: '',
              },
    
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, 'Юзернейм повинен містити мінімум 4 символи')
        .required(`Обов'язкове поле`),

      email: Yup.string()
      .email('Неправильна адреса електронної пошти')
      .required(`Обов'язкове поле`),

      phone: Yup.string()
      .matches(/^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g, 'Перевір формат номеру телефона')
      .required(`Обов'язкове поле`),

      message: Yup.string()
      .min(10, 'Повідомлення має бути не менше 10 символів')
      .required(`Обов'язкове поле`),
    }),
    
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
       <label htmlFor="name">Ім'я та прізвище</label>
         <input id="name" name="name" type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}


      <label htmlFor="email">Email</label>
           <input id="email" name="email" type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="phone">Телефон (у форматі +380)</label>
           <input id="phone" name="phone" type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}

            <label htmlFor="message">Повідомлення</label>
          <input id="message" name="message" type="text"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          {formik.errors.message ? <div>{formik.errors.message}</div> : null}


        <label htmlFor="check">Надсилати мені оновлення про академію</label>
          <input id="check" name="check" type="checkbox" checked
            onChange={formik.handleChange}
            value={formik.values.check}
          />


      <button type="submit">Надіслати</button>
    </form>
  );
};


export default Form;