module.exports = function(sequelize, DataTypes) {
  const dateInfo = sequelize.define("dateInfo", {
    user: {
      type: DataTypes.STRING,
    },
    month: {
      type: DataTypes.STRING,
    },
    day: {
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a todo from being entered if it doesn't
      // have a text value
      allowNull: true,
      validate: {
        len: [1, 140]
      }
    },
    image: {
      type: DataTypes.STRING
    }
  });
  return dateInfo;
};