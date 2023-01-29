import styled from 'styled-components';

export const Friend = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  border-bottom: 2px dashed black;
`;

export const Circle = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${p => (p.status ? '#009900' : '#ff0000')}
  }
`;
