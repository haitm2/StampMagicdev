const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('json', 'png', 'jpg', 'jpeg', 'ttf', 'otf', 'mp4', 'mp3');
defaultConfig.resolver.unstable_conditionNames = ['browser', 'require', 'react-native',]

module.exports = defaultConfig;