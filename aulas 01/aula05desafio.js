
const comando = gets();

if (comando === "start") {
  console.log("Bot started");
} else if (comando === "stop") {
  console.log("Bot stopped");
} else if (comando === "pause") {
  console.log("Bot paused");
} else {
  console.log("unknown command");
}
