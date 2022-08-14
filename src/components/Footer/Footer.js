import React from "react";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:080-4793-1914">080-4793-1914</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:terupro911@gmail.com">
            terupro911@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/terupro">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/terupro911">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/profile.php?id=100062605875623">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
