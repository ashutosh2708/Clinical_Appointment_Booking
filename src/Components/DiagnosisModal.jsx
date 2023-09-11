import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  TextField,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../Schema/FormSchema";

const Styles = {
  menu: (base) => ({
    ...base,
    zIndex: 100,
  }),
};

const DiagnosisModal = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const {
    control,
  } = useForm({
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
        <div className="w-full md:mx-16 mx-10 bg-white">
          <div className="border m-8 p-3">
            <div className="flex justify-between mb-2">
              <div>
                <h6 className="font-semibold">Diagnosis</h6>
              </div>
              <div className="cursor-pointer">
                <CancelPresentationIcon color="error" onClick={handleClose} />
              </div>
            </div>
            <div className="md:flex gap-3">
              <div className="flex-1 mb-2">
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
                        placeholder="ICD Code *"
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
              <div className="flex-1 mb-2">
                <TextField
                  name=""
                  fullWidth
                  size="small"
                  id=""
                  variant="outlined"
                  label="Since"
                />
              </div>
              <div className="flex-1 mb-2">
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
                        placeholder="Duration *"
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
              <div className="flex-1 mb-2">
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
                        placeholder="Status *"
                        components={{ IndicatorSeparator: () => null }}
                        options={[
                          { value: "provisional", label: "Provisional" },
                          { value: "final", label: "Final" },
                        ]}
                      />
                    );
                  }}
                  control={control}
                  rules={{ required: true }}
                />
              </div>
              <div className="flex-1 mb-2">
                <FormGroup>
                  <FormControlLabel
                    sx={{
                      "& .MuiFormControlLabel-label": { fontSize: "15px" },
                    }}
                    control={<Checkbox size="small"/>}
                    label="Chronic"
                  />
                </FormGroup>
              </div>
              <div className="flex-none text-center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ textTransform: "none" }}
                  style={{ backgroundColor: "#0B83A5" }}
                  //   size="small"
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

export default DiagnosisModal;
