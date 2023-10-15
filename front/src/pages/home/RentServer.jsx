import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { vpsserveritems } from "../../components/navbar/vps/vpsItems.mjs";

const RentServer = () => {
  return (
    <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <Container>
        <Typography
          textAlign="center"
          color="orange"
          fontWeight={700}
          variant="h3"
        >
          Аренда сервера
        </Typography>
        <Box mt={5} sx={{ background: "#ECF2FE", p: 3, borderRadius: 4 }}>
          <Grid container>
            {vpsserveritems.map((item, i) => (
              <Grid
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}
                key={`rent_server_map_key${i}`}
                pt={3}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <img
                    src={item.pic}
                    style={{ width: "25px" }}
                    alt="rent servers"
                  />
                  <Typography>{item.title}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default RentServer;
