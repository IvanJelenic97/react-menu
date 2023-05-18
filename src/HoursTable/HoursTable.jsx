import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    borderTop: "1px ridge",
    borderBottom: "1px ridge",
    textAlign: "left",
    height: "10px",
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "#FFFFFF",
    fontSize: 14,
    fontWeight: 700,
    border: "none",
    textAlign: "left",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Peter Thornton", 159, 6.0, 24, 4.0),
  createData("Kate Tanner", 237, 9.0, 37, 4.3),
  createData("Dori Doreau", 262, 16.0, 24, 6.0),
  createData("Devon Miles", 305, 3.7, 67, 4.3),
  createData("Angela Bower", 356, 16.0, 49, 3.9),
  createData("Devon Miles", 356, 16.0, 49, 3.9),
  createData("Mike Torello", 356, 16.0, 49, 3.9),
  createData("Max Holloway", 356, 16.0, 49, 3.9),
  createData("Dustin Poirier", 356, 16.0, 49, 3.9),
  createData("Ian Garry", 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right">SUB 24.12 - 60 sati</StyledTableCell>
            <StyledTableCell align="right">NED 25.12 - 60 sati</StyledTableCell>
            <StyledTableCell align="right">PON 26.12 - 60 sati</StyledTableCell>
            <StyledTableCell align="right">UTO 27.12 - 80 sati</StyledTableCell>
            <StyledTableCell align="right">SRI 28.12 - 80 sati</StyledTableCell>
            <StyledTableCell align="right">ČET 29.12 - 50 sati</StyledTableCell>
            <StyledTableCell align="right">PET 30.12 - 60 sati</StyledTableCell>
            <StyledTableCell align="right">SUB 31.12 - 60 sati</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
