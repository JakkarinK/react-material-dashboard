import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: 14,
          fontWeight: 400,
          color: "rgb(123, 128, 154)",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
          fontWeight: 600,
          color: "rgb(52, 71, 103)",
        },
        secondary: {
          fontSize: 12,
          fontWeight: 300,
          color: "rgb(123, 128, 154)",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: "0.7rem",
        },
        message: {
          fontSize: 16,
          fontWeight: 300,
          color: "#fff",
        },
        standardPrimary: {
          backgroundImage:
            "linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96));",
        },
        standardSecondary: {
          backgroundImage:
            "linear-gradient(195deg, rgb(116, 123, 138), rgb(73, 83, 97))",
        },
        standardSuccess: {
          backgroundImage:
            "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
        },
        standardError: {
          backgroundImage:
            "linear-gradient(195deg, rgb(239, 83, 80), rgb(229, 57, 53))",
        },
        standardWarning: {
          backgroundImage:
            "linear-gradient(195deg, rgb(255, 167, 38), rgb(251, 140, 0))",
        },
        standardInfo: {
          backgroundImage:
            "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
        },
        standardLight: {
          backgroundImage:
            "linear-gradient(195deg, rgb(235, 239, 244), rgb(206, 212, 218))",
        },
        standardDark: {
          backgroundImage:
            "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        textPrimary: {
          fontSize: "12px",
          fontWeight: 700,
          color: "rgb(26, 115, 232)",
        },
        textError: {
          fontSize: "12px",
          fontWeight: 700,
          color: "rgb(244, 67, 53)",
        },
        textInfo: {
          fontSize: "12px",
          fontWeight: 700,
          color: "rgb(52, 71, 103)",
        },
        outlinedPrimary: {
          fontSize: "12px",
          fontWeight: 700,
          border: "1px solid rgb(26, 115, 232)",
        },
        containedPrimary: {
          backgroundImage:
            "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
        },
        containedSuccess: {
          backgroundImage:
            "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
        },
        containedInfo: {
          backgroundImage:
            "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
        },
        containedWarning: {
          backgroundImage:
            "linear-gradient(195deg, rgb(255, 167, 38), rgb(251, 140, 0))",
        },
        containedError: {
          backgroundImage:
            "linear-gradient(195deg, rgb(239, 83, 80), rgb(229, 57, 53))",
        },
        containedDark: {
          backgroundImage:
            "linear-gradient(195deg, rgb(239, 83, 80), rgb(229, 57, 53))",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        thumb: {
          border: "1px solid #42424a",
        },
        switchBase: {
          color: "#fff",
        },
        colorPrimary: {
          "&.Mui-checked": {
            color: "#fff",
          },
        },
        track: {
          opacity: 0.2,
          backgroundColor: "#42424a",
          ".Mui-checked.Mui-checked + &": {
            opacity: 0.7,
            backgroundColor: "#42424a",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(240, 242, 245)",
          "&.Mui-selected": {
            backgroundColor: "#fff",
            borderRadius: "10px",
            border: "1px solid #ddd",
            color: "#ddd",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontSize: "11px",
          fontWeight: 700,
          color: "rgb(123, 128, 154, 70%)",
        },
        body: {
          fontSize: "12px",
          fontWeight: 600,
          color: "rgb(123, 128, 154)",
          ":nth-child(1)": {
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            fontSize: "14px",
            color: "rgb(52, 71, 103)",
          },
          ".status": {
            padding: "3px 8px",
            borderRadius: "5px",
            color: "#fff",
            fontSize: "9px",
          },
          ".ONLINE": {
            background:
              "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71));",
          },
          ".OFFLINE": {
            background:
              "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));",
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        barColorPrimary: {
          background:
            "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));",
        },
        barColorSuccess: {
          background:
            "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71));",
        },
        barColorError: {
          background:
            "linear-gradient(195deg, rgb(239, 83, 80), rgb(229, 57, 53));",
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
  },

  typography: {
    caption: {
      fontSize: 12,
      fontWeight: 300,
      color: "rgb(123, 128, 154)",
    },
    button: {
      fontSize: 14,
      fontWeight: 300,
      textTransform: "none",
      color: "rgb(123, 128, 154)",
    },
    h4: {
      fontSize: 24,
      fontWeight: 600,
      color: "#fff",
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
      color: "rgb(52, 71, 103)",
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
      color: "rgb(52, 71, 103)",
    },
    p: {
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: "0.02857em",
      color: "rgb(52, 71, 103)",
    },
    body1: {
      fontSize: 12,
      fontWeight: 700,
      color: "rgb(123, 128, 154)",
    },
    span: {
      fontSize: 14,
      fontWeight: 700,
      color: "rgb(123, 128, 154)",
    },
  },
});
