"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    DarkModeRounded as DarkModeRoundedIcon,
    LightModeRounded as LightModeRoundedIcon,
} from '@mui/icons-material';
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Paper,
    Stack,
    Toolbar,
    Tooltip,
} from '@mui/material';
import { useThemeMode } from './themeProvider';

export default function NavBar() {
    const pathname = usePathname();
    const { mode, toggleTheme, isTransitioning } = useThemeMode();

    const navItems = [
        { label: 'About Me', href: '/' },
        { label: 'Experiences', href: '/experience' },
        { label: 'Contact Me', href: '/contact' },
    ];

    return (
        <AppBar position="sticky" color="transparent" elevation={0} sx={{ px: { xs: 1.5, sm: 2.5 }, pt: 2 }}>
            <Paper
                elevation={0}
                sx={(theme) => ({
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    backdropFilter: 'blur(12px)',
                    bgcolor:
                        theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.72)',
                    boxShadow:
                        theme.palette.mode === 'dark'
                            ? '0 18px 40px rgba(2, 8, 23, 0.55)'
                            : '0 14px 30px rgba(37, 99, 235, 0.12)',
                })}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        disableGutters
                        sx={{
                            minHeight: 74,
                            justifyContent: 'space-between',
                            gap: 2,
                            flexWrap: { xs: 'wrap', md: 'nowrap' },
                            py: { xs: 1, md: 0 },
                        }}
                    >
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ width: { xs: '100%', md: 'auto' } }}>
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;

                                return (
                                    <Button
                                        key={item.href}
                                        component={Link}
                                        href={item.href}
                                        variant={isActive ? 'contained' : 'text'}
                                        color={isActive ? 'primary' : 'inherit'}
                                        sx={{
                                            justifyContent: 'flex-start',
                                            px: 2.25,
                                            borderRadius: 2.25,
                                            fontWeight: 600,
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                );
                            })}
                        </Stack>

                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: { xs: '100%', sm: 'auto' } }}>
                            <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} theme`}>
                                <IconButton
                                    aria-label="toggle color mode"
                                    onClick={toggleTheme}
                                    disabled={isTransitioning}
                                    color="primary"
                                    sx={{ border: '1px solid', borderColor: 'divider', bgcolor: 'background.default' }}
                                >
                                    {mode === 'dark' ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </Paper>
        </AppBar>
    );
}
