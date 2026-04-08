"use client";

import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import {
  AlternateEmailRounded as AlternateEmailRoundedIcon,
  FacebookRounded as FacebookRoundedIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import profile from '../public/profile.jpg';
import python from '../public/Python-logo-notext.svg';
import react from '../public/React-icon.svg';
import typescript from '../public/typescript-logo.svg';
import javascript from '../public/javascript-logo.svg';
import nodejs from '../public/NodeJS.svg';

const techStack = [
  { label: 'Python', icons: [{ src: python, alt: 'Python logo' }] },
  { label: 'React', icons: [{ src: react, alt: 'React logo' }] },
  { label: 'Node.js', icons: [{ src: nodejs, alt: 'Node.js logo' }] },
  {
    label: 'JavaScript / TypeScript',
    icons: [
      { src: javascript, alt: 'JavaScript logo' },
      { src: typescript, alt: 'TypeScript logo' },
    ],
  },
];

export default function Page() {
  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 7 } }}>
      <Paper
        sx={(theme) => ({
          p: { xs: 3, md: 5 },
          borderRadius: 5,
          backdropFilter: 'blur(8px)',
          background:
            theme.palette.mode === 'dark'
              ? 'linear-gradient(145deg, rgba(16,28,49,0.86), rgba(11,19,34,0.92))'
              : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,247,255,0.94))',
        })}
      >
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 5 }}>
          <Box
            sx={{
              position: 'relative',
              width: { xs: 220, sm: 280, md: 320 },
              height: { xs: 220, sm: 280, md: 320 },
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: '0 18px 38px rgba(15, 23, 42, 0.35)',
              mx: { xs: 'auto', md: 0 },
            }}
          >
            <Image
              src={profile}
              alt="Profile"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 220px, (max-width: 1200px) 280px, 320px"
            />
          </Box>

          <Stack spacing={2.2} sx={{ maxWidth: 650 }}>
            <Typography variant="overline" color="secondary.main">
              Full-Stack Curious, Frontend Focused
            </Typography>
            <Typography variant="h3">Shin Thant Naung</Typography>
            <Typography variant="body1" color="text.secondary">
              Passionate software developer with a deep interest in crafting web experiences and learning modern
              technologies.
            </Typography>

            <Typography variant="h6" sx={{ mt: 1 }}>
              Tech Stack
            </Typography>
            <Stack direction="row" useFlexGap flexWrap="wrap" gap={1.25}>
              {techStack.map((tech) => (
                <Paper key={tech.label} sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 1.5, py: 1, borderRadius: 3 }}>
                  {tech.icons.map((icon) => (
                    <Image key={icon.alt} src={icon.src} alt={icon.alt} width={20} height={20} />
                  ))}
                  <Typography variant="body2">{tech.label}</Typography>
                </Paper>
              ))}
            </Stack>

            <Box>
              <Button LinkComponent={Link} href="/contact" variant="contained" size="large" sx={{ px: 4 }}>
                Hire Me
              </Button>
            </Box>

            <Stack direction="row" spacing={1}>
              <IconButton
                component="a"
                href="https://www.facebook.com/shin.thant.517084"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                color="primary"
              >
                <FacebookRoundedIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://github.com/ShinThantNaung"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                color="inherit"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton component="a" href="mailto:shinthantnaung112@gmail.com" aria-label="Email" color="error">
                <AlternateEmailRoundedIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  ) 
}