import { Box, Button, Typography } from "@mui/material";
import FilterIcon from '@mui/icons-material/Filter';
import React from "react";
import ModalTarefas from "./ModalTarefas";
import PesquisarTarefas from "./PesquisarTarefas";

export default function Titulo() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = (): void => {
        setIsModalOpen(true)
    }
    
    const closeModal = (): void => {
        setIsModalOpen(false)
    }
    return (
        <Box 
            sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '80%', 
                borderRadius: '20px',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                background: 'rgba(221, 221, 221, 0.3)',
                padding: '20px', 
                flexDirection: 'row',
                margin: 'auto',
                marginTop: '1.5rem'
            }}
        >
            <Typography variant="h4" sx={{ margin: 'auto' }} gutterBottom>
                Minhas tarefas
            </Typography>
            <Button
                variant="outlined" 
                sx={{ 
                    height: '40px',
                    width: '85px',
                    margin: 'auto'
                }}
                onClick={openModal}
            >
                CRIAR
            </Button>
            {isModalOpen && (
                <ModalTarefas isOpen={isModalOpen} onClose={closeModal} />
            )}
            <PesquisarTarefas />
            <Box 
                sx={{  
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#FFFFFF', 
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    height: '40px', 
                    width: '85px',
                    borderRadius: '5px',
                    margin: 'auto' 
                }}
            >
                <FilterIcon />
            </Box>
        </Box>
    )
}