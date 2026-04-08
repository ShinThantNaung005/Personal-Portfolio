"use client";

import capoo from '../public/capoo-sad.png';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Container, Paper, Stack, Typography } from '@mui/material';

export default function NotFound() {
    return (
        <Container maxWidth="sm" sx={{ pt: { xs: 5, md: 9 } }}>
            <Paper sx={{ p: { xs: 3, md: 4 }, borderRadius: 5 }}>
                <Stack spacing={2} alignItems="center" textAlign="center">
                    <Image src={capoo} alt="Capoo Sad" width={220} height={220} />
                    <Typography variant="h2">404</Typography>
                    <Typography variant="h6" color="text.secondary">
                        Page Not Found
                    </Typography>
                    <Button LinkComponent={Link} href="/" variant="contained" size="large">
                        Back to Home
                    </Button>
                </Stack>
            </Paper>
        </Container>
    );
}