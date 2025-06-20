// src/components/index.js (Main component that combines all sections)
import React from 'react';
import AnnouncementBar from './AnnouncementBar';
import Header from './Header';
import HeroSlider from './HeroSlider';
import IconBoxesSection from './IconBoxesSection';
import TextBanner from '../Index/TextBanner';
import FeaturedCollection from './FeaturedCollection';
import { productsData } from './FeaturedCollection'; 
import CollectionsCarousel from './CollectionCarousel'; // relative path
import {collections} from './CollectionCarousel';
import TestimonialSection from './TestimonialSection';
import BlogSection from './BlogSection';
import InstagramGallery from './InstagramGallery';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import Modals from './Modals';
import ScrollToTop from './ScrollToTop';

const Index = () => {
  return (
    <div className="home-page">
      <AnnouncementBar />
      <Header />
      <MobileMenu />
      <Modals />
      <ScrollToTop />
      
      <main>
        <HeroSlider />
        <IconBoxesSection />
        <TextBanner 
          title="Refresh Your Space with Greenery"
          description="Discover a range of indoor plants that breathe life into your home. Shop now and elevate your space with nature's beauty."
          buttonText="Shop Now"
          buttonLink="/products"
        />
        <FeaturedCollection
          title="Featured Products"
          products={productsData} // You would pass your products data here
        />
        <TextBanner 
          title="Perfect Plants for Every Corner"
          description="From small succulents to statement plants, find the ideal green companion for any room. Explore our collection today!"
          buttonText="Shop Collection"
          buttonLink="/products"
          reverseLayout={true}
        />
        <CollectionsCarousel 
          title="Shop By Collections"
          collections={collections} // Your collections data
        />
        <TestimonialSection 
          testimonials={testimonialsData} // Your testimonials data
        />
        <BlogSection 
          title="Latest Tips & Trends"
          posts={blogPostsData} // Your blog posts data
        />
        <InstagramGallery 
          title="Shop by @Triliv"
          images={instagramImages} // Your Instagram images
        />
      </main>

      <Footer />
    </div>
  );
};

export default Index;