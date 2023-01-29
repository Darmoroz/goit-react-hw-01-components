import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 20%;
  gap: 8px;
  min-width: 75px;
  font-size: ${p => p.theme.fontSize.mdp};
  font-weight: bold;
  background-color: ${p => p.backgroundColor};
`;
