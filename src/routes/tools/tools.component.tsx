import { ToolsContainer, ToolsCard, NextSectionShop } from "./tools.styles";

const Tools = () => {
    return (
        <ToolsContainer>
            <ToolsCard>
                <h1>Tools</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nostrum fugiat et non aliquid soluta placeat tempora molestias quis! Id nam inventore tempore incidunt officia quibusdam iste labore voluptatem harum.</p>
            </ToolsCard>
            <NextSectionShop to='/shop'>Next Section: Shop</NextSectionShop>
        </ToolsContainer>
    );
};

export default Tools;