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
  width: 500px;
  margin: 0 auto;
  box-shadow: 0px 5px 7px #0000000d;
  border: 1px solid ${Pallete.borderColor};
  border-radius: 5px;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    strong {
      margin-left: 5px;
    }
  }

  p span {
    font-weight: bold;
  }

  footer {
    text-align: right;
    margin-top: 15px;

    button {
      transition: 0.2s linear all;
    }

    button + button {
      margin-left: 15px;
    }

    button.no {
      background: ${Pallete.buttonPrimaryNeutral.Regular};
      color: ${Pallete.white};

      &:hover {
        background-color: ${Pallete.buttonPrimaryNeutral.Hover};
      }

      &:active {
        background-color: ${Pallete.buttonPrimaryNeutral.Click};
      }
    }

    button.yes {
      background: ${Pallete.buttonPrimaryDanger.Regular};
      color: ${Pallete.white};

      &:hover {
        background-color: ${Pallete.buttonPrimaryDanger.Hover};
      }

      &:active {
        background-color: ${Pallete.buttonPrimaryDanger.Click};
      }
    }
  }
`;
