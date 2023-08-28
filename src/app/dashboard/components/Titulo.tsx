import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterIcon from '@mui/icons-material/Filter';

export default function Titulo() {
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
            <Button variant="outlined" sx={{ height: '40px', width: '85px', margin: 'auto' }}>CRIAR</Button>
            <TextField
                label='Buscar'
                variant='outlined'
                size='small'
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
                        <InputAdornment position='end'>
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <Box sx={{  
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