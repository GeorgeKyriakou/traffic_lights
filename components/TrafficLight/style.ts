import styled, { css } from 'styled-components'

export const TrafficLightStyle = styled.div`
  ${({ theme }) => css`

  .lights-box {
      width: 100px;
      height: 300px;
      background-color: black;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      margin: 0 25px;
    }  

    .light {
        margin: 5px auto;
        width: 90px;
        height: 90px;
        background-color: darkgrey;
        border-radius: 45px;
    }

    .red{
        background-color: red;
    }
    .yellow{
        background-color: yellow;
    }
    .green{
        background-color: green;
    }
  `}
`;