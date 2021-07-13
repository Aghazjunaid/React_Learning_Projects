import React from 'react'
import './form.css';
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    FieldArray,
    FastField
  } from 'formik'
  import * as Yup from 'yup'
  
  const initialValues = {
    name: 'Aghaz',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
      facebook: '',
      twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
  }
  
  const onSubmit = (values, submitProps) => {
    console.log('Form data', values)
  }
  
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    channel: Yup.string().required('Required'),
    comments: Yup.string().required('Required')
  })
  

function NewForm() {
    return (
        <div>
                <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      // validateOnChange={false}
      // validateOnBlur={false}
      // validateOnMount
    >
      {formik => {
        console.log('Formik props', formik)
        return (
          <Form>
            <div className='form-control'>
              <label htmlFor='name'>Name</label>
              <Field type='text' id='name' name='name' />
              <ErrorMessage name='name'/>
            </div>

            <div className='form-control'>
              <label htmlFor='email'>Email</label>
              <Field type='email' id='email' name='email' />
              <ErrorMessage name='email'>
                {error => <div className='error'>{error}</div>}
              </ErrorMessage>
            </div>

            <div className='form-control'>
              <label htmlFor='channel'>Channel</label>
              <Field
                type='text'
                id='channel'
                name='channel'
                placeholder='YouTube channel name'
              />
              <ErrorMessage name='channel' />
            </div>

            <div className='form-control'>
              <label htmlFor='comments'>Comments</label>
              <Field
                as='textarea'
                id='comments'
                name='comments'
              />
              <ErrorMessage name='comments'/>
            </div>

            <div className='form-control'>
              <label htmlFor='address'>Address</label>
              <FastField name='address'>
                {({ field, form, meta }) => {
                  // console.log('Field render')
                  return (
                    <div>
                      <input type='text' {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  )
                }}
              </FastField>
            </div>

            <div className='form-control'>
              <label htmlFor='facebook'>Facebook profile</label>
              <Field type='text' id='facebook' name='social.facebook' />
            </div>

            <div className='form-control'>
              <label htmlFor='twitter'>Twitter profile</label>
              <Field type='text' id='twitter' name='social.twitter' />
            </div>

            <div className='form-control'>
              <label htmlFor='primaryPh'>Primary phone number</label>
              <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
            </div>

            <div className='form-control'>
              <label htmlFor='secondaryPh'>Secondary phone number</label>
              <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
            </div>

            <div className='form-control'>
              <label>List of phone numbers</label>
              <FieldArray name='phNumbers'>
                {fieldArrayProps => {
                  const { push, remove, form } = fieldArrayProps
                  const { values } = form
                  const { phNumbers } = values
                  // console.log('fieldArrayProps', fieldArrayProps)
                  // console.log('Form errors', form.errors)
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type='button' onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                        </div>
                      ))}
                      <button type='button' onClick={() => push('')}>
                        +
                      </button>
                    </div>
                  )
                }}
              </FieldArray>
            </div>
            <button type='submit'>
              Submit
            </button>
          </Form>
        )
      }}
    </Formik>

        </div>
    )
}

export default NewForm
