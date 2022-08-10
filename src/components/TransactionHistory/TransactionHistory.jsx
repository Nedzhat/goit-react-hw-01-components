import PropTypes from 'prop-types';

import { TransactionRow } from './TransactionRow';
import { Box } from 'components/Box';
import { TableHead, TableHeadRow } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Box as="table" width="600px" m="0 auto 30px" boxShadow="2px 2px 5px 0px rgba(0,0,0,0.75)">
      <TableHead>
        <TableHeadRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableHeadRow>
      </TableHead>
      <tbody>
        {items.map((item, idx) => (
          <TransactionRow key={item.id} row={item} idx={idx} />
        ))}
      </tbody>
    </Box >
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
