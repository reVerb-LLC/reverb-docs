module.exports = {
  title: "reVerb docs",
  tagline: "The tagline of my site",
  url: "https://reVerb-LLC.github.io",
  baseUrl: "/reverb-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/miniLogo.svg",
  organizationName: "reVerb-LLC",
  projectName: "reverb-docs",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    sidebarCollapsible: false,
    navbar: {
      title: "Docs",
      logo: {
        alt: "reVerb Logo",
        src: "img/reVerbLogo.svg",
      },
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} reVerb LLC. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/reVerb-LLC/reverb-docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
