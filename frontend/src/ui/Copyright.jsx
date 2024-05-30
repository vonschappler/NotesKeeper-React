import { CopyrightOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";

const Copyright = () => {
  return (
    <Grid
      container
      className="flex w-full flex-col items-center justify-center gap-2 text-xs text-white/50"
    >
      <span>
        <CopyrightOutlined fontSize="inherit" /> All rights reserved.
      </span>
      <span>(2024 - {new Date().getFullYear()})</span>
    </Grid>
  );
};

export default Copyright;
