let ipURL = 'http://127.0.0.1:7001/default/'

let servicePath = {
    getArticleList: ipURL + 'getArticleList', // home interface
    getArticleById: ipURL + 'getArticleById/',  // detailed page interface
    getTypeInfo: ipURL + 'getTypeInfo',  // Article type interface
    getListById: ipURL + 'getListById/',  // Get Article list by type ID
}

export default servicePath;