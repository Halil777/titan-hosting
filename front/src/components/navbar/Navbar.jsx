import Header from "./Header";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import VpsVdsServers from "./vps/VpsVdsServers";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import Language from "./Language";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check if the user has scrolled more than 100vh
      if (window.scrollY > window.innerHeight) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          top: isScrolled ? 0 : "60px",
          left: 0,
          right: 0,
          background: isScrolled ? "#192F75" : "#254086",
          height: "80px",
          display: "flex",
          alignItems: "center",
          zIndex: 1000,
        }}
        className={isScrolled ? "blur-effect" : ""}
      >
        <Container>
          <Stack direction="row" justifyContent="space-between">
            <Stack>
              <Typography
                variant="h4"
                color={"white"}
                onClick={() => navigate("/")}
                sx={{ cursor: "pointer" }}
              >
                Titan Hosting
              </Typography>
            </Stack>
            <Stack direction="row" spacing={3} alignItems="center">
              <VpsVdsServers />
              <Button
                sx={{
                  color: location.pathname === "/hi-cpu" ? "#FFA500" : "#fff",
                  textDecoration:
                    location.pathname === "/hi-cpu" ? "underline" : "none",
                  textDecorationColor: "#fff",
                  textUnderlineOffset: "5px",
                }}
                variant="text"
                onClick={() => navigate("/hi-cpu")}
              >
                hi-cpu vps/vds
              </Button>

              <Button
                sx={{
                  color:
                    location.pathname === "/vds-storage" ? "#FFA500" : "#fff",
                  textDecoration:
                    location.pathname === "/vds-storage" ? "underline" : "none",
                  textDecorationColor: "#fff",
                  textUnderlineOffset: "5px",
                }}
                variant="text"
                onClick={() => navigate("/vds-storage")}
              >
                vps storage
              </Button>
              <Button
                sx={{
                  color: location.pathname === "/ssl" ? "#FFA500" : "#fff",
                  textDecoration:
                    location.pathname === "/ssl" ? "underline" : "none",
                  textDecorationColor: "#fff",
                  textUnderlineOffset: "5px",
                }}
                variant="text"
                onClick={() => navigate("/ssl")}
              >
                ssl
              </Button>
              <Box sx={{ display: isScrolled ? "" : "none" }}>
                <Language />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
      {showScrollToTop && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "fixed",
            width: "100%",
            height: "40px",
            zIndex: 2000,
            bottom: 0,
          }}
        >
          <IconButton onClick={scrollToTop}>
            <ArrowCircleUpIcon
              sx={{ color: "#FFA500", fontSize: 35 }}
              className="moving-image-ssl"
            />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default Navbar;
