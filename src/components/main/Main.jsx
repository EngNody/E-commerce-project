import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  IconButton,
  Rating,
  ToggleButton,
  useTheme,
} from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
// import { Scale } from "@mui/icons-material";

export default function main() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const theme = useTheme();

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container sx={{ my: 9 }}>
      <Stack
        gap={3}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <Box>
          <ToggleButtonGroup
            color="error"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected ": {
                border: "1px solid rgba(233, 69,96,0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value="left"
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>
            <ToggleButton
              className="myButton"
              value="center"
              aria-label="centered"
              sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            >
              Men Category
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value="right"
              aria-label="right aligned"
            >
              Women Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-around"}
      >
        {["aaa", "bbb", "ccc"].map((item) => {
          return (
            <Card
              key={item}
              sx={{
                maxWidth: 333,
                mt: 6,
                mx: 1,
                ":hover .MuiCardMedia-root": { scale:" 1.1 ",transition:"0.4s",rotate:"1deg"},
              }}
            >
              <CardMedia
                sx={{ height: 270 }}
                image="static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography gutterBottom variant="h6" component={"div"}>
                    T-shirt
                  </Typography>

                  <Typography variant="subtitle1" component={"p"}>
                    $12.99
                  </Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>

              <CardActions
                sx={{
                  textTransform: "capitalize",
                  justifyContent: "space-between",
                }}
              >
                <Button size="large" variant="outlined" onClick={handleClickOpen}>
                  <AddShoppingCartIcon
                    fontSize="small"
                    sx={{ marginRight: 1 }}
                  />
                  Add to cart
                </Button>

                <Rating
                  name="read-only"
                  value={4.5}
                  readOnly
                  precision={0.5}
                  size="small"
                />
              </CardActions>
            </Card>
          );
        })}
           
      </Stack>

 <Dialog
        sx={{".MuiPaper-root":{minWidth:{xs:"100%",md:800}}}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
    
     <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 0,
              right: 10,
              ":hover": { color: "red", rotate: "180deg", transition: "0.5s" },
            }}
          >
            <Close />
          </IconButton>
          <ProductDetails/>


        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Hello
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}



      </Dialog>

    </Container>
  );
}
