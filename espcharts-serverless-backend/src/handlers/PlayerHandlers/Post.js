const mongoose = require('mongoose');
const connectDatabase = require('../../database/dbConfig');
const Player = require('../../models/Player');
const cors = require('cors');

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try{

    await connectDatabase();
    const { firstName, lastName, userName, gameTitle, gameRole, age, country } = JSON.parse(event.body);

    let playerObj = {
      firstName,
      lastName,
      userName,
      gameTitle,
      gameRole,
      age,
      country,
    };

    playerObj = await Player.create(playerObj);
    return {
      statusCode: 201,
      headers: {
        'Access-Control-Allow-Origin': '*', // Replace with your frontend's URL
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(playerObj),
    }
  } catch (error) {
    console.error(error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
