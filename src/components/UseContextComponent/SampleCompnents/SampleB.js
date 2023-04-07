import React from "react";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Avatar } from "@mui/material";
import { purple } from "@mui/material/colors";
import Box from "@mui/material/Box";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SampleB = ({ title, body }) => {
  const theme = useTheme();

  const CARD_PROPERTY = {
    borderRadius: 3,
    boxShadow: 0,
  };
  return (
    <Grid item xs={4}>
      <Card sx={CARD_PROPERTY}>
        <CardHeader
          sx={{ p: 3 }}
          avatar={
            <Avatar
              sx={{ bgcolor: purple[500], width: 50, height: 50 }}
              aria-label="recipe"
              src="https://randomuser.me/api/portraits/women/17.jpg"
            >
              E
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Link
              href="#"
              variant="body1"
              color="black"
              underline="none"
              sx={{ fontWeight: "medium" }}
            >
              Elizabeth Moore
            </Link>
          }
          subheader="Electronic technician"
        />
        <CardContent sx={{ pl: 3, pr: 3, pt: 0, pb: 3, mb: 0 }}>
          <Typography variant="h5" sx={{ fontWeight: "800" }}>
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Link href="#/" sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                width="100%"
                image="https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Image"
                sx={{ my: 3, borderRadius: 3, flex: 50 }}
              />
            </Link>
            <Link href="#/" sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                width="100%"
                image="https://images.pexels.com/photos/68525/soap-colorful-color-fruit-68525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Image"
                sx={{ my: 3, borderRadius: 3, flex: 50 }}
              />
            </Link>
          </Box>
          <Typography variant="body1" sx={{ mb: 3, color: "#000" }}>
            {body}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default SampleB;
