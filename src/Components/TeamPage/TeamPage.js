import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import "./TeamPage.css";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    margin: "1%",
  },
}));


const linkStyle = {
  margin: "auto",
};

export default function AutoGridNoWrap() {
  return (
    <div className="teamPage">
      <Root>
        <Box
          fontFamily="'Poppins', sans-serif"
          sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}
        >
          <Typography
            fontSize="5%"
            fontFamily="'Abril Fatface', cursive"
            textAlign="center"
          >
            About Travelgram
          </Typography>
          <Paper
            sx={{
              width: {
                xs: 320,
                sm: 500,
                md: 700,
              },
              my: 1,
              mx: "auto",
              p: 2,
            }}
          >
            <Grid justifyContent="center" container wrap="wrap" spacing={2}>
              <Grid item zeroMinWidth>
                <Typography
                  fontSize="15px"
                  fontFamily="'Poppins', sans-serif"
                  margin="20px"
                >
                  Travelgram invites all travelers to share their adventures.
                  Share your recent travels and keep in touch with old friends
                  and find new ones as you all share your memories in one place.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Typography
            fontSize="40px"
            fontFamily="'Abril Fatface', cursive"
            textAlign="center"
          >
            Meet The Team
          </Typography>
          <Paper
            sx={{
              width: {
                xs: 320,
                sm: 400,
                md: 600,
              },
              my: 1,
              mx: "auto",
              p: 2,
            }}
          >
            <Grid justifyContent="center" container wrap="wrap" spacing={2}>
              <Grid item>
                <Typography
                  //change font size moves image around
                  fontSize="30px"
                  fontFamily="'Poppins', sans-serif"
                  textAlign="center"
                  padding="5px"
                  margin="5px"
                >
                  Orawee Chantravutikorn
                </Typography>

                <Avatar
                  style={linkStyle}
                  sx={{
                    width: {
                      xs: 180,
                      sm: 250,
                    },
                    height: {
                      xs: 180,
                      sm: 250,
                    },
                  }}
                  alt="Orawee Chantravutikorn"
                  src="https://res.cloudinary.com/orawee/image/upload/v1634152166/LRG_DSC04871_o04xck.jpg"
                ></Avatar>
              </Grid>
              <Grid item zeroMinWidth>
                <Typography textAlign="center">
                  <div>
                    Orawee is responsible for the functionality of the
                    Login/Signup Component, as well as the functionality of the
                    Search bar in the Nav to provide a full stack experience for
                    the user. She designed the initial setup of the team page,
                    as well as contributed to vital CSS aspects of the app. She
                    also collaborated with the team with the initial builds on
                    the front-end, and back-end.
                  </div>
                  <a
                    target="blank"
                    href="https://www.linkedin.com/in/orawee-chantravutikorn/"
                  >
                      <i class="fab fa-linkedin icon"></i>
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            sx={{
              width: {
                xs: 320,
                sm: 400,
                md: 600,
              },
              my: 1,
              mx: "auto",
              p: 2,
            }}
          >
            <Grid justifyContent="center" container wrap="wrap" spacing={2}>
              <Grid item>
                <Typography
                  textAlign="center"
                  padding="5px"
                  margin="5px"
                  fontSize="30px"
                  fontFamily="'Poppins', sans-serif"
                >
                  Alex Delaney
                </Typography>
                <Avatar
                  style={linkStyle}
                  sx={{
                    width: {
                      xs: 180,
                      sm: 250,
                    },
                    height: {
                      xs: 180,
                      sm: 250,
                    },
                  }}
                  alt="Alex Delaney"
                  src="https://res.cloudinary.com/orawee/image/upload/v1637696028/Screen_Shot_2021-11-23_at_11.33.09_AM_edtp5x.png"
                ></Avatar>
              </Grid>
              <Grid item zeroMinWidth>
                <Typography textAlign="center">
                  <div>Alex is responsible for the functionality, design, and
                  responsiveness of the Feed and Explore components. She
                  implemented CRUD functionality on both pages to create for a
                  better user experience. She played a key role in the
                  functionality of the backend, which allowed each post to be
                  associated with its username data. She also collaborated with
                  the team with the initial builds on the front-end and back
                  end.
				  </div>

				  <a
                    target="blank"
                    href="https://www.linkedin.com/in/adelaney923/"
                  >
                      <i class="fab fa-linkedin icon"></i>
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            sx={{
              width: {
                xs: 320,
                sm: 400,
                md: 600,
              },
              my: 1,
              mx: "auto",
              p: 2,
            }}
          >
            <Grid justifyContent="center" container wrap="wrap" spacing={2}>
              <Grid item>
                <Typography
                  textAlign="center"
                  padding="5px"
                  margin="5px"
                  fontSize="30px"
                  fontFamily="'Poppins', sans-serif"
                >
                  Shinhee Park
                </Typography>
                <Avatar
                  style={linkStyle}
                  sx={{
                    width: {
                      xs: 180,
                      sm: 250,
                    },
                    height: {
                      xs: 180,
                      sm: 250,
                    },
                  }}
                  alt=""
                  src="https://res.cloudinary.com/orawee/image/upload/v1637695723/StudioGhibli/Screen_Shot_2021-11-23_at_11.28.05_AM_v7tfra.png"
                ></Avatar>
              </Grid>
              <Grid item zeroMinWidth>
                <Typography textAlign="center">
                  <div>Shinhee is responsible for the CRUD functionality of the
                  Create Post component. She also worked on the responsiveness
                  on the Nav Bar to optimize its functionality for mobile, and
                  desktop view. She assisted in some of the vital CSS aspects
                  throughout the app, and collaborated with the team with the
                  initial builds on the front-end, and back-end. She also
                  contributed in the administrative tasks such as, the ReadMe
                  updates, and the bios of each team member.
				  </div>
				  
				  <a
                    target="blank"
                    href="https://www.linkedin.com/in/shinhee-park/"
                  >
                      <i class="fab fa-linkedin icon"></i>
                  </a>

                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            sx={{
              width: {
                xs: 320,
                sm: 400,
                md: 600,
              },
              my: 1,
              mx: "auto",
              p: 2,
            }}
          >
            <Grid justifyContent="center" container wrap="wrap" spacing={2}>
              <Grid item>
                <Typography
                  textAlign="center"
                  padding="5px"
                  margin="5px"
                  fontSize="30px"
                  fontFamily="'Poppins', sans-serif"
                >
                  Daniel Lee
                </Typography>
                <Avatar
                  style={linkStyle}
                  sx={{
                    width: {
                      xs: 180,
                      sm: 250,
                    },
                    height: {
                      xs: 180,
                      sm: 250,
                    },
                  }}
                  alt="Daniel Lee"
                  src="https://res.cloudinary.com/orawee/image/upload/v1637704503/IMG_4291_so3m4j.jpg"
                ></Avatar>
              </Grid>
              <Grid item zeroMinWidth>
                <Typography textAlign="center">
                  <div>Daniel is responsible for the initial set up, design, and
                  functionality of both the Header and Footer Navs. He
                  contributed much of the CSS seen on our page, and fixed the
                  nitty gritty details within certain components. He also
                  collaborated with the team with the initial builds on the
                  front-end, and back-end.
				  </div>

				  <a
                    target="blank"
                    href="https://www.linkedin.com/in/daniel-m-lee-j062192/"
                  >
                      <i class="fab fa-linkedin icon"></i>
                  </a>

                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Root>
    </div>
  );
}
