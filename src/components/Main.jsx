import * as React from 'react';
import Button from '@mui/material/Button';
import ActionAreaCard from './ActionAreaCard';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../images/logo.png';

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const cards = [1, 2];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Main() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<main>
				{/* Hero unit */}
				<img src={logo} alt="logo" />

				<Box
					sx={{
						pt: 8,
						pb: 6,
					}}>
					<Container>
						<Typography variant="h5" align="center" color="white">
							Мы создаем новый жанр в индустрии цифровых развлечений! Название нашего продукта –
							AvatarGames. Идея проекта основывается на механике управления реальным человеком
							дистанционно через цифровой интерфейс. Это имеет чрезвычайно большой потенциал для
							различных игровых проектов. Наша задача – создать условия для простого доступа к
							эмоциям и игровому опыту, не сопоставимым ни с видеоконтентом, ни с видеоиграми, а
							также дать возможность каждому пользователю создать собственную цифровую студию по
							предоставлению им придуманных игр. AvatarGames заполнит новую отрасль безграничным
							разнообразием услуг в формате игр, развлекая и избавляя от скуки и одиночества.
						</Typography>
						<Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
							<Button variant="contained">Попробуй!</Button>
						</Stack>
					</Container>
				</Box>
				<Container sx={{ py: 8 }} maxWidth="md">
					{/* End hero unit */}
					<Grid container spacing={4}>
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={6}>
								<ActionAreaCard />
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
			{/* Footer */}
			<Box sx={{ bgcolor: 'black', p: 6 }} component="footer">
				<Typography color="white" variant="h6" align="center" gutterBottom>
					Footer
				</Typography>
				<Typography variant="subtitle1" align="center" color="white" component="p">
					Something here to give the footer a purpose!
				</Typography>
				<Copyright />
			</Box>
			{/* End footer */}
		</ThemeProvider>
	);
}
