module.exports = {
  reactStrictMode: true,
  images:   {
    domains: ['ik.imagekit.io']
  },
  env: {
    EMAILJS_CONTACT_SERVICE_ID: 'annamaya_contact',
    EMAILJS_CONTACT: 'template_contact',
    EMAILJS_USERID: 'user_ztHBDIFqJhlKGJYmz9eT6',
    GA_TRACKING_ID: "G-8MZ75VT0ZY"
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|jpeg)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
}
