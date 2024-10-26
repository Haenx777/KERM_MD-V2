//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "50955191937";
global.owner = process.env.OWNER_NUMBER || "50940141783";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUhMTDdkc2M0WWhDKzhuamNQWi81T1hPK08zMFltWVF2aFduNXNoVU1WZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkV3M1J3aHczNm9uWUpZYmZUdmZwbTV6Q2hZcmRDSmdWNTU3Y3Q0M1BGND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTkkwa1ZFK09LbUZOcWN1SWxyMi9oelFKSDFJWWlucE9WeWczRzE2V204PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyb1lmV1BJcnZzdHNOUWx3MFFhSlhyazdvcjFRak1URi83SUs0NGsvaVM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFOc0hic0ZkbTZKS3JnRnpxa2pDWDlMOGk4WFRLLzdZT3RJaWRNOFduMXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtMeWYzY1p2aTFZWnpFNjlQTWY3MW1kNENNUksxT2xYOTQveS9GZ2tPVVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU52c1hmaFFydmFZWTZ2cXplazFZK0ZLNXJYak1PRys5WEZLQzEzRytHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU9IMGpUcEI4TEVoVHF6RjFCdzBVUE5ZU1BPcFRpWUVYNGVLK3hRUk94MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxjQmNhYUc1UFAwbWMrc0c4RHJhbkZPYWJTM2k5bHhlbXUyRnNobzFtU0tpYStLRTMranNVVFhZTDRtdldGajk1RjRkWUd1T2tUbThFTm5MZHNYY0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6IjNUT2JUcm1UWm9GQUZqcGdTaUtuZ2hINFFoa2NnMG8wRWUwNGRxOWZWbjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkRVNEJNVXpjUThHTzVkN011NGpTX1EiLCJwaG9uZUlkIjoiNTFjMTNjYzgtMzlmZC00NTY2LTk3ZTEtOThlMjAwMmNjOGIwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFSTlQ2RytVdW0xMmlaa1NmcEFlRjVCMjJCTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRWTJnYlJNSzRwNUR0Y0dpclZNVUxicVJvSDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUzZRWkVOOU0iLCJtZSI6eyJpZCI6IjUwOTU1MTkxOTM3OjU0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkHMtlPNjuKxp8WCUsy4QdKITdKJ5Y2CX1PNhkXMuk7Mvc2T6oC4Ss2bVcyGzIgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tMeXdmVURFSjdoODdnR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InkweFdpZnpDdXE3dVBBUFVlL3NZd2RWY0tmUW4rR2pvVDFFNmJzMlVrWDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjN3ampoZVRFRGhKNTgwcHpFdDVkSjBYZ2FzdUVvaWFnOHQ2djZwRk5ZRitmWk9BMTd3NTdDaVFFUjk0ZVZtNU1IRzhnblJ0SnBCRGhmL2ZRQUkvaENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1dGtiVVJNZkZtYWhVK1JsQ1R3SnZZTk5GMHpKNC94L2NsZ2prc1dCSVpzTmRWSzFhK0FCNWl1OFc0M25ycFlSYWx0NEJlWGExSDVHMFhPamFGSzhCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTU1MTkxOTM3OjU0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmN0TVZvbjh3cnF1N2p3RDFIdjdHTUhWWENuMEovaG82RTlST203TmxKRisifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjk5NDk4Njd9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "$",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "𝐈𝐜𝐞🧊_Hαҽɳ🥷🏾🖤",
  botname: process.env.BOT_NAME || "𝐈𝐜𝐞🧊_Hαҽɳ🥷🏾🖤",
  ownername: process.env.OWNER_NAME || "𝐈𝐜𝐞🧊_Hαҽɳ🥷🏾🖤",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
