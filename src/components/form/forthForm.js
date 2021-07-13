import React from "react" ;
import { useFormik } from 'formik';
import * as Yup from "yup" ;
 
// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validationSchema = Yup.object({
    name:Yup.string().required("Required") ,
    price:Yup.number().required("Required") ,
    category:Yup.string().required('Required') ,
    description : Yup.string().required("Required")
})



const ForthForm = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: '',
      price: undefined ,
      category : " " ,
      description: ''
    },
    // 
    validationSchema ,
    onSubmit: values => {
      console.log("Form values" , values)
    },
  });
  return (
   <form  onSubmit={formik.handleSubmit}>
   <div className="container-sm">
   <div className="mb-3">
       <label for="validationTextarea"  htmlFor="name">Name</label>
       <input type="text"  name = "name" className="form-control " id="validationTextarea" {...formik.getFieldProps('name')}  required />
     </div>
     </div>
     {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> :null} 
     <div className="container-sm">  
     <div className="mb-3">
       <label for="validationTextarea"  htmlFor="price">Price</label>
       <input type="number"  name = "price" className="form-control " id="validationTextarea" {...formik.getFieldProps('price')}  required /> 
     </div>
     </div> 
     {formik.touched.price && formik.errors.price ? <div className="error">{formik.errors.price}</div> :null} 
     <div className="container-sm"> 
     <div className="mb-3">
       <label for="validationTextarea"  htmlFor="description">Description</label>
       <input type="description"  name = "description" className="form-control " id="validationTextarea" {...formik.getFieldProps('description')}  required />
       </div>
     </div> 
     {formik.touched.description && formik.errors.description ? <div className="error">{formik.errors.description}</div> :null} 

     
     <div className="container-sm">  
     <div className="mb-3">
       <label for="validationTextarea"  htmlFor="category">Category</label>
       <input type="text"  name = "category" className="form-control " id="validationTextarea" {...formik.getFieldProps('category ')}  required /> 
       <br />
     <button type="submit" className="btn btn-danger" >Submit</button>
     </div>
     </div> 
     { formik.touched.category && formik.errors.category ? <div className="error">{formik.errors.category}</div> :null} 
   </form>
      
    
  );
};
export default ForthForm ;