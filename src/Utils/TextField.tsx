import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
var TextField = (props: textFieldDto) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={props.field}>{props.displayName}</label>
        <Field id={props.field} name={props.field} className="form-control" />
        <ErrorMessage name={props.field}>
          {(msg) => <div className="alert alert-danger">{msg}</div>}
        </ErrorMessage>
      </div>
    </>
  );
};

export default TextField;

interface textFieldDto {
  field: string;
  displayName: string;
}
