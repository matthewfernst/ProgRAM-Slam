import React from "react";

import { Button, Container, Grid, Typography } from "@material-ui/core";

const Layout = () =>
{
	return (
		<Container>
			<Grid
				container
				direction={"column"}
				justify={"center"}
				alignContent={"center"}
				alignItems={"center"}
				spacing={2}
				style={{height: "100vh"}}
			>
				<Grid item>
					<Typography variant={"h2"}>Hello World!</Typography>
				</Grid>
			</Grid>
		</Container>
	)
};

export default Layout;
