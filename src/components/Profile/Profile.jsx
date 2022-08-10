import PropTypes from 'prop-types';

import { ProfileStat } from './ProfileStat';
import { AvatarImg, UsernameProfile, TagProfile, LocationProfile, ProfileStatList } from './Profile.styled';
import { Box } from 'components/Box';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <Box width="300px" m="0 auto 30px" border="normal" borderColor="text" boxShadow="0px 4px 24px -1px rgba(0,0,0,0.75)">
      <Box display="flex" flexDirection="column" alignItems="center" pt={4}>
        <AvatarImg src={avatar} alt="" width="100px" height="100px" />
        <UsernameProfile>{username}</UsernameProfile>
        <TagProfile>{`@${tag}`}</TagProfile>
        <LocationProfile>{location}</LocationProfile>
        </Box >
        <ProfileStatList>
          <ProfileStat text={`Followers`} amount={stats.followers} />
          <ProfileStat text={`Views`} amount={stats.views} />
          <ProfileStat text={`Likes`} amount={stats.likes} />
        </ProfileStatList>
    </Box >
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }),
};
