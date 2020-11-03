'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'api hi'
  }

  async test() {
    this.ctx.body = 'api haaai'
  }
  
  async getArticleList() {
    let sql = 'SELECT article.id as id ,'+
              'article.title as title ,' +
              'article.introduction as introduction ,' +
              "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i') as addTime ," +
              'article.view_count as view_count ,' +
              'type.typeName as typeName ' +
              'FROM article LEFT JOIN type ON article.type_id = type.Id'
    const results = await this.app.mysql.query(sql)
    this.ctx.body={data:results}

  }

}

module.exports = HomeController;
