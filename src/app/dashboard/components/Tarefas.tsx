'use client'

import { Box, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from "@mui/material"
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function Tarefas() {
    return (
        <>
            <Box
                sx={{ 
                    display: 'flex',
                    alignItems: "flex-start",
                    justifyContent: 'space-between',
                    width: '80%',
                    height: '74vh', 
                    borderRadius: '20px',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    background: '#FFF',
                    padding: '20px', 
                    flexDirection: 'row',
                    margin: 'auto',
                    marginTop: '1.5rem'
                }}
            >
                <TableContainer>
                    <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Checkbox />
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>NOME</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>ATIVIDADE</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>PRAZO INICIAL</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>PRAZO FINAL</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <FilterAltIcon />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            sx={{
                                transition: "background-color 0.3s",
                                cursor: "pointer",
                                "&:hover": {
                                    backgroundColor: "rgba(173, 216, 230, 0.5)", // Cor de fundo azul claro transparente
                                },
                            }}
                        >
                            <TableCell>
                                <Checkbox />
                            </TableCell>
                            <TableCell>Exemplo de Nome</TableCell>
                            <TableCell>Exemplo de Atividade</TableCell>
                            <TableCell>Exemplo de Prazo Inicial</TableCell>
                            <TableCell>Exemplo de Prazo Final</TableCell>
                            <TableCell>
                                <div
                                style={{
                                    width: "20px", // Ajuste o tamanho do quadrado conforme necessário
                                    height: "20px",
                                    borderRadius: '5px',
                                    backgroundColor: 'black',
                                }}
                                ></div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}