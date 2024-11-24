import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    // Modern Color Palette
    colorPrimary: "#2563eb", // Rich blue
    colorSuccess: "#10b981", // Emerald
    colorWarning: "#f59e0b", // Amber
    colorError: "#ef4444", // Red
    colorInfo: "#3b82f6", // Blue

    // // Neutral Colors
    colorTextBase: "#1f2937", // Dark gray for main text
    colorTextSecondary: "#4b5563", // Medium gray for secondary text
    colorBgBase: "#ffffff",
    colorBgContainer: "#ffffff",
    colorBgElevated: "#ffffff",
    colorBgLayout: "#f3f4f6",

    // Border
    borderRadius: 8,
    borderRadiusLG: 12,
    borderRadiusSM: 4,
    borderRadiusXS: 2,

    // Typography
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    fontSize: 16,
    fontSizeHeading1: 48,
    fontSizeHeading2: 40,
    fontSizeHeading3: 32,
    fontSizeHeading4: 24,
    fontSizeHeading5: 20,
    fontWeightStrong: 600,

    //Spacing
    margin: 16,
    marginXS: 8,
    marginSM: 12,
    marginLG: 24,
    marginXL: 32,
    padding: 16,
    paddingXS: 8,
    paddingSM: 12,
    paddingLG: 24,
    paddingXL: 32,

    //Control States
    controlOutline: "rgba(37, 99, 235, 0.2)",
    controlItemBgHover: "rgba(37, 99, 235, 0.04)",
    controlItemBgActive: "#eff6ff",
  },
  components: {
    Button: {
      algorithm: true,
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
      paddingContentHorizontal: 20,
      borderRadius: 8,
      primaryColor: "#2563eb",
      defaultBg: "#ffffff",
      defaultBorderColor: "#e5e7eb",
      defaultColor: "#374151",
      fontWeight: 500,
    },
    Input: {
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
      paddingBlock: 8,
      paddingInline: 12,
      activeBorderColor: "#2563eb",
      hoverBorderColor: "#93c5fd",
      addonBg: "#f3f4f6",
    },
    Select: {
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
      multipleItemBg: "#eff6ff",
      multipleItemBorderColor: "#bfdbfe",
      optionSelectedBg: "#eff6ff",
    },
    Card: {
      headerBg: "#ffffff",
      padding: 24,
      actionsBg: "#ffffff",
      actionsLiMargin: "12px 0",
      borderRadiusLG: 12,
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    },
    Menu: {
      activeBarHeight: 1,
      horizontalItemHoverColor: "#000c17",
      horizontalItemSelectedColor: "#000c17",
    },
    Table: {
      headerBg: "#f8fafc",
      headerColor: "#374151",
      headerSplitColor: "#e5e7eb",
      rowHoverBg: "#f8fafc",
      borderColor: "#e5e7eb",
      padding: 16,
      cellPaddingBlock: 12,
      cellPaddingInline: 16,
    },
    Tabs: {
      cardBg: "#ffffff",
      cardGutter: 4,
      itemSelectedColor: "#2563eb",
      itemHoverColor: "#60a5fa",
      itemActiveColor: "#2563eb",
      inkBarColor: "#2563eb",
      cardHeight: 40,
    },
    Modal: {
      headerBg: "#ffffff",
      titleColor: "#1f2937",
      borderRadiusLG: 12,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    },
    Form: {
      labelColor: "#374151",
      verticalLabelPadding: 8,
      verticalLabelMargin: 0,
    },
    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: 8,
    },
    Divider: {
      marginLG: 32,
      margin: 24,
      colorSplit: "#e5e7eb",
    },
    Pagination: {
      itemSize: 32,
      itemActiveBg: "#eff6ff",
      itemLinkBg: "#ffffff",
    },
    Steps: {
      titleLineHeight: 24,
      customIconSize: 32,
      iconSize: 32,
    },
    Avatar: {
      borderRadius: 999,
      groupOverlapping: -8,
      groupSpace: 4,
      boxShadow: "none",
    },
    Badge: {
      statusSize: 8,
      dotSize: 6,
      textFontSize: 12,
      textFontWeight: 500,
    },
    Calendar: {
      itemActiveBg: "#eff6ff",
      fullBg: "#ffffff",
      fullPanelBg: "#ffffff",
    },
    Collapse: {
      headerPadding: 16,
      contentPadding: 16,
      borderRadiusLG: 8,
    },
    Descriptions: {
      titleMarginBottom: 16,
      extraColor: "#6b7280",
    },
    Popover: {
      padding: 12,
      borderRadius: 8,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    },
    Statistic: {
      contentFontSize: 24,
    },
    Timeline: {
      itemPaddingBottom: 24,
      dotBorderWidth: 2,
    },
    Transfer: {
      itemHeight: 36,
    },
    Layout: {
      headerBg: "white",
      headerColor: "black",
      lightTriggerColor: "red",
      siderBg: "green",
      triggerBg: "yellow",
      triggerColor: "pink",
      lightTriggerBg: "blue",
      lightSiderBg: "navy",
      footerPadding: 0,
    },
  },
};

export default theme;
