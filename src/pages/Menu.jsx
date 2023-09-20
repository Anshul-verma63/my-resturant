import React from "react";
import Layout from "../component/Layout/Layout";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Menulist } from "../Data/Data";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {Menulist.map((menu) => (
          <Card
            sx={{
              maxWidth: 345,
              m: 2,
            }}
          >
            <CardMedia
              sx={{ height: 300 }}
              image={menu.image}
              title={menu.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {menu.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {menu.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/contact">
                <Button size="small">Order Now</Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
