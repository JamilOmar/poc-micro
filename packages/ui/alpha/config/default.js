module.exports = {
    auth:{
      url: process.env.AUTH_URL || 'http://localhost:8080' + '/auth',
      realm: process.env.AUTH_REALM || 'poc',
      clientId: process.env.AUTH_CLIENT_ID || 'shell-ui-dev'
    }
}