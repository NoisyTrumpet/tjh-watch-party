import { ButtonGroup, IconButton } from "@chakra-ui/react";
import * as React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import ThemeToggle from "../../ThemeToggle";

const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      as="a"
      href="https://www.facebook.com/tjhlaw/"
      aria-label="Facebook"
      icon={<FaFacebook fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://www.instagram.com/tjhlaw/"
      aria-label="Instagram"
      icon={<FaInstagram fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://www.youtube.com/channel/UCzQq-ZFJIAJOHyxyxzDZEJQ"
      aria-label="YouTube"
      icon={<FaYoutube fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://www.linkedin.com/company/thomas-j-henry-injury-attorneys/"
      aria-label="LinkedIn"
      icon={<FaLinkedin fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://twitter.com/thomasjhenrylaw"
      aria-label="Twitter"
      icon={<FaTwitter fontSize="20px" />}
    />
    <ThemeToggle />
  </ButtonGroup>
);

export default SocialMediaLinks;
