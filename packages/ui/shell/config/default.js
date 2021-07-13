module.exports = {
    shell: {
      url: process.env.SHELL_API_URL
    },
    auth:{
      url: 'http://localhost:8080' + '/auth',
      realm: 'poc',
      clientId: 'shell-ui-dev'
    }
}