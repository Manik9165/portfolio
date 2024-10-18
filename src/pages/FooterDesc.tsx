import { Grid, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const FooterDescription = () => {
  return (
    <Grid className="footer_parent_container">
      <Grid container className="footer_child_container">
        <Grid item xs={12} className="footer_description_container">
          <Typography variant="h2" className="description_title">
            Liked my work. Let's connect to turn ideas into websites.
          </Typography>
          <Grid className="footer_phone_description">
            <LocalPhoneIcon />
            <Typography className="description_phone">
              +91 9165652282
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterDescription;
