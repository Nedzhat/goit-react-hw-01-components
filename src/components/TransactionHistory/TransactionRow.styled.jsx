import styled from 'styled-components';

export const TableRow = styled.tr`
    background-color: ${p => p.idx % 2 === 0 ? p.theme.colors.bgTable : p.theme.colors.white};
    height: ${p => p.theme.space[6]}px;
    text-align: center;
`;

export const TableItem = styled.td`
    color: ${p => p.theme.colors.text};
    font-weight: ${p => p.theme.fontWeights.bold};
`;