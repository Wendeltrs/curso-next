'use client';

import { Button, Stack, Typography } from "@mui/material";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();

    return (
        <>
            <Stack spacing={2}>
                <Typography variant="h1">Hello World</Typography>
                <Button variant="contained" onClick={() => router.push("/dashboard/settings")} >Settings</Button>
                <Button variant="contained" onClick={() => router.push("/dashboard/profile")} >Profile</Button>
                <Button variant="contained" onClick={() => router.push("/dashboard/data")} >Data</Button>
                <Button variant="contained" onClick={() => router.push("/login")} >Login</Button>
                <Button variant="contained" onClick={() => router.back()} startIcon={<IconArrowLeft/>}>Voltar</Button>
            </Stack>
        </>
    );
}