import emailjs from "@emailjs/browser";
import { appConfig } from "app/appConfig/appconfig";
import { ContactFormFieldTypes } from "app/utils/types/type";

export const sendEmail = async ({
  fullName,
  company,
  email,
  message,
}: ContactFormFieldTypes) => {
  try {
    const templateParams = {
      from_name: fullName,
      from_email: email,
      company: company,
      message: message,
      to_name: "Clyrosoft Team !",
      reply_to: "rockzzz0498@gmail.com",
      logo: "/clr-logo.png",
    };

    await emailjs.send(
      appConfig.serviceId || "",
      appConfig.templateId || "",
      templateParams,
      appConfig.publicKey
    );
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message: `Failed to send email`,
    };
  }
};
