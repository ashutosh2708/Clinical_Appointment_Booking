import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import AllergiesModal from "../Components/AllergiesModal";
import DocumentsModal from "../Components/DocumentsModal";
import ComplaintModal from "../Components/ComplaintModal";
import SymptomsModal from "../Components/SymptomsModal";
import DiagnosisModal from "../Components/DiagnosisModal";
import InvestigationModal from "../Components/InvestigationModal";
import PrescriptionModal from "../Components/PrescriptionModal";
import ServicesModal from "../Components/ServicesModal";
import { styled } from "@mui/material/styles";
import SideNav from "../Components/SideNav";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Services = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const bmi = () => (weight / (height * height)) * 10000;

  const visitData = {
    result: [
      {
        Select: "",
        Date: "01/02/2022",
        "IPD/OPD": "OPD",
        Location: "OPD Hospital,Mumbai.",
        "Dr.Name": "Dr.Mark F. Barry",
      },
      {
        Select: "",
        Date: "01/02/2021",
        "IPD/OPD": "OPD",
        Location: "OPD Hospital,Mumbai.",
        "Dr.Name": "Dr.Mark F. Barry",
      },
      {
        Select: "",
        Date: "01/02/2020",
        "IPD/OPD": "OPD",
        Location: "OPD Hospital,Mumbai.",
        "Dr.Name": "Dr.Mark F. Barry",
      },
      {
        Select: "",
        Date: "01/02/2022",
        "IPD/OPD": "OPD",
        Location: "OPD Hospital,Mumbai.",
        "Dr.Name": "Dr.Mark F. Barry",
      },
      {
        Select: "",
        Date: "01/02/2021",
        "IPD/OPD": "OPD",
        Location: "OPD Hospital,Mumbai.",
        "Dr.Name": "Dr.Mark F. Barry",
      },
      {
        Select: "",
        Date: "01/02/2020",
        "IPD/OPD": "OPD",
        Location: "OPD Hospital,Mumbai.",
        "Dr.Name": "Dr.Mark F. Barry",
      },
    ],
    activeCode: 200,
    count: 5,
  };

  const removeHeaders = (headers, fieldToRemove) => {
    return headers.filter((v) => {
      return !fieldToRemove.includes(v);
    });
  };

  const allHeaders = Object.keys(visitData.result[0]);
  const headers = removeHeaders(allHeaders, ["id"]);

  return (
    <div className="min-h-screen bg-[#ECEFF1]">
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          <DrawerHeader />

          {/* Header */}
          <div className="w-full p-4 px-4 rounded-lg mt-4 border shadow-lg bg-white">
            <div className="grid md:grid-rows-1 md:grid-cols-4">
              <div className="flex md:border-r-2 border-gray-400">
                <div>
                  <Avatar
                    alt="Travis Howard"
                    src="/Images/avtar1.jpg"
                    sx={{ width: 70, height: 70 }}
                  />
                </div>
                <div className="px-6 mt-2">
                  <h6 className="font-semibold">Courtney Hanery</h6>
                  <h6 className="text-gray-600">
                    <LocationOnIcon style={{ color: "#0B83A5" }} />
                    Kothrud,Pune.
                  </h6>
                </div>
                <div className="mt-2">
                  <h6 className="text-gray-600">(M)</h6>
                </div>
              </div>
              <div className="md:border-r-2 border-gray-400 p-4">
                <h6 className="text-gray-600">DOB:01/09/1998</h6>
                <h6 className="text-gray-600">
                  Age:23 Years 02 Months 04 Days.
                </h6>
              </div>
              <div className="md:border-r-2 border-gray-400 p-4">
                <h6 className="text-gray-600">UHID:1-23155455</h6>
              </div>
              <div className="p-4">
                <h6 className="text-gray-600">
                  <MailIcon style={{ color: "#0B83A5", marginRight: 10 }} />
                  abc@gmail.com
                </h6>
                <h6 className="text-gray-600">
                  <CallIcon style={{ color: "#0B83A5", marginRight: 10 }} />
                  +91 0123456789
                </h6>
              </div>
            </div>
          </div>
          <div className="my-4 ml-1">
            <h2 className="font-semibold">Electronic Medical Record (EMR)</h2>
          </div>
          {/* EMR section */}
          <div className="w-full p-6 px-4 rounded-lg mt-4 border shadow-lg bg-white">
            <div className="grid md:grid-row-1 md:grid-cols-5 gap-3">
              <div className="md:col-span-5">
                <h6 className="font-semibold text-sm bg-pink-200 py-2 px-4">
                  Vitals
                </h6>
              </div>
              <div className="flex justify-between">
                <h6 className="flex items-center text-gray-600">Temp:</h6>
                <TextField
                  sx={{ width: 130 }}
                  inputProps={{ inputmode: "numeric", pattern: "[0-9]*" }}
                  id="outlined-basic"
                  size="small"
                  label="°F"
                  variant="outlined"
                />
              </div>
              <div className="flex justify-between">
                <h6 className="flex items-center text-gray-600">Pulse rate:</h6>
                <TextField
                  sx={{ width: 130 }}
                  inputProps={{ maxLength: 3 }}
                  id="outlined-basic"
                  size="small"
                  label="bpm"
                  variant="outlined"
                />
              </div>
              <div className="flex justify-between">
                <h6 className="flex items-center text-gray-600">
                  BP (Systolic):
                </h6>
                <TextField
                  sx={{ width: 130 }}
                  inputProps={{ maxLength: 3 }}
                  id="outlined-basic"
                  size="small"
                  label="mm"
                  variant="outlined"
                />
              </div>
              <div className="flex justify-between">
                <h6 className="flex items-center text-gray-600">
                  BP (Diastolic):
                </h6>
                <TextField
                  sx={{ width: 130 }}
                  inputProps={{ maxLength: 3 }}
                  id="outlined-basic"
                  size="small"
                  label="mm"
                  variant="outlined"
                />
              </div>
              <div className="flex justify-between">
                <h6 className="flex items-center text-gray-600">SpO2:</h6>
                <TextField
                  sx={{ width: 130 }}
                  inputProps={{ maxLength: 3 }}
                  id="outlined-basic"
                  size="small"
                  label="%"
                  variant="outlined"
                />
              </div>
              <div className="flex justify-between">
                <h6 className="flex items-center text-gray-600">Weight:</h6>
                <TextField
                  sx={{ width: 130 }}
                  inputProps={{ maxLength: 3 }}
                  id="outlined-basic"
                  size="small"
                  label="kg"
                  variant="outlined"
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <h5 className="flex items-center text-gray-600">Height:</h5>
                <TextField
                  sx={{ width: 130 }}
                  inputProps={{ maxLength: 3 }}
                  id="outlined-basic"
                  size="small"
                  label="cm"
                  variant="outlined"
                  value={height}
                  onChange={(event) => setHeight(event.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <h6 className="flex items-center text-gray-600">BMI:</h6>
                <TextField
                  sx={{ width: 130 }}
                  inputProps={{ maxLength: 3 }}
                  value={bmi()}
                  // {bmi() ? bmi() : null}
                  id="outlined-basic"
                  size="small"
                  label="kg/m2"
                  variant="outlined"
                />
              </div>
              <div className="flex justify-between">
                <h5 className="flex items-center text-gray-600">
                  Respiration:
                </h5>
                <TextField
                  sx={{ width: 130 }}
                  inputProps={{ maxLength: 3 }}
                  id="outlined-basic"
                  size="small"
                  label="per"
                  variant="outlined"
                />
              </div>
              <div className="flex justify-between">
                <h6 className="flex items-center text-gray-600">BSL:</h6>
                <TextField
                  sx={{ width: 130 }}
                  inputProps={{ maxLength: 3 }}
                  id="outlined-basic"
                  size="small"
                  label="cm"
                  variant="outlined"
                />
              </div>
            </div>
          </div>
          {/* Visits */}
          <div className="grid md:grid-rows-1 md:grid-cols-2 gap-3 mt-3">
            <div className="border shadow-lg bg-white">
              <h6 className="font-semibold text-sm bg-orange-200 py-2 p-4">
                Visits
              </h6>
              <div className="grid w-[100%] border">
                <Box sx={{ width: "100%", overflow: "hidden" }}>
                  <Paper sx={{ width: "100%" }}>
                    <TableContainer
                      sx={{
                        height: 225,
                        width: "auto",
                      }}
                    >
                      <Table stickyHeader size="small">
                        <TableHead>
                          <TableRow
                            sx={{
                              bgcolor: "#eeeeee",
                            }}
                          >
                            {headers.map((header, index) => (
                              <TableCell sx={{ fontWeight: 600 }} key={index}>
                                {header}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {visitData.result.map((row, index) => (
                            <TableRow key={index}>
                              {headers.map((header, i) => (
                                <TableCell key={i}>
                                  {header === "Select" ? (
                                    <Checkbox size="small" />
                                  ) : (
                                    ""
                                  )}
                                  <span>{row[header]}</span>
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Paper>
                </Box>
              </div>
            </div>

            {/* Past History */}

            <div className="border shadow-lg bg-white">
              <h6 className="font-semibold text-sm bg-lime-200 py-2 p-4">
                Past History
              </h6>
              <FormGroup>
                <div className="grid md:grid-rows-1 md:grid-cols-2 gap-3 p-4">
                  <div className="flex justify-between">
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label="DM"
                    />
                    <TextField
                      sx={{ width: 130 }}
                      size="small"
                      placeholder="Description"
                    />
                  </div>
                  <div className="flex justify-between">
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label="HTN"
                    />
                    <TextField
                      sx={{ width: 130 }}
                      size="small"
                      placeholder="Description"
                    />
                  </div>
                  <div className="flex justify-between">
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label="Heart Disease"
                    />
                    <TextField
                      sx={{ width: 130 }}
                      size="small"
                      placeholder="Description"
                    />
                  </div>
                  <div className="flex justify-between">
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label="TB"
                    />
                    <TextField
                      sx={{ width: 130 }}
                      size="small"
                      placeholder="Description"
                    />
                  </div>
                  <div className="flex justify-between">
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label="COPD"
                    />
                    <TextField
                      sx={{ width: 130 }}
                      size="small"
                      placeholder="Description"
                    />
                  </div>
                  <div className="flex justify-between">
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label="Asthama"
                    />
                    <TextField
                      sx={{ width: 130 }}
                      size="small"
                      placeholder="Description"
                    />
                  </div>
                  <div className="flex justify-between">
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label="Liver"
                    />
                    <TextField
                      sx={{ width: 130 }}
                      size="small"
                      placeholder="Description"
                    />
                  </div>
                  <div className="flex justify-between">
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label="Other"
                    />
                    <TextField
                      sx={{ width: 130 }}
                      size="small"
                      placeholder="Description"
                    />
                  </div>
                </div>
              </FormGroup>
            </div>
          </div>

          {/* Allergies */}

          <div className="grid md:grid-rows-2 md:grid-flow-col gap-3 mt-3">
            <div className="border shadow-lg bg-white md:row-span-2">
              <h6 className="font-semibold text-sm bg-sky-200 py-2 p-4 flex justify-between">
                Allergies
                <div>
                  <AllergiesModal />
                </div>
              </h6>
              <div className="m-4">
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  fullWidth
                  rows={4}
                  placeholder="Add Allergies"
                />
              </div>
            </div>

            {/* Surgical History */}

            <div className="border shadow-lg bg-white md:col-span-1">
              <h6 className="font-semibold text-sm bg-indigo-200 py-2 p-4 flex justify-between">
                Surgical History
              </h6>
              <div className="m-4">
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  fullWidth
                  rows={4}
                  placeholder="Add Surgical History"
                />
              </div>
            </div>

            {/* Documents */}

            <div className="border shadow-lg bg-white md:col-span-1">
              <h6 className="font-semibold text-sm bg-amber-200 py-2 p-4 flex justify-between">
                Documents
                <div>
                  <DocumentsModal />
                </div>
              </h6>
            </div>
          </div>

          {/* Complaints */}

          <div className="grid md:grid-rows-1 md:grid-flow-col gap-3 mt-3">
            <div className="border shadow-lg bg-white">
              <h6 className="font-semibold text-sm bg-red-200 py-2 p-4 flex justify-between">
                Complaints
                <div className="cursor-pointer">
                  <ComplaintModal />
                </div>
              </h6>
              <div className="m-4">
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  fullWidth
                  rows={4}
                  placeholder="Add Complaints"
                />
              </div>
            </div>

            {/* Symptoms */}

            <div className="border shadow-lg bg-white">
              <h6 className="font-semibold text-sm bg-lime-200 py-2 p-4 flex justify-between">
                Symptoms
                <div className="cursor-pointer">
                  <SymptomsModal />
                </div>
              </h6>
              <div className="m-4">
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  fullWidth
                  rows={4}
                  placeholder="Add Symptoms"
                />
              </div>
            </div>

            {/* Local Examination */}

            <div className="border shadow-lg bg-white">
              <h6 className="font-semibold text-sm bg-violet-200 py-2 p-4 flex justify-between">
                Local Examination
              </h6>
              <div className="m-4">
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  fullWidth
                  rows={4}
                  placeholder="Add Symptoms"
                />
              </div>
            </div>
          </div>

          {/* Diagnosis */}

          <div className="grid md:grid-row-2 md:grid-cols-2 gap-3 mt-3">
            <div className="border shadow-lg bg-white">
              <h6 className="font-semibold text-sm bg-purple-200 py-2 p-4 flex justify-between">
                Diagnosis (ICD)
                <div className="cursor-pointer">
                  <DiagnosisModal />
                </div>
              </h6>
              <div className="m-4">
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  fullWidth
                  rows={4}
                  placeholder="Add Symptoms"
                />
              </div>
            </div>

            {/* Investigation */}

            <div className="border shadow-lg bg-white">
              <h6 className="font-semibold text-sm bg-rose-200 py-2 p-4 flex justify-between">
                Investigation
                <div className="cursor-pointer">
                  <InvestigationModal />
                </div>
              </h6>
              <div className="m-4">
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  fullWidth
                  rows={4}
                  placeholder="Add Symptoms"
                />
              </div>
            </div>

            {/* Services */}

            <div className="border shadow-lg bg-white">
              <h6 className="font-semibold text-sm bg-fuchsia-200 py-2 p-4 flex justify-between">
                Services
                <div className="cursor-pointer">
                  <ServicesModal />
                </div>
              </h6>
              <div className="m-4">
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  fullWidth
                  rows={4}
                  placeholder="Add Symptoms"
                />
              </div>
            </div>

            {/* Prescription */}

            <div className="border shadow-lg bg-white">
              <h6 className="font-semibold text-sm bg-violet-200 py-2 p-4 flex justify-between">
                Prescription
                <div className="cursor-pointer">
                  <PrescriptionModal />
                </div>
              </h6>
              <div className="m-4">
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  fullWidth
                  rows={4}
                  placeholder="Add Symptoms"
                />
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Services;
