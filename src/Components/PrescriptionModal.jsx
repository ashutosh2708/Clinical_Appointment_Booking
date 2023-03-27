import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { Button, Modal, TextField, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../Schema/FormSchema";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import EventIcon from "@mui/icons-material/Event";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const Styles = {
  menu: (base) => ({
    ...base,
    zIndex: 100,
  }),
};

const PrescriptionModal = () => {
  const [open, setOpen] = useState(false);
  const [valueDob, setValueDob] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const {
    // handleSubmit,
    control,
    // formState: { errors },
  } = useForm({
    // defaultValue: {
    //   unit: null,
    //   storeName: null,
    // },
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  return (
    <>
      <div className="cursor-pointer">
        <AddCircleIcon color="primary" onClick={handleClickOpen} />
      </div>
      <Modal
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={open}
        onClose={handleClose}
      >
        <div className="w-full md:mx-32 mx-10 bg-white">
          <div className="border m-8 p-3">
            <div className="flex justify-between mb-2">
              <div>
                <h6 className="font-semibold">Prescription</h6>
              </div>
              <div className="flex gap-2">
                <div className="mx-6">
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      px:4
                    }}
                  >
                    Copy Prescription
                  </Button>
                </div>
                <div className="cursor-pointer">
                  <CancelPresentationIcon color="error" onClick={handleClose} />
                </div>
              </div>
            </div>

            <div className="grid md:grid-rows-3 md:grid-cols-4 gap-2">
              <div className="flex gap-3 justify-start items-center">
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Brand Name"
                      control={<Radio size="small" />}
                      label="brandName"
                    />
                    <FormControlLabel
                      value="Generic"
                      control={<Radio size="small" />}
                      label="generic"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div>
                <Controller
                  name=""
                  render={({ field }) => {
                    return (
                      <Select
                        isClearable
                        value={field.value}
                        onChange={field.onChange}
                        ref={field.ref}
                        styles={Styles}
                        placeholder="Drug Name*"
                        components={{ IndicatorSeparator: () => null }}
                        options={[
                          { value: "aaa", label: "aaa" },
                          { value: "bbb", label: "bbb" },
                          { value: "aaa", label: "aaa" },
                          { value: "bbb", label: "bbb" },
                        ]}
                      />
                    );
                  }}
                  control={control}
                  rules={{ required: true }}
                />
              </div>
              <div>
                <Controller
                  name=""
                  render={({ field }) => {
                    return (
                      <Select
                        isClearable
                        value={field.value}
                        onChange={field.onChange}
                        ref={field.ref}
                        styles={Styles}
                        placeholder="Frequency*"
                        components={{ IndicatorSeparator: () => null }}
                        options={[
                          { value: "aaa", label: "aaa" },
                          { value: "bbb", label: "bbb" },
                          { value: "aaa", label: "aaa" },
                          { value: "bbb", label: "bbb" },
                        ]}
                      />
                    );
                  }}
                  control={control}
                  rules={{ required: true }}
                />
              </div>
              <div>
                <TextField
                  name=""
                  fullWidth
                  size="small"
                  id=""
                  variant="outlined"
                  label="Dosage"
                />
              </div>
              <div>
                <Controller
                  name=""
                  render={({ field }) => {
                    return (
                      <Select
                        isClearable
                        value={field.value}
                        onChange={field.onChange}
                        ref={field.ref}
                        styles={Styles}
                        placeholder="Instruction*"
                        components={{ IndicatorSeparator: () => null }}
                        options={[
                          { value: "aaa", label: "aaa" },
                          { value: "bbb", label: "bbb" },
                          { value: "aaa", label: "aaa" },
                          { value: "bbb", label: "bbb" },
                        ]}
                      />
                    );
                  }}
                  control={control}
                  rules={{ required: true }}
                />
              </div>
              <div>
                <TextField
                  name=""
                  fullWidth
                  size="small"
                  id=""
                  variant="outlined"
                  label="Duration"
                  defaultValue={0}
                />
              </div>
              <div>
                <Controller
                  name=""
                  render={({ field }) => {
                    return (
                      <Select
                        isClearable
                        value={field.value}
                        onChange={field.onChange}
                        ref={field.ref}
                        styles={Styles}
                        placeholder="Duration In"
                        components={{ IndicatorSeparator: () => null }}
                        options={[
                          { value: "days", label: "Days" },
                          { value: "months", label: "Months" },
                          { value: "years", label: "Years" },
                        ]}
                      />
                    );
                  }}
                  control={control}
                  rules={{ required: true }}
                />
              </div>
              <div>
                <TextField
                  name=""
                  fullWidth
                  size="small"
                  id=""
                  variant="outlined"
                  label="Quantity*"
                />
              </div>
              <div>
                <Controller
                  name=""
                  render={({ field }) => {
                    return (
                      <Select
                        isClearable
                        value={field.value}
                        onChange={field.onChange}
                        ref={field.ref}
                        styles={Styles}
                        placeholder="Route*"
                        components={{ IndicatorSeparator: () => null }}
                        options={[
                          { value: "oral", label: "ORAL" },
                          { value: "im", label: "IM" },
                          { value: "iv", label: "IV" },
                          { value: "localApplication", label: "LOCAL APPLICATION" },
                          { value: "sc", label: "S/C" },
                          { value: "selectRoute", label: "Select Route" },
                          { value: "rectal", label: "RECTAL" },
                          { value: "nasal", label: "NASAL" },
                          { value: "vaginalUse", label: "VAGINAL USE" },
                          { value: "ngt", label: "NGT" },
                          { value: "ear", label: "ear" },
                          { value: "sublingual", label: "Sublingual" },
                          { value: "peg", label: "PEG" },
                          { value: "other", label: "OTHER" },
                        ]}
                      />
                    );
                  }}
                  control={control}
                  rules={{ required: true }}
                />
              </div>
              <div>
                <TextField
                  name=""
                  fullWidth
                  size="small"
                  id=""
                  variant="outlined"
                  label="IV-Flow-Rate"
                />
              </div>
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    disablePast
                    openTo="day"
                    label="Start Date"
                    inputFormat="DD/MM/YYYY"
                    value={valueDob}
                    onChange={(newValue) => {
                      setValueDob(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField fullWidth size="small" {...params} />
                    )}
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <EventIcon />
                        </IconButton>
                      ),
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ textTransform: "none" }}
                  style={{ backgroundColor: "#0B83A5" }}
                  // size="small"
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PrescriptionModal;
