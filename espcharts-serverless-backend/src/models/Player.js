const mongoose = require("mongoose");
const playerSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  userName: {
    type: String,
    required: false,
  },
  gameTitle: {
    type: String,
    enum: [
      "Counter Strike: Global Offensive",
      "League of Legends",
      "Rainbow Six Siege",
      "Valorant",
      "Overwatch",
      "Call Of Duty",
    ],
    required: false,
  },
  gameRole: {
    type: String,
    enum: [
      "Entry Frag",
      "Lurker",
      "AWPer",
      "Support",
      "In-Game Leader (IGL)",
      "Rifler",
      "Assault Rifle (AR)",
      "Submachine Gun (SMG)",
      "Sniper",
      "Shotgunner",
      "LMG",
      "Coach",
      "Top Laner",
      "Jungler",
      "Mid Laner",
      "Bot Laner (ADC)",
      "Support",
      "Fragger",
      "Support",
      "Entry Fragger",
      "Anchor",
      "Roamer",
      "Coach",
      "Duelist",
      "Initiator",
      "Controller",
      "Sentinel",
      "Coach",
      "Tank",
      "DPS",
      "Support",
      "Flex",
      "Coach",
    ],
  },
  age: {
    type: Number,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
});

const Player = mongoose.model("Player", playerSchema);
module.exports = Player;
