"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={
            [
              { name: 'Hero', id: 'hero' },
              { name: 'About', id: 'about' },
              { name: 'FAQ', id: 'faq' },
              { name: 'How to Buy', id: 'how-to-buy' },
              { name: 'Tokenomics', id: 'tokenomics' },
              { name: 'Footer', id: 'footer' }
            ]
          }
          logoSrc="/images/logo.svg"
          brandName="Peak"
        />
      </div>
      <div id="hero" data-section="hero">
        <FrameHero
          title="Welcome to Peak"
          description="Your adventure begins here!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout
          title="About Peak"
          descriptions={[
            "Join us on a journey to explore new heights!",
            "We cultivate a community of adventurous souls."
          ]}
        />
      </div>
      <div id="faq" data-section="faq">
        <BentoFAQ
          items={[
            { title: 'What is Peak?', content: 'Peak is a community-driven platform for outdoor enthusiasts.' },
            { title: 'How can I join?', content: 'Sign up on our website to become a member.' },
            { title: 'Do I need any prior experience?', content: 'No, we welcome all skill levels!' }
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="Tokenomics"
          description="Understanding the economics behind Peak"
          tokenData={[
            { value: '200M', description: 'Total Supply' },
            { value: '50%', description: 'Liquidity' },
            { value: '10%', description: 'Marketing' }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={50}
          columns={[
            {
              title: 'Links',
              items: [
                { label: 'Home', onClick: () => {} },
                { label: 'About Us', onClick: () => {} }
              ]
            },
            {
              title: 'Support',
              items: [
                { label: 'Contact', onClick: () => {} },
                { label: 'FAQ', onClick: () => {} }
              ]
            }
          ]}
          copyrightText="© 2023 Peak"
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}
