"use client"
import React from 'react';
import Footer from '@/components/footer/Footer';
import HomePageBanner from '@/components/homepage-components/homePageBanner/Index';
import AboutDataclaps from '@/components/homepage-components/aboutDataclaps/Index';
import OurServices from '@/components/homepage-components/ourServices/Index';
import OurPortfolio from '@/components/homepage-components/ourPortfolio/Index';
import WhyChooseUs from '@/components/homepage-components/whyChooseUs/Index';
import QuestionAndAnswer from '@/components/homepage-components/questionAndAnswer/Index';
import Testimonials from '@/components/homepage-components/testimonials/Index';
import PricingPlan from '@/components/homepage-components/pricingPlan/Index';
import NewsAndBlogs from '@/components/homepage-components/NewsAndBlogs/Index';

const HomePage = () => {

  return (
    <>
      {/* banner section */}
      <HomePageBanner/>

      <section className='bg-[#d2e0ea57]'>
        {/* About dataclaps section */}
        <AboutDataclaps/>

        {/* our services */}
        <OurServices/>

        {/* our portfolio */}
        <OurPortfolio/>

        {/* why choose us */}
        <WhyChooseUs/>

        {/* Question & Answer */}
        <QuestionAndAnswer/>
      
        {/* testimonials */}
        <Testimonials/>

      {/* Pricing Plan */}
      {/* <PricingPlan/> */}

      {/* news & Blogs */}
      <NewsAndBlogs/>

    </section>
    {/* footer */}
    <Footer/>
    </>
  );
};

export default HomePage;