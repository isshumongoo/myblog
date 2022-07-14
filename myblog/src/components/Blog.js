import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import SchoolIcon from '@mui/icons-material/School';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';




const sections = [
  { title: 'Latest Hips', url: 'https://www.tiktok.com/@humongooo/video/7118787621077306667?is_from_webapp=1&sender_device=pc&web_id=7114664421088052779' },
  { title: 'TikTok', url: 'https://www.tiktok.com/@humongooo?is_from_webapp=1&sender_device=pc' },
  { title: 'Culture', url: '/BlogCulture' },
  { title: 'School', url: 'https://howard.edu/' },
  { title: 'Future goals', url: '#' },
  { title: 'About Me', url: '/BlogAboutMe' },
  { title: 'Interests', url: '#'},
];

const mainFeaturedPost = {
  title: 'Home, Not A House',
  description:
    "Wassup y'all. it's John!",
  image: 'IMG_7051.JPG',
  imageText: 'main image description',
};

const featuredPosts = [
  {
    title: 'About Me',
    date: 'Posted 7.11.2022',
    description:
      'Im an 18 year old with two big goals! Completing my degree at Howard, and becoming a large infleuncer',
    image: 'Me.jpg',
    imageLabel: 'My Picture',
    url: '/BlogAboutMe',
  },
  {
    title: 'Educational Goal',
    date: 'Thought of 1.30.2022',
    description:
      'My educational goal is to complete a degree at Howard majoring in Computer Science, HU 2026',
    image: 'Howard.png',
    imageLabel: 'Howard Image',
  },
];

const featuredPosts2 = [
  {
    title: 'Fav anime',
    date: 'Anime started 6.22.2019',
    description: 'One Piece is the best, if you think so you are a hater. If you say it is too long, it just sounds like commitment issues to me',
    image: 'Choppergif.gif',
    imageLabel: 'Chopper pic',
    
  },
];

const sidebar = {
  title: 'Tiny About',
  
  description:
    'A student/influencer manifesting his own success, call him black excellence! Help my college journey by hitting that AMazon registry',
  archives: [
    //Empty for now
  ],
  social: [
    { name: 'TikTok', icon: FacebookIcon, url: 'https://www.tiktok.com/@humongooo?is_from_webapp=1&sender_device=pc' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/itaint.humongo/' },
    { name: 'College registry', icon: SchoolIcon, url: 'https://www.amazon.com/hz/wishlist/ls/3U47GNEJY4OVU/ref=nav_wishlist_lists_2'},
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" color='#fff1da'>
        <Header title="John In the Building" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 4 }}>
          {featuredPosts2.map((post) => (
              <FeaturedPost key={post.title} post={post}/>
            ))}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
          
        </main>
      </Container>
      <Footer
        title="Site's End"
        description="This page is no finished! Ideas are coming in the future, no doubt!"
      />
    </ThemeProvider>
  );
}