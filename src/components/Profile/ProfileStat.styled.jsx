import styled from 'styled-components';

export const ProfileStatItem = styled.li`
    display:flex;
    flex-direction: column;
    padding: ${p => p.theme.space[4]}px;
    background-color: ${p => p.theme.colors.bgProfile};
    width: calc(100% / 3);
    :not(:last-child) {
        border-right: ${p => p.theme.borders.normal};
        border-color: ${p => p.theme.colors.text};
    }
`;

export const ProfileStatText = styled.span`
    margin-bottom: ${p => p.theme.space[3]}px;
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes.s};
`;

export const ProfileStatAmount = styled.span`
    font-weight: ${p => p.theme.fontWeights.bold}; 
`;