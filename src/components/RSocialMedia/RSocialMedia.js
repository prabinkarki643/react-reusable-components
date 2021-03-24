import React from "react";
import { Fab, Grid } from "@material-ui/core";

export default function RSocialMedia({containerStyle,buttonSize="small",openInNewTab=true,spacing=1,...props}) {
  const socialMediaLinks = [
    {
      name: "Github",
      link: "https://github.com/githubprabin143",
      fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
      backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/prabin-karki-936546159/",
      fontAwesomeIcon: "fa-linkedin", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
      backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
    },
    {
      name: "Gmail",
      link: "mailto:prabinkarki643@gmail.com",
      fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
      backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/pravin.karki.98",
      fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
      backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/prabin_karki_143/",
      fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
      backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
    },
  ];
  return (
    <Grid container spacing={spacing} style={{width:'100%',...containerStyle}} {...props}>
      {socialMediaLinks.map((media,index) => {
        return (
          <Grid item key={index}>
            <Fab
              size={buttonSize}
              color="primary"
              aria-label={media.name}
              style={{backgroundColor: media.backgroundColor }}
              href={media.link}
              target={openInNewTab?"_blank":"_self"}
            >
              <i className={`fa ${media.fontAwesomeIcon}`}></i>
            </Fab>
          </Grid>
        );
      })}
    </Grid>
  );
}
