import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Icon,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const PexelsCard = ({ pexelImage }) => {
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
              src={pexelImage.src.tiny}
            >
              E
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <Icon path={MoreVertIcon} size={1.3} color="#222" />
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
              {pexelImage.photographer}
            </Link>
          }
          subheader={pexelImage.photographer_id}
        />
        <Box>
          <CardMedia
            component="img"
            height="194"
            image={pexelImage.src.landscape}
            alt={pexelImage.alt}
          />
        </Box>
        <CardContent sx={{ p: 3, mb: 0 }}>
          <Typography variant="body1" sx={{ mb: 3 }} color="black">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen..
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default PexelsCard;
