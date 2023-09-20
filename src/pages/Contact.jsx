import React from "react";
import Layout from "../component/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Paper,
} from "@mui/material";
const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 10,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
            color: "goldenrod",
            borderBottom: "2px solid black",
            width: "35%",
          },
          "@media (max-width:600px)": {
            ml: 5,
            my: 5,
            "& h4": {
              width: "100%",
            },
          },
        }}
      >
        <Typography variant="h4">Contact My Resturant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eos
          est nobis sed sit corrupti asperiores voluptatibus praesentium illo
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eos
          laborum.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          marginLeft: 10,
          "@media (max-width:600px)": {
            width: "300px",
            marginLeft: 5,
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    textAlign: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  Contact Detail
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                    1800-00-0000(tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <EmailIcon sx={{ color: "red", pt: 1 }} />
                    anshul@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <AddIcCallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                  </TableCell>
                </TableRow>
              </TableBody>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
