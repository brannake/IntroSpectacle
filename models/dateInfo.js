module.exports = function(sequelize, DataTypes) {
  const dateInfo = sequelize.define("dateInfo", {
    user: {
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
    date: {
      type: DataTypes.DATEONLY,
      // defaultValue is a flag that defaults a new todos complete value to false if
      // it isn't supplied one
      defaultValue: false
    },
    image: {
      type: DataTypes.BLOB
    }
  });
  return dateInfo;
};
