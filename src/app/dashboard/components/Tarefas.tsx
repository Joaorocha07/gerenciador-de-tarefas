'use client'

import { Box, Checkbox, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from "@mui/material"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import React, { useEffect } from "react";
import { Tarefa } from "@/types/tarefa";
import ModalVisuTarefas from "./ModalVisuTarefas";

export default function Tarefas() {
    const [tarefas, setTarefas] = React.useState<Tarefa[]>([]);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [paginaAtual, setPaginaAtual] = React.useState(1);
    const [tarefaSelecionada, setTarefaSelecionada] = React.useState<Tarefa | null>(null);
    const tarefasPorPagina = 7;

    const openModal = (tarefa: Tarefa): void => {
        setTarefaSelecionada(tarefa);
        setIsModalOpen(true)
    }
    
    const closeModal = (): void => {
        setTarefaSelecionada(null);
        setIsModalOpen(false)
    }

    // useEffect(() => {
    //     const storedTarefas = localStorage.getItem('tarefas');
    //     if (storedTarefas) {
    //         setTarefas(JSON.parse(storedTarefas));
    //     }
    // }, [tarefas]);

    useEffect(() => {
        const storedTarefas = localStorage.getItem('tarefas');
        if (storedTarefas) {
            setTarefas(JSON.parse(storedTarefas));
        }

        const intervalId = setInterval(() => {
            const storedTarefas = localStorage.getItem('tarefas');
            if (storedTarefas) {
                setTarefas(JSON.parse(storedTarefas));
            }
        }, 600); 

        return () => clearInterval(intervalId);
    }, []);

    function extrairPrimeiras4Palavras(texto: string): string {
        const palavras = texto.split(' ');
        const primeiras4Palavras = palavras.slice(0, 4).join(' ');
        return primeiras4Palavras;
    }

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setPaginaAtual(page);
    };

    const renderTarefas = (): any => {
        const listaIncial = (paginaAtual - 1) * tarefasPorPagina;
        const listaFinal = Math.min(listaIncial + tarefasPorPagina, tarefas.length);

        const usuarioLogadoString = localStorage.getItem('usuarioLogado');

        if (usuarioLogadoString !== null) {

            const usuarioLogado = JSON.parse(usuarioLogadoString);

            const tarefasDoUsuarioLogado = tarefas.filter(tarefa => tarefa.userId === usuarioLogado.id);

            return tarefasDoUsuarioLogado.slice(listaIncial, listaFinal).map((tarefa) => (
                    <TableRow
                        key={tarefa.id}
                        onClick={() => openModal(tarefa)}
                        sx={{
                            transition: "background-color 0.3s",
                            cursor: "pointer",
                            "&:hover": {
                                backgroundColor: "rgba(173, 216, 230, 0.5)", 
                            },
                        }}
                    >
                        {isModalOpen && (
                            <ModalVisuTarefas isOpen={isModalOpen} onClose={closeModal} tarefaSelecionada={tarefaSelecionada} />
                        )}
                        <TableCell>
                            <Checkbox />
                        </TableCell>
                        <TableCell>{tarefa.titulo}</TableCell>
                        <TableCell>{extrairPrimeiras4Palavras(tarefa.conteudo)}</TableCell>
                        <TableCell>{tarefa.prazoIncial}</TableCell>
                        <TableCell>{tarefa.prazoFinal}</TableCell>
                        <TableCell>
                            <div
                            style={{
                                width: "20px", 
                                height: "20px",
                                borderRadius: '5px',
                                backgroundColor: `${tarefa.cor}`,
                            }}
                            ></div>
                        </TableCell>
                    </TableRow>
            ));
        }
    };
    
    const usuarioLogadoString = localStorage.getItem('usuarioLogado');

    let totalTarefasUsuarioLogado = 0;

    if (usuarioLogadoString !== null) {

        const usuarioLogado = JSON.parse(usuarioLogadoString);
        
        const tarefasDoUsuarioLogado = tarefas.filter(tarefa => tarefa.userId === usuarioLogado.id);
        totalTarefasUsuarioLogado = tarefasDoUsuarioLogado.length;
        const totalPages = Math.ceil(totalTarefasUsuarioLogado / tarefasPorPagina);
    }

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
                        {renderTarefas()}
                    </TableBody>
                    </Table>
                    {totalTarefasUsuarioLogado >= tarefasPorPagina && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                            <Pagination
                                count={Math.ceil(tarefas.length / tarefasPorPagina)}
                                page={paginaAtual}
                                onChange={handlePageChange}
                            />
                        </Box>
                    )}
                </TableContainer>
            </Box>
        </>
    )
}