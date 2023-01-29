import styled from 'styled-components';

export const Table = styled.table`
  min-width: 300px;
  text-align: center;
  thead {
    width: 100%;
    background-color: rgb(120, 224, 230);
    color: #ffffff;
    tr {
      line-height: 1.5;
    }
  }
`;

export const TableBody = styled.tbody`
  tr {
    :nth-child(2n) {
      background-color: #9f9f9f;
    }
    transition: transform 250ms linear;
    :hover,
    :focus {
      background-color: #e0e4e8;
      transform: scale(1.05);
    }
    td {
      outline: 1px solid black;
    }
  }
`;
