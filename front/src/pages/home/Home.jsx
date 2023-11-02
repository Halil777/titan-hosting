import { Button, Container, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import RecomendationComponent from "./RecomendationComponent";
import PerfectComponent from "./PerfectComponent";
import RentComponent from "./RentComponent";
import RentServer from "./RentServer";
import { useTranslation } from "react-i18next";
import NewsCompany from "./NewsCompany";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title> TitanHosting </title>
      </Helmet>
      <div style={{ background: "#1A3378", paddingTop: "150px" }}>
        <Container>
          <Swiper
            modules={[Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <Grid container>
                <Grid item lg={6} sm={12} xs={12}>
                  <Typography variant="h2" color="white">
                    {t("superServerNider")}
                  </Typography>
                  <Typography pt={4} color="white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam accusamus blanditiis perspiciatis dignissimos, illum
                    at suscipit quos harum debitis. Accusantium, omnis
                    aspernatur nemo expedita sint vitae ex repellat aliquid
                    minima!
                  </Typography>
                </Grid>
                <Grid item lg={6} sm={12} xs={12}>
                  <img
                    src="./gif/SUV4.gif"
                    alt="gif1"
                    style={{ width: "100%", height: "40vh" }}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                  fontSize: "18px",
                  mb: 10,
                  mt: 7,
                }}
              >
                podrobnoye
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Grid container>
                <Grid item lg={6} sm={12} xs={12}>
                  <Typography variant="h2" color="white">
                    Superservery <br /> v Niderlandah !
                  </Typography>
                  <Typography pt={4} color="white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam accusamus blanditiis perspiciatis dignissimos, illum
                    at suscipit quos harum debitis. Accusantium, omnis
                    aspernatur nemo expedita sint vitae ex repellat aliquid
                    minima!
                  </Typography>
                </Grid>
                <Grid item lg={6} sm={12} xs={12}>
                  <img
                    src="./gif/SUV4.gif"
                    alt="gif1"
                    style={{ width: "100%", height: "40vh" }}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                  fontSize: "18px",
                  mb: 10,
                  mt: 7,
                }}
              >
                podrobnoye
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Grid container>
                <Grid item lg={6} sm={12} xs={12}>
                  <Typography variant="h2" color="white">
                    Superservery <br /> v Niderlandah !
                  </Typography>
                  <Typography pt={4} color="white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam accusamus blanditiis perspiciatis dignissimos, illum
                    at suscipit quos harum debitis. Accusantium, omnis
                    aspernatur nemo expedita sint vitae ex repellat aliquid
                    minima!
                  </Typography>
                </Grid>
                <Grid item lg={6} sm={12} xs={12}>
                  <img
                    src="./gif/giphy.gif"
                    alt="gif1"
                    style={{ width: "100%", height: "60vh" }}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                  fontSize: "18px",
                  mb: 10,
                  mt: 7,
                }}
              >
                podrobnoye
              </Button>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
      <Container>
        <RecomendationComponent />
      </Container>
      <PerfectComponent />
      <RentComponent />
      <RentServer />
      <NewsCompany />
    </>
  );
};

export default Home;
