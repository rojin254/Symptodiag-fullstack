module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      userid: {
        type: DataTypes.STRING,
        defaultValue:999
        
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:"johnDoe"
      },
      age: {
        type: DataTypes.INTEGER,
      },
      gender: {
        type: DataTypes.STRING,
      },
      symptoms:{
        type:DataTypes.STRING
      }
    });
  
    return User;
  };
