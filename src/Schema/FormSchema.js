import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(40, "First Name must be 40 characters")
    .required("First Name is required"),
  middleName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(40, "Middle Name must be 40 characters"),
  lastName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(40, "Last Name must be 40 characters")
    .required("Last Name is required"),
  gender: Yup.string().required("Gender is required").nullable(),
  // age: Yup.number().positive().integer(),
  phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Enter valid mobile number"
    )
    .min(8, "Mobile number must be 8 digit")
    .max(14, "Mobile number must be 14 digit")
    .required("Mobile Number is required"),
  // patientPhone: Yup.string()
  //   .matches(
  //     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  //     "Enter valid mobile number"
  //   )
  //   .min(8, "Mobile number must be minimum 8 digit")
  //   .max(14, "Mobile number must be maximum 14 digit")
  //   .required("Mobile Number is required"),
  unit: Yup.object()
    .shape({
      label: Yup.string().required("Please select unit"),
      value: Yup.string().required("Please select unit"),
    })
    .nullable() // for handling null value when clearing options via clicking "x"
    .required("Unit is required"),

  prefix: Yup.object()
    .shape({
      label: Yup.string().required("Please select prefix"),
      value: Yup.string().required("Please select prefix"),
    })
    .nullable()
    .required("Prefix is required"),

  // dateOfBirth: Yup.string().nullable().required("Please enter your age"),

  ISD: Yup.object()
    .shape({
      label: Yup.string().required("Please select ISD"),
      value: Yup.string().required("Please select ISD"),
    })
    .nullable()
    .required("ISD is required"),

  patientCat: Yup.object()
    .shape({
      label: Yup.string().required("Please select patient category"),
      value: Yup.string().required("Please select patient category"),
    })
    .nullable()
    .required("Patient category is required"),

  // idDocNo: Yup.string().matches(
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  //   "Enter valid number"),

  typeApt: Yup.object()
    .shape({
      label: Yup.string().required("Please select type of appointment"),
      value: Yup.string().required("Please select type of appointment"),
    })
    .nullable()
    .required("Type of appointment is required"),

  dept: Yup.object()
    .shape({
      label: Yup.string().required("Please select department"),
      value: Yup.string().required("Please select department"),
    })
    .nullable()
    .required("Department is required"),

  doct: Yup.object()
    .shape({
      label: Yup.string().required("Please select doctor"),
      value: Yup.string().required("Please select doctor"),
    })
    .nullable()
    .required("Doctor is required"),

  complaintRemark: Yup.string().max(
    100,
    "Complaint & Remark must be at most 100 characters"
  ),
}).required();
