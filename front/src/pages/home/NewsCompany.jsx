import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { newsItems } from "./newsItems.mjs";
import { useNavigate } from "react-router-dom";

const NewsCompany = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <Container>
        <Typography variant="h3" textAlign="center" color="#22376F">
          {t("companyNews")}
        </Typography>
        <Typography variant="h5" textAlign="center" mt={3} color="gray">
          {t("stayUpToDate")}
        </Typography>
        <Grid container mt={5} spacing={5}>
          {newsItems.map((item, i) => (
            <Grid key={`new_items_key${i}`} item lg={4} md={6} sm={6} xs={12}>
              <Box
                sx={{
                  background: "#EDF2FF",
                  borderRadius: "6px",
                  height: "600px",
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
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          mt={2}
        >
          <Button
            onClick={() => navigate("/news")}
            sx={{
              background: "#84D584",
              color: "#fff",
              fontSize: "17px",
              fontWeight: 600,
              textTransform: "none",
              width: "200px",
              height: 50,
              "&:hover": {
                background: "#84D584",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            {t("moreNews")}
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default NewsCompany;
