import { FooterContainer, FooterIconsContainer } from "./footer.styles";

import FooterIcon from "../footer-icon/footer-icon.component";

import LinkedInLogo from "../../assets/linkedin-logo.component";
import GitHubLogo from "../../assets/github-logo.component";

//Footer appears on every page
const Footer = () => {
    return (
        <FooterContainer>
            {/* Links to the author's social profile are contained here */}
            <FooterIconsContainer>
                <FooterIcon href="https://www.linkedin.com/in/levi-arthur-wright/" title="LinkedIn Profile" icon={<LinkedInLogo />}/>
                <FooterIcon href="https://github.com/law973" title="GitHub Profile" icon={<GitHubLogo />}/>
            </FooterIconsContainer>

            {/* Copright text */}
            <small>
                &copy; 2024 - Levi Wright
            </small>
        </FooterContainer>
    );
};

export default Footer;