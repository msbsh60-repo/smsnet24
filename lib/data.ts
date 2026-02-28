export const menuItems = [
  { name: "Home", href: "/" },
  {
    name: "Bulk SMS",
    href: "/bulk-sms",
    children: [
      { name: "Mask", href: "/bulk-sms#mask" },
      { name: "Non-Mask", href: "/bulk-sms#non-mask" },
      { name: "Area Based", href: "/bulk-sms#area-based" }
    ]
  },
  { name: "VBS", href: "/vbs" },
  { name: "PUSH PULL", href: "/push-pull" },
  { name: "IVR Message", href: "/ivr-message" },
  { name: "Mobile Banking", href: "/mobile-banking" },
  { name: "SMS Support", href: "/sms-support" },
  { name: "Contact", href: "/contact" }
];

export const services = [
  "Bulk SMS",
  "Voice Broadcasting Service",
  "PUSH PULL",
  "IVR Message",
  "Mobile Banking",
  "SMS Support"
];
