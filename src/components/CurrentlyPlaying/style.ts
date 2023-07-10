import { keyframes, styled } from "styled-components";

const animation = keyframes`
    from {
        transform: translateX(0);
        left: 0;
    }

    to {
        transform: translateX(-100%);
        left: 100%;
    }
`;

export const CurrentlyPlayingContainer = styled.div`
  margin-top: 35px;

  .Now-Playing {
    color: white;
    display: block;
    margin-bottom: 15px;
  }

  .Track {
    display: flex;
    background: #212121;
    color: white;
    border-radius: 5px;
    overflow: hidden;
    padding: 15px;
    width: 400px;
    margin: 0 auto;

    &-Image {
      max-width: 80px;
      max-height: 80px;
      min-width: 80px;
      min-height: 80px;
      margin-right: 15px;

      img {
        width: 100%;
      }
    }

    &-Infos {
      text-align: left;
      user-select: none;
      overflow: hidden;

      .Track-Container {
        display: inline-block;

        .Track-Name {
          white-space: nowrap;
          display: inline-block;
          position: relative;

          &:hover {
            animation: ${animation} 10s linear alternate infinite;
          }
        }
      }

      a {
        color: white;
        text-decoration: none;
      }

      .Album-Name {
        color: #ffffff70;
        margin-bottom: 15px;
        display: block;
        position: relative;
        white-space: nowrap;

        &:hover {
          animation: ${animation} 10s linear alternate infinite;
        }
      }

      .Artists-Container {
        display: inline-block;
        position: relative;

        .Artists {
          font-weight: 600;
          white-space: nowrap;

          &:hover {
            animation: ${animation} 10s linear alternate infinite;
          }
        }
      }
    }
  }
`;
