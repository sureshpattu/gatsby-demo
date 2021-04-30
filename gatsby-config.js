module.exports = {
    siteMetadata: {
        title: "Unavu Kaadu (Food Forest)",
        titleTemplate: "",
        description: "Unavu Kaadu (Food Forest) - Unavu Kaadu gardening is a low-maintenance, sustainable, plant-based food production and agroforestry system based on woodland ecosystems, incorporating fruit and nut trees, shrubs, herbs, vines and perennial vegetables which have yields directly useful to humans.",
        siteUrl: "http://www.unavukaadu.com",
        baseUrl: "http://www.unavukaadu.com/",
        image: `${__dirname}/src/images/logo.png`,
        twitterUsername: "@unavukaadu",
        author:{

        }
    },
    plugins: [
        {
            resolve: "gatsby-plugin-google-gtag",
            options: {
                trackingIds: ["G-EE68VEBZ5Z"],
                gtagConfig: {
                    optimize_id: "GTM-N4XL6VN",
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                pluginConfig: {
                    head: false,
                    anonymize: true,
                    respectDNT: true,
                    defer: false,
                    pageTransitionDelay: 0,
                    sampleRate: 5,
                    siteSpeedSampleRate: 10,
                    cookieDomain: "unavukaadu.com",
                }
            },
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-image",
        "gatsby-plugin-offline",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: `${__dirname}/src/images/logo.png`,
            },
        },
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images/`,
            },
            __key: "images",
        },
    ],
};
