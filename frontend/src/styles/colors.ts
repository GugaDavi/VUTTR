/**
 * Colors Theme
 */
export const primaryColor = "#B2A9DF";
export const primaryDarkColor = "#6554c0";
export const white = "#fff";
export const borderColor = "#ebeaed";
export const backgroundInputFocused = "#EBEAED";
export const inputBackgroundColor = "#f5f4f6";
export const placeholderColor = "#B1ADB9";

/**
 * Text Theme
 */

export const textColor = "#170C3A";

/**
 * Components Themes
 */

export const buttonPrimaryNeutral: ButtonReactionState = {
  Regular: "#365DF0",
  Hover: "#2F55CC",
  Click: "#244AA8",
  Disabled: "#B9C6FA",
};

export const buttonQuartiaryDanger: ButtonReactionState = {
  Regular: "#F95E5A",
  Hover: "#F95E5A",
  Click: "#F95E5A",
  Disabled: "#FCAEAC",
};

export const buttonPrimaryDanger: ButtonReactionState = {
  Regular: "#F95E5A",
  Hover: "#CC4C4C",
  Click: "#A53F3F",
  Disabled: "#FCAEAC",
};

export const buttonPrimarySuccess: ButtonReactionState = {
  Regular: "#0DCB7D",
  Hover: "#10B26C",
  Click: "#0E995D",
  Disabled: "#88EDC4",
};

export enum BannerNotificationColors {
  SUCCESS = "#12DB89",
  WARNING = "#FFBB43",
  ERROR = "#F95E5A",
}

/**
 * Types
 */

export interface ButtonReactionState {
  Regular: string;
  Hover: string;
  Click: string;
  Disabled: string;
}
