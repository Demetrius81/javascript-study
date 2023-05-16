"use strict";

function include(url) {
  var scriptEl = document.createElement("script");
  scriptEl.src = url;
  document.querySelector("body").append(scriptEl);
}

include("scripts/Card.js");
include("scripts/data.js");
include("scripts/cards.js");
