import styled from 'styled-components';
import { Container } from './Container';

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  gap: ${p => p.theme.spacing[4]}px;
  margin-top: 16px;
`;
