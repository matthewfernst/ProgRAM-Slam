import React from "react";

import { Box, Container, Grid, Typography } from "@material-ui/core";

const Layout = props =>
{
	return (
		<Container>
			<Grid
				container justify={"center"} alignItems={"center"} alignContent={"center"}
				spacing={2} style={{height: "100vh"}}
			>
				<Grid item>
					<Typography>asd</Typography>
				</Grid>
			</Grid>
		</Container>
	)
};

export default Layout;
