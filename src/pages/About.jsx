import React from "react";
import Layout from "../component/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 12,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            fontSize: "2rem",
            fontFamily: "cursive",
            color: "goldenrod",
            borderBottom: "2px solid black",
            width: "50%",
            margin: "auto",
            padding: 2,
          },
          "& p": {
            textAlign: "justify",
            marginTop: 2,
            fontWeight: 600,
            letterSpacing: 0.5,
            lineHeight: 1.5,
          },
          "@media (max-width:600px)": {
            my: 0,
            "& h4": {
              width: "100%",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nesciunt,
          temporibus repudiandae minus ex, quidem consequuntur amet vel dolores
          dignissimos veritatis eum iure harum libero pariatur explicabo
          praesentium iusto dicta odio corrupti optio neque. Pariatur, quos sunt
          architecto, laborum et quam voluptates accusamus omnis aperiam dolor
          accusantium assumenda quaerat, modi iste vero quia. Alias consequuntur
          modi, commodi, suscipit nihil numquam quidem illo doloremque
          reprehenderit exercitationem, mollitia placeat reiciendis iusto iure
          autem. Quasi quidem similique minus eaque. Facere explicabo deleniti
          optio accusamus voluptatum porro quas quidem facilis, similique
          dolorum, ab, vel excepturi iste ut? Cumque, ipsam mollitia
          voluptatibus culpa porro perspiciatis. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Et nesciunt, temporibus repudiandae
          minus ex, quidem consequuntur amet vel dolores dignissimos veritatis
          eum iure harum libero pariatur explicabo praesentium iusto dicta odio
          corrupti optio neque. Pariatur, quos sunt architecto, laborum et quam
          voluptates accusamus omnis aperiam dolor accusantium assumenda
          quaerat, modi iste vero quia. Alias consequuntur modi, commodi,
          suscipit nihil numquam quidem illo doloremque reprehenderit
          exercitationem, mollitia placeat reiciendis iusto iure autem. Quasi
          quidem similique minus eaque. Facere explicabo deleniti optio
          accusamus voluptatum porro quas quidem facilis, similique dolorum, ab,
          vel excepturi iste ut? Cumque, ipsam mollitia voluptatibus culpa porro
          perspiciatis.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
