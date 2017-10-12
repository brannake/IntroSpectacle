const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    const user = sequelize.define("user", {
      username: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        // AllowNull is a flag that restricts a todo from being entered if it doesn't
        // have a text value
        allowNull: false,
        validate: {
          len: [1, 140]
            }
        },
    });

    user.generateHash = function(password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
  // checking if password is valid
  user.validPassword = function(password) {
      return bcrypt.compareSync(password, this.local.password);
  };
    return user;
  };
  