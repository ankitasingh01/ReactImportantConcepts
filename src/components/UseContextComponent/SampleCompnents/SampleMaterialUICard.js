// https://codesandbox.io/s/uld12?file=/src/App.js
// This sample is taken from
import React from "react";
import { useTheme } from "@mui/material/styles";

import Container from "@mui/material/Container";
import Masonry from "react-masonry-component";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import {
  grey,
  lightGreen,
  lime,
  green,
  cyan,
  teal,
  red,
  purple,
  deepPurple,
  indigo,
  blue,
  orange,
  pink,
  amber,
  brown,
  blueGrey,
  deepOrange,
} from "@mui/material/colors";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Placeholder from "./components/Placeholder";

import Icon from "@mdi/react";
import {
  mdiCameraIris,
  mdiPinterest,
  mdiInstagram,
  mdiTwitter,
  mdiFacebook,
  mdiPen,
  mdiDotsVertical,
  mdiPencilOutline,
  mdiSkipPrevious,
  mdiSkipNext,
  mdiPlay,
  mdiPhone,
  mdiPaletteOutline,
  mdiMessageReply,
  mdiShareVariantOutline,
  mdiDotsHorizontal,
  mdiHeart,
  mdiGesture,
  mdiFolderEditOutline,
  mdiClockTimeFourOutline,
  mdiDelete,
  mdiPencil,
  mdiImageFilterDrama,
  mdiPlus,
  mdiMinus,
} from "@mdi/js";

// Styles
import "./sass/style.scss";

// Footer
import Footer from "./template/Footer";

const SampleMaterialUICard = () => {
  const theme = useTheme();

  // My card preferences

  const CARD_PROPERTY = {
    borderRadius: 3,
    boxShadow: 0,
  };

  return (
    // SampleMaterialUICard

    <div className="SampleMaterialUICard">
      <Container maxWidth="xl">
        <Grid container spacing={3} component={Masonry}>
          {/* Grid Card */}
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <Box>
                <CardMedia
                  component="img"
                  height="194"
                  image="https://images.pexels.com/photos/1227497/pexels-photo-1227497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Image"
                />
              </Box>
              <CardContent sx={{ p: 3, mb: 0 }}>
                <Typography variant="body1" sx={{ mb: 3 }} color="black">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen..
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Grid Card */}
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <CardHeader
                sx={{ p: 3 }}
                avatar={
                  <Avatar
                    sx={{ bgcolor: purple[500], width: 50, height: 50 }}
                    aria-label="recipe"
                    src="https://randomuser.me/api/portraits/women/47.jpg"
                  >
                    E
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <Icon path={mdiDotsVertical} size={1.3} color="#222" />
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
                    Emma Johnson
                  </Link>
                }
                subheader="September 14, 2016"
              />
              <CardContent sx={{ p: 3 }}>
                <Typography variant="body1" color="black" sx={{ mb: 3 }}>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen..
                </Typography>
                <Button variant="body1">Read more</Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Grid Card */}
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card elevation={0}>
              <Paper
                sx={{
                  bgcolor: green[900],
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 5,
                }}
              >
                <Typography
                  variant="h4"
                  color="white"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Card design with material
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  16 January 2017
                </Typography>
              </Paper>
            </Card>
          </Grid>

          {/* Grid Card */}
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <CardMedia
                component="img"
                height="194"
                image="https://images.pexels.com/photos/1161771/pexels-photo-1161771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <CardContent sx={{ p: 3 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Bessie Cooper
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions sx={{ pt: 0, px: 3, pb: 3 }}>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Grid Card */}
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      component="div"
                      variant="h5"
                      sx={{ fontWeight: 500 }}
                    >
                      Live From Space
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Mac Miller
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    <IconButton aria-label="previous">
                      {theme.direction === "rtl" ? (
                        <Icon path={mdiSkipNext} size={1.2} />
                      ) : (
                        <Icon path={mdiSkipPrevious} size={1.2} />
                      )}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                      <Icon path={mdiPlay} size={2} />
                    </IconButton>
                    <IconButton aria-label="next">
                      {theme.direction === "rtl" ? (
                        <Icon path={mdiSkipPrevious} size={1.2} />
                      ) : (
                        <Icon path={mdiSkipNext} size={1.2} />
                      )}
                    </IconButton>
                  </Box>
                </Box>
                <CardMedia
                  component="img"
                  image="https://unsplash.com/photos/3hWg9QKl5k8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fHZpbnRhZ2UlMjBtdXNpY3x8MHwxfHx8MTY0MDEyNTY4NQ&force=true&w=640"
                  height="240"
                  alt="Live from space album cover"
                />
              </Box>
            </Card>
          </Grid>

          {/* Grid Card */}
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={{ borderRadius: 4, p: 3 }}>
              <Box
                sx={{
                  mb: 4,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{ bgcolor: lime[600], width: 60, height: 60, mr: 2 }}
                    src="https://randomuser.me/api/portraits/men/88.jpg"
                  >
                    M
                  </Avatar>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <Link
                      href="#"
                      underline="none"
                      variant="body1"
                      color="text.primary"
                      sx={{ fontWeight: 500 }}
                    >
                      Andres
                    </Link>
                    <Link
                      href="#"
                      underline="always"
                      variant="body1"
                      color={green[500]}
                      sx={{ fontWeight: 500 }}
                    >
                      Proyecto
                    </Link>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    path={mdiClockTimeFourOutline}
                    size={0.7}
                    color="#00000099"
                  />
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ ml: 1 }}
                  >
                    3 min ago
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ p: 0, mb: 0 }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                  Collaborative work
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  Introduction
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Minim dolor in amet nulla laboris enim dolore consequat..
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <AvatarGroup max={4}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                  />
                  <Avatar
                    alt="Travis Howard"
                    src="https://randomuser.me/api/portraits/women/24.jpg"
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src="https://randomuser.me/api/portraits/men/54.jpg"
                  />
                  <Avatar
                    alt="Agnes Walker"
                    src="https://randomuser.me/api/portraits/women/92.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
                <IconButton aria-label="Write" size="large">
                  <Icon path={mdiPen} size={1.2} color="#222" />
                </IconButton>
              </Box>
            </Card>
          </Grid>

          {/* Grid Card */}
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <CardHeader
                sx={{ display: "flex", alignItems: "center" }}
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500], width: 50, height: 50 }}
                    aria-label="recipe"
                  >
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <Icon path={mdiDotsVertical} size={1.3} color="#222" />
                  </IconButton>
                }
                title={
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Raul
                  </Typography>
                }
              />
              <Box
                sx={{
                  display: "flex",
                  gap: 0.5,
                  mb: 0.5,
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="150"
                    image="https://images.pexels.com/photos/2157826/pexels-photo-2157826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    height="150"
                    image="https://images.pexels.com/photos/3280524/pexels-photo-3280524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    height="150"
                    image="https://images.pexels.com/photos/2158469/pexels-photo-2158469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 0.5,
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    width="100%"
                    image="https://images.pexels.com/photos/33158/leaves-fall-colors-rainbow.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <CardMedia
                    component="img"
                    width="100%"
                    image="https://images.pexels.com/photos/1161771/pexels-photo-1161771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  bgcolor: grey[100],
                  p: 3,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Icon path={mdiCameraIris} title="Camera" size={1.3} />
                  <Typography sx={{ ml: 1, fontWeight: "bold" }} variant="span">
                    23
                  </Typography>
                </Box>
                <Button variant="contained" color="success">
                  Visit now
                </Button>
              </Box>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  sx={{ mb: 1 }}
                  component="div"
                >
                  Photographic rolls
                </Typography>
                <Typography
                  gutterBottom
                  variant="h4"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Salou, Tarragona
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Minim dolor in amet nulla laboris enim dolore consequat
                  proident fugiat...
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Grid Card */}
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
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
                    <Icon path={mdiDotsVertical} size={1.3} color="#222" />
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
                  Web Design templates Selection
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
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen..
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Grid Card */}
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card elevation={0}>
              <Paper
                sx={{
                  bgcolor: deepOrange[800],
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 5,
                }}
              >
                <Typography
                  variant="h4"
                  color="white"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Web Design Trends
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  16 January 2017
                </Typography>
              </Paper>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Lizard
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Minim dolor in amet nulla laboris enim dolore consequat
                  proident fugiat culpa eiusmod proident sed excepteur
                  excepteur.
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                image="https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    variant="square"
                    sx={{ bgcolor: cyan[600], width: 80, height: 80, mr: 2 }}
                    src="https://randomuser.me/api/portraits/women/47.jpg"
                  >
                    G
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Oriana
                  </Typography>
                </Box>
                <IconButton aria-label="next" size="large" sx={{ mr: 2 }}>
                  <Icon
                    path={mdiPhone}
                    rotate="270"
                    title="Dog"
                    color="#222"
                    size={1.2}
                  />
                </IconButton>
              </Box>
            </Card>
          </Grid>

          <Grid
            container
            item
            spacing={2}
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={3}
            sx={{ width: "100%" }}
          >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card elevation={0} sx={CARD_PROPERTY}>
                <Paper
                  sx={{
                    bgcolor: purple[700],
                    padding: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    color="white"
                    sx={{ fontWeight: "bold" }}
                    component="div"
                  >
                    Sass
                  </Typography>
                </Paper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card elevation={0} sx={CARD_PROPERTY}>
                <Paper
                  sx={{
                    bgcolor: amber[700],
                    padding: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    color="white"
                    sx={{ fontWeight: "bold" }}
                    component="div"
                  >
                    Design
                  </Typography>
                </Paper>
              </Card>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{ bgcolor: purple[400], width: 60, height: 60, mr: 2 }}
                    src="https://randomuser.me/api/portraits/men/50.jpg"
                  >
                    F
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Fabrizio
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      2 min ago
                    </Typography>
                  </Box>
                </Box>
                <IconButton aria-label="next" size="large">
                  <Icon path={mdiPen} title="Pen" color="#222" size={1.2} />
                </IconButton>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card elevation={0} sx={CARD_PROPERTY}>
              <Paper
                sx={{
                  bgcolor: brown[700],
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 5,
                }}
              >
                <Typography
                  variant="h4"
                  color="white"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Online photography course
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  September 22
                </Typography>
              </Paper>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <CardHeader
                sx={{
                  "> .MuiCardHeader-avatar": {
                    marginRight: "0",
                  },
                  flexDirection: "column",
                  textAlign: "center",
                }}
                avatar={
                  <Avatar
                    sx={{
                      bgcolor: lightGreen[500],
                      width: 70,
                      height: 70,
                      mb: 2,
                    }}
                    aria-label="recipe"
                  >
                    G
                  </Avatar>
                }
                title={
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Gladys Fernandez
                  </Typography>
                }
                subheader="Marketing Coordinator"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="body1" color="#000000" sx={{ mb: 2 }}>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen..
                </Typography>
                <Button variant="text">Follow me</Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            container
            item
            spacing={2}
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={3}
            sx={{ width: "100%" }}
          >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card elevation={0} sx={CARD_PROPERTY}>
                <Paper
                  sx={{
                    bgcolor: deepPurple[800],
                    padding: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    color="white"
                    sx={{ fontWeight: "bold" }}
                    component="div"
                  >
                    python
                  </Typography>
                </Paper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card elevation={0} sx={CARD_PROPERTY}>
                <Paper
                  sx={{
                    bgcolor: lightGreen[700],
                    padding: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    color="white"
                    sx={{ fontWeight: "bold" }}
                    component="div"
                  >
                    Java
                  </Typography>
                </Paper>
              </Card>
            </Grid>
          </Grid>

          <Grid
            container
            item
            spacing={2}
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={3}
            sx={{ width: "100%" }}
          >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card elevation={0}>
                <Paper
                  sx={{
                    bgcolor: pink[700],
                    padding: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    color="white"
                    sx={{ fontWeight: "bold" }}
                    component="div"
                  >
                    React
                  </Typography>
                </Paper>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              sx={{ width: "100%" }}
            >
              <Card elevation={0}>
                <Paper
                  sx={{
                    bgcolor: teal[700],
                    padding: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    color="white"
                    sx={{ fontWeight: "bold" }}
                    component="div"
                  >
                    Angular
                  </Typography>
                </Paper>
              </Card>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{ bgcolor: cyan[600], width: 70, height: 70, mr: 2 }}
                    src="https://randomuser.me/api/portraits/men/35.jpg"
                  >
                    G
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Greg
                  </Typography>
                </Box>
                <IconButton aria-label="next" size="large">
                  <Icon
                    path={mdiCameraIris}
                    title="Dog"
                    color="#222"
                    size={1.2}
                  />
                </IconButton>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 2,
                }}
              >
                <Avatar
                  sx={{ bgcolor: red[700], width: 70, height: 70, mb: 2 }}
                  aria-label="recipe"
                >
                  P
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Philip Gomez
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Programer
                </Typography>
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Button variant="text">Accept</Button>
                <Button variant="text" color="secondary">
                  Deniend
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 2,
                }}
              >
                <Avatar
                  sx={{ bgcolor: red[700], width: 70, height: 70, mb: 2 }}
                  src="https://randomuser.me/api/portraits/women/6.jpg"
                >
                  S
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Selena Mcconoor
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Teacher
                </Typography>
              </Box>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "center",
                }}
              >
                <IconButton size="large">
                  <Icon path={mdiTwitter} title="Dog" color="#222" size={1.1} />
                </IconButton>
                <IconButton size="large">
                  <Icon
                    path={mdiPinterest}
                    title="Dog"
                    color="#222"
                    size={1.1}
                  />
                </IconButton>
                <IconButton size="large">
                  <Icon
                    path={mdiInstagram}
                    title="Dog"
                    color="#222"
                    size={1.1}
                  />
                </IconButton>
                <IconButton size="large">
                  <Icon
                    path={mdiFacebook}
                    title="Dog"
                    color="#222"
                    size={1.1}
                  />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 500 }}>
                      Note
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Created on May 21, 2020
                    </Typography>
                  </Box>
                  <IconButton aria-label="settings">
                    <Icon path={mdiPencilOutline} size={1.22} color="#222" />
                  </IconButton>
                </Box>
                <Typography variant="body1" color="#000000" sx={{ mb: 3 }}>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen..
                </Typography>
              </CardContent>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: purple[500], width: 50, height: 50 }}
                    aria-label="recipe"
                  >
                    E
                  </Avatar>
                }
                title={
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Phillip
                  </Typography>
                }
              />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{ bgcolor: lime[600], width: 70, height: 70, mr: 2 }}
                    src="https://randomuser.me/api/portraits/men/77.jpg"
                  >
                    M
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Marlos
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="secondary"
                  disableElevation={true}
                >
                  Profile
                </Button>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={{ borderRadius: 4, p: 3 }}>
              <Box
                sx={{
                  mb: 4,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon path={mdiImageFilterDrama} size={1.3} color="#222" />
                  <Typography variant="h5" sx={{ ml: 1, fontWeight: "bold" }}>
                    Cloud
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    path={mdiClockTimeFourOutline}
                    size={0.7}
                    color="#00000099"
                  />
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ ml: 1 }}
                  >
                    42 min ago
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ p: 0, mb: 0 }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                  Mountains day
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  Introduction
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen..
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon path={mdiPen} size={1} color="#222" />
                  <Typography
                    component="span"
                    variant="body1"
                    color="text.primary"
                    sx={{ fontWeight: "bold", ml: 2, fontSize: "18px" }}
                  >
                    Write now
                  </Typography>
                </Link>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={{ borderRadius: 4, p: 3 }}>
              <Box
                sx={{
                  mb: 4,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{ bgcolor: lime[600], width: 60, height: 60, mr: 2 }}
                    src="https://randomuser.me/api/portraits/men/78.jpg"
                  >
                    M
                  </Avatar>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <Link
                      href="#"
                      underline="none"
                      variant="body1"
                      color="text.primary"
                      sx={{ fontWeight: 500 }}
                    >
                      Mario Navarro
                    </Link>
                    <Link
                      href="#"
                      underline="always"
                      variant="body1"
                      color={green[500]}
                      sx={{ fontWeight: 500 }}
                    >
                      Publication
                    </Link>
                  </Box>
                </Box>
                <IconButton aria-label="settings">
                  <Icon path={mdiDotsHorizontal} size={1.3} color="#222" />
                </IconButton>
              </Box>
              <CardContent sx={{ p: 0, mb: 0 }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                  Importance
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  14 May 2014
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen..
                </Typography>
                <Link
                  href="#"
                  underline="always"
                  variant="body1"
                  color="text.primary"
                  sx={{ fontWeight: "bold" }}
                >
                  Read more
                </Link>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={{ borderRadius: 4, p: 3 }}>
              <Box
                sx={{
                  mb: 4,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{ bgcolor: lime[600], width: 60, height: 60, mr: 2 }}
                    src="https://randomuser.me/api/portraits/men/88.jpg"
                  >
                    M
                  </Avatar>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <Link
                      href="#"
                      underline="none"
                      variant="body1"
                      color="text.primary"
                      sx={{ fontWeight: 500 }}
                    >
                      Fermin vargas
                    </Link>
                    <Link
                      href="#"
                      underline="always"
                      variant="body1"
                      color={green[500]}
                      sx={{ fontWeight: 500 }}
                    >
                      Publication
                    </Link>
                  </Box>
                </Box>
                <IconButton aria-label="settings">
                  <Icon path={mdiDotsHorizontal} size={1.3} color="#222" />
                </IconButton>
              </Box>
              <CardContent sx={{ p: 0, mb: 0 }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                  Fight against environmental pollution
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  September 23, 2021
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Minim dolor in amet nulla laboris enim dolore consequat
                  proident fugiat culpa eiusmod proident sed excepteur..
                </Typography>
                <Box sx={{ mb: 5 }}>
                  <Button
                    sx={{ mr: 1, mb: 1 }}
                    variant="contained"
                    size="small"
                    disableElevation
                    color="info"
                  >
                    Environment
                  </Button>
                  <Button
                    sx={{ mr: 1, mb: 1 }}
                    variant="contained"
                    size="small"
                    disableElevation
                    color="info"
                  >
                    Biology
                  </Button>
                  <Button
                    sx={{ mr: 1, mb: 1 }}
                    variant="contained"
                    size="small"
                    disableElevation
                    color="info"
                  >
                    Animals
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Link
                      underline="none"
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 50,
                          background: grey[100],
                          width: 25,
                          height: 25,
                          p: 1,
                          mr: 1,
                        }}
                      >
                        <Icon
                          path={mdiMessageReply}
                          size={0.8}
                          color="#333"
                        ></Icon>
                      </Box>
                      <Typography
                        variant="body1"
                        color="text.primary"
                        component="span"
                        sx={{ fontWeight: "500" }}
                      >
                        43
                      </Typography>
                    </Link>
                  </Box>
                  <Box>
                    <Link
                      underline="none"
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 50,
                          background: grey[100],
                          width: 25,
                          height: 25,
                          p: 1,
                          mr: 1,
                        }}
                      >
                        <Icon
                          path={mdiShareVariantOutline}
                          size={0.8}
                          color="#333"
                        ></Icon>
                      </Box>
                      <Typography
                        variant="body1"
                        color="text.primary"
                        component="span"
                        sx={{ fontWeight: "500" }}
                      >
                        81
                      </Typography>
                    </Link>
                  </Box>
                  <Box>
                    <Link
                      underline="none"
                      href="#"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 50,
                          background: grey[100],
                          width: 25,
                          height: 25,
                          p: 1,
                          mr: 1,
                        }}
                      >
                        <Icon path={mdiHeart} size={0.8} color="#333"></Icon>
                      </Box>
                      <Typography
                        variant="body1"
                        color="text.primary"
                        component="span"
                        sx={{ fontWeight: "500" }}
                      >
                        23
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            container
            item
            spacing={2}
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={3}
            sx={{ width: "100%" }}
          >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card>
                <Paper sx={{ padding: 2, bgcolor: blueGrey[50] }}>
                  <Typography
                    variant="body1"
                    component="span"
                    color="text.primary"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    Animals
                  </Typography>
                </Paper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card>
                <Paper sx={{ padding: 2, bgcolor: blueGrey[100] }}>
                  <Typography
                    variant="body1"
                    component="span"
                    color="text.primary"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    Environment
                  </Typography>
                </Paper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card>
                <Paper sx={{ padding: 2, bgcolor: blueGrey[200] }}>
                  <Typography
                    variant="body1"
                    component="span"
                    color="text.primary"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    History
                  </Typography>
                </Paper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card>
                <Paper sx={{ padding: 2, bgcolor: blueGrey[300] }}>
                  <Typography
                    variant="body1"
                    component="span"
                    color="text.primary"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    Sciences
                  </Typography>
                </Paper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card>
                <Paper sx={{ padding: 2, bgcolor: blueGrey[400] }}>
                  <Typography
                    variant="body1"
                    component="span"
                    color="white"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    Physical
                  </Typography>
                </Paper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card>
                <Paper sx={{ padding: 2, bgcolor: blueGrey[500] }}>
                  <Typography
                    variant="body1"
                    component="span"
                    color="white"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    Biology
                  </Typography>
                </Paper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card>
                <Paper sx={{ padding: 2, bgcolor: blueGrey[600] }}>
                  <Typography
                    variant="body1"
                    component="span"
                    color="white"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    Chemistry
                  </Typography>
                </Paper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card>
                <Paper sx={{ padding: 2, bgcolor: blueGrey[700] }}>
                  <Typography
                    variant="body1"
                    component="span"
                    color="white"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    Literature
                  </Typography>
                </Paper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card>
                <Paper sx={{ padding: 2, bgcolor: blueGrey[800] }}>
                  <Typography
                    variant="body1"
                    component="span"
                    color="white"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    Statistics
                  </Typography>
                </Paper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card>
                <Paper sx={{ padding: 2, bgcolor: blueGrey[900] }}>
                  <Typography
                    variant="body1"
                    component="span"
                    color="white"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    Society
                  </Typography>
                </Paper>
              </Card>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={{ borderRadius: 4, p: 3 }}>
              <Box
                sx={{
                  mb: 4,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon path={mdiFolderEditOutline} size={1.2} color="#222" />
                  <Typography variant="h5" sx={{ ml: 1, fontWeight: "bold" }}>
                    Draft
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    path={mdiClockTimeFourOutline}
                    size={0.7}
                    color="#00000099"
                  />
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ ml: 1 }}
                  >
                    3 min ago
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ p: 0, mb: 0 }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                  Minimalist design
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  Introduction
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen...
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Link
                  href="#"
                  underline="always"
                  variant="body1"
                  color="text.primary"
                  sx={{ fontWeight: "bold" }}
                >
                  Read more
                </Link>
                <IconButton aria-label="delete">
                  <Icon path={mdiDelete} size={1} color="#222" />
                </IconButton>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={{ borderRadius: 4, p: 3 }}>
              <Box
                sx={{
                  mb: 4,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon path={mdiGesture} size={1.3} color="#222" />
                  <Typography variant="h5" sx={{ ml: 1, fontWeight: "bold" }}>
                    Draft
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    path={mdiClockTimeFourOutline}
                    size={0.7}
                    color="#00000099"
                  />
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ ml: 1 }}
                  >
                    3 min ago
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ position: "relative", mb: 2 }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                  My lizard
                </Typography>
                <CardMedia
                  sx={{ borderRadius: 3 }}
                  component="img"
                  height="140"
                  image="https://images.pexels.com/photos/1158783/pexels-photo-1158783.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="green iguana"
                />
              </Box>
              <CardContent sx={{ p: 0, mb: 0 }}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  Introduction
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Minim dolor in amet nulla laboris enim dolore consequat..
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Link
                  href="#"
                  underline="always"
                  variant="body1"
                  color="text.primary"
                  sx={{ fontWeight: "bold" }}
                >
                  Read more
                </Link>
                <IconButton aria-label="delete">
                  <Icon path={mdiDelete} size={1} color="#222" />
                </IconButton>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <Box
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon path={mdiPaletteOutline} size={1.3} color="#222" />
                  <Typography variant="h5" sx={{ ml: 1, fontWeight: "bold" }}>
                    Inspirations
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ position: "relative", mb: 2 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image="https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="green iguana"
                ></CardMedia>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 2,
                    background: "#000000d1",
                  }}
                >
                  <Typography variant="body1" color="white" sx={{ mb: 1 }}>
                    Artist
                  </Typography>
                  <Typography variant="h5" color="white" sx={{ mb: 1 }}>
                    Cameron Williamson
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ p: 3, mb: 0 }}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  Introduction
                </Typography>
                <Typography variant="body1">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests..
                </Typography>
              </CardContent>
              <Box
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Link
                  href="#"
                  underline="always"
                  variant="body1"
                  color="text.primary"
                  sx={{ fontWeight: "bold" }}
                >
                  Views
                </Link>
                <AvatarGroup max={5}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                  />
                  <Avatar
                    alt="Travis Howard"
                    src="https://randomuser.me/api/portraits/women/24.jpg"
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src="https://randomuser.me/api/portraits/men/54.jpg"
                  />
                  <Avatar
                    alt="Agnes Walker"
                    src="https://randomuser.me/api/portraits/women/92.jpg"
                  />
                </AvatarGroup>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <CardHeader
                sx={{ p: 3 }}
                avatar={
                  <Avatar
                    sx={{ bgcolor: purple[500], width: 50, height: 50 }}
                    aria-label="recipe"
                    src="https://randomuser.me/api/portraits/men/4.jpg"
                  >
                    E
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <Icon path={mdiDotsVertical} size={1.3} color="#222" />
                  </IconButton>
                }
                title={
                  <Link
                    href="#"
                    variant="h6"
                    color="black"
                    underline="none"
                    sx={{ fontWeight: "600" }}
                  >
                    Robert Jones
                  </Link>
                }
                subheader="January 22, 2021"
              />
              <CardContent sx={{ p: 3, mr: -3, ml: -3 }}>
                <Box sx={{ px: 3 }}>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmodelit sed do eiusmodelit sed do eiusmodelit sed do
                    eiusmod{" "}
                    <Link href="#" sx={{ fontWeight: 600 }}>
                      #ui
                    </Link>{" "}
                    <Link href="#" sx={{ fontWeight: 600 }}>
                      #uxui
                    </Link>{" "}
                    <Link href="#" sx={{ fontWeight: 600 }}>
                      #userinterface
                    </Link>{" "}
                    <Link href="#" sx={{ fontWeight: 600 }}>
                      #webdeveloper
                    </Link>{" "}
                    <Link href="#" sx={{ fontWeight: 600 }}>
                      #card
                    </Link>
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 1,
                    fontWeight: "bold",
                    p: 3,
                    bgcolor: pink[600],
                    color: "#ffffff",
                  }}
                >
                  This impressive paella is a perfect party dish
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <Box
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Web trends
                  </Typography>
                </Box>
                <IconButton aria-label="settings">
                  <Icon path={mdiPencil} size={1.1} color="#222" />
                </IconButton>
              </Box>
              <Box
                sx={{ height: "1px", width: "100%", bgcolor: grey[100] }}
              ></Box>
              <CardContent sx={{ p: 3, mb: 0 }}>
                <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold" }}>
                  News
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  14 May 2014
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen..
                </Typography>
                <CardMedia
                  component="img"
                  image="https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  sx={{ borderRadius: 3 }}
                />
                <Box
                  sx={{
                    display: "flex",
                    pt: 2,
                    pb: 2,
                    pl: 3,
                    bgcolor: grey[50],
                    mt: 2,
                    mr: -3,
                    ml: -3,
                  }}
                >
                  <Link
                    href="#"
                    underline="always"
                    variant="body1"
                    color="text.primary"
                    sx={{
                      fontWeight: "bold",
                      borderRadius: 2,
                    }}
                  >
                    Read more
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <CardMedia
                component="img"
                image="https://images.pexels.com/photos/2531608/pexels-photo-2531608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <CardContent sx={{ p: 3, mb: 0 }}>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold" }}>
                    Quantity
                  </Typography>
                  <Typography variant="body1">
                    Select the quantity you want of this product
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mb: 4,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      pt: 1,
                      pb: 1,
                      pr: 3,
                      pl: 3,
                      bgcolor: grey[100],
                      borderRadius: 2,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", fontSize: "17px" }}
                    >
                      1
                    </Typography>
                  </Box>
                  <Box>
                    <Button variant="body1">
                      <Icon path={mdiMinus} size={1.3} />
                    </Button>
                    <Button variant="body1">
                      <Icon path={mdiPlus} size={1.3} />
                    </Button>
                  </Box>
                </Box>
                <Typography variant="body1" color="#000000" sx={{ mb: 3 }}>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen..
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
            <Card sx={CARD_PROPERTY}>
              <CardHeader
                sx={{ p: 3 }}
                avatar={
                  <Avatar
                    sx={{ bgcolor: purple[500], width: 50, height: 50 }}
                    aria-label="recipe"
                    src="https://randomuser.me/api/portraits/women/21.jpg"
                  >
                    E
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <Icon path={mdiDotsVertical} size={1.3} color="#222" />
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
                    Marina Jimenez
                  </Link>
                }
                subheader="January 22, 2021"
              />
              <CardContent sx={{ p: 3, mb: 0 }}>
                <Typography variant="h5" sx={{ fontWeight: "800" }}>
                  Web Design templates Selection
                </Typography>
                <Box>
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Image"
                    sx={{ my: 3, borderRadius: 3 }}
                  />
                </Box>
                <Typography variant="body1" sx={{ mb: 3, color: "#000" }}>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen..
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default SampleMaterialUICard;
