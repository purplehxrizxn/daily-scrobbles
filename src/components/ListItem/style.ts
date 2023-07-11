import { keyframes, styled } from "styled-components";

const animation = keyframes`
    0%  {
        transform: translateX(0);
        left: 0;
    }

    100% {
        transform: translateX(-100%);
        left: 100%;
    }
`;

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  user-select: none;
  /* position: relative;
  animation: ${animation} 10s linear alternate infinite; */

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:nth-child(odd) {
    background-color: #212121;
    border-radius: 5px;
  }

  .Image-Container {
    max-width: 30px;
    min-width: 30px;
    max-height: 30px;
    min-height: 30px;
    margin-right: 5px;

    img {
      width: 100%;
    }
  }

  .List-Item-Band {
    font-weight: 600;
    color: white;

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;
