import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import SideNav from "../Components/SideNav";
import Grid from "@mui/material/Grid";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <DrawerHeader />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <div className="bg-white p-2 rounded-md border">
                <div className="flex items-center gap-x-2 mb-6">
                  <ArrowCircleUpOutlinedIcon sx={{ color: "#43a047" }} />
                  <h5 className="text-green-600">Total Patient</h5>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h5 className="font-bold text-gray-600 ml-8">845</h5>
                  </div>
                  <div>
                    <h6 className="text-green-600 text-sm">+ 3.58%</h6>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="bg-white p-2 rounded-md border">
                <div className="flex items-center gap-x-2 mb-6">
                  <ArrowCircleUpOutlinedIcon sx={{ color: "#43a047" }} />
                  <h5 className="text-green-600">Total Departments</h5>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h5 className="font-bold text-gray-600 ml-8">56</h5>
                  </div>
                  <div>
                    <h6 className="text-green-600 text-sm">+ 55.58%</h6>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="bg-white p-2 rounded-md border">
                <div className="flex items-center gap-x-2 mb-6">
                  <ArrowCircleDownIcon sx={{ color: "#f44336" }} />
                  <h5 className="text-red-500 ">Total Referral</h5>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h5 className="font-bold text-gray-600 ml-8">15</h5>
                  </div>
                  <div>
                    <h6 className="text-red-500 text-sm">- 3.58%</h6>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="bg-white p-2 rounded-md border">
                <div className="flex items-center gap-x-2 mb-6">
                  <ArrowCircleUpOutlinedIcon sx={{ color: "#43a047" }} />
                  <h5 className="text-green-600">Store Config</h5>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h5 className="font-bold text-gray-600 ml-8">454</h5>
                  </div>
                  <div>
                    <h6 className="text-green-600 text-sm">+ 35.58%</h6>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={9}>
              <div
                style={{ width: "100%", height: 500 }}
                className="bg-white p-2 rounded-md border"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={100}
                    data={data}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar barSize={50} dataKey="pv" stackId="a" fill="#8884d8" />
                    <Bar barSize={50} dataKey="uv" stackId="a" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="bg-white h-[500px] rounded-md border">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Accordion 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Accordion 2</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Accordion 3</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
