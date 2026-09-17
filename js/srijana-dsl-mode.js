CodeMirror.defineSimpleMode("cmitdsl", { // Matches mode: "cmitdsl" in your compiler
  start: [
    { regex: /\/\/.*/, token: "comment" },

    { regex: /\.title(?=\s*:)/, token: "keyword" },
    { regex: /\.greetings(?=\s*:)/, token: "keyword" },
    { regex: /\.banner(?=\s*:)/, token: "keyword" },

    { regex: /\.[a-zA-Z0-9_-]+(?=\s*:)/, token: "def" },

    { regex: /:/, token: "operator" },

    { regex: /#(?:[0-9a-fA-F]{3}){1,2}\b/, token: "number" },
    { regex: /\b(true|false|none|center|left|right|justify)\b/, token: "atom" },
    { regex: /\b\d+(?:px|em|rem|%)?\b/, token: "number" },

    { regex: /\b(p|ul|ol|list|img|div|quote|btn|button)\b(?=\s*\{)/, token: "tag" },

    { regex: /[\{\}]/, token: "bracket" },

    { regex: /\*\*.*?\*\*/, token: "strong" },
    { regex: /\*.*?\*/, token: "em" },
    { regex: /\[.*?\]\(.*?\)/, token: "link" }

  ],
  meta: {
    lineComment: "//"
  }
});