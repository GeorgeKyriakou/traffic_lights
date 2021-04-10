

import styled, { css } from 'styled-components'

export const MainStyle = styled.div`
  ${() => css`
  .main_wrapper{
    top:45%;
    right: 50%;
    position: absolute;
    transform: translate(-50%,-50%);

    display: flex;
    flex-direction: row;
  }
  `}
`;