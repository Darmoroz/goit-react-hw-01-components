import PropTypes from 'prop-types';
import { Stats } from '../Statistics/Statistics.styled';
import { Friend, Circle } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Stats>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend key={id}>
          <Circle status={isOnline}></Circle>
          <img src={avatar} alt={`${name} avatar`} width="48" />
          <p>{name}</p>
        </Friend>
      ))}
    </Stats>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
