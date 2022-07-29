module.exports = ({ env }) => ({
  upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 300000,
        },
        sizeLimit: 250 * 1024 * 1024,
      },
    },
  },
  // wysiwyg: {
  //   enabled: true,
  //   resolve: "./src/plugins/wysiwyg", // path to plugin folder
  // },
});
