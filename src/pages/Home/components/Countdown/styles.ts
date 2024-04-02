import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 16rem;
  /* line-height: 8rem; */
  font-weight: bold;

  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1.6rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 1.6rem 3.2rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 1.6rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
