'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      this.belongsTo(models.Users, { 
        targetKey: 'userId', 
        foreignKey: 'UserId', 
      });

      
      this.hasMany(models.Comments, { 
        sourceKey: 'postId', 
        foreignKey: 'PostId', 
      });   

      // Users 모델에서
      this.hasMany(models.Likes, { 
        sourceKey: 'postId', 
        foreignKey: 'PostId', 
      });
    }
  }
  Posts.init({
    postId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    UserId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      
    },
    nickname: {
      type: Sequelize.STRING,
      allowNull: false,
      
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("now")
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("now")
    }
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};