module.exports = function(sequelize, DataTypes) {
  const dateInfo = sequelize.define("dateInfo", {
    user: {
      type: DataTypes.STRING,
    },
    month: {
      type: DataTypes.STRING,
    },
    day: {
      type: DataTypes.INTEGER,
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
    anger_score: {
      type: DataTypes.DECIMAL(10,10),
    },
    disgust_score: {
      type: DataTypes.DECIMAL(10,10),
    },
    fear_score: {
      type: DataTypes.DECIMAL(10,10),
    },
    joy_score: {
      type: DataTypes.DECIMAL(10,10),
    },
    sadness_score: {
      type: DataTypes.DECIMAL(10,10),
    },
    image: {
      type: DataTypes.STRING
    }
  });
  return dateInfo;
};