import styled from "styled-components";

import * as Pallete from "../../styles/colors";

export const Modal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  padding: 15px;
  background-color: ${Pallete.white};

  width: 700px;
  margin: 0 auto;
  box-shadow: 0px 5px 7px #0000000d;
  border: 1px solid ${Pallete.borderColor};
  border-radius: 5px;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    justify-content: space-between;

    div {
      display: flex;
    }

    svg {
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }

    > svg {
      cursor: pointer;
      color: ${Pallete.buttonQuartiaryDanger.Regular};
      transition: 0.2s linear all;

      &:hover {
        color: ${Pallete.buttonQuartiaryDanger.Hover};
      }

      &:active {
        color: ${Pallete.buttonQuartiaryDanger.Click};
      }
    }
  }

  form {
    padding: 15px 30px;
    text-align: right;

    label {
      display: flex;
      flex-direction: column;
      text-align: left;
      position: relative;

      & + label {
        margin-top: 15px;
      }

      span.lettersCount {
        position: absolute;
        bottom: 0px;
        right: 15px;
        font-size: 14px;
        color: #ccc;
      }

      span {
        margin-bottom: 5px;
      }

      input {
        border: 1px solid ${Pallete.borderColor};
        border-radius: 5px;
        padding: 12px 22px;
      }

      textarea {
        border: 1px solid ${Pallete.borderColor};
        border-radius: 5px;
        padding: 12px 22px;

        max-width: 100%;
        min-width: 100%;
        max-height: 180px;
        min-height: 180px;
      }
    }

    ul {
      display: flex;
      margin-top: 5px;
      flex-wrap: wrap;

      li {
        font-weight: bold;

        & + li {
          margin-left: 5px;
        }
      }
    }

    button {
      background: ${Pallete.buttonPrimarySuccess.Regular};
      color: ${Pallete.white};
      margin-top: 15px;
      transition: 0.2s linear all;

      &:hover {
        background-color: ${Pallete.buttonPrimarySuccess.Hover};
      }

      &:active {
        background-color: ${Pallete.buttonPrimarySuccess.Click};
      }

      &:disabled {
        background-color: ${Pallete.buttonPrimarySuccess.Disabled};
        cursor: no-drop;
      }
    }
  }
`;
