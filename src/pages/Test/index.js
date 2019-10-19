import React from 'react';
import log from 'loglevel';
import {Link as A, SharedElement} from 'components/Navigator';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

export default (props) => {
	log.info(`[Test] render`, props)

	const [height, setHeight] = React.useState(0)
	const [opacity, setOpacity] = React.useState(0)
	

	React.useEffect(() => {
		setTimeout(() => {
			setHeight(600)
			setOpacity(100)
		}, 600)
	}, [])
	return (
		<div>
			<Card>
				<SharedElement id={props.data.imageKey || 'image'}>
					<div style={{
						width: '100%',
						height: 300,
						backgroundImage: `url(${props.data.image}) `,
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between'
					}}>
						&nbsp;
						<SharedElement id={props.data.nameKey || 'name'}>
							<Typography style={{
								color: '#fff',
								padding: '10px 20px',
								fontWeight: 'bold',
								textShadow: 'rgba(0,0,0,0.8) 1px 0px 10px',
								fontSize: 30
							}}>
								{props.data.name}
							</Typography>
						</SharedElement>
					</div>
				</SharedElement>
				
				<CardContent>
					<Typography style={{
						transition: 'all 0.5s',
						opacity,
						height
					}}>

						Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.

						<br/>
						Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
