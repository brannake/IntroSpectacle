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
        len: [1, 1000]
      }
    },
    image: {
      type: DataTypes.STRING
    },
    anger_Score: {
      type: DataTypes.FLOAT
    },
    disgust_Score: {
      type: DataTypes.FLOAT
    },
    fear_Score: {
      type: DataTypes.FLOAT
    },
    joy_Score: {
      type: DataTypes.FLOAT
    },
    sadness_Score: {
      type: DataTypes.FLOAT
    }
  });
  return dateInfo;
};
