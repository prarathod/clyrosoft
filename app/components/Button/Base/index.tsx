import { Button, ButtonProps, ConfigProvider } from "antd";

const primary = {
  defaultActiveBg: "#ffffff",
  defaultBg: "#ffffff",
  defaultColor: "#000c17",
  defaultBorderColor: "#000c17",
  defaultActiveColor: "#000c17",
  defaultActiveBorderColor: "#000c17",
  defaultHoverColor: "#ffffff",
  defaultHoverBorderColor: "#000c17",
  defaultHoverBg: "#000c17",
};
const secondary = {
  defaultActiveBg: "#000c17",
  defaultBg: "#000c17",
  defaultColor: "#ffffff",
  defaultBorderColor: "#ffffff",
  defaultActiveColor: "#ffffff",
  defaultActiveBorderColor: "#000c17",
  defaultHoverColor: "#000c17",
  defaultHoverBorderColor: "#000c17",
};

const tertiary = {
  defaultActiveBg: "#ffffff",
  defaultBg: "#ffffff",
  defaultColor: "#000c17",
  defaultBorderColor: "#ffffff",
  defaultActiveColor: "#000c17",
  defaultActiveBorderColor: "#ffffff",
  defaultHoverColor: "#000c17",
  defaultHoverBorderColor: "#ffffff",
  defaultShadow:
    "rgba(145, 71, 255, 0.3) 0px 4px 15px, rgb(255 71 71 / 30%) 0px 0px 10px",
  primaryShadow:
    "0 4px 15px rgba(145, 71, 255, 0.3), 0 0 10px rgba(71, 156, 255, 0.3)",
};

const quaternary = {
  defaultActiveBg: "#0A0F1E",
  defaultBg: "#0A0F1E",
  defaultColor: "#ffffff",
  defaultBorderColor: "#ffffff",
  defaultActiveColor: "#0A0F1E",
  defaultActiveBorderColor: "#ffffff",
  defaultHoverColor: "#ffffff",
  defaultHoverBorderColor: "#0A0F1E",
  defaultHoverBg: "#0A0F1E",
};

interface ClrButtonPropsType extends ButtonProps {
  btntype: "primary" | "secondary" | "tertiary" | "quaternary";
}

export const ClrButton = (props: ClrButtonPropsType) => {
  const { btntype } = props;
  return (
    <ConfigProvider
      wave={{}}
      theme={{
        components: {
          Button:
            btntype == "secondary"
              ? secondary
              : btntype == "tertiary"
              ? tertiary
              : btntype == "quaternary"
              ? quaternary
              : primary,
        },
      }}
    >
      <Button {...props} />
    </ConfigProvider>
  );
};
