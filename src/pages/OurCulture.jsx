import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import './OurCulture.css';
import {
  Box,
  Container,
  Typography,
  Button,
  Breadcrumbs,
  Grid,
  Link
} from '@mui/material';
import { gsap } from 'gsap';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import WebIcon from '@mui/icons-material/Language';
import WomensDay from '../assets/womensday.webp';
import SAP from '../assets/sapprogram.webp';
import FunFriday from '../assets/Funfriday.webp';
import CloudInternship from '../assets/intershipcloud.webp';
import DP from '../assets/mainlogo.avif';
import OfcTeam from '../assets/culture-heroImg.webp';
import CultureOne from '../assets/culture1.webp';
import CultureTwo from '../assets/culture2.webp';
// import CultureThree from '../assets/culture3.webp';
import CultureFour from '../assets/culture4.webp';
import CultureFive from '../assets/culture5.webp';
import CultureSix from '../assets/our-culture4.webp';
import internshipTuti from '../assets/tuti-interns.webp';

const OurCulture = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [likedPosts, setLikedPosts] = useState(new Set());
  const VSoftPurple = '#803082';
  const VSoftGray = '#999999';
  const headingRef = useRef();
  const subHeadingRef = useRef();
  const descRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50, scale: 1.95 },
      {
        opacity: 1,
        y: 0,    
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
      }
    )

    tl.fromTo(
      subHeadingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      },
      '-=0.8' // Overlap with previous
    );

    tl.fromTo(
      descRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      },
      '-=0.7'
    );

    return () => {
      gsap.killTweensOf([headingRef.current, subHeadingRef.current, descRef.current]);
    };
  }, []);

  const culturePosts = [
    {
      id: 1,
      title: "Women's Day 2025",
      image: WomensDay,
      author: "VSoft",
      authorAvatar: DP,
      likes: 45,
      comments: 12,
      description: "Women's Day is a special event | celebrating the strength, resilience, and brilliance of women in various fields of life.",
      tags: ["#WomenEmpowerment", "#WomenLeadership", "#Women'sRights", "#WomenInTech"],
      category: "festival"
    },
    {
      id: 2,
      title: "Fun Friday",
      image: FunFriday,
      author: "VSoft",
      authorAvatar: DP,
      likes: 78,
      comments: 32,
      description: "Fun Friday is a day full of laughter, fun, and joyful moments. It's a day to share, laugh, and have a good time with friends and family.",
      tags: ["#Fun", "#Laugh", "#Joke", "#Humor"],
      category: "fun"
    },
    {
      id: 3,
      title: "Cloud Internship",
      image: CloudInternship,
      author: "VSoft",
      authorAvatar: DP,
      likes: 67,
      comments: 23,
      description: "Learning, Growing, and creating an impact every day at VSoft Solutions! Cloud Internship!.",
      tags: ["#Cloud", "#cloudinternship", "#Internship", "#Excellence"],
      category: "awards"
    },
    {
      id: 4,
      title: "Full Stack Internship",
      image: CultureSix,
      author: "VSoft",
      authorAvatar: DP,
      likes: 79,
      comments: 13,
      description: "Internship Completed! St. John’s College student shines in Full Stack Development.",
      tags: ["#react", "#php", "#HTML&CSS", "#fullstack", "#Internship", "#Excellence"],
      category: "certification"
    },
    {
      id: 5,
      title: "SAP Training Workshop",
      image: SAP,
      author: "VSoft",
      authorAvatar: DP,
      likes: 89,
      comments: 21,
      description: "Successfully completed our SAP training workshop! Empowering our team with cutting-edge knowledge and skills. A very good session to initiate a creative technologies into VSoft solutions at Tirunelveli !",
      tags: ["#SAP", "#Workshop", "#saptechnology", "#Technology"],
      category: "festival"
    },
    {
      id: 6,
      title: "internship Alerts",
      image: CultureOne,
      author: "VSoft",
      authorAvatar: DP,
      likes: 109,
      comments: 31,
      description: "INTERNSHIP ALERT at VSoft Solutions! Ready to Move beyond the classroom",
      tags: ["#fullstack", "#Workshop", "#internship", "#Technology"],
      category: "festival"
    },

    {
      id: 7,
      title: "Digital Marketing Internship",
      image: CultureTwo,
      author: "VSoft",
      authorAvatar: DP,
      likes: 189,
      comments: 61,
      description: "Internship Milestone Achieved! Proud to have successfully completed a 2 months Digital Marketing internship at VSoft Solutions.",
      tags: ["#SEO", "#digitalmarketing", "#metads", "#Technology", '#internship'],
      category: "festival"
    },
    {
      id: 8,
      title: "Full Stack Internship",
      image: CultureFour,
      author: "VSoft",
      authorAvatar: DP,
      likes: 149,
      comments: 31,
      description: "Full Stack Internship in Action at @VSoftsolutions!, From whiteboards to real-world applications - our talented interns are learning by doing.",
      tags: ["#SAP", "#Workshop", "saptechnology", "Technology"],
      category: "festival"
    },
    {
      id: 9,
      title: "WordPress Development Internship",
      image: CultureFive,
      author: "VSoft",
      authorAvatar: DP,
      likes: 89,
      comments: 68,
      description: "internship Achievements Unlocked! Excited to share that I've successfully completed a 15 days WordPress Development internship at VSoft Solutions !",
      tags: ["#wordpress", "#Workshop", "#cms", "#Technology"],
      category: "festival"
    },
    {
      id: 10,
      title: "UI/UX Internship",
      image: internshipTuti,
      author: "VSoft",
      authorAvatar: DP,
      likes: 74,
      comments: 13,
      description: "1-Month UI/UX Internship completed at VSoft Solutions – Tuticorin student!",
      tags: ["#ui/ux", "#figma", "#internship", "#Technology"],
      category: "certification"
    },
  ];

  const handleLike = (postId) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
    }
    setLikedPosts(newLiked);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'festival': return '';
      case 'teambuilding': return '';
      case 'awards': return '';
      case 'food': return '';
      case 'fun': return '';
      default: return '';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'festival': return '#ff6b35';
      case 'teambuilding': return '#4ecdc4';
      case 'awards': return '#ffd700';
      case 'food': return '#ff8a80';
      case 'fun': return '#66bb6a';
      default: return '#4ecdc4';
    }
  };

  return (
    <div className="culture-container">
      <SEO
        title="Our Culture | VSoft Solutions - Work. Laugh. Grow."
        description="Discover the vibrant culture at VSoft Solutions. Experience our work environment, team activities, celebrations, and commitment to fostering creativity, innovation, and professional growth."
        keywords="company culture, work environment, team activities, VSoft solutions culture"
        canonical="/culture"
      />
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
          {/* Breadcrumbs */}
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: '#666' }} />}
            aria-label="breadcrumb"
            sx={{ justifyContent: 'center', display: 'flex', mb: 4 }}
          >
            <Link
              underline="hover"
              onClick={() => navigate('/')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                color: '#333',
                textDecoration: 'none',
                fontSize: { xs: '14px', md: '16px' },
                '&:hover': { color: '#ffbe01' }
              }}
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
              Home
            </Link>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              color: '#666',
              fontSize: { xs: '14px', md: '16px' }
            }}>
              <WebIcon sx={{ mr: 0.5 }} fontSize="small" />
              Our Culture
            </Box>
          </Breadcrumbs>

          {/* Hero Content */}
          <Box sx={{ textAlign: 'center', px: { xs: 2, md: 0 } }}>
            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              ref={headingRef}
              sx={{
                mb: 2,
                color: '#000',
                lineHeight: 1.2
              }}
            >
              Our Culture
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mb: 3,
                color: '#ffbe01',
                fontSize: { xs: '2rem', md: '2.5rem' },
                lineHeight: 1.2,
                fontWeight: 700
              }}
            >
              Work. Laugh. Grow.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                maxWidth: '700px',
                mx: 'auto',
                color: '#666',
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                lineHeight: 1.7
              }}
            >
              At VSoft Solutions, we celebrate ideas, nurture talent, and grow together as one. Our vibrant culture fosters creativity, collaboration, and continuous learning in an environment where every team member can thrive and make a meaningful impact.
            </Typography>

            {/* Buttons */}
            <Box
              sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  borderRadius: '24px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 'bold',
                  color: '#111',
                  backgroundColor: '#ffbd28',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(128, 48, 130, 0.3)',
                  '&:hover': {
                    backgroundColor: '#ffbf28c5',
                    boxShadow: '0 6px 20px rgba(128, 48, 130, 0.4)',
                    transform: 'translateY(-2px)',
                  },
                }}
                href="/career"
              >
                Join Our Team
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <div className="culture-main">
        {/* Culture Posts Grid */}
        <div className="posts-grid">
          {culturePosts.map((post) => (
            <div key={post.id} className="post-card" onClick={() => setSelectedPost(post)}>
              <div className="card-image-container">
                <img
                  src={post.image}
                  alt={post.title}
                  className="card-image"
                />

              </div>

              <div className="card-content">
                <div className="author-info">
                  <img src={post.authorAvatar} alt={post.author} className="author-avatar" />
                  <span className="author-name">{post.author}</span>
                </div>

                <h3 className="card-title">{post.title}</h3>

                <p className="card-description">{post.description}</p>

                <div className="card-actions">
                  <div className="action-buttons">
                    <div className="action-group">
                      <button
                        className={`action-btn ${likedPosts.has(post.id) ? 'liked' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(post.id);
                        }}
                      >
                        {likedPosts.has(post.id) ? '❤️' : '🤍'}
                        <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                      </button>
                      <button className="action-btn">
                        💬 <span>{post.comments}</span>
                      </button>
                    </div>

                  </div>

                  <div className="tags">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Post Detail Modal */}
      {selectedPost && (
        <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-author-info">
                <img src={selectedPost.authorAvatar} alt={selectedPost.author} className="modal-author-avatar" />
                <div>
                  <h2 className="modal-title">{selectedPost.title}</h2>
                  <p className="modal-author">by {selectedPost.author}</p>
                </div>
              </div>
              <button className="close-btn" onClick={() => setSelectedPost(null)}>✕</button>
            </div>

            <div className="modal-body">
              <div className="modal-image-container">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="modal-image"
                />

              </div>

              <div className="modal-text-content">
                <p className="modal-description">{selectedPost.description}</p>

                <div className="modal-divider"></div>

                <div className="modal-actions">
                  <div className="modal-action-buttons">
                    <button
                      className={`modal-action-btn ${likedPosts.has(selectedPost.id) ? 'liked' : ''}`}
                      onClick={() => handleLike(selectedPost.id)}
                    >
                      {likedPosts.has(selectedPost.id) ? '❤️' : '🤍'}
                      <span>{selectedPost.likes + (likedPosts.has(selectedPost.id) ? 1 : 0)} likes</span>
                    </button>
                    <button className="modal-action-btn">
                      💬 <span>{selectedPost.comments} comments</span>
                    </button>
                  </div>
                </div>

                <div className="modal-tags">
                  {selectedPost.tags.map((tag) => (
                    <span key={tag} className="modal-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Box
        sx={{
          width: '100%',
          // background: `linear-gradient(90deg,rgb(15, 93, 145) 0%,rgb(118, 99, 124) 50%, rgba(165, 121, 180, 0.95) 100%)`,
          py: { xs: 6, md: 8 },
          color: 'black',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Abstract triangle shape inspired by logo */}
        <Box
          sx={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: `${VSoftPurple}22`,
            transform: 'rotate(45deg)',
            top: '-150px',
            left: '-150px',
            borderRadius: '30px',
            zIndex: 1,
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Left side - "We are VSoft Solutions" */}
            <Grid item xs={12} md={5}>
              <Box>
                <Typography
                  variant="h1"
                  ref={headingRef}
                  sx={{
                    fontSize: { xs: '3rem', md: '3rem' },
                    fontWeight: 700,
                    color: 'black',
                    lineHeight: 1.1,
                    mb: 1,
                  }}
                >
                  We’re More Than a Team – We’re a Family at
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3rem', md: '4rem' },
                    fontWeight: 700,
                    color: 'black',
                    lineHeight: 1.1,
                  }}
                >
                  VS<span style={{ color: '#ffbd28', fontSize: '3rem' }}>o</span>ft
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2rem', md: '2.8rem' },
                    fontWeight: 500,
                    color: 'black',
                    letterSpacing: '4px',
                    lineHeight: 1.1,
                  }}
                >
                  SOLUT<span style={{ color: '#ffbd28', fontSize: '2.5rem' }}>I</span>ONS
                </Typography>
              </Box>
            </Grid>

            {/* Right side - Company description */}
            <Grid item xs={12} md={7}>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    mb: 3,
                    lineHeight: 1.6,
                  }}
                >
                  At VSoft Solutions, we celebrate ideas, nurture talent, and grow together as one.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default OurCulture;