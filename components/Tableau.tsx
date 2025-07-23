import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FiMoreHorizontal } from "react-icons/fi";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F8FAFB" ,
    color: "#75767C",
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 'semibold',
    color: "#75767C"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 1,
  },
}));

function createData(
  name: string,
  poste: string,
  email: string,
  statut: string,
  score: string,
) {
  return { name, poste, email, statut, score };
}

const rows = [
  createData('Frozen yoghurt', 'Développeur', 'Frozen@gmail.com', 'Entretien', '80%'),
  createData('RANDRIANARISON Jean Marc', 'Développeur Back-end', 'Jean@gmail.com', 'Validé', '80%'),
  createData('RANDRIANARISON Jean Marc', 'Développeur Back-end', 'Jean@gmail.com', 'Refusé', '80%'),
  createData('RANDRIANARISON Jean Marc', 'Développeur Back-end', 'Jean@gmail.com', 'En cours', '80%'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} elevation={0} sx={{ borderRadius: '8px', border: '1px solid #E5E7EB' }}>
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nom et Prénom</StyledTableCell>
            <StyledTableCell align="left">Poste</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Score</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.poste}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left"><Statut statut={row.statut} /></StyledTableCell>
              <StyledTableCell align="left">{row.score}</StyledTableCell>
              <StyledTableCell align="right"><div className='w-full flex justify-center cursor-pointer'><FiMoreHorizontal/></div></StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function Statut({statut}: {statut: string}){
  let statutType = '';
  let color = '';
  // Define the color based on the statut type
  switch (statut) {
    case 'En cours':
      statutType = '#EFF79D';
      color = '#9E8618'
      break;
    case 'Validé':
      statutType = '#A0CDBC';
      color = '#2D5D47';
      break;
    case 'Refusé':
      statutType = '#ED8687';
      color = "#973030";
      break;
    case 'Entretien':
      statutType = '#B8B3E4';
      color = '#3E3A7C';
      break;
    default:
      statutType = 'default';
      break;
  }
  // Return a styled span with the statut type color
  return (
    <span style={{ backgroundColor: statutType , color: color }} className='px-2 lg:px-4 py-2 rounded-md cursor-pointer text-[12px] lg:text-[14px] font-bold'>
      {statut}
    </span>
  );
}