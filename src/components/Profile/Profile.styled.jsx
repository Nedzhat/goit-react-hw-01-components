import styled from 'styled-components';

export const AvatarImg = styled.img`
    width: 150px;
    height: 150px;
    background-color: ${p => p.theme.colors.bgImage};
    border-radius: ${p => p.theme.radii.round};
    margin-bottom: ${p => p.theme.space[4]}px;
`;

export const UsernameProfile = styled.p`
    color: ${p => p.theme.colors.black};
    font-size: ${p => p.theme.fontSizes.l};
    margin-bottom: ${p => p.theme.space[4]}px;
`;
    

export const TagProfile = styled.p`
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes.m};
    margin-bottom: ${p => p.theme.space[4]}px;
`;

export const LocationProfile = styled.p`
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes.m};
    margin-bottom: ${p => p.theme.space[4]}px;
`;

export const ProfileStatList = styled.ul`
    display: flex;
    border-top: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.text};
`;