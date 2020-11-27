'use strict';
module.exports={
    up: (queryInterface, Sequelize) =>{
        return queryInterface.createTable('Leads',{
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4, 
        },
        createdAt: {
            allownNull: false,
            type: Sequelize.DATE
        }, 
        updatedAt: {
            allownNull: false,
            type: Sequelize.DATE
        },
        email: {
            allownNull: false,
            type: Sequelize.STRING
        },
    });
    },
down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('Leads');
 }
};