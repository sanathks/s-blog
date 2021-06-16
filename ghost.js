module.exports = {
    development: {
        apiUrl: 'http://localhost:2369',
        contentApiKey: '80f24cee32400e2b09450dfdbc',
    },
    production: {
        apiUrl: process.env.GHOST_API_URL,
        contentApiKey: process.env.GHOST_CONTENT_API_KEY,
    },
}
