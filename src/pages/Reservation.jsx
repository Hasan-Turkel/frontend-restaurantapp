import { Formik, Form, Field } from "formik";
import useAxios from "../hooks/useAxios"
import { useEffect, useState } from "react";
import useReservationCalls from "../hooks/useReservationCalls";
import Footer from "../components/Footer"

const Reservation = () => {
  const { axiosSimple } = useAxios()
  const { sendReservation } = useReservationCalls();
  const [restaurants, setRestaurants] = useState([]);
  // console.log(cat);

  const getRestaurants = async () => {
    try {
      const { data } = await axiosSimple(
        `${import.meta.env.VITE_BASE_URL}restaurants`
      );
      setRestaurants(data.data);
      // console.log(data);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  // console.log(new Date("12/01/2021"));
  return (

    <main className="d-flex align-items-center">
    <div className="container auth-form border p-3 rounded-5 shadow-lg bg-white">
      <Formik
        initialValues={{
          branchId: "",
          date: "",
          hour:""
        }}
        validate={values => {
          const errors = {};
          if (new Date(values.date)<=new Date()) {
            errors.date = 'Reservation date must be at least one day later.'
            
            // console.log(new Date(values.date)<=new Date());;
          } 
          return errors;
        }}
        onSubmit={(values, action) => {
          sendReservation(values);
          action.resetForm();
          action.setSubmitting(false);
          // console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
           
            <label htmlFor="branchId" className="form-label fw-bolder">
              Restaurant* (Please choose by clicking.)
            </label>
            <br />
            <Field
              as="select"
              className="form-control "
              name="branchId"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.branchId.branchName}
              role="button"
              required
            >
              <option value="">Please choose</option>
              {restaurants?.map((item) => (
                <option key={item.id} value={item._id} >
                  {item.branchName}
                </option>
              ))}
            </Field>
            <p className="text-danger">{errors.branchId && touched.branchId && errors.branchId}</p>

            <label htmlFor="date" className="form-label fw-bolder">
              Date* (Please choose by clicking.)
            </label>
            <br />
            <input
            className="form-control"
             type="date"
             name="date"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.date} 
           />
           <p className="text-danger">{errors.date}</p>
           

            <label htmlFor="hour" className="form-label fw-bolder">
              Time* (Please choose by clicking.)
            </label>
            <br />
            <input
            className="form-control"
             type="time"
             name="hour"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.hour} 
           />
           <p className="text-danger">{errors.hour && touched.hour && errors.hour}</p>
            
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >

              Create New Reservation
            </button>
          </Form>
        )}
      </Formik>
    </div>
          <Footer props="position-absolute bottom-0"/>
    </main>
  );
};

export default Reservation;

