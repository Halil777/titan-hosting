import { Box, Button, Grid, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { vpsserveritems } from "./vpsItems.mjs";

const VpsVdsServers = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button onClick={handleClick}>VPS/VDS servers</Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Grid container>
          {vpsserveritems.map((item, i) => {
            return (
              <Grid item lg={4} key={`vps_servers_key${i}`}>
                <MenuItem onClick={handleClose}>
                  <Box display="flex" alignItems="center" gap={2}>
                    <img src={item.pic} style={{ width: "25px" }} alt="" />
                    <Typography>{item.title}</Typography>
                  </Box>
                </MenuItem>
              </Grid>
            );
          })}
        </Grid>
      </Menu>
    </div>
  );
};

export default VpsVdsServers;
