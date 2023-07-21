// src/utils/error.mjs
const formatError = (statusCode, message) => ({
    status: 'error',
    statusCode,
    message,
});

export { formatError };
