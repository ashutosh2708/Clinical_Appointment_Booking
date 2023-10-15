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

const DocumentsModal = () => {
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
        maxwidth="auto"
        onClose={handleClose}
      >
        <div className="w-full md:mx-24 mx-10 bg-white">
          <div className="border m-8 p-3">
            <div className="flex justify-between mb-2">
              <div>
                <h6 className="font-semibold">Documents</h6>
              </div>
              <div className="cursor-pointer">
                <CancelPresentationIcon color="error" onClick={handleClose} />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="md:flex gap-3">
                <div className="w-72 mb-2">
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    label="Document Name *"
                  />
                </div>
                <div className="w-72 mb-2">
                  <Controller
                    render={({ field }) => {
                      return (
                        <Select
                          isClearable
                          value={field.value}
                          onChange={field.onChange}
                          ref={field.ref}
                          styles={Styles}
                          placeholder="Document Type *"
                          components={{ IndicatorSeparator: () => null }}
                          options={[
                            { value: "bloodReport", label: "Blood Report" },
                            { value: "sugarReport", label: "Sugar Report" },
                            { value: "bpReport", label: "BP Report" },
                          ]}
                        />
                      );
                    }}
                    control={control}
                    rules={{ required: true }}
                  />
                </div>
                <div>
                  <input
                    style={{ display: "none" }}
                    id="contained-button-file"
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="outlined"
                      component="span"
                      sx={{
                        color: "gray",
                        border: "solid",
                        borderWidth: 1,
                        px: 10,
                      }}
                    >
                      Upload Docs
                    </Button>
                  </label>
                </div>
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
          <div className="flex justify-end mr-8 -mt-6 mb-4 gap-2">
            <div>
              <Button
                type="submit"
                variant="outlined"
                sx={{ textTransform: "none", color: "Black" }}
                color="error"
                // size="small"
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
            <div className="">
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ textTransform: "none" }}
                // size="small"
                onClick={handleClose}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DocumentsModal;
