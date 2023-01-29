import PropTypes from 'prop-types';
import { GiShadowFollower } from 'react-icons/gi';
import { GrFormView } from 'react-icons/gr';
import { AiFillLike } from 'react-icons/ai';
import { theme } from 'constants';
import {
  Card,
  Info,
  InfoName,
  StatsList,
  StatsItem,
  Chip,
} from './Profile.styled';

const { fontSize, spacing } = theme;
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Card>
      <Info>
        <img
          src={avatar}
          alt={`${username} avatar`}
          width={`${spacing[4] * 10}px`}
        />
        <InfoName username>{username}</InfoName>
        <InfoName>@{tag}</InfoName>
        <InfoName>{location}</InfoName>
      </Info>

      <StatsList>
        <StatsItem>
          <Chip>Followers</Chip>
          <GiShadowFollower size={fontSize.md} />
          <Chip num>{followers}</Chip>
        </StatsItem>
        <StatsItem>
          <Chip>Views</Chip>
          <GrFormView size={fontSize.md} />
          <Chip num>{views}</Chip>
        </StatsItem>
        <StatsItem>
          <Chip>Likes</Chip>
          <AiFillLike size={fontSize.md} />
          <Chip num>{likes}</Chip>
        </StatsItem>
      </StatsList>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
