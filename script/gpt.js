(function (E) {
    var window = this;
    if (window.googletag && googletag.evalScripts) {
        googletag.evalScripts();
    }
    if (window.googletag && googletag._loaded_) return; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var aa,
        ba = function (a) {
            var b = 0;
            return function () {
                return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
            };
        },
        ca =
            "function" == typeof Object.defineProperties
                ? Object.defineProperty
                : function (a, b, c) {
                      if (a == Array.prototype || a == Object.prototype) return a;
                      a[b] = c.value;
                      return a;
                  },
        da = function (a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c;
            }
            throw Error("Cannot find global object");
        },
        ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        m = {},
        ia = {},
        n = function (a, b) {
            var c = ia[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b];
        },
        q = function (a, b, c) {
            if (b)
                a: {
                    var d = a.split(".");
                    a = 1 === d.length;
                    var e = d[0],
                        f;
                    !a && e in m ? (f = m) : (f = ea);
                    for (e = 0; e < d.length - 1; e++) {
                        var g = d[e];
                        if (!(g in f)) break a;
                        f = f[g];
                    }
                    d = d[d.length - 1];
                    c = fa && "es6" === c ? f[d] : null;
                    b = b(c);
                    null != b &&
                        (a
                            ? ca(m, d, { configurable: !0, writable: !0, value: b })
                            : b !== c && (void 0 === ia[d] && ((a = (1e9 * Math.random()) >>> 0), (ia[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d)), ca(f, ia[d], { configurable: !0, writable: !0, value: b })));
                }
        };
    q(
        "Symbol",
        function (a) {
            if (a) return a;
            var b = function (f, g) {
                this.g = f;
                ca(this, "description", { configurable: !0, writable: !0, value: g });
            };
            b.prototype.toString = function () {
                return this.g;
            };
            var c = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
                d = 0,
                e = function (f) {
                    if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                    return new b(c + (f || "") + "_" + d++, f);
                };
            return e;
        },
        "es6"
    );
    q(
        "Symbol.iterator",
        function (a) {
            if (a) return a;
            a = (0, m.Symbol)("Symbol.iterator");
            for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
                var d = ea[b[c]];
                "function" === typeof d &&
                    "function" != typeof d.prototype[a] &&
                    ca(d.prototype, a, {
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            return ja(ba(this));
                        },
                    });
            }
            return a;
        },
        "es6"
    );
    var ja = function (a) {
            a = { next: a };
            a[n(m.Symbol, "iterator")] = function () {
                return this;
            };
            return a;
        },
        ka = function (a) {
            return (a.raw = a);
        },
        r = function (a) {
            var b = "undefined" != typeof m.Symbol && n(m.Symbol, "iterator") && a[n(m.Symbol, "iterator")];
            return b ? b.call(a) : { next: ba(a) };
        },
        la = function (a) {
            for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
            return c;
        },
        u = function (a) {
            return a instanceof Array ? a : la(r(a));
        },
        ma =
            "function" == typeof Object.create
                ? Object.create
                : function (a) {
                      var b = function () {};
                      b.prototype = a;
                      return new b();
                  },
        na;
    if (fa && "function" == typeof Object.setPrototypeOf) na = Object.setPrototypeOf;
    else {
        var oa;
        a: {
            var pa = { a: !0 },
                qa = {};
            try {
                qa.__proto__ = pa;
                oa = qa.a;
                break a;
            } catch (a) {}
            oa = !1;
        }
        na = oa
            ? function (a, b) {
                  a.__proto__ = b;
                  if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                  return a;
              }
            : null;
    }
    var ra = na,
        v = function (a, b) {
            a.prototype = ma(b.prototype);
            a.prototype.constructor = a;
            if (ra) ra(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d);
                        } else a[c] = b[c];
            a.La = b.prototype;
        },
        w = function () {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b;
        },
        x = function (a, b) {
            return Object.prototype.hasOwnProperty.call(a, b);
        },
        sa =
            fa && "function" == typeof n(Object, "assign")
                ? n(Object, "assign")
                : function (a, b) {
                      for (var c = 1; c < arguments.length; c++) {
                          var d = arguments[c];
                          if (d) for (var e in d) x(d, e) && (a[e] = d[e]);
                      }
                      return a;
                  };
    q(
        "Object.assign",
        function (a) {
            return a || sa;
        },
        "es6"
    );
    q(
        "Array.prototype.find",
        function (a) {
            return a
                ? a
                : function (b, c) {
                      a: {
                          var d = this;
                          d instanceof String && (d = String(d));
                          for (var e = d.length, f = 0; f < e; f++) {
                              var g = d[f];
                              if (b.call(c, g, f, d)) {
                                  b = g;
                                  break a;
                              }
                          }
                          b = void 0;
                      }
                      return b;
                  };
        },
        "es6"
    );
    q(
        "WeakMap",
        function (a) {
            function b() {}
            function c(g) {
                var h = typeof g;
                return ("object" === h && null !== g) || "function" === h;
            }
            if (
                (function () {
                    if (!a || !Object.seal) return !1;
                    try {
                        var g = Object.seal({}),
                            h = Object.seal({}),
                            k = new a([
                                [g, 2],
                                [h, 3],
                            ]);
                        if (2 != k.get(g) || 3 != k.get(h)) return !1;
                        k.delete(g);
                        k.set(h, 4);
                        return !k.has(g) && 4 == k.get(h);
                    } catch (l) {
                        return !1;
                    }
                })()
            )
                return a;
            var d = "$jscomp_hidden_" + Math.random(),
                e = 0,
                f = function (g) {
                    this.g = (e += Math.random() + 1).toString();
                    if (g) {
                        g = r(g);
                        for (var h; !(h = g.next()).done; ) (h = h.value), this.set(h[0], h[1]);
                    }
                };
            f.prototype.set = function (g, h) {
                if (!c(g)) throw Error("Invalid WeakMap key");
                if (!x(g, d)) {
                    var k = new b();
                    ca(g, d, { value: k });
                }
                if (!x(g, d)) throw Error("WeakMap key fail: " + g);
                g[d][this.g] = h;
                return this;
            };
            f.prototype.get = function (g) {
                return c(g) && x(g, d) ? g[d][this.g] : void 0;
            };
            f.prototype.has = function (g) {
                return c(g) && x(g, d) && x(g[d], this.g);
            };
            f.prototype.delete = function (g) {
                return c(g) && x(g, d) && x(g[d], this.g) ? delete g[d][this.g] : !1;
            };
            return f;
        },
        "es6"
    );
    q(
        "Map",
        function (a) {
            if (
                (function () {
                    if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                    try {
                        var h = Object.seal({ x: 4 }),
                            k = new a(r([[h, "s"]]));
                        if ("s" != k.get(h) || 1 != k.size || k.get({ x: 4 }) || k.set({ x: 4 }, "t") != k || 2 != k.size) return !1;
                        var l = k.entries(),
                            p = l.next();
                        if (p.done || p.value[0] != h || "s" != p.value[1]) return !1;
                        p = l.next();
                        return p.done || 4 != p.value[0].x || "t" != p.value[1] || !l.next().done ? !1 : !0;
                    } catch (t) {
                        return !1;
                    }
                })()
            )
                return a;
            var b = new m.WeakMap(),
                c = function (h) {
                    this.h = {};
                    this.g = f();
                    this.size = 0;
                    if (h) {
                        h = r(h);
                        for (var k; !(k = h.next()).done; ) (k = k.value), this.set(k[0], k[1]);
                    }
                };
            c.prototype.set = function (h, k) {
                h = 0 === h ? 0 : h;
                var l = d(this, h);
                l.list || (l.list = this.h[l.id] = []);
                l.m ? (l.m.value = k) : ((l.m = { next: this.g, s: this.g.s, head: this.g, key: h, value: k }), l.list.push(l.m), (this.g.s.next = l.m), (this.g.s = l.m), this.size++);
                return this;
            };
            c.prototype.delete = function (h) {
                h = d(this, h);
                return h.m && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], (h.m.s.next = h.m.next), (h.m.next.s = h.m.s), (h.m.head = null), this.size--, !0) : !1;
            };
            c.prototype.clear = function () {
                this.h = {};
                this.g = this.g.s = f();
                this.size = 0;
            };
            c.prototype.has = function (h) {
                return !!d(this, h).m;
            };
            c.prototype.get = function (h) {
                return (h = d(this, h).m) && h.value;
            };
            c.prototype.entries = function () {
                return e(this, function (h) {
                    return [h.key, h.value];
                });
            };
            c.prototype.keys = function () {
                return e(this, function (h) {
                    return h.key;
                });
            };
            c.prototype.values = function () {
                return e(this, function (h) {
                    return h.value;
                });
            };
            c.prototype.forEach = function (h, k) {
                for (var l = this.entries(), p; !(p = l.next()).done; ) (p = p.value), h.call(k, p[1], p[0], this);
            };
            c.prototype[n(m.Symbol, "iterator")] = c.prototype.entries;
            var d = function (h, k) {
                    var l = k && typeof k;
                    "object" == l || "function" == l ? (b.has(k) ? (l = b.get(k)) : ((l = "" + ++g), b.set(k, l))) : (l = "p_" + k);
                    var p = h.h[l];
                    if (p && x(h.h, l))
                        for (h = 0; h < p.length; h++) {
                            var t = p[h];
                            if ((k !== k && t.key !== t.key) || k === t.key) return { id: l, list: p, index: h, m: t };
                        }
                    return { id: l, list: p, index: -1, m: void 0 };
                },
                e = function (h, k) {
                    var l = h.g;
                    return ja(function () {
                        if (l) {
                            for (; l.head != h.g; ) l = l.s;
                            for (; l.next != l.head; ) return (l = l.next), { done: !1, value: k(l) };
                            l = null;
                        }
                        return { done: !0, value: void 0 };
                    });
                },
                f = function () {
                    var h = {};
                    return (h.s = h.next = h.head = h);
                },
                g = 0;
            return c;
        },
        "es6"
    );
    var ta = function (a, b) {
            a instanceof String && (a += "");
            var c = 0,
                d = !1,
                e = {
                    next: function () {
                        if (!d && c < a.length) {
                            var f = c++;
                            return { value: b(f, a[f]), done: !1 };
                        }
                        d = !0;
                        return { done: !0, value: void 0 };
                    },
                };
            e[n(m.Symbol, "iterator")] = function () {
                return e;
            };
            return e;
        },
        ua = function (a, b, c) {
            if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
            return a + "";
        };
    q(
        "String.prototype.startsWith",
        function (a) {
            return a
                ? a
                : function (b, c) {
                      var d = ua(this, b, "startsWith"),
                          e = d.length,
                          f = b.length;
                      c = Math.max(0, Math.min(c | 0, d.length));
                      for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
                      return g >= f;
                  };
        },
        "es6"
    );
    q(
        "String.prototype.repeat",
        function (a) {
            return a
                ? a
                : function (b) {
                      var c = ua(this, null, "repeat");
                      if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
                      b |= 0;
                      for (var d = ""; b; ) if ((b & 1 && (d += c), (b >>>= 1))) c += c;
                      return d;
                  };
        },
        "es6"
    );
    q(
        "globalThis",
        function (a) {
            return a || ea;
        },
        "es_2020"
    );
    q(
        "Set",
        function (a) {
            if (
                (function () {
                    if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                    try {
                        var c = Object.seal({ x: 4 }),
                            d = new a(r([c]));
                        if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({ x: 4 }) != d || 2 != d.size) return !1;
                        var e = d.entries(),
                            f = e.next();
                        if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                        f = e.next();
                        return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done;
                    } catch (g) {
                        return !1;
                    }
                })()
            )
                return a;
            var b = function (c) {
                this.g = new m.Map();
                if (c) {
                    c = r(c);
                    for (var d; !(d = c.next()).done; ) this.add(d.value);
                }
                this.size = this.g.size;
            };
            b.prototype.add = function (c) {
                c = 0 === c ? 0 : c;
                this.g.set(c, c);
                this.size = this.g.size;
                return this;
            };
            b.prototype.delete = function (c) {
                c = this.g.delete(c);
                this.size = this.g.size;
                return c;
            };
            b.prototype.clear = function () {
                this.g.clear();
                this.size = 0;
            };
            b.prototype.has = function (c) {
                return this.g.has(c);
            };
            b.prototype.entries = function () {
                return this.g.entries();
            };
            b.prototype.values = function () {
                return n(this.g, "values").call(this.g);
            };
            b.prototype.keys = n(b.prototype, "values");
            b.prototype[n(m.Symbol, "iterator")] = n(b.prototype, "values");
            b.prototype.forEach = function (c, d) {
                var e = this;
                this.g.forEach(function (f) {
                    return c.call(d, f, f, e);
                });
            };
            return b;
        },
        "es6"
    );
    q(
        "String.prototype.padStart",
        function (a) {
            return a
                ? a
                : function (b, c) {
                      var d = ua(this, null, "padStart");
                      b -= d.length;
                      c = void 0 !== c ? String(c) : " ";
                      return (
                          (0 < b && c
                              ? n(c, "repeat")
                                    .call(c, Math.ceil(b / c.length))
                                    .substring(0, b)
                              : "") + d
                      );
                  };
        },
        "es8"
    );
    q(
        "Array.prototype.keys",
        function (a) {
            return a
                ? a
                : function () {
                      return ta(this, function (b) {
                          return b;
                      });
                  };
        },
        "es6"
    );
    q(
        "Array.prototype.values",
        function (a) {
            return a
                ? a
                : function () {
                      return ta(this, function (b, c) {
                          return c;
                      });
                  };
        },
        "es8"
    );
    q(
        "Object.is",
        function (a) {
            return a
                ? a
                : function (b, c) {
                      return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
                  };
        },
        "es6"
    );
    q(
        "Array.prototype.includes",
        function (a) {
            return a
                ? a
                : function (b, c) {
                      var d = this;
                      d instanceof String && (d = String(d));
                      var e = d.length;
                      c = c || 0;
                      for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                          var f = d[c];
                          if (f === b || n(Object, "is").call(Object, f, b)) return !0;
                      }
                      return !1;
                  };
        },
        "es7"
    );
    q(
        "String.prototype.includes",
        function (a) {
            return a
                ? a
                : function (b, c) {
                      return -1 !== ua(this, b, "includes").indexOf(b, c || 0);
                  };
        },
        "es6"
    );
    var y = this || self,
        va = function (a) {
            a = a.split(".");
            for (var b = y, c = 0; c < a.length; c++) if (((b = b[a[c]]), null == b)) return null;
            return b;
        },
        ya = function (a) {
            return (Object.prototype.hasOwnProperty.call(a, wa) && a[wa]) || (a[wa] = ++xa);
        },
        wa = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
        xa = 0,
        za = function (a, b) {
            a = a.split(".");
            var c = y;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift()); ) a.length || void 0 === b ? (c[d] && c[d] !== Object.prototype[d] ? (c = c[d]) : (c = c[d] = {})) : (c[d] = b);
        };
    var Aa = function (a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        },
        Ia = function (a) {
            if (!Ba.test(a)) return a;
            -1 != a.indexOf("&") && (a = a.replace(Ca, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(Da, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(Ea, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(Fa, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(Ga, "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(Ha, "&#0;"));
            return a;
        },
        Ca = /&/g,
        Da = /</g,
        Ea = />/g,
        Fa = /"/g,
        Ga = /'/g,
        Ha = /\x00/g,
        Ba = /[\x00&<>"']/,
        Ka = function (a, b) {
            var c = 0;
            a = Aa(String(a)).split(".");
            b = Aa(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = Ja(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ja(0 == f[2].length, 0 == g[2].length) || Ja(f[2], g[2]);
                    f = f[3];
                    g = g[3];
                } while (0 == c);
            }
            return c;
        },
        Ja = function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
        };
    function La() {
        var a = y.navigator;
        return a && (a = a.userAgent) ? a : "";
    }
    function Ma(a) {
        return -1 != La().indexOf(a);
    }
    var Na = function (a, b) {
            Array.prototype.forEach.call(a, b, void 0);
        },
        Oa = function (a, b) {
            return Array.prototype.filter.call(a, b, void 0);
        },
        Qa = function (a, b) {
            return Array.prototype.map.call(a, b, void 0);
        };
    function Ra(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a;
                }
            b = -1;
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
    }
    function Sa(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a;
                }
            b = -1;
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
    }
    function Ta(a, b) {
        return 0 <= Array.prototype.indexOf.call(a, b, void 0);
    }
    var Ua = {},
        Va = null,
        Xa = function (a) {
            var b = [];
            Wa(a, function (c) {
                b.push(c);
            });
            return b;
        },
        Wa = function (a, b) {
            function c(k) {
                for (; d < a.length; ) {
                    var l = a.charAt(d++),
                        p = Va[l];
                    if (null != p) return p;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k;
            }
            Ya();
            for (var d = 0; ; ) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b((e << 2) | (f >> 4));
                64 != g && (b(((f << 4) & 240) | (g >> 2)), 64 != h && b(((g << 6) & 192) | h));
            }
        },
        Ya = function () {
            if (!Va) {
                Va = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Ua[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === Va[f] && (Va[f] = e);
                    }
                }
            }
        };
    var Za = "undefined" !== typeof Uint8Array;
    var $a = "function" === typeof m.Symbol && "symbol" === typeof (0, m.Symbol)() ? (0, m.Symbol)(void 0) : void 0;
    function ab(a, b) {
        Object.isFrozen(a) || ($a ? (a[$a] |= b) : void 0 !== a.F ? (a.F |= b) : Object.defineProperties(a, { F: { value: b, configurable: !0, writable: !0, enumerable: !1 } }));
    }
    function bb(a) {
        var b;
        $a ? (b = a[$a]) : (b = a.F);
        return null == b ? 0 : b;
    }
    function cb(a) {
        ab(a, 1);
        return a;
    }
    function db(a) {
        return Array.isArray(a) ? !!(bb(a) & 2) : !1;
    }
    function eb(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as immutable");
        ab(a, 2);
    }
    function fb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
    }
    var gb,
        hb = Object.freeze(cb([])),
        ib = function (a) {
            if (db(a.l)) throw Error("Cannot mutate an immutable Message");
        },
        jb = "undefined" != typeof m.Symbol && "undefined" != typeof m.Symbol.hasInstance;
    function kb(a) {
        return { value: a, configurable: !1, writable: !1, enumerable: !1 };
    }
    function lb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a) && Za && null != a && a instanceof Uint8Array) {
                    var b;
                    void 0 === b && (b = 0);
                    Ya();
                    b = Ua[b];
                    for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                        var g = a[e],
                            h = a[e + 1],
                            k = a[e + 2],
                            l = b[g >> 2];
                        g = b[((g & 3) << 4) | (h >> 4)];
                        h = b[((h & 15) << 2) | (k >> 6)];
                        k = b[k & 63];
                        c[f++] = l + g + h + k;
                    }
                    l = 0;
                    k = d;
                    switch (a.length - e) {
                        case 2:
                            (l = a[e + 1]), (k = b[(l & 15) << 2] || d);
                        case 1:
                            (a = a[e]), (c[f] = b[a >> 2] + b[((a & 3) << 4) | (l >> 4)] + k + d);
                    }
                    return c.join("");
                }
        }
        return a;
    }
    function mb(a) {
        var b = nb;
        b = void 0 === b ? ob : b;
        return pb(a, b);
    }
    function qb(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = pb(a, b);
            else if (fb(a)) {
                var c = {},
                    d;
                for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = qb(a[d], b));
                a = c;
            } else a = b(a);
            return a;
        }
    }
    function pb(a, b) {
        for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = qb(c[d], b);
        Array.isArray(a) && bb(a) & 1 && cb(c);
        return c;
    }
    function nb(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = lb(a);
        return Array.isArray(a) ? mb(a) : a;
    }
    function ob(a) {
        return Za && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a;
    }
    var A = function (a, b, c) {
            return -1 === b ? null : b >= a.j ? (a.h ? a.h[b] : void 0) : (void 0 === c ? 0 : c) && a.h && ((c = a.h[b]), null != c) ? c : a.l[b + a.i];
        },
        B = function (a, b, c, d, e) {
            d = void 0 === d ? !1 : d;
            (void 0 === e ? 0 : e) || ib(a);
            b < a.j && !d ? (a.l[b + a.i] = c) : ((a.h || (a.h = a.l[a.j + a.i] = {}))[b] = c);
            return a;
        },
        rb = function (a, b, c, d) {
            c = void 0 === c ? !0 : c;
            d = void 0 === d ? !1 : d;
            var e = A(a, b, d);
            null == e && (e = hb);
            if (db(a.l)) c && (eb(e), Object.freeze(e));
            else if (e === hb || db(e)) (e = cb(e.slice())), B(a, b, e, d);
            return e;
        },
        C = function (a, b, c) {
            a = A(a, b);
            return null == a ? c : a;
        },
        sb = function (a, b) {
            a = A(a, b);
            a = null == a ? a : !!a;
            return null == a ? !1 : a;
        },
        tb = function (a, b, c) {
            a = A(a, b);
            a = null == a ? a : +a;
            return null == a ? (void 0 === c ? 0 : c) : a;
        },
        ub = function (a, b, c) {
            var d = void 0 === d ? !1 : d;
            return B(a, b, null == c ? cb([]) : Array.isArray(c) ? cb(c) : c, d);
        };
    function D(a, b, c, d) {
        ib(a);
        c !== d ? B(a, b, c) : B(a, b, void 0, !1, !1);
        return a;
    }
    var yb = function (a, b, c, d) {
            ib(a);
            (c = vb(a, c)) && c !== b && null != d && (a.g && c in a.g && (a.g[c] = void 0), B(a, c, void 0));
            return B(a, b, d);
        },
        vb = function (a, b) {
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                null != A(a, e) && (0 !== c && B(a, c, void 0, !1, !0), (c = e));
            }
            return c;
        },
        F = function (a, b, c) {
            if (-1 === c) return null;
            a.g || (a.g = {});
            var d = a.g[c];
            if (d) return d;
            var e = A(a, c, !1);
            if (null == e) return d;
            b = new b(e);
            db(a.l) && eb(b.l);
            return (a.g[c] = b);
        },
        G = function (a, b, c) {
            a.g || (a.g = {});
            var d = db(a.l),
                e = a.g[c];
            if (!e) {
                var f = rb(a, c, !0, !1);
                e = [];
                d = d || db(f);
                for (var g = 0; g < f.length; g++) (e[g] = new b(f[g])), d && eb(e[g].l);
                d && (eb(e), Object.freeze(e));
                a.g[c] = e;
            }
            return e;
        },
        zb = function (a, b, c) {
            var d = void 0 === d ? !1 : d;
            ib(a);
            a.g || (a.g = {});
            var e = c ? c.l : c;
            a.g[b] = c;
            return B(a, b, e, d);
        },
        Ab = function (a, b, c, d) {
            ib(a);
            a.g || (a.g = {});
            var e = d ? d.l : d;
            a.g[b] = d;
            return yb(a, b, c, e);
        },
        Bb = function (a, b, c) {
            var d = void 0 === d ? !1 : d;
            ib(a);
            if (c) {
                var e = cb([]);
                for (var f = 0; f < c.length; f++) e[f] = c[f].l;
                a.g || (a.g = {});
                a.g[b] = c;
            } else a.g && (a.g[b] = void 0), (e = hb);
            return B(a, b, e, d);
        },
        Cb = function (a, b, c) {
            return C(a, b, void 0 === c ? "" : c);
        },
        Db = function (a, b, c) {
            b = vb(a, c) === b ? b : -1;
            return C(a, b, 0);
        };
    var Fb = function (a, b, c) {
        a || (a = Eb);
        Eb = null;
        var d = this.constructor.messageId;
        a || (a = d ? [d] : []);
        this.i = (d ? 0 : -1) - (this.constructor.g || 0);
        this.g = void 0;
        this.l = a;
        a: {
            d = this.l.length;
            a = d - 1;
            if (d && ((d = this.l[a]), fb(d))) {
                this.j = a - this.i;
                this.h = d;
                break a;
            }
            void 0 !== b && -1 < b ? ((this.j = Math.max(b, a + 1 - this.i)), (this.h = void 0)) : (this.j = Number.MAX_VALUE);
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (((a = c[b]), a < this.j)) (a += this.i), (d = this.l[a]) ? Array.isArray(d) && cb(d) : (this.l[a] = hb);
                else {
                    d = this.h || (this.h = this.l[this.j + this.i] = {});
                    var e = d[a];
                    e ? Array.isArray(e) && cb(e) : (d[a] = hb);
                }
    };
    Fb.prototype.toJSON = function () {
        var a = this.l;
        return gb ? a : mb(a);
    };
    var Hb = function (a) {
        gb = !0;
        try {
            return JSON.stringify(a.toJSON(), Gb);
        } finally {
            gb = !1;
        }
    };
    function Gb(a, b) {
        return lb(b);
    }
    var Eb;
    var Ib = function () {
        Fb.apply(this, arguments);
    };
    v(Ib, Fb);
    if (jb) {
        var Jb = {};
        Object.defineProperties(
            Ib,
            ((Jb[m.Symbol.hasInstance] = kb(function () {
                throw Error("Cannot perform instanceof checks for MutableMessage");
            })),
            Jb)
        );
    }
    var H = function () {
        Ib.apply(this, arguments);
    };
    v(H, Ib);
    if (jb) {
        var Kb = {};
        Object.defineProperties(H, ((Kb[m.Symbol.hasInstance] = kb(Object[m.Symbol.hasInstance])), Kb));
    }
    var Nb = function (a, b) {
        this.h = (a === Lb && b) || "";
        this.i = Mb;
    };
    Nb.prototype.C = !0;
    Nb.prototype.g = function () {
        return this.h;
    };
    var Ob = function (a) {
            return a instanceof Nb && a.constructor === Nb && a.i === Mb ? a.h : "type_error:Const";
        },
        I = function (a) {
            return new Nb(Lb, a);
        },
        Mb = {},
        Lb = {};
    function Pb(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b;
    }
    var Qb = { area: !0, base: !0, br: !0, col: !0, command: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 };
    var J = function (a, b) {
        this.i = b === Rb ? a : "";
    };
    J.prototype.C = !0;
    J.prototype.g = function () {
        return this.i.toString();
    };
    J.prototype.L = !0;
    J.prototype.h = function () {
        return 1;
    };
    var Vb = function (a, b) {
        a = Sb.exec(Tb(a).toString());
        var c = a[3] || "";
        return new J(a[1] + Ub("?", a[2] || "", b) + Ub("#", c, void 0), Rb);
    };
    J.prototype.toString = function () {
        return this.i + "";
    };
    var Tb = function (a) {
            return a instanceof J && a.constructor === J ? a.i : "type_error:TrustedResourceUrl";
        },
        Sb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Wb = function (a) {
            for (var b = "", c = 0; c < a.length; c++) b += Ob(a[c]);
            return new J(b, Rb);
        },
        Rb = {},
        Ub = function (a, b, c) {
            if (null == c) return b;
            if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        null != g && (b || (b = a), (b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g))));
                    }
                }
            return b;
        };
    var K = function (a, b) {
        this.i = b === Xb ? a : "";
    };
    K.prototype.C = !0;
    K.prototype.g = function () {
        return this.i.toString();
    };
    K.prototype.L = !0;
    K.prototype.h = function () {
        return 1;
    };
    K.prototype.toString = function () {
        return this.i.toString();
    };
    var Yb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Zb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Xb = {},
        $b = new K("about:invalid#zClosurez", Xb);
    var ac = {},
        L = function (a, b, c) {
            this.i = c === ac ? a : "";
            this.j = b;
            this.C = this.L = !0;
        };
    L.prototype.h = function () {
        return this.j;
    };
    L.prototype.g = function () {
        return this.i.toString();
    };
    L.prototype.toString = function () {
        return this.i.toString();
    };
    var bc = function (a) {
            return a instanceof L && a.constructor === L ? a.i : "type_error:SafeHtml";
        },
        cc = function (a) {
            if (a instanceof L) return a;
            var b = "object" == typeof a,
                c = null;
            b && a.L && (c = a.h());
            a = Ia(b && a.C ? a.g() : String(a));
            return new L(a, c, ac);
        },
        gc = function (a, b) {
            var c = { src: a },
                d = {};
            a = {};
            for (var e in c) Object.prototype.hasOwnProperty.call(c, e) && (a[e] = c[e]);
            for (var f in d) Object.prototype.hasOwnProperty.call(d, f) && (a[f] = d[f]);
            if (b)
                for (var g in b)
                    if (Object.prototype.hasOwnProperty.call(b, g)) {
                        e = g.toLowerCase();
                        if (e in c) throw Error("");
                        e in d && delete a[e];
                        a[g] = b[g];
                    }
            var h;
            b = null;
            g = "";
            if (a)
                for (k in a)
                    if (Object.prototype.hasOwnProperty.call(a, k)) {
                        if (!dc.test(k)) throw Error("");
                        d = a[k];
                        if (null != d) {
                            c = k;
                            if (d instanceof Nb) d = Ob(d);
                            else {
                                if ("style" == c.toLowerCase()) throw Error("");
                                if (/^on/i.test(c)) throw Error("");
                                if (c.toLowerCase() in ec)
                                    if (d instanceof J) d = Tb(d).toString();
                                    else if (d instanceof K) d = d instanceof K && d.constructor === K ? d.i : "type_error:SafeUrl";
                                    else if ("string" === typeof d)
                                        d instanceof K ||
                                            ((d = "object" == typeof d && d.C ? d.g() : String(d)), Zb.test(d) ? (d = new K(d, Xb)) : ((d = String(d)), (d = d.replace(/(%0A|%0D)/g, "")), (d = d.match(Yb) ? new K(d, Xb) : null))),
                                            (d = (d || $b).g());
                                    else throw Error("");
                            }
                            d.C && (d = d.g());
                            c = c + '="' + Ia(String(d)) + '"';
                            g += " " + c;
                        }
                    }
            var k = "<script" + g;
            null == h ? (h = []) : Array.isArray(h) || (h = [h]);
            !0 === Qb.script ? (k += ">") : ((h = fc(h)), (k += ">" + bc(h).toString() + "\x3c/script>"), (b = h.h()));
            (a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? (b = 0) : (b = null));
            return new L(k, b, ac);
        },
        ic = function (a) {
            var b = cc(hc),
                c = b.h(),
                d = [],
                e = function (f) {
                    Array.isArray(f) ? f.forEach(e) : ((f = cc(f)), d.push(bc(f).toString()), (f = f.h()), 0 == c ? (c = f) : 0 != f && c != f && (c = null));
                };
            a.forEach(e);
            return new L(d.join(bc(b).toString()), c, ac);
        },
        fc = function (a) {
            return ic(Array.prototype.slice.call(arguments));
        },
        dc = /^[a-zA-Z0-9-]+$/,
        ec = { action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0 },
        hc = new L((y.trustedTypes && y.trustedTypes.emptyHTML) || "", 0, ac); /*

 SPDX-License-Identifier: Apache-2.0
*/
    var jc = {};
    var kc = function () {},
        lc = function (a) {
            this.g = a;
        };
    v(lc, kc);
    lc.prototype.toString = function () {
        return this.g.toString();
    };
    function mc(a) {
        return new lc(a, jc);
    }
    function nc(a) {
        if (a instanceof kc)
            if (a instanceof lc) a = a.g;
            else throw Error("");
        else a = Tb(a);
        return a;
    }
    function oc(a) {
        var b,
            c,
            d = null == (c = (b = ((a.ownerDocument && a.ownerDocument.defaultView) || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b);
    }
    function pc(a, b) {
        a.write(bc(b));
    }
    var qc = function (a) {
        var b = !1,
            c;
        return function () {
            b || ((c = a()), (b = !0));
            return c;
        };
    };
    var rc = function (a, b) {
        a.addEventListener && a.addEventListener("load", b, !1);
    };
    var tc = function () {
            a: {
                var a = y.document;
                if (a.querySelector && (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && sc.test(a)) break a;
                a = "";
            }
            return a;
        },
        sc = /^[\w+/_-]+[=]{0,2}$/;
    var uc = function () {
        return Ma("iPad") || (Ma("Android") && !Ma("Mobile")) || Ma("Silk");
    };
    var vc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        wc = function (a) {
            return a ? decodeURI(a) : a;
        },
        xc = /#|$/,
        yc = function (a, b) {
            var c = a.search(xc);
            a: {
                var d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f) if (((f = a.charCodeAt(d + e)), !f || 61 == f || 38 == f || 35 == f)) break a;
                    d += e + 1;
                }
                d = -1;
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "));
        };
    var Cc = function (a, b) {
            if (!zc() && !Ac()) {
                var c = Math.random();
                if (c < b) return (c = Bc()), a[Math.floor(c * a.length)];
            }
            return null;
        },
        Bc = function () {
            if (!m.globalThis.crypto) return Math.random();
            try {
                var a = new Uint32Array(1);
                m.globalThis.crypto.getRandomValues(a);
                return a[0] / 65536 / 65536;
            } catch (b) {
                return Math.random();
            }
        },
        Dc = function (a, b) {
            if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
        },
        Ec = function (a) {
            var b = a.length;
            if (0 == b) return 0;
            for (var c = 305419896, d = 0; d < b; d++) c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
            return 0 < c ? c : 4294967296 + c;
        },
        Ac = qc(function () {
            return Array.prototype.some.call(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Fc, void 0) || 1e-4 > Math.random();
        }),
        zc = qc(function () {
            return Fc("MSIE");
        }),
        Fc = function (a) {
            return -1 != La().indexOf(a);
        },
        Gc = /^(-?[0-9.]{1,30})$/,
        Hc = function (a) {
            var b = void 0 === b ? null : b;
            if (!Gc.test(a)) return b;
            a = Number(a);
            return isNaN(a) ? b : a;
        },
        Ic = qc(function () {
            return !uc() && (Ma("iPod") || Ma("iPhone") || Ma("Android") || Ma("IEMobile")) ? 2 : uc() ? 1 : 0;
        }),
        Jc = function (a, b) {
            a = void 0 === a ? "" : a;
            b = void 0 === b ? window : b;
            return (b = wc(b.location.href.match(vc)[3] || null)) ? Ec(b + a) : null;
        },
        Lc = function (a, b) {
            0 != a.length &&
                b.head &&
                a.forEach(function (c) {
                    if (c && c && b.head) {
                        var d = Kc("META");
                        b.head.appendChild(d);
                        d.httpEquiv = "origin-trial";
                        d.content = c;
                    }
                });
        },
        Mc = function (a) {
            if ("number" !== typeof a.goog_pvsid)
                try {
                    Object.defineProperty(a, "goog_pvsid", { value: Math.floor(Math.random() * Math.pow(2, 52)), configurable: !1 });
                } catch (b) {}
            return Number(a.goog_pvsid) || -1;
        },
        Kc = function (a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase());
        };
    function Nc(a) {
        var b = w.apply(1, arguments);
        if (0 === b.length) return mc(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return mc(c.join(""));
    }
    var Oc = "a".charCodeAt(),
        Pc = Pb({ Ca: 0, Ba: 1, ya: 2, ta: 3, za: 4, ua: 5, Aa: 6, wa: 7, xa: 8, sa: 9, va: 10 }),
        Qc = Pb({ Ea: 0, Fa: 1, Da: 2 });
    var Rc = function (a) {
            if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.h = a;
            this.g = 0;
        },
        Uc = function (a) {
            var b = M(a, 16);
            return !0 === !!M(a, 1)
                ? ((a = Sc(a)),
                  a.forEach(function (c) {
                      if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
                  }),
                  a)
                : Tc(a, b);
        },
        Sc = function (a) {
            for (var b = M(a, 12), c = []; b--; ) {
                var d = !0 === !!M(a, 1),
                    e = M(a, 16);
                if (d) for (d = M(a, 16); e <= d; e++) c.push(e);
                else c.push(e);
            }
            c.sort(function (f, g) {
                return f - g;
            });
            return c;
        },
        Tc = function (a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (M(a, 1)) {
                    var f = e + 1;
                    if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f);
                }
            return d;
        },
        M = function (a, b) {
            if (a.g + b > a.h.length) throw Error("Requested length " + b + " is past end of string.");
            var c = a.h.substring(a.g, a.g + b);
            a.g += b;
            return parseInt(c, 2);
        };
    var Wc = function (a, b) {
            try {
                var c = Xa(a.split(".")[0])
                        .map(function (e) {
                            return ((aa = e.toString(2)), n(aa, "padStart")).call(aa, 8, "0");
                        })
                        .join(""),
                    d = new Rc(c);
                c = {};
                c.tcString = a;
                c.gdprApplies = !0;
                d.g += 78;
                c.cmpId = M(d, 12);
                c.cmpVersion = M(d, 12);
                d.g += 30;
                c.tcfPolicyVersion = M(d, 6);
                c.isServiceSpecific = !!M(d, 1);
                c.useNonStandardStacks = !!M(d, 1);
                c.specialFeatureOptins = Vc(Tc(d, 12, Qc), Qc);
                c.purpose = { consents: Vc(Tc(d, 24, Pc), Pc), legitimateInterests: Vc(Tc(d, 24, Pc), Pc) };
                c.purposeOneTreatment = !!M(d, 1);
                c.publisherCC = String.fromCharCode(Oc + M(d, 6)) + String.fromCharCode(Oc + M(d, 6));
                c.vendor = { consents: Vc(Uc(d), b), legitimateInterests: Vc(Uc(d), b) };
                return c;
            } catch (e) {
                return null;
            }
        },
        Vc = function (a, b) {
            var c = {};
            if (Array.isArray(b) && 0 !== b.length) {
                b = r(b);
                for (var d = b.next(); !d.done; d = b.next()) (d = d.value), (c[d] = -1 !== a.indexOf(d));
            } else for (a = r(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
            delete c[0];
            return c;
        };
    function Xc(a) {
        return function () {
            var b = w.apply(0, arguments);
            try {
                return a.apply(this, b);
            } catch (c) {}
        };
    }
    var Yc = Xc(function (a) {
        var b = [],
            c = {};
        a = r(a);
        for (var d = a.next(); !d.done; c = { D: c.D }, d = a.next())
            (c.D = d.value),
                Xc(
                    (function (e) {
                        return function () {
                            b.push('[{"' + e.D.ha + '":' + Hb(e.D.message) + "}]");
                        };
                    })(c)
                )();
        return "[[" + b.join(",") + "]]";
    });
    var Zc = function (a, b) {
        if (m.globalThis.fetch) m.globalThis.fetch(a, { method: "POST", body: b, keepalive: 65536 > b.length, credentials: "omit", mode: "no-cors", redirect: "follow" });
        else {
            var c = new XMLHttpRequest();
            c.open("POST", a, !0);
            c.send(b);
        }
    };
    function $c(a) {
        a.ga.apply(
            a,
            u(
                w.apply(1, arguments).map(function (b) {
                    return { ha: 2, message: b };
                })
            )
        );
    }
    function ad(a) {
        a.ga.apply(
            a,
            u(
                w.apply(1, arguments).map(function (b) {
                    return { ha: 4, message: b };
                })
            )
        );
    }
    var bd = function (a) {
        var b = void 0 === b ? Zc : b;
        this.j = void 0 === a ? 1e3 : a;
        this.i = b;
        this.h = [];
        this.g = null;
    };
    bd.prototype.ga = function () {
        var a = w.apply(0, arguments),
            b = this;
        Xc(function () {
            b.h.push.apply(b.h, u(a));
            var c = Xc(function () {
                var d = Yc(b.h);
                b.i("https://pagead2.googlesyndication.com/pagead/ping?e=1", d);
                b.h = [];
                b.g = null;
            });
            100 <= b.h.length ? (null !== b.g && clearTimeout(b.g), (b.g = setTimeout(c, 0))) : null === b.g && (b.g = setTimeout(c, b.j));
        })();
    };
    var cd = function (a, b) {
            this.g = a;
            this.defaultValue = void 0 === b ? !1 : b;
        },
        dd = function (a) {
            this.g = a;
            this.defaultValue = 0;
        },
        ed = function (a, b) {
            b = void 0 === b ? [] : b;
            this.g = a;
            this.defaultValue = b;
        };
    var fd = new cd(427549339),
        gd = new dd(428094087),
        hd = new cd(399544548, !0),
        id = new dd(24),
        jd = new ed(1939),
        kd = new ed(1934, [
            "A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
            "A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
            "A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
        ]),
        ld = new cd(203),
        md = new cd(434462125),
        nd = new cd(1928),
        od = new cd(1941),
        pd = new cd(370946349),
        qd = new cd(392736476),
        rd = new dd(406149835),
        sd = new ed(1932, [
            "AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=",
            "Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            "A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            "AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            "A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
        ]),
        td = new dd(432059203),
        ud = new dd(1935);
    var wd = function (a) {
        H.call(this, a, -1, vd);
    };
    v(wd, H);
    var xd = function (a) {
        H.call(this, a);
    };
    v(xd, H);
    var yd = function (a) {
        H.call(this, a);
    };
    v(yd, H);
    var vd = [7];
    var zd = function (a) {
        this.g = a || { cookie: "" };
    };
    zd.prototype.set = function (a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Ja;
            d = c.Ka || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.oa;
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie =
            a +
            "=" +
            b +
            (f ? ";domain=" + f : "") +
            (g ? ";path=" + g : "") +
            (0 > h ? "" : 0 == h ? ";expires=" + new Date(1970, 1, 1).toUTCString() : ";expires=" + new Date(Date.now() + 1e3 * h).toUTCString()) +
            (d ? ";secure" : "") +
            (null != e ? ";samesite=" + e : "");
    };
    zd.prototype.get = function (a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Aa(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return "";
        }
        return b;
    };
    zd.prototype.isEmpty = function () {
        return !this.g.cookie;
    };
    zd.prototype.clear = function () {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) (e = Aa(a[f])), (d = e.indexOf("=")), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) (c = b[a]), this.get(c), this.set(c, "", { oa: 0, path: void 0, domain: void 0 });
    };
    function Ad(a) {
        return (a = Bd(a)) ? F(a, xd, 4) : null;
    }
    function Bd(a) {
        a = (a = new zd(a).get("FCCDCF", "")) ? a : null;
        try {
            if (a)
                if (null == a || "" == a) var b = new wd();
                else {
                    var c = JSON.parse(a);
                    if (!Array.isArray(c)) throw ((b = typeof c), Error("Expected to deserialize an Array but got " + ("object" != b ? b : c ? (Array.isArray(c) ? "array" : b) : "null") + ": " + c));
                    Eb = c;
                    var d = new wd(c);
                    Eb = null;
                    b = d;
                }
            else b = null;
            return b;
        } catch (e) {
            return null;
        }
    }
    var Cd = function (a) {
            this.g = a;
            this.h = null;
        },
        Ed = function (a) {
            a.__tcfapiPostMessageReady || Dd(new Cd(a));
        },
        Dd = function (a) {
            a.h = function (b) {
                var c = "string" == typeof b.data;
                try {
                    var d = c ? JSON.parse(b.data) : b.data;
                } catch (f) {
                    return;
                }
                var e = d.__tcfapiCall;
                !e ||
                    ("ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command) ||
                    a.g.__tcfapi(
                        e.command,
                        e.version,
                        function (f, g) {
                            var h = {};
                            h.__tcfapiReturn = "removeEventListener" === e.command ? { success: f, callId: e.callId } : { returnValue: f, success: g, callId: e.callId };
                            f = c ? JSON.stringify(h) : h;
                            b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                            return f;
                        },
                        e.parameter
                    );
            };
            a.g.addEventListener("message", a.h);
            a.g.__tcfapiPostMessageReady = !0;
        };
    var Fd = function (a, b) {
        var c = a.document,
            d = function () {
                if (!a.frames[b])
                    if (c.body) {
                        var e = Kc("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e);
                    } else a.setTimeout(d, 5);
            };
        d();
    };
    var Gd = function (a) {
            this.g = a;
            this.h = a.document;
            this.o = (a = (a = Bd(this.h)) ? F(a, yd, 5) || null : null) ? A(a, 2) : null;
            this.i = (a = Ad(this.h)) && null != A(a, 1) ? A(a, 1) : null;
            this.j = (a = Ad(this.h)) && null != A(a, 2) ? A(a, 2) : null;
        },
        Jd = function (a) {
            a.__uspapi || a.frames.__uspapiLocator || ((a = new Gd(a)), Hd(a), Id(a));
        },
        Hd = function (a) {
            !a.o ||
                a.g.__uspapi ||
                a.g.frames.__uspapiLocator ||
                ((a.g.__uspapiManager = "fc"),
                Fd(a.g, "__uspapiLocator"),
                za("__uspapi", function () {
                    return a.B.apply(a, u(w.apply(0, arguments)));
                }));
        };
    Gd.prototype.B = function (a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({ version: 1, uspString: this.o }, !0);
    };
    var Id = function (a) {
        !a.i ||
            a.g.__tcfapi ||
            a.g.frames.__tcfapiLocator ||
            ((a.g.__tcfapiManager = "fc"),
            Fd(a.g, "__tcfapiLocator"),
            (a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || []),
            za("__tcfapi", function () {
                return a.u.apply(a, u(w.apply(0, arguments)));
            }),
            Ed(a.g));
    };
    Gd.prototype.u = function (a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && 2 !== b) c(null, !1);
            else
                switch (((b = this.g.__tcfapiEventListeners), a)) {
                    case "getTCData":
                        !d ||
                        (Array.isArray(d) &&
                            d.every(function (e) {
                                return "number" === typeof e;
                            }))
                            ? c(Kd(this, d, null), !0)
                            : c(null, !1);
                        break;
                    case "ping":
                        c({ gdprApplies: !0, cmpLoaded: !0, cmpStatus: "loaded", displayStatus: "disabled", apiVersion: "2.0", cmpVersion: 1, cmpId: 300 });
                        break;
                    case "addEventListener":
                        a = b.push(c);
                        c(Kd(this, null, a - 1), !0);
                        break;
                    case "removeEventListener":
                        b[d] ? ((b[d] = null), c(!0)) : c(!1);
                        break;
                    case "getInAppTCData":
                    case "getVendorList":
                        c(null, !1);
                }
    };
    var Kd = function (a, b, c) {
        if (!a.i) return null;
        b = Wc(a.i, b);
        b.addtlConsent = null != a.j ? a.j : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b;
    };
    var Ld = function (a) {
        return "string" === typeof a;
    };
    var Nd = function (a) {
        H.call(this, a, -1, Md);
    };
    v(Nd, H);
    var Pd = function (a, b) {
            return zb(a, 1, b);
        },
        Qd = function (a, b) {
            return Bb(a, 2, b);
        },
        Rd = function (a, b) {
            return ub(a, 4, b);
        },
        Sd = function (a, b) {
            return Bb(a, 5, b);
        },
        Td = function (a, b) {
            return D(a, 6, b, 0);
        },
        Ud = function (a) {
            H.call(this, a);
        };
    v(Ud, H);
    Ud.prototype.A = function () {
        return C(this, 1, 0);
    };
    var Vd = function (a, b) {
            return D(a, 1, b, 0);
        },
        Wd = function (a, b) {
            return D(a, 2, b, 0);
        },
        Xd = function (a) {
            H.call(this, a);
        };
    v(Xd, H);
    var Md = [2, 4, 5],
        Yd = [1, 2];
    var $d = function (a) {
        H.call(this, a, -1, Zd);
    };
    v($d, H);
    var be = function (a) {
        H.call(this, a, -1, ae);
    };
    v(be, H);
    var Zd = [2, 3],
        ae = [5],
        ce = [1, 2, 3, 4];
    var de = function (a) {
        H.call(this, a);
    };
    v(de, H);
    de.prototype.getTagSessionCorrelator = function () {
        return C(this, 2, 0);
    };
    var fe = function (a) {
            var b = new de();
            return Ab(b, 4, ee, a);
        },
        ee = [4, 5, 7];
    var he = function (a) {
        H.call(this, a, -1, ge);
    };
    v(he, H);
    var ge = [3];
    var je = function (a) {
        H.call(this, a, -1, ie);
    };
    v(je, H);
    var ie = [4];
    var le = function (a) {
        H.call(this, a, -1, ke);
    };
    v(le, H);
    le.prototype.getTagSessionCorrelator = function () {
        return C(this, 1, 0);
    };
    var ke = [2];
    var me = function (a) {
        H.call(this, a);
    };
    v(me, H);
    var ne = [4];
    var oe = function (a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c;
    };
    var qe = function (a, b) {
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            Dc(a, function (d, e) {
                d && (c += "&" + e + "=" + encodeURIComponent(d));
            });
            pe(c);
        },
        pe = function (a) {
            var b = window;
            if (b.fetch) b.fetch(a, { keepalive: !0, credentials: "include", redirect: "follow", method: "get", mode: "no-cors" });
            else {
                b.google_image_requests || (b.google_image_requests = []);
                var c = Kc("IMG", b.document);
                c.src = a;
                b.google_image_requests.push(c);
            }
        };
    var re = null,
        se = function () {
            if (null === re) {
                re = "";
                try {
                    var a = "";
                    try {
                        a = y.top.location.hash;
                    } catch (c) {
                        a = y.location.hash;
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        re = b ? b[1] : "";
                    }
                } catch (c) {}
            }
            return re;
        };
    var te = function (a) {
        a = void 0 === a ? y : a;
        return (a = a.performance) && a.now ? a.now() : null;
    };
    var ve = function (a) {
        H.call(this, a, -1, ue);
    };
    v(ve, H);
    var ue = [2, 8],
        we = [3, 4, 5],
        xe = [6, 7];
    var ye;
    ye = { Ga: 0, ia: 3, ja: 4, ka: 5 };
    var ze = ye.ia,
        N = ye.ja,
        Ae = ye.ka,
        Be = function (a) {
            return null != a ? !a : a;
        },
        Ce = function (a, b) {
            for (var c = !1, d = 0; d < a.length; d++) {
                var e = a[d]();
                if (e === b) return e;
                null == e && (c = !0);
            }
            if (!c) return !b;
        },
        Ee = function (a, b) {
            var c = G(a, ve, 2);
            if (!c.length) return De(a, b);
            a = C(a, 1, 0);
            if (1 === a) return Be(Ee(c[0], b));
            c = Qa(c, function (d) {
                return function () {
                    return Ee(d, b);
                };
            });
            switch (a) {
                case 2:
                    return Ce(c, !1);
                case 3:
                    return Ce(c, !0);
            }
        },
        De = function (a, b) {
            var c = vb(a, we);
            a: {
                switch (c) {
                    case ze:
                        var d = Db(a, 3, we);
                        break a;
                    case N:
                        d = Db(a, 4, we);
                        break a;
                    case Ae:
                        d = Db(a, 5, we);
                        break a;
                }
                d = void 0;
            }
            if (d && (b = (b = b[c]) && b[d])) {
                try {
                    var e = b.apply(null, u(rb(a, 8)));
                } catch (f) {
                    return;
                }
                b = C(a, 1, 0);
                if (4 === b) return !!e;
                d = null != e;
                if (5 === b) return d;
                if (12 === b) a = Cb(a, 7 === vb(a, xe) ? 7 : -1, void 0);
                else
                    a: {
                        switch (c) {
                            case N:
                                a = tb(a, 6 === vb(a, xe) ? 6 : -1, void 0);
                                break a;
                            case Ae:
                                a = Cb(a, 7 === vb(a, xe) ? 7 : -1, void 0);
                                break a;
                        }
                        a = void 0;
                    }
                if (null != a) {
                    if (6 === b) return e === a;
                    if (9 === b) return null != e && 0 === Ka(String(e), a);
                    if (d)
                        switch (b) {
                            case 7:
                                return e < a;
                            case 8:
                                return e > a;
                            case 12:
                                return Ld(a) && Ld(e) && new RegExp(a).test(e);
                            case 10:
                                return null != e && -1 === Ka(String(e), a);
                            case 11:
                                return null != e && 1 === Ka(String(e), a);
                        }
                }
            }
        },
        Fe = function (a, b) {
            return !a || !(!b || !Ee(a, b));
        };
    var He = function (a) {
        H.call(this, a, -1, Ge);
    };
    v(He, H);
    var Ge = [4];
    var Ie = function (a) {
        H.call(this, a);
    };
    v(Ie, H);
    var Ke = function (a) {
        H.call(this, a, -1, Je);
    };
    v(Ke, H);
    var Je = [5],
        Le = [1, 2, 3, 6, 7];
    var Me = function (a, b, c) {
            var d = void 0 === d ? new bd(b) : d;
            this.h = a;
            this.o = c;
            this.i = d;
            this.g = [];
            this.j = 0 < this.h && Bc() < 1 / this.h;
        },
        Oe = function (a, b, c, d, e, f) {
            var g = Wd(Vd(new Ud(), b), c);
            b = Td(Qd(Pd(Sd(Rd(new Nd(), d), e), g), a.g), f);
            b = fe(b);
            a.j && ad(a.i, Ne(a, b));
            if (
                1 === f ||
                3 === f ||
                (4 === f &&
                    !a.g.some(function (h) {
                        return h.A() === g.A() && C(h, 2, 0) === c;
                    }))
            )
                a.g.push(g), 100 < a.g.length && a.g.shift();
        },
        Pe = function (a, b, c, d) {
            if (a.o) {
                var e = new $d();
                b = Bb(e, 2, b);
                c = Bb(b, 3, c);
                d && D(c, 1, d, 0);
                d = new de();
                d = Ab(d, 7, ee, c);
                a.j && ad(a.i, Ne(a, d));
            }
        },
        Ne = function (a, b) {
            b = D(b, 1, Date.now(), 0);
            var c = Mc(window);
            b = D(b, 2, c, 0);
            return D(b, 6, a.h, 0);
        };
    var O = function (a) {
        var b = "M";
        if (a.M && a.hasOwnProperty(b)) return a.M;
        b = new a();
        return (a.M = b);
    };
    var Qe = function () {
        var a = {};
        this.g = ((a[ze] = {}), (a[N] = {}), (a[Ae] = {}), a);
    };
    var Re = /^true$/.test("false");
    var Se = Re,
        Te = function (a, b) {
            switch (b) {
                case 1:
                    return Db(a, 1, Le);
                case 2:
                    return Db(a, 2, Le);
                case 3:
                    return Db(a, 3, Le);
                case 6:
                    return Db(a, 6, Le);
                default:
                    return null;
            }
        },
        Ue = function (a, b) {
            if (!a) return null;
            switch (b) {
                case 1:
                    return sb(a, 1);
                case 7:
                    return Cb(a, 3);
                case 2:
                    return tb(a, 2);
                case 3:
                    return Cb(a, 3);
                case 6:
                    return rb(a, 4);
                default:
                    return null;
            }
        },
        Ve = qc(function () {
            if (!Se) return {};
            try {
                var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
                if (a) return JSON.parse(a);
            } catch (b) {}
            return {};
        }),
        Ye = function (a, b, c, d) {
            var e = (d = void 0 === d ? 0 : d),
                f,
                g;
            O(P).i[e] = null != (g = null == (f = O(P).i[e]) ? void 0 : f.add(b)) ? g : new m.Set().add(b);
            e = Ve();
            if (null != e[b]) return e[b];
            b = We(d)[b];
            if (!b) return c;
            b = new Ke(b);
            b = Xe(b);
            a = Ue(b, a);
            return null != a ? a : c;
        },
        Xe = function (a) {
            var b = O(Qe).g;
            if (b) {
                var c = Sa(G(a, Ie, 5), function (d) {
                    return Fe(F(d, ve, 1), b);
                });
                if (c) return F(c, He, 2);
            }
            return F(a, He, 4);
        },
        P = function () {
            this.h = {};
            this.j = [];
            this.i = {};
            this.g = new m.Map();
        },
        Ze = function (a, b, c) {
            return !!Ye(1, a, void 0 === b ? !1 : b, c);
        },
        $e = function (a, b, c) {
            b = void 0 === b ? 0 : b;
            a = Number(Ye(2, a, b, c));
            return isNaN(a) ? b : a;
        },
        af = function (a, b, c) {
            return Ye(3, a, void 0 === b ? "" : b, c);
        },
        bf = function (a, b, c) {
            b = void 0 === b ? [] : b;
            return Ye(6, a, b, c);
        },
        We = function (a) {
            return O(P).h[a] || (O(P).h[a] = {});
        },
        cf = function (a, b) {
            var c = We(b);
            Dc(a, function (d, e) {
                return (c[e] = d);
            });
        },
        df = function (a, b, c, d, e) {
            e = void 0 === e ? !1 : e;
            var f = [],
                g = [];
            Na(b, function (h) {
                var k = We(h);
                Na(a, function (l) {
                    var p = vb(l, Le),
                        t = Te(l, p);
                    if (t) {
                        var z, wb, Od;
                        var xb = null != (Od = null == (z = O(P).g.get(h)) ? void 0 : null == (wb = z.get(t)) ? void 0 : wb.slice(0)) ? Od : [];
                        a: {
                            z = new be();
                            switch (p) {
                                case 1:
                                    yb(z, 1, ce, t);
                                    break;
                                case 2:
                                    yb(z, 2, ce, t);
                                    break;
                                case 3:
                                    yb(z, 3, ce, t);
                                    break;
                                case 6:
                                    yb(z, 4, ce, t);
                                    break;
                                default:
                                    p = void 0;
                                    break a;
                            }
                            ub(z, 5, xb);
                            p = z;
                        }
                        if ((xb = p)) {
                            var Pa;
                            xb = !(null == (Pa = O(P).i[h]) || !Pa.has(t));
                        }
                        xb && f.push(p);
                        if ((Pa = p)) {
                            var ha;
                            Pa = !(null == (ha = O(P).g.get(h)) || !ha.has(t));
                        }
                        Pa && g.push(p);
                        e || ((ha = O(P)), ha.g.has(h) || ha.g.set(h, new m.Map()), ha.g.get(h).has(t) || ha.g.get(h).set(t, []), d && ha.g.get(h).get(t).push(d));
                        k[t] = l.toJSON();
                    }
                });
            });
            (f.length || g.length) && Pe(c, f, g, null != d ? d : void 0);
        },
        ef = function (a, b) {
            var c = We(b);
            Na(a, function (d) {
                var e = new Ke(d),
                    f = vb(e, Le);
                (e = Te(e, f)) && (c[e] || (c[e] = d));
            });
        },
        ff = function () {
            return Qa(n(Object, "keys").call(Object, O(P).h), function (a) {
                return Number(a);
            });
        },
        gf = function (a) {
            Ta(O(P).j, a) || cf(We(4), a);
        };
    var Q = function (a) {
            this.methodName = a;
        },
        hf = new Q(1),
        jf = new Q(16),
        kf = new Q(15),
        lf = new Q(2),
        mf = new Q(3),
        nf = new Q(4),
        of = new Q(5),
        pf = new Q(6),
        qf = new Q(7),
        rf = new Q(8),
        sf = new Q(9),
        tf = new Q(10),
        uf = new Q(11),
        vf = new Q(12),
        wf = new Q(13),
        xf = new Q(14),
        R = function (a, b, c) {
            c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), { value: b });
        },
        S = function (a, b, c) {
            return b[a.methodName] || c || function () {};
        },
        yf = function (a) {
            R(of, Ze, a);
            R(pf, $e, a);
            R(qf, af, a);
            R(rf, bf, a);
            R(wf, ef, a);
            R(kf, gf, a);
        },
        zf = function (a) {
            R(
                nf,
                function (b) {
                    O(Qe).g = b;
                },
                a
            );
            R(
                sf,
                function (b, c) {
                    var d = O(Qe);
                    d.g[ze][b] || (d.g[ze][b] = c);
                },
                a
            );
            R(
                tf,
                function (b, c) {
                    var d = O(Qe);
                    d.g[N][b] || (d.g[N][b] = c);
                },
                a
            );
            R(
                uf,
                function (b, c) {
                    var d = O(Qe);
                    d.g[Ae][b] || (d.g[Ae][b] = c);
                },
                a
            );
            R(
                xf,
                function (b) {
                    for (var c = O(Qe), d = r([ze, N, Ae]), e = d.next(); !e.done; e = d.next()) (e = e.value), n(Object, "assign").call(Object, c.g[e], b[e]);
                },
                a
            );
        },
        Af = function (a) {
            a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", { value: !0 });
        };
    var Bf = function () {
            this.h = function () {};
            this.g = function () {
                return [];
            };
        },
        Cf = function (a, b, c) {
            a.h = function (d) {
                S(lf, b, function () {
                    return [];
                })(d, c);
            };
            a.g = function () {
                return S(mf, b, function () {
                    return [];
                })(c);
            };
        };
    var Df = function (a, b) {
            try {
                var c = a.split(".");
                a = y;
                for (var d = 0, e; null != a && d < c.length; d++) (e = a), (a = a[c[d]]), "function" === typeof a && (a = e[c[d]]());
                var f = a;
                if (typeof f === b) return f;
            } catch (g) {}
        },
        Ef = function () {
            var a = {};
            this[ze] =
                ((a[8] = function (b) {
                    try {
                        return null != va(b);
                    } catch (c) {}
                }),
                (a[9] = function (b) {
                    try {
                        var c = va(b);
                    } catch (d) {
                        return;
                    }
                    if ((b = "function" === typeof c)) (c = c && c.toString && c.toString()), (b = "string" === typeof c && -1 != c.indexOf("[native code]"));
                    return b;
                }),
                (a[10] = function () {
                    return window == window.top;
                }),
                (a[6] = function (b) {
                    return Ta(O(Bf).g(), parseInt(b, 10));
                }),
                (a[27] = function (b) {
                    b = Df(b, "boolean");
                    return void 0 !== b ? b : void 0;
                }),
                (a[60] = function (b) {
                    try {
                        return !!y.document.querySelector(b);
                    } catch (c) {}
                }),
                a);
            a = {};
            this[N] =
                ((a[3] = function () {
                    return Ic();
                }),
                (a[6] = function (b) {
                    b = Df(b, "number");
                    return void 0 !== b ? b : void 0;
                }),
                (a[11] = function (b) {
                    b = Jc(void 0 === b ? "" : b, y);
                    return null == b ? void 0 : b % 1e3;
                }),
                a);
            a = {};
            this[Ae] =
                ((a[2] = function () {
                    return window.location.href;
                }),
                (a[3] = function () {
                    try {
                        return window.top.location.hash;
                    } catch (b) {
                        return "";
                    }
                }),
                (a[4] = function (b) {
                    b = Df(b, "string");
                    return void 0 !== b ? b : void 0;
                }),
                (a[10] = function () {
                    try {
                        var b = y.document;
                        return b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || "";
                    } catch (c) {
                        return "";
                    }
                }),
                (a[11] = function () {
                    try {
                        var b, c, d, e, f;
                        return null !=
                            (f =
                                null == (d = null == (b = va("google_tag_data")) ? void 0 : null == (c = b.uach) ? void 0 : c.fullVersionList)
                                    ? void 0
                                    : null ==
                                      (e = n(d, "find").call(d, function (g) {
                                          return "Google Chrome" === g.brand;
                                      }))
                                    ? void 0
                                    : e.version)
                            ? f
                            : "";
                    } catch (g) {
                        return "";
                    }
                }),
                a);
        };
    var Ff = function () {
        var a = void 0 === a ? y : a;
        return a.ggeac || (a.ggeac = {});
    };
    var Hf = function (a) {
        H.call(this, a, -1, Gf);
    };
    v(Hf, H);
    Hf.prototype.getId = function () {
        return C(this, 1, 0);
    };
    Hf.prototype.A = function () {
        return C(this, 7, 0);
    };
    var Gf = [2];
    var Jf = function (a) {
        H.call(this, a, -1, If);
    };
    v(Jf, H);
    Jf.prototype.A = function () {
        return C(this, 5, 0);
    };
    var If = [2];
    var Lf = function (a) {
        H.call(this, a, -1, Kf);
    };
    v(Lf, H);
    var Nf = function (a) {
        H.call(this, a, -1, Mf);
    };
    v(Nf, H);
    Nf.prototype.A = function () {
        return C(this, 1, 0);
    };
    var Of = function (a) {
        H.call(this, a);
    };
    v(Of, H);
    var Kf = [1, 4, 2, 3],
        Mf = [2];
    var Pf = [12, 13, 20],
        Qf = function () {},
        Rf = function (a, b, c, d, e) {
            e = void 0 === e ? {} : e;
            var f = void 0 === e.ba ? !1 : e.ba,
                g = void 0 === e.pa ? {} : e.pa;
            e = void 0 === e.fa ? [] : e.fa;
            a.j = b;
            a.u = {};
            a.B = f;
            a.o = g;
            b = {};
            a.h = ((b[c] = []), (b[4] = []), b);
            a.i = {};
            (c = se()) &&
                Na(c.split(",") || [], function (h) {
                    (h = parseInt(h, 10)) && (a.i[h] = !0);
                });
            Na(e, function (h) {
                a.i[h] = !0;
            });
            a.g = d;
            return a;
        },
        Vf = function (a, b, c) {
            var d = [],
                e = Sf(a.j, b),
                f;
            if ((f = 9 !== b)) a.u[b] ? (f = !0) : ((a.u[b] = !0), (f = !1));
            if (f) {
                var g;
                null == (g = a.g) || Oe(g, b, c, d, [], 4);
                return d;
            }
            if (!e.length) {
                var h;
                null == (h = a.g) || Oe(h, b, c, d, [], 3);
                return d;
            }
            var k = Ta(Pf, b),
                l = [];
            Na(e, function (t) {
                var z = new Xd();
                if ((t = Tf(a, t, c, z))) 0 !== vb(z, Yd) && l.push(z), (z = t.getId()), d.push(z), Uf(a, z, k ? 4 : c), (t = G(t, Ke, 2)) && (k ? df(t, ff(), a.g, z) : df(t, [c], a.g, z));
            });
            var p;
            null == (p = a.g) || Oe(p, b, c, d, l, 1);
            return d;
        },
        Uf = function (a, b, c) {
            a.h[c] || (a.h[c] = []);
            a = a.h[c];
            Ta(a, b) || a.push(b);
        },
        Wf = function (a, b) {
            a.j.push.apply(
                a.j,
                u(
                    Oa(
                        Qa(b, function (c) {
                            return new Nf(c);
                        }),
                        function (c) {
                            return !Ta(Pf, c.A());
                        }
                    )
                )
            );
        },
        Tf = function (a, b, c, d) {
            var e = O(Qe).g;
            if (!Fe(F(b, ve, 3), e)) return null;
            var f = G(b, Hf, 2),
                g = C(b, 6, 0);
            if (g) {
                yb(d, 1, Yd, g);
                f = e[N];
                switch (c) {
                    case 2:
                        var h = f[8];
                        break;
                    case 1:
                        h = f[7];
                }
                c = void 0;
                if (h)
                    try {
                        (c = h(g)), D(d, 3, c, 0);
                    } catch (k) {}
                return (b = Xf(b, c)) ? Yf(a, [b], 1) : null;
            }
            if ((g = C(b, 10, 0))) {
                yb(d, 2, Yd, g);
                h = null;
                switch (c) {
                    case 1:
                        h = e[N][9];
                        break;
                    case 2:
                        h = e[N][10];
                        break;
                    default:
                        return null;
                }
                c = h ? h(String(g)) : void 0;
                if (void 0 === c && 1 === C(b, 11, 0)) return null;
                void 0 !== c && D(d, 3, c, 0);
                return (b = Xf(b, c)) ? Yf(a, [b], 1) : null;
            }
            d = e
                ? Oa(f, function (k) {
                      return Fe(F(k, ve, 3), e);
                  })
                : f;
            if (!d.length) return null;
            c = d.length * C(b, 1, 0);
            return (b = C(b, 4, 0)) ? Zf(a, b, c, d) : Yf(a, d, c / 1e3);
        },
        Zf = function (a, b, c, d) {
            var e = null != a.o[b] ? a.o[b] : 1e3;
            if (0 >= e) return null;
            d = Yf(a, d, c / e);
            a.o[b] = d ? 0 : e - c;
            return d;
        },
        Yf = function (a, b, c) {
            var d = a.i,
                e = Ra(b, function (f) {
                    return !!d[f.getId()];
                });
            return e ? e : a.B ? null : Cc(b, c);
        },
        $f = function (a, b) {
            R(
                hf,
                function (c) {
                    a.i[c] = !0;
                },
                b
            );
            R(
                lf,
                function (c, d) {
                    return Vf(a, c, d);
                },
                b
            );
            R(
                mf,
                function (c) {
                    return (a.h[c] || []).concat(a.h[4]);
                },
                b
            );
            R(
                vf,
                function (c) {
                    return Wf(a, c);
                },
                b
            );
            R(
                jf,
                function (c, d) {
                    return Uf(a, c, d);
                },
                b
            );
        },
        Sf = function (a, b) {
            return (
                ((a = Ra(a, function (c) {
                    return c.A() == b;
                })) &&
                    G(a, Jf, 2)) ||
                []
            );
        },
        Xf = function (a, b) {
            var c = G(a, Hf, 2),
                d = c.length,
                e = C(a, 8, 0);
            a = d * C(a, 1, 0) - 1;
            b = void 0 !== b ? b : Math.floor(1e3 * Bc());
            d = (b - e) % d;
            if (b < e || b - e - d >= a) return null;
            c = c[d];
            e = O(Qe).g;
            return !c || (e && !Fe(F(c, ve, 3), e)) ? null : c;
        };
    var ag = function () {
            var a = {};
            this.h = function (b, c) {
                return null != a[b] ? a[b] : c;
            };
            this.i = function (b, c) {
                return null != a[b] ? a[b] : c;
            };
            this.o = function (b, c) {
                return null != a[b] ? a[b] : c;
            };
            this.g = function (b, c) {
                return null != a[b] ? a[b] : c;
            };
            this.j = function () {};
        },
        bg = function (a) {
            return O(ag).h(a.g, a.defaultValue);
        },
        cg = function (a) {
            return O(ag).i(a.g, a.defaultValue);
        };
    var dg = function () {
            this.g = function () {};
        },
        eg = function (a) {
            O(dg).g(a);
        };
    var fg,
        gg,
        hg,
        ig,
        jg,
        kg,
        ng = function (a) {
            var b = O(lg).g,
                c = { ba: T[211], fa: T[226] },
                d = void 0,
                e = 2;
            d = void 0 === d ? Ff() : d;
            e = void 0 === e ? 0 : e;
            var f =
                void 0 === f
                    ? new Me(
                          null != (ig = null == (fg = F(a, Of, 5)) ? void 0 : C(fg, 2, 0)) ? ig : 0,
                          null != (jg = null == (gg = F(a, Of, 5)) ? void 0 : C(gg, 4, 0)) ? jg : 0,
                          null != (kg = null == (hg = F(a, Of, 5)) ? void 0 : sb(hg, 3)) ? kg : !1
                      )
                    : f;
            d.hasOwnProperty("init-done")
                ? (S(
                      vf,
                      d
                  )(
                      Qa(G(a, Nf, 2), function (g) {
                          return g.toJSON();
                      })
                  ),
                  S(wf, d)(
                      Qa(G(a, Ke, 1), function (g) {
                          return g.toJSON();
                      }),
                      e
                  ),
                  b && S(xf, d)(b),
                  mg(d, e))
                : ($f(Rf(O(Qf), G(a, Nf, 2), e, f, c), d), yf(d), zf(d), Af(d), mg(d, e), df(G(a, Ke, 1), [e], f, void 0, !0), (Se = Se || !(!c || !c.Ha)), eg(O(Ef)), b && eg(b));
        },
        mg = function (a, b) {
            a = void 0 === a ? Ff() : a;
            b = void 0 === b ? 0 : b;
            var c = a,
                d = b;
            d = void 0 === d ? 0 : d;
            Cf(O(Bf), c, d);
            og(a, b);
            O(dg).g = S(xf, a);
            O(ag).j();
        },
        og = function (a, b) {
            var c = O(ag);
            c.h = function (d, e) {
                return S(of, a, function () {
                    return !1;
                })(d, e, b);
            };
            c.i = function (d, e) {
                return S(pf, a, function () {
                    return 0;
                })(d, e, b);
            };
            c.o = function (d, e) {
                return S(qf, a, function () {
                    return "";
                })(d, e, b);
            };
            c.g = function (d, e) {
                return S(rf, a, function () {
                    return [];
                })(d, e, b);
            };
            c.j = function () {
                S(kf, a)(b);
            };
        };
    var pg = O(ag).g(jd.g, jd.defaultValue);
    function qg(a) {
        a = void 0 === a ? window.document : a;
        Lc(pg, a);
    }
    var rg = ka(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
        sg = function () {
            this.g = null;
        };
    var tg = O(ag).g(kd.g, kd.defaultValue);
    function ug(a) {
        a = void 0 === a ? window.document : a;
        Lc(tg, a);
    }
    var vg = I("gpt/pubads_impl_"),
        wg = I("pagead/managed/js/gpt/");
    var xg = function (a, b) {
            var c = te(b);
            c && ((a = { label: a, type: 9, value: c }), (b = b.google_js_reporting_queue = b.google_js_reporting_queue || []), 2048 > b.length && b.push(a));
        },
        yg = function (a, b, c) {
            var d = window;
            return function () {
                var e = te(),
                    f = 3;
                try {
                    var g = b.apply(this, arguments);
                } catch (h) {
                    f = 13;
                    if (c) return c(a, h), g;
                    throw h;
                } finally {
                    d.google_measure_js_timing && e && ((e = { label: a.toString(), value: e, duration: (te() || 0) - e, type: f }), (f = d.google_js_reporting_queue = d.google_js_reporting_queue || []), 2048 > f.length && f.push(e));
                }
                return g;
            };
        },
        zg = function (a, b) {
            return yg(a, b, function (c, d) {
                var e = d;
                d = new sg();
                var f;
                if (
                    !(
                        Math.random() > (void 0 === g ? 0.01 : g) ||
                        ((e.error && e.meta && e.id) || (e = new oe(e, { context: c, id: void 0 === f ? "jserror" : f })), (y.google_js_errors = y.google_js_errors || []), y.google_js_errors.push(e), y.error_rep_loaded)
                    )
                ) {
                    var g = Nc(rg);
                    var h;
                    c = y.document;
                    d = null != (h = d.g) ? h : new J(nc(g).toString(), Rb);
                    h = Kc("SCRIPT", c);
                    h.src = nc(d);
                    oc(h);
                    (d = c.getElementsByTagName("script")[0]) && d.parentNode && d.parentNode.insertBefore(h, d);
                    y.error_rep_loaded = !0;
                }
            });
        };
    var Ag = function () {
        this.i = this.i;
        this.j = this.j;
    };
    Ag.prototype.i = !1;
    Ag.prototype.O = function () {
        if (this.j) for (; this.j.length; ) this.j.shift()();
    };
    function U(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b);
    }
    function Bg(a, b) {
        return "&" + a + "=" + b.toFixed(3);
    }
    function Cg() {
        var a = new m.Set();
        var b = void 0 === b ? window : b;
        b = b.googletag;
        b = (null == b ? 0 : b.apiReady) ? b : void 0;
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = r(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId());
        } catch (f) {}
        return a;
    }
    function Dg(a) {
        a = a.id;
        return null != a && (Cg().has(a) || n(a, "startsWith").call(a, "google_ads_iframe_") || n(a, "startsWith").call(a, "aswift"));
    }
    function Eg(a, b, c) {
        if (!a.sources) return !1;
        switch (Fg(a)) {
            case 2:
                var d = Gg(a);
                if (d)
                    return c.some(function (f) {
                        return Hg(d, f);
                    });
            case 1:
                var e = Ig(a);
                if (e)
                    return b.some(function (f) {
                        return Hg(e, f);
                    });
        }
        return !1;
    }
    function Fg(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function (b) {
            return b.previousRect && b.currentRect;
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1;
        }
        return 0;
    }
    function Ig(a) {
        return Jg(a, function (b) {
            return b.currentRect;
        });
    }
    function Gg(a) {
        return Jg(a, function (b) {
            return b.previousRect;
        });
    }
    function Jg(a, b) {
        return a.sources.reduce(function (c, d) {
            d = b(d);
            return c ? (d && 0 !== d.width * d.height ? (d.top < c.top ? d : c) : c) : d;
        }, null);
    }
    var Kg = function () {
        Ag.call(this);
        this.h = this.g = this.I = this.H = this.N = 0;
        this.Y = this.V = Number.NEGATIVE_INFINITY;
        this.R = this.T = this.U = this.W = this.aa = this.u = this.$ = this.K = 0;
        this.S = !1;
        this.J = this.G = this.B = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.Z = a ? a.getAttribute("data-google-query-id") : null;
        this.o = null;
        this.X = !1;
        this.P = function () {};
    };
    v(Kg, Ag);
    var Ng = function () {
            var a = new Kg();
            if (bg(ld)) {
                var b = window;
                if (!b.google_plmetrics && window.PerformanceObserver) {
                    b.google_plmetrics = !0;
                    b = r(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
                    for (var c = b.next(); !c.done; c = b.next()) (c = c.value), Lg(a).observe({ type: c, buffered: !0 });
                    Mg(a);
                }
            }
        },
        Lg = function (a) {
            a.o ||
                (a.o = new PerformanceObserver(
                    zg(640, function (b) {
                        var c = Og !== window.scrollX || Pg !== window.scrollY ? [] : Qg,
                            d = Rg();
                        b = r(b.getEntries());
                        for (var e = b.next(); !e.done; e = b.next())
                            switch (((e = e.value), e.entryType)) {
                                case "layout-shift":
                                    var f = a;
                                    if (!e.hadRecentInput) {
                                        f.N += Number(e.value);
                                        Number(e.value) > f.H && (f.H = Number(e.value));
                                        f.I += 1;
                                        var g = Eg(e, c, d);
                                        g && ((f.u += e.value), f.W++);
                                        if (5e3 < e.startTime - f.V || 1e3 < e.startTime - f.Y) (f.V = e.startTime), (f.g = 0), (f.h = 0);
                                        f.Y = e.startTime;
                                        f.g += e.value;
                                        g && (f.h += e.value);
                                        f.g > f.K && ((f.K = f.g), (f.aa = f.h), (f.$ = e.startTime + e.duration));
                                    }
                                    break;
                                case "largest-contentful-paint":
                                    a.U = Math.floor(e.renderTime || e.loadTime);
                                    a.T = e.size;
                                    break;
                                case "first-input":
                                    a.R = Number((e.processingStart - e.startTime).toFixed(3));
                                    a.S = !0;
                                    break;
                                case "longtask":
                                    (e = Math.max(0, e.duration - 50)), (a.B += e), (a.G = Math.max(a.G, e)), (a.J += 1);
                            }
                    })
                ));
            return a.o;
        },
        Mg = function (a) {
            var b = zg(641, function () {
                    var d = document;
                    2 == (d.prerendering ? 3 : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && Sg(a);
                }),
                c = zg(641, function () {
                    return void Sg(a);
                });
            document.addEventListener("visibilitychange", b);
            document.addEventListener("unload", c);
            a.P = function () {
                document.removeEventListener("visibilitychange", b);
                document.removeEventListener("unload", c);
                Lg(a).disconnect();
            };
        };
    Kg.prototype.O = function () {
        Ag.prototype.O.call(this);
        this.P();
    };
    var Sg = function (a) {
            if (!a.X) {
                a.X = !0;
                Lg(a).takeRecords();
                var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
                window.LayoutShift &&
                    ((b += Bg("cls", a.N)),
                    (b += Bg("mls", a.H)),
                    (b += U("nls", a.I)),
                    window.LayoutShiftAttribution && ((b += Bg("cas", a.u)), (b += U("nas", a.W))),
                    (b += Bg("wls", a.K)),
                    (b += Bg("tls", a.$)),
                    window.LayoutShiftAttribution && (b += Bg("was", a.aa)));
                window.LargestContentfulPaint && ((b += U("lcp", a.U)), (b += U("lcps", a.T)));
                window.PerformanceEventTiming && a.S && (b += U("fid", a.R));
                window.PerformanceLongTaskTiming && ((b += U("cbt", a.B)), (b += U("mbt", a.G)), (b += U("nlt", a.J)));
                for (var c = 0, d = r(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Dg(e.value) && c++;
                b += U("nif", c);
                c = window.google_unique_id;
                b += U("ifi", "number" === typeof c ? c : 0);
                c = O(Bf).g();
                b += "&eid=" + encodeURIComponent(c.join());
                b += "&top=" + (y === y.top ? 1 : 0);
                b += a.Z ? "&qqid=" + encodeURIComponent(a.Z) : U("pvsid", Mc(y));
                window.googletag && (b += "&gpt=1");
                window.fetch(b, { keepalive: !0, credentials: "include", redirect: "follow", method: "get", mode: "no-cors" });
                a.i || ((a.i = !0), a.O());
            }
        },
        Hg = function (a, b) {
            var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
            a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
            return 0 >= c || 0 >= a ? !1 : 50 <= (100 * c * a) / ((b.right - b.left) * (b.bottom - b.top));
        },
        Rg = function () {
            var a = [].concat(u(document.getElementsByTagName("iframe"))).filter(Dg),
                b = []
                    .concat(u(Cg()))
                    .map(function (c) {
                        return document.getElementById(c);
                    })
                    .filter(function (c) {
                        return null !== c;
                    });
            Og = window.scrollX;
            Pg = window.scrollY;
            return (Qg = [].concat(u(a), u(b)).map(function (c) {
                return c.getBoundingClientRect();
            }));
        },
        Og = void 0,
        Pg = void 0,
        Qg = [];
    var V = { issuerOrigin: "https://attestation.android.com", issuancePath: "/att/i", redemptionPath: "/att/r" },
        W = { issuerOrigin: "https://pagead2.googlesyndication.com", issuancePath: "/dtt/i", redemptionPath: "/dtt/r", getStatePath: "/dtt/s" };
    var Tg = O(ag).g(sd.g, sd.defaultValue),
        Vg = function (a, b, c) {
            Ag.call(this);
            var d = this;
            this.h = a;
            this.g = [];
            b && Ug() && this.g.push(V);
            c && this.g.push(W);
            if (document.hasTrustToken && !bg(pd)) {
                var e = new m.Map();
                this.g.forEach(function (f) {
                    e.set(f.issuerOrigin, { issuerOrigin: f.issuerOrigin, state: d.h ? 1 : 12, hasRedemptionRecord: !1 });
                });
                window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof m.Map ? new m.Map([].concat(u(e), u(window.goog_tt_state_map))) : e;
                (window.goog_tt_promise_map && window.goog_tt_promise_map instanceof m.Map) || (window.goog_tt_promise_map = new m.Map());
            }
        };
    v(Vg, Ag);
    var Ug = function () {
            var a = void 0 === a ? window : a;
            a = a.navigator.userAgent;
            var b = /Chrome/.test(a);
            return /Android/.test(a) && b;
        },
        Wg = function () {
            var a = window;
            a = void 0 === a ? window : a;
            return !a.PeriodicSyncManager;
        },
        Xg = function () {
            var a = void 0 === a ? window.document : a;
            Lc(Tg, a);
        },
        Yg = function (a) {
            var b = T[150];
            return T[221] || ".google.ch" === b || "function" === typeof a.__tcfapi;
        },
        X = function (a, b, c) {
            var d,
                e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
            e && ((e.state = b), void 0 != c && (e.hasRedemptionRecord = c));
        },
        Zg = function () {
            var a = V.issuerOrigin + V.redemptionPath,
                b = { keepalive: !0, trustToken: { type: "token-redemption", issuer: V.issuerOrigin, refreshPolicy: "none" } };
            X(V.issuerOrigin, 2);
            return window
                .fetch(a, b)
                .then(function (c) {
                    if (!c.ok) throw Error(c.status + ": Network response was not ok!");
                    X(V.issuerOrigin, 6, !0);
                })
                .catch(function (c) {
                    c && "NoModificationAllowedError" === c.name ? X(V.issuerOrigin, 6, !0) : X(V.issuerOrigin, 5);
                });
        },
        $g = function () {
            var a = V.issuerOrigin + V.issuancePath;
            X(V.issuerOrigin, 8);
            return window
                .fetch(a, { keepalive: !0, trustToken: { type: "token-request" } })
                .then(function (b) {
                    if (!b.ok) throw Error(b.status + ": Network response was not ok!");
                    X(V.issuerOrigin, 10);
                    return Zg();
                })
                .catch(function (b) {
                    if (b && "NoModificationAllowedError" === b.name) return X(V.issuerOrigin, 10), Zg();
                    X(V.issuerOrigin, 9);
                });
        },
        ah = function () {
            X(V.issuerOrigin, 13);
            return document.hasTrustToken(V.issuerOrigin).then(function (a) {
                return a ? Zg() : $g();
            });
        },
        bh = function () {
            X(W.issuerOrigin, 13);
            if (window.Promise) {
                var a = document
                        .hasTrustToken(W.issuerOrigin)
                        .then(function (e) {
                            return e;
                        })
                        .catch(function (e) {
                            return window.Promise.reject({ state: 19, error: e });
                        }),
                    b = W.issuerOrigin + W.redemptionPath,
                    c = { keepalive: !0, trustToken: { type: "token-redemption", refreshPolicy: "none" } };
                X(W.issuerOrigin, 16);
                a = a
                    .then(function (e) {
                        return window
                            .fetch(b, c)
                            .then(function (f) {
                                if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                                X(W.issuerOrigin, 18, !0);
                            })
                            .catch(function (f) {
                                if (f && "NoModificationAllowedError" === f.name) X(W.issuerOrigin, 18, !0);
                                else {
                                    if (e) return window.Promise.reject({ state: 17, error: f });
                                    X(W.issuerOrigin, 17);
                                }
                            });
                    })
                    .then(function () {
                        return document
                            .hasTrustToken(W.issuerOrigin)
                            .then(function (e) {
                                return e;
                            })
                            .catch(function (e) {
                                return window.Promise.reject({ state: 19, error: e });
                            });
                    })
                    .then(function (e) {
                        var f = W.issuerOrigin + W.getStatePath;
                        X(W.issuerOrigin, 20);
                        return window
                            .fetch(f + "?ht=" + e, { trustToken: { type: "send-redemption-record", issuers: [W.issuerOrigin] } })
                            .then(function (g) {
                                if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                                X(W.issuerOrigin, 22);
                                return g.text().then(function (h) {
                                    return JSON.parse(h);
                                });
                            })
                            .catch(function (g) {
                                return window.Promise.reject({ state: 21, error: g });
                            });
                    });
                var d = Mc(window);
                return a
                    .then(function (e) {
                        var f = W.issuerOrigin + W.issuancePath;
                        return e && e.srqt && e.cs
                            ? (X(W.issuerOrigin, 23),
                              window
                                  .fetch(f + "?cs=" + e.cs + "&correlator=" + d, { keepalive: !0, trustToken: { type: "token-request" } })
                                  .then(function (g) {
                                      if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                                      X(W.issuerOrigin, 25);
                                      return e;
                                  })
                                  .catch(function (g) {
                                      return window.Promise.reject({ state: 24, error: g });
                                  }))
                            : e;
                    })
                    .then(function (e) {
                        if (e && e.srdt && e.cs)
                            return (
                                X(W.issuerOrigin, 26),
                                window
                                    .fetch(b + "?cs=" + e.cs + "&correlator=" + d, { keepalive: !0, trustToken: { type: "token-redemption", refreshPolicy: "refresh" } })
                                    .then(function (f) {
                                        if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                                        X(W.issuerOrigin, 28, !0);
                                    })
                                    .catch(function (f) {
                                        return window.Promise.reject({ state: 27, error: f });
                                    })
                            );
                    })
                    .then(function () {
                        X(W.issuerOrigin, 29);
                    })
                    .catch(function (e) {
                        if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                            if ("number" === typeof e.state && e.error instanceof Error) {
                                X(W.issuerOrigin, e.state);
                                var f = cg(rd);
                                Math.random() <= f && qe({ state: e.state, err: e.error.toString() }, "dtt_err");
                            } else throw Error(e);
                        else throw e;
                    });
            }
        },
        ch = function (a) {
            if (document.hasTrustToken && !bg(pd) && a.h) {
                var b = window.goog_tt_promise_map;
                if (b && b instanceof m.Map) {
                    var c = [];
                    if (
                        a.g.some(function (e) {
                            return e.issuerOrigin === V.issuerOrigin;
                        })
                    ) {
                        var d = b.get(V.issuerOrigin);
                        d || ((d = ah()), b.set(V.issuerOrigin, d));
                        c.push(d);
                    }
                    a.g.some(function (e) {
                        return e.issuerOrigin === W.issuerOrigin;
                    }) && ((a = b.get(W.issuerOrigin)), a || ((a = bh()), b.set(W.issuerOrigin, a)), c.push(a));
                    if (0 < c.length && window.Promise && window.Promise.all) return window.Promise.all(c);
                }
            }
        };
    var eh = function (a) {
        H.call(this, a, -1, dh);
    };
    v(eh, H);
    var fh = function (a, b) {
            return B(a, 2, b);
        },
        gh = function (a, b) {
            return B(a, 3, b);
        },
        hh = function (a, b) {
            return B(a, 4, b);
        },
        ih = function (a, b) {
            return B(a, 5, b);
        },
        jh = function (a, b) {
            return B(a, 9, b);
        },
        kh = function (a, b) {
            return Bb(a, 10, b);
        },
        lh = function (a, b) {
            return B(a, 11, b);
        },
        mh = function (a, b) {
            return B(a, 1, b);
        },
        nh = function (a) {
            H.call(this, a);
        };
    v(nh, H);
    nh.prototype.getVersion = function () {
        return Cb(this, 2);
    };
    var dh = [10, 6];
    var oh = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function ph(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
    }
    function qh(a) {
        var b, c;
        if ("function" !== typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)) return null;
        var d = ph(a);
        if (d.uach_promise) return d.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(oh).then(function (e) {
            null != d.uach || (d.uach = e);
            return e;
        });
        return (d.uach_promise = a);
    }
    function rh(a) {
        var b;
        return lh(
            kh(
                jh(ih(hh(gh(fh(mh(new eh(), a.platform || ""), a.platformVersion || ""), a.architecture || ""), a.model || ""), a.uaFullVersion || ""), a.bitness || ""),
                (null == (b = a.fullVersionList)
                    ? void 0
                    : b.map(function (c) {
                          var d = new nh();
                          d = B(d, 1, c.brand);
                          return B(d, 2, c.version);
                      })) || []
            ),
            a.wow64 || !1
        );
    }
    function sh(a) {
        if (bg(md)) {
            var b, c;
            return null !=
                (c =
                    null == (b = qh(a))
                        ? void 0
                        : b.then(function (g) {
                              return rh(g);
                          }))
                ? c
                : null;
        }
        var d, e;
        if ("function" !== typeof (null == (d = a.navigator) ? void 0 : null == (e = d.userAgentData) ? void 0 : e.getHighEntropyValues)) return null;
        var f;
        return null !=
            (f = a.navigator.userAgentData.getHighEntropyValues(oh).then(function (g) {
                return rh(g);
            }))
            ? f
            : null;
    }
    var th = ka(["https://www.googletagservices.com/console/host/host.js"]),
        uh = ka(["https://www.googletagservices.com/console/panel/index.html"]),
        vh = ka(["https://www.googletagservices.com/console/overlay/index.html"]);
    Nc(th);
    Nc(uh);
    Nc(vh);
    function wh() {
        var a;
        return null != (a = y.googletag) ? a : (y.googletag = { cmd: [] });
    }
    function xh(a, b) {
        var c = wh();
        c.hasOwnProperty(a) || (c[a] = b);
    }
    var Y = {},
        T =
            ((Y[23] = 0.001),
            (Y[150] = ".google.co.id"),
            (Y[211] = !1),
            (Y[253] = !1),
            (Y[172] = null),
            (Y[246] = []),
            (Y[226] = []),
            (Y[252] = null),
            (Y[258] = null),
            (Y[251] = null),
            (Y[259] = null),
            (Y[6] = (function (a, b) {
                b = void 0 === b ? !0 : b;
                try {
                    for (var c = null; c != a; c = a, a = a.parent)
                        switch (a.location.protocol) {
                            case "https:":
                                return !0;
                            case "file:":
                                return b;
                            case "http:":
                                return !1;
                        }
                } catch (d) {}
                return !0;
            })(window)),
            (Y[36] = /^true$/.test("false")),
            (Y[148] = Re),
            (Y[221] = /^true$/.test("")),
            (Y[260] = void 0),
            Y),
        yh = wh();
    n(Object, "assign").call(Object, T, yh._vars_);
    yh._vars_ = T;
    var zh = new m.WeakMap(),
        Ah = function (a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\v");
        };
    var Bh = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))\/tag\/js\/gpt(?:_[a-z]+)*\.js/,
        Ch = (function (a, b) {
            b = void 0 === b ? Ah : b;
            var c = ya(a),
                d = function (e) {
                    e = r(e);
                    e.next();
                    e = la(e);
                    return b(c, e);
                };
            return function () {
                var e = w.apply(0, arguments),
                    f = this || y,
                    g = zh.get(f);
                g || ((g = {}), zh.set(f, g));
                f = g;
                g = [this].concat(u(e));
                e = d ? d(g) : g;
                if (Object.prototype.hasOwnProperty.call(f, e)) f = f[e];
                else {
                    var h = r(g);
                    g = h.next().value;
                    h = la(h);
                    g = a.apply(g, h);
                    f = f[e] = g;
                }
                return f;
            };
        })(
            function (a) {
                return (null == a ? 0 : a.src) ? (Bh.test(a.src) ? 0 : 1) : 2;
            },
            function (a, b) {
                var c;
                return a + "\v" + (null == (c = b[0]) ? void 0 : c.src);
            }
        );
    function Dh() {
        return 0 === Ch(T[172]);
    }
    function Eh() {
        return Hc("1") || 0;
    }
    var lg = function () {
        var a = {},
            b = {},
            c = {};
        this.g =
            ((c[ze] =
                ((a[3] = Dh),
                (a[17] = function () {
                    return n(w.apply(0, arguments), "includes").call(w.apply(0, arguments), String(Jc()));
                }),
                (a[59] = function () {
                    var d = w.apply(0, arguments),
                        e = n(d, "includes"),
                        f = String,
                        g;
                    var h = void 0 === h ? window : h;
                    var k;
                    h = null != (k = null == (g = wc(h.location.href.match(vc)[3] || null)) ? void 0 : g.split(".")) ? k : [];
                    g = 2 > h.length ? null : "uk" === h[h.length - 1] ? (3 > h.length ? null : Ec(h.splice(h.length - 3).join("."))) : Ec(h.splice(h.length - 2).join("."));
                    return e.call(d, f(g));
                }),
                (a[68] = function () {
                    return !1;
                }),
                (a[21] = function () {
                    return T[148];
                }),
                (a[61] = function () {
                    return T[221];
                }),
                (a[63] = function () {
                    return T[221] || ".google.ch" === T[150];
                }),
                (a[50] = function () {
                    return 1 === Math.floor(new Date().getTime() / 24 / 60 / 60 / 1e3) % 2;
                }),
                (a[54] = function () {
                    return !!T[259];
                }),
                a)),
            (c[N] =
                ((b[1] = function () {
                    var d;
                    return null != (d = Hc("{{MOD}}")) ? d : -1;
                }),
                (b[4] = Eh),
                b)),
            c);
    };
    function Fh(a) {
        var b = new Lf(T[246]);
        a = new Lf(a);
        if (!G(b, Ke, 1).length && G(a, Ke, 1).length) {
            var c = G(a, Ke, 1);
            Bb(b, 1, c);
        }
        !G(b, Nf, 2).length && G(a, Nf, 2).length && ((c = G(a, Nf, 2)), Bb(b, 2, c));
        null == A(b, 5) && null != A(a, 5) && ((a = F(a, Of, 5)), zb(b, 5, a));
        ng(b);
    }
    var Hh = function () {
            return [].concat(u(n(Gh, "values").call(Gh))).reduce(function (a, b) {
                return a + b;
            }, 0);
        },
        Gh = new m.Map();
    function Ih(a) {
        return (a = a.currentScript) ? a : null;
    }
    function Jh(a) {
        var b;
        a = r(null != (b = a.scripts) ? b : []);
        for (b = a.next(); !b.done; b = a.next()) if (((b = b.value), n(b.src, "includes").call(b.src, "/tag/js/gpt"))) return b;
        return null;
    }
    function Kh(a) {
        return !(null == a || !a.src) && "pagead2.googlesyndication.com" === wc(a.src.match(vc)[3] || null);
    }
    function Lh(a) {
        var b = Ih(a);
        return "complete" === a.readyState || "loaded" === a.readyState || !(null == b || !b.async);
    }
    function Mh(a, b) {
        b = Kh(b) ? I("https://pagead2.googlesyndication.com/") : I("https://securepubads.g.doubleclick.net/");
        a = a.ea ? Wb([b, wg, a.na, I("/pubads_impl.js")]) : bg(fd) ? Wb([b, wg, I("m"), a.da, I("/pubads_impl.js")]) : Wb([b, vg, a.da, I(".js")]);
        b = {};
        var c = cg(id),
            d = cg(gd);
        c && (b.cb = c);
        d && (b.mcb = d);
        return n(Object, "keys").call(Object, b).length ? Vb(a, b) : a;
    }
    var Nh = function () {
            this.g = [];
        },
        Oh = function (a, b, c) {
            a.h = b;
            a.error = c;
            for (var d = r(a.g), e = d.next(); !e.done; e = d.next()) (e = e.value), e(b, c);
            a.g.length = 0;
        };
    function Ph(a, b, c) {
        a = a.location.host;
        var d = b && yc(b.src, "domain"),
            e = b && yc(b.src, "network-code");
        if (!a && !d && !e) return Oh(c, void 0, new m.globalThis.Error("no provided or inferred data")), null;
        b = Kh(b) ? I("https://pagead2.googlesyndication.com") : I("https://securepubads.g.doubleclick.net");
        return Vb(Wb([b, I("/pagead/ppub_config")]), { ippd: a, pppd: d, pppnc: e });
    }
    function Qh(a, b) {
        var c = new Nh();
        T[260] = function (e) {
            void 0 !== c.h || c.error ? e(c.h, c.error) : c.g.push(e);
        };
        if ((b = Ph(a, b, c))) {
            var d = new m.globalThis.XMLHttpRequest();
            d.open("GET", b.toString(), !0);
            d.withCredentials = !1;
            d.onload = function () {
                300 > d.status ? (xg("13", a), Oh(c, 204 === d.status ? "" : d.responseText)) : Oh(c, void 0, new m.globalThis.Error("resp:" + d.status));
            };
            d.onerror = function () {
                return void Oh(c, void 0, new m.globalThis.Error("s:" + d.status + " rs:" + d.readyState));
            };
            d.send();
        }
    }
    function Rh(a, b, c, d) {
        T[172] = d;
        T[259] = Lh(a);
        Fh(b);
        O(Bf).h(12);
        O(Bf).h(5);
        Xg();
        if (!Yg(c)) {
            a = bg(Wg() ? od : nd);
            b = bg(qd);
            a = new Vg(!0, a, b);
            var e = Date.now(),
                f;
            a =
                null == (f = ch(a))
                    ? void 0
                    : f.then(function () {
                          var g = cg(td);
                          Math.random() <= g && qe({ act: String(Date.now() - e) }, "gpt_tt");
                      });
            0 < cg(ud) && (T[258] = a);
        }
        (f = sh(c)) &&
            f.then(function (g) {
                g = Hb(g);
                T[251] = g;
            });
        ug(c.document);
        qg(c.document);
    }
    function Sh() {
        var a = I("2022032106");
        var b = Number("2022032106");
        1 > b || Math.floor(b) !== b ? (qe({ v: "2022032106" }, "gpt_inv_ver"), (b = "1")) : (b = "2022032106");
        var c = /m\d+/.test("") ? Number("".substring(1)) : void 0;
        return { ca: b, da: a, ea: "", ma: c, na: I(""), Ia: Mc(window), qa: new bd(), ra: 0.01 > Bc(), la: 100 };
    }
    function Th() {
        var a = Uh,
            b = wh(),
            c,
            d = null != (c = b.fifWin) ? c : window;
        c = d.document;
        var e = b.fifWin ? window : d;
        xh("_loaded_", !0);
        var f = Sh();
        xh("getVersion", function () {
            return f.ma || f.ca;
        });
        xh("cmd", []);
        var g,
            h = null != (g = Ih(c)) ? g : Jh(c);
        Rh(c, a, d, h);
        try {
            Ng();
        } catch (wb) {}
        xg("1", d);
        a = Mh(f, h);
        if (!T[259]) {
            d = "gpt-impl-" + Math.random();
            try {
                pc(c, gc(a, { id: d, nonce: tc() }));
            } catch (wb) {}
            c.getElementById(d) && (b._loadStarted_ = !0);
        }
        if (!b._loadStarted_) {
            d = b.fifWin ? e.document : c;
            var k = Kc("SCRIPT");
            k.src = nc(a);
            oc(k);
            k.async = !0;
            var l,
                p,
                t = null != (p = null != (l = d.head) ? l : d.body) ? p : d.documentElement;
            "complete" !== e.document.readyState && b.fifWin
                ? rc(e, function () {
                      return void t.appendChild(k);
                  })
                : t.appendChild(k);
            b._loadStarted_ = !0;
        }
        var z;
        e === e.top && (bg(hd) || T[259] || (!Ih(c) && (null == (z = Jh(c)) ? 0 : z.async))) && (Jd(e), Qh(e, h));
    }
    var Uh;
    a: {
        try {
            if (Array.isArray(E)) {
                Uh = E;
                break a;
            }
        } catch (a) {}
        Uh = [];
    }
    try {
        Th();
    } catch (a) {
        try {
            var Vh = Sh();
            if (Vh.ra) {
                var Wh,
                    Z = a.error && a.meta && a.id ? a.error : a,
                    Xh,
                    Yh = new me(),
                    Zh = new le();
                try {
                    var $h = Mc(window);
                    D(Zh, 1, $h, 0);
                } catch (b) {}
                try {
                    var ai = O(Bf).g();
                    ub(Zh, 2, ai);
                } catch (b) {}
                try {
                    D(Zh, 3, window.document.URL, "");
                } catch (b) {}
                Xh = zb(Yh, 2, Zh);
                var bi,
                    ci = new je();
                bi = D(ci, 1, 420, 0);
                try {
                    var di = Ld(null == Z ? void 0 : Z.name) ? Z.name : "Unknown error";
                    D(bi, 2, di, "");
                } catch (b) {}
                try {
                    var ei = Ld(null == Z ? void 0 : Z.message) ? Z.message : "Caught " + Z;
                    D(bi, 3, ei, "");
                } catch (b) {}
                try {
                    var fi = Ld(null == Z ? void 0 : Z.stack) ? Z.stack : Error().stack;
                    fi && ub(bi, 4, fi.split(/\n\s*/));
                } catch (b) {}
                Wh = zb(Xh, 1, bi);
                var gi = new he();
                try {
                    D(gi, 1, Vh.ea || Vh.ca, "");
                } catch (b) {}
                try {
                    var hi = Hh();
                    D(gi, 2, hi, 0);
                } catch (b) {}
                try {
                    var ii = [].concat(u(n(Gh, "keys").call(Gh)));
                    ub(gi, 3, ii);
                } catch (b) {}
                Ab(Wh, 4, ne, gi);
                D(Wh, 5, Vh.la, 0);
                $c(Vh.qa, Wh);
            }
        } catch (b) {}
    }
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
    [
        [421072586, null, null, null, [[[12, null, null, null, 3, null, "gam(Top|Bottom)AnchorDemo"], [1]]]],
        [null, 7, null, [null, 0.1]],
        [427224460, null, null, [1]],
        [398776878, null, null, [1]],
        [419920765, null, null, [1]],
        [null, 408380992, null, [null, 0.01]],
        [400992469, null, null, [1]],
        [400992468, null, null, [1]],
        [null, 377289019, null, [null, 10000]],
        [430222765, null, null, [1]],
        [384734642, null, null, [1]],
        [null, 529, null, [null, 20]],
        [null, 494, null, [null, 5000]],
        [433000348, null, null, [1]],
        [426959957, null, null, [1]],
        [428885411, null, null, [1]],
        [429629782, null, null, [1]],
        [428675632, null, null, [1]],
        [425427550, null, null, [1]],
        [432208157, null, null, [1]],
        [430505584, null, null, [1]],
        [430487690, null, null, [1]],
        [433760699, null, null, [1]],
        [432436313, null, null, [1]],
        [433053132, null, null, [1]],
        [20, null, null, null, [[[1, [[6, null, null, 3, null, 0]]], [1]]]],
        [
            null,
            388529191,
            null,
            null,
            [
                [
                    [4, null, 59, null, null, null, null, ["4276767238"]],
                    [null, 86400],
                ],
            ],
        ],
        [null, 492, null, [null, 0.01]],
        [null, 398776877, null, [null, 60000]],
        [433324328, null, null, [1]],
        [null, 374201269, null, [null, 60000]],
        [399544548, null, null, [1]],
        [null, 371364213, null, [null, 60000]],
        [null, 373440923, null, [null, 0.0001]],
        [null, 376149757, null, [null, 0.0025]],
        [null, 396668915, null, [null, 5]],
        [377936516, null, null, [1]],
        [null, 47, null, [null, 1]],
        [null, null, 2, [null, null, "1-0-38"]],
        [
            392065905,
            null,
            null,
            null,
            [
                [
                    [
                        3,
                        [
                            [4, null, 15, null, null, null, null, ["18190176,155953048"]],
                            [4, null, 15, null, null, null, null, ["49944529"]],
                            [4, null, 15, null, null, null, null, ["5441"]],
                            [4, null, 15, null, null, null, null, ["6177"]],
                            [4, null, 15, null, null, null, null, ["6782"]],
                            [4, null, 15, null, null, null, null, ["6581"]],
                        ],
                    ],
                    [1],
                ],
            ],
        ],
        [null, 360245595, null, [null, 500]],
        [360245596, null, null, [1]],
        [null, 359346956, null, [null, 1]],
        [null, 61, null, [null, 0.001]],
        [null, 427187655, null, [null, 1]],
        [null, 427187656, null, [null, 1]],
        [null, 427187654, null, [null, 1000]],
        [null, 397316938, null, [null, 1000]],
        [null, 425668704, null, [null, 15360]],
        [null, 1921, null, [null, 72]],
        [null, 1920, null, [null, 24]],
        [null, 1922, null, [null, 5]],
        [null, 426169222, null, [null, 1000]],
        [null, 1917, null, [null, 300]],
        [null, 1916, null, [null, 0.001]],
        [422917269, null, null, [1]],
        [
            null,
            null,
            null,
            [
                null,
                null,
                null,
                [
                    "A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
                    "A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
                    "A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
                ],
            ],
            null,
            1934,
        ],
        [1959, null, null, [1]],
        [1953, null, null, [1]],
        [1954, null, null, [1]],
        [1960, null, null, [1]],
        [1947, null, null, [1]],
        [1938, null, null, [1]],
        [1948, null, null, [1]],
        [392736476, null, null, [1]],
        [
            null,
            null,
            null,
            [
                null,
                null,
                null,
                [
                    "AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=",
                    "Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
                    "A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
                    "AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
                    "A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
                ],
            ],
            null,
            1932,
        ],
        [null, 397907552, null, [null, 500]],
        [432938498, null, null, [1]],
    ],
    [
        [20, [[50, [[31062930], [31062931, [[380025941, null, null, [1]]]]], null, null, null, null, null, 101, null, 102]]],
        [
            2,
            [
                [10, [[31065642], [31065643]], null, null, null, null, null, 201, null, 102],
                [10, [[31060888]]],
                [10, [[31060889], [31060890]], null, null, null, null, null, null, null, 104],
                [10, [[31061165], [31061166, [[null, 363650251, null, [null, 2]]]], [31061167, [[null, 363650251, null, [null, 1]]]]], null, null, null, null, null, 1, null, 102],
                [
                    1000,
                    [
                        [
                            31064623,
                            null,
                            [
                                2,
                                [
                                    [
                                        2,
                                        [
                                            [8, null, null, 1, null, -1],
                                            [7, null, null, 1, null, 10],
                                        ],
                                    ],
                                    [4, null, 3],
                                ],
                            ],
                        ],
                        [
                            31064624,
                            null,
                            [
                                2,
                                [
                                    [
                                        2,
                                        [
                                            [8, null, null, 1, null, 29],
                                            [7, null, null, 1, null, 40],
                                        ],
                                    ],
                                    [4, null, 3],
                                ],
                            ],
                        ],
                    ],
                    [
                        2,
                        [
                            [4, null, 53],
                            [12, null, null, null, 4, null, "Chrome/(9[789]|\\d{3,})", ["navigator.userAgent"]],
                            [1, [[4, null, 8, null, null, null, null, ["navigator.serviceWorker.controller"]]]],
                            [4, null, 9, null, null, null, null, ["document.head.appendChild"]],
                            [1, [[4, null, 8, null, null, null, null, ["pbjs"]]]],
                        ],
                    ],
                ],
                [
                    1000,
                    [
                        [
                            31065402,
                            null,
                            [
                                2,
                                [
                                    [
                                        3,
                                        [
                                            [8, null, null, 6, null, 0, null, ["_pbjsGlobals.length"]],
                                            [4, null, 8, null, null, null, null, ["pbjs"]],
                                        ],
                                    ],
                                    [8, null, null, 6, null, 1, null, ["_pbjsGlobals.length"]],
                                ],
                            ],
                        ],
                    ],
                ],
                [10, [[44742767], [44742768]]],
                [10, [[44752585], [44752586, [[392065905, null, null, [1]]]]], null, 41],
                [
                    50,
                    [[44753506], [44753507, [[392065905, null, null, []]]]],
                    [
                        3,
                        [
                            [4, null, 15, null, null, null, null, ["18190176,155953048"]],
                            [4, null, 15, null, null, null, null, ["49944529"]],
                            [4, null, 15, null, null, null, null, ["5441"]],
                            [4, null, 15, null, null, null, null, ["6177"]],
                            [4, null, 15, null, null, null, null, ["6782"]],
                            [4, null, 15, null, null, null, null, ["6581"]],
                        ],
                    ],
                    41,
                ],
            ],
        ],
        [
            13,
            [
                [10, [[44759847], [44759848, [[1947, null, null, []]]]]],
                [10, [[44759849], [44759850]]],
                [1000, [[21067496]], [4, null, 9, null, null, null, null, ["document.hasTrustToken"]]],
                [
                    1000,
                    [
                        [
                            31060475,
                            null,
                            [
                                2,
                                [
                                    [1, [[4, null, 9, null, null, null, null, ["window.PeriodicSyncManager"]]]],
                                    [12, null, null, null, 4, null, "Android", ["navigator.userAgent"]],
                                ],
                            ],
                        ],
                    ],
                ],
                [
                    500,
                    [
                        [31061692],
                        [
                            31061693,
                            [
                                [77, null, null, [1]],
                                [78, null, null, [1]],
                                [85, null, null, [1]],
                                [80, null, null, [1]],
                                [76, null, null, [1]],
                            ],
                        ],
                    ],
                    [4, null, 6, null, null, null, null, ["31061691"]],
                ],
                [1, [[31062890], [31062891, [[397841828, null, null, [1]]]]]],
                [1, [[31062946]], [4, null, 27, null, null, null, null, ["document.prerendering"]]],
                [1, [[31062947]], [1, [[4, null, 27, null, null, null, null, ["document.prerendering"]]]]],
                [50, [[31064018], [31064019, [[1961, null, null, [1]]]]]],
                [
                    1,
                    [
                        [
                            31065981,
                            null,
                            [
                                2,
                                [
                                    [6, null, null, 3, null, 0],
                                    [12, null, null, null, 4, null, "Chrome/(9[23456789]|\\d{3,})", ["navigator.userAgent"]],
                                    [4, null, 27, null, null, null, null, ["crossOriginIsolated"]],
                                ],
                            ],
                        ],
                    ],
                ],
            ],
        ],
        [
            4,
            [
                [
                    null,
                    [
                        [44714449, [[null, 7, null, [null, 1]]]],
                        [
                            676982961,
                            [
                                [null, 7, null, [null, 0.4]],
                                [212, null, null, [1]],
                            ],
                        ],
                        [676982996, [[null, 7, null, [null, 1]]]],
                    ],
                ],
                [
                    10,
                    [[31063162], [31063163, [[359351145, null, null, [1]]]]],
                    [
                        3,
                        [
                            [4, null, 15, null, null, null, null, ["18190176,155953048"]],
                            [4, null, 15, null, null, null, null, ["49944529"]],
                            [4, null, 15, null, null, null, null, ["5441"]],
                            [4, null, 15, null, null, null, null, ["6177"]],
                            [4, null, 15, null, null, null, null, ["6782"]],
                            [4, null, 15, null, null, null, null, ["6581"]],
                        ],
                    ],
                    40,
                ],
            ],
        ],
        [
            3,
            [
                [null, [[44732730], [44732731]]],
                [null, [[676982960], [676982994], [676982998]]],
                [null, [[676982975], [676982980]]],
                [
                    null,
                    [
                        [
                            1337,
                            [
                                [77, null, null, [1]],
                                [78, null, null, [1]],
                                [85, null, null, [1]],
                                [80, null, null, [1]],
                                [76, null, null, [1]],
                                [84, null, null, [1]],
                                [188, null, null, [1]],
                            ],
                        ],
                    ],
                ],
                [10, [[21068766], [21068767, [[null, 488, null, [null, 0.1]]]]], null, 42],
                [
                    1000,
                    [
                        [
                            31060545,
                            [
                                [
                                    null,
                                    null,
                                    363931022,
                                    [
                                        null,
                                        null,
                                        "A0Bg2nddUj4Nw6FzsXudBXHZs1aAzIgO+UGzfJGkC1f4J56ghvJ6TCirjdt8BUwsK14sBBjWGmOY+QCTr2HrBQoAAACBeyJvcmlnaW4iOiJodHRwczovL3NlY3VyZXB1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiU3VicmVzb3VyY2VXZWJCdW5kbGVzIiwiZXhwaXJ5IjoxNjUyODMxOTk5LCJpc1RoaXJkUGFydHkiOnRydWV9",
                                    ],
                                ],
                            ],
                        ],
                    ],
                    [
                        2,
                        [
                            [12, null, null, null, 4, null, "Chrome/(9\\d|\\d{3,})", ["navigator.userAgent"]],
                            [
                                3,
                                [
                                    [
                                        2,
                                        [
                                            [
                                                2,
                                                [
                                                    [8, null, null, 1, null, -1],
                                                    [7, null, null, 1, null, 10],
                                                ],
                                            ],
                                            [4, null, 3],
                                        ],
                                    ],
                                    [
                                        2,
                                        [
                                            [
                                                2,
                                                [
                                                    [8, null, null, 1, null, 29],
                                                    [7, null, null, 1, null, 50],
                                                ],
                                            ],
                                            [4, null, 3],
                                        ],
                                    ],
                                ],
                            ],
                        ],
                    ],
                ],
                [1, [[31062923], [31062924, [[144, null, null, [1]]]]]],
                [null, [[31063916], [31063917, [[null, 413725046, null, [null, 1]]]]], null, 40],
                [10, [[31064225], [31064226, [[432254233, null, null, [1]]]]]],
                [
                    1000,
                    [
                        [
                            31065007,
                            null,
                            [
                                3,
                                [
                                    [
                                        2,
                                        [
                                            [
                                                2,
                                                [
                                                    [8, null, null, 1, null, 9],
                                                    [7, null, null, 1, null, 15],
                                                ],
                                            ],
                                            [4, null, 3],
                                        ],
                                    ],
                                    [
                                        2,
                                        [
                                            [
                                                2,
                                                [
                                                    [8, null, null, 1, null, 19],
                                                    [7, null, null, 1, null, 25],
                                                ],
                                            ],
                                            [4, null, 3],
                                        ],
                                    ],
                                ],
                            ],
                        ],
                        [
                            31065008,
                            [
                                [384700360, null, null, [1]],
                                [384700361, null, null, [1]],
                            ],
                            [
                                3,
                                [
                                    [
                                        2,
                                        [
                                            [
                                                2,
                                                [
                                                    [8, null, null, 1, null, 14],
                                                    [7, null, null, 1, null, 20],
                                                ],
                                            ],
                                            [4, null, 3],
                                        ],
                                    ],
                                    [
                                        2,
                                        [
                                            [
                                                2,
                                                [
                                                    [8, null, null, 1, null, 24],
                                                    [7, null, null, 1, null, 30],
                                                ],
                                            ],
                                            [4, null, 3],
                                        ],
                                    ],
                                ],
                            ],
                        ],
                    ],
                ],
                [
                    1,
                    [
                        [31065615],
                        [
                            31065616,
                            [
                                [null, 422912379, null, [null, 1]],
                                [null, 422912097, null, [null, 5000000]],
                            ],
                        ],
                        [
                            31065617,
                            [
                                [null, 422912379, null, [null, 2]],
                                [null, 422912097, null, [null, 500000]],
                            ],
                        ],
                        [
                            31065618,
                            [
                                [null, 422912379, null, [null, 3]],
                                [null, 422912097, null, [null, 50000]],
                            ],
                        ],
                    ],
                ],
                [
                    10,
                    [[44755845], [44755846, [[null, 387165532, null, [null, 0.05]]]]],
                    [
                        2,
                        [
                            [1, [[4, null, 63]]],
                            [4, null, 59, null, null, null, null, ["3372044115", "2902623493", "1900948638", "3922065694", "1163038905", "2299118599", "528876146", "1417165976"]],
                        ],
                    ],
                ],
            ],
        ],
        [
            5,
            [
                [
                    50,
                    [
                        [21062785, null, [4, null, 8, null, null, null, null, ["_gmptnl"]]],
                        [21062786, [[23, null, null, [1]]], [4, null, 8, null, null, null, null, ["_gmptnl"]]],
                    ],
                    [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"],
                    43,
                ],
                [900, [[21062812, [[23, null, null, [1]]], [4, null, 8, null, null, null, null, ["_gmptnl"]]]], [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 43],
                [
                    50,
                    [
                        [21063916, null, [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]],
                        [21063917, [[23, null, null, [1]]], [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]],
                    ],
                    [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"],
                    44,
                ],
                [900, [[21064113, [[23, null, null, [1]]], [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]]], [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 44],
                [10, [[31060437], [31060438, [[200, null, null, [1]]]], [31060439, [[220, null, null, [1]]]]], null, 24],
                [
                    10,
                    [
                        [31060837],
                        [
                            31060838,
                            [
                                [368279556, null, null, [1]],
                                [366809413, null, null, [1]],
                            ],
                        ],
                    ],
                ],
                [
                    150,
                    [
                        [31061482],
                        [
                            31061483,
                            [
                                [360245597, null, null, [1]],
                                [
                                    null,
                                    494,
                                    null,
                                    [null, 5000],
                                    [
                                        [
                                            [12, null, null, null, 4, null, "Android", ["navigator.userAgent"]],
                                            [null, 5500],
                                        ],
                                    ],
                                ],
                                [null, 517, null, [null, 1]],
                            ],
                        ],
                        [
                            31065374,
                            [
                                [427841102, null, null, [1]],
                                [360245597, null, null, [1]],
                                [
                                    null,
                                    494,
                                    null,
                                    [null, 5000],
                                    [
                                        [
                                            [12, null, null, null, 4, null, "Android", ["navigator.userAgent"]],
                                            [null, 5500],
                                        ],
                                    ],
                                ],
                                [null, 517, null, [null, 1]],
                            ],
                        ],
                        [
                            44753752,
                            [
                                [360245597, null, null, [1]],
                                [
                                    null,
                                    494,
                                    null,
                                    [null, 5000],
                                    [
                                        [
                                            [12, null, null, null, 4, null, "Android", ["navigator.userAgent"]],
                                            [null, 5500],
                                        ],
                                    ],
                                ],
                                [null, 517, null, [null, 1]],
                            ],
                        ],
                    ],
                    [
                        3,
                        [
                            [4, null, 8, null, null, null, null, ["gmaSdk.getQueryInfo"]],
                            [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],
                            [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaSig.postMessage"]],
                        ],
                    ],
                    15,
                ],
                [
                    50,
                    [
                        [
                            31063011,
                            [
                                [null, null, null, [null, null, null, ["scar"]], null, 489],
                                [360245597, null, null, [1]],
                                [
                                    null,
                                    494,
                                    null,
                                    [null, 5000],
                                    [
                                        [
                                            [12, null, null, null, 4, null, "Android", ["navigator.userAgent"]],
                                            [null, 5500],
                                        ],
                                    ],
                                ],
                                [null, 517, null, [null, 1]],
                            ],
                        ],
                        [
                            31063012,
                            [
                                [360245597, null, null, [1]],
                                [
                                    null,
                                    494,
                                    null,
                                    [null, 5000],
                                    [
                                        [
                                            [12, null, null, null, 4, null, "Android", ["navigator.userAgent"]],
                                            [null, 5500],
                                        ],
                                    ],
                                ],
                                [null, 517, null, [null, 1]],
                            ],
                        ],
                        [44753813],
                    ],
                    [
                        3,
                        [
                            [4, null, 8, null, null, null, null, ["gmaSdk.getQueryInfo"]],
                            [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],
                            [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaSig.postMessage"]],
                        ],
                    ],
                    15,
                ],
                [50, [[31063377], [31063378, [[1958, null, null, [1]]]]]],
                [null, [[31063820], [31063821, [[410573952, null, null, [1]]]]]],
                [
                    null,
                    [
                        [
                            31063841,
                            [
                                [360245597, null, null, [1]],
                                [
                                    null,
                                    494,
                                    null,
                                    [null, 5000],
                                    [
                                        [
                                            [12, null, null, null, 4, null, "Android", ["navigator.userAgent"]],
                                            [null, 5500],
                                        ],
                                    ],
                                ],
                                [null, 517, null, [null, 1]],
                            ],
                        ],
                    ],
                    [
                        3,
                        [
                            [4, null, 8, null, null, null, null, ["gmaSdk.getQueryInfo"]],
                            [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],
                            [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaSig.postMessage"]],
                        ],
                    ],
                    15,
                ],
                [10, [[31064681], [31064682, [[423820325, null, null, [1]]]]]],
                [10, [[31064685], [31064686, [[421072586, null, null, [1]]]]]],
                [
                    1,
                    [
                        [31064687],
                        [31064688, [[null, 425668704, null, [null, 51200]]]],
                        [31064689, [[null, 425668704, null, [null, 56320]]]],
                        [31064690, [[null, 425668704, null, [null, 61440]]]],
                        [31064691, [[null, 425668704, null, [null, 64512]]]],
                    ],
                ],
                [10, [[31064835], [31064836, [[421896358, null, null, [1]]]]]],
                [
                    null,
                    [
                        [
                            31064865,
                            [
                                [null, 360245595, null, [null, 200]],
                                [360245597, null, null, [1]],
                                [
                                    null,
                                    494,
                                    null,
                                    [null, 5000],
                                    [
                                        [
                                            [12, null, null, null, 4, null, "Android", ["navigator.userAgent"]],
                                            [null, 5500],
                                        ],
                                    ],
                                ],
                                [null, 517, null, [null, 1]],
                            ],
                        ],
                    ],
                    [
                        3,
                        [
                            [4, null, 8, null, null, null, null, ["gmaSdk.getQueryInfo"]],
                            [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],
                            [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaSig.postMessage"]],
                        ],
                    ],
                    15,
                ],
                [50, [[31064926], [31064927, [[414808783, null, null, [1]]]]]],
                [1, [[31065623], [31065624, [[430565960, null, null, [1]]]]]],
                [100, [[31065713], [31065714, [[null, 432023148, null, [null, 0.01]]]]]],
                [10, [[31065785], [31065786, [[434777396, null, null, [1]]]]]],
                [10, [[31065802], [31065803, [[427203966, null, null, [1]]]]]],
                [50, [[31065842], [31065843, [[427224460, null, null, []]]]]],
                [
                    50,
                    [
                        [31065998],
                        [
                            31065999,
                            [
                                [384700360, null, null, [1]],
                                [384700361, null, null, [1]],
                            ],
                        ],
                    ],
                ],
                [100, [[31066023], [31066024, [[434841618, null, null, [1]]]]]],
                [100, [[31066025], [31066026, [[45368451, null, null, [1]]]]]],
                [
                    1000,
                    [
                        [31066031, [[null, 24, null, [null, 31066031]]], [6, null, null, 4, null, 10]],
                        [31066032, [[null, 24, null, [null, 31066032]]], [6, null, null, 4, null, 11]],
                        [31066033, [[null, 24, null, [null, 31066033]]], [6, null, null, 4, null, 12]],
                        [31066034, [[null, 24, null, [null, 31066034]]], [6, null, null, 4, null, 13]],
                        [31066035, [[null, 24, null, [null, 31066035]]], [6, null, null, 4, null, 14]],
                        [31066036, [[null, 24, null, [null, 31066036]]], [6, null, null, 4, null, 15]],
                        [31066037, [[null, 24, null, [null, 31066037]]], [6, null, null, 4, null, 16]],
                        [31066038, [[null, 24, null, [null, 31066038]]], [6, null, null, 4, null, 17]],
                    ],
                    [4, null, 3],
                    1,
                ],
                [
                    1000,
                    [
                        [31066130, [[null, 24, null, [null, 31066130]]], [6, null, null, 4, null, 2]],
                        [31066131, [[null, 24, null, [null, 31066131]]], [6, null, null, 4, null, 3]],
                    ],
                    [4, null, 3],
                    1,
                ],
                [100, [[31066342], [31066343, [[433600687, null, null, [1]]]]]],
                [10, [[31066920], [31066921, [[434765955, null, null, [1]]]]]],
                [10, [[44761477], [44761478, [[null, 427198696, null, [null, 1]]]]]],
            ],
        ],
        [
            12,
            [
                [
                    50,
                    [
                        [31061828],
                        [
                            31061829,
                            [
                                [
                                    null,
                                    1126,
                                    null,
                                    [null, 5000],
                                    [
                                        [
                                            [12, null, null, null, 4, null, "Android", ["navigator.userAgent"]],
                                            [null, 5500],
                                        ],
                                    ],
                                ],
                                [
                                    null,
                                    1032,
                                    null,
                                    [null, 200],
                                    [
                                        [
                                            [12, null, null, null, 4, null, "Android", ["navigator.userAgent"]],
                                            [null, 500],
                                        ],
                                    ],
                                ],
                                [360245597, null, null, [1]],
                                [
                                    null,
                                    494,
                                    null,
                                    [null, 5000],
                                    [
                                        [
                                            [12, null, null, null, 4, null, "Android", ["navigator.userAgent"]],
                                            [null, 5500],
                                        ],
                                    ],
                                ],
                                [null, 517, null, [null, 1]],
                            ],
                        ],
                        [31065787],
                        [
                            31066000,
                            [
                                [1150, null, null, [1]],
                                [
                                    null,
                                    1126,
                                    null,
                                    [null, 5000],
                                    [
                                        [
                                            [12, null, null, null, 4, null, "Android", ["navigator.userAgent"]],
                                            [null, 5500],
                                        ],
                                    ],
                                ],
                                [null, 1032, null, [null, 10000]],
                                [427841102, null, null, [1]],
                                [360245597, null, null, [1]],
                                [
                                    null,
                                    494,
                                    null,
                                    [null, 5000],
                                    [
                                        [
                                            [12, null, null, null, 4, null, "Android", ["navigator.userAgent"]],
                                            [null, 5500],
                                        ],
                                    ],
                                ],
                                [null, 517, null, [null, 1]],
                            ],
                        ],
                    ],
                    null,
                    15,
                ],
                [20, [[21065724], [21065725, [[203, null, null, [1]]]]], [4, null, 9, null, null, null, null, ["LayoutShift"]]],
                [
                    50,
                    [
                        [
                            31060006,
                            null,
                            [
                                2,
                                [
                                    [12, null, null, null, 4, null, "Android", ["navigator.userAgent"]],
                                    [12, null, null, null, 4, null, "Chrome/(89|9\\d|\\d{3,})", ["navigator.userAgent"]],
                                    [4, null, 9, null, null, null, null, ["window.PeriodicSyncManager"]],
                                ],
                            ],
                        ],
                        [
                            31060007,
                            [[1928, null, null, [1]]],
                            [
                                2,
                                [
                                    [12, null, null, null, 4, null, "Android", ["navigator.userAgent"]],
                                    [12, null, null, null, 4, null, "Chrome/(89|9\\d|\\d{3,})", ["navigator.userAgent"]],
                                    [4, null, 9, null, null, null, null, ["window.PeriodicSyncManager"]],
                                ],
                            ],
                        ],
                    ],
                    null,
                    21,
                ],
                [10, [[31060032], [31060033, [[1928, null, null, [1]]]]], null, 21],
                [
                    10,
                    [
                        [31061690],
                        [
                            31061691,
                            [
                                [83, null, null, [1]],
                                [84, null, null, [1]],
                            ],
                        ],
                    ],
                ],
                [10, [[31065721], [31065722, [[432946749, null, null, [1]]]]]],
                [
                    50,
                    [[31066013], [31066014, [[392736476, null, null, []]]]],
                    [
                        2,
                        [
                            [12, null, null, null, 4, null, "Chrome/(9[3456789]|\\d{3,})", ["navigator.userAgent"]],
                            [4, null, 9, null, null, null, null, ["window.PeriodicSyncManager"]],
                        ],
                    ],
                    45,
                ],
                [100, [[31066017], [31066018, [[434462125, null, null, [1]]]]]],
            ],
        ],
        [9, [[1000, [[31063049]], [4, null, 13, null, null, null, null, ["cxbbhbxm"]]]]],
        [
            23,
            [
                [100, [[31065388], [31065389, [[null, 394275319, null, [null, 1]]]]], [4, null, 67]],
                [100, [[31065440], [31065441, [[429076828, null, null, [1]]]]], [4, null, 67]],
            ],
        ],
        [
            6,
            [
                [
                    1000,
                    [
                        [
                            31065454,
                            null,
                            [
                                2,
                                [
                                    [
                                        2,
                                        [
                                            [8, null, null, 1, null, -1],
                                            [7, null, null, 1, null, 10],
                                        ],
                                    ],
                                    [4, null, 3],
                                ],
                            ],
                        ],
                        [
                            31065455,
                            [[501, null, null, [1]]],
                            [
                                2,
                                [
                                    [
                                        2,
                                        [
                                            [8, null, null, 1, null, 29],
                                            [7, null, null, 1, null, 40],
                                        ],
                                    ],
                                    [4, null, 3],
                                ],
                            ],
                        ],
                    ],
                    [
                        2,
                        [
                            [4, null, 66],
                            [12, null, null, null, 4, null, "Chrome/(9[789]|\\d{3,})", ["navigator.userAgent"]],
                            [1, [[4, null, 8, null, null, null, null, ["navigator.serviceWorker.controller"]]]],
                            [4, null, 9, null, null, null, null, ["document.head.appendChild"]],
                        ],
                    ],
                ],
            ],
        ],
    ],
    null,
    null,
    [0.001, 1000, 1, 1000],
]));
