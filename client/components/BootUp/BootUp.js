import React, {useEffect} from "react";

import { Container, Grid } from "@material-ui/core";

const BootUp = props =>
{
	useEffect(() =>
	{
		setTimeout(() =>
		{
			props.setBootingUp(false);
		}, 3000)
	});

	return (
		<Container>
			<Grid
				container justify={"center"} alignItems={"center"} alignContent={"center"}
				spacing={2} style={{height: "100vh"}}
			>
				<Grid item>
					Booting Up...
				</Grid>
			</Grid>
		</Container>
	)
};

export default BootUp;
