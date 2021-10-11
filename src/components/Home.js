import React from 'react';
import Splash from './Splash';
import VidSplash from './VidSplash';
import ShoeCarousel from './ShoeCarousel';
import PopLinks from './PopLinks';
import Departments from './Departments';
import NewArrivals from './NewArrivals';
import ShopFeatures from './Features';
import Trends from './Trends';
import Gifts from './Gifts';
import Unlocked from './Unlocked';
import { FeedbackModal } from './FeedbackModal';


function Home() {
  return (
    <div style={{marginTop: '130px'}}>
      <Splash />
      <VidSplash />
      <ShoeCarousel />
      <PopLinks />
      <Departments />
      <NewArrivals />
      <Unlocked />
      <FeedbackModal>Feedback</FeedbackModal>
    </div>
  )
}

export default Home
