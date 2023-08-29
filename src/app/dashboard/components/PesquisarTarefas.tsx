'use client'

import { InputAdornment, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

export default function PesquisarTarefas({ onSearch }: any) {
    const [buscar, setBuscar] = React.useState('');

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
