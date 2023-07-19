import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();
const getRandomValues = (bytes) => crypto.getRandomValues(new Uint8Array(bytes));
const DEFAULT_ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const generateRandomString = (size, alphabet = DEFAULT_ALPHABET) => {
  const mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
  const step = -~(1.6 * mask * size / alphabet.length);
  let bytes = getRandomValues(step);
  let id = "";
  let index = 0;
  while (id.length !== size) {
    id += alphabet[bytes[index] & mask] ?? "";
    index += 1;
    if (index > bytes.length) {
      bytes = getRandomValues(step);
      index = 0;
    }
  }
  return id;
};
const DEBUG_GLOBAL = "__lucia_debug_mode";
const ESCAPE = "\x1B";
const DEFAULT_TEXT_FORMAT = "\x1B[0m";
const DEFAULT_FG_BG = `${ESCAPE}[0m`;
const RED_CODE = 9;
const LUCIA_COLOR_CODE = 63;
const WHITE_CODE = 231;
const GREEN_CODE = 34;
const CYAN_CODE = 6;
const YELLOW_CODE = 3;
const PURPLE_CODE = 5;
const BLUE_CODE = 4;
const globalContext = globalThis;
const format = (text, format2, removeFormat) => {
  return `${format2}${text}${removeFormat ? removeFormat : DEFAULT_TEXT_FORMAT}`;
};
const bgFormat = (text, colorCode) => {
  return format(text, `${ESCAPE}[48;5;${colorCode}m`, DEFAULT_FG_BG);
};
const fgFormat = (text, colorCode) => {
  return format(text, `${ESCAPE}[38;5;${colorCode}m`, DEFAULT_FG_BG);
};
const bg = {
  lucia: (text) => bgFormat(text, LUCIA_COLOR_CODE),
  red: (text) => bgFormat(text, RED_CODE),
  white: (text) => bgFormat(text, WHITE_CODE),
  green: (text) => bgFormat(text, GREEN_CODE),
  cyan: (text) => bgFormat(text, CYAN_CODE),
  yellow: (text) => bgFormat(text, YELLOW_CODE),
  purple: (text) => bgFormat(text, PURPLE_CODE),
  blue: (text) => bgFormat(text, BLUE_CODE)
};
const fg = {
  lucia: (text) => fgFormat(text, LUCIA_COLOR_CODE),
  red: (text) => fgFormat(text, RED_CODE),
  white: (text) => fgFormat(text, WHITE_CODE),
  green: (text) => fgFormat(text, GREEN_CODE),
  cyan: (text) => fgFormat(text, CYAN_CODE),
  yellow: (text) => fgFormat(text, YELLOW_CODE),
  purple: (text) => fgFormat(text, PURPLE_CODE),
  blue: (text) => fgFormat(text, BLUE_CODE),
  default: (text) => format(text, DEFAULT_TEXT_FORMAT)
};
const bold = (text) => format(text, `${ESCAPE}[1m`, `${ESCAPE}[22m`);
const dim = (text) => format(text, `${ESCAPE}[2m`, `${ESCAPE}[22m`);
const isDebugModeEnabled = () => {
  return Boolean(globalContext[DEBUG_GLOBAL]);
};
const linebreak = () => console.log("");
const createCategory = (name, themeTextColor) => {
  const createLogger = (textColor = fg.default) => {
    return (text, subtext) => {
      if (!isDebugModeEnabled())
        return;
      if (subtext) {
        return log(themeTextColor(`[${name}]`), `${textColor(text)}`, subtext);
      }
      log(themeTextColor(`[${name}]`), `${textColor(text)}`);
    };
  };
  return {
    info: createLogger(),
    notice: createLogger(fg.yellow),
    fail: createLogger(fg.red),
    success: createLogger(fg.green)
  };
};
const enableDebugMode = () => {
  globalContext[DEBUG_GLOBAL] = true;
};
const disableDebugMode = () => {
  globalContext[DEBUG_GLOBAL] = false;
};
const debug = {
  init: (debugEnabled) => {
    const text = debugEnabled ? "Debug mode enabled" : "Debug mode disabled";
    if (debugEnabled) {
      enableDebugMode();
    } else {
      disableDebugMode();
    }
    linebreak();
    console.log(` ${bg.lucia(bold(fg.white(" lucia ")))}  ${fg.lucia(bold(text))}`);
  },
  request: {
    init: (method, href) => {
      if (!isDebugModeEnabled())
        return;
      linebreak();
      const getUrl = () => {
        try {
          const url = new URL(href);
          return url.origin + url.pathname;
        } catch {
          return href;
        }
      };
      log(bg.cyan(bold(fg.white(" request "))), fg.cyan(`${method.toUpperCase()} ${getUrl()}`));
    },
    ...createCategory("request", fg.cyan)
  },
  session: createCategory("session", fg.purple),
  key: createCategory("key", fg.blue)
};
const log = (type, text, subtext) => {
  if (!subtext) {
    return console.log(`${dim((/* @__PURE__ */ new Date()).toLocaleTimeString())}  ${type} ${text}`);
  }
  console.log(`${dim((/* @__PURE__ */ new Date()).toLocaleTimeString())}  ${type} ${text} ${dim(subtext)}`);
};
export {
  debug as d,
  generateRandomString as g,
  prismaClient as p
};
