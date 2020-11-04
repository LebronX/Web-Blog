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

  async getArticleById(){
    let id = this.ctx.params.id
    let sql = 'SELECT article.id as id ,'+
              'article.title as title ,' +
              'article.introduction as introduction ,' +
              'article.article_content as article_content ,' +
              "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i') as addTime ," +
              'article.view_count as view_count ,' +
              'type.typeName as typeName ,' +
              'type.id as typeId ' +
              'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
              'WHERE article.id=' + id
    //console.log(id)
    const result = await this.app.mysql.query(sql)
    this.ctx.body = {data:result}
  }

  // Get type name and id
  async getTypeInfo(){
    const result = await this.app.mysql.select('type')
    this.ctx.body = {data:result}
  }

  // Get Article list by type ID
  async getListById(){
    const id = this.ctx.params.id.substring(5)
    console.log('hahah', this.ctx.params)
    const sql = 'SELECT article.id as id ,'+
              'article.title as title ,' +
              'article.introduction as introduction ,' +
              "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i') as addTime ," +
              'article.view_count as view_count ,' +
              'type.typeName as typeName ' +
              'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
              'WHERE type_id=' + id;
    const results = await this.app.mysql.query(sql)
    this.ctx.body={data:results}
  }
}

module.exports = HomeController;
