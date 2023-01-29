import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 2px 2px 6px 0px rgba(97, 90, 90, 0.66);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  text-align: center;
  img {
    border-radius: 50%;
  }
`;

export const InfoName = styled.p`
  font-size: ${p => (p.username ? p.theme.fontSize.mdp : p.theme.fontSize.md)};
  font-weight: ${p => (p.username ? 700 : 400)};
  color: ${p => !p.username && '#2f2f2f'};
`;

export const StatsList = styled.ul`
  display: flex;
  background-color: #f0f4f8;
  border-top: 1px solid black;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-basis: 33%;
  gap: 4px;
  padding: 6px 0;
  :not(:last-child) {
    border-right: 1px solid black;
  }
`;

export const Chip = styled.span`
  font-weight: ${p => p.num && 700};
`;
