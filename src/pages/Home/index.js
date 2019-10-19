import React from 'react';
import log from 'loglevel';
import {Link as A, SharedElement} from 'components/Navigator';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

export default (props) => {
	log.info(`[Home] render`)
	
	const cards = [
		{
			id: 1,
			image: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
			name: 'Lorem ipsum dolor'
		},
		{
			id: 2,
			image: 'https://material-ui.com/static/images/cards/live-from-space.jpg',
			name: 'Consectetur adipi'
		},
		{
			id: 3,
			image: 'https://material-ui.com/static/images/cards/paella.jpg',
			name: 'Sed do eiusmod'
		},
		{
			id: 4,
			image: 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
			name: 'Ut labore et'
		},
		{
			id: 5,
			image: 'https://material-ui.com/static/images/cards/live-from-space.jpg',
			name: 'Ut enim ad mini'
		},
		{
			id: 6,
			image: 'https://material-ui.com/static/images/cards/paella.jpg',
			name: 'Quis nostrud'
		},
	]

	return (
		<div>

			<div style={{
				margin: 20,
				display: 'flex',
				flexWrap: 'wrap'
			}}>
				{cards.map(card => (
					<React.Fragment key={card.id}>
						<Card style={{
							maxWidth: 'calc(100%-50px)',
							margin: 5,
							width: 374
						}} onClick={() => {
							props.navigator.push('@Test', {
								imageKey: `image-${card.id}`,
								nameKey: `name-${card.id}`,
								image: card.image,
								name: card.name
							})
						}}>
							<CardActionArea>
								<SharedElement id={`image-${card.id}`}>
									<div style={{
										width: '100%',
										height: 100,
										backgroundImage: `url(${card.image})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center center',
									}}>
										&nbsp;
									</div>
								</SharedElement>
								<CardContent>
									<SharedElement id={`name-${card.id}`}>
										<Typography>
											{card.name}
										</Typography>
									</SharedElement>
								</CardContent>
							</CardActionArea>
						</Card>
						<br/>
					</React.Fragment>
				))}
			</div>



			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>


			<br/>
			<hr/>
			<A href={`@Test?r=${Math.random()}`} transition='none'>Test</A>
			<br/>
			<A href={`@Test?r=${Math.random()}`} transition='flyLeft'>Test fly</A>
			<br/>
			<A href={`@Test2?r=${Math.random()}`} transition='flyLeft'>Test 2 fly</A>
		</div>
	);
}
