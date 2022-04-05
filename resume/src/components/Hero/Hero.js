import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! <br />
        I'm Thananrat Akarapornvinit
      </SectionTitle>
      <SectionText>
        Hardworking person seeking employment in software development. Bringing
        forth a motivated attitude and a variety of powerful skills. Focused on
        developing scalable and enjoy working collaboratively. Committed to
        utilized my skills to further the mission of a company.
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto:thananrat.a@gmail.com")}
      >
        Contact Me!
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;