import React from "react";

import { TextField, Container, Grid, Paper } from "@material-ui/core";

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
					<Paper elevation={4}>
						<TextField onChange={(e) => alert(e.target.value)} />
					</Paper>
				</Grid>
			</Grid>
		</Container>
	)
};

export default Layout;
