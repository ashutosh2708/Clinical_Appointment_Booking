import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";

const Modal = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        variant="outlined"
        fullWidth
        color="inherit"
      >
        View Slots
      </Button>
      <Dialog open={open} maxWidth="auto" onClose={handleClose}>
        <div className="grid grid-cols-2 ml-4 md:mx-6 my-2">
          <div>
            <Typography sx={{ fontWeight: "medium" }} variant="h6" gutterBottom>
              Select Time Slot
            </Typography>
          </div>
          <div className="text-end mr-4">
            <Typography variant="h6" gutterBottom>
              <EventIcon />
              12-12-2022
            </Typography>
          </div>

          <div className="col-span-2 text-center">
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
              >
                <FormControlLabel
                  value="selected"
                  control={<Radio size="small" />}
                  label="Selected"
                />
                <FormControlLabel
                  value="available"
                  control={<Radio size="small" />}
                  label="Available"
                />
                <FormControlLabel
                  value="unavailable"
                  control={<Radio size="small" />}
                  label="Unavailable"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <DialogContent>
          <Box component="form">
            <div className="grid grid-rows-2 grid-cols-3 md:grid-cols-5 gap-3">
              <div>
                <Button variant="outlined">08:30 AM</Button>
              </div>
              <div>
                <Button variant="outlined">08:45 AM</Button>
              </div>
              <div>
                <Button variant="outlined">09:00 AM</Button>
              </div>
              <div>
                <Button variant="outlined">09:15 AM</Button>
              </div>
              <div>
                <Button variant="outlined">09:30 AM</Button>
              </div>
            </div>
          </Box>
        </DialogContent>
        <DialogActions sx={{ mr: 2, mb: 1 }}>
          <Button
            size="small"
            sx={{ textTransform: "none" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            size="small"
            sx={{ textTransform: "none" }}
            onClick={handleClose}
            variant="outlined"
          >
            Procced
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Modal;
