let players = [
  {
    nick: "sm00th",
    highScore: 212,
  },
  {
    nick: "r3d h3d",
    highScore: 301,
  },
  {
    nick: "@@sMILz@@",
    highScore: 192,
  },
];

function playerDiv(player) {
  let div = document.createElement("div");
  let nickSpan = document.createElement("span");
  nickSpan.textContent = player.nick;

  let scoreSpan = document.createElement("span");
}
