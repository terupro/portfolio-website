import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Porfolio
      </SectionTitle>
      <SectionText>
        I'm a university student in Tokyo, and I'm working as a Web Developer.
      </SectionText>
      <Button onClick={() => (window.location = "mailto:terupro911@gmail.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
