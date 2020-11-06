let ipURL = 'http://127.0.0.1:7001/admin/'

let servicePath = {
    checkLogin: ipURL + 'checkLogin', // Check username and password
    getTypeInfo: ipURL + 'getTypeInfo', // Get article type info
}

export default servicePath;