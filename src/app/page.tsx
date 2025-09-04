"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarStyleApple
        brandName="NovaSaaS"
        logoSrc="/images/logo.svg"
        logoAlt="NovaSaaS Logo"
        navItems={[
          { name: '#hero', id: 'hero' },
          { name: '#about', id: 'about' },
          { name: '#how-to-buy', id: 'how-to-buy' },
          { name: '#tokenomics', id: 'tokenomics' },
          { name: '#footer', id: 'footer' },
        ]}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to NovaSaaS"
          description="Your solution to streamline business management."
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="At NovaSaaS, we offer a consolidated platform tailored for modern businesses to manage their operations efficiently. Through innovative solutions and a user-friendly interface, navigate your tasks seamlessly."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Understanding our token distribution, usage, and value. Our tokenomics ensure sustainable growth and real value for users."
          kpiItems={[
            { value: "100M", description: "Total Supply", longDescription: "Total tokens in circulation." },
            { value: "30%", description: "Liquidity", longDescription: "Tokens reserved for liquidity pools." },
            { value: "20%", description: "Team", longDescription: "Tokens allocated to the team for development and support." },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={50}
          columns={[
            { title: "Resources", items: [
              { label: "Home", onClick: () => {} },
              { label: "About", onClick: () => {} },
              { label: "Contact", onClick: () => {} },
            ]},
            { title: "Legal", items: [
              { label: "Privacy Policy", onClick: () => {} },
              { label: "Terms of Service", onClick: () => {} },
            ]},
          ]}
          copyrightText="© 2023 NovaSaaS"
          onPrivacyClick={() => {} }
        />
      </div>
    </SiteThemeProvider>
  );
}