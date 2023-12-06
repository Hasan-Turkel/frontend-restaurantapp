import  useAxios from "../hooks/useAxios";
import useReservationCalls from "../hooks/useReservationCalls";
import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";

const UpdateModal = ({ id, getMyReservations}) => {
  const { updateReservation } = useReservationCalls();
  const { axiosSimple } = useAxios();
  const [restaurants, setRestaurants] = useState([]);

  
  const getRestaurants = async () => {
    try {
      const { data } = await axiosSimple.get(`restaurants`);
      setRestaurants(data.data);
    //   console.log(data);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      <div
        className="modal fade"
        id="update"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header m-0">
              <h1
                className="modal-title fs-3 text-primary"
                id="exampleModalLabel"
              >
                UPDATE RESERVATION
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="container mb-4 auth-form">
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
                    else if (!values.date){
                      errors.date ="Required"
                    }
                    else if (!values.branchId){
                      errors.branchId ="Required"
                    }
                    else if (!values.hour){
                      errors.hour ="Required"
                    }
                    return errors;
                  }}
                onSubmit={(values, action) => {
                  // console.log(values);
                  updateReservation({...values, id:id});
                  setTimeout(() => {
                    getMyReservations();
                  }, 1000);
                  action.resetForm();
                  action.setSubmitting(false);
                  
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
                      value={values?.branchId?.branchName}
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
                    <p className="text-danger">{errors.branchId}</p>
        
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
                     value={values?.date}
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
                   <p className="text-danger">{errors.hour}</p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      // onClick={console.log(values)}
                    >
                      UPDATE
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
