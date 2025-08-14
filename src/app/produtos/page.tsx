'use client';

import { Button, Stack, Typography } from "@mui/material";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function HelloWorld() {
    const router = useRouter();

    return (
        <>
            <Stack spacing={2}>
                <Typography variant="h1">Hello World</Typography>
                <Button variant="contained" onClick={() => router.back()} startIcon={<IconArrowLeft/>}>Voltar</Button>
            </Stack>
        </>
    );
}