module.exports = {
    siteMetadata: {
        title: "Unavu Kaadu (Food Forest)",
        titleTemplate: "",
        description: "Unavu Kaadu (Food Forest) - Food Forest gardening is a low-maintenance, sustainable, plant-based food production and agroforestry system based on woodland ecosystems, incorporating fruit and nut trees, shrubs, herbs, vines and perennial vegetables which have yields directly useful to humans.",
        url: "http://www.unavukaadu.com",
        image: "/images/logo.png",
        twitterUsername: "@unavukaadu",
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "x12348991sdf90",
            },
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ],
};
