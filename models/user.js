const bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define("Users", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      first_name: {
        type: DataTypes.STRING,
        
      },     
      last_name: {
        type: DataTypes.STRING,
        
      },     
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {isEmail: true,
      }},     
      user: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },     
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
            }
        }
      })
    

    Users.prototype.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
    };

    Users.hook("beforeCreate", function(user) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return Users;
  };

