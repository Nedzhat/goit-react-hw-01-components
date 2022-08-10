import PropTypes from 'prop-types';
import { StatItem, StatLabel, StatPercentage } from './StatisticsItem.styled';

export const StatisticItem = ({ item: { label, percentage } }) => {
  return (
    <StatItem>
      <StatLabel>{label}</StatLabel>
      <StatPercentage>{percentage}%</StatPercentage>
    </StatItem>
  );
};

StatisticItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
