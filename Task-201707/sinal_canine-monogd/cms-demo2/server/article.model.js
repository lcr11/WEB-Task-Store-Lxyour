const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let BlogPost = new Schema({
  title : String,
  content : String,
  createTime : Number
});

let BlogModel = mongoose.model('cms_articles',BlogPost);

module.exports = BlogModel;

