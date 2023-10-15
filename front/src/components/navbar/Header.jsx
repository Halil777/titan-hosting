import { Box, Container, Stack } from "@mui/material";
import { headerContainer, headerItemsBlock } from "./style.mjs";
import Language from "./Language";
import PaymentType from "./PaymentType";
import ContactTypes from "./ContactTypes";

const Header = () => {
  return (
    <Box sx={headerContainer}>
      <Container>
        <Stack sx={headerItemsBlock} direction="row">
          <PaymentType />
          <ContactTypes />
          <Language />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
