'use client';

import { Button, Stack, Typography } from "@mui/material";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function Calca() {
    const router = useRouter();

    return (
        <>
            <Stack spacing={2}>
                <Typography variant="h1">Calça</Typography>
                <Button variant="contained" onClick={() => router.push('/produtos/calca/calca-azul')}>
                    Calça Azul
                </Button>
                <Button variant="contained" onClick={() => router.push('/produtos/calca/calca-vermelha')}>
                    Calça Vermelha
                </Button>
                <Button variant="contained" onClick={() => router.back()} startIcon={<IconArrowLeft />}>Voltar</Button>
            </Stack>
        </>
    );
}