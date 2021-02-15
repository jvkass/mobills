import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../../components/General/title';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'space-around',
    },
    cadastroReceita: {
        flex: 1,
    },
    Button: {
        flex: 1,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1.5),
    },
}));





function CadastroReceita() {

    const [receita, setReceita] = useState('');

    const classes = useStyles();

    return (
        <React.Fragment>
            <Title>Nova receita</Title>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Valor da Receita"                   
                    type='number'
                    onChange={(e) => { setReceita(e.target.value) }}
                    value={receita}
                />
                <Button className={classes.Button}
                    variant="contained" color="primary"
                    onClick={() => 
                     
                       alert('Cadastrado a receita de ' + receita + ' R$')
                    }>
                    Cadastrar
                </Button>
            </form>

        </React.Fragment>
    );
}

export default CadastroReceita;