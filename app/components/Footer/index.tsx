import { Footer } from "antd/es/layout/layout";
import { FC } from "react";
import Link from "next/link";

export const ClrFooter: FC<React.ComponentProps<typeof Footer>> = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      items: [
        { label: "Pricing", href: "/pricing" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Refund Policy", href: "/refund-policy" },
      ],
    },
    {
      title: "Social",
      items: [
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "Instagram", href: "https://instagram.com" },
      ],
    },
  ];
  return (
    <Footer>
      <footer className="w-full py-8 bg-white border-t">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Company Info */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">ClyroSoft Solution</h3>
              <p className="text-sm text-gray-600">
                Copyright © {currentYear} ClyroSoft Solution
              </p>
              <p className="text-sm text-gray-600">All rights reserved</p>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {footerLinks.map((section) => (
                <div key={section.title}>
                  <h4 className="text-sm font-semibold mb-3">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.items.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </Footer>
  );
};

export default Footer;
