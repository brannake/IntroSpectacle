module.exports = function(sequelize, DataTypes) {
    const user = sequelize.define("user", {
      user: {
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
        }
    });
    return user;
  };
  