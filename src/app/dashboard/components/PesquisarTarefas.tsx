'use client'

import { InputAdornment, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

export default function PesquisarTarefas({ onSearch }: any) {
    const [buscar, setBuscar] = React.useState('');

    const handleSearch = () => {
        const storedTarefas = localStorage.getItem('tarefas');
        const tarefas = storedTarefas ? JSON.parse(storedTarefas) : [];
        const usuarioLogadoString = localStorage.getItem('usuarioLogado');

        if (usuarioLogadoString !== null) {
            const usuarioLogado = JSON.parse(usuarioLogadoString);
            const userId = usuarioLogado.id;
            const tarefasDoUsuarioFiltradas = tarefas.filter((tarefa: { userId: any; titulo: string; }) =>
                tarefa.userId === userId &&
                tarefa.titulo.toLowerCase().includes(buscar.toLowerCase())
            );

            if (tarefasDoUsuarioFiltradas.length > 0) {
                localStorage.setItem('tarefaPesquisada', JSON.stringify
                (tarefasDoUsuarioFiltradas[0]));
                console.log(tarefasDoUsuarioFiltradas);
            } else {
                localStorage.setItem('tarefaPesquisada', JSON.stringify(null));
                console.log('Tarefa não encontrada.');
                localStorage.setItem('ultimaPesquisa', buscar);
            }
        }
    };
    return (
        <>
            <TextField
                label='Buscar'
                variant='outlined'
                size='small'
                value={buscar}
                onChange={(e) => setBuscar(e.target.value)}
                sx={{ 
                    width: '65%',
                    height: '40px', 
                    background: '#FFF',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    border: 'none',
                    borderColor: '#FFF',
                    margin: 'auto'
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment 
                            position='end' 
                            sx={{ cursor: 'pointer' }}
                        >
                            <Button 
                                onClick={handleSearch}
                                sx={{ 
                                    background: "transparent",
                                    border: "none", 
                                    cursor: "pointer", 
                                    padding: 0 
                                }}
                            >
                                <SearchIcon />
                            </Button>
                        </InputAdornment>
                    ),
                }}
            />
        </>
    )
}
