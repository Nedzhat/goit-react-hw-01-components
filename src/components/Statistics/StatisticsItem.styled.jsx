import styled from 'styled-components';

import { getRandomHexColor } from 'utils/RandomColor';

export const StatItem = styled.li`
    display:flex;
    flex-direction:column;
    padding: ${p => p.theme.space[5]}px;
    width: calc(100%/5);
    background-color: ${p => getRandomHexColor(p.index)};
`;

export const StatLabel = styled.span`
    color: ${p => p.theme.colors.white};
    margin-bottom: ${p => p.theme.space[2]}px;
    font-size: ${p => p.theme.fontSizes.s};
`;

export const StatPercentage = styled.span`
    color: ${p => p.theme.colors.white};
    font-weight: ${p => p.theme.fontWeights.bold};
`;