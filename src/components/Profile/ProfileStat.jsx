import PropTypes from 'prop-types';

import { ProfileStatItem, ProfileStatText, ProfileStatAmount } from './ProfileStat.styled';

export const ProfileStat = ({ text, amount }) => {
  return (
    <ProfileStatItem>
      <ProfileStatText>{text}</ProfileStatText>
      <ProfileStatAmount>{amount}</ProfileStatAmount>
    </ProfileStatItem>
  );
};

ProfileStat.propTypes = {
  ProfileStat: PropTypes.exact({
    text: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }),
};
