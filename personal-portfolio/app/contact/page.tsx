"use client";

import {
    Telegram as TelegramIcon,
    AlternateEmailRounded as AlternateEmailRoundedIcon,
    CheckCircleRounded as CheckCircleRoundedIcon,
    FacebookRounded as FacebookRoundedIcon,
    GitHub as GitHubIcon,
} from '@mui/icons-material';
import {
    Box,
    Button,
    Container,
    Link as MuiLink,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

export default function ContactPage() {
    const opportunities = ['Freelance work', 'Collaboration', 'Web development projects'];

    return (
        <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 7 } }}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 3, md: 4 }} alignItems="stretch">
                <Paper sx={{ p: { xs: 3, md: 4 }, flex: 1, borderRadius: 5 }}>
                    <Typography variant="h3" sx={{ mb: 2 }}>
                        Let&apos;s Get in Touch
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        Currently available for:
                    </Typography>

                    <Stack spacing={1.25} sx={{ mb: 4 }}>
                        {opportunities.map((item) => (
                            <Stack key={item} direction="row" spacing={1.25} alignItems="center">
                                <CheckCircleRoundedIcon color="primary" fontSize="small" />
                                <Typography variant="body1">{item}</Typography>
                            </Stack>
                        ))}
                    </Stack>

                    <Stack spacing={1.75}>
                        <MuiLink
                            href="https://www.facebook.com/shin.thant.517084"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="none"
                            sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}
                        >
                            <FacebookRoundedIcon color="primary" />
                            <Typography>Facebook: Shin Thant</Typography>
                        </MuiLink>

                        <MuiLink
                            href="https://github.com/ShinThantNaung"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="none"
                            sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}
                        >
                            <GitHubIcon />
                            <Typography>Github: ShinThantNaung</Typography>
                        </MuiLink>

                        <MuiLink
                            href="mailto:shinthantnaung112@gmail.com"
                            underline="none"
                            sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}
                        >
                            <AlternateEmailRoundedIcon color="error" />
                            <Typography>Email: shinthantnaung112@gmail.com</Typography>
                        </MuiLink>

                        <MuiLink
                            href="https://t.me/Lord_Thant"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="none"
                            sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}
                        >
                            <TelegramIcon color="primary" />
                            <Typography>Telegram: Shine Thant</Typography>
                        </MuiLink>
                    </Stack>
                </Paper>

                <Paper
                    sx={(theme) => ({
                        p: { xs: 3, md: 4 },
                        flex: 1,
                        borderRadius: 5,
                        background:
                            theme.palette.mode === 'dark'
                                ? 'linear-gradient(160deg, rgba(16,28,49,0.92), rgba(7,13,25,0.86))'
                                : 'linear-gradient(160deg, rgba(255,255,255,0.92), rgba(236,246,255,0.88))',
                    })}
                >
                    <Box component="form" action="mailto:shinthantnaung112@gmail.com" method="post" encType="text/plain">
                        <Stack spacing={2.25}>
                            <TextField label="Full Name" placeholder="Enter your full name" id="fullName" name="fullName" required fullWidth />
                            <TextField label="Email" placeholder="Enter your email" id="email" name="email" type="email" required fullWidth />
                            <TextField
                                label="Message"
                                placeholder="Enter your message"
                                id="message"
                                name="message"
                                multiline
                                rows={5}
                                required
                                fullWidth
                            />
                            <Button type="submit" variant="contained" size="large">
                                Send
                            </Button>
                        </Stack>
                    </Box>
                </Paper>
            </Stack>
        </Container>
    );
}
