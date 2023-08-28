const mongoose = require('mongoose');
const connectDatabase = require('../../database/dbConfig');
const Player = require('../../models/Player');
const cors = require('cors');

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  
  try {
    await connectDatabase();
    const playerId = event.pathParameters.id;
    const updatedPlayerData = JSON.parse(event.body);

    const updatedPlayer = await Player.findByIdAndUpdate(playerId, updatedPlayerData, {
      new: true, // This option returns the updated document
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Replace with your frontend's URL
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(updatedPlayer),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
