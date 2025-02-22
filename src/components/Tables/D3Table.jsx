import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, Paper
} from '@mui/material';
import rows from '../../data/D3Data';

export default function MuiTable() {
    const [order, setOrder] = useState('asc');
const [orderBy, setOrderBy] = useState('count'); // Default sorting column

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(12);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10)); // Changed from 12 to 10 for consistency
    setPage(0);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) return -1;
    if (b[orderBy] > a[orderBy]) return 1;
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort(array, comparator) {
    const stabilizedArray = array.map((el, index) => [el, index]);
    stabilizedArray.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedArray.map((el) => el[0]);
  }
  

  // Styled Components
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      padding: '10px',
      fontWeight: 'bold',
      fontSize: 'clamp(12px, 1.5vw, 16px)', // Responsive font size
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 'clamp(10px, 1.2vw, 14px)', // Responsive font size
      padding: '10px',
      lineHeight: 1.5,
    },
  }));
  

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover || '#f5f5f5', // Add fallback
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

  return (
    <div className="container-fluid w3-light-gray w3-padding-64 w3-text-black  w3-margin-top">
    <div className="row">
        <div className="col">

            </div>
            <div className="col">
                
            </div>
    </div>
    
        <div className="container-fluid text-center">
        <h5 className="mb-0 fw-bold"><b>Division <span className='w3-text-black'>III</span> Schools</b></h5>
        <p className='small'>
        Schools listed were pulled direct from NCAA website.{' '}
          <a
            href="https://web3.ncaa.org/directory/memberList?type=12&division=III"
            className="mt-0 small w3-text-blue w3-hover-opacity text-decoration-underline"
          >
            web3.ncaa.org/directory
          </a>
        </p>
      </div>
      <div
  className="responsive-table-wrapper"
  style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}
>
      <TableContainer
  component={Paper}
  sx={{
    width: '100%',       // Full width for responsiveness
    maxWidth: '800px',   // Limits the max width on larger screens
    margin: '0 auto',    // Centers the table horizontally
    overflowX: 'auto',  
    fontSize:'12px', // Adds horizontal scrolling for small screens
  }}
>
        <Table aria-label="custom pagination table">
          <TableHead>
          <StyledTableRow>
  <StyledTableCell
    sx={{fontSize:'12px', textAlign: 'center', cursor: 'pointer' }}
    onClick={() => handleRequestSort('count')}
  >
    Count {orderBy === 'count' ? (order === 'asc' ? '⬆️' : '⬇️') : ''}
  </StyledTableCell>
  <StyledTableCell
    sx={{fontSize:'12px', cursor: 'pointer' }}
    onClick={() => handleRequestSort('state')}
  >
    State {orderBy === 'state' ? (order === 'asc' ? '⬆️' : '⬇️') : ''}
  </StyledTableCell>
  <StyledTableCell
    sx={{fontSize:'12px', cursor: 'pointer' }}
    onClick={() => handleRequestSort('institution')}
  >
    Institution {orderBy === 'institution' ? (order === 'asc' ? '⬆️' : '⬇️') : ''}
  </StyledTableCell>
</StyledTableRow>

         
          </TableHead>
          <TableBody>
  {stableSort(
    rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    getComparator(order, orderBy)
  ).map((row) => (
    <StyledTableRow key={row.count}>
      <StyledTableCell sx={{fontSize:'12px', padding: '7px', lineHeight: '1.1', textAlign: 'center' }}>
        {row.count}
      </StyledTableCell>
      <StyledTableCell sx={{ fontSize:'12px', padding: '7px', lineHeight: '1.1' }}>
        {row.state}
      </StyledTableCell>
      <StyledTableCell sx={{fontSize:'12px', padding: '7px', lineHeight: '1.1' }}>
        {row.institution}
      </StyledTableCell>
    </StyledTableRow>
  ))}
</TableBody>

        </Table>

        <TablePagination
          rowsPerPageOptions={[12, 24, { label: 'All', value: -1 }]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            backgroundColor: '#f5f5f5',
            padding: '10px',
            borderRadius: '5px',
            '& .MuiTablePagination-select': {
              backgroundColor: '#ffffff',
              borderRadius: '5px',
            },
            '& .MuiTablePagination-actions': {
              display: 'flex',
              justifyContent: 'center',
            },
            '& .MuiTablePagination-toolbar': {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
            '& .MuiTablePagination-selectLabel': {
              marginTop: '12px',
            },
            '& .MuiTablePagination-displayedRows': {
              marginTop: '12px',
              fontSize: '14px',
            },
            '& .MuiTablePagination-selectIcon': {
              color: '#00796b',
            },
          }}
        />
      </TableContainer>
    </div>
    </div>
  );
}
