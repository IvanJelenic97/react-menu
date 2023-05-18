import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Button,
} from "@mui/material";
import { TableContainer } from "@mui/material";

import "../style/CustomTable.css";

const tableCellStyles = {
  padding: "10px",
  fontSize: "12px",
};

const tableRowStyles = {
  padding: "5px",
};

function CustomTable() {
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
    status: `Status ${index + 1}`,
    broj: `Broj ${index + 1}`,
    voditelj: `Voditelj ${index + 1}`,
    adresa: `Adresa ${index + 1}`,
    pocetak: `Pocetak ${index + 1}`,
    zavrsetak: `Zavrsetak ${index + 1}`,
  }));

  return (
    <>
      <div className="table-container">
        <TableContainer sx={{ maxHeight: "600px" }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#333333" }}>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  Naziv gradilišta
                </TableCell>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  Status
                </TableCell>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  Broj/Oznaka
                </TableCell>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  Voditelj
                </TableCell>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  Adresa
                </TableCell>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  Početak projekta
                </TableCell>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  Predviđeni završetak
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
                      <Button>U pripremi</Button>
                    </TableCell>
                  ) : row.id >= 9 ? (
                    <TableCell sx={tableRowStyles}>
                      <Button>Arhiva</Button>
                    </TableCell>
                  ) : (
                    <TableCell sx={tableRowStyles}>
                      <Button>Aktivno</Button>
                    </TableCell>
                  )}
                  <TableCell sx={tableRowStyles}>2022</TableCell>
                  <TableCell sx={tableRowStyles}>Pero Perić</TableCell>
                  <TableCell sx={tableRowStyles}>
                    Mala ulica 23, 10 000 Zagreb
                  </TableCell>
                  <TableCell sx={tableRowStyles}>12.10.2022.</TableCell>
                  <TableCell sx={tableRowStyles}>12.10.2023.</TableCell>
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

export default CustomTable;
