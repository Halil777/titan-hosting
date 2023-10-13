import Header from "./Header";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import VpsVdsServers from "./vps/VpsVdsServers";

const Navbar = () => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          // position: "fixed",
          width: "100%",
          top: "60px",
          left: 0,
          right: 0,
          background: "#254086",
          height: "80px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Stack direction="row" justifyContent="space-between">
            <Stack>
              <Typography variant="h4" color={"white"}>
                Titan Hosting
              </Typography>
            </Stack>
            <Stack direction="row" spacing={3} alignItems="center">
              <VpsVdsServers />
              <Button variant="text">hi-cpu vps/vds </Button>
              <Button variant="text">vps storage </Button>
              <Button variant="text">ssl </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default Navbar;
