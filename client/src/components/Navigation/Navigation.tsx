import logo from 'assets/images/spotify_logo_green.png';
import { Typography } from '@mui/material';
import { Container, Img, Link, Nav, SpaceBetween } from 'styled';

function Navigation() {
  return (
    <Nav>
      <Container>
        <Img src={logo} alt="" />
        <Typography variant="h5" color="white" fontWeight="bold">
          Spotify Dashboard
        </Typography>
      </Container>
      <SpaceBetween>
        {[
          {
            title: 'Home',
            link: '/',
          },
          {
            title: 'Profile',
            link: '/profile',
          },
        ].map(({ link, title }) => (
          <Link key={link} to={link}>
            {title}
          </Link>
        ))}
      </SpaceBetween>
    </Nav>
  );
}

export default Navigation;
