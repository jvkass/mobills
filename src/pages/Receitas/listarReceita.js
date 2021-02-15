import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../components/General/title';

function createData(id, valor) {
  return { id, valor};
}

const rows = [
  createData(1,123),
  createData(2,155),
  createData(3,455),
  createData(4,20),
  createData(5,30),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function ListarReceita() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Receitas Recentes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell >Receita</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
                
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.valor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver mais medicos
        </Link>
      </div>
    </React.Fragment>
  );
}