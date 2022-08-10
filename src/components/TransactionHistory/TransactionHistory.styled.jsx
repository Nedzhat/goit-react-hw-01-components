import styled from 'styled-components';

export const TableHead = styled.thead`
    background-color: ${p => p.theme.colors.tableHead};
    color: ${p => p.theme.colors.white};
`;

export const TableHeadRow = styled.tr`
    height: ${p => p.theme.space[6]}px;
`;


