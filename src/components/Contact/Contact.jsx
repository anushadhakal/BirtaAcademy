// Services.jsx
import React, { useState, useRef, useEffect } from 'react';
import { 
  FaHashtag, 
  FaFileAlt, 
  FaFacebookSquare, 
  FaLaptopCode, 
  FaPalette, 
  FaVideo, 
  FaUserFriends, 
  FaBullseye 
} from 'react-icons/fa';
import styles from './Contact.module.css';

const ServiceCard = ({ title, description, icon, color, path, standardHeight, updateStandardHeight }) => {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);
  const contentRef = useRef(null);
  
  // Split description into short and full versions
  const shortDescription = description.split('-')[0].trim();
  
  // Contribute to finding the tallest card height
  useEffect(() => {
    if (cardRef.current && !expanded && updateStandardHeight) {
      // Get natural height of this card
      const naturalHeight = cardRef.current.scrollHeight;
      updateStandardHeight(naturalHeight);
    }
  }, [updateStandardHeight]);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div 
      ref={cardRef}
      className={styles.card}
      style={{ 
        '--card-accent-color': color,
        height: expanded ? 'auto' : standardHeight ? `${standardHeight}px` : 'auto',
        transition: 'height 0.3s ease',
        zIndex: expanded ? '10' : 'auto'
      }}
    >
      <div className={styles.iconWrapper} style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className={styles.bubbles}>
        <span className={styles.bubble}></span>
        <span className={styles.bubble}></span>
        <span className={styles.bubble}></span>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.cardDescription} ref={contentRef}>
        {expanded ? (
          <div dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br>').replace(/-/g, '• ') }} />
        ) : (
          <p>{shortDescription}</p>
        )}
      </div>
      <button className={styles.learnMore} onClick={toggleExpand}>
        <span>{expanded ? "Show Less" : "Learn More"}</span>
        <span className={`${styles.arrow} ${expanded ? styles.rotated : ''}`}>
          {expanded ? "↑" : "→"}
        </span>
      </button>
    </div>
  );
};

const Services = () => {
  // State to track standard height for all cards
  const [standardHeight, setStandardHeight] = useState(null);
  const [cardsRendered, setCardsRendered] = useState(false);
  
  // Function to determine the maximum height among all cards
  const updateStandardHeight = (height) => {
    setStandardHeight(prevHeight => Math.max(prevHeight || 0, height));
  };
  
  // Mark cards as rendered after a delay to ensure all heights are calculated
  useEffect(() => {
    const timer = setTimeout(() => {
      setCardsRendered(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: 'Social Media Marketing',
      description: 'At Madhyam Nepal, we help businesses grow by leveraging the power of social media platforms like Facebook, Instagram, LinkedIn, and TikTok. Our services include:\n-Strategic Planning: Tailored strategies to target your ideal audience.\n-Content Creation: Engaging visuals and posts that resonate with your audience.\n-Paid Advertising: Optimized ad campaigns for better reach and conversions.\n-Community Management: Building and managing relationships with your audience.\n-Performance Tracking: Detailed analytics to refine strategies for maximum ROI.\nLet us help you connect, engage, and convert through innovative social media solutions!',
      icon: <FaHashtag />,
      color: '#8EC36A',
      path: '/services/social-media-marketing'
    },
    {
      title: 'Content Marketing',
      description: 'At Madhyam Nepal, we craft compelling content to help your brand educate, engage, and convert your audience. Our content marketing services include:\n-Content Strategy: Developing tailored plans to align with your business goals.\n-Content Creation: Producing blogs, articles, videos, and infographics that add value.\n-SEO Optimization: Ensuring your content ranks higher on search engines.\n-Content Distribution: Sharing your content across the right platforms for maximum reach.\n-Performance Analysis: Tracking engagement and improving strategies for better results.\nLet us tell your story and build lasting connections with your audience!',
      icon: <FaFileAlt />,
      color: '#8EC36A',
      path: '/services/content-marketing'
    },
    {
      title: 'Meta Ads',
      description: 'Boost your business with highly targeted advertising on Meta platforms (Facebook and Instagram). At Madhyam Nepal, we provide:\n-Audience Targeting: Reach the right people based on demographics, interests, and behaviors.\n-Ad Design: Create visually appealing and engaging ad creatives.\n-Campaign Optimization: Continuously refine ads for maximum ROI.\n-Performance Tracking: Monitor key metrics like reach, engagement, and conversions.\n-Budget Management: Ensure cost-effective campaigns tailored to your goals.\nDrive growth and visibility with expert Meta ad strategies from Madhyam Nepal!',
      icon: <FaFacebookSquare />,
      color: '#8EC36A',
      path: '/services/meta-ads'
    },
    {
      title: 'Website Design & Development',
      description: 'At Madhyam Nepal, we create user-friendly and visually appealing websites tailored to your business needs. Our services include:\n-Custom Design: Unique, responsive, and brand-focused designs.\n-Web Development: Fast, secure, and scalable websites using the latest technologies.\n-E-commerce Solutions: Seamless online stores to boost your sales.\n-SEO-Friendly Structure: Optimized for better search engine rankings.\n-Maintenance and Support: Ensuring your website stays updated and runs smoothly.\nBuild a strong online presence with our expert website design and development services!',
      icon: <FaLaptopCode />,
      color: '#8EC36A',
      path: '/services/website-design'
    },
    {
      title: 'Graphic Design & Branding',
      description: 'At Madhyam Nepal, we bring your brand to life with stunning visuals and cohesive branding. Our services include:\n-Logo Design: Crafting memorable logos that represent your brand identity.\n-Brand Identity: Developing color palettes, typography, and guidelines for a consistent look.\n-Marketing Materials: Designing brochures, flyers, banners, and social media graphics.\n-Visual Storytelling: Creating designs that connect emotionally with your audience.\n-Rebranding: Refreshing your brand to stay relevant and competitive.\nMake a lasting impression with Madhyam Nepal\'s creative graphic design and branding services!',
      icon: <FaPalette />,
      color: '#8EC36A',
      path: '/services/graphic-design'
    },
    {
      title: 'Video Marketing & Production',
      description: 'At Madhyam Nepal, we create impactful videos to captivate your audience and drive engagement. Our services include:\n-Video Strategy: Crafting video campaigns aligned with your business goals.\n-Content Creation: Producing promotional, explainer, and storytelling videos.\n-Editing and Post-Production: Delivering high-quality, polished videos.\n-Platform Optimization: Tailoring videos for social media, websites, and ads.\n-Analytics and Insights: Tracking video performance to maximize ROI.\nTell your story visually with Madhyam Nepal\'s expert video marketing and production services!',
      icon: <FaVideo />,
      color: '#8EC36A',
      path: '/services/video-marketing'
    },
    {
      title: 'Influencer Marketing',
      description: 'At Madhyam Nepal, we connect your brand with the right influencers to amplify your message and reach your target audience. Our services include:\n-Influencer Identification: Finding influencers who align with your brand and audience.\n-Campaign Strategy: Designing impactful campaigns to maximize engagement and conversions.\n-Content Collaboration: Ensuring authentic and creative content from influencers.\n-Performance Tracking: Measuring reach, engagement, and ROI for every campaign.\n-Long-Term Partnerships: Building lasting relationships with key influencers.\nLeverage the power of trust and authenticity with Madhyam Nepal\'s influencer marketing services!',
      icon: <FaUserFriends />,
      color: '#8EC36A',
      path: '/services/influencer-marketing'
    },
    {
      title: 'Lead Generation Campaigns',
      description: 'At Madhyam Nepal, we design targeted campaigns to attract and convert potential customers into quality leads. Our services include:\n-Custom Strategies: Crafting campaigns tailored to your business goals and audience.\n-Landing Page Optimization: Designing high-converting pages for maximum lead capture.\n-Paid Ads: Running Facebook, Google, and LinkedIn ads to drive targeted traffic.\n-Email Marketing: Nurturing leads through personalized email campaigns.\n-Analytics and Reporting: Tracking performance and refining strategies for better results.\nGrow your business with effective lead generation campaigns by Madhyam Nepal!',
      icon: <FaBullseye />,
      color: '#8EC36A',
      path: '/services/lead-generation'
    }
  ];

  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.sectionDescription}>
            Madhyam Nepal offers comprehensive digital marketing solutions to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              path={service.path}
              standardHeight={cardsRendered ? standardHeight : null}
              updateStandardHeight={!cardsRendered ? updateStandardHeight : null}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;