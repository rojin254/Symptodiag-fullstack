module.exports=(sequelize,DataTypes)=>{
    const Diseases=sequelize.define('Diseases',{
        disease_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        symptoms:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        tests:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        remedies:{
            type:DataTypes.TEXT
        }
        
    })
    return Diseases;
}