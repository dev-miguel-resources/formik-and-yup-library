import React from "react";
import { Field } from "formik";

// used like function component for input fields in styles.js, valid and error
function FilteredPropsInputField({ className, valid, error, ...props }) {
  return <Field className={className} {...props} />;
}

export default FilteredPropsInputField;
