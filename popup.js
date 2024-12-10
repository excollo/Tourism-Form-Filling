const _0x32f918 = _0x53b7;
(function (_0x484c7b, _0xca5b92) {
  const _0x1eb126 = _0x53b7,
    _0x515cf1 = _0x484c7b();
  while (!![]) {
    try {
      const _0x3d4ee9 =
        -parseInt(_0x1eb126(0x12c)) / 0x1 +
        (-parseInt(_0x1eb126(0x13e)) / 0x2) *
          (parseInt(_0x1eb126(0x13f)) / 0x3) +
        (-parseInt(_0x1eb126(0x117)) / 0x4) *
          (parseInt(_0x1eb126(0x154)) / 0x5) +
        (parseInt(_0x1eb126(0x10c)) / 0x6) *
          (parseInt(_0x1eb126(0x118)) / 0x7) +
        -parseInt(_0x1eb126(0x137)) / 0x8 +
        (parseInt(_0x1eb126(0x143)) / 0x9) *
          (parseInt(_0x1eb126(0x10a)) / 0xa) +
        (parseInt(_0x1eb126(0x161)) / 0xb) * (parseInt(_0x1eb126(0x121)) / 0xc);
      if (_0x3d4ee9 === _0xca5b92) break;
      else _0x515cf1["push"](_0x515cf1["shift"]());
    } catch (_0x5ac714) {
      _0x515cf1["push"](_0x515cf1["shift"]());
    }
  }
})(_0x29e8, 0x9eb51);
function _0x53b7(_0x3ce170, _0x4fb460) {
  const _0x29e8b0 = _0x29e8();
  return (
    (_0x53b7 = function (_0x53b7f7, _0x2f004a) {
      _0x53b7f7 = _0x53b7f7 - 0x105;
      let _0xb8d018 = _0x29e8b0[_0x53b7f7];
      return _0xb8d018;
    }),
    _0x53b7(_0x3ce170, _0x4fb460)
  );
}
class ExcelFormFiller {
  constructor() {
    const _0x1f1a6c = _0x53b7;
    (this["fileInput"] = document["getElementById"]("fileInput")),
      (this[_0x1f1a6c(0x11d)] = document[_0x1f1a6c(0x120)](_0x1f1a6c(0x11d))),
      (this[_0x1f1a6c(0x10d)] = document[_0x1f1a6c(0x120)](_0x1f1a6c(0x147))),
      (this["currentUserDisplay"] = document["getElementById"](
        _0x1f1a6c(0x136)
      )),
      (this[_0x1f1a6c(0x10f)] = 0x0),
      (this[_0x1f1a6c(0x13c)] = null),
      this[_0x1f1a6c(0x153)](),
      this["loadStoredData"]();
  }
  async ["loadStoredData"]() {
    const _0x468980 = _0x53b7;
    try {
      const _0x1ab289 = await chrome["storage"][_0x468980(0x141)][
        _0x468980(0x130)
      ]([_0x468980(0x112), _0x468980(0x10f)]);
      _0x1ab289["excelData"] &&
        ((this["jsonData"] = _0x1ab289["excelData"]),
        (this[_0x468980(0x10f)] = _0x1ab289["currentIndex"] || 0x0),
        (this["fillFormButton"][_0x468980(0x159)] = ![]),
        this[_0x468980(0x140)](),
        this["updateStatus"](
          _0x468980(0x109) +
            this[_0x468980(0x13c)][_0x468980(0x132)] +
            _0x468980(0x149)
        ));
    } catch (_0x55ebef) {
      console[_0x468980(0x11a)](_0x468980(0x124), _0x55ebef),
        this["updateStatus"](_0x468980(0x10e));
    }
  }
  [_0x32f918(0x153)]() {
    const _0x207b35 = _0x32f918;
    this[_0x207b35(0x12d)][_0x207b35(0x108)](
      _0x207b35(0x105),
      async (_0x22303d) => {
        const _0x16315b = _0x207b35,
          _0x36a4ca = _0x22303d[_0x16315b(0x126)][_0x16315b(0x134)][0x0];
        _0x36a4ca && (await this[_0x16315b(0x106)](_0x36a4ca));
      }
    ),
      this[_0x207b35(0x11d)][_0x207b35(0x108)](_0x207b35(0x160), () => {
        const _0x1d84cd = _0x207b35;
        this[_0x1d84cd(0x107)]();
      });
  }
  async ["handleFileUpload"](_0x407112) {
    const _0x3ea28a = _0x32f918;
    try {
      this[_0x3ea28a(0x127)](_0x3ea28a(0x11f));
      const _0x1fe6a6 = await this[_0x3ea28a(0x129)](_0x407112),
        _0xc0d717 = XLSX[_0x3ea28a(0x12e)](_0x1fe6a6, {
          type: _0x3ea28a(0x15a),
        }),
        _0x4da08e = _0xc0d717[_0x3ea28a(0x15c)][0x0],
        _0x4b889a = _0xc0d717[_0x3ea28a(0x142)][_0x4da08e];
      this[_0x3ea28a(0x13c)] =
        XLSX[_0x3ea28a(0x14a)][_0x3ea28a(0x14f)](_0x4b889a);
      if (
        this[_0x3ea28a(0x13c)] &&
        this[_0x3ea28a(0x13c)][_0x3ea28a(0x132)] > 0x0
      )
        await chrome[_0x3ea28a(0x116)][_0x3ea28a(0x141)]["set"]({
          excelData: this[_0x3ea28a(0x13c)],
          currentIndex: 0x0,
        }),
          (this["currentIndex"] = 0x0),
          (this[_0x3ea28a(0x11d)]["disabled"] = ![]),
          this[_0x3ea28a(0x140)](),
          this[_0x3ea28a(0x127)](
            _0x3ea28a(0x13b) +
              this[_0x3ea28a(0x13c)][_0x3ea28a(0x132)] +
              _0x3ea28a(0x149)
          );
      else throw new Error(_0x3ea28a(0x148));
    } catch (_0x2182e2) {
      console[_0x3ea28a(0x11a)]("Error\x20processing\x20file:", _0x2182e2),
        this[_0x3ea28a(0x127)](_0x3ea28a(0x114) + _0x2182e2["message"]),
        (this[_0x3ea28a(0x11d)][_0x3ea28a(0x159)] = !![]);
    }
  }
  [_0x32f918(0x129)](_0x131996) {
    return new Promise((_0x186ea3, _0x42d556) => {
      const _0x341b32 = _0x53b7,
        _0x4ef517 = new FileReader();
      (_0x4ef517[_0x341b32(0x146)] = (_0x106e51) =>
        _0x186ea3(_0x106e51[_0x341b32(0x126)][_0x341b32(0x145)])),
        (_0x4ef517[_0x341b32(0x128)] = (_0x4fb0f8) =>
          _0x42d556(new Error(_0x341b32(0x10b)))),
        _0x4ef517[_0x341b32(0x14e)](_0x131996);
    });
  }
  [_0x32f918(0x140)]() {
    const _0x46a597 = _0x32f918;
    if (
      !this[_0x46a597(0x13c)] ||
      !this[_0x46a597(0x13c)][this["currentIndex"]]
    ) {
      this[_0x46a597(0x12b)][_0x46a597(0x11b)] = _0x46a597(0x155);
      return;
    }
    const _0x539b60 = this[_0x46a597(0x13c)][this[_0x46a597(0x10f)]];
    this[_0x46a597(0x12b)]["innerHTML"] =
      _0x46a597(0x138) +
      (this["currentIndex"] + 0x1) +
      "/" +
      this[_0x46a597(0x13c)][_0x46a597(0x132)] +
      _0x46a597(0x123) +
      (_0x539b60[_0x46a597(0x133)] || _0x46a597(0x13d)) +
      _0x46a597(0x12f) +
      (_0x539b60["Mobile\x20No"] || _0x46a597(0x13d)) +
      "</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td><strong>Identity:</strong></td><td>" +
      (_0x539b60[_0x46a597(0x115)] || "N/A") +
      "</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td><strong>Tourist\x20Type:</strong></td><td>" +
      (_0x539b60[_0x46a597(0x15b)] || _0x46a597(0x13d)) +
      _0x46a597(0x144) +
      (_0x539b60[_0x46a597(0x152)] || _0x46a597(0x13d)) +
      "</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td><strong>Select\x20Gender:</strong></td><td>" +
      (_0x539b60[_0x46a597(0x11c)] || _0x46a597(0x13d)) +
      _0x46a597(0x113);
  }
  async [_0x32f918(0x15f)](_0x4a22b8) {
    const _0x1d26b5 = _0x32f918;
    try {
      try {
        return (
          await chrome[_0x1d26b5(0x135)][_0x1d26b5(0x158)](_0x4a22b8, {
            action: _0x1d26b5(0x110),
          }),
          !![]
        );
      } catch {}
      await chrome[_0x1d26b5(0x111)]["executeScript"]({
        target: { tabId: _0x4a22b8 },
        files: ["content.js"],
      }),
        await new Promise((_0x501326) => setTimeout(_0x501326, 0x64));
      try {
        return (
          await chrome[_0x1d26b5(0x135)][_0x1d26b5(0x158)](_0x4a22b8, {
            action: _0x1d26b5(0x110),
          }),
          !![]
        );
      } catch {
        throw new Error(_0x1d26b5(0x14b));
      }
    } catch (_0x503ed2) {
      console[_0x1d26b5(0x11a)](
        "Error\x20in\x20ensureContentScriptInjected:",
        _0x503ed2
      );
      throw new Error(
        "Content\x20script\x20injection\x20failed:\x20" + _0x503ed2["message"]
      );
    }
  }
  [_0x32f918(0x11e)](_0x3fba66, _0x452d56, _0xf6db77 = 0x1388) {
    return new Promise((_0x2f54a4, _0x3f04ba) => {
      const _0x221597 = _0x53b7,
        _0xe8557c = setTimeout(
          () => _0x3f04ba(new Error(_0x221597(0x150))),
          _0xf6db77
        );
      chrome[_0x221597(0x135)][_0x221597(0x158)](
        _0x3fba66,
        _0x452d56,
        (_0x578ae1) => {
          const _0x4bc6ef = _0x221597;
          clearTimeout(_0xe8557c),
            chrome["runtime"][_0x4bc6ef(0x119)]
              ? _0x3f04ba(
                  new Error(
                    chrome[_0x4bc6ef(0x14d)][_0x4bc6ef(0x119)][_0x4bc6ef(0x156)]
                  )
                )
              : _0x2f54a4(_0x578ae1);
        }
      );
    });
  }
  async [_0x32f918(0x107)]() {
    const _0x3f47d6 = _0x32f918;
    if (
      !this[_0x3f47d6(0x13c)] ||
      !this[_0x3f47d6(0x13c)][this[_0x3f47d6(0x10f)]]
    ) {
      this[_0x3f47d6(0x127)](_0x3f47d6(0x15d));
      return;
    }
    try {
      const [_0x5aeefd] = await chrome[_0x3f47d6(0x135)][_0x3f47d6(0x13a)]({
        active: !![],
        currentWindow: !![],
      });
      if (!_0x5aeefd) throw new Error(_0x3f47d6(0x14c));
      this[_0x3f47d6(0x127)]("Preparing\x20to\x20fill\x20form..."),
        await this[_0x3f47d6(0x15f)](_0x5aeefd["id"]);
      const _0x2a4a6c = this[_0x3f47d6(0x13c)][this["currentIndex"]],
        _0x2d766c = await new Promise((_0x345d0d, _0x4ef308) => {
          const _0x174af2 = _0x3f47d6,
            _0x1440de = setTimeout(
              () => _0x4ef308(new Error("Form\x20filling\x20timed\x20out")),
              0x1388
            );
          chrome["tabs"][_0x174af2(0x158)](
            _0x5aeefd["id"],
            { action: _0x174af2(0x151), data: _0x2a4a6c },
            (_0x3ca61c) => {
              const _0x2bcc1b = _0x174af2;
              clearTimeout(_0x1440de),
                chrome[_0x2bcc1b(0x14d)][_0x2bcc1b(0x119)]
                  ? _0x4ef308(
                      new Error(
                        chrome["runtime"][_0x2bcc1b(0x119)][_0x2bcc1b(0x156)]
                      )
                    )
                  : _0x345d0d(_0x3ca61c);
            }
          );
        });
      if (_0x2d766c && _0x2d766c[_0x3f47d6(0x15e)])
        this[_0x3f47d6(0x127)](
          _0x3f47d6(0x131) + (this[_0x3f47d6(0x10f)] + 0x1)
        ),
          this[_0x3f47d6(0x10f)] < this[_0x3f47d6(0x13c)]["length"] - 0x1
            ? (this[_0x3f47d6(0x10f)]++,
              await chrome[_0x3f47d6(0x116)]["local"][_0x3f47d6(0x139)]({
                currentIndex: this["currentIndex"],
              }),
              this[_0x3f47d6(0x140)]())
            : this[_0x3f47d6(0x127)](_0x3f47d6(0x12a));
      else throw new Error(_0x2d766c?.[_0x3f47d6(0x11a)] || _0x3f47d6(0x125));
    } catch (_0x1da281) {
      console["error"](_0x3f47d6(0x157), _0x1da281),
        this[_0x3f47d6(0x127)]("Error:\x20" + _0x1da281[_0x3f47d6(0x156)]);
    }
  }
  [_0x32f918(0x127)](_0x4c1f87) {
    const _0x2f06dc = _0x32f918;
    this[_0x2f06dc(0x10d)] &&
      (this["statusElement"][_0x2f06dc(0x122)] = _0x4c1f87);
  }
}
function _0x29e8() {
  const _0x3e7631 = [
    "fileInput",
    "read",
    "</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td><strong>Mobile:</strong></td><td>",
    "get",
    "Form\x20filled\x20for\x20record\x20",
    "length",
    "Full\x20Name",
    "files",
    "tabs",
    "currentUser",
    "10398208ZLWHip",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22user-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3>Current\x20Record\x20(",
    "set",
    "query",
    "Successfully\x20loaded\x20",
    "jsonData",
    "N/A",
    "2IsiyfF",
    "343038czpxBX",
    "displayCurrentUser",
    "local",
    "Sheets",
    "8307OokdAx",
    "</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td><strong>Select\x20Identity\x20Proof:</strong></td><td>",
    "result",
    "onload",
    "status",
    "No\x20data\x20found\x20in\x20Excel\x20file",
    "\x20records",
    "utils",
    "Content\x20script\x20injection\x20verification\x20failed",
    "No\x20active\x20tab\x20found",
    "runtime",
    "readAsArrayBuffer",
    "sheet_to_json",
    "Message\x20timeout",
    "fillForm",
    "Select\x20Identity\x20Proof",
    "initializeEventListeners",
    "1240DpohSu",
    "<p>No\x20user\x20data\x20available</p>",
    "message",
    "Error\x20in\x20handleFormFill:",
    "sendMessage",
    "disabled",
    "array",
    "Tourist\x20Type",
    "SheetNames",
    "No\x20data\x20available\x20to\x20fill",
    "success",
    "ensureContentScriptInjected",
    "click",
    "40190909nfsIju",
    "change",
    "handleFileUpload",
    "handleFormFill",
    "addEventListener",
    "Loaded\x20",
    "5930RkxHDM",
    "File\x20reading\x20failed",
    "1591338knelHD",
    "statusElement",
    "Error\x20loading\x20stored\x20data",
    "currentIndex",
    "ping",
    "scripting",
    "excelData",
    "</td></tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "Error:\x20",
    "Identity\x20No",
    "storage",
    "19384RicSfN",
    "7dCJYJY",
    "lastError",
    "error",
    "innerHTML",
    "Select\x20Gender",
    "fillFormButton",
    "sendMessageWithTimeout",
    "Reading\x20file...",
    "getElementById",
    "12gIOecJ",
    "textContent",
    ")</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr><td><strong>Name:</strong></td><td>",
    "Error\x20loading\x20stored\x20data:",
    "Failed\x20to\x20fill\x20form",
    "target",
    "updateStatus",
    "onerror",
    "readFileAsArrayBuffer",
    "All\x20records\x20processed!",
    "currentUserDisplay",
    "1200286ptVODj",
  ];
  _0x29e8 = function () {
    return _0x3e7631;
  };
  return _0x29e8();
}
document[_0x32f918(0x108)]("DOMContentLoaded", () => {
  new ExcelFormFiller();
});
