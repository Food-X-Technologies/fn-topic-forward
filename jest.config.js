module.exports = {
    setupFiles: [
        "<rootDir>/.jest/setEnvVars.js"
    ],
    reporters: [
        "default",
        "jest-trx-results-processor"
    ]
};