import { ReactComponent as LinkedInLogo } from '../../assets/linkedin-white.svg';
import { ReactComponent as GitHubLogo } from '../../assets/github-mark-white.svg';

//This footer component will appear on every page
const Footer = () => {
    return (
        <>
            {/* Clicking this arrow will take you back to the top of the page */}
            <div>
                <p>Back to Top</p>
            </div>

            {/* Links to the author's social profiles are included here */}
            <div>
                <LinkedInLogo />
                <GitHubLogo />
            </div>
        </>
    )
};

export default Footer;