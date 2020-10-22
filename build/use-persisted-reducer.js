function e(e) {
  return e && "object" == typeof e && "default" in e ? e.default : e;
}
var t = require("react"),
  n = (e(t), e(require("universal-cookie"))),
  o = "@USE_PERSISTED_REDUCER_SET_FULL_STATE",
  r = function (e, t, o) {
    console.log("init", t);
    var r = o instanceof n;
    try {
      var a = r ? o.get(e, !0) : o.getItem(e);
      return (
        console.log("storageData", a),
        void 0 !== a && a
          ? r
            ? a
            : JSON.parse(a)
          : "function" == typeof t
          ? t()
          : void 0 !== t
          ? t
          : {}
      );
    } catch (e) {
      return console.log("Error --\x3e Getting storage data : ", e), t;
    }
  };
module.exports = function (e, a, c, i, s) {
  void 0 === i && (i = "local");
  var u = s || {},
    l = u.step,
    f = void 0 === l ? 1e3 : l,
    d = (function (e, t) {
      if (null == e) return {};
      var n,
        o,
        r = {},
        a = Object.keys(e);
      for (o = 0; o < a.length; o++) t.indexOf((n = a[o])) >= 0 || (r[n] = e[n]);
      return r;
    })(u, ["step"]);
  console.log("usePersistedReducer -> cookieOption", d);
  var g,
    v = t.useRef();
  try {
    switch (i) {
      case "local":
        (g = localStorage), beark;
      case "session":
        g = sessionStorage;
        break;
      case "cookie":
        g = new n();
    }
  } catch (e) {}
  var y = t.useReducer(
      (function (e) {
        return function (t, n) {
          var r = n.type,
            a = n.payload;
          return r === o ? a : e(t, { type: r, payload: a });
        };
      })(a),
      null,
      function () {
        var t = r(e, c, g);
        return console.log("usePersistedReducer -> d", t), t;
      }
    ),
    p = y[0],
    S = y[1],
    E = t.useRef(p);
  return (
    t.useEffect(function () {
      "cookie" === i
        ? (v.current = setInterval(function () {
            JSON.stringify(g.get(e)) !== JSON.stringify(E.current) &&
              S({ type: o, payload: r(e, c, g) });
          }, f))
        : window.addEventListener("storage", function (t) {
            t.key === e && S({ type: o, payload: JSON.parse(t.newValue) });
          });
    }, []),
    t.useEffect(
      function () {
        (E.current = p),
          (function (e, t, o, r) {
            console.log("value", t),
              o instanceof n ? o.set(e, t, r || null) : o.setItem(e, JSON.stringify(t));
          })(e, p, g, d);
      },
      [p]
    ),
    [p, S]
  );
};
