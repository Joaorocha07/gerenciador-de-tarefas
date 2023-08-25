'use client'
import { isAuthenticated } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Titulo from "./components/Titulo";

export default function Dashboard() {
    const [userData, setUserData] = useState<{ nome: string; email: string } | null>(null);
    const router = useRouter()

    useEffect(() => {
        const storedUserData = localStorage.getItem('usuarioLogado');
        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            setUserData(parsedUserData);
        } else {
            router.replace('/login'); // Redirecionar para a página de login se não estiver autenticado
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('usuarioLogado');
        setUserData(null);
        router.replace('/login');
    };

    if (!isAuthenticated()) {
        return null; // Retorne alguma mensagem ou componente para quando não estiver autenticado
    }
    return (
        <>
            <Header />
            <Titulo />
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