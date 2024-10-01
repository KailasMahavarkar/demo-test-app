const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const path = require('path');
const {mapValues} = require('lodash');

const CompanyPackagesRelative = {
  '@oxygen/native': '../packages/native/src',
};

const CompanyPackages = mapValues(CompanyPackagesRelative, relativePath =>
  path.resolve(relativePath),
);

projectPath = path.resolve(__dirname);

const watchFolders = [...Object.values(CompanyPackages)];
const extraNodeModules = {
  ...CompanyPackages,
};

// Should fix error "Unable to resolve module @babel/runtime/helpers/interopRequireDefault"
// See https://github.com/facebook/metro/issues/7#issuecomment-508129053
// See https://dushyant37.medium.com/how-to-import-files-from-outside-of-root-directory-with-react-native-metro-bundler-18207a348427
const extraNodeModulesProxy = new Proxy(extraNodeModules, {
  get: (target, name) => {
    if (target[name]) {
      return target[name];
    } else {
      return path.join(projectPath, `node_modules/${name}`);
    }
  },
});

const customConfig = {
  projectRoot: projectPath,
  watchFolders,
  resolver: {
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
    extraNodeModules: extraNodeModulesProxy,
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), customConfig);
