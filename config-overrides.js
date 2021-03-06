const { alias } = require('react-app-rewire-alias');

module.exports = function override(config){
  alias({
    '@': 'src',
    '@api': 'src/utils/api',
    '@hooks': 'src/utils/hooks',
    '@constants': 'src/utils/constants',
    '@functions': 'src/utils/functions'
  })(config);

  return config;
};