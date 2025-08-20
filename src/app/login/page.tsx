'use client';

import { Button, Stack, Typography } from "@mui/material";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

    return (
        <>
            <Stack spacing={2}>                
                <Typography variant="h1">Login</Typography>
                <Button variant="contained" onClick={() => router.back()} startIcon={<IconArrowLeft />}>Voltar</Button>
            </Stack>
        </>
    );
}