import PropTypes from 'prop-types';

import { StatisticItem } from './StatisticItem';
import { StatTitle, StatList } from './Statistics.styled';
import { Box } from 'components/Box';

export const Statistics = ({ title, stat }) => {
  return (
    <Box width="500px" pt={5} m="0 auto 30px" boxShadow="0px 4px 24px -1px rgba(0,0,0,0.75)" as="section">
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stat.map(item => (
          <StatisticItem key={item.id} item={item} />
        ))}
      </StatList>
    </Box >
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
