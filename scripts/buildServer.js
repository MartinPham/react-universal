process.env.NODE_ENV = "production";

const { build } = require("@craco/craco/lib/cra");
const craWebpackConfig = require('./createConfig.server');



build();