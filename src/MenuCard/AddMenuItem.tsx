import { Field } from "formik";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Utils/Button";

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
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="poster">Image Link</label>
            <Field id="poster" name="poster" className="form-control" />
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
