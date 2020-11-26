'use strict'
module.exports =(sequelize,DataTypes) => {
    var Lead = sequelize.define('Lead',
    {
        id: {
           type: DataTypes.UUID,
           defaultValue: DataTypes.UUIDV4,

           allowNUll: false,
           primaryKey: true
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
        },
    });
    return Lead;
}