import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { Button, Modal, TextField } from "@mui/material";
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

const AllergiesModal = () => {
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
                <h6 className="font-semibold">Allergies</h6>
              </div>
              <div className="cursor-pointer">
                <CancelPresentationIcon color="error" onClick={handleClose} />
              </div>
            </div>
            <div className="md:flex gap-3 md:mx-16">
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
                        placeholder="Allergies Type *"
                        components={{ IndicatorSeparator: () => null }}
                        options={[
                          { value: "dustMites", label: "Dust mites" },
                          { value: "molds", label: "Molds" },
                          { value: "animalDander", label: "Animal dander" },
                          { value: "latex", label: "Latex" },
                          { value: "certainFood", label: "Certain food" },

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
                  label="Allergies Description *"
                />
              </div>
              <div className="flex-none text-center">
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

export default AllergiesModal;
