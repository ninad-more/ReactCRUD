import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Utils/Button";
import * as Yup from "yup";
import TextField from "../Utils/TextField";

var AddMenuItem = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3> Add New Item </h3>
      <Formik
        initialValues={{ name: "", poster: "" }}
        onSubmit={(value) => {
          //api call

          console.log(value);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is mandetory"),
          poster: Yup.string().required("Poster is mandetory"),
        })}
      >
        {(formikProps) => (
          <Form>
            <TextField field="name" displayName="Name"></TextField>

            <TextField field="poster" displayName="Image"></TextField>

            <Button disabled={formikProps.isSubmitting} type="submit">
              Add
            </Button>
            <Link className="btn btn-secondary" to="/">
              Cancel
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddMenuItem;
