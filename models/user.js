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
      firstname: {
        type: DataTypes.STRING,
        notEmpty: true,
      },
      lastnme: {
        type: DataTypes.STRING,
        notEmpty: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
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
  