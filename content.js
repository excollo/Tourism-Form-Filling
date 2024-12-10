const _0x200388 = _0x2792;
(function (_0x42ae82, _0x3cdf06) {
  const _0x463fec = _0x2792,
    _0x933011 = _0x42ae82();
  while (!![]) {
    try {
      const _0x31fd31 =
        parseInt(_0x463fec(0x15c)) / 0x1 +
        (-parseInt(_0x463fec(0x136)) / 0x2) *
          (parseInt(_0x463fec(0x15f)) / 0x3) +
        (-parseInt(_0x463fec(0x126)) / 0x4) *
          (parseInt(_0x463fec(0x14d)) / 0x5) +
        (parseInt(_0x463fec(0x173)) / 0x6) *
          (-parseInt(_0x463fec(0x12d)) / 0x7) +
        parseInt(_0x463fec(0x166)) / 0x8 +
        (-parseInt(_0x463fec(0x12a)) / 0x9) *
          (parseInt(_0x463fec(0x143)) / 0xa) +
        (parseInt(_0x463fec(0x16f)) / 0xb) * (parseInt(_0x463fec(0x135)) / 0xc);
      if (_0x31fd31 === _0x3cdf06) break;
      else _0x933011["push"](_0x933011["shift"]());
    } catch (_0xb6096d) {
      _0x933011["push"](_0x933011["shift"]());
    }
  }
})(_0xa448, 0x2bf0f),
  chrome[_0x200388(0x117)][_0x200388(0x11b)]["addListener"](
    (_0x41ea15, _0x5e9e4b, _0x1e6233) => {
      const _0x45fa1a = _0x200388;
      console[_0x45fa1a(0x130)](_0x45fa1a(0x134), _0x41ea15[_0x45fa1a(0x162)]);
      if (_0x41ea15[_0x45fa1a(0x162)] === _0x45fa1a(0x145))
        return _0x1e6233({ status: "ok" }), !![];
      if (_0x41ea15[_0x45fa1a(0x162)] === _0x45fa1a(0x140))
        try {
          const _0xe4e650 = _0x41ea15["data"];
          console["log"](_0x45fa1a(0x139), _0xe4e650), clearForm();
          const _0x137ca4 = new Map(),
            _0x4791b9 = {
              "Full\x20Name":
                "input[placeholder=\x22Enter\x20Full\x20name\x22]",
              "Mobile\x20No": _0x45fa1a(0x16e),
              "Identity\x20No":
                "input[placeholder=\x22Enter\x20Identity\x20No.\x22]",
            };
          Object[_0x45fa1a(0x159)](_0x4791b9)[_0x45fa1a(0x11d)](
            ([_0x3b6281, _0x172244]) => {
              const _0xc3785c = _0x45fa1a,
                _0x3127b8 = document[_0xc3785c(0x178)](_0x172244);
              _0x3127b8 && _0xe4e650[_0x3b6281]
                ? ((_0x3127b8[_0xc3785c(0x13f)] = _0xe4e650[_0x3b6281]),
                  triggerEvents(_0x3127b8),
                  _0x137ca4[_0xc3785c(0x148)](_0x3b6281, !![]),
                  console[_0xc3785c(0x130)](_0xc3785c(0x163) + _0x3b6281))
                : console[_0xc3785c(0x127)](
                    "Field\x20\x22" + _0x3b6281 + _0xc3785c(0x172)
                  );
            }
          );
          const _0x6d3b34 = () => {
            const _0xb042bb = _0x45fa1a;
            console["log"](_0xb042bb(0x149));
            const _0x3dbc13 = document[_0xb042bb(0x154)](
              "[role=\x22combobox\x22]"
            );
            console[_0xb042bb(0x130)](
              "Total\x20dropdowns\x20found:\x20" + _0x3dbc13["length"]
            ),
              _0x3dbc13["forEach"]((_0x1a6bd7, _0x1a7471) => {
                const _0x46a02e = _0xb042bb;
                console[_0x46a02e(0x130)](_0x46a02e(0x13b) + _0x1a7471 + ":", {
                  textContent: _0x1a6bd7["textContent"],
                  innerHTML: _0x1a6bd7[_0x46a02e(0x156)],
                  outerHTML: _0x1a6bd7["outerHTML"],
                  attributes: Array[_0x46a02e(0x124)](
                    _0x1a6bd7[_0x46a02e(0x17a)]
                  )[_0x46a02e(0x138)](
                    (_0x43447f) =>
                      _0x43447f[_0x46a02e(0x142)] +
                      "=\x22" +
                      _0x43447f[_0x46a02e(0x13f)]
                  ),
                });
              });
          };
          return (
            _0xe4e650[_0x45fa1a(0x14e)]
              ? fillTouristTypeDropdown(_0xe4e650["Tourist\x20Type"])
                  [_0x45fa1a(0x120)]((_0xe8a65) => {
                    const _0x2e6773 = _0x45fa1a;
                    return (
                      console[_0x2e6773(0x130)](_0xe8a65),
                      _0x137ca4[_0x2e6773(0x148)](_0x2e6773(0x14e), !![]),
                      _0x6d3b34(),
                      new Promise((_0x4e050e) => {
                        setTimeout(() => {
                          const _0x1add76 = _0x2792;
                          console[_0x1add76(0x130)](
                            "Attempting\x20to\x20fill\x20Identity\x20Proof\x20dropdown"
                          ),
                            _0x4e050e();
                        }, 0x0);
                      })
                    );
                  })
                  [_0x45fa1a(0x120)](() => {
                    const _0x26ae69 = _0x45fa1a;
                    if (_0xe4e650["Select\x20Identity\x20Proof"])
                      return fillIdentityProofDropdown(
                        _0xe4e650[_0x26ae69(0x15e)]
                      );
                  })
                  ["then"]((_0x60838b) => {
                    const _0x5314ae = _0x45fa1a;
                    if (_0x60838b)
                      return (
                        console[_0x5314ae(0x130)](_0x60838b),
                        _0x137ca4[_0x5314ae(0x148)](_0x5314ae(0x15e), !![]),
                        _0x6d3b34(),
                        new Promise((_0x19bfaf) => {
                          setTimeout(() => {
                            const _0x44351d = _0x2792;
                            console[_0x44351d(0x130)](_0x44351d(0x128)),
                              _0x19bfaf();
                          }, 0x0);
                        })
                      );
                  })
                  ["then"](() => {
                    const _0x3ff331 = _0x45fa1a;
                    if (_0xe4e650[_0x3ff331(0x150)])
                      return fillGenderDropdown(_0xe4e650["Select\x20Gender"]);
                  })
                  [_0x45fa1a(0x120)]((_0x96a1f5) => {
                    const _0x404044 = _0x45fa1a;
                    _0x96a1f5 &&
                      (console[_0x404044(0x130)](_0x96a1f5),
                      _0x137ca4[_0x404044(0x148)](_0x404044(0x150), !![]),
                      _0x1e6233({
                        success: !![],
                        message:
                          "Fields\x20filled:\x20" + _0x137ca4[_0x404044(0x11c)],
                        filledFields: Array[_0x404044(0x124)](
                          _0x137ca4[_0x404044(0x152)]()
                        ),
                      }));
                  })
                  [_0x45fa1a(0x15d)]((_0x14b113) => {
                    const _0x4a7ce5 = _0x45fa1a;
                    console[_0x4a7ce5(0x122)](_0x4a7ce5(0x164), _0x14b113),
                      _0x1e6233({
                        success: ![],
                        error: _0x14b113[_0x4a7ce5(0x16b)],
                      });
                  })
              : console[_0x45fa1a(0x127)](
                  "Tourist\x20Type\x20data\x20not\x20provided."
                ),
            !![]
          );
        } catch (_0x59ec9d) {
          return (
            console["error"](_0x45fa1a(0x167), _0x59ec9d),
            _0x1e6233({ success: ![], error: _0x59ec9d["message"] }),
            !![]
          );
        }
    }
  );
async function fillTouristTypeDropdown(_0x2fd6b3) {
  return new Promise((_0x5c1577, _0x3877f0) => {
    const _0xc62864 = _0x2792;
    try {
      const _0x2f1733 = [
        () =>
          document["querySelector"](
            "div[role=\x22combobox\x22][tabindex=\x220\x22]"
          ),
        () => document[_0xc62864(0x178)](_0xc62864(0x144)),
        () => document[_0xc62864(0x178)](_0xc62864(0x13a)),
      ];
      let _0x16eefb;
      for (let _0x4444a9 of _0x2f1733) {
        _0x16eefb = _0x4444a9();
        if (_0x16eefb) break;
      }
      if (!_0x16eefb)
        return (
          console[_0xc62864(0x122)](_0xc62864(0x119)),
          console[_0xc62864(0x130)](
            _0xc62864(0x116),
            Array[_0xc62864(0x124)](
              document[_0xc62864(0x154)]("[role=\x22combobox\x22]")
            )[_0xc62864(0x138)]((_0x2ea5bf) => ({
              textContent: _0x2ea5bf[_0xc62864(0x12c)],
              classes: _0x2ea5bf[_0xc62864(0x165)],
              attributes: Array[_0xc62864(0x124)](_0x2ea5bf["attributes"])[
                _0xc62864(0x138)
              ](
                (_0x29a946) =>
                  _0x29a946["name"] + "=\x22" + _0x29a946[_0xc62864(0x13f)]
              ),
            }))
          ),
          _0x3877f0(_0xc62864(0x141))
        );
      _0x16eefb["click"](),
        _0x16eefb[_0xc62864(0x151)](
          new MouseEvent(_0xc62864(0x14c), {
            view: window,
            bubbles: !![],
            cancelable: !![],
          })
        );
      const _0x11a050 = [
          _0xc62864(0x158),
          _0xc62864(0x133),
          _0xc62864(0x12f),
          _0xc62864(0x157),
          _0xc62864(0x13c),
        ],
        _0x4060c5 = () => {
          const _0x2a61ea = _0xc62864;
          let _0x3635af = [];
          for (let _0x43f528 of _0x11a050) {
            _0x3635af = Array[_0x2a61ea(0x124)](
              document[_0x2a61ea(0x154)](_0x43f528)
            );
            if (_0x3635af[_0x2a61ea(0x155)] > 0x0) break;
          }
          return _0x3635af;
        },
        _0x5ee533 = (_0x3df7be = 0x0) => {
          const _0x864e7c = _0xc62864,
            _0x218ad2 = _0x4060c5();
          console["log"](
            _0x864e7c(0x125) +
              (_0x3df7be + 0x1) +
              _0x864e7c(0x123) +
              _0x218ad2["length"] +
              _0x864e7c(0x118)
          );
          if (_0x218ad2[_0x864e7c(0x155)] > 0x0) {
            console["log"](
              _0x864e7c(0x11e),
              _0x218ad2[_0x864e7c(0x138)]((_0x8c7135) => ({
                text: _0x8c7135["textContent"][_0x864e7c(0x13d)](),
                classes: _0x8c7135[_0x864e7c(0x165)],
              }))
            );
            const _0x4f2b27 = _0x218ad2["find"](
              (_0x44858a) => _0x44858a[_0x864e7c(0x12c)]["trim"]() === _0x2fd6b3
            );
            if (_0x4f2b27) {
              _0x4f2b27[_0x864e7c(0x175)](),
                setTimeout(() => {
                  const _0x10b6d6 = _0x864e7c,
                    _0x1b364a = document[_0x10b6d6(0x178)](_0x10b6d6(0x16a));
                  console[_0x10b6d6(0x130)](
                    _0x10b6d6(0x176),
                    _0x1b364a["textContent"]
                  ),
                    _0x5c1577("Tourist\x20Type\x20selected\x20successfully");
                }, 0x12c);
              return;
            } else
              console[_0x864e7c(0x127)](_0x864e7c(0x171) + _0x2fd6b3 + "\x22"),
                console[_0x864e7c(0x127)](
                  _0x864e7c(0x131),
                  _0x218ad2[_0x864e7c(0x138)]((_0x42021c) =>
                    _0x42021c[_0x864e7c(0x12c)]["trim"]()
                  )
                );
          }
          _0x3df7be < 0x3
            ? setTimeout(() => _0x5ee533(_0x3df7be + 0x1), 0x1f4)
            : _0x3877f0(_0x864e7c(0x132) + _0x2fd6b3);
        };
      _0x5ee533();
    } catch (_0x5b6ede) {
      console[_0xc62864(0x122)](_0xc62864(0x161), _0x5b6ede),
        _0x3877f0(_0x5b6ede[_0xc62864(0x16b)]);
    }
  });
}
function _0x2792(_0x511051, _0x2d27f0) {
  const _0xa4483e = _0xa448();
  return (
    (_0x2792 = function (_0x279201, _0xf2fa95) {
      _0x279201 = _0x279201 - 0x116;
      let _0x22011d = _0xa4483e[_0x279201];
      return _0x22011d;
    }),
    _0x2792(_0x511051, _0x2d27f0)
  );
}
async function fillIdentityProofDropdown(_0xacb49d) {
  return new Promise((_0x3d0074, _0x223926) => {
    const _0x399ae1 = _0x2792;
    try {
      console[_0x399ae1(0x130)](_0x399ae1(0x129) + _0xacb49d);
      const _0x3da89a = [
        () => {
          const _0x427698 = _0x399ae1,
            _0x4d87cf = document["querySelectorAll"](_0x427698(0x137));
          return _0x4d87cf["length"] > 0x1 ? _0x4d87cf[0x1] : null;
        },
        () =>
          document[_0x399ae1(0x178)]("div[role=\x22combobox\x22]:nth-child(2)"),
        () => document[_0x399ae1(0x154)](_0x399ae1(0x144))[0x1],
      ];
      let _0x19eb2e;
      for (let _0x208f95 of _0x3da89a) {
        _0x19eb2e = _0x208f95();
        if (_0x19eb2e) break;
      }
      if (!_0x19eb2e) {
        console[_0x399ae1(0x122)](
          "NO\x20DROPDOWN\x20TRIGGER\x20FOUND\x20FOR\x20IDENTITY\x20PROOF.\x20Detailed\x20Analysis:"
        );
        const _0x52d606 = document[_0x399ae1(0x154)](_0x399ae1(0x137));
        return (
          console[_0x399ae1(0x130)](
            "Total\x20dropdowns:\x20" + _0x52d606[_0x399ae1(0x155)]
          ),
          _0x52d606["forEach"]((_0x2aad6e, _0x933a35) => {
            const _0x16ed8b = _0x399ae1;
            console[_0x16ed8b(0x130)](
              _0x16ed8b(0x13b) + _0x933a35 + ":",
              _0x2aad6e[_0x16ed8b(0x11f)]
            );
          }),
          _0x223926(_0x399ae1(0x14a))
        );
      }
      console[_0x399ae1(0x130)](_0x399ae1(0x16d), {
        textContent: _0x19eb2e[_0x399ae1(0x12c)],
        outerHTML: _0x19eb2e[_0x399ae1(0x11f)],
      }),
        _0x19eb2e[_0x399ae1(0x175)](),
        _0x19eb2e[_0x399ae1(0x151)](
          new MouseEvent("mousedown", {
            view: window,
            bubbles: !![],
            cancelable: !![],
          })
        ),
        setTimeout(() => {
          const _0x4bff04 = _0x399ae1,
            _0x23aafa = [
              _0x4bff04(0x158),
              _0x4bff04(0x133),
              "li[role=\x22option\x22]",
            ];
          let _0x357c33 = [];
          _0x23aafa[_0x4bff04(0x11d)]((_0x1f379f) => {
            const _0x5ef372 = _0x4bff04,
              _0x534c24 = Array["from"](document[_0x5ef372(0x154)](_0x1f379f));
            _0x357c33 = _0x357c33[_0x5ef372(0x12b)](_0x534c24);
          }),
            console[_0x4bff04(0x130)](
              _0x4bff04(0x169),
              _0x357c33["map"]((_0x129d2e) =>
                _0x129d2e[_0x4bff04(0x12c)][_0x4bff04(0x13d)]()
              )
            );
          let _0x5c8dbf;
          for (let _0x1324d5 of _0x23aafa) {
            const _0x5afebc = Array[_0x4bff04(0x124)](
              document[_0x4bff04(0x154)](_0x1324d5)
            );
            _0x5c8dbf = _0x5afebc[_0x4bff04(0x147)](
              (_0x364f4a) =>
                _0x364f4a[_0x4bff04(0x12c)]
                  [_0x4bff04(0x13d)]()
                  [_0x4bff04(0x160)]() === _0xacb49d["toLowerCase"]()
            );
            if (_0x5c8dbf) break;
          }
          _0x5c8dbf
            ? (_0x5c8dbf[_0x4bff04(0x175)](), _0x3d0074(_0x4bff04(0x153)))
            : (console[_0x4bff04(0x127)](_0x4bff04(0x15b) + _0xacb49d + "\x22"),
              console["warn"](
                "Available\x20options:",
                _0x357c33["map"]((_0xa77dc) =>
                  _0xa77dc[_0x4bff04(0x12c)][_0x4bff04(0x13d)]()
                )
              ),
              _0x223926(
                "Option\x20for\x20\x22" + _0xacb49d + "\x22\x20not\x20found"
              ));
        }, 0x3e8);
    } catch (_0x2d9f67) {
      console[_0x399ae1(0x122)](_0x399ae1(0x168), _0x2d9f67),
        _0x223926(_0x2d9f67[_0x399ae1(0x16b)]);
    }
  });
}
async function fillGenderDropdown(_0x595c6f) {
  return new Promise((_0x26bebc, _0x5a20c3) => {
    const _0x23573a = _0x2792;
    try {
      console[_0x23573a(0x130)](_0x23573a(0x179) + _0x595c6f);
      const _0xabae7b = [
        () => {
          const _0xc5739e = _0x23573a,
            _0x2f8475 = document["querySelectorAll"]("[role=\x22combobox\x22]");
          return _0x2f8475[_0xc5739e(0x155)] > 0x2 ? _0x2f8475[0x2] : null;
        },
        () => document[_0x23573a(0x178)](_0x23573a(0x14b)),
        () => document[_0x23573a(0x154)](_0x23573a(0x144))[0x2],
      ];
      let _0x54197f;
      for (let _0x326e11 of _0xabae7b) {
        _0x54197f = _0x326e11();
        if (_0x54197f) break;
      }
      if (!_0x54197f) {
        console["error"](
          "NO\x20DROPDOWN\x20TRIGGER\x20FOUND\x20FOR\x20GENDER.\x20Detailed\x20Analysis:"
        );
        const _0x1f3071 = document[_0x23573a(0x154)](_0x23573a(0x137));
        return (
          console[_0x23573a(0x130)](
            _0x23573a(0x177) + _0x1f3071[_0x23573a(0x155)]
          ),
          _0x1f3071[_0x23573a(0x11d)]((_0x188543, _0x42733f) => {
            const _0x59c247 = _0x23573a;
            console[_0x59c247(0x130)](
              _0x59c247(0x13b) + _0x42733f + ":",
              _0x188543["outerHTML"]
            );
          }),
          _0x5a20c3(_0x23573a(0x170))
        );
      }
      console[_0x23573a(0x130)](_0x23573a(0x11a), {
        textContent: _0x54197f[_0x23573a(0x12c)],
        outerHTML: _0x54197f["outerHTML"],
      }),
        _0x54197f[_0x23573a(0x175)](),
        _0x54197f[_0x23573a(0x151)](
          new MouseEvent(_0x23573a(0x14c), {
            view: window,
            bubbles: !![],
            cancelable: !![],
          })
        ),
        setTimeout(() => {
          const _0x1d4f19 = _0x23573a,
            _0x46e81d = [_0x1d4f19(0x158), _0x1d4f19(0x133), _0x1d4f19(0x12f)];
          let _0x1b3063 = [];
          _0x46e81d[_0x1d4f19(0x11d)]((_0x10578d) => {
            const _0x3dc2cc = _0x1d4f19,
              _0x11d225 = Array[_0x3dc2cc(0x124)](
                document[_0x3dc2cc(0x154)](_0x10578d)
              );
            _0x1b3063 = _0x1b3063["concat"](_0x11d225);
          }),
            console[_0x1d4f19(0x130)](
              _0x1d4f19(0x16c),
              _0x1b3063[_0x1d4f19(0x138)]((_0x278c83) =>
                _0x278c83[_0x1d4f19(0x12c)][_0x1d4f19(0x13d)]()
              )
            );
          let _0x527ff6;
          for (let _0x286103 of _0x46e81d) {
            const _0xfa37f4 = Array["from"](
              document[_0x1d4f19(0x154)](_0x286103)
            );
            _0x527ff6 = _0xfa37f4[_0x1d4f19(0x147)](
              (_0x336410) =>
                _0x336410[_0x1d4f19(0x12c)]["trim"]()[_0x1d4f19(0x160)]() ===
                _0x595c6f[_0x1d4f19(0x160)]()
            );
            if (_0x527ff6) break;
          }
          _0x527ff6
            ? (_0x527ff6[_0x1d4f19(0x175)](), _0x26bebc(_0x1d4f19(0x13e)))
            : (console[_0x1d4f19(0x127)](_0x1d4f19(0x15b) + _0x595c6f + "\x22"),
              console[_0x1d4f19(0x127)](
                _0x1d4f19(0x15a),
                _0x1b3063[_0x1d4f19(0x138)]((_0x3f537a) =>
                  _0x3f537a[_0x1d4f19(0x12c)][_0x1d4f19(0x13d)]()
                )
              ),
              _0x5a20c3(
                "Option\x20for\x20\x22" + _0x595c6f + "\x22\x20not\x20found"
              ));
        }, 0x3e8);
    } catch (_0x47570a) {
      console[_0x23573a(0x122)](_0x23573a(0x12e), _0x47570a),
        _0x5a20c3(_0x47570a[_0x23573a(0x16b)]);
    }
  });
}
function _0xa448() {
  const _0x88f8dc = [
    "input",
    "find",
    "set",
    "DEBUG:\x20Dropdown\x20Elements",
    "No\x20dropdown\x20trigger\x20found\x20for\x20Identity\x20Proof",
    "div[role=\x22combobox\x22]:nth-child(3)",
    "mousedown",
    "624210BxwBUC",
    "Tourist\x20Type",
    "input,\x20textarea,\x20select",
    "Select\x20Gender",
    "dispatchEvent",
    "keys",
    "Identity\x20Proof\x20selected\x20successfully",
    "querySelectorAll",
    "length",
    "innerHTML",
    "ul[role=\x22listbox\x22]\x20>\x20li",
    "[role=\x22option\x22]",
    "entries",
    "Available\x20Gender\x20options:",
    "No\x20matching\x20option\x20for\x20\x22",
    "327018bZICPT",
    "catch",
    "Select\x20Identity\x20Proof",
    "864531MjEjMs",
    "toLowerCase",
    "Dropdown\x20Error:",
    "action",
    "Filled\x20field:\x20",
    "Dropdown\x20filling\x20error:",
    "className",
    "121568EAhFSu",
    "Error\x20filling\x20form:",
    "Identity\x20Proof\x20Dropdown\x20Error:",
    "All\x20Available\x20Options:",
    "div[role=\x22combobox\x22]",
    "message",
    "All\x20Available\x20Gender\x20Options:",
    "Identity\x20Proof\x20Dropdown\x20Trigger:",
    "input[placeholder=\x22Enter\x20Mobile\x20No.\x22]",
    "1259071cskxrq",
    "No\x20dropdown\x20trigger\x20found\x20for\x20Gender",
    "No\x20exact\x20match\x20for\x20\x22",
    "\x22\x20not\x20found\x20or\x20no\x20data\x20provided.",
    "470478NtyQER",
    "submit",
    "click",
    "Current\x20Selection:",
    "Total\x20dropdowns:\x20",
    "querySelector",
    "Attempting\x20to\x20select\x20Gender:\x20",
    "attributes",
    "All\x20combobox\x20elements:",
    "runtime",
    "\x20options",
    "NO\x20DROPDOWN\x20TRIGGER\x20FOUND.\x20Detailed\x20DOM\x20Analysis:",
    "Gender\x20Dropdown\x20Trigger:",
    "onMessage",
    "size",
    "forEach",
    "Option\x20Details:",
    "outerHTML",
    "then",
    "type",
    "error",
    ":\x20Found\x20",
    "from",
    "Attempt\x20",
    "8CDDeUz",
    "warn",
    "Attempting\x20to\x20fill\x20Gender\x20dropdown",
    "Attempting\x20to\x20select\x20Identity\x20Proof:\x20",
    "144DIMgmS",
    "concat",
    "textContent",
    "7wCtEaV",
    "Gender\x20Dropdown\x20Error:",
    "li[role=\x22option\x22]",
    "log",
    "Available\x20options:",
    "Could\x20not\x20find\x20option:\x20",
    ".MuiMenuItem-root",
    "Message\x20received\x20in\x20content\x20script:",
    "84gFgAPc",
    "2NQJDba",
    "[role=\x22combobox\x22]",
    "map",
    "Received\x20form\x20data:",
    "[aria-haspopup=\x22listbox\x22]",
    "Dropdown\x20",
    ".MuiList-root\x20>\x20li",
    "trim",
    "Gender\x20selected\x20successfully",
    "value",
    "fillForm",
    "No\x20dropdown\x20trigger\x20found",
    "name",
    "216990yVieko",
    ".MuiSelect-select",
    "ping",
  ];
  _0xa448 = function () {
    return _0x88f8dc;
  };
  return _0xa448();
}
function triggerEvents(_0x855789) {
  const _0x595822 = _0x200388,
    _0x2bea5f = new Event(_0x595822(0x146), { bubbles: !![] });
  _0x855789["dispatchEvent"](_0x2bea5f);
}
function clearForm() {
  const _0x141500 = _0x200388,
    _0x326587 = document["querySelectorAll"](_0x141500(0x14f));
  _0x326587["forEach"]((_0x207435) => {
    const _0x4bc2be = _0x141500;
    _0x207435[_0x4bc2be(0x121)] !== _0x4bc2be(0x174) &&
      _0x207435[_0x4bc2be(0x121)] !== "button" &&
      ((_0x207435[_0x4bc2be(0x13f)] = ""), triggerEvents(_0x207435));
  });
}
