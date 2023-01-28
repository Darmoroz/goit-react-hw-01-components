import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
// import { Container } from 'components/Container/Container';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from 'assets/user.json';
import data from 'assets/data.json';
import friends from 'assets/friends.json';
import transactions from 'assets/transactions.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <>
      {/* <Container> */}
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      {/* </Container> */}
    </>
  );
};
