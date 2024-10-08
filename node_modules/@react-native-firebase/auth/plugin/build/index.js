"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const ios_1 = require("./ios");
/**
 * A config plugin for configuring `@react-native-firebase/auth`
 */
const withRnFirebaseAuth = config => {
    return (0, config_plugins_1.withPlugins)(config, [
        // iOS
        ios_1.withIosCaptchaUrlTypes,
    ]);
};
const pak = require('@react-native-firebase/auth/package.json');
exports.default = (0, config_plugins_1.createRunOncePlugin)(withRnFirebaseAuth, pak.name, pak.version);
