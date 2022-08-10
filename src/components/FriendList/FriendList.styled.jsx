import styled from 'styled-components';

export const FriendsCatalog = styled.ul`
`;

export const FriendsItem = styled.li`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    width: 100%;
    padding: ${p => p.theme.space[3]}px;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);

    :not(:last-child) {
        margin-bottom: ${p => p.theme.space[4]}px;
    }
`;

export const FriendsStatus = styled.span`
    width: 20px;
    height: 20px;
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => p.isOnline ? p.theme.colors.online : p.theme.colors.offline};
`;

export const FriendsName = styled.p`
    font-weight: ${p => p.theme.fontWeights.bold};
`; 