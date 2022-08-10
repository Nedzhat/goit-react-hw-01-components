import user from './Profile/user.json';
import data from './Statistics/data.json';
import friendsList from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { GlobalStyle } from 'components/GlobalStyle';


export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Profile user={user} />
      <Statistics title="Upload stats" stat={data} />
      <FriendList friends={friendsList} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
