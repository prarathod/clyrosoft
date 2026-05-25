import emailjs from "@emailjs/browser";
import { appConfig } from "app/appConfig/appconfig";
import { ContactFormFieldTypes } from "app/utils/types/type";

export const sendEmail = async ({
  fullName,
  company,
  email,
  message,
}: ContactFormFieldTypes): Promise<void> => {
  const templateParams = {
    from_name: fullName,
    from_email: email,
    company: company,
    message: message,
    to_name: "Clyrosoft Team",
    reply_to: process.env.NEXT_PUBLIC_REPLY_TO_EMAIL || email,
    logo: "/clr-logo.png",
  };

  // Throws on failure — the caller's catch block will handle the error message.
  await emailjs.send(
    appConfig.serviceId || "",
    appConfig.templateId || "",
    templateParams,
    appConfig.publicKey
  );
};
