import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Utils/Button";
import * as Yup from "yup";

var AddMenuItem = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3> Add New Item </h3>
      <Formik
        initialValues={{ name: "", poster: "" }}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is mandetory"),
          poster: Yup.string().required("Poster is mandetory"),
        })}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" className="form-control" />
            <ErrorMessage name="name">
              {(msg) => <div className="alert alert-danger">{msg}</div>}
            </ErrorMessage>
          </div>

          <div className="mb-3">
            <label htmlFor="poster">Image Link</label>
            <Field id="poster" name="poster" className="form-control" />
            <ErrorMessage name="poster">
              {(msg) => <div className="alert alert-danger">{msg}</div>}
            </ErrorMessage>
          </div>
          <Button type="submit">Add</Button>
          <Link className="btn btn-secondary" to="/">
            Cancel
          </Link>
        </Form>
      </Formik>
    </>
  );
};

export default AddMenuItem;
