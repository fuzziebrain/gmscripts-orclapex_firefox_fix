// ==UserScript==
// @name APEX Builder Firefox Fix
// @namespace http://www.fuzziebrain.com/
// @description Fix css issues
// @include https://apex.oracle.com/*
// @version       1.1
// @grant         GM_addStyle
// ==/UserScript==
GM_addStyle("table.formlayout td input.text_field, table.formlayout td input.password, table.formlayout td input[type=\"text\"], table.formlayout td input[type=\"password\"], table.formlayout td textarea { line-height: normal; }");
GM_addStyle("div.aLogin .aLoginForm input[type=\"text\"], div.aLogin .aLoginForm input[type=\"password\"] { line-height: normal; }");
