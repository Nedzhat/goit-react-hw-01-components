import PropTypes from 'prop-types';

import { TableRow, TableItem } from './TransactionRow.styled';


export const TransactionRow = ({ row: { amount, currency, id, type }, idx }) => {
  return (
    <TableRow idx={idx} key={id}>
      <TableItem>{type}</TableItem>
      <TableItem>{amount}</TableItem>
      <TableItem>{currency}</TableItem>
    </TableRow >
  );
};

TransactionRow.propTypes = {
  row: PropTypes.exact({
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};
