import { NextSeoProps } from "next-seo";

const config: NextSeoProps = {
    title: "Title of your website/app",
    description: "Description",
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'Domain you bought',
        site_name: "Name for your site, eg. company name or brand name"
    }
}

export default config