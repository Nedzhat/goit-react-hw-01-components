import styled from 'styled-components';

export const StatTitle = styled.h2`
    text-transform: uppercase;
    text-align: center;
    margin-bottom: ${p => p.theme.space[5]}px;
    color: ${p => p.theme.colors.text};
`;

export const StatList = styled.ul`
    display: flex;
`;
