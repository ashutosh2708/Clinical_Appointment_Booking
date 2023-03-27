import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { Button, Modal } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../Schema/FormSchema";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Styles = {
  menu: (base) => ({
    ...base,
    zIndex: 100,
  }),
};

const InvestigationModal = () => {
  const [open, setOpen] = useState(false);

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
                <h6 className="font-semibold">Investigation</h6>
              </div>
              <div className="cursor-pointer">
                <CancelPresentationIcon color="error" onClick={handleClose} />
              </div>
            </div>

            <div className="md:flex justify-between md:mx-32">
              <FormControl>
                <div className="flex gap-3 justify-start items-center">
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    Test Type:
                  </FormLabel>
                  <RadioGroup row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    // value={value}
                    // onChange={handleChange}
                  >
                    <FormControlLabel
                      value="Pathology"
                      control={<Radio size="small"/>}
                      label="pathology"
                    />
                    <FormControlLabel
                      value="Radiology"
                      control={<Radio size="small"/>}
                      label="radiology"
                    />
                  </RadioGroup>
                </div>
              </FormControl>
              
              <div className=" mb-2">
                <Controller
                  name=""
                  render={({ field }) => {
                    return (
                      <Select
                        isClearable
                        className="w-80"
                        value={field.value}
                        onChange={field.onChange}
                        ref={field.ref}
                        styles={Styles}
                        placeholder="Investigation *"
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
              <div className="text-center">
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
export default InvestigationModal;
