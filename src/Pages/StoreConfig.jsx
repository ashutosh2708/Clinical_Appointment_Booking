import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../Schema/FormSchema";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import SideNav from "../Components/SideNav";

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
};

const onSubmit = (data) => console.log(data);

const StoreConfig = () => {
  const storeData = {
    result: [
      {
        Unit: "Unit 1 Kothrud, pune.",
        "Store Name": "ICU",
        "Purchase Allow": "",
        "Indent Allow": "",
        "Indent To Main Unit": "",
      },

      {
        Unit: "Unit 1 Kothrud, pune.",
        "Store Name": "Operation Theater",
        "Purchase Allow": "",
        "Indent Allow": "",
        "Indent To Main Unit": "",
      },

      {
        Unit: "Unit 1 Kothrud, pune.",
        "Store Name": "Quality",
        "Purchase Allow": "",
        "Indent Allow": "",
        "Indent To Main Unit": "",
      },
      {
        Unit: "Unit 1 Kothrud, pune.",
        "Store Name": "Reception",
        "Purchase Allow": "",
        "Indent Allow": "",
        "Indent To Main Unit": "",
      },
      {
        Unit: "Unit 1 Kothrud, pune.",
        "Store Name": "Housekeeping",
        "Purchase Allow": "",
        "Indent Allow": "",
        "Indent To Main Unit": "",
      },
      {
        Unit: "Unit 2 Katraj, Pune.",
        "Store Name": "ICU",
        "Purchase Allow": "",
        "Indent Allow": "",
        "Indent To Main Unit": "",
      },
      {
        Unit: "Unit 2 Katraj, Pune.",
        "Store Name": "Operation Theater",
        "Purchase Allow": "",
        "Indent Allow": "",
        "Indent To Main Unit": "",
      },
      {
        Unit: "Unit 2 Katraj, Pune.",
        "Store Name": "Quality",
        "Purchase Allow": "",
        "Indent Allow": "",
        "Indent To Main Unit": "",
      },
      {
        Unit: "Unit 2 Katraj, Pune.",
        "Store Name": "Reception",
        "Purchase Allow": "",
        "Indent Allow": "",
        "Indent To Main Unit": "",
      },
      {
        Unit: "Unit 2 Katraj, Pune.",
        "Store Name": "Housekeeping",
        "Purchase Allow": "",
        "Indent Allow": "",
        "Indent To Main Unit": "",
      },
      {
        Unit: "Unit 2 Katraj, Pune.",
        "Store Name": "ICU",
        "Purchase Allow": "",
        "Indent Allow": "",
        "Indent To Main Unit": "",
      },
      {
        Unit: "Unit 2 Katraj, Pune.",
        "Store Name": "Operation Theater",
        "Purchase Allow": "",
        "Indent Allow": "",
        "Indent To Main Unit": "",
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
  const allHeaders = Object.keys(storeData.result[0]);
  const headers = removeHeaders(allHeaders, ["id"]);

  const {
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm({
    defaultValue: {
      unit: null,
      storeName: null,
    },
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  return (
    <div className="min-h-screen bg-[#ECEFF1]">
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          <DrawerHeader />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-2">
              <div className="text-base font-semibold my-3">
                Store Configuration
              </div>
              <div className="grid md:grid-row-1 md:grid-cols-4 gap-3 mb-3">
                <div>
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
                          placeholder="Unit"
                          components={{ IndicatorSeparator: () => null }}
                          options={[
                            { value: "pune", label: "Pune" },
                            { value: "katraj", label: "Katraj" },
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
                    name="storeName"
                    render={({ field }) => {
                      return (
                        <Select
                          isClearable
                          value={field.value}
                          onChange={field.onChange}
                          ref={field.ref}
                          styles={Styles}
                          placeholder="Store Name"
                          components={{ IndicatorSeparator: () => null }}
                          options={[
                            { value: "icu", label: "ICU" },
                            {
                              value: "operation theater",
                              label: "Operation Theater",
                            },
                            { value: "quality", label: "Quality" },
                            { value: "reception", label: "Reception" },
                            { value: "housekeeping", label: "Housekeeping" },
                          ]}
                        />
                      );
                    }}
                    control={control}
                    rules={{ required: true }}
                  />
                </div>
                <div className="mx-6">
                  <FormGroup>
                    <FormControlLabel
                      sx={{
                        "& .MuiFormControlLabel-label": { fontSize: "15px" },
                      }}
                      control={<Checkbox />}
                      label="Central Purchase Update"
                    />
                  </FormGroup>
                </div>
              </div>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Paper sx={{ width: "100%", mb: 2 }}>
                  <TableContainer>
                    <Table
                      sx={{
                        minWidth: 750,
                        border: 1,
                        borderColor: "grey.400",
                        borderRadius: 1,
                      }}
                      size="small"
                      aria-label="a dense table"
                    >
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
                        {storeData.result.map((row, index) => (
                          <TableRow key={index}>
                            {headers.map((header, i) => (
                              <TableCell key={i}>
                                {header === "Purchase Allow" ||
                                header === "Indent Allow" ||
                                header === "Indent To Main Unit" ? (
                                  <Checkbox defaultChecked />
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
                <div className="flex justify-end my-6">
                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    sx={{ textTransform: "none" }}
                    size="small"
                  >
                    Save
                  </Button>
                </div>
              </Box>
            </div>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default StoreConfig;
