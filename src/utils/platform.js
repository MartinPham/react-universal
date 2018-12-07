export const PLATFORM_BROWSER = 'browser';
export const PLATFORM_NODE = 'node';
export const PLATFORM_CLI = 'cli';
export const PLATFORM_NATIVE = 'native';
export const PLATFORM_UNDEFINED = 'undefined';

let platform = PLATFORM_UNDEFINED;

if (typeof document !== 'undefined') {
  // I'm on the web!
  platform = PLATFORM_BROWSER;
}
else if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // I'm in react-native
  platform = PLATFORM_NATIVE;
}
else if (process && process.env && process.env.NODE_ENV ==='cli') {
  // I'm in node js
  platform = PLATFORM_CLI;
}
else {
  // I'm in node js
  platform = PLATFORM_NODE;
}

export default platform;