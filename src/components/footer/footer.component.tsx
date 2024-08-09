import LinkedInLogo from "../footer-icon/linkedin-logo.components";
import GitHubLogo from "../footer-icon/github-logo.components";

import FooterIcon from "../footer-icon/footer-icon.component";

import { FooterContainer } from "./footer.styles";

//This footer component will appear on every page
const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <FooterIcon href="https://www.linkedin.com/in/levi-arthur-wright/" title="LinkedIn Profile" icon={<LinkedInLogo />}/>
                <FooterIcon href="https://github.com/law973" title="GitHub Profile" icon={<GitHubLogo />}/>
            </div>
            <small>
                &copy; 2024 - Levi Wright
            </small>
        </FooterContainer>
    )
};

export default Footer;