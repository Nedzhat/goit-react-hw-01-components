import PropTypes from 'prop-types';

import { FriendsCatalog, FriendsItem, FriendsStatus, FriendsName } from './FriendList.styled';
import { Box } from 'components/Box';

export const FriendList = ({ friends }) => {
  return (
    <Box width="250px" m="0 auto 30px">
      <FriendsCatalog>
        {friends.map(({ avatar, id, isOnline, name }) => (
          <FriendsItem key={id}>
            <FriendsStatus isOnline={isOnline}></FriendsStatus>
            <img src={avatar} alt={name} width="48" />
            <FriendsName>{name}</FriendsName>
          </FriendsItem>
        ))}
      </FriendsCatalog>
    </Box >
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
