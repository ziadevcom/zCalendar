/*!
 * Intro.js v3.2.1
 * https://github.com/usablica/intro.js
 *
 * Copyright (C) 2017-2020 Afshin Mehrabani (@afshinmeh).
 * https://raw.githubusercontent.com/usablica/intro.js/master/license.md
 *
 * Date: Sun, 20 Dec 2020 11:16:47 GMT
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = t || self).introJs = e());
})(this, function () {
  "use strict";
  function t(e) {
    return (t =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          })(e);
  }
  var e = (function () {
    var t = {};
    return function (e) {
      var n =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "introjs-stamp";
      return (t[n] = t[n] || 0), void 0 === e[n] && (e[n] = t[n]++), e[n];
    };
  })();
  function n(t, e, n) {
    if (t) for (var i = 0, o = t.length; i < o; i++) e(t[i], i);
    "function" == typeof n && n();
  }
  var i = new (function () {
      var t = "introjs_event";
      (this._id = function (t, n, i, o) {
        return n + e(i) + (o ? "_".concat(e(o)) : "");
      }),
        (this.on = function (e, n, i, o, r) {
          var l = this._id.apply(this, arguments),
            a = function (t) {
              return i.call(o || e, t || window.event);
            };
          "addEventListener" in e
            ? e.addEventListener(n, a, r)
            : "attachEvent" in e && e.attachEvent("on".concat(n), a),
            (e[t] = e[t] || {}),
            (e[t][l] = a);
        }),
        (this.off = function (e, n, i, o, r) {
          var l = this._id.apply(this, arguments),
            a = e[t] && e[t][l];
          a &&
            ("removeEventListener" in e
              ? e.removeEventListener(n, a, r)
              : "detachEvent" in e && e.detachEvent("on".concat(n), a),
            (e[t][l] = null));
        });
    })(),
    o =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  function r(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var l = function (t) {
      return t && t.Math == Math && t;
    },
    a =
      l("object" == typeof globalThis && globalThis) ||
      l("object" == typeof window && window) ||
      l("object" == typeof self && self) ||
      l("object" == typeof o && o) ||
      (function () {
        return this;
      })() ||
      Function("return this")(),
    s = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    c = !s(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    }),
    u = {}.propertyIsEnumerable,
    h = Object.getOwnPropertyDescriptor,
    p = {
      f:
        h && !u.call({ 1: 2 }, 1)
          ? function (t) {
              var e = h(this, t);
              return !!e && e.enumerable;
            }
          : u,
    },
    f = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    },
    d = {}.toString,
    g = function (t) {
      return d.call(t).slice(8, -1);
    },
    m = "".split,
    v = s(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == g(t) ? m.call(t, "") : Object(t);
        }
      : Object,
    b = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
    y = function (t) {
      return v(b(t));
    },
    w = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    },
    _ = function (t, e) {
      if (!w(t)) return t;
      var n, i;
      if (e && "function" == typeof (n = t.toString) && !w((i = n.call(t))))
        return i;
      if ("function" == typeof (n = t.valueOf) && !w((i = n.call(t)))) return i;
      if (!e && "function" == typeof (n = t.toString) && !w((i = n.call(t))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    },
    S = {}.hasOwnProperty,
    x = function (t, e) {
      return S.call(t, e);
    },
    C = a.document,
    j = w(C) && w(C.createElement),
    E = function (t) {
      return j ? C.createElement(t) : {};
    },
    A =
      !c &&
      !s(function () {
        return (
          7 !=
          Object.defineProperty(E("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    k = Object.getOwnPropertyDescriptor,
    N = {
      f: c
        ? k
        : function (t, e) {
            if (((t = y(t)), (e = _(e, !0)), A))
              try {
                return k(t, e);
              } catch (t) {}
            if (x(t, e)) return f(!p.f.call(t, e), t[e]);
          },
    },
    T = function (t) {
      if (!w(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
    I = Object.defineProperty,
    O = {
      f: c
        ? I
        : function (t, e, n) {
            if ((T(t), (e = _(e, !0)), T(n), A))
              try {
                return I(t, e, n);
              } catch (t) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported");
            return "value" in n && (t[e] = n.value), t;
          },
    },
    P = c
      ? function (t, e, n) {
          return O.f(t, e, f(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        },
    L = function (t, e) {
      try {
        P(a, t, e);
      } catch (n) {
        a[t] = e;
      }
      return e;
    },
    R = a["__core-js_shared__"] || L("__core-js_shared__", {}),
    q = Function.toString;
  "function" != typeof R.inspectSource &&
    (R.inspectSource = function (t) {
      return q.call(t);
    });
  var M,
    B,
    H,
    $ = R.inspectSource,
    D = a.WeakMap,
    U = "function" == typeof D && /native code/.test($(D)),
    F = r(function (t) {
      (t.exports = function (t, e) {
        return R[t] || (R[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.8.1",
        mode: "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
      });
    }),
    z = 0,
    V = Math.random(),
    W = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++z + V).toString(36)
      );
    },
    G = F("keys"),
    K = function (t) {
      return G[t] || (G[t] = W(t));
    },
    X = {},
    Y = a.WeakMap;
  if (U) {
    var Q = R.state || (R.state = new Y()),
      J = Q.get,
      Z = Q.has,
      tt = Q.set;
    (M = function (t, e) {
      return (e.facade = t), tt.call(Q, t, e), e;
    }),
      (B = function (t) {
        return J.call(Q, t) || {};
      }),
      (H = function (t) {
        return Z.call(Q, t);
      });
  } else {
    var et = K("state");
    (X[et] = !0),
      (M = function (t, e) {
        return (e.facade = t), P(t, et, e), e;
      }),
      (B = function (t) {
        return x(t, et) ? t[et] : {};
      }),
      (H = function (t) {
        return x(t, et);
      });
  }
  var nt = {
      set: M,
      get: B,
      has: H,
      enforce: function (t) {
        return H(t) ? B(t) : M(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!w(e) || (n = B(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return n;
        };
      },
    },
    it = r(function (t) {
      var e = nt.get,
        n = nt.enforce,
        i = String(String).split("String");
      (t.exports = function (t, e, o, r) {
        var l,
          s = !!r && !!r.unsafe,
          c = !!r && !!r.enumerable,
          u = !!r && !!r.noTargetGet;
        "function" == typeof o &&
          ("string" != typeof e || x(o, "name") || P(o, "name", e),
          (l = n(o)).source ||
            (l.source = i.join("string" == typeof e ? e : ""))),
          t !== a
            ? (s ? !u && t[e] && (c = !0) : delete t[e],
              c ? (t[e] = o) : P(t, e, o))
            : c
            ? (t[e] = o)
            : L(e, o);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && e(this).source) || $(this);
      });
    }),
    ot = a,
    rt = function (t) {
      return "function" == typeof t ? t : void 0;
    },
    lt = function (t, e) {
      return arguments.length < 2
        ? rt(ot[t]) || rt(a[t])
        : (ot[t] && ot[t][e]) || (a[t] && a[t][e]);
    },
    at = Math.ceil,
    st = Math.floor,
    ct = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? st : at)(t);
    },
    ut = Math.min,
    ht = function (t) {
      return t > 0 ? ut(ct(t), 9007199254740991) : 0;
    },
    pt = Math.max,
    ft = Math.min,
    dt = function (t, e) {
      var n = ct(t);
      return n < 0 ? pt(n + e, 0) : ft(n, e);
    },
    gt = function (t) {
      return function (e, n, i) {
        var o,
          r = y(e),
          l = ht(r.length),
          a = dt(i, l);
        if (t && n != n) {
          for (; l > a; ) if ((o = r[a++]) != o) return !0;
        } else
          for (; l > a; a++)
            if ((t || a in r) && r[a] === n) return t || a || 0;
        return !t && -1;
      };
    },
    mt = { includes: gt(!0), indexOf: gt(!1) },
    vt = mt.indexOf,
    bt = function (t, e) {
      var n,
        i = y(t),
        o = 0,
        r = [];
      for (n in i) !x(X, n) && x(i, n) && r.push(n);
      for (; e.length > o; ) x(i, (n = e[o++])) && (~vt(r, n) || r.push(n));
      return r;
    },
    yt = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ],
    wt = yt.concat("length", "prototype"),
    _t = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return bt(t, wt);
        },
    },
    St = { f: Object.getOwnPropertySymbols },
    xt =
      lt("Reflect", "ownKeys") ||
      function (t) {
        var e = _t.f(T(t)),
          n = St.f;
        return n ? e.concat(n(t)) : e;
      },
    Ct = function (t, e) {
      for (var n = xt(e), i = O.f, o = N.f, r = 0; r < n.length; r++) {
        var l = n[r];
        x(t, l) || i(t, l, o(e, l));
      }
    },
    jt = /#|\.prototype\./,
    Et = function (t, e) {
      var n = kt[At(t)];
      return n == Tt || (n != Nt && ("function" == typeof e ? s(e) : !!e));
    },
    At = (Et.normalize = function (t) {
      return String(t).replace(jt, ".").toLowerCase();
    }),
    kt = (Et.data = {}),
    Nt = (Et.NATIVE = "N"),
    Tt = (Et.POLYFILL = "P"),
    It = Et,
    Ot = N.f,
    Pt = function (t, e) {
      var n,
        i,
        o,
        r,
        l,
        s = t.target,
        c = t.global,
        u = t.stat;
      if ((n = c ? a : u ? a[s] || L(s, {}) : (a[s] || {}).prototype))
        for (i in e) {
          if (
            ((r = e[i]),
            (o = t.noTargetGet ? (l = Ot(n, i)) && l.value : n[i]),
            !It(c ? i : s + (u ? "." : "#") + i, t.forced) && void 0 !== o)
          ) {
            if (typeof r == typeof o) continue;
            Ct(r, o);
          }
          (t.sham || (o && o.sham)) && P(r, "sham", !0), it(n, i, r, t);
        }
    },
    Lt = function () {
      var t = T(this),
        e = "";
      return (
        t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.dotAll && (e += "s"),
        t.unicode && (e += "u"),
        t.sticky && (e += "y"),
        e
      );
    };
  function Rt(t, e) {
    return RegExp(t, e);
  }
  var qt,
    Mt,
    Bt = {
      UNSUPPORTED_Y: s(function () {
        var t = Rt("a", "y");
        return (t.lastIndex = 2), null != t.exec("abcd");
      }),
      BROKEN_CARET: s(function () {
        var t = Rt("^r", "gy");
        return (t.lastIndex = 2), null != t.exec("str");
      }),
    },
    Ht = RegExp.prototype.exec,
    $t = String.prototype.replace,
    Dt = Ht,
    Ut =
      ((qt = /a/),
      (Mt = /b*/g),
      Ht.call(qt, "a"),
      Ht.call(Mt, "a"),
      0 !== qt.lastIndex || 0 !== Mt.lastIndex),
    Ft = Bt.UNSUPPORTED_Y || Bt.BROKEN_CARET,
    zt = void 0 !== /()??/.exec("")[1];
  (Ut || zt || Ft) &&
    (Dt = function (t) {
      var e,
        n,
        i,
        o,
        r = this,
        l = Ft && r.sticky,
        a = Lt.call(r),
        s = r.source,
        c = 0,
        u = t;
      return (
        l &&
          (-1 === (a = a.replace("y", "")).indexOf("g") && (a += "g"),
          (u = String(t).slice(r.lastIndex)),
          r.lastIndex > 0 &&
            (!r.multiline || (r.multiline && "\n" !== t[r.lastIndex - 1])) &&
            ((s = "(?: " + s + ")"), (u = " " + u), c++),
          (n = new RegExp("^(?:" + s + ")", a))),
        zt && (n = new RegExp("^" + s + "$(?!\\s)", a)),
        Ut && (e = r.lastIndex),
        (i = Ht.call(l ? n : r, u)),
        l
          ? i
            ? ((i.input = i.input.slice(c)),
              (i[0] = i[0].slice(c)),
              (i.index = r.lastIndex),
              (r.lastIndex += i[0].length))
            : (r.lastIndex = 0)
          : Ut && i && (r.lastIndex = r.global ? i.index + i[0].length : e),
        zt &&
          i &&
          i.length > 1 &&
          $t.call(i[0], n, function () {
            for (o = 1; o < arguments.length - 2; o++)
              void 0 === arguments[o] && (i[o] = void 0);
          }),
        i
      );
    });
  var Vt = Dt;
  Pt({ target: "RegExp", proto: !0, forced: /./.exec !== Vt }, { exec: Vt });
  var Wt =
      !!Object.getOwnPropertySymbols &&
      !s(function () {
        return !String(Symbol());
      }),
    Gt = Wt && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    Kt = F("wks"),
    Xt = a.Symbol,
    Yt = Gt ? Xt : (Xt && Xt.withoutSetter) || W,
    Qt = function (t) {
      return (
        x(Kt, t) ||
          (Wt && x(Xt, t) ? (Kt[t] = Xt[t]) : (Kt[t] = Yt("Symbol." + t))),
        Kt[t]
      );
    },
    Jt = Qt("species"),
    Zt = !s(function () {
      var t = /./;
      return (
        (t.exec = function () {
          var t = [];
          return (t.groups = { a: "7" }), t;
        }),
        "7" !== "".replace(t, "$<a>")
      );
    }),
    te = "$0" === "a".replace(/./, "$0"),
    ee = Qt("replace"),
    ne = !!/./[ee] && "" === /./[ee]("a", "$0"),
    ie = !s(function () {
      var t = /(?:)/,
        e = t.exec;
      t.exec = function () {
        return e.apply(this, arguments);
      };
      var n = "ab".split(t);
      return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
    }),
    oe = function (t, e, n, i) {
      var o = Qt(t),
        r = !s(function () {
          var e = {};
          return (
            (e[o] = function () {
              return 7;
            }),
            7 != ""[t](e)
          );
        }),
        l =
          r &&
          !s(function () {
            var e = !1,
              n = /a/;
            return (
              "split" === t &&
                (((n = {}).constructor = {}),
                (n.constructor[Jt] = function () {
                  return n;
                }),
                (n.flags = ""),
                (n[o] = /./[o])),
              (n.exec = function () {
                return (e = !0), null;
              }),
              n[o](""),
              !e
            );
          });
      if (
        !r ||
        !l ||
        ("replace" === t && (!Zt || !te || ne)) ||
        ("split" === t && !ie)
      ) {
        var a = /./[o],
          c = n(
            o,
            ""[t],
            function (t, e, n, i, o) {
              return e.exec === Vt
                ? r && !o
                  ? { done: !0, value: a.call(e, n, i) }
                  : { done: !0, value: t.call(n, e, i) }
                : { done: !1 };
            },
            {
              REPLACE_KEEPS_$0: te,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: ne,
            }
          ),
          u = c[0],
          h = c[1];
        it(String.prototype, t, u),
          it(
            RegExp.prototype,
            o,
            2 == e
              ? function (t, e) {
                  return h.call(t, this, e);
                }
              : function (t) {
                  return h.call(t, this);
                }
          );
      }
      i && P(RegExp.prototype[o], "sham", !0);
    },
    re = function (t) {
      return function (e, n) {
        var i,
          o,
          r = String(b(e)),
          l = ct(n),
          a = r.length;
        return l < 0 || l >= a
          ? t
            ? ""
            : void 0
          : (i = r.charCodeAt(l)) < 55296 ||
            i > 56319 ||
            l + 1 === a ||
            (o = r.charCodeAt(l + 1)) < 56320 ||
            o > 57343
          ? t
            ? r.charAt(l)
            : i
          : t
          ? r.slice(l, l + 2)
          : o - 56320 + ((i - 55296) << 10) + 65536;
      };
    },
    le = { codeAt: re(!1), charAt: re(!0) }.charAt,
    ae = function (t, e, n) {
      return e + (n ? le(t, e).length : 1);
    },
    se = function (t, e) {
      var n = t.exec;
      if ("function" == typeof n) {
        var i = n.call(t, e);
        if ("object" != typeof i)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return i;
      }
      if ("RegExp" !== g(t))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return Vt.call(t, e);
    };
  oe("match", 1, function (t, e, n) {
    return [
      function (e) {
        var n = b(this),
          i = null == e ? void 0 : e[t];
        return void 0 !== i ? i.call(e, n) : new RegExp(e)[t](String(n));
      },
      function (t) {
        var i = n(e, t, this);
        if (i.done) return i.value;
        var o = T(t),
          r = String(this);
        if (!o.global) return se(o, r);
        var l = o.unicode;
        o.lastIndex = 0;
        for (var a, s = [], c = 0; null !== (a = se(o, r)); ) {
          var u = String(a[0]);
          (s[c] = u),
            "" === u && (o.lastIndex = ae(r, ht(o.lastIndex), l)),
            c++;
        }
        return 0 === c ? null : s;
      },
    ];
  });
  var ce,
    ue,
    he =
      Array.isArray ||
      function (t) {
        return "Array" == g(t);
      },
    pe = function (t) {
      return Object(b(t));
    },
    fe = function (t, e, n) {
      var i = _(e);
      i in t ? O.f(t, i, f(0, n)) : (t[i] = n);
    },
    de = Qt("species"),
    ge = function (t, e) {
      var n;
      return (
        he(t) &&
          ("function" != typeof (n = t.constructor) ||
          (n !== Array && !he(n.prototype))
            ? w(n) && null === (n = n[de]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === e ? 0 : e)
      );
    },
    me = lt("navigator", "userAgent") || "",
    ve = a.process,
    be = ve && ve.versions,
    ye = be && be.v8;
  ye
    ? (ue = (ce = ye.split("."))[0] + ce[1])
    : me &&
      (!(ce = me.match(/Edge\/(\d+)/)) || ce[1] >= 74) &&
      (ce = me.match(/Chrome\/(\d+)/)) &&
      (ue = ce[1]);
  var we = ue && +ue,
    _e = Qt("species"),
    Se = function (t) {
      return (
        we >= 51 ||
        !s(function () {
          var e = [];
          return (
            ((e.constructor = {})[_e] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    },
    xe = Qt("isConcatSpreadable"),
    Ce =
      we >= 51 ||
      !s(function () {
        var t = [];
        return (t[xe] = !1), t.concat()[0] !== t;
      }),
    je = Se("concat"),
    Ee = function (t) {
      if (!w(t)) return !1;
      var e = t[xe];
      return void 0 !== e ? !!e : he(t);
    };
  Pt(
    { target: "Array", proto: !0, forced: !Ce || !je },
    {
      concat: function (t) {
        var e,
          n,
          i,
          o,
          r,
          l = pe(this),
          a = ge(l, 0),
          s = 0;
        for (e = -1, i = arguments.length; e < i; e++)
          if (Ee((r = -1 === e ? l : arguments[e]))) {
            if (s + (o = ht(r.length)) > 9007199254740991)
              throw TypeError("Maximum allowed index exceeded");
            for (n = 0; n < o; n++, s++) n in r && fe(a, s, r[n]);
          } else {
            if (s >= 9007199254740991)
              throw TypeError("Maximum allowed index exceeded");
            fe(a, s++, r);
          }
        return (a.length = s), a;
      },
    }
  );
  var Ae = {};
  Ae[Qt("toStringTag")] = "z";
  var ke = "[object z]" === String(Ae),
    Ne = Qt("toStringTag"),
    Te =
      "Arguments" ==
      g(
        (function () {
          return arguments;
        })()
      ),
    Ie = ke
      ? g
      : function (t) {
          var e, n, i;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (n = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), Ne))
            ? n
            : Te
            ? g(e)
            : "Object" == (i = g(e)) && "function" == typeof e.callee
            ? "Arguments"
            : i;
        },
    Oe = ke
      ? {}.toString
      : function () {
          return "[object " + Ie(this) + "]";
        };
  ke || it(Object.prototype, "toString", Oe, { unsafe: !0 });
  var Pe = RegExp.prototype,
    Le = Pe.toString,
    Re = s(function () {
      return "/a/b" != Le.call({ source: "a", flags: "b" });
    }),
    qe = "toString" != Le.name;
  (Re || qe) &&
    it(
      RegExp.prototype,
      "toString",
      function () {
        var t = T(this),
          e = String(t.source),
          n = t.flags;
        return (
          "/" +
          e +
          "/" +
          String(
            void 0 === n && t instanceof RegExp && !("flags" in Pe)
              ? Lt.call(t)
              : n
          )
        );
      },
      { unsafe: !0 }
    );
  var Me = Qt("match"),
    Be = function (t) {
      var e;
      return w(t) && (void 0 !== (e = t[Me]) ? !!e : "RegExp" == g(t));
    },
    He = Qt("species"),
    $e = function (t, e) {
      var n,
        i = T(t).constructor;
      return void 0 === i || null == (n = T(i)[He])
        ? e
        : (function (t) {
            if ("function" != typeof t)
              throw TypeError(String(t) + " is not a function");
            return t;
          })(n);
    },
    De = [].push,
    Ue = Math.min,
    Fe = !s(function () {
      return !RegExp(4294967295, "y");
    });
  function ze(t, e) {
    if (t instanceof SVGElement) {
      var i = t.getAttribute("class") || "";
      i.match(e) || t.setAttribute("class", "".concat(i, " ").concat(e));
    } else {
      if (void 0 !== t.classList)
        n(e.split(" "), function (e) {
          t.classList.add(e);
        });
      else t.className.match(e) || (t.className += " ".concat(e));
    }
  }
  function Ve(t, e) {
    var n = "";
    return (
      t.currentStyle
        ? (n = t.currentStyle[e])
        : document.defaultView &&
          document.defaultView.getComputedStyle &&
          (n = document.defaultView
            .getComputedStyle(t, null)
            .getPropertyValue(e)),
      n && n.toLowerCase ? n.toLowerCase() : n
    );
  }
  function We(t) {
    var e = t.element;
    if (this._options.scrollToElement) {
      var n = (function (t) {
        var e = window.getComputedStyle(t),
          n = "absolute" === e.position,
          i = /(auto|scroll)/;
        if ("fixed" === e.position) return document.body;
        for (var o = t; (o = o.parentElement); )
          if (
            ((e = window.getComputedStyle(o)),
            (!n || "static" !== e.position) &&
              i.test(e.overflow + e.overflowY + e.overflowX))
          )
            return o;
        return document.body;
      })(e);
      n !== document.body && (n.scrollTop = e.offsetTop - n.offsetTop);
    }
  }
  function Ge() {
    if (void 0 !== window.innerWidth)
      return { width: window.innerWidth, height: window.innerHeight };
    var t = document.documentElement;
    return { width: t.clientWidth, height: t.clientHeight };
  }
  function Ke(t, e, n) {
    var i,
      o = e.element;
    if (
      "off" !== t &&
      this._options.scrollToElement &&
      ((i =
        "tooltip" === t
          ? n.getBoundingClientRect()
          : o.getBoundingClientRect()),
      !(function (t) {
        var e = t.getBoundingClientRect();
        return (
          e.top >= 0 &&
          e.left >= 0 &&
          e.bottom + 80 <= window.innerHeight &&
          e.right <= window.innerWidth
        );
      })(o))
    ) {
      var r = Ge().height;
      i.bottom - (i.bottom - i.top) < 0 || o.clientHeight > r
        ? window.scrollBy(
            0,
            i.top - (r / 2 - i.height / 2) - this._options.scrollPadding
          )
        : window.scrollBy(
            0,
            i.top - (r / 2 - i.height / 2) + this._options.scrollPadding
          );
    }
  }
  function Xe(t) {
    t.setAttribute("role", "button"), (t.tabIndex = 0);
  }
  function Ye(t) {
    var e = document.body,
      n = document.documentElement,
      i = window.pageYOffset || n.scrollTop || e.scrollTop,
      o = window.pageXOffset || n.scrollLeft || e.scrollLeft,
      r = t.getBoundingClientRect();
    return {
      top: r.top + i,
      width: r.width,
      height: r.height,
      left: r.left + o,
    };
  }
  function Qe(t) {
    var e = t.parentNode;
    return (
      !(!e || "HTML" === e.nodeName) && ("fixed" === Ve(t, "position") || Qe(e))
    );
  }
  oe(
    "split",
    2,
    function (t, e, n) {
      var i;
      return (
        (i =
          "c" == "abbc".split(/(b)*/)[1] ||
          4 != "test".split(/(?:)/, -1).length ||
          2 != "ab".split(/(?:ab)*/).length ||
          4 != ".".split(/(.?)(.?)/).length ||
          ".".split(/()()/).length > 1 ||
          "".split(/.?/).length
            ? function (t, n) {
                var i = String(b(this)),
                  o = void 0 === n ? 4294967295 : n >>> 0;
                if (0 === o) return [];
                if (void 0 === t) return [i];
                if (!Be(t)) return e.call(i, t, o);
                for (
                  var r,
                    l,
                    a,
                    s = [],
                    c =
                      (t.ignoreCase ? "i" : "") +
                      (t.multiline ? "m" : "") +
                      (t.unicode ? "u" : "") +
                      (t.sticky ? "y" : ""),
                    u = 0,
                    h = new RegExp(t.source, c + "g");
                  (r = Vt.call(h, i)) &&
                  !(
                    (l = h.lastIndex) > u &&
                    (s.push(i.slice(u, r.index)),
                    r.length > 1 &&
                      r.index < i.length &&
                      De.apply(s, r.slice(1)),
                    (a = r[0].length),
                    (u = l),
                    s.length >= o)
                  );

                )
                  h.lastIndex === r.index && h.lastIndex++;
                return (
                  u === i.length
                    ? (!a && h.test("")) || s.push("")
                    : s.push(i.slice(u)),
                  s.length > o ? s.slice(0, o) : s
                );
              }
            : "0".split(void 0, 0).length
            ? function (t, n) {
                return void 0 === t && 0 === n ? [] : e.call(this, t, n);
              }
            : e),
        [
          function (e, n) {
            var o = b(this),
              r = null == e ? void 0 : e[t];
            return void 0 !== r ? r.call(e, o, n) : i.call(String(o), e, n);
          },
          function (t, o) {
            var r = n(i, t, this, o, i !== e);
            if (r.done) return r.value;
            var l = T(t),
              a = String(this),
              s = $e(l, RegExp),
              c = l.unicode,
              u =
                (l.ignoreCase ? "i" : "") +
                (l.multiline ? "m" : "") +
                (l.unicode ? "u" : "") +
                (Fe ? "y" : "g"),
              h = new s(Fe ? l : "^(?:" + l.source + ")", u),
              p = void 0 === o ? 4294967295 : o >>> 0;
            if (0 === p) return [];
            if (0 === a.length) return null === se(h, a) ? [a] : [];
            for (var f = 0, d = 0, g = []; d < a.length; ) {
              h.lastIndex = Fe ? d : 0;
              var m,
                v = se(h, Fe ? a : a.slice(d));
              if (
                null === v ||
                (m = Ue(ht(h.lastIndex + (Fe ? 0 : d)), a.length)) === f
              )
                d = ae(a, d, c);
              else {
                if ((g.push(a.slice(f, d)), g.length === p)) return g;
                for (var b = 1; b <= v.length - 1; b++)
                  if ((g.push(v[b]), g.length === p)) return g;
                d = f = m;
              }
            }
            return g.push(a.slice(f)), g;
          },
        ]
      );
    },
    !Fe
  );
  var Je = Math.max,
    Ze = Math.min,
    tn = Math.floor,
    en = /\$([$&'`]|\d\d?|<[^>]*>)/g,
    nn = /\$([$&'`]|\d\d?)/g;
  function on(t, e) {
    if (t instanceof SVGElement) {
      var n = t.getAttribute("class") || "";
      t.setAttribute("class", n.replace(e, "").replace(/^\s+|\s+$/g, ""));
    } else t.className = t.className.replace(e, "").replace(/^\s+|\s+$/g, "");
  }
  function rn(t, e) {
    var n = "";
    if ((t.style.cssText && (n += t.style.cssText), "string" == typeof e))
      n += e;
    else for (var i in e) n += "".concat(i, ":").concat(e[i], ";");
    t.style.cssText = n;
  }
  function ln(t) {
    if (t) {
      if (!this._introItems[this._currentStep]) return;
      var e = this._introItems[this._currentStep],
        n = Ye(e.element),
        i = this._options.helperElementPadding;
      Qe(e.element)
        ? ze(t, "introjs-fixedTooltip")
        : on(t, "introjs-fixedTooltip"),
        "floating" === e.position && (i = 0),
        rn(t, {
          width: "".concat(n.width + i, "px"),
          height: "".concat(n.height + i, "px"),
          top: "".concat(n.top - i / 2, "px"),
          left: "".concat(n.left - i / 2, "px"),
        });
    }
  }
  oe("replace", 2, function (t, e, n, i) {
    var o = i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
      r = i.REPLACE_KEEPS_$0,
      l = o ? "$" : "$0";
    return [
      function (n, i) {
        var o = b(this),
          r = null == n ? void 0 : n[t];
        return void 0 !== r ? r.call(n, o, i) : e.call(String(o), n, i);
      },
      function (t, i) {
        if ((!o && r) || ("string" == typeof i && -1 === i.indexOf(l))) {
          var s = n(e, t, this, i);
          if (s.done) return s.value;
        }
        var c = T(t),
          u = String(this),
          h = "function" == typeof i;
        h || (i = String(i));
        var p = c.global;
        if (p) {
          var f = c.unicode;
          c.lastIndex = 0;
        }
        for (var d = []; ; ) {
          var g = se(c, u);
          if (null === g) break;
          if ((d.push(g), !p)) break;
          "" === String(g[0]) && (c.lastIndex = ae(u, ht(c.lastIndex), f));
        }
        for (var m, v = "", b = 0, y = 0; y < d.length; y++) {
          g = d[y];
          for (
            var w = String(g[0]),
              _ = Je(Ze(ct(g.index), u.length), 0),
              S = [],
              x = 1;
            x < g.length;
            x++
          )
            S.push(void 0 === (m = g[x]) ? m : String(m));
          var C = g.groups;
          if (h) {
            var j = [w].concat(S, _, u);
            void 0 !== C && j.push(C);
            var E = String(i.apply(void 0, j));
          } else E = a(w, u, _, S, C, i);
          _ >= b && ((v += u.slice(b, _) + E), (b = _ + w.length));
        }
        return v + u.slice(b);
      },
    ];
    function a(t, n, i, o, r, l) {
      var a = i + t.length,
        s = o.length,
        c = nn;
      return (
        void 0 !== r && ((r = pe(r)), (c = en)),
        e.call(l, c, function (e, l) {
          var c;
          switch (l.charAt(0)) {
            case "$":
              return "$";
            case "&":
              return t;
            case "`":
              return n.slice(0, i);
            case "'":
              return n.slice(a);
            case "<":
              c = r[l.slice(1, -1)];
              break;
            default:
              var u = +l;
              if (0 === u) return e;
              if (u > s) {
                var h = tn(u / 10);
                return 0 === h
                  ? e
                  : h <= s
                  ? void 0 === o[h - 1]
                    ? l.charAt(1)
                    : o[h - 1] + l.charAt(1)
                  : e;
              }
              c = o[u - 1];
          }
          return void 0 === c ? "" : c;
        })
      );
    }
  });
  var an,
    sn =
      Object.keys ||
      function (t) {
        return bt(t, yt);
      },
    cn = c
      ? Object.defineProperties
      : function (t, e) {
          T(t);
          for (var n, i = sn(e), o = i.length, r = 0; o > r; )
            O.f(t, (n = i[r++]), e[n]);
          return t;
        },
    un = lt("document", "documentElement"),
    hn = K("IE_PROTO"),
    pn = function () {},
    fn = function (t) {
      return "<script>" + t + "</script>";
    },
    dn = function () {
      try {
        an = document.domain && new ActiveXObject("htmlfile");
      } catch (t) {}
      var t, e;
      dn = an
        ? (function (t) {
            t.write(fn("")), t.close();
            var e = t.parentWindow.Object;
            return (t = null), e;
          })(an)
        : (((e = E("iframe")).style.display = "none"),
          un.appendChild(e),
          (e.src = String("javascript:")),
          (t = e.contentWindow.document).open(),
          t.write(fn("document.F=Object")),
          t.close(),
          t.F);
      for (var n = yt.length; n--; ) delete dn.prototype[yt[n]];
      return dn();
    };
  X[hn] = !0;
  var gn =
      Object.create ||
      function (t, e) {
        var n;
        return (
          null !== t
            ? ((pn.prototype = T(t)),
              (n = new pn()),
              (pn.prototype = null),
              (n[hn] = t))
            : (n = dn()),
          void 0 === e ? n : cn(n, e)
        );
      },
    mn = Qt("unscopables"),
    vn = Array.prototype;
  null == vn[mn] && O.f(vn, mn, { configurable: !0, value: gn(null) });
  var bn,
    yn = Object.defineProperty,
    wn = {},
    _n = function (t) {
      throw t;
    },
    Sn = function (t, e) {
      if (x(wn, t)) return wn[t];
      e || (e = {});
      var n = [][t],
        i = !!x(e, "ACCESSORS") && e.ACCESSORS,
        o = x(e, 0) ? e[0] : _n,
        r = x(e, 1) ? e[1] : void 0;
      return (wn[t] =
        !!n &&
        !s(function () {
          if (i && !c) return !0;
          var t = { length: -1 };
          i ? yn(t, 1, { enumerable: !0, get: _n }) : (t[1] = 1),
            n.call(t, o, r);
        }));
    },
    xn = mt.includes;
  Pt(
    {
      target: "Array",
      proto: !0,
      forced: !Sn("indexOf", { ACCESSORS: !0, 1: 0 }),
    },
    {
      includes: function (t) {
        return xn(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
    (bn = "includes"),
    (vn[mn][bn] = !0);
  var Cn,
    jn,
    En = mt.indexOf,
    An = [].indexOf,
    kn = !!An && 1 / [1].indexOf(1, -0) < 0,
    Nn =
      !!(jn = []["indexOf"]) &&
      s(function () {
        jn.call(
          null,
          Cn ||
            function () {
              throw 1;
            },
          1
        );
      }),
    Tn = Sn("indexOf", { ACCESSORS: !0, 1: 0 });
  Pt(
    { target: "Array", proto: !0, forced: kn || !Nn || !Tn },
    {
      indexOf: function (t) {
        return kn
          ? An.apply(this, arguments) || 0
          : En(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var In = Se("slice"),
    On = Sn("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
    Pn = Qt("species"),
    Ln = [].slice,
    Rn = Math.max;
  Pt(
    { target: "Array", proto: !0, forced: !In || !On },
    {
      slice: function (t, e) {
        var n,
          i,
          o,
          r = y(this),
          l = ht(r.length),
          a = dt(t, l),
          s = dt(void 0 === e ? l : e, l);
        if (
          he(r) &&
          ("function" != typeof (n = r.constructor) ||
          (n !== Array && !he(n.prototype))
            ? w(n) && null === (n = n[Pn]) && (n = void 0)
            : (n = void 0),
          n === Array || void 0 === n)
        )
          return Ln.call(r, a, s);
        for (
          i = new (void 0 === n ? Array : n)(Rn(s - a, 0)), o = 0;
          a < s;
          a++, o++
        )
          a in r && fe(i, o, r[a]);
        return (i.length = o), i;
      },
    }
  );
  var qn = function (t) {
      if (Be(t))
        throw TypeError("The method doesn't accept regular expressions");
      return t;
    },
    Mn = Qt("match");
  function Bn(t, e, n, i, o) {
    return t.left + e + n.width > i.width
      ? ((o.left = "".concat(i.width - n.width - t.left, "px")), !1)
      : ((o.left = "".concat(e, "px")), !0);
  }
  function Hn(t, e, n, i) {
    return t.left + t.width - e - n.width < 0
      ? ((i.style.left = "".concat(-t.left, "px")), !1)
      : ((i.style.right = "".concat(e, "px")), !0);
  }
  Pt(
    {
      target: "String",
      proto: !0,
      forced: !(function (t) {
        var e = /./;
        try {
          "/./"[t](e);
        } catch (n) {
          try {
            return (e[Mn] = !1), "/./"[t](e);
          } catch (t) {}
        }
        return !1;
      })("includes"),
    },
    {
      includes: function (t) {
        return !!~String(b(this)).indexOf(
          qn(t),
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    }
  );
  var $n = Se("splice"),
    Dn = Sn("splice", { ACCESSORS: !0, 0: 0, 1: 2 }),
    Un = Math.max,
    Fn = Math.min;
  function zn(t, e) {
    t.includes(e) && t.splice(t.indexOf(e), 1);
  }
  function Vn(t, e, n) {
    var i = this._options.positionPrecedence.slice(),
      o = Ge(),
      r = Ye(e).height + 10,
      l = Ye(e).width + 20,
      a = t.getBoundingClientRect(),
      s = "floating";
    a.bottom + r > o.height && zn(i, "bottom"),
      a.top - r < 0 && zn(i, "top"),
      a.right + l > o.width && zn(i, "right"),
      a.left - l < 0 && zn(i, "left");
    var c,
      u,
      h = -1 !== (u = (c = n || "").indexOf("-")) ? c.substr(u) : "";
    return (
      n && (n = n.split("-")[0]),
      i.length && (s = "auto" !== n && i.includes(n) ? n : i[0]),
      ["top", "bottom"].includes(s) &&
        (s += (function (t, e, n, i) {
          var o = n.width,
            r = e / 2,
            l = Math.min(o, window.screen.width),
            a = ["-left-aligned", "-middle-aligned", "-right-aligned"];
          return (
            l - t < e && zn(a, "-left-aligned"),
            (t < r || l - t < r) && zn(a, "-middle-aligned"),
            t < e && zn(a, "-right-aligned"),
            a.length ? (a.includes(i) ? i : a[0]) : "-middle-aligned"
          );
        })(a.left, l, o, h)),
      s
    );
  }
  function Wn(t, e, n, i) {
    var o,
      r,
      l,
      a,
      s,
      c = "";
    if (
      ((i = i || !1),
      (e.style.top = null),
      (e.style.right = null),
      (e.style.bottom = null),
      (e.style.left = null),
      (e.style.marginLeft = null),
      (e.style.marginTop = null),
      (n.style.display = "inherit"),
      this._introItems[this._currentStep])
    )
      switch (
        ((c =
          "string" ==
          typeof (o = this._introItems[this._currentStep]).tooltipClass
            ? o.tooltipClass
            : this._options.tooltipClass),
        (e.className = "introjs-tooltip ".concat(c).replace(/^\s+|\s+$/g, "")),
        e.setAttribute("role", "dialog"),
        "floating" !== (s = this._introItems[this._currentStep].position) &&
          (s = Vn.call(this, t, e, s)),
        (l = Ye(t)),
        (r = Ye(e)),
        (a = Ge()),
        ze(e, "introjs-".concat(s)),
        s)
      ) {
        case "top-right-aligned":
          n.className = "introjs-arrow bottom-right";
          var u = 0;
          Hn(l, u, r, e), (e.style.bottom = "".concat(l.height + 20, "px"));
          break;
        case "top-middle-aligned":
          n.className = "introjs-arrow bottom-middle";
          var h = l.width / 2 - r.width / 2;
          i && (h += 5),
            Hn(l, h, r, e) && ((e.style.right = null), Bn(l, h, r, a, e)),
            (e.style.bottom = "".concat(l.height + 20, "px"));
          break;
        case "top-left-aligned":
        case "top":
          (n.className = "introjs-arrow bottom"),
            Bn(l, i ? 0 : 15, r, a, e),
            (e.style.bottom = "".concat(l.height + 20, "px"));
          break;
        case "right":
          (e.style.left = "".concat(l.width + 20, "px")),
            l.top + r.height > a.height
              ? ((n.className = "introjs-arrow left-bottom"),
                (e.style.top = "-".concat(r.height - l.height - 20, "px")))
              : (n.className = "introjs-arrow left");
          break;
        case "left":
          i || !0 !== this._options.showStepNumbers || (e.style.top = "15px"),
            l.top + r.height > a.height
              ? ((e.style.top = "-".concat(r.height - l.height - 20, "px")),
                (n.className = "introjs-arrow right-bottom"))
              : (n.className = "introjs-arrow right"),
            (e.style.right = "".concat(l.width + 20, "px"));
          break;
        case "floating":
          (n.style.display = "none"),
            (e.style.left = "50%"),
            (e.style.top = "50%"),
            (e.style.marginLeft = "-".concat(r.width / 2, "px")),
            (e.style.marginTop = "-".concat(r.height / 2, "px"));
          break;
        case "bottom-right-aligned":
          (n.className = "introjs-arrow top-right"),
            Hn(l, (u = 0), r, e),
            (e.style.top = "".concat(l.height + 20, "px"));
          break;
        case "bottom-middle-aligned":
          (n.className = "introjs-arrow top-middle"),
            (h = l.width / 2 - r.width / 2),
            i && (h += 5),
            Hn(l, h, r, e) && ((e.style.right = null), Bn(l, h, r, a, e)),
            (e.style.top = "".concat(l.height + 20, "px"));
          break;
        default:
          (n.className = "introjs-arrow top"),
            Bn(l, 0, r, a, e),
            (e.style.top = "".concat(l.height + 20, "px"));
      }
  }
  function Gn() {
    n(document.querySelectorAll(".introjs-showElement"), function (t) {
      on(t, /introjs-[a-zA-Z]+/g);
    });
  }
  function Kn(t, e) {
    var n = document.createElement(t);
    e = e || {};
    var i = /^(?:role|data-|aria-)/;
    for (var o in e) {
      var r = e[o];
      "style" === o ? rn(n, r) : o.match(i) ? n.setAttribute(o, r) : (n[o] = r);
    }
    return n;
  }
  function Xn(t, e, n) {
    if (n) {
      var i = e.style.opacity || "1";
      rn(e, { opacity: "0" }),
        window.setTimeout(function () {
          rn(e, { opacity: i });
        }, 10);
    }
    t.appendChild(e);
  }
  function Yn() {
    return (
      (parseInt(this._currentStep + 1, 10) / this._introItems.length) * 100
    );
  }
  function Qn() {
    var t = document.querySelector(".introjs-disableInteraction");
    null === t &&
      ((t = Kn("div", { className: "introjs-disableInteraction" })),
      this._targetElement.appendChild(t)),
      ln.call(this, t);
  }
  function Jn(t) {
    var e = this;
    void 0 !== this._introChangeCallback &&
      this._introChangeCallback.call(this, t.element);
    var i,
      o,
      r,
      l = this,
      a = document.querySelector(".introjs-helperLayer"),
      s = document.querySelector(".introjs-tooltipReferenceLayer"),
      c = "introjs-helperLayer";
    if (
      ("string" == typeof t.highlightClass &&
        (c += " ".concat(t.highlightClass)),
      "string" == typeof this._options.highlightClass &&
        (c += " ".concat(this._options.highlightClass)),
      null !== a)
    ) {
      var u = s.querySelector(".introjs-helperNumberLayer"),
        h = s.querySelector(".introjs-tooltiptext"),
        p = s.querySelector(".introjs-tooltip-title"),
        f = s.querySelector(".introjs-arrow"),
        d = s.querySelector(".introjs-tooltip");
      (r = s.querySelector(".introjs-skipbutton")),
        (o = s.querySelector(".introjs-prevbutton")),
        (i = s.querySelector(".introjs-nextbutton")),
        (a.className = c),
        (d.style.opacity = 0),
        (d.style.display = "none"),
        We.call(l, t),
        ln.call(l, a),
        ln.call(l, s),
        Gn(),
        l._lastShowElementTimer && window.clearTimeout(l._lastShowElementTimer),
        (l._lastShowElementTimer = window.setTimeout(function () {
          null !== u &&
            (u.innerHTML = ""
              .concat(t.step, " of ")
              .concat(e._introItems.length)),
            (h.innerHTML = t.intro),
            (p.innerHTML = t.title),
            (d.style.display = "block"),
            Wn.call(l, t.element, d, f),
            l._options.showBullets &&
              ((s.querySelector(".introjs-bullets li > a.active").className =
                ""),
              (s.querySelector(
                '.introjs-bullets li > a[data-stepnumber="'.concat(t.step, '"]')
              ).className = "active")),
            (s.querySelector(
              ".introjs-progress .introjs-progressbar"
            ).style.cssText = "width:".concat(Yn.call(l), "%;")),
            s
              .querySelector(".introjs-progress .introjs-progressbar")
              .setAttribute("aria-valuenow", Yn.call(l)),
            (d.style.opacity = 1),
            ((null != i && /introjs-donebutton/gi.test(i.className)) ||
              null != i) &&
              i.focus(),
            Ke.call(l, t.scrollTo, t, h);
        }, 350));
    } else {
      var g = Kn("div", { className: c }),
        m = Kn("div", { className: "introjs-tooltipReferenceLayer" }),
        v = Kn("div", { className: "introjs-arrow" }),
        b = Kn("div", { className: "introjs-tooltip" }),
        y = Kn("div", { className: "introjs-tooltiptext" }),
        w = Kn("div", { className: "introjs-tooltip-header" }),
        _ = Kn("h1", { className: "introjs-tooltip-title" }),
        S = Kn("div", { className: "introjs-bullets" }),
        x = Kn("div"),
        C = Kn("div");
      rn(g, {
        "box-shadow": "0 0 1px 2px rgba(33, 33, 33, 0.8), rgba(33, 33, 33, ".concat(
          l._options.overlayOpacity.toString(),
          ") 0 0 0 5000px"
        ),
      }),
        We.call(l, t),
        ln.call(l, g),
        ln.call(l, m),
        Xn(this._targetElement, g, !0),
        Xn(this._targetElement, m),
        (y.innerHTML = t.intro),
        (_.innerHTML = t.title),
        !1 === this._options.showBullets && (S.style.display = "none");
      var j = Kn("ul");
      j.setAttribute("role", "tablist");
      var E = function () {
        l.goToStep(this.getAttribute("data-stepnumber"));
      };
      n(this._introItems, function (e, n) {
        var i = e.step,
          o = Kn("li"),
          r = Kn("a");
        o.setAttribute("role", "presentation"),
          r.setAttribute("role", "tab"),
          (r.onclick = E),
          n === t.step - 1 && (r.className = "active"),
          Xe(r),
          (r.innerHTML = "&nbsp;"),
          r.setAttribute("data-stepnumber", i),
          o.appendChild(r),
          j.appendChild(o);
      }),
        S.appendChild(j),
        (x.className = "introjs-progress"),
        !1 === this._options.showProgress && (x.style.display = "none");
      var A = Kn("div", { className: "introjs-progressbar" });
      this._options.progressBarAdditionalClass &&
        (A.className += " " + this._options.progressBarAdditionalClass),
        A.setAttribute("role", "progress"),
        A.setAttribute("aria-valuemin", 0),
        A.setAttribute("aria-valuemax", 100),
        A.setAttribute("aria-valuenow", Yn.call(this)),
        (A.style.cssText = "width:".concat(Yn.call(this), "%;")),
        x.appendChild(A),
        (C.className = "introjs-tooltipbuttons"),
        !1 === this._options.showButtons && (C.style.display = "none"),
        w.appendChild(_),
        b.appendChild(w),
        b.appendChild(y),
        b.appendChild(S),
        b.appendChild(x);
      var k = Kn("div");
      !0 === this._options.showStepNumbers &&
        ((k.className = "introjs-helperNumberLayer"),
        (k.innerHTML = ""
          .concat(t.step, " of ")
          .concat(this._introItems.length)),
        b.appendChild(k)),
        b.appendChild(v),
        m.appendChild(b),
        ((i = Kn("a")).onclick = function () {
          l._introItems.length - 1 !== l._currentStep
            ? ei.call(l)
            : /introjs-donebutton/gi.test(i.className) &&
              ("function" == typeof l._introCompleteCallback &&
                l._introCompleteCallback.call(l),
              Si.call(l, l._targetElement));
        }),
        Xe(i),
        (i.innerHTML = this._options.nextLabel),
        ((o = Kn("a")).onclick = function () {
          0 !== l._currentStep && ni.call(l);
        }),
        Xe(o),
        (o.innerHTML = this._options.prevLabel),
        Xe((r = Kn("a", { className: "introjs-skipbutton" }))),
        (r.innerHTML = this._options.skipLabel),
        (r.onclick = function () {
          l._introItems.length - 1 === l._currentStep &&
            "function" == typeof l._introCompleteCallback &&
            l._introCompleteCallback.call(l),
            "function" == typeof l._introSkipCallback &&
              l._introSkipCallback.call(l),
            Si.call(l, l._targetElement);
        }),
        w.appendChild(r),
        this._introItems.length > 1 && C.appendChild(o),
        C.appendChild(i),
        b.appendChild(C),
        Wn.call(l, t.element, b, v),
        Ke.call(this, t.scrollTo, t, b);
    }
    var N = l._targetElement.querySelector(".introjs-disableInteraction");
    N && N.parentNode.removeChild(N),
      t.disableInteraction && Qn.call(l),
      0 === this._currentStep && this._introItems.length > 1
        ? (null != i &&
            ((i.className = "".concat(
              this._options.buttonClass,
              " introjs-nextbutton"
            )),
            (i.innerHTML = this._options.nextLabel)),
          !0 === this._options.hidePrev
            ? (null != o &&
                (o.className = "".concat(
                  this._options.buttonClass,
                  " introjs-prevbutton introjs-hidden"
                )),
              null != i && ze(i, "introjs-fullbutton"))
            : null != o &&
              (o.className = "".concat(
                this._options.buttonClass,
                " introjs-prevbutton introjs-disabled"
              )))
        : this._introItems.length - 1 === this._currentStep ||
          1 === this._introItems.length
        ? (null != o &&
            (o.className = "".concat(
              this._options.buttonClass,
              " introjs-prevbutton"
            )),
          !0 === this._options.hideNext
            ? (null != i &&
                (i.className = "".concat(
                  this._options.buttonClass,
                  " introjs-nextbutton introjs-hidden"
                )),
              null != o && ze(o, "introjs-fullbutton"))
            : null != i &&
              (!0 === this._options.nextToDone
                ? ((i.innerHTML = this._options.doneLabel),
                  ze(
                    i,
                    "".concat(
                      this._options.buttonClass,
                      " introjs-nextbutton introjs-donebutton"
                    )
                  ))
                : (i.className = "".concat(
                    this._options.buttonClass,
                    " introjs-nextbutton introjs-disabled"
                  ))))
        : (null != o &&
            (o.className = "".concat(
              this._options.buttonClass,
              " introjs-prevbutton"
            )),
          null != i &&
            ((i.className = "".concat(
              this._options.buttonClass,
              " introjs-nextbutton"
            )),
            (i.innerHTML = this._options.nextLabel))),
      null != o && o.setAttribute("role", "button"),
      null != i && i.setAttribute("role", "button"),
      null != r && r.setAttribute("role", "button"),
      null != i && i.focus(),
      (function (t) {
        var e = t.element;
        ze(e, "introjs-showElement");
        var n = Ve(e, "position");
        "absolute" !== n &&
          "relative" !== n &&
          "sticky" !== n &&
          "fixed" !== n &&
          ze(e, "introjs-relativePosition");
      })(t),
      void 0 !== this._introAfterChangeCallback &&
        this._introAfterChangeCallback.call(this, t.element);
  }
  function Zn(t) {
    (this._currentStep = t - 2), void 0 !== this._introItems && ei.call(this);
  }
  function ti(t) {
    (this._currentStepNumber = t), void 0 !== this._introItems && ei.call(this);
  }
  function ei() {
    var t = this;
    (this._direction = "forward"),
      void 0 !== this._currentStepNumber &&
        n(this._introItems, function (e, n) {
          e.step === t._currentStepNumber &&
            ((t._currentStep = n - 1), (t._currentStepNumber = void 0));
        }),
      void 0 === this._currentStep
        ? (this._currentStep = 0)
        : ++this._currentStep;
    var e = this._introItems[this._currentStep],
      i = !0;
    return (
      void 0 !== this._introBeforeChangeCallback &&
        (i = this._introBeforeChangeCallback.call(this, e && e.element)),
      !1 === i
        ? (--this._currentStep, !1)
        : this._introItems.length <= this._currentStep
        ? ("function" == typeof this._introCompleteCallback &&
            this._introCompleteCallback.call(this),
          void Si.call(this, this._targetElement))
        : void Jn.call(this, e)
    );
  }
  function ni() {
    if (((this._direction = "backward"), 0 === this._currentStep)) return !1;
    --this._currentStep;
    var t = this._introItems[this._currentStep],
      e = !0;
    if (
      (void 0 !== this._introBeforeChangeCallback &&
        (e = this._introBeforeChangeCallback.call(this, t && t.element)),
      !1 === e)
    )
      return ++this._currentStep, !1;
    Jn.call(this, t);
  }
  function ii() {
    return this._currentStep;
  }
  function oi(t) {
    var e = null === t.code ? t.which : t.code;
    if (
      (null === e && (e = null === t.charCode ? t.keyCode : t.charCode),
      ("Escape" !== e && 27 !== e) || !0 !== this._options.exitOnEsc)
    ) {
      if ("ArrowLeft" === e || 37 === e) ni.call(this);
      else if ("ArrowRight" === e || 39 === e) ei.call(this);
      else if ("Enter" === e || "NumpadEnter" === e || 13 === e) {
        var n = t.target || t.srcElement;
        n && n.className.match("introjs-prevbutton")
          ? ni.call(this)
          : n && n.className.match("introjs-skipbutton")
          ? (this._introItems.length - 1 === this._currentStep &&
              "function" == typeof this._introCompleteCallback &&
              this._introCompleteCallback.call(this),
            Si.call(this, this._targetElement))
          : n && n.getAttribute("data-stepnumber")
          ? n.click()
          : ei.call(this),
          t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
      }
    } else Si.call(this, this._targetElement);
  }
  function ri(e) {
    if (null === e || "object" !== t(e) || void 0 !== e.nodeType) return e;
    var n = {};
    for (var i in e)
      void 0 !== window.jQuery && e[i] instanceof window.jQuery
        ? (n[i] = e[i])
        : (n[i] = ri(e[i]));
    return n;
  }
  function li(t) {
    var e = document.querySelector(".introjs-hints");
    return e ? e.querySelectorAll(t) : [];
  }
  function ai(t) {
    var e = li('.introjs-hint[data-step="'.concat(t, '"]'))[0];
    mi.call(this),
      e && ze(e, "introjs-hidehint"),
      void 0 !== this._hintCloseCallback &&
        this._hintCloseCallback.call(this, t);
  }
  function si() {
    var t = this;
    n(li(".introjs-hint"), function (e) {
      ai.call(t, e.getAttribute("data-step"));
    });
  }
  function ci() {
    var t = this,
      e = li(".introjs-hint");
    e && e.length
      ? n(e, function (e) {
          ui.call(t, e.getAttribute("data-step"));
        })
      : vi.call(this, this._targetElement);
  }
  function ui(t) {
    var e = li('.introjs-hint[data-step="'.concat(t, '"]'))[0];
    e && on(e, /introjs-hidehint/g);
  }
  function hi() {
    var t = this;
    n(li(".introjs-hint"), function (e) {
      pi.call(t, e.getAttribute("data-step"));
    });
  }
  function pi(t) {
    var e = li('.introjs-hint[data-step="'.concat(t, '"]'))[0];
    e && e.parentNode.removeChild(e);
  }
  function fi() {
    var t = this,
      e = this,
      i = document.querySelector(".introjs-hints");
    null === i && (i = Kn("div", { className: "introjs-hints" }));
    n(this._introItems, function (n, o) {
      if (
        !document.querySelector('.introjs-hint[data-step="'.concat(o, '"]'))
      ) {
        var r = Kn("a", { className: "introjs-hint" });
        Xe(r),
          (r.onclick = (function (t) {
            return function (n) {
              var i = n || window.event;
              i.stopPropagation && i.stopPropagation(),
                null !== i.cancelBubble && (i.cancelBubble = !0),
                gi.call(e, t);
            };
          })(o)),
          n.hintAnimation || ze(r, "introjs-hint-no-anim"),
          Qe(n.element) && ze(r, "introjs-fixedhint");
        var l = Kn("div", { className: "introjs-hint-dot" }),
          a = Kn("div", { className: "introjs-hint-pulse" });
        r.appendChild(l),
          r.appendChild(a),
          r.setAttribute("data-step", o),
          (n.targetElement = n.element),
          (n.element = r),
          di.call(t, n.hintPosition, r, n.targetElement),
          i.appendChild(r);
      }
    }),
      document.body.appendChild(i),
      void 0 !== this._hintsAddedCallback &&
        this._hintsAddedCallback.call(this);
  }
  function di(t, e, n) {
    var i = e.style,
      o = Ye.call(this, n);
    switch (t) {
      default:
      case "top-left":
        (i.left = "".concat(o.left, "px")), (i.top = "".concat(o.top, "px"));
        break;
      case "top-right":
        (i.left = "".concat(o.left + o.width - 20, "px")),
          (i.top = "".concat(o.top, "px"));
        break;
      case "bottom-left":
        (i.left = "".concat(o.left, "px")),
          (i.top = "".concat(o.top + o.height - 20, "px"));
        break;
      case "bottom-right":
        (i.left = "".concat(o.left + o.width - 20, "px")),
          (i.top = "".concat(o.top + o.height - 20, "px"));
        break;
      case "middle-left":
        (i.left = "".concat(o.left, "px")),
          (i.top = "".concat(o.top + (o.height - 20) / 2, "px"));
        break;
      case "middle-right":
        (i.left = "".concat(o.left + o.width - 20, "px")),
          (i.top = "".concat(o.top + (o.height - 20) / 2, "px"));
        break;
      case "middle-middle":
        (i.left = "".concat(o.left + (o.width - 20) / 2, "px")),
          (i.top = "".concat(o.top + (o.height - 20) / 2, "px"));
        break;
      case "bottom-middle":
        (i.left = "".concat(o.left + (o.width - 20) / 2, "px")),
          (i.top = "".concat(o.top + o.height - 20, "px"));
        break;
      case "top-middle":
        (i.left = "".concat(o.left + (o.width - 20) / 2, "px")),
          (i.top = "".concat(o.top, "px"));
    }
  }
  function gi(t) {
    var e = document.querySelector('.introjs-hint[data-step="'.concat(t, '"]')),
      n = this._introItems[t];
    void 0 !== this._hintClickCallback &&
      this._hintClickCallback.call(this, e, n, t);
    var i = mi.call(this);
    if (parseInt(i, 10) !== t) {
      var o = Kn("div", { className: "introjs-tooltip" }),
        r = Kn("div"),
        l = Kn("div"),
        a = Kn("div");
      (o.onclick = function (t) {
        t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0);
      }),
        (r.className = "introjs-tooltiptext");
      var s = Kn("p");
      s.innerHTML = n.hint;
      var c = Kn("a");
      (c.className = this._options.buttonClass),
        c.setAttribute("role", "button"),
        (c.innerHTML = this._options.hintButtonLabel),
        (c.onclick = ai.bind(this, t)),
        r.appendChild(s),
        r.appendChild(c),
        (l.className = "introjs-arrow"),
        o.appendChild(l),
        o.appendChild(r),
        (this._currentStep = e.getAttribute("data-step")),
        (a.className = "introjs-tooltipReferenceLayer introjs-hintReference"),
        a.setAttribute("data-step", e.getAttribute("data-step")),
        ln.call(this, a),
        a.appendChild(o),
        document.body.appendChild(a),
        Wn.call(this, e, o, l, !0);
    }
  }
  function mi() {
    var t = document.querySelector(".introjs-hintReference");
    if (t) {
      var e = t.getAttribute("data-step");
      return t.parentNode.removeChild(t), e;
    }
  }
  function vi(t) {
    var e = this;
    if (((this._introItems = []), this._options.hints))
      n(this._options.hints, function (t) {
        var n = ri(t);
        "string" == typeof n.element &&
          (n.element = document.querySelector(n.element)),
          (n.hintPosition = n.hintPosition || e._options.hintPosition),
          (n.hintAnimation = n.hintAnimation || e._options.hintAnimation),
          null !== n.element && e._introItems.push(n);
      });
    else {
      var o = t.querySelectorAll("*[data-hint]");
      if (!o || !o.length) return !1;
      n(o, function (t) {
        var n = t.getAttribute("data-hintanimation");
        (n = n ? "true" === n : e._options.hintAnimation),
          e._introItems.push({
            element: t,
            hint: t.getAttribute("data-hint"),
            hintPosition:
              t.getAttribute("data-hintposition") || e._options.hintPosition,
            hintAnimation: n,
            tooltipClass: t.getAttribute("data-tooltipclass"),
            position:
              t.getAttribute("data-position") || e._options.tooltipPosition,
          });
      });
    }
    fi.call(this),
      i.on(document, "click", mi, this, !1),
      i.on(window, "resize", bi, this, !0);
  }
  function bi() {
    var t = this;
    n(this._introItems, function (e) {
      var n = e.targetElement,
        i = e.hintPosition,
        o = e.element;
      void 0 !== n && di.call(t, i, o, n);
    });
  }
  function yi() {
    if (
      (ln.call(this, document.querySelector(".introjs-helperLayer")),
      ln.call(this, document.querySelector(".introjs-tooltipReferenceLayer")),
      ln.call(this, document.querySelector(".introjs-disableInteraction")),
      void 0 !== this._currentStep && null !== this._currentStep)
    ) {
      var t = document.querySelector(".introjs-arrow"),
        e = document.querySelector(".introjs-tooltip");
      Wn.call(this, this._introItems[this._currentStep].element, e, t);
    }
    return bi.call(this), this;
  }
  function wi() {
    yi.call(this);
  }
  function _i(t, e) {
    if (t && t.parentElement) {
      var n = t.parentElement;
      e
        ? (rn(t, { opacity: "0" }),
          window.setTimeout(function () {
            n.removeChild(t);
          }, 500))
        : n.removeChild(t);
    }
  }
  function Si(t, e) {
    var o = !0;
    if (
      (void 0 !== this._introBeforeExitCallback &&
        (o = this._introBeforeExitCallback.call(this)),
      e || !1 !== o)
    ) {
      var r = t.querySelectorAll(".introjs-overlay");
      r &&
        r.length &&
        n(r, function (t) {
          return _i(t);
        }),
        _i(t.querySelector(".introjs-helperLayer"), !0),
        _i(t.querySelector(".introjs-tooltipReferenceLayer")),
        _i(t.querySelector(".introjs-disableInteraction")),
        _i(document.querySelector(".introjsFloatingElement")),
        Gn(),
        i.off(window, "keydown", oi, this, !0),
        i.off(window, "resize", wi, this, !0),
        void 0 !== this._introExitCallback &&
          this._introExitCallback.call(this),
        (this._currentStep = void 0);
    }
  }
  function xi(t) {
    var e = Kn("div", { className: "introjs-overlay" }),
      n = this;
    if (t.tagName && "body" !== t.tagName.toLowerCase()) {
      var i = Ye(t);
      i &&
        rn(e, {
          width: "".concat(i.width, "px"),
          height: "".concat(i.height, "px"),
          top: "".concat(i.top, "px"),
          left: "".concat(i.left, "px"),
        });
    } else rn(e, { top: 0, bottom: 0, left: 0, right: 0, position: "fixed" });
    return (
      t.appendChild(e),
      !0 === n._options.exitOnOverlayClick &&
        (rn(e, { cursor: "pointer" }),
        (e.onclick = function () {
          Si.call(n, t);
        })),
      !0
    );
  }
  function Ci(t, e) {
    var o = this,
      r = t.querySelectorAll("*[data-intro]"),
      l = [];
    if (this._options.steps)
      n(this._options.steps, function (t) {
        var e = ri(t);
        if (
          ((e.step = l.length + 1),
          (e.title = e.title || ""),
          "string" == typeof e.element &&
            (e.element = document.querySelector(e.element)),
          void 0 === e.element || null === e.element)
        ) {
          var n = document.querySelector(".introjsFloatingElement");
          null === n &&
            ((n = Kn("div", { className: "introjsFloatingElement" })),
            document.body.appendChild(n)),
            (e.element = n),
            (e.position = "floating");
        }
        (e.scrollTo = e.scrollTo || o._options.scrollTo),
          void 0 === e.disableInteraction &&
            (e.disableInteraction = o._options.disableInteraction),
          null !== e.element && l.push(e);
      });
    else {
      var a;
      if (r.length < 1) return !1;
      n(r, function (t) {
        if (
          (!e || t.getAttribute("data-intro-group") === e) &&
          "none" !== t.style.display
        ) {
          var n = parseInt(t.getAttribute("data-step"), 10);
          (a = t.hasAttribute("data-disable-interaction")
            ? !!t.getAttribute("data-disable-interaction")
            : o._options.disableInteraction),
            n > 0 &&
              (l[n - 1] = {
                element: t,
                title: t.getAttribute("data-title") || "",
                intro: t.getAttribute("data-intro"),
                step: parseInt(t.getAttribute("data-step"), 10),
                tooltipClass: t.getAttribute("data-tooltipclass"),
                highlightClass: t.getAttribute("data-highlightclass"),
                position:
                  t.getAttribute("data-position") || o._options.tooltipPosition,
                scrollTo:
                  t.getAttribute("data-scrollto") || o._options.scrollTo,
                disableInteraction: a,
              });
        }
      });
      var s = 0;
      n(r, function (t) {
        if (
          (!e || t.getAttribute("data-intro-group") === e) &&
          null === t.getAttribute("data-step")
        ) {
          for (; void 0 !== l[s]; ) s++;
          (a = t.hasAttribute("data-disable-interaction")
            ? !!t.getAttribute("data-disable-interaction")
            : o._options.disableInteraction),
            (l[s] = {
              element: t,
              title: t.getAttribute("data-title") || "",
              intro: t.getAttribute("data-intro"),
              step: s + 1,
              tooltipClass: t.getAttribute("data-tooltipclass"),
              highlightClass: t.getAttribute("data-highlightclass"),
              position:
                t.getAttribute("data-position") || o._options.tooltipPosition,
              scrollTo: t.getAttribute("data-scrollto") || o._options.scrollTo,
              disableInteraction: a,
            });
        }
      });
    }
    for (var c = [], u = 0; u < l.length; u++) l[u] && c.push(l[u]);
    return (
      (l = c).sort(function (t, e) {
        return t.step - e.step;
      }),
      (this._introItems = l),
      xi.call(this, t) &&
        (ei.call(this),
        this._options.keyboardNavigation &&
          i.on(window, "keydown", oi, this, !0),
        i.on(window, "resize", wi, this, !0)),
      !1
    );
  }
  Pt(
    { target: "Array", proto: !0, forced: !$n || !Dn },
    {
      splice: function (t, e) {
        var n,
          i,
          o,
          r,
          l,
          a,
          s = pe(this),
          c = ht(s.length),
          u = dt(t, c),
          h = arguments.length;
        if (
          (0 === h
            ? (n = i = 0)
            : 1 === h
            ? ((n = 0), (i = c - u))
            : ((n = h - 2), (i = Fn(Un(ct(e), 0), c - u))),
          c + n - i > 9007199254740991)
        )
          throw TypeError("Maximum allowed length exceeded");
        for (o = ge(s, i), r = 0; r < i; r++)
          (l = u + r) in s && fe(o, r, s[l]);
        if (((o.length = i), n < i)) {
          for (r = u; r < c - i; r++)
            (a = r + n), (l = r + i) in s ? (s[a] = s[l]) : delete s[a];
          for (r = c; r > c - i + n; r--) delete s[r - 1];
        } else if (n > i)
          for (r = c - i; r > u; r--)
            (a = r + n - 1), (l = r + i - 1) in s ? (s[a] = s[l]) : delete s[a];
        for (r = 0; r < n; r++) s[r + u] = arguments[r + 2];
        return (s.length = c - i + n), o;
      },
    }
  );
  function ji(t) {
    (this._targetElement = t),
      (this._introItems = []),
      (this._options = {
        nextLabel: "Next",
        prevLabel: "Back",
        skipLabel: "×",
        doneLabel: "Done",
        hidePrev: !1,
        hideNext: !1,
        nextToDone: !0,
        tooltipPosition: "bottom",
        tooltipClass: "",
        highlightClass: "",
        exitOnEsc: !0,
        exitOnOverlayClick: !0,
        showStepNumbers: !1,
        keyboardNavigation: !0,
        showButtons: !0,
        showBullets: !0,
        showProgress: !1,
        scrollToElement: !0,
        scrollTo: "element",
        scrollPadding: 30,
        overlayOpacity: 0.5,
        positionPrecedence: ["bottom", "top", "right", "left"],
        disableInteraction: !1,
        helperElementPadding: 10,
        hintPosition: "top-middle",
        hintButtonLabel: "Got it",
        hintAnimation: !0,
        buttonClass: "introjs-button",
        progressBarAdditionalClass: !1,
      });
  }
  var Ei = function n(i) {
    var o;
    if ("object" === t(i)) o = new ji(i);
    else if ("string" == typeof i) {
      var r = document.querySelector(i);
      if (!r) throw new Error("There is no element with given selector.");
      o = new ji(r);
    } else o = new ji(document.body);
    return (n.instances[e(o, "introjs-instance")] = o), o;
  };
  return (
    (Ei.version = "3.2.1"),
    (Ei.instances = {}),
    (Ei.fn = ji.prototype = {
      clone: function () {
        return new ji(this);
      },
      setOption: function (t, e) {
        return (this._options[t] = e), this;
      },
      setOptions: function (t) {
        return (
          (this._options = (function (t, e) {
            var n,
              i = {};
            for (n in t) i[n] = t[n];
            for (n in e) i[n] = e[n];
            return i;
          })(this._options, t)),
          this
        );
      },
      start: function (t) {
        return Ci.call(this, this._targetElement, t), this;
      },
      goToStep: function (t) {
        return Zn.call(this, t), this;
      },
      addStep: function (t) {
        return (
          this._options.steps || (this._options.steps = []),
          this._options.steps.push(t),
          this
        );
      },
      addSteps: function (t) {
        if (t.length) {
          for (var e = 0; e < t.length; e++) this.addStep(t[e]);
          return this;
        }
      },
      goToStepNumber: function (t) {
        return ti.call(this, t), this;
      },
      nextStep: function () {
        return ei.call(this), this;
      },
      previousStep: function () {
        return ni.call(this), this;
      },
      currentStep: function () {
        return ii.call(this);
      },
      exit: function (t) {
        return Si.call(this, this._targetElement, t), this;
      },
      refresh: function () {
        return yi.call(this), this;
      },
      onbeforechange: function (t) {
        if ("function" != typeof t)
          throw new Error(
            "Provided callback for onbeforechange was not a function"
          );
        return (this._introBeforeChangeCallback = t), this;
      },
      onchange: function (t) {
        if ("function" != typeof t)
          throw new Error("Provided callback for onchange was not a function.");
        return (this._introChangeCallback = t), this;
      },
      onafterchange: function (t) {
        if ("function" != typeof t)
          throw new Error(
            "Provided callback for onafterchange was not a function"
          );
        return (this._introAfterChangeCallback = t), this;
      },
      oncomplete: function (t) {
        if ("function" != typeof t)
          throw new Error(
            "Provided callback for oncomplete was not a function."
          );
        return (this._introCompleteCallback = t), this;
      },
      onhintsadded: function (t) {
        if ("function" != typeof t)
          throw new Error(
            "Provided callback for onhintsadded was not a function."
          );
        return (this._hintsAddedCallback = t), this;
      },
      onhintclick: function (t) {
        if ("function" != typeof t)
          throw new Error(
            "Provided callback for onhintclick was not a function."
          );
        return (this._hintClickCallback = t), this;
      },
      onhintclose: function (t) {
        if ("function" != typeof t)
          throw new Error(
            "Provided callback for onhintclose was not a function."
          );
        return (this._hintCloseCallback = t), this;
      },
      onexit: function (t) {
        if ("function" != typeof t)
          throw new Error("Provided callback for onexit was not a function.");
        return (this._introExitCallback = t), this;
      },
      onskip: function (t) {
        if ("function" != typeof t)
          throw new Error("Provided callback for onskip was not a function.");
        return (this._introSkipCallback = t), this;
      },
      onbeforeexit: function (t) {
        if ("function" != typeof t)
          throw new Error(
            "Provided callback for onbeforeexit was not a function."
          );
        return (this._introBeforeExitCallback = t), this;
      },
      addHints: function () {
        return vi.call(this, this._targetElement), this;
      },
      hideHint: function (t) {
        return ai.call(this, t), this;
      },
      hideHints: function () {
        return si.call(this), this;
      },
      showHint: function (t) {
        return ui.call(this, t), this;
      },
      showHints: function () {
        return ci.call(this), this;
      },
      removeHints: function () {
        return hi.call(this), this;
      },
      removeHint: function (t) {
        return pi().call(this, t), this;
      },
      showHintDialog: function (t) {
        return gi.call(this, t), this;
      },
    }),
    Ei
  );
});
