import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import gameImg from '../images/game.jpg';

export default function ActionAreaCard() {
	return (
		<Card sx={{ maxWidth: 545 }}>
			<CardActionArea>
				<CardMedia component="img" height="440" image={gameImg} alt="green iguana" />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						GAME
					</Typography>
					<Typography variant="body2" color="text.secondary">
						DESCRIPTION GAME
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
