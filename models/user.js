module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user: {
                type: DataTypes.STRING,
      },     
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
            }
        }
    });

    User.prototype.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
    };

    User.hook("beforeCreate", function(user) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return User;
  };
  