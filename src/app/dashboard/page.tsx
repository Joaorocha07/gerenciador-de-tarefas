'use client'
import { isAuthenticated } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Titulo from "./components/Titulo";
import { Box } from "@mui/material";
import imageFundo from './../../../public/bg-fundo.jpg';
import Tarefas from "./components/Tarefas";

export default function Dashboard() {
    const [userData, setUserData] = useState<{ nome: string; email: string } | null>(null);
    const router = useRouter()

    useEffect(() => {
        const storedUserData = localStorage.getItem('usuarioLogado');
        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            setUserData(parsedUserData);
        } else {
            router.replace('/login');
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('usuarioLogado');
        setUserData(null);
        router.replace('/login');
    };

    if (!isAuthenticated()) {
        return null; 
    }
    return (
        <>
            <Box
                position="absolute"
                width="100vw"
                height="100vh"
                sx={{
                    backgroundImage: `url(${imageFundo.src})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
            >
                <Header />
                <Titulo />
                <Tarefas />
            </Box>
            <h1>Você está logado!</h1>
            {userData && (
                <div>
                    <p>Nome: {userData.nome}</p>
                    <p>Email: {userData.email}</p>
                </div>
            )}
            <button onClick={handleLogout}>Sair</button>
        </>
    )
}