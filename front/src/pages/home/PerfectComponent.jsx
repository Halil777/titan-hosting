import {
  Box,
  Container,
  Grid,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { perfectItems } from "./perfectItems.mjs";

const PerfectComponent = () => {
  return (
    <div
      style={{
        background: "#EDF2FF",
        paddingTop: "70px",
        paddingBottom: "50px",
        marginTop: "40px",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            textDecoration: "underline",
            textUnderlineOffset: "10px",
            color: "#2B468D",
          }}
        >
          Мы стараемся быть идеальными во всем
        </Typography>

        <Grid container mt={10} spacing={10}>
          {perfectItems.map((item, i) => (
            <Grid
              item
              key={`perfect_items_key${i}`}
              lg={4}
              md={6}
              sm={6}
              xs={12}
            >
              <Box
                sx={{
                  background: "#fff",
                  padding: "40px",
                  borderRadius: "14px",
                  boxShadow: "2px 2px 5px rgba(0,0,0, 0.6)",
                  cursor: "pointer",
                  height: "400px",
                  transition: "0.6s",
                  "&:hover": {
                    boxShadow: "3px 4px 6px rgba(0,0,0, 01)",
                    mt: -3,
                  },
                }}
              >
                <Stack spacing={2} alignItems={"center"}>
                  <img
                    src={item.pic}
                    alt="pictures"
                    style={{ width: "160px" }}
                  />
                  <Typography sx={{ textAlign: "center" }}>
                    {item.title}
                  </Typography>
                  <Tooltip title={item.subTitle}>
                    <Typography sx={{ textAlign: "center" }}>
                      {item.subTitle.slice(0, 100)}...
                    </Typography>
                  </Tooltip>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default PerfectComponent;
