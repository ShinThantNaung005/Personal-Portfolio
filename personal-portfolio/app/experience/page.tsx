"use client";

import Image from 'next/image';
import { Box, Container, Paper, Typography } from '@mui/material';
import capoo from '../../public/capoo-crying.webp'

const ExperiencePage = () => {
    return (
        <Container maxWidth="md" sx={{ pt: { xs: 4, md: 8 } }}>
            <Paper sx={{ p: { xs: 3, md: 4 }, borderRadius: 5, textAlign: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Image src={capoo} alt="Capoo Crying" width={320} height={320} />
                </Box>
                <Typography variant="h4" sx={{ mt: 3 }}>
                    I still don&apos;t have experiences to showcase.
                </Typography>
            </Paper>
        </Container>
    );
};

export default ExperiencePage;