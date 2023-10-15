import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { moreNewsItems } from "./items.mjs";

const News = () => {
  const { t } = useTranslation();

  return (
    <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <Container>
        <Typography variant="h3" textAlign="center" sx={{ color: "#84D584" }}>
          {t("news")}
        </Typography>
        <Grid container mt={5} spacing={5}>
          {moreNewsItems.map((item, i) => (
            <Grid key={`new_items_key${i}`} item lg={4} md={6} sm={6} xs={12}>
              <Box
                sx={{
                  background: "#EDF2FF",
                  borderRadius: "6px",
                  height: "650px",
                }}
              >
                <Stack>
                  <img
                    src={item.pic}
                    className="hover-zoom-image"
                    alt="news pictures"
                    style={{ width: "100%", borderRadius: "6px 6px 0px 0px" }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      background: "#4AD4F7",
                      width: 120,
                      mt: -2.5,
                      ml: 4,
                    }}
                  >
                    {item.date}
                  </Button>
                  <Stack p={3}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontWeight: 700,
                        mt: 3,
                        fontSize: "17px",
                      }}
                    >
                      {t(item.title)}
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "center",
                        mt: 3,
                        fontSize: "17px",
                        color: "gray",
                      }}
                    >
                      {t(item.subTitle)}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default News;
