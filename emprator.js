//////تکایە دەسکاری پرۆجێکتەکەمەکە تا ریمێکس دەکەیت

const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  console.log(Date.now() + "hostemprator");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [`PARTNER BOT `, `BY : HELL`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "PLAYING",
      url: "http://www.twitch.tv/faith"
    });
  }, 3000);
});

// ======== { • REPLAY • }======== //

client.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith("reklam")) {
    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SAEWAN.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

client.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith("Reklam")) {
    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SAEWAN.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

client.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith("Slaw reklam")) {
    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SAEWAN.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

client.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith("slaw reklam")) {
    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SAEWAN.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

client.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith("Slaw Reklam")) {
    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SAEWAN.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

client.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith("سڵاو ڕیکلام")) {
    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SAEWAN.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});
////////

client.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith("ریکلام")) {
    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    SAEWAN.reply("**ریـکلاماکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

// ======== { • REKLAM • }======== //

client.on("ready", () => {
  var join = client.channels.get("849717307050950666"); /// ئاید ڤۆیس
  if (join) join.join();
});

client.on("message", saewan => {
  if (saewan.channel.type === "dm") {
    if (saewan.content.startsWith("https://discord.gg/")) {
      saewan.author.send(`> **تـۆش ریکلام بۆ ئـەم سێرڤـەرە بکە **  
https://discord.gg/uHbXwXSH6S`); /// لینکە سیرڤەرە خۆت

      client.channels.get("849717278504386590").send(
        ////ئایدی ژوری تێکست

        `> Nerdra la layan <@${saewan.author.id}> 
${saewan.content}`
      );
    }
  }
});

// ======== { • TOKENN • }======== //

client.login("ODAwNzY1ODgwNTY4OTA1NzY5.YAW5Vw.9BuZuRNdQKeG7tyQLSiMIeCFiIM");
////////////////تکایە دەسکاری ئێرەمەکە تا ریمێکس دەیکت
