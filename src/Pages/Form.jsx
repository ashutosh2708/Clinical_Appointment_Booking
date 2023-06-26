import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EventIcon from "@mui/icons-material/Event";

import Select, { components } from "react-select";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../Schema/FormSchema";

import Modal from "../Components/Modal";
import SideNav from "../Components/SideNav";
import Navbar from "../Components/Navbar";

const { ValueContainer, Placeholder } = components;
const CustomValueContainer = ({ children, ...props }) => {
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, (child) =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Styles = {
  menu: (base) => ({
    ...base,
    zIndex: 100,
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    overflow: "visible",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    backgroundColor: "white",
    position: "absolute",
    top: state.hasValue || state.selectProps.inputValue ? -15 : "10%",
    transition: "top 0.1s, font-size 0.1s",
    fontSize: (state.hasValue || state.selectProps.inputValue) && 14,
  }),
};

const Form = () => {
  const [valueDob, setValueDob] = useState(null);
  const [valueApt, setValueApt] = useState(null);

  const defaultValues = {
    patientPhone: "",
    unit: null,
    prefix: null,
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: null,
    age: 0,
    years: 0,
    months: 0,
    days: 0,
    ISD: null,
    phone: "",
    IdentificationDoc: null,
    idDocNo: "",
    patientCat: null,
    bookingSrc: null,
    typeApt: null,
    complaintRemark: "",
    refType: null,
    refName: null,
    dept: null,
    subDepart: null,
    doct: null,
    apptDate: null,
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  // useEffect(() => {
  //   console.log("values is ", errors);
  // }, [errors]);

  const onSubmit = (data) => {
    reset(defaultValues);
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-[#ECEFF1]">
            {/* Header section */}
            <Navbar />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          <DrawerHeader />

          <div>

            {/* Patient Details */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full p-1.5 px-4 rounded-lg shadow-lg bg-white">
                {/* 1st row */}
                <div className="grid md:grid-row-1 md:grid-cols-2 gap-3 mb-3">
                  <div className="md:flex lg:flex gap-3">
                    <div>
                      <h5 className="py-2 font-medium">Patient Details</h5>
                    </div>
                    <div className="md:flex-1 md:mx-5 lg:flex-1 lg:mx-12">
                      <TextField
                        fullWidth
                        name="patientPhone"
                        size="small"
                        id=""
                        variant="outlined"
                        placeholder="Search Patient By Mobile No."
                        InputProps={{
                          endAdornment: (
                            <IconButton>
                              <SearchOutlinedIcon />
                            </IconButton>
                          ),
                        }}
                        {...register("patientPhone")}
                        // error={Boolean(errors.patientPhone)}
                        // helperText={errors.patientPhone?.message}
                      />
                    </div>
                  </div>
                  <div className="md:ml-32 lg:ml-80">
                    <Controller
                      name="unit"
                      render={({ field }) => {
                        return (
                          <Select
                            isClearable
                            value={field.value}
                            onChange={field.onChange}
                            ref={field.ref}
                            styles={Styles}
                            placeholder="Unit *"
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                            options={[
                              { value: "pune", label: "Pune" },
                              { value: "mumbai", label: "Mumbai" },
                              { value: "nashik", label: "Nashik" },
                            ]}
                          />
                        );
                      }}
                      control={control}
                      rules={{ required: true }}
                    />
                    <p className="text-xs text-red-500">
                      {errors.unit?.message || errors.unit?.label.message}
                    </p>
                  </div>
                </div>

                {/* 2nd row */}

                <div className="grid md:grid-row-1 md:grid-cols-3 gap-3 mb-3">
                  <div className="flex gap-3">
                    <div className="w-1/2">
                      <Controller
                        name="prefix"
                        render={({ field }) => {
                          return (
                            <Select
                              value={field.value}
                              onChange={field.onChange}
                              ref={field.ref}
                              menuPlacement="auto"
                              styles={Styles}
                              placeholder="Prefix *"
                              components={{
                                ValueContainer: CustomValueContainer,
                                IndicatorSeparator: () => null,
                              }}
                              options={[
                                { value: "mr", label: "Mr" },
                                { value: "ms", label: "Ms" },
                                { value: "mrs", label: "Mrs" },
                              ]}
                            />
                          );
                        }}
                        control={control}
                        rules={{ required: true }}
                      />
                      <p className="text-xs text-red-500">
                        {errors.prefix?.message || errors.prefix?.label.message}
                      </p>
                    </div>
                    <div className="w-3/4">
                      <TextField
                        fullWidth
                        name="firstName"
                        size="small"
                        id="outllined-basic"
                        variant="outlined"
                        label="First Name *"
                        {...register("firstName")}
                        error={Boolean(errors.firstName)}
                        helperText={errors.firstName?.message}
                      />
                    </div>
                  </div>
                  <div>
                    <TextField
                      fullWidth
                      name="middleName"
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                      label="Middle Name"
                      {...register("middleName")}
                      error={Boolean(errors.middleName)}
                      helperText={errors.middleName?.message}
                    />
                  </div>
                  <div>
                    <TextField
                      fullWidth
                      name="lastName"
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                      label="Last Name *"
                      {...register("lastName")}
                      error={Boolean(errors.lastName)}
                      helperText={errors.lastName?.message}
                    />
                  </div>
                </div>

                {/* 3rd row */}

                <div className="grid md:grid-row-1 md:grid-cols-3 gap-3">
                  <Controller
                    control={control}
                    name="gender"
                    defaultValue=""
                    render={({ field }) => (
                      <FormControl error={Boolean(errors.gender)}>
                        <div className="">
                          <FormLabel>Gender *</FormLabel>
                          <RadioGroup row {...field}>
                            <FormControlLabel
                              value="male"
                              control={<Radio size="small" />}
                              label="Male"
                            />
                            <FormControlLabel
                              value="female"
                              control={<Radio size="small" />}
                              label="Female"
                            />
                            <FormControlLabel
                              value="other"
                              control={<Radio size="small" />}
                              label="Other"
                            />
                          </RadioGroup>
                        </div>
                        <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.gender?.message}
                        </FormHelperText>
                      </FormControl>
                    )}
                  />
                  <div className="mb-3">
                    <Controller
                      name="dateOfBirth"
                      defaultValue={valueDob}
                      control={control}
                      render={({ field: { onChange, ...restField } }) => (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            disableFuture
                            openTo="year"
                            label="Date of Birth"
                            inputFormat="DD/MM/YYYY"
                            onChange={(event) => {
                              onChange(event);
                              setValueDob(event);
                            }}
                            renderInput={(params) => (
                              <TextField
                                fullWidth
                                size="small"
                                {...params}
                                {...register("dateOfBirth")}
                                error={Boolean(errors.dateOfBirth)}
                                helperText={errors.dateOfBirth?.message}
                              />
                            )}
                            {...restField}
                            InputProps={{
                              endAdornment: (
                                <IconButton>
                                  <EventIcon />
                                </IconButton>
                              ),
                            }}
                          />
                        </LocalizationProvider>
                      )}
                    />
                  </div>
                  <div className="grid lg:grid-row-1 lg:grid-cols-4 grid-row-2 grid-cols-2 gap-3 mb-3">
                    <div>
                      <TextField
                        name="age"
                        defaultValue={0}
                        size="small"
                        id=""
                        variant="outlined"
                        label="Age"
                        {...register("age")}
                      />
                    </div>

                    <div>
                      <TextField
                        name="years"
                        defaultValue={0}
                        disabled
                        size="small"
                        id=""
                        variant="outlined"
                        label="Year/s"
                      />
                    </div>
                    <div>
                      <TextField
                        name="months"
                        defaultValue={0}
                        disabled
                        size="small"
                        id=""
                        variant="outlined"
                        label="Month/s"
                      />
                    </div>
                    <div>
                      <TextField
                        name="days"
                        defaultValue={0}
                        disabled
                        size="small"
                        id=""
                        variant="outlined"
                        label="Day/s"
                      />
                    </div>
                  </div>
                </div>

                {/* 4th row */}

                <div className="grid md:grid-row-1 md:grid-cols-3 gap-3">
                  <div className="flex gap-3">
                    <div className="w-1/3">
                      <Controller
                        name="ISD"
                        render={({ field }) => {
                          return (
                            <Select
                              value={field.value}
                              onChange={field.onChange}
                              ref={field.ref}
                              menuPlacement="auto"
                              styles={Styles}
                              placeholder="ISD *"
                              components={{
                                ValueContainer: CustomValueContainer,
                                IndicatorSeparator: () => null,
                              }}
                              options={[
                                { value: "america", label: "America" },
                                { value: "canada", label: "Canada" },
                                { value: "india", label: "India" },
                                { value: "algeria", label: "Algeria" },
                                { value: "england", label: "England" },
                                { value: "australia", label: "Australia" },
                                { value: "france", label: "France" },
                                { value: "denmark", label: "Denmark" },
                                { value: "italy", label: "Italy" },
                                { value: "singapore", label: "Singapore" },
                              ]}
                            />
                          );
                        }}
                        control={control}
                        rules={{ required: true }}
                      />
                      <p className="text-xs text-red-500">
                        {errors.ISD?.message || errors.ISD?.label.message}
                      </p>
                    </div>
                    <div className="w-3/4">
                      <TextField
                        fullWidth
                        name="phone"
                        size="small"
                        id=""
                        variant="outlined"
                        label="Mobile Number *"
                        {...register("phone")}
                        error={Boolean(errors.phone)}
                        helperText={errors.phone?.message}
                      />
                    </div>
                  </div>
                  <div>
                    <Controller
                      name="IdentificationDoc"
                      render={({ field }) => (
                        <Select
                          isClearable
                          value={field.value}
                          onChange={field.onChange}
                          ref={field.ref}
                          placeholder="Identification Doc"
                          components={{
                            ValueContainer: CustomValueContainer,
                            IndicatorSeparator: () => null,
                          }}
                          menuPlacement="auto"
                          styles={Styles}
                          options={[
                            { value: "aadharCard", label: "Aadhar Card" },
                            { value: "panCard", label: "PAN Card" },
                            { value: "passport", label: "Passport" },
                          ]}
                        />
                      )}
                      control={control}
                      rules={{ required: true }}
                    />
                  </div>
                  <div>
                    <TextField
                      name="idDocNo"
                      fullWidth
                      size="small"
                      id=""
                      variant="outlined"
                      label="Identification Document No."
                      {...register("idDocNo")}
                      error={Boolean(errors.idDocNo)}
                      helperText={errors.idDocNo?.message}
                    />
                  </div>
                </div>
              </div>

              {/* Appointment Info */}

              <div className="w-full p-1.5 px-4 rounded-lg my-2 shadow-lg bg-white">
                {/* 1st row */}
                <div className="grid md:grid-row-1 md:grid-cols-3 gap-3">
                  <div className="md:col-span-4">
                    <h5 className="font-medium">Appointment Info</h5>
                  </div>
                  <div>
                    <Controller
                      name="patientCat"
                      render={({ field }) => (
                        <Select
                          isClearable
                          value={field.value}
                          onChange={field.onChange}
                          ref={field.ref}
                          placeholder="Select Patient Category *"
                          components={{
                            ValueContainer: CustomValueContainer,
                            IndicatorSeparator: () => null,
                          }}
                          menuPlacement="auto"
                          styles={Styles}
                          options={[
                            { value: "self", label: "Self" },
                            { value: "insurance", label: "Insurance" },
                            { value: "staff", label: "Staff" },
                            { value: "corporate", label: "Corporate" },
                            { value: "health camp", label: "Health camp" },
                            { value: "scheme", label: "Scheme" },
                            { value: "refrral", label: "Refrral" },
                            {
                              value: "company sponsered",
                              label: "Company Sponsered",
                            },
                            { value: "pmjay", label: "PMJAY" },
                            { value: "mpjay", label: "MPJAY" },
                          ]}
                        />
                      )}
                      control={control}
                      rules={{ required: true }}
                    />
                    <p className="text-xs text-red-500">
                      {errors.patientCat?.message ||
                        errors.patientCat?.label.message}
                    </p>
                  </div>

                  <div>
                    <Controller
                      name="bookingSrc"
                      render={({ field }) => (
                        <Select
                          isClearable
                          value={field.value}
                          onChange={field.onChange}
                          ref={field.ref}
                          placeholder="Booking Source"
                          components={{
                            ValueContainer: CustomValueContainer,
                            IndicatorSeparator: () => null,
                          }}
                          menuPlacement="auto"
                          styles={Styles}
                          options={[
                            { value: "test1", label: "Test 1" },
                            { value: "test2", label: "Test 2" },
                            { value: "test3", label: "Test 3" },
                          ]}
                        />
                      )}
                      control={control}
                      rules={{ required: true }}
                    />
                  </div>
                  <div>
                    <Controller
                      name="typeApt"
                      render={({ field }) => (
                        <Select
                          isClearable
                          value={field.value}
                          onChange={field.onChange}
                          ref={field.ref}
                          placeholder="Type Of Appointment *"
                          components={{
                            ValueContainer: CustomValueContainer,
                            IndicatorSeparator: () => null,
                          }}
                          menuPlacement="auto"
                          styles={Styles}
                          options={[
                            { value: "call", label: "Call" },
                            { value: "walkin", label: "WalkIn" },
                            { value: "followUp", label: "FollowUp" },
                          ]}
                        />
                      )}
                      control={control}
                      rules={{ required: true }}
                    />
                    <p className="text-xs text-red-500">
                      {errors.typeApt?.message || errors.typeApt?.label.message}
                    </p>
                  </div>
                  <div className="md:col-span-4">
                    <TextField
                      name="complaintRemark"
                      fullWidth
                      size="small"
                      id=""
                      variant="outlined"
                      label="Complaints and Remarks"
                      {...register("complaintRemark")}
                      error={Boolean(errors.complaintRemark)}
                      helperText={errors.complaintRemark?.message}
                    />
                  </div>
                </div>
              </div>

              {/* Referral Info */}

              <div className="w-full p-1.5 px-4 rounded-lg my-2 shadow-lg bg-white">
                {/* 1st row */}
                <div className="grid md:grid-row-1 md:grid-cols-3 gap-3">
                  <div className="md:col-span-4">
                    <h5 className="font-medium">Referral Info</h5>
                  </div>
                  <div>
                    <Controller
                      name="refType"
                      render={({ field }) => (
                        <Select
                          isClearable
                          value={field.value}
                          onChange={field.onChange}
                          ref={field.ref}
                          placeholder="Referral Type"
                          components={{
                            ValueContainer: CustomValueContainer,
                            IndicatorSeparator: () => null,
                          }}
                          menuPlacement="auto"
                          styles={Styles}
                          options={[
                            { value: "doctor", label: "Doctor" },
                            { value: "oldPatient", label: "Old Patient" },
                          ]}
                        />
                      )}
                      control={control}
                      rules={{ required: true }}
                    />
                  </div>
                  <div>
                    <Controller
                      name="refName"
                      render={({ field }) => (
                        <Select
                          isClearable
                          value={field.value}
                          onChange={field.onChange}
                          ref={field.ref}
                          placeholder="Referral Name"
                          components={{
                            ValueContainer: CustomValueContainer,
                            IndicatorSeparator: () => null,
                          }}
                          menuPlacement="auto"
                          styles={Styles}
                          options={[
                            { value: "Olive Yew", label: "Olive Yew" },
                            { value: "Peg Legge", label: "Peg Legge" },
                            { value: "Allie Grater", label: "Allie Grater" },
                          ]}
                        />
                      )}
                      control={control}
                      rules={{ required: true }}
                    />
                  </div>
                </div>
              </div>

              {/* Time Slot */}

              <div className="w-full p-1.5 px-4 rounded-lg my-2 shadow-lg bg-white">
                {/* 1st row */}
                <div className="grid md:grid-row-1 md:grid-cols-5 gap-3">
                  <div className="md:col-span-5">
                    <h5 className="font-medium">Time Slot</h5>
                  </div>
                  <div>
                    <Controller
                      name="dept"
                      render={({ field }) => (
                        <Select
                          isClearable
                          value={field.value}
                          onChange={field.onChange}
                          ref={field.ref}
                          placeholder="Departments *"
                          components={{
                            ValueContainer: CustomValueContainer,
                            IndicatorSeparator: () => null,
                          }}
                          menuPlacement="auto"
                          styles={Styles}
                          options={[
                            { value: "cardiology", label: "Cardiology" },
                            { value: "neurology", label: "Neurology" },
                            { value: "physiotherapy", label: "Physiotherapy" },
                            {
                              value: "generalSurgery",
                              label: "General Surgery",
                            },
                          ]}
                        />
                      )}
                      control={control}
                      rules={{ required: true }}
                    />
                    <p className="text-xs text-red-500">
                      {errors.dept?.message || errors.dept?.label.message}
                    </p>
                  </div>
                  <div>
                    <Controller
                      name="subDepart"
                      render={({ field }) => (
                        <Select
                          isClearable
                          value={field.value}
                          onChange={field.onChange}
                          ref={field.ref}
                          placeholder="Sub Department"
                          components={{
                            ValueContainer: CustomValueContainer,
                            IndicatorSeparator: () => null,
                          }}
                          menuPlacement="auto"
                          styles={Styles}
                          options={[
                            { value: "subcardiology", label: "Sub Cardiology" },
                            { value: "subneurology", label: "Sub Neurology" },
                            {
                              value: "subphysiotherapy",
                              label: "Sub Physiotherapy",
                            },
                            {
                              value: "subgeneralSurgery",
                              label: "Sub General Surgery",
                            },
                          ]}
                        />
                      )}
                      control={control}
                      rules={{ required: true }}
                    />
                  </div>
                  <div>
                    <Controller
                      name="doct"
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onChange={field.onChange}
                          ref={field.ref}
                          placeholder="Doctors *"
                          components={{
                            ValueContainer: CustomValueContainer,
                            IndicatorSeparator: () => null,
                          }}
                          menuPlacement="auto"
                          styles={Styles}
                          isClearable
                          options={[
                            { value: "Olive Yew", label: "Olive Yew" },
                            { value: "Peg Legge", label: "Peg Legge" },
                            { value: "Allie Grater", label: "Allie Grater" },
                          ]}
                        />
                      )}
                      control={control}
                      rules={{ required: true }}
                    />
                    <p className="text-xs text-red-500">
                      {errors.doct?.message || errors.doct?.label.message}
                    </p>
                  </div>
                  <div>
                    <Controller
                      name="apptDate"
                      defaultValue={valueApt}
                      control={control}
                      render={({ field: { onChange, ...restField } }) => (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            disablePast
                            openTo="day"
                            label="Appointment Date"
                            inputFormat="DD/MM/YYYY"
                            onChange={(event) => {
                              onChange(event);
                              setValueApt(event);
                            }}
                            renderInput={(params) => (
                              <TextField
                                fullWidth
                                size="small"
                                {...params}
                                {...register("apptDate")}
                                error={Boolean(errors.apptDate)}
                                helperText={errors.apptDate?.message}
                              />
                            )}
                            {...restField}
                            InputProps={{
                              endAdornment: (
                                <IconButton>
                                  <EventIcon />
                                </IconButton>
                              ),
                            }}
                          />
                        </LocalizationProvider>
                      )}
                    />
                  </div>

                  {/* View Slot */}

                  <div>
                    <Modal />
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-3 my-3">
                <div>
                  <Button
                    type="reset"
                    variant="outlined"
                    color="error"
                    sx={{ textTransform: "none" }}
                    size="small"
                    onClick={() => {
                      reset(defaultValues);
                    }}
                  >
                    Reset
                  </Button>
                </div>
                <div>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ textTransform: "none" }}
                    size="small"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Form;
