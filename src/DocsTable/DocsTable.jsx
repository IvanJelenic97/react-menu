import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Button,
  IconButton,
} from "@mui/material";
import { TableContainer } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import "../DocsTable/DocsTable.css";

const tableCellStyles = {
  padding: "10px",
  fontSize: "14px",
};

const tableRowStyles = {
  padding: "5px",
};

function DocsTable() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows = Array.from(Array(10)).map((_, index) => ({
    id: index + 1,
    datum: `Status ${index + 1}`,
    oznake: `Broj ${index + 1}`,
    voditelj: `Dodao ${index + 1}`,
    empty: ``,
  }));

  return (
    <>
      <div className="table-container">
        <TableContainer sx={{ maxHeight: "600px" }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#333333" }}>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  Naziv dokumenta
                </TableCell>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  <IconButton
                    id="iconbutton"
                    size="small"
                    sx={{ color: "white" }}
                  >
                    <ArrowDownwardIcon />
                  </IconButton>
                  Status
                </TableCell>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  <IconButton
                    id="iconbutton"
                    size="small"
                    sx={{ color: "white" }}
                  >
                    <ArrowDownwardIcon />
                  </IconButton>
                  Broj/Oznaka
                </TableCell>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  <IconButton
                    id="iconbutton"
                    size="small"
                    sx={{ color: "white" }}
                  >
                    <ArrowDownwardIcon />
                  </IconButton>
                  Voditelj
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow key={row.id} sx={tableRowStyles}>
                  <TableCell>Gradilište {row.id}</TableCell>
                  {row.id === 2 ? (
                    <TableCell sx={tableRowStyles}>
                      <Button
                        sx={{
                          backgroundColor: "#FFC436",
                          color: "white",
                          borderRadius: "18px",
                          width: "100px",
                          height: "24px",
                        }}
                        size="small"
                      >
                        U pripremi
                      </Button>
                    </TableCell>
                  ) : row.id >= 9 ? (
                    <TableCell sx={tableRowStyles}>
                      <Button
                        sx={{
                          backgroundColor: "#03B800",
                          color: "white",
                          borderRadius: "18px",
                          width: "100px",
                          height: "24px",
                        }}
                        size="small"
                      >
                        Završeno
                      </Button>
                    </TableCell>
                  ) : (
                    <TableCell sx={tableRowStyles}>{row.datum}</TableCell>
                  )}
                  <TableCell sx={tableRowStyles}>{row.oznake}</TableCell>
                  <TableCell sx={tableRowStyles}>{row.voditelj}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
}

export default DocsTable;
