import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: '#a57352', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom color='#fff'>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="#fff"
          component="p"
        >
          {description}
        </Typography>
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;