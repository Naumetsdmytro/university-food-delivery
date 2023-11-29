import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';

/**
 * Renders "users list" page
 * url: /users
 */
const UsersView = () => {
  // Dummy data for the table
  const rows = [
    createData('1234', 'Client', 'John', 'Appleseed', 'jappleseed@gmail.com', '(123)4567890', '—', '—', 'Central'),
    createData(
      '1234',
      'Courier',
      'John',
      'Appleseed',
      'jappleseed@gmail.com',
      '(123)4567890',
      '01/01/1990',
      'Male',
      'Central'
    ),
  ];

  // Function to create a row of data
  function createData(UserID, Role, FirstName, LastName, Email, Phone, DOB, Gender, DeliveryRegion) {
    return { UserID, Role, FirstName, LastName, Email, Phone, DOB, Gender, DeliveryRegion };
  }

  return (
    <Grid container spacing={2}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Delivery region</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.UserID}>
                <TableCell>{row.UserID}</TableCell>
                <TableCell>{row.Role}</TableCell>
                <TableCell>{row.FirstName}</TableCell>
                <TableCell>{row.LastName}</TableCell>
                <TableCell>{row.Email}</TableCell>
                <TableCell>{row.Phone}</TableCell>
                <TableCell>{row.DOB}</TableCell>
                <TableCell>{row.Gender}</TableCell>
                <TableCell>{row.DeliveryRegion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default UsersView;
