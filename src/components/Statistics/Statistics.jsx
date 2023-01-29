import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils';
import { Section, StatsItem, Title, Stats } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Title>{title}</Title>

      <Stats>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} backgroundColor={getRandomHexColor()}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatsItem>
        ))}
      </Stats>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
