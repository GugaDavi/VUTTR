import styled from "styled-components";
import { css } from "glamor";
import { toast } from "react-toastify";

import * as Pallete from "../../styles/colors";
import { BannerNotificationColors } from "../../styles/colors";

export const Container = styled.div`
  max-width: 800px;
  margin: 0px auto;
  padding: 50px 0px;

  header {
    margin-bottom: 15px;

    h1 {
      padding-bottom: 25px;
      color: ${Pallete.white};
    }

    h4 {
      padding-bottom: 35px;
      color: ${Pallete.white};
    }

    div#searchAndAddTool {
      display: flex;
      justify-content: space-between;

      label.checkboxArea {
        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;

        span {
          margin-left: 5px;
        }
      }

      div {
        display: flex;
        align-items: center;

        > label {
          margin-right: 5px;
        }
      }

      div#searchInput {
        border: 1px solid ${Pallete.borderColor};
        border-radius: 5px;
        background-color: ${Pallete.inputBackgroundColor};
        padding: 10px 22px;
        padding-left: 5px;
        display: flex;
        align-items: center;

        input {
          border: 0px;
          background: transparent;
          padding-left: 5px;
        }
      }

      button {
        background-color: ${Pallete.buttonPrimaryNeutral.Regular};
        color: ${Pallete.white};
        display: flex;
        align-content: center;
        transition: all 0.2s linear;

        span {
          margin-left: 5px;
          font-weight: bold;
        }

        &:hover {
          background-color: ${Pallete.buttonPrimaryNeutral.Hover};
        }

        &:active {
          background-color: ${Pallete.buttonPrimaryNeutral.Click};
        }
      }
    }
  }
`;

export const ToolsList = styled.div`
  height: 500px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  > ul {
    > li {
      box-shadow: 0px 10px 10px #0000000d;
      background-color: ${Pallete.white};
      border: 1px solid ${Pallete.borderColor};
      border-radius: 5px;
      padding: 15px;

      & + li {
        margin-top: 15px;
      }

      > header {
        display: flex;
        justify-content: space-between;

        h5 {
          text-decoration: underline;
          color: ${Pallete.primaryDarkColor};
        }

        svg {
          color: ${Pallete.buttonQuartiaryDanger.Click};
        }

        button.deleteButton {
          display: flex;
          align-items: center;
          height: 30px;
          text-align: center;
          padding-top: 0;
          padding-right: 0;
          padding-bottom: 0;
          padding-left: 0;

          &:hover span {
            color: ${Pallete.buttonQuartiaryDanger.Hover};
          }

          &:active span {
            color: ${Pallete.buttonQuartiaryDanger.Click};
          }

          span {
            margin-left: 5px;
            margin-bottom: 2.5px;
            color: ${Pallete.buttonQuartiaryDanger.Regular};
          }
        }
      }

      > p {
        max-lines: 2;
        margin-bottom: 15px;
      }

      > ul {
        display: flex;
        flex-wrap: wrap;
        max-width: 100%;

        li {
          font-weight: bold;

          & + li {
            margin-left: 5px;
          }
        }
      }
    }
  }
`;

export function successBanner(msg: string) {
  return toast.success(msg, {
    className: css({
      background: `${BannerNotificationColors.SUCCESS} !important`,
      borderRadius: "5px !important",
    }),
  });
}
export function errorBanner(msg: string) {
  return toast.error(msg, {
    className: css({
      background: `${BannerNotificationColors.ERROR} !important`,
      borderRadius: "5px !important",
    }),
  });
}

export function warningBanner(msg: string) {
  return toast.error(msg, {
    className: css({
      background: `${BannerNotificationColors.WARNING} !important`,
      borderRadius: "5px !important",
    }),
  });
}
