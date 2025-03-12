var dl =
        typeof globalThis < "u"
            ? globalThis
            : typeof window < "u"
            ? window
            : typeof global < "u"
            ? global
            : typeof self < "u"
            ? self
            : {},
    Hr = {},
    hl = {
        get exports() {
            return Hr;
        },
        set exports(e) {
            Hr = e;
        },
    };
/*!
 * jQuery JavaScript Library v3.6.3
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-12-20T21:28Z
 */ (function (e) {
    (function (t, r) {
        e.exports = t.document
            ? r(t, !0)
            : function (a) {
                  if (!a.document)
                      throw new Error(
                          "jQuery requires a window with a document"
                      );
                  return r(a);
              };
    })(typeof window < "u" ? window : dl, function (t, r) {
        var a = [],
            s = Object.getPrototypeOf,
            u = a.slice,
            c = a.flat
                ? function (n) {
                      return a.flat.call(n);
                  }
                : function (n) {
                      return a.concat.apply([], n);
                  },
            h = a.push,
            p = a.indexOf,
            g = {},
            y = g.toString,
            x = g.hasOwnProperty,
            w = x.toString,
            D = w.call(Object),
            N = {},
            P = function (o) {
                return (
                    typeof o == "function" &&
                    typeof o.nodeType != "number" &&
                    typeof o.item != "function"
                );
            },
            W = function (o) {
                return o != null && o === o.window;
            },
            O = t.document,
            k = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function J(n, o, l) {
            l = l || O;
            var f,
                v,
                b = l.createElement("script");
            if (((b.text = n), o))
                for (f in k)
                    (v = o[f] || (o.getAttribute && o.getAttribute(f))),
                        v && b.setAttribute(f, v);
            l.head.appendChild(b).parentNode.removeChild(b);
        }
        function K(n) {
            return n == null
                ? n + ""
                : typeof n == "object" || typeof n == "function"
                ? g[y.call(n)] || "object"
                : typeof n;
        }
        var oe = "3.6.3",
            d = function (n, o) {
                return new d.fn.init(n, o);
            };
        (d.fn = d.prototype =
            {
                jquery: oe,
                constructor: d,
                length: 0,
                toArray: function () {
                    return u.call(this);
                },
                get: function (n) {
                    return n == null
                        ? u.call(this)
                        : n < 0
                        ? this[n + this.length]
                        : this[n];
                },
                pushStack: function (n) {
                    var o = d.merge(this.constructor(), n);
                    return (o.prevObject = this), o;
                },
                each: function (n) {
                    return d.each(this, n);
                },
                map: function (n) {
                    return this.pushStack(
                        d.map(this, function (o, l) {
                            return n.call(o, l, o);
                        })
                    );
                },
                slice: function () {
                    return this.pushStack(u.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                even: function () {
                    return this.pushStack(
                        d.grep(this, function (n, o) {
                            return (o + 1) % 2;
                        })
                    );
                },
                odd: function () {
                    return this.pushStack(
                        d.grep(this, function (n, o) {
                            return o % 2;
                        })
                    );
                },
                eq: function (n) {
                    var o = this.length,
                        l = +n + (n < 0 ? o : 0);
                    return this.pushStack(l >= 0 && l < o ? [this[l]] : []);
                },
                end: function () {
                    return this.prevObject || this.constructor();
                },
                push: h,
                sort: a.sort,
                splice: a.splice,
            }),
            (d.extend = d.fn.extend =
                function () {
                    var n,
                        o,
                        l,
                        f,
                        v,
                        b,
                        m = arguments[0] || {},
                        A = 1,
                        T = arguments.length,
                        I = !1;
                    for (
                        typeof m == "boolean" &&
                            ((I = m), (m = arguments[A] || {}), A++),
                            typeof m != "object" && !P(m) && (m = {}),
                            A === T && ((m = this), A--);
                        A < T;
                        A++
                    )
                        if ((n = arguments[A]) != null)
                            for (o in n)
                                (f = n[o]),
                                    !(o === "__proto__" || m === f) &&
                                        (I &&
                                        f &&
                                        (d.isPlainObject(f) ||
                                            (v = Array.isArray(f)))
                                            ? ((l = m[o]),
                                              v && !Array.isArray(l)
                                                  ? (b = [])
                                                  : !v && !d.isPlainObject(l)
                                                  ? (b = {})
                                                  : (b = l),
                                              (v = !1),
                                              (m[o] = d.extend(I, b, f)))
                                            : f !== void 0 && (m[o] = f));
                    return m;
                }),
            d.extend({
                expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (n) {
                    throw new Error(n);
                },
                noop: function () {},
                isPlainObject: function (n) {
                    var o, l;
                    return !n || y.call(n) !== "[object Object]"
                        ? !1
                        : ((o = s(n)),
                          o
                              ? ((l =
                                    x.call(o, "constructor") && o.constructor),
                                typeof l == "function" && w.call(l) === D)
                              : !0);
                },
                isEmptyObject: function (n) {
                    var o;
                    for (o in n) return !1;
                    return !0;
                },
                globalEval: function (n, o, l) {
                    J(n, { nonce: o && o.nonce }, l);
                },
                each: function (n, o) {
                    var l,
                        f = 0;
                    if (Z(n))
                        for (
                            l = n.length;
                            f < l && o.call(n[f], f, n[f]) !== !1;
                            f++
                        );
                    else for (f in n) if (o.call(n[f], f, n[f]) === !1) break;
                    return n;
                },
                makeArray: function (n, o) {
                    var l = o || [];
                    return (
                        n != null &&
                            (Z(Object(n))
                                ? d.merge(l, typeof n == "string" ? [n] : n)
                                : h.call(l, n)),
                        l
                    );
                },
                inArray: function (n, o, l) {
                    return o == null ? -1 : p.call(o, n, l);
                },
                merge: function (n, o) {
                    for (var l = +o.length, f = 0, v = n.length; f < l; f++)
                        n[v++] = o[f];
                    return (n.length = v), n;
                },
                grep: function (n, o, l) {
                    for (var f, v = [], b = 0, m = n.length, A = !l; b < m; b++)
                        (f = !o(n[b], b)), f !== A && v.push(n[b]);
                    return v;
                },
                map: function (n, o, l) {
                    var f,
                        v,
                        b = 0,
                        m = [];
                    if (Z(n))
                        for (f = n.length; b < f; b++)
                            (v = o(n[b], b, l)), v != null && m.push(v);
                    else
                        for (b in n)
                            (v = o(n[b], b, l)), v != null && m.push(v);
                    return c(m);
                },
                guid: 1,
                support: N,
            }),
            typeof Symbol == "function" &&
                (d.fn[Symbol.iterator] = a[Symbol.iterator]),
            d.each(
                "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                    " "
                ),
                function (n, o) {
                    g["[object " + o + "]"] = o.toLowerCase();
                }
            );
        function Z(n) {
            var o = !!n && "length" in n && n.length,
                l = K(n);
            return P(n) || W(n)
                ? !1
                : l === "array" ||
                      o === 0 ||
                      (typeof o == "number" && o > 0 && o - 1 in n);
        }
        var Y = (function (n) {
            var o,
                l,
                f,
                v,
                b,
                m,
                A,
                T,
                I,
                H,
                U,
                R,
                M,
                Q,
                se,
                z,
                Ie,
                Le,
                Ke,
                ye = "sizzle" + 1 * new Date(),
                le = n.document,
                Ue = 0,
                he = 0,
                Se = qn(),
                un = qn(),
                Hn = qn(),
                Ye = qn(),
                Ft = function (_, S) {
                    return _ === S && (U = !0), 0;
                },
                jt = {}.hasOwnProperty,
                Ve = [],
                Dt = Ve.pop,
                at = Ve.push,
                Tt = Ve.push,
                Ja = Ve.slice,
                Pt = function (_, S) {
                    for (var L = 0, q = _.length; L < q; L++)
                        if (_[L] === S) return L;
                    return -1;
                },
                Dr =
                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ve = "[\\x20\\t\\r\\n\\f]",
                Rt =
                    "(?:\\\\[\\da-fA-F]{1,6}" +
                    ve +
                    "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                Ka =
                    "\\[" +
                    ve +
                    "*(" +
                    Rt +
                    ")(?:" +
                    ve +
                    "*([*^$|!~]?=)" +
                    ve +
                    `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
                    Rt +
                    "))|)" +
                    ve +
                    "*\\]",
                Tr =
                    ":(" +
                    Rt +
                    `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
                    Ka +
                    ")*)|.*)\\)|)",
                Qo = new RegExp(ve + "+", "g"),
                On = new RegExp(
                    "^" + ve + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ve + "+$",
                    "g"
                ),
                Zo = new RegExp("^" + ve + "*," + ve + "*"),
                Ya = new RegExp("^" + ve + "*([>+~]|" + ve + ")" + ve + "*"),
                el = new RegExp(ve + "|>"),
                tl = new RegExp(Tr),
                nl = new RegExp("^" + Rt + "$"),
                Mn = {
                    ID: new RegExp("^#(" + Rt + ")"),
                    CLASS: new RegExp("^\\.(" + Rt + ")"),
                    TAG: new RegExp("^(" + Rt + "|[*])"),
                    ATTR: new RegExp("^" + Ka),
                    PSEUDO: new RegExp("^" + Tr),
                    CHILD: new RegExp(
                        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                            ve +
                            "*(even|odd|(([+-]|)(\\d*)n|)" +
                            ve +
                            "*(?:([+-]|)" +
                            ve +
                            "*(\\d+)|))" +
                            ve +
                            "*\\)|)",
                        "i"
                    ),
                    bool: new RegExp("^(?:" + Dr + ")$", "i"),
                    needsContext: new RegExp(
                        "^" +
                            ve +
                            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                            ve +
                            "*((?:-\\d)?\\d*)" +
                            ve +
                            "*\\)|)(?=[^-]|$)",
                        "i"
                    ),
                },
                rl = /HTML$/i,
                al = /^(?:input|select|textarea|button)$/i,
                il = /^h\d$/i,
                fn = /^[^{]+\{\s*\[native \w/,
                ol = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Sr = /[+~]/,
                _t = new RegExp(
                    "\\\\[\\da-fA-F]{1,6}" + ve + "?|\\\\([^\\r\\n\\f])",
                    "g"
                ),
                xt = function (_, S) {
                    var L = "0x" + _.slice(1) - 65536;
                    return (
                        S ||
                        (L < 0
                            ? String.fromCharCode(L + 65536)
                            : String.fromCharCode(
                                  (L >> 10) | 55296,
                                  (L & 1023) | 56320
                              ))
                    );
                },
                za = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Qa = function (_, S) {
                    return S
                        ? _ === "\0"
                            ? "�"
                            : _.slice(0, -1) +
                              "\\" +
                              _.charCodeAt(_.length - 1).toString(16) +
                              " "
                        : "\\" + _;
                },
                Za = function () {
                    R();
                },
                ll = Wn(
                    function (_) {
                        return (
                            _.disabled === !0 &&
                            _.nodeName.toLowerCase() === "fieldset"
                        );
                    },
                    { dir: "parentNode", next: "legend" }
                );
            try {
                Tt.apply((Ve = Ja.call(le.childNodes)), le.childNodes),
                    Ve[le.childNodes.length].nodeType;
            } catch {
                Tt = {
                    apply: Ve.length
                        ? function (S, L) {
                              at.apply(S, Ja.call(L));
                          }
                        : function (S, L) {
                              for (
                                  var q = S.length, E = 0;
                                  (S[q++] = L[E++]);

                              );
                              S.length = q - 1;
                          },
                };
            }
            function _e(_, S, L, q) {
                var E,
                    B,
                    V,
                    X,
                    G,
                    ne,
                    ee,
                    ie = S && S.ownerDocument,
                    fe = S ? S.nodeType : 9;
                if (
                    ((L = L || []),
                    typeof _ != "string" ||
                        !_ ||
                        (fe !== 1 && fe !== 9 && fe !== 11))
                )
                    return L;
                if (!q && (R(S), (S = S || M), se)) {
                    if (fe !== 11 && (G = ol.exec(_)))
                        if ((E = G[1])) {
                            if (fe === 9)
                                if ((V = S.getElementById(E))) {
                                    if (V.id === E) return L.push(V), L;
                                } else return L;
                            else if (
                                ie &&
                                (V = ie.getElementById(E)) &&
                                Ke(S, V) &&
                                V.id === E
                            )
                                return L.push(V), L;
                        } else {
                            if (G[2])
                                return (
                                    Tt.apply(L, S.getElementsByTagName(_)), L
                                );
                            if (
                                (E = G[3]) &&
                                l.getElementsByClassName &&
                                S.getElementsByClassName
                            )
                                return (
                                    Tt.apply(L, S.getElementsByClassName(E)), L
                                );
                        }
                    if (
                        l.qsa &&
                        !Ye[_ + " "] &&
                        (!z || !z.test(_)) &&
                        (fe !== 1 || S.nodeName.toLowerCase() !== "object")
                    ) {
                        if (
                            ((ee = _),
                            (ie = S),
                            fe === 1 && (el.test(_) || Ya.test(_)))
                        ) {
                            for (
                                ie = (Sr.test(_) && Nr(S.parentNode)) || S,
                                    (ie !== S || !l.scope) &&
                                        ((X = S.getAttribute("id"))
                                            ? (X = X.replace(za, Qa))
                                            : S.setAttribute("id", (X = ye))),
                                    ne = m(_),
                                    B = ne.length;
                                B--;

                            )
                                ne[B] =
                                    (X ? "#" + X : ":scope") + " " + Bn(ne[B]);
                            ee = ne.join(",");
                        }
                        try {
                            if (
                                l.cssSupportsSelector &&
                                !CSS.supports("selector(:is(" + ee + "))")
                            )
                                throw new Error();
                            return Tt.apply(L, ie.querySelectorAll(ee)), L;
                        } catch {
                            Ye(_, !0);
                        } finally {
                            X === ye && S.removeAttribute("id");
                        }
                    }
                }
                return T(_.replace(On, "$1"), S, L, q);
            }
            function qn() {
                var _ = [];
                function S(L, q) {
                    return (
                        _.push(L + " ") > f.cacheLength && delete S[_.shift()],
                        (S[L + " "] = q)
                    );
                }
                return S;
            }
            function ft(_) {
                return (_[ye] = !0), _;
            }
            function it(_) {
                var S = M.createElement("fieldset");
                try {
                    return !!_(S);
                } catch {
                    return !1;
                } finally {
                    S.parentNode && S.parentNode.removeChild(S), (S = null);
                }
            }
            function Ar(_, S) {
                for (var L = _.split("|"), q = L.length; q--; )
                    f.attrHandle[L[q]] = S;
            }
            function ei(_, S) {
                var L = S && _,
                    q =
                        L &&
                        _.nodeType === 1 &&
                        S.nodeType === 1 &&
                        _.sourceIndex - S.sourceIndex;
                if (q) return q;
                if (L) {
                    for (; (L = L.nextSibling); ) if (L === S) return -1;
                }
                return _ ? 1 : -1;
            }
            function sl(_) {
                return function (S) {
                    var L = S.nodeName.toLowerCase();
                    return L === "input" && S.type === _;
                };
            }
            function ul(_) {
                return function (S) {
                    var L = S.nodeName.toLowerCase();
                    return (L === "input" || L === "button") && S.type === _;
                };
            }
            function ti(_) {
                return function (S) {
                    return "form" in S
                        ? S.parentNode && S.disabled === !1
                            ? "label" in S
                                ? "label" in S.parentNode
                                    ? S.parentNode.disabled === _
                                    : S.disabled === _
                                : S.isDisabled === _ ||
                                  (S.isDisabled !== !_ && ll(S) === _)
                            : S.disabled === _
                        : "label" in S
                        ? S.disabled === _
                        : !1;
                };
            }
            function Ht(_) {
                return ft(function (S) {
                    return (
                        (S = +S),
                        ft(function (L, q) {
                            for (
                                var E, B = _([], L.length, S), V = B.length;
                                V--;

                            )
                                L[(E = B[V])] && (L[E] = !(q[E] = L[E]));
                        })
                    );
                });
            }
            function Nr(_) {
                return _ && typeof _.getElementsByTagName < "u" && _;
            }
            (l = _e.support = {}),
                (b = _e.isXML =
                    function (_) {
                        var S = _ && _.namespaceURI,
                            L = _ && (_.ownerDocument || _).documentElement;
                        return !rl.test(S || (L && L.nodeName) || "HTML");
                    }),
                (R = _e.setDocument =
                    function (_) {
                        var S,
                            L,
                            q = _ ? _.ownerDocument || _ : le;
                        return (
                            q == M ||
                                q.nodeType !== 9 ||
                                !q.documentElement ||
                                ((M = q),
                                (Q = M.documentElement),
                                (se = !b(M)),
                                le != M &&
                                    (L = M.defaultView) &&
                                    L.top !== L &&
                                    (L.addEventListener
                                        ? L.addEventListener("unload", Za, !1)
                                        : L.attachEvent &&
                                          L.attachEvent("onunload", Za)),
                                (l.scope = it(function (E) {
                                    return (
                                        Q.appendChild(E).appendChild(
                                            M.createElement("div")
                                        ),
                                        typeof E.querySelectorAll < "u" &&
                                            !E.querySelectorAll(
                                                ":scope fieldset div"
                                            ).length
                                    );
                                })),
                                (l.cssSupportsSelector = it(function () {
                                    return (
                                        CSS.supports("selector(*)") &&
                                        M.querySelectorAll(":is(:jqfake)") &&
                                        !CSS.supports(
                                            "selector(:is(*,:jqfake))"
                                        )
                                    );
                                })),
                                (l.attributes = it(function (E) {
                                    return (
                                        (E.className = "i"),
                                        !E.getAttribute("className")
                                    );
                                })),
                                (l.getElementsByTagName = it(function (E) {
                                    return (
                                        E.appendChild(M.createComment("")),
                                        !E.getElementsByTagName("*").length
                                    );
                                })),
                                (l.getElementsByClassName = fn.test(
                                    M.getElementsByClassName
                                )),
                                (l.getById = it(function (E) {
                                    return (
                                        (Q.appendChild(E).id = ye),
                                        !M.getElementsByName ||
                                            !M.getElementsByName(ye).length
                                    );
                                })),
                                l.getById
                                    ? ((f.filter.ID = function (E) {
                                          var B = E.replace(_t, xt);
                                          return function (V) {
                                              return V.getAttribute("id") === B;
                                          };
                                      }),
                                      (f.find.ID = function (E, B) {
                                          if (
                                              typeof B.getElementById < "u" &&
                                              se
                                          ) {
                                              var V = B.getElementById(E);
                                              return V ? [V] : [];
                                          }
                                      }))
                                    : ((f.filter.ID = function (E) {
                                          var B = E.replace(_t, xt);
                                          return function (V) {
                                              var X =
                                                  typeof V.getAttributeNode <
                                                      "u" &&
                                                  V.getAttributeNode("id");
                                              return X && X.value === B;
                                          };
                                      }),
                                      (f.find.ID = function (E, B) {
                                          if (
                                              typeof B.getElementById < "u" &&
                                              se
                                          ) {
                                              var V,
                                                  X,
                                                  G,
                                                  ne = B.getElementById(E);
                                              if (ne) {
                                                  if (
                                                      ((V =
                                                          ne.getAttributeNode(
                                                              "id"
                                                          )),
                                                      V && V.value === E)
                                                  )
                                                      return [ne];
                                                  for (
                                                      G =
                                                          B.getElementsByName(
                                                              E
                                                          ),
                                                          X = 0;
                                                      (ne = G[X++]);

                                                  )
                                                      if (
                                                          ((V =
                                                              ne.getAttributeNode(
                                                                  "id"
                                                              )),
                                                          V && V.value === E)
                                                      )
                                                          return [ne];
                                              }
                                              return [];
                                          }
                                      })),
                                (f.find.TAG = l.getElementsByTagName
                                    ? function (E, B) {
                                          if (
                                              typeof B.getElementsByTagName <
                                              "u"
                                          )
                                              return B.getElementsByTagName(E);
                                          if (l.qsa)
                                              return B.querySelectorAll(E);
                                      }
                                    : function (E, B) {
                                          var V,
                                              X = [],
                                              G = 0,
                                              ne = B.getElementsByTagName(E);
                                          if (E === "*") {
                                              for (; (V = ne[G++]); )
                                                  V.nodeType === 1 && X.push(V);
                                              return X;
                                          }
                                          return ne;
                                      }),
                                (f.find.CLASS =
                                    l.getElementsByClassName &&
                                    function (E, B) {
                                        if (
                                            typeof B.getElementsByClassName <
                                                "u" &&
                                            se
                                        )
                                            return B.getElementsByClassName(E);
                                    }),
                                (Ie = []),
                                (z = []),
                                (l.qsa = fn.test(M.querySelectorAll)) &&
                                    (it(function (E) {
                                        var B;
                                        (Q.appendChild(E).innerHTML =
                                            "<a id='" +
                                            ye +
                                            "'></a><select id='" +
                                            ye +
                                            "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                            E.querySelectorAll(
                                                "[msallowcapture^='']"
                                            ).length &&
                                                z.push(
                                                    "[*^$]=" + ve + `*(?:''|"")`
                                                ),
                                            E.querySelectorAll("[selected]")
                                                .length ||
                                                z.push(
                                                    "\\[" +
                                                        ve +
                                                        "*(?:value|" +
                                                        Dr +
                                                        ")"
                                                ),
                                            E.querySelectorAll(
                                                "[id~=" + ye + "-]"
                                            ).length || z.push("~="),
                                            (B = M.createElement("input")),
                                            B.setAttribute("name", ""),
                                            E.appendChild(B),
                                            E.querySelectorAll("[name='']")
                                                .length ||
                                                z.push(
                                                    "\\[" +
                                                        ve +
                                                        "*name" +
                                                        ve +
                                                        "*=" +
                                                        ve +
                                                        `*(?:''|"")`
                                                ),
                                            E.querySelectorAll(":checked")
                                                .length || z.push(":checked"),
                                            E.querySelectorAll("a#" + ye + "+*")
                                                .length || z.push(".#.+[+~]"),
                                            E.querySelectorAll("\\\f"),
                                            z.push("[\\r\\n\\f]");
                                    }),
                                    it(function (E) {
                                        E.innerHTML =
                                            "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                        var B = M.createElement("input");
                                        B.setAttribute("type", "hidden"),
                                            E.appendChild(B).setAttribute(
                                                "name",
                                                "D"
                                            ),
                                            E.querySelectorAll("[name=d]")
                                                .length &&
                                                z.push(
                                                    "name" + ve + "*[*^$|!~]?="
                                                ),
                                            E.querySelectorAll(":enabled")
                                                .length !== 2 &&
                                                z.push(":enabled", ":disabled"),
                                            (Q.appendChild(E).disabled = !0),
                                            E.querySelectorAll(":disabled")
                                                .length !== 2 &&
                                                z.push(":enabled", ":disabled"),
                                            E.querySelectorAll("*,:x"),
                                            z.push(",.*:");
                                    })),
                                (l.matchesSelector = fn.test(
                                    (Le =
                                        Q.matches ||
                                        Q.webkitMatchesSelector ||
                                        Q.mozMatchesSelector ||
                                        Q.oMatchesSelector ||
                                        Q.msMatchesSelector)
                                )) &&
                                    it(function (E) {
                                        (l.disconnectedMatch = Le.call(E, "*")),
                                            Le.call(E, "[s!='']:x"),
                                            Ie.push("!=", Tr);
                                    }),
                                l.cssSupportsSelector || z.push(":has"),
                                (z = z.length && new RegExp(z.join("|"))),
                                (Ie = Ie.length && new RegExp(Ie.join("|"))),
                                (S = fn.test(Q.compareDocumentPosition)),
                                (Ke =
                                    S || fn.test(Q.contains)
                                        ? function (E, B) {
                                              var V =
                                                      (E.nodeType === 9 &&
                                                          E.documentElement) ||
                                                      E,
                                                  X = B && B.parentNode;
                                              return (
                                                  E === X ||
                                                  !!(
                                                      X &&
                                                      X.nodeType === 1 &&
                                                      (V.contains
                                                          ? V.contains(X)
                                                          : E.compareDocumentPosition &&
                                                            E.compareDocumentPosition(
                                                                X
                                                            ) & 16)
                                                  )
                                              );
                                          }
                                        : function (E, B) {
                                              if (B) {
                                                  for (; (B = B.parentNode); )
                                                      if (B === E) return !0;
                                              }
                                              return !1;
                                          }),
                                (Ft = S
                                    ? function (E, B) {
                                          if (E === B) return (U = !0), 0;
                                          var V =
                                              !E.compareDocumentPosition -
                                              !B.compareDocumentPosition;
                                          return (
                                              V ||
                                              ((V =
                                                  (E.ownerDocument || E) ==
                                                  (B.ownerDocument || B)
                                                      ? E.compareDocumentPosition(
                                                            B
                                                        )
                                                      : 1),
                                              V & 1 ||
                                              (!l.sortDetached &&
                                                  B.compareDocumentPosition(
                                                      E
                                                  ) === V)
                                                  ? E == M ||
                                                    (E.ownerDocument == le &&
                                                        Ke(le, E))
                                                      ? -1
                                                      : B == M ||
                                                        (B.ownerDocument ==
                                                            le &&
                                                            Ke(le, B))
                                                      ? 1
                                                      : H
                                                      ? Pt(H, E) - Pt(H, B)
                                                      : 0
                                                  : V & 4
                                                  ? -1
                                                  : 1)
                                          );
                                      }
                                    : function (E, B) {
                                          if (E === B) return (U = !0), 0;
                                          var V,
                                              X = 0,
                                              G = E.parentNode,
                                              ne = B.parentNode,
                                              ee = [E],
                                              ie = [B];
                                          if (!G || !ne)
                                              return E == M
                                                  ? -1
                                                  : B == M
                                                  ? 1
                                                  : G
                                                  ? -1
                                                  : ne
                                                  ? 1
                                                  : H
                                                  ? Pt(H, E) - Pt(H, B)
                                                  : 0;
                                          if (G === ne) return ei(E, B);
                                          for (V = E; (V = V.parentNode); )
                                              ee.unshift(V);
                                          for (V = B; (V = V.parentNode); )
                                              ie.unshift(V);
                                          for (; ee[X] === ie[X]; ) X++;
                                          return X
                                              ? ei(ee[X], ie[X])
                                              : ee[X] == le
                                              ? -1
                                              : ie[X] == le
                                              ? 1
                                              : 0;
                                      })),
                            M
                        );
                    }),
                (_e.matches = function (_, S) {
                    return _e(_, null, null, S);
                }),
                (_e.matchesSelector = function (_, S) {
                    if (
                        (R(_),
                        l.matchesSelector &&
                            se &&
                            !Ye[S + " "] &&
                            (!Ie || !Ie.test(S)) &&
                            (!z || !z.test(S)))
                    )
                        try {
                            var L = Le.call(_, S);
                            if (
                                L ||
                                l.disconnectedMatch ||
                                (_.document && _.document.nodeType !== 11)
                            )
                                return L;
                        } catch {
                            Ye(S, !0);
                        }
                    return _e(S, M, null, [_]).length > 0;
                }),
                (_e.contains = function (_, S) {
                    return (_.ownerDocument || _) != M && R(_), Ke(_, S);
                }),
                (_e.attr = function (_, S) {
                    (_.ownerDocument || _) != M && R(_);
                    var L = f.attrHandle[S.toLowerCase()],
                        q =
                            L && jt.call(f.attrHandle, S.toLowerCase())
                                ? L(_, S, !se)
                                : void 0;
                    return q !== void 0
                        ? q
                        : l.attributes || !se
                        ? _.getAttribute(S)
                        : (q = _.getAttributeNode(S)) && q.specified
                        ? q.value
                        : null;
                }),
                (_e.escape = function (_) {
                    return (_ + "").replace(za, Qa);
                }),
                (_e.error = function (_) {
                    throw new Error(
                        "Syntax error, unrecognized expression: " + _
                    );
                }),
                (_e.uniqueSort = function (_) {
                    var S,
                        L = [],
                        q = 0,
                        E = 0;
                    if (
                        ((U = !l.detectDuplicates),
                        (H = !l.sortStable && _.slice(0)),
                        _.sort(Ft),
                        U)
                    ) {
                        for (; (S = _[E++]); ) S === _[E] && (q = L.push(E));
                        for (; q--; ) _.splice(L[q], 1);
                    }
                    return (H = null), _;
                }),
                (v = _e.getText =
                    function (_) {
                        var S,
                            L = "",
                            q = 0,
                            E = _.nodeType;
                        if (E) {
                            if (E === 1 || E === 9 || E === 11) {
                                if (typeof _.textContent == "string")
                                    return _.textContent;
                                for (_ = _.firstChild; _; _ = _.nextSibling)
                                    L += v(_);
                            } else if (E === 3 || E === 4) return _.nodeValue;
                        } else for (; (S = _[q++]); ) L += v(S);
                        return L;
                    }),
                (f = _e.selectors =
                    {
                        cacheLength: 50,
                        createPseudo: ft,
                        match: Mn,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": { dir: "parentNode", first: !0 },
                            " ": { dir: "parentNode" },
                            "+": { dir: "previousSibling", first: !0 },
                            "~": { dir: "previousSibling" },
                        },
                        preFilter: {
                            ATTR: function (_) {
                                return (
                                    (_[1] = _[1].replace(_t, xt)),
                                    (_[3] = (
                                        _[3] ||
                                        _[4] ||
                                        _[5] ||
                                        ""
                                    ).replace(_t, xt)),
                                    _[2] === "~=" && (_[3] = " " + _[3] + " "),
                                    _.slice(0, 4)
                                );
                            },
                            CHILD: function (_) {
                                return (
                                    (_[1] = _[1].toLowerCase()),
                                    _[1].slice(0, 3) === "nth"
                                        ? (_[3] || _e.error(_[0]),
                                          (_[4] = +(_[4]
                                              ? _[5] + (_[6] || 1)
                                              : 2 *
                                                (_[3] === "even" ||
                                                    _[3] === "odd"))),
                                          (_[5] = +(
                                              _[7] + _[8] || _[3] === "odd"
                                          )))
                                        : _[3] && _e.error(_[0]),
                                    _
                                );
                            },
                            PSEUDO: function (_) {
                                var S,
                                    L = !_[6] && _[2];
                                return Mn.CHILD.test(_[0])
                                    ? null
                                    : (_[3]
                                          ? (_[2] = _[4] || _[5] || "")
                                          : L &&
                                            tl.test(L) &&
                                            (S = m(L, !0)) &&
                                            (S =
                                                L.indexOf(")", L.length - S) -
                                                L.length) &&
                                            ((_[0] = _[0].slice(0, S)),
                                            (_[2] = L.slice(0, S))),
                                      _.slice(0, 3));
                            },
                        },
                        filter: {
                            TAG: function (_) {
                                var S = _.replace(_t, xt).toLowerCase();
                                return _ === "*"
                                    ? function () {
                                          return !0;
                                      }
                                    : function (L) {
                                          return (
                                              L.nodeName &&
                                              L.nodeName.toLowerCase() === S
                                          );
                                      };
                            },
                            CLASS: function (_) {
                                var S = Se[_ + " "];
                                return (
                                    S ||
                                    ((S = new RegExp(
                                        "(^|" + ve + ")" + _ + "(" + ve + "|$)"
                                    )) &&
                                        Se(_, function (L) {
                                            return S.test(
                                                (typeof L.className ==
                                                    "string" &&
                                                    L.className) ||
                                                    (typeof L.getAttribute <
                                                        "u" &&
                                                        L.getAttribute(
                                                            "class"
                                                        )) ||
                                                    ""
                                            );
                                        }))
                                );
                            },
                            ATTR: function (_, S, L) {
                                return function (q) {
                                    var E = _e.attr(q, _);
                                    return E == null
                                        ? S === "!="
                                        : S
                                        ? ((E += ""),
                                          S === "="
                                              ? E === L
                                              : S === "!="
                                              ? E !== L
                                              : S === "^="
                                              ? L && E.indexOf(L) === 0
                                              : S === "*="
                                              ? L && E.indexOf(L) > -1
                                              : S === "$="
                                              ? L && E.slice(-L.length) === L
                                              : S === "~="
                                              ? (
                                                    " " +
                                                    E.replace(Qo, " ") +
                                                    " "
                                                ).indexOf(L) > -1
                                              : S === "|="
                                              ? E === L ||
                                                E.slice(0, L.length + 1) ===
                                                    L + "-"
                                              : !1)
                                        : !0;
                                };
                            },
                            CHILD: function (_, S, L, q, E) {
                                var B = _.slice(0, 3) !== "nth",
                                    V = _.slice(-4) !== "last",
                                    X = S === "of-type";
                                return q === 1 && E === 0
                                    ? function (G) {
                                          return !!G.parentNode;
                                      }
                                    : function (G, ne, ee) {
                                          var ie,
                                              fe,
                                              xe,
                                              re,
                                              Fe,
                                              Pe,
                                              ze =
                                                  B !== V
                                                      ? "nextSibling"
                                                      : "previousSibling",
                                              De = G.parentNode,
                                              cn =
                                                  X && G.nodeName.toLowerCase(),
                                              dn = !ee && !X,
                                              Qe = !1;
                                          if (De) {
                                              if (B) {
                                                  for (; ze; ) {
                                                      for (
                                                          re = G;
                                                          (re = re[ze]);

                                                      )
                                                          if (
                                                              X
                                                                  ? re.nodeName.toLowerCase() ===
                                                                    cn
                                                                  : re.nodeType ===
                                                                    1
                                                          )
                                                              return !1;
                                                      Pe = ze =
                                                          _ === "only" &&
                                                          !Pe &&
                                                          "nextSibling";
                                                  }
                                                  return !0;
                                              }
                                              if (
                                                  ((Pe = [
                                                      V
                                                          ? De.firstChild
                                                          : De.lastChild,
                                                  ]),
                                                  V && dn)
                                              ) {
                                                  for (
                                                      re = De,
                                                          xe =
                                                              re[ye] ||
                                                              (re[ye] = {}),
                                                          fe =
                                                              xe[re.uniqueID] ||
                                                              (xe[re.uniqueID] =
                                                                  {}),
                                                          ie = fe[_] || [],
                                                          Fe =
                                                              ie[0] === Ue &&
                                                              ie[1],
                                                          Qe = Fe && ie[2],
                                                          re =
                                                              Fe &&
                                                              De.childNodes[Fe];
                                                      (re =
                                                          (++Fe &&
                                                              re &&
                                                              re[ze]) ||
                                                          (Qe = Fe = 0) ||
                                                          Pe.pop());

                                                  )
                                                      if (
                                                          re.nodeType === 1 &&
                                                          ++Qe &&
                                                          re === G
                                                      ) {
                                                          fe[_] = [Ue, Fe, Qe];
                                                          break;
                                                      }
                                              } else if (
                                                  (dn &&
                                                      ((re = G),
                                                      (xe =
                                                          re[ye] ||
                                                          (re[ye] = {})),
                                                      (fe =
                                                          xe[re.uniqueID] ||
                                                          (xe[re.uniqueID] =
                                                              {})),
                                                      (ie = fe[_] || []),
                                                      (Fe =
                                                          ie[0] === Ue &&
                                                          ie[1]),
                                                      (Qe = Fe)),
                                                  Qe === !1)
                                              )
                                                  for (
                                                      ;
                                                      (re =
                                                          (++Fe &&
                                                              re &&
                                                              re[ze]) ||
                                                          (Qe = Fe = 0) ||
                                                          Pe.pop()) &&
                                                      !(
                                                          (X
                                                              ? re.nodeName.toLowerCase() ===
                                                                cn
                                                              : re.nodeType ===
                                                                1) &&
                                                          ++Qe &&
                                                          (dn &&
                                                              ((xe =
                                                                  re[ye] ||
                                                                  (re[ye] =
                                                                      {})),
                                                              (fe =
                                                                  xe[
                                                                      re
                                                                          .uniqueID
                                                                  ] ||
                                                                  (xe[
                                                                      re.uniqueID
                                                                  ] = {})),
                                                              (fe[_] = [
                                                                  Ue,
                                                                  Qe,
                                                              ])),
                                                          re === G)
                                                      );

                                                  );
                                              return (
                                                  (Qe -= E),
                                                  Qe === q ||
                                                      (Qe % q === 0 &&
                                                          Qe / q >= 0)
                                              );
                                          }
                                      };
                            },
                            PSEUDO: function (_, S) {
                                var L,
                                    q =
                                        f.pseudos[_] ||
                                        f.setFilters[_.toLowerCase()] ||
                                        _e.error("unsupported pseudo: " + _);
                                return q[ye]
                                    ? q(S)
                                    : q.length > 1
                                    ? ((L = [_, _, "", S]),
                                      f.setFilters.hasOwnProperty(
                                          _.toLowerCase()
                                      )
                                          ? ft(function (E, B) {
                                                for (
                                                    var V,
                                                        X = q(E, S),
                                                        G = X.length;
                                                    G--;

                                                )
                                                    (V = Pt(E, X[G])),
                                                        (E[V] = !(B[V] = X[G]));
                                            })
                                          : function (E) {
                                                return q(E, 0, L);
                                            })
                                    : q;
                            },
                        },
                        pseudos: {
                            not: ft(function (_) {
                                var S = [],
                                    L = [],
                                    q = A(_.replace(On, "$1"));
                                return q[ye]
                                    ? ft(function (E, B, V, X) {
                                          for (
                                              var G,
                                                  ne = q(E, null, X, []),
                                                  ee = E.length;
                                              ee--;

                                          )
                                              (G = ne[ee]) &&
                                                  (E[ee] = !(B[ee] = G));
                                      })
                                    : function (E, B, V) {
                                          return (
                                              (S[0] = E),
                                              q(S, null, V, L),
                                              (S[0] = null),
                                              !L.pop()
                                          );
                                      };
                            }),
                            has: ft(function (_) {
                                return function (S) {
                                    return _e(_, S).length > 0;
                                };
                            }),
                            contains: ft(function (_) {
                                return (
                                    (_ = _.replace(_t, xt)),
                                    function (S) {
                                        return (
                                            (S.textContent || v(S)).indexOf(_) >
                                            -1
                                        );
                                    }
                                );
                            }),
                            lang: ft(function (_) {
                                return (
                                    nl.test(_ || "") ||
                                        _e.error("unsupported lang: " + _),
                                    (_ = _.replace(_t, xt).toLowerCase()),
                                    function (S) {
                                        var L;
                                        do
                                            if (
                                                (L = se
                                                    ? S.lang
                                                    : S.getAttribute(
                                                          "xml:lang"
                                                      ) ||
                                                      S.getAttribute("lang"))
                                            )
                                                return (
                                                    (L = L.toLowerCase()),
                                                    L === _ ||
                                                        L.indexOf(_ + "-") === 0
                                                );
                                        while (
                                            (S = S.parentNode) &&
                                            S.nodeType === 1
                                        );
                                        return !1;
                                    }
                                );
                            }),
                            target: function (_) {
                                var S = n.location && n.location.hash;
                                return S && S.slice(1) === _.id;
                            },
                            root: function (_) {
                                return _ === Q;
                            },
                            focus: function (_) {
                                return (
                                    _ === M.activeElement &&
                                    (!M.hasFocus || M.hasFocus()) &&
                                    !!(_.type || _.href || ~_.tabIndex)
                                );
                            },
                            enabled: ti(!1),
                            disabled: ti(!0),
                            checked: function (_) {
                                var S = _.nodeName.toLowerCase();
                                return (
                                    (S === "input" && !!_.checked) ||
                                    (S === "option" && !!_.selected)
                                );
                            },
                            selected: function (_) {
                                return (
                                    _.parentNode && _.parentNode.selectedIndex,
                                    _.selected === !0
                                );
                            },
                            empty: function (_) {
                                for (_ = _.firstChild; _; _ = _.nextSibling)
                                    if (_.nodeType < 6) return !1;
                                return !0;
                            },
                            parent: function (_) {
                                return !f.pseudos.empty(_);
                            },
                            header: function (_) {
                                return il.test(_.nodeName);
                            },
                            input: function (_) {
                                return al.test(_.nodeName);
                            },
                            button: function (_) {
                                var S = _.nodeName.toLowerCase();
                                return (
                                    (S === "input" && _.type === "button") ||
                                    S === "button"
                                );
                            },
                            text: function (_) {
                                var S;
                                return (
                                    _.nodeName.toLowerCase() === "input" &&
                                    _.type === "text" &&
                                    ((S = _.getAttribute("type")) == null ||
                                        S.toLowerCase() === "text")
                                );
                            },
                            first: Ht(function () {
                                return [0];
                            }),
                            last: Ht(function (_, S) {
                                return [S - 1];
                            }),
                            eq: Ht(function (_, S, L) {
                                return [L < 0 ? L + S : L];
                            }),
                            even: Ht(function (_, S) {
                                for (var L = 0; L < S; L += 2) _.push(L);
                                return _;
                            }),
                            odd: Ht(function (_, S) {
                                for (var L = 1; L < S; L += 2) _.push(L);
                                return _;
                            }),
                            lt: Ht(function (_, S, L) {
                                for (
                                    var q = L < 0 ? L + S : L > S ? S : L;
                                    --q >= 0;

                                )
                                    _.push(q);
                                return _;
                            }),
                            gt: Ht(function (_, S, L) {
                                for (var q = L < 0 ? L + S : L; ++q < S; )
                                    _.push(q);
                                return _;
                            }),
                        },
                    }),
                (f.pseudos.nth = f.pseudos.eq);
            for (o in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0,
            })
                f.pseudos[o] = sl(o);
            for (o in { submit: !0, reset: !0 }) f.pseudos[o] = ul(o);
            function ni() {}
            (ni.prototype = f.filters = f.pseudos),
                (f.setFilters = new ni()),
                (m = _e.tokenize =
                    function (_, S) {
                        var L,
                            q,
                            E,
                            B,
                            V,
                            X,
                            G,
                            ne = un[_ + " "];
                        if (ne) return S ? 0 : ne.slice(0);
                        for (V = _, X = [], G = f.preFilter; V; ) {
                            (!L || (q = Zo.exec(V))) &&
                                (q && (V = V.slice(q[0].length) || V),
                                X.push((E = []))),
                                (L = !1),
                                (q = Ya.exec(V)) &&
                                    ((L = q.shift()),
                                    E.push({
                                        value: L,
                                        type: q[0].replace(On, " "),
                                    }),
                                    (V = V.slice(L.length)));
                            for (B in f.filter)
                                (q = Mn[B].exec(V)) &&
                                    (!G[B] || (q = G[B](q))) &&
                                    ((L = q.shift()),
                                    E.push({ value: L, type: B, matches: q }),
                                    (V = V.slice(L.length)));
                            if (!L) break;
                        }
                        return S
                            ? V.length
                            : V
                            ? _e.error(_)
                            : un(_, X).slice(0);
                    });
            function Bn(_) {
                for (var S = 0, L = _.length, q = ""; S < L; S++)
                    q += _[S].value;
                return q;
            }
            function Wn(_, S, L) {
                var q = S.dir,
                    E = S.next,
                    B = E || q,
                    V = L && B === "parentNode",
                    X = he++;
                return S.first
                    ? function (G, ne, ee) {
                          for (; (G = G[q]); )
                              if (G.nodeType === 1 || V) return _(G, ne, ee);
                          return !1;
                      }
                    : function (G, ne, ee) {
                          var ie,
                              fe,
                              xe,
                              re = [Ue, X];
                          if (ee) {
                              for (; (G = G[q]); )
                                  if ((G.nodeType === 1 || V) && _(G, ne, ee))
                                      return !0;
                          } else
                              for (; (G = G[q]); )
                                  if (G.nodeType === 1 || V)
                                      if (
                                          ((xe = G[ye] || (G[ye] = {})),
                                          (fe =
                                              xe[G.uniqueID] ||
                                              (xe[G.uniqueID] = {})),
                                          E && E === G.nodeName.toLowerCase())
                                      )
                                          G = G[q] || G;
                                      else {
                                          if (
                                              (ie = fe[B]) &&
                                              ie[0] === Ue &&
                                              ie[1] === X
                                          )
                                              return (re[2] = ie[2]);
                                          if (
                                              ((fe[B] = re),
                                              (re[2] = _(G, ne, ee)))
                                          )
                                              return !0;
                                      }
                          return !1;
                      };
            }
            function Lr(_) {
                return _.length > 1
                    ? function (S, L, q) {
                          for (var E = _.length; E--; )
                              if (!_[E](S, L, q)) return !1;
                          return !0;
                      }
                    : _[0];
            }
            function fl(_, S, L) {
                for (var q = 0, E = S.length; q < E; q++) _e(_, S[q], L);
                return L;
            }
            function $n(_, S, L, q, E) {
                for (
                    var B, V = [], X = 0, G = _.length, ne = S != null;
                    X < G;
                    X++
                )
                    (B = _[X]) &&
                        (!L || L(B, q, E)) &&
                        (V.push(B), ne && S.push(X));
                return V;
            }
            function kr(_, S, L, q, E, B) {
                return (
                    q && !q[ye] && (q = kr(q)),
                    E && !E[ye] && (E = kr(E, B)),
                    ft(function (V, X, G, ne) {
                        var ee,
                            ie,
                            fe,
                            xe = [],
                            re = [],
                            Fe = X.length,
                            Pe = V || fl(S || "*", G.nodeType ? [G] : G, []),
                            ze = _ && (V || !S) ? $n(Pe, xe, _, G, ne) : Pe,
                            De = L ? (E || (V ? _ : Fe || q) ? [] : X) : ze;
                        if ((L && L(ze, De, G, ne), q))
                            for (
                                ee = $n(De, re),
                                    q(ee, [], G, ne),
                                    ie = ee.length;
                                ie--;

                            )
                                (fe = ee[ie]) &&
                                    (De[re[ie]] = !(ze[re[ie]] = fe));
                        if (V) {
                            if (E || _) {
                                if (E) {
                                    for (ee = [], ie = De.length; ie--; )
                                        (fe = De[ie]) && ee.push((ze[ie] = fe));
                                    E(null, (De = []), ee, ne);
                                }
                                for (ie = De.length; ie--; )
                                    (fe = De[ie]) &&
                                        (ee = E ? Pt(V, fe) : xe[ie]) > -1 &&
                                        (V[ee] = !(X[ee] = fe));
                            }
                        } else (De = $n(De === X ? De.splice(Fe, De.length) : De)), E ? E(null, X, De, ne) : Tt.apply(X, De);
                    })
                );
            }
            function Er(_) {
                for (
                    var S,
                        L,
                        q,
                        E = _.length,
                        B = f.relative[_[0].type],
                        V = B || f.relative[" "],
                        X = B ? 1 : 0,
                        G = Wn(
                            function (ie) {
                                return ie === S;
                            },
                            V,
                            !0
                        ),
                        ne = Wn(
                            function (ie) {
                                return Pt(S, ie) > -1;
                            },
                            V,
                            !0
                        ),
                        ee = [
                            function (ie, fe, xe) {
                                var re =
                                    (!B && (xe || fe !== I)) ||
                                    ((S = fe).nodeType
                                        ? G(ie, fe, xe)
                                        : ne(ie, fe, xe));
                                return (S = null), re;
                            },
                        ];
                    X < E;
                    X++
                )
                    if ((L = f.relative[_[X].type])) ee = [Wn(Lr(ee), L)];
                    else {
                        if (
                            ((L = f.filter[_[X].type].apply(
                                null,
                                _[X].matches
                            )),
                            L[ye])
                        ) {
                            for (q = ++X; q < E && !f.relative[_[q].type]; q++);
                            return kr(
                                X > 1 && Lr(ee),
                                X > 1 &&
                                    Bn(
                                        _.slice(0, X - 1).concat({
                                            value:
                                                _[X - 2].type === " "
                                                    ? "*"
                                                    : "",
                                        })
                                    ).replace(On, "$1"),
                                L,
                                X < q && Er(_.slice(X, q)),
                                q < E && Er((_ = _.slice(q))),
                                q < E && Bn(_)
                            );
                        }
                        ee.push(L);
                    }
                return Lr(ee);
            }
            function cl(_, S) {
                var L = S.length > 0,
                    q = _.length > 0,
                    E = function (B, V, X, G, ne) {
                        var ee,
                            ie,
                            fe,
                            xe = 0,
                            re = "0",
                            Fe = B && [],
                            Pe = [],
                            ze = I,
                            De = B || (q && f.find.TAG("*", ne)),
                            cn = (Ue += ze == null ? 1 : Math.random() || 0.1),
                            dn = De.length;
                        for (
                            ne && (I = V == M || V || ne);
                            re !== dn && (ee = De[re]) != null;
                            re++
                        ) {
                            if (q && ee) {
                                for (
                                    ie = 0,
                                        !V &&
                                            ee.ownerDocument != M &&
                                            (R(ee), (X = !se));
                                    (fe = _[ie++]);

                                )
                                    if (fe(ee, V || M, X)) {
                                        G.push(ee);
                                        break;
                                    }
                                ne && (Ue = cn);
                            }
                            L && ((ee = !fe && ee) && xe--, B && Fe.push(ee));
                        }
                        if (((xe += re), L && re !== xe)) {
                            for (ie = 0; (fe = S[ie++]); ) fe(Fe, Pe, V, X);
                            if (B) {
                                if (xe > 0)
                                    for (; re--; )
                                        Fe[re] ||
                                            Pe[re] ||
                                            (Pe[re] = Dt.call(G));
                                Pe = $n(Pe);
                            }
                            Tt.apply(G, Pe),
                                ne &&
                                    !B &&
                                    Pe.length > 0 &&
                                    xe + S.length > 1 &&
                                    _e.uniqueSort(G);
                        }
                        return ne && ((Ue = cn), (I = ze)), Fe;
                    };
                return L ? ft(E) : E;
            }
            return (
                (A = _e.compile =
                    function (_, S) {
                        var L,
                            q = [],
                            E = [],
                            B = Hn[_ + " "];
                        if (!B) {
                            for (S || (S = m(_)), L = S.length; L--; )
                                (B = Er(S[L])), B[ye] ? q.push(B) : E.push(B);
                            (B = Hn(_, cl(E, q))), (B.selector = _);
                        }
                        return B;
                    }),
                (T = _e.select =
                    function (_, S, L, q) {
                        var E,
                            B,
                            V,
                            X,
                            G,
                            ne = typeof _ == "function" && _,
                            ee = !q && m((_ = ne.selector || _));
                        if (((L = L || []), ee.length === 1)) {
                            if (
                                ((B = ee[0] = ee[0].slice(0)),
                                B.length > 2 &&
                                    (V = B[0]).type === "ID" &&
                                    S.nodeType === 9 &&
                                    se &&
                                    f.relative[B[1].type])
                            ) {
                                if (
                                    ((S = (f.find.ID(
                                        V.matches[0].replace(_t, xt),
                                        S
                                    ) || [])[0]),
                                    S)
                                )
                                    ne && (S = S.parentNode);
                                else return L;
                                _ = _.slice(B.shift().value.length);
                            }
                            for (
                                E = Mn.needsContext.test(_) ? 0 : B.length;
                                E-- && ((V = B[E]), !f.relative[(X = V.type)]);

                            )
                                if (
                                    (G = f.find[X]) &&
                                    (q = G(
                                        V.matches[0].replace(_t, xt),
                                        (Sr.test(B[0].type) &&
                                            Nr(S.parentNode)) ||
                                            S
                                    ))
                                ) {
                                    if (
                                        (B.splice(E, 1),
                                        (_ = q.length && Bn(B)),
                                        !_)
                                    )
                                        return Tt.apply(L, q), L;
                                    break;
                                }
                        }
                        return (
                            (ne || A(_, ee))(
                                q,
                                S,
                                !se,
                                L,
                                !S || (Sr.test(_) && Nr(S.parentNode)) || S
                            ),
                            L
                        );
                    }),
                (l.sortStable = ye.split("").sort(Ft).join("") === ye),
                (l.detectDuplicates = !!U),
                R(),
                (l.sortDetached = it(function (_) {
                    return (
                        _.compareDocumentPosition(M.createElement("fieldset")) &
                        1
                    );
                })),
                it(function (_) {
                    return (
                        (_.innerHTML = "<a href='#'></a>"),
                        _.firstChild.getAttribute("href") === "#"
                    );
                }) ||
                    Ar("type|href|height|width", function (_, S, L) {
                        if (!L)
                            return _.getAttribute(
                                S,
                                S.toLowerCase() === "type" ? 1 : 2
                            );
                    }),
                (!l.attributes ||
                    !it(function (_) {
                        return (
                            (_.innerHTML = "<input/>"),
                            _.firstChild.setAttribute("value", ""),
                            _.firstChild.getAttribute("value") === ""
                        );
                    })) &&
                    Ar("value", function (_, S, L) {
                        if (!L && _.nodeName.toLowerCase() === "input")
                            return _.defaultValue;
                    }),
                it(function (_) {
                    return _.getAttribute("disabled") == null;
                }) ||
                    Ar(Dr, function (_, S, L) {
                        var q;
                        if (!L)
                            return _[S] === !0
                                ? S.toLowerCase()
                                : (q = _.getAttributeNode(S)) && q.specified
                                ? q.value
                                : null;
                    }),
                _e
            );
        })(t);
        (d.find = Y),
            (d.expr = Y.selectors),
            (d.expr[":"] = d.expr.pseudos),
            (d.uniqueSort = d.unique = Y.uniqueSort),
            (d.text = Y.getText),
            (d.isXMLDoc = Y.isXML),
            (d.contains = Y.contains),
            (d.escapeSelector = Y.escape);
        var ue = function (n, o, l) {
                for (
                    var f = [], v = l !== void 0;
                    (n = n[o]) && n.nodeType !== 9;

                )
                    if (n.nodeType === 1) {
                        if (v && d(n).is(l)) break;
                        f.push(n);
                    }
                return f;
            },
            de = function (n, o) {
                for (var l = []; n; n = n.nextSibling)
                    n.nodeType === 1 && n !== o && l.push(n);
                return l;
            },
            be = d.expr.match.needsContext;
        function Ce(n, o) {
            return n.nodeName && n.nodeName.toLowerCase() === o.toLowerCase();
        }
        var mt =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function me(n, o, l) {
            return P(o)
                ? d.grep(n, function (f, v) {
                      return !!o.call(f, v, f) !== l;
                  })
                : o.nodeType
                ? d.grep(n, function (f) {
                      return (f === o) !== l;
                  })
                : typeof o != "string"
                ? d.grep(n, function (f) {
                      return p.call(o, f) > -1 !== l;
                  })
                : d.filter(o, n, l);
        }
        (d.filter = function (n, o, l) {
            var f = o[0];
            return (
                l && (n = ":not(" + n + ")"),
                o.length === 1 && f.nodeType === 1
                    ? d.find.matchesSelector(f, n)
                        ? [f]
                        : []
                    : d.find.matches(
                          n,
                          d.grep(o, function (v) {
                              return v.nodeType === 1;
                          })
                      )
            );
        }),
            d.fn.extend({
                find: function (n) {
                    var o,
                        l,
                        f = this.length,
                        v = this;
                    if (typeof n != "string")
                        return this.pushStack(
                            d(n).filter(function () {
                                for (o = 0; o < f; o++)
                                    if (d.contains(v[o], this)) return !0;
                            })
                        );
                    for (l = this.pushStack([]), o = 0; o < f; o++)
                        d.find(n, v[o], l);
                    return f > 1 ? d.uniqueSort(l) : l;
                },
                filter: function (n) {
                    return this.pushStack(me(this, n || [], !1));
                },
                not: function (n) {
                    return this.pushStack(me(this, n || [], !0));
                },
                is: function (n) {
                    return !!me(
                        this,
                        typeof n == "string" && be.test(n) ? d(n) : n || [],
                        !1
                    ).length;
                },
            });
        var Ee,
            Je = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            Me = (d.fn.init = function (n, o, l) {
                var f, v;
                if (!n) return this;
                if (((l = l || Ee), typeof n == "string"))
                    if (
                        (n[0] === "<" &&
                        n[n.length - 1] === ">" &&
                        n.length >= 3
                            ? (f = [null, n, null])
                            : (f = Je.exec(n)),
                        f && (f[1] || !o))
                    )
                        if (f[1]) {
                            if (
                                ((o = o instanceof d ? o[0] : o),
                                d.merge(
                                    this,
                                    d.parseHTML(
                                        f[1],
                                        o && o.nodeType
                                            ? o.ownerDocument || o
                                            : O,
                                        !0
                                    )
                                ),
                                mt.test(f[1]) && d.isPlainObject(o))
                            )
                                for (f in o)
                                    P(this[f])
                                        ? this[f](o[f])
                                        : this.attr(f, o[f]);
                            return this;
                        } else
                            return (
                                (v = O.getElementById(f[2])),
                                v && ((this[0] = v), (this.length = 1)),
                                this
                            );
                    else
                        return !o || o.jquery
                            ? (o || l).find(n)
                            : this.constructor(o).find(n);
                else {
                    if (n.nodeType)
                        return (this[0] = n), (this.length = 1), this;
                    if (P(n)) return l.ready !== void 0 ? l.ready(n) : n(d);
                }
                return d.makeArray(n, this);
            });
        (Me.prototype = d.fn), (Ee = d(O));
        var He = /^(?:parents|prev(?:Until|All))/,
            lt = { children: !0, contents: !0, next: !0, prev: !0 };
        d.fn.extend({
            has: function (n) {
                var o = d(n, this),
                    l = o.length;
                return this.filter(function () {
                    for (var f = 0; f < l; f++)
                        if (d.contains(this, o[f])) return !0;
                });
            },
            closest: function (n, o) {
                var l,
                    f = 0,
                    v = this.length,
                    b = [],
                    m = typeof n != "string" && d(n);
                if (!be.test(n)) {
                    for (; f < v; f++)
                        for (l = this[f]; l && l !== o; l = l.parentNode)
                            if (
                                l.nodeType < 11 &&
                                (m
                                    ? m.index(l) > -1
                                    : l.nodeType === 1 &&
                                      d.find.matchesSelector(l, n))
                            ) {
                                b.push(l);
                                break;
                            }
                }
                return this.pushStack(b.length > 1 ? d.uniqueSort(b) : b);
            },
            index: function (n) {
                return n
                    ? typeof n == "string"
                        ? p.call(d(n), this[0])
                        : p.call(this, n.jquery ? n[0] : n)
                    : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
            },
            add: function (n, o) {
                return this.pushStack(
                    d.uniqueSort(d.merge(this.get(), d(n, o)))
                );
            },
            addBack: function (n) {
                return this.add(
                    n == null ? this.prevObject : this.prevObject.filter(n)
                );
            },
        });
        function nt(n, o) {
            for (; (n = n[o]) && n.nodeType !== 1; );
            return n;
        }
        d.each(
            {
                parent: function (n) {
                    var o = n.parentNode;
                    return o && o.nodeType !== 11 ? o : null;
                },
                parents: function (n) {
                    return ue(n, "parentNode");
                },
                parentsUntil: function (n, o, l) {
                    return ue(n, "parentNode", l);
                },
                next: function (n) {
                    return nt(n, "nextSibling");
                },
                prev: function (n) {
                    return nt(n, "previousSibling");
                },
                nextAll: function (n) {
                    return ue(n, "nextSibling");
                },
                prevAll: function (n) {
                    return ue(n, "previousSibling");
                },
                nextUntil: function (n, o, l) {
                    return ue(n, "nextSibling", l);
                },
                prevUntil: function (n, o, l) {
                    return ue(n, "previousSibling", l);
                },
                siblings: function (n) {
                    return de((n.parentNode || {}).firstChild, n);
                },
                children: function (n) {
                    return de(n.firstChild);
                },
                contents: function (n) {
                    return n.contentDocument != null && s(n.contentDocument)
                        ? n.contentDocument
                        : (Ce(n, "template") && (n = n.content || n),
                          d.merge([], n.childNodes));
                },
            },
            function (n, o) {
                d.fn[n] = function (l, f) {
                    var v = d.map(this, o, l);
                    return (
                        n.slice(-5) !== "Until" && (f = l),
                        f && typeof f == "string" && (v = d.filter(f, v)),
                        this.length > 1 &&
                            (lt[n] || d.uniqueSort(v),
                            He.test(n) && v.reverse()),
                        this.pushStack(v)
                    );
                };
            }
        );
        var qe = /[^\x20\t\r\n\f]+/g;
        function Ct(n) {
            var o = {};
            return (
                d.each(n.match(qe) || [], function (l, f) {
                    o[f] = !0;
                }),
                o
            );
        }
        d.Callbacks = function (n) {
            n = typeof n == "string" ? Ct(n) : d.extend({}, n);
            var o,
                l,
                f,
                v,
                b = [],
                m = [],
                A = -1,
                T = function () {
                    for (v = v || n.once, f = o = !0; m.length; A = -1)
                        for (l = m.shift(); ++A < b.length; )
                            b[A].apply(l[0], l[1]) === !1 &&
                                n.stopOnFalse &&
                                ((A = b.length), (l = !1));
                    n.memory || (l = !1),
                        (o = !1),
                        v && (l ? (b = []) : (b = ""));
                },
                I = {
                    add: function () {
                        return (
                            b &&
                                (l && !o && ((A = b.length - 1), m.push(l)),
                                (function H(U) {
                                    d.each(U, function (R, M) {
                                        P(M)
                                            ? (!n.unique || !I.has(M)) &&
                                              b.push(M)
                                            : M &&
                                              M.length &&
                                              K(M) !== "string" &&
                                              H(M);
                                    });
                                })(arguments),
                                l && !o && T()),
                            this
                        );
                    },
                    remove: function () {
                        return (
                            d.each(arguments, function (H, U) {
                                for (var R; (R = d.inArray(U, b, R)) > -1; )
                                    b.splice(R, 1), R <= A && A--;
                            }),
                            this
                        );
                    },
                    has: function (H) {
                        return H ? d.inArray(H, b) > -1 : b.length > 0;
                    },
                    empty: function () {
                        return b && (b = []), this;
                    },
                    disable: function () {
                        return (v = m = []), (b = l = ""), this;
                    },
                    disabled: function () {
                        return !b;
                    },
                    lock: function () {
                        return (v = m = []), !l && !o && (b = l = ""), this;
                    },
                    locked: function () {
                        return !!v;
                    },
                    fireWith: function (H, U) {
                        return (
                            v ||
                                ((U = U || []),
                                (U = [H, U.slice ? U.slice() : U]),
                                m.push(U),
                                o || T()),
                            this
                        );
                    },
                    fire: function () {
                        return I.fireWith(this, arguments), this;
                    },
                    fired: function () {
                        return !!f;
                    },
                };
            return I;
        };
        function st(n) {
            return n;
        }
        function Lt(n) {
            throw n;
        }
        function Zt(n, o, l, f) {
            var v;
            try {
                n && P((v = n.promise))
                    ? v.call(n).done(o).fail(l)
                    : n && P((v = n.then))
                    ? v.call(n, o, l)
                    : o.apply(void 0, [n].slice(f));
            } catch (b) {
                l.apply(void 0, [b]);
            }
        }
        d.extend({
            Deferred: function (n) {
                var o = [
                        [
                            "notify",
                            "progress",
                            d.Callbacks("memory"),
                            d.Callbacks("memory"),
                            2,
                        ],
                        [
                            "resolve",
                            "done",
                            d.Callbacks("once memory"),
                            d.Callbacks("once memory"),
                            0,
                            "resolved",
                        ],
                        [
                            "reject",
                            "fail",
                            d.Callbacks("once memory"),
                            d.Callbacks("once memory"),
                            1,
                            "rejected",
                        ],
                    ],
                    l = "pending",
                    f = {
                        state: function () {
                            return l;
                        },
                        always: function () {
                            return v.done(arguments).fail(arguments), this;
                        },
                        catch: function (b) {
                            return f.then(null, b);
                        },
                        pipe: function () {
                            var b = arguments;
                            return d
                                .Deferred(function (m) {
                                    d.each(o, function (A, T) {
                                        var I = P(b[T[4]]) && b[T[4]];
                                        v[T[1]](function () {
                                            var H =
                                                I && I.apply(this, arguments);
                                            H && P(H.promise)
                                                ? H.promise()
                                                      .progress(m.notify)
                                                      .done(m.resolve)
                                                      .fail(m.reject)
                                                : m[T[0] + "With"](
                                                      this,
                                                      I ? [H] : arguments
                                                  );
                                        });
                                    }),
                                        (b = null);
                                })
                                .promise();
                        },
                        then: function (b, m, A) {
                            var T = 0;
                            function I(H, U, R, M) {
                                return function () {
                                    var Q = this,
                                        se = arguments,
                                        z = function () {
                                            var Le, Ke;
                                            if (!(H < T)) {
                                                if (
                                                    ((Le = R.apply(Q, se)),
                                                    Le === U.promise())
                                                )
                                                    throw new TypeError(
                                                        "Thenable self-resolution"
                                                    );
                                                (Ke =
                                                    Le &&
                                                    (typeof Le == "object" ||
                                                        typeof Le ==
                                                            "function") &&
                                                    Le.then),
                                                    P(Ke)
                                                        ? M
                                                            ? Ke.call(
                                                                  Le,
                                                                  I(
                                                                      T,
                                                                      U,
                                                                      st,
                                                                      M
                                                                  ),
                                                                  I(T, U, Lt, M)
                                                              )
                                                            : (T++,
                                                              Ke.call(
                                                                  Le,
                                                                  I(
                                                                      T,
                                                                      U,
                                                                      st,
                                                                      M
                                                                  ),
                                                                  I(
                                                                      T,
                                                                      U,
                                                                      Lt,
                                                                      M
                                                                  ),
                                                                  I(
                                                                      T,
                                                                      U,
                                                                      st,
                                                                      U.notifyWith
                                                                  )
                                                              ))
                                                        : (R !== st &&
                                                              ((Q = void 0),
                                                              (se = [Le])),
                                                          (M || U.resolveWith)(
                                                              Q,
                                                              se
                                                          ));
                                            }
                                        },
                                        Ie = M
                                            ? z
                                            : function () {
                                                  try {
                                                      z();
                                                  } catch (Le) {
                                                      d.Deferred
                                                          .exceptionHook &&
                                                          d.Deferred.exceptionHook(
                                                              Le,
                                                              Ie.stackTrace
                                                          ),
                                                          H + 1 >= T &&
                                                              (R !== Lt &&
                                                                  ((Q = void 0),
                                                                  (se = [Le])),
                                                              U.rejectWith(
                                                                  Q,
                                                                  se
                                                              ));
                                                  }
                                              };
                                    H
                                        ? Ie()
                                        : (d.Deferred.getStackHook &&
                                              (Ie.stackTrace =
                                                  d.Deferred.getStackHook()),
                                          t.setTimeout(Ie));
                                };
                            }
                            return d
                                .Deferred(function (H) {
                                    o[0][3].add(
                                        I(0, H, P(A) ? A : st, H.notifyWith)
                                    ),
                                        o[1][3].add(I(0, H, P(b) ? b : st)),
                                        o[2][3].add(I(0, H, P(m) ? m : Lt));
                                })
                                .promise();
                        },
                        promise: function (b) {
                            return b != null ? d.extend(b, f) : f;
                        },
                    },
                    v = {};
                return (
                    d.each(o, function (b, m) {
                        var A = m[2],
                            T = m[5];
                        (f[m[1]] = A.add),
                            T &&
                                A.add(
                                    function () {
                                        l = T;
                                    },
                                    o[3 - b][2].disable,
                                    o[3 - b][3].disable,
                                    o[0][2].lock,
                                    o[0][3].lock
                                ),
                            A.add(m[3].fire),
                            (v[m[0]] = function () {
                                return (
                                    v[m[0] + "With"](
                                        this === v ? void 0 : this,
                                        arguments
                                    ),
                                    this
                                );
                            }),
                            (v[m[0] + "With"] = A.fireWith);
                    }),
                    f.promise(v),
                    n && n.call(v, v),
                    v
                );
            },
            when: function (n) {
                var o = arguments.length,
                    l = o,
                    f = Array(l),
                    v = u.call(arguments),
                    b = d.Deferred(),
                    m = function (A) {
                        return function (T) {
                            (f[A] = this),
                                (v[A] =
                                    arguments.length > 1
                                        ? u.call(arguments)
                                        : T),
                                --o || b.resolveWith(f, v);
                        };
                    };
                if (
                    o <= 1 &&
                    (Zt(n, b.done(m(l)).resolve, b.reject, !o),
                    b.state() === "pending" || P(v[l] && v[l].then))
                )
                    return b.then();
                for (; l--; ) Zt(v[l], m(l), b.reject);
                return b.promise();
            },
        });
        var ge = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (d.Deferred.exceptionHook = function (n, o) {
            t.console &&
                t.console.warn &&
                n &&
                ge.test(n.name) &&
                t.console.warn(
                    "jQuery.Deferred exception: " + n.message,
                    n.stack,
                    o
                );
        }),
            (d.readyException = function (n) {
                t.setTimeout(function () {
                    throw n;
                });
            });
        var Te = d.Deferred();
        (d.fn.ready = function (n) {
            return (
                Te.then(n).catch(function (o) {
                    d.readyException(o);
                }),
                this
            );
        }),
            d.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (n) {
                    (n === !0 ? --d.readyWait : d.isReady) ||
                        ((d.isReady = !0),
                        !(n !== !0 && --d.readyWait > 0) &&
                            Te.resolveWith(O, [d]));
                },
            }),
            (d.ready.then = Te.then);
        function En() {
            O.removeEventListener("DOMContentLoaded", En),
                t.removeEventListener("load", En),
                d.ready();
        }
        O.readyState === "complete" ||
        (O.readyState !== "loading" && !O.documentElement.doScroll)
            ? t.setTimeout(d.ready)
            : (O.addEventListener("DOMContentLoaded", En),
              t.addEventListener("load", En));
        var gt = function (n, o, l, f, v, b, m) {
                var A = 0,
                    T = n.length,
                    I = l == null;
                if (K(l) === "object") {
                    v = !0;
                    for (A in l) gt(n, o, A, l[A], !0, b, m);
                } else if (
                    f !== void 0 &&
                    ((v = !0),
                    P(f) || (m = !0),
                    I &&
                        (m
                            ? (o.call(n, f), (o = null))
                            : ((I = o),
                              (o = function (H, U, R) {
                                  return I.call(d(H), R);
                              }))),
                    o)
                )
                    for (; A < T; A++)
                        o(n[A], l, m ? f : f.call(n[A], A, o(n[A], l)));
                return v ? n : I ? o.call(n) : T ? o(n[0], l) : b;
            },
            oo = /^-ms-/,
            lo = /-([a-z])/g;
        function so(n, o) {
            return o.toUpperCase();
        }
        function dt(n) {
            return n.replace(oo, "ms-").replace(lo, so);
        }
        var en = function (n) {
            return n.nodeType === 1 || n.nodeType === 9 || !+n.nodeType;
        };
        function tn() {
            this.expando = d.expando + tn.uid++;
        }
        (tn.uid = 1),
            (tn.prototype = {
                cache: function (n) {
                    var o = n[this.expando];
                    return (
                        o ||
                            ((o = {}),
                            en(n) &&
                                (n.nodeType
                                    ? (n[this.expando] = o)
                                    : Object.defineProperty(n, this.expando, {
                                          value: o,
                                          configurable: !0,
                                      }))),
                        o
                    );
                },
                set: function (n, o, l) {
                    var f,
                        v = this.cache(n);
                    if (typeof o == "string") v[dt(o)] = l;
                    else for (f in o) v[dt(f)] = o[f];
                    return v;
                },
                get: function (n, o) {
                    return o === void 0
                        ? this.cache(n)
                        : n[this.expando] && n[this.expando][dt(o)];
                },
                access: function (n, o, l) {
                    return o === void 0 ||
                        (o && typeof o == "string" && l === void 0)
                        ? this.get(n, o)
                        : (this.set(n, o, l), l !== void 0 ? l : o);
                },
                remove: function (n, o) {
                    var l,
                        f = n[this.expando];
                    if (f !== void 0) {
                        if (o !== void 0)
                            for (
                                Array.isArray(o)
                                    ? (o = o.map(dt))
                                    : ((o = dt(o)),
                                      (o = (o in f) ? [o] : o.match(qe) || [])),
                                    l = o.length;
                                l--;

                            )
                                delete f[o[l]];
                        (o === void 0 || d.isEmptyObject(f)) &&
                            (n.nodeType
                                ? (n[this.expando] = void 0)
                                : delete n[this.expando]);
                    }
                },
                hasData: function (n) {
                    var o = n[this.expando];
                    return o !== void 0 && !d.isEmptyObject(o);
                },
            });
        var te = new tn(),
            Be = new tn(),
            uo = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            fo = /[A-Z]/g;
        function co(n) {
            return n === "true"
                ? !0
                : n === "false"
                ? !1
                : n === "null"
                ? null
                : n === +n + ""
                ? +n
                : uo.test(n)
                ? JSON.parse(n)
                : n;
        }
        function ba(n, o, l) {
            var f;
            if (l === void 0 && n.nodeType === 1)
                if (
                    ((f = "data-" + o.replace(fo, "-$&").toLowerCase()),
                    (l = n.getAttribute(f)),
                    typeof l == "string")
                ) {
                    try {
                        l = co(l);
                    } catch {}
                    Be.set(n, o, l);
                } else l = void 0;
            return l;
        }
        d.extend({
            hasData: function (n) {
                return Be.hasData(n) || te.hasData(n);
            },
            data: function (n, o, l) {
                return Be.access(n, o, l);
            },
            removeData: function (n, o) {
                Be.remove(n, o);
            },
            _data: function (n, o, l) {
                return te.access(n, o, l);
            },
            _removeData: function (n, o) {
                te.remove(n, o);
            },
        }),
            d.fn.extend({
                data: function (n, o) {
                    var l,
                        f,
                        v,
                        b = this[0],
                        m = b && b.attributes;
                    if (n === void 0) {
                        if (
                            this.length &&
                            ((v = Be.get(b)),
                            b.nodeType === 1 && !te.get(b, "hasDataAttrs"))
                        ) {
                            for (l = m.length; l--; )
                                m[l] &&
                                    ((f = m[l].name),
                                    f.indexOf("data-") === 0 &&
                                        ((f = dt(f.slice(5))), ba(b, f, v[f])));
                            te.set(b, "hasDataAttrs", !0);
                        }
                        return v;
                    }
                    return typeof n == "object"
                        ? this.each(function () {
                              Be.set(this, n);
                          })
                        : gt(
                              this,
                              function (A) {
                                  var T;
                                  if (b && A === void 0)
                                      return (
                                          (T = Be.get(b, n)),
                                          T !== void 0 ||
                                          ((T = ba(b, n)), T !== void 0)
                                              ? T
                                              : void 0
                                      );
                                  this.each(function () {
                                      Be.set(this, n, A);
                                  });
                              },
                              null,
                              o,
                              arguments.length > 1,
                              null,
                              !0
                          );
                },
                removeData: function (n) {
                    return this.each(function () {
                        Be.remove(this, n);
                    });
                },
            }),
            d.extend({
                queue: function (n, o, l) {
                    var f;
                    if (n)
                        return (
                            (o = (o || "fx") + "queue"),
                            (f = te.get(n, o)),
                            l &&
                                (!f || Array.isArray(l)
                                    ? (f = te.access(n, o, d.makeArray(l)))
                                    : f.push(l)),
                            f || []
                        );
                },
                dequeue: function (n, o) {
                    o = o || "fx";
                    var l = d.queue(n, o),
                        f = l.length,
                        v = l.shift(),
                        b = d._queueHooks(n, o),
                        m = function () {
                            d.dequeue(n, o);
                        };
                    v === "inprogress" && ((v = l.shift()), f--),
                        v &&
                            (o === "fx" && l.unshift("inprogress"),
                            delete b.stop,
                            v.call(n, m, b)),
                        !f && b && b.empty.fire();
                },
                _queueHooks: function (n, o) {
                    var l = o + "queueHooks";
                    return (
                        te.get(n, l) ||
                        te.access(n, l, {
                            empty: d.Callbacks("once memory").add(function () {
                                te.remove(n, [o + "queue", l]);
                            }),
                        })
                    );
                },
            }),
            d.fn.extend({
                queue: function (n, o) {
                    var l = 2;
                    return (
                        typeof n != "string" && ((o = n), (n = "fx"), l--),
                        arguments.length < l
                            ? d.queue(this[0], n)
                            : o === void 0
                            ? this
                            : this.each(function () {
                                  var f = d.queue(this, n, o);
                                  d._queueHooks(this, n),
                                      n === "fx" &&
                                          f[0] !== "inprogress" &&
                                          d.dequeue(this, n);
                              })
                    );
                },
                dequeue: function (n) {
                    return this.each(function () {
                        d.dequeue(this, n);
                    });
                },
                clearQueue: function (n) {
                    return this.queue(n || "fx", []);
                },
                promise: function (n, o) {
                    var l,
                        f = 1,
                        v = d.Deferred(),
                        b = this,
                        m = this.length,
                        A = function () {
                            --f || v.resolveWith(b, [b]);
                        };
                    for (
                        typeof n != "string" && ((o = n), (n = void 0)),
                            n = n || "fx";
                        m--;

                    )
                        (l = te.get(b[m], n + "queueHooks")),
                            l && l.empty && (f++, l.empty.add(A));
                    return A(), v.promise(o);
                },
            });
        var ma = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            nn = new RegExp("^(?:([+-])=|)(" + ma + ")([a-z%]*)$", "i"),
            yt = ["Top", "Right", "Bottom", "Left"],
            kt = O.documentElement,
            Mt = function (n) {
                return d.contains(n.ownerDocument, n);
            },
            ho = { composed: !0 };
        kt.getRootNode &&
            (Mt = function (n) {
                return (
                    d.contains(n.ownerDocument, n) ||
                    n.getRootNode(ho) === n.ownerDocument
                );
            });
        var In = function (n, o) {
            return (
                (n = o || n),
                n.style.display === "none" ||
                    (n.style.display === "" &&
                        Mt(n) &&
                        d.css(n, "display") === "none")
            );
        };
        function ga(n, o, l, f) {
            var v,
                b,
                m = 20,
                A = f
                    ? function () {
                          return f.cur();
                      }
                    : function () {
                          return d.css(n, o, "");
                      },
                T = A(),
                I = (l && l[3]) || (d.cssNumber[o] ? "" : "px"),
                H =
                    n.nodeType &&
                    (d.cssNumber[o] || (I !== "px" && +T)) &&
                    nn.exec(d.css(n, o));
            if (H && H[3] !== I) {
                for (T = T / 2, I = I || H[3], H = +T || 1; m--; )
                    d.style(n, o, H + I),
                        (1 - b) * (1 - (b = A() / T || 0.5)) <= 0 && (m = 0),
                        (H = H / b);
                (H = H * 2), d.style(n, o, H + I), (l = l || []);
            }
            return (
                l &&
                    ((H = +H || +T || 0),
                    (v = l[1] ? H + (l[1] + 1) * l[2] : +l[2]),
                    f && ((f.unit = I), (f.start = H), (f.end = v))),
                v
            );
        }
        var ya = {};
        function po(n) {
            var o,
                l = n.ownerDocument,
                f = n.nodeName,
                v = ya[f];
            return (
                v ||
                ((o = l.body.appendChild(l.createElement(f))),
                (v = d.css(o, "display")),
                o.parentNode.removeChild(o),
                v === "none" && (v = "block"),
                (ya[f] = v),
                v)
            );
        }
        function qt(n, o) {
            for (var l, f, v = [], b = 0, m = n.length; b < m; b++)
                (f = n[b]),
                    f.style &&
                        ((l = f.style.display),
                        o
                            ? (l === "none" &&
                                  ((v[b] = te.get(f, "display") || null),
                                  v[b] || (f.style.display = "")),
                              f.style.display === "" && In(f) && (v[b] = po(f)))
                            : l !== "none" &&
                              ((v[b] = "none"), te.set(f, "display", l)));
            for (b = 0; b < m; b++) v[b] != null && (n[b].style.display = v[b]);
            return n;
        }
        d.fn.extend({
            show: function () {
                return qt(this, !0);
            },
            hide: function () {
                return qt(this);
            },
            toggle: function (n) {
                return typeof n == "boolean"
                    ? n
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          In(this) ? d(this).show() : d(this).hide();
                      });
            },
        });
        var rn = /^(?:checkbox|radio)$/i,
            _a = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            xa = /^$|^module$|\/(?:java|ecma)script/i;
        (function () {
            var n = O.createDocumentFragment(),
                o = n.appendChild(O.createElement("div")),
                l = O.createElement("input");
            l.setAttribute("type", "radio"),
                l.setAttribute("checked", "checked"),
                l.setAttribute("name", "t"),
                o.appendChild(l),
                (N.checkClone = o
                    .cloneNode(!0)
                    .cloneNode(!0).lastChild.checked),
                (o.innerHTML = "<textarea>x</textarea>"),
                (N.noCloneChecked = !!o.cloneNode(!0).lastChild.defaultValue),
                (o.innerHTML = "<option></option>"),
                (N.option = !!o.lastChild);
        })();
        var rt = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
        (rt.tbody = rt.tfoot = rt.colgroup = rt.caption = rt.thead),
            (rt.th = rt.td),
            N.option ||
                (rt.optgroup = rt.option =
                    [1, "<select multiple='multiple'>", "</select>"]);
        function We(n, o) {
            var l;
            return (
                typeof n.getElementsByTagName < "u"
                    ? (l = n.getElementsByTagName(o || "*"))
                    : typeof n.querySelectorAll < "u"
                    ? (l = n.querySelectorAll(o || "*"))
                    : (l = []),
                o === void 0 || (o && Ce(n, o)) ? d.merge([n], l) : l
            );
        }
        function fr(n, o) {
            for (var l = 0, f = n.length; l < f; l++)
                te.set(n[l], "globalEval", !o || te.get(o[l], "globalEval"));
        }
        var vo = /<|&#?\w+;/;
        function wa(n, o, l, f, v) {
            for (
                var b,
                    m,
                    A,
                    T,
                    I,
                    H,
                    U = o.createDocumentFragment(),
                    R = [],
                    M = 0,
                    Q = n.length;
                M < Q;
                M++
            )
                if (((b = n[M]), b || b === 0))
                    if (K(b) === "object") d.merge(R, b.nodeType ? [b] : b);
                    else if (!vo.test(b)) R.push(o.createTextNode(b));
                    else {
                        for (
                            m = m || U.appendChild(o.createElement("div")),
                                A = (_a.exec(b) || ["", ""])[1].toLowerCase(),
                                T = rt[A] || rt._default,
                                m.innerHTML = T[1] + d.htmlPrefilter(b) + T[2],
                                H = T[0];
                            H--;

                        )
                            m = m.lastChild;
                        d.merge(R, m.childNodes),
                            (m = U.firstChild),
                            (m.textContent = "");
                    }
            for (U.textContent = "", M = 0; (b = R[M++]); ) {
                if (f && d.inArray(b, f) > -1) {
                    v && v.push(b);
                    continue;
                }
                if (
                    ((I = Mt(b)),
                    (m = We(U.appendChild(b), "script")),
                    I && fr(m),
                    l)
                )
                    for (H = 0; (b = m[H++]); )
                        xa.test(b.type || "") && l.push(b);
            }
            return U;
        }
        var Ca = /^([^.]*)(?:\.(.+)|)/;
        function Bt() {
            return !0;
        }
        function Wt() {
            return !1;
        }
        function bo(n, o) {
            return (n === mo()) == (o === "focus");
        }
        function mo() {
            try {
                return O.activeElement;
            } catch {}
        }
        function cr(n, o, l, f, v, b) {
            var m, A;
            if (typeof o == "object") {
                typeof l != "string" && ((f = f || l), (l = void 0));
                for (A in o) cr(n, A, l, f, o[A], b);
                return n;
            }
            if (
                (f == null && v == null
                    ? ((v = l), (f = l = void 0))
                    : v == null &&
                      (typeof l == "string"
                          ? ((v = f), (f = void 0))
                          : ((v = f), (f = l), (l = void 0))),
                v === !1)
            )
                v = Wt;
            else if (!v) return n;
            return (
                b === 1 &&
                    ((m = v),
                    (v = function (T) {
                        return d().off(T), m.apply(this, arguments);
                    }),
                    (v.guid = m.guid || (m.guid = d.guid++))),
                n.each(function () {
                    d.event.add(this, o, v, f, l);
                })
            );
        }
        d.event = {
            global: {},
            add: function (n, o, l, f, v) {
                var b,
                    m,
                    A,
                    T,
                    I,
                    H,
                    U,
                    R,
                    M,
                    Q,
                    se,
                    z = te.get(n);
                if (en(n))
                    for (
                        l.handler &&
                            ((b = l), (l = b.handler), (v = b.selector)),
                            v && d.find.matchesSelector(kt, v),
                            l.guid || (l.guid = d.guid++),
                            (T = z.events) ||
                                (T = z.events = Object.create(null)),
                            (m = z.handle) ||
                                (m = z.handle =
                                    function (Ie) {
                                        return typeof d < "u" &&
                                            d.event.triggered !== Ie.type
                                            ? d.event.dispatch.apply(
                                                  n,
                                                  arguments
                                              )
                                            : void 0;
                                    }),
                            o = (o || "").match(qe) || [""],
                            I = o.length;
                        I--;

                    )
                        (A = Ca.exec(o[I]) || []),
                            (M = se = A[1]),
                            (Q = (A[2] || "").split(".").sort()),
                            M &&
                                ((U = d.event.special[M] || {}),
                                (M = (v ? U.delegateType : U.bindType) || M),
                                (U = d.event.special[M] || {}),
                                (H = d.extend(
                                    {
                                        type: M,
                                        origType: se,
                                        data: f,
                                        handler: l,
                                        guid: l.guid,
                                        selector: v,
                                        needsContext:
                                            v &&
                                            d.expr.match.needsContext.test(v),
                                        namespace: Q.join("."),
                                    },
                                    b
                                )),
                                (R = T[M]) ||
                                    ((R = T[M] = []),
                                    (R.delegateCount = 0),
                                    (!U.setup ||
                                        U.setup.call(n, f, Q, m) === !1) &&
                                        n.addEventListener &&
                                        n.addEventListener(M, m)),
                                U.add &&
                                    (U.add.call(n, H),
                                    H.handler.guid ||
                                        (H.handler.guid = l.guid)),
                                v
                                    ? R.splice(R.delegateCount++, 0, H)
                                    : R.push(H),
                                (d.event.global[M] = !0));
            },
            remove: function (n, o, l, f, v) {
                var b,
                    m,
                    A,
                    T,
                    I,
                    H,
                    U,
                    R,
                    M,
                    Q,
                    se,
                    z = te.hasData(n) && te.get(n);
                if (!(!z || !(T = z.events))) {
                    for (o = (o || "").match(qe) || [""], I = o.length; I--; ) {
                        if (
                            ((A = Ca.exec(o[I]) || []),
                            (M = se = A[1]),
                            (Q = (A[2] || "").split(".").sort()),
                            !M)
                        ) {
                            for (M in T) d.event.remove(n, M + o[I], l, f, !0);
                            continue;
                        }
                        for (
                            U = d.event.special[M] || {},
                                M = (f ? U.delegateType : U.bindType) || M,
                                R = T[M] || [],
                                A =
                                    A[2] &&
                                    new RegExp(
                                        "(^|\\.)" +
                                            Q.join("\\.(?:.*\\.|)") +
                                            "(\\.|$)"
                                    ),
                                m = b = R.length;
                            b--;

                        )
                            (H = R[b]),
                                (v || se === H.origType) &&
                                    (!l || l.guid === H.guid) &&
                                    (!A || A.test(H.namespace)) &&
                                    (!f ||
                                        f === H.selector ||
                                        (f === "**" && H.selector)) &&
                                    (R.splice(b, 1),
                                    H.selector && R.delegateCount--,
                                    U.remove && U.remove.call(n, H));
                        m &&
                            !R.length &&
                            ((!U.teardown ||
                                U.teardown.call(n, Q, z.handle) === !1) &&
                                d.removeEvent(n, M, z.handle),
                            delete T[M]);
                    }
                    d.isEmptyObject(T) && te.remove(n, "handle events");
                }
            },
            dispatch: function (n) {
                var o,
                    l,
                    f,
                    v,
                    b,
                    m,
                    A = new Array(arguments.length),
                    T = d.event.fix(n),
                    I =
                        (te.get(this, "events") || Object.create(null))[
                            T.type
                        ] || [],
                    H = d.event.special[T.type] || {};
                for (A[0] = T, o = 1; o < arguments.length; o++)
                    A[o] = arguments[o];
                if (
                    ((T.delegateTarget = this),
                    !(H.preDispatch && H.preDispatch.call(this, T) === !1))
                ) {
                    for (
                        m = d.event.handlers.call(this, T, I), o = 0;
                        (v = m[o++]) && !T.isPropagationStopped();

                    )
                        for (
                            T.currentTarget = v.elem, l = 0;
                            (b = v.handlers[l++]) &&
                            !T.isImmediatePropagationStopped();

                        )
                            (!T.rnamespace ||
                                b.namespace === !1 ||
                                T.rnamespace.test(b.namespace)) &&
                                ((T.handleObj = b),
                                (T.data = b.data),
                                (f = (
                                    (d.event.special[b.origType] || {})
                                        .handle || b.handler
                                ).apply(v.elem, A)),
                                f !== void 0 &&
                                    (T.result = f) === !1 &&
                                    (T.preventDefault(), T.stopPropagation()));
                    return (
                        H.postDispatch && H.postDispatch.call(this, T), T.result
                    );
                }
            },
            handlers: function (n, o) {
                var l,
                    f,
                    v,
                    b,
                    m,
                    A = [],
                    T = o.delegateCount,
                    I = n.target;
                if (T && I.nodeType && !(n.type === "click" && n.button >= 1)) {
                    for (; I !== this; I = I.parentNode || this)
                        if (
                            I.nodeType === 1 &&
                            !(n.type === "click" && I.disabled === !0)
                        ) {
                            for (b = [], m = {}, l = 0; l < T; l++)
                                (f = o[l]),
                                    (v = f.selector + " "),
                                    m[v] === void 0 &&
                                        (m[v] = f.needsContext
                                            ? d(v, this).index(I) > -1
                                            : d.find(v, this, null, [I])
                                                  .length),
                                    m[v] && b.push(f);
                            b.length && A.push({ elem: I, handlers: b });
                        }
                }
                return (
                    (I = this),
                    T < o.length && A.push({ elem: I, handlers: o.slice(T) }),
                    A
                );
            },
            addProp: function (n, o) {
                Object.defineProperty(d.Event.prototype, n, {
                    enumerable: !0,
                    configurable: !0,
                    get: P(o)
                        ? function () {
                              if (this.originalEvent)
                                  return o(this.originalEvent);
                          }
                        : function () {
                              if (this.originalEvent)
                                  return this.originalEvent[n];
                          },
                    set: function (l) {
                        Object.defineProperty(this, n, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: l,
                        });
                    },
                });
            },
            fix: function (n) {
                return n[d.expando] ? n : new d.Event(n);
            },
            special: {
                load: { noBubble: !0 },
                click: {
                    setup: function (n) {
                        var o = this || n;
                        return (
                            rn.test(o.type) &&
                                o.click &&
                                Ce(o, "input") &&
                                Fn(o, "click", Bt),
                            !1
                        );
                    },
                    trigger: function (n) {
                        var o = this || n;
                        return (
                            rn.test(o.type) &&
                                o.click &&
                                Ce(o, "input") &&
                                Fn(o, "click"),
                            !0
                        );
                    },
                    _default: function (n) {
                        var o = n.target;
                        return (
                            (rn.test(o.type) &&
                                o.click &&
                                Ce(o, "input") &&
                                te.get(o, "click")) ||
                            Ce(o, "a")
                        );
                    },
                },
                beforeunload: {
                    postDispatch: function (n) {
                        n.result !== void 0 &&
                            n.originalEvent &&
                            (n.originalEvent.returnValue = n.result);
                    },
                },
            },
        };
        function Fn(n, o, l) {
            if (!l) {
                te.get(n, o) === void 0 && d.event.add(n, o, Bt);
                return;
            }
            te.set(n, o, !1),
                d.event.add(n, o, {
                    namespace: !1,
                    handler: function (f) {
                        var v,
                            b,
                            m = te.get(this, o);
                        if (f.isTrigger & 1 && this[o]) {
                            if (m.length)
                                (d.event.special[o] || {}).delegateType &&
                                    f.stopPropagation();
                            else if (
                                ((m = u.call(arguments)),
                                te.set(this, o, m),
                                (v = l(this, o)),
                                this[o](),
                                (b = te.get(this, o)),
                                m !== b || v ? te.set(this, o, !1) : (b = {}),
                                m !== b)
                            )
                                return (
                                    f.stopImmediatePropagation(),
                                    f.preventDefault(),
                                    b && b.value
                                );
                        } else
                            m.length &&
                                (te.set(this, o, {
                                    value: d.event.trigger(
                                        d.extend(m[0], d.Event.prototype),
                                        m.slice(1),
                                        this
                                    ),
                                }),
                                f.stopImmediatePropagation());
                    },
                });
        }
        (d.removeEvent = function (n, o, l) {
            n.removeEventListener && n.removeEventListener(o, l);
        }),
            (d.Event = function (n, o) {
                if (!(this instanceof d.Event)) return new d.Event(n, o);
                n && n.type
                    ? ((this.originalEvent = n),
                      (this.type = n.type),
                      (this.isDefaultPrevented =
                          n.defaultPrevented ||
                          (n.defaultPrevented === void 0 &&
                              n.returnValue === !1)
                              ? Bt
                              : Wt),
                      (this.target =
                          n.target && n.target.nodeType === 3
                              ? n.target.parentNode
                              : n.target),
                      (this.currentTarget = n.currentTarget),
                      (this.relatedTarget = n.relatedTarget))
                    : (this.type = n),
                    o && d.extend(this, o),
                    (this.timeStamp = (n && n.timeStamp) || Date.now()),
                    (this[d.expando] = !0);
            }),
            (d.Event.prototype = {
                constructor: d.Event,
                isDefaultPrevented: Wt,
                isPropagationStopped: Wt,
                isImmediatePropagationStopped: Wt,
                isSimulated: !1,
                preventDefault: function () {
                    var n = this.originalEvent;
                    (this.isDefaultPrevented = Bt),
                        n && !this.isSimulated && n.preventDefault();
                },
                stopPropagation: function () {
                    var n = this.originalEvent;
                    (this.isPropagationStopped = Bt),
                        n && !this.isSimulated && n.stopPropagation();
                },
                stopImmediatePropagation: function () {
                    var n = this.originalEvent;
                    (this.isImmediatePropagationStopped = Bt),
                        n && !this.isSimulated && n.stopImmediatePropagation(),
                        this.stopPropagation();
                },
            }),
            d.each(
                {
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: !0,
                },
                d.event.addProp
            ),
            d.each({ focus: "focusin", blur: "focusout" }, function (n, o) {
                d.event.special[n] = {
                    setup: function () {
                        return Fn(this, n, bo), !1;
                    },
                    trigger: function () {
                        return Fn(this, n), !0;
                    },
                    _default: function (l) {
                        return te.get(l.target, n);
                    },
                    delegateType: o,
                };
            }),
            d.each(
                {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout",
                },
                function (n, o) {
                    d.event.special[n] = {
                        delegateType: o,
                        bindType: o,
                        handle: function (l) {
                            var f,
                                v = this,
                                b = l.relatedTarget,
                                m = l.handleObj;
                            return (
                                (!b || (b !== v && !d.contains(v, b))) &&
                                    ((l.type = m.origType),
                                    (f = m.handler.apply(this, arguments)),
                                    (l.type = o)),
                                f
                            );
                        },
                    };
                }
            ),
            d.fn.extend({
                on: function (n, o, l, f) {
                    return cr(this, n, o, l, f);
                },
                one: function (n, o, l, f) {
                    return cr(this, n, o, l, f, 1);
                },
                off: function (n, o, l) {
                    var f, v;
                    if (n && n.preventDefault && n.handleObj)
                        return (
                            (f = n.handleObj),
                            d(n.delegateTarget).off(
                                f.namespace
                                    ? f.origType + "." + f.namespace
                                    : f.origType,
                                f.selector,
                                f.handler
                            ),
                            this
                        );
                    if (typeof n == "object") {
                        for (v in n) this.off(v, o, n[v]);
                        return this;
                    }
                    return (
                        (o === !1 || typeof o == "function") &&
                            ((l = o), (o = void 0)),
                        l === !1 && (l = Wt),
                        this.each(function () {
                            d.event.remove(this, n, l, o);
                        })
                    );
                },
            });
        var go = /<script|<style|<link/i,
            yo = /checked\s*(?:[^=]|=\s*.checked.)/i,
            _o = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function Da(n, o) {
            return (
                (Ce(n, "table") &&
                    Ce(o.nodeType !== 11 ? o : o.firstChild, "tr") &&
                    d(n).children("tbody")[0]) ||
                n
            );
        }
        function xo(n) {
            return (
                (n.type = (n.getAttribute("type") !== null) + "/" + n.type), n
            );
        }
        function wo(n) {
            return (
                (n.type || "").slice(0, 5) === "true/"
                    ? (n.type = n.type.slice(5))
                    : n.removeAttribute("type"),
                n
            );
        }
        function Ta(n, o) {
            var l, f, v, b, m, A, T;
            if (o.nodeType === 1) {
                if (te.hasData(n) && ((b = te.get(n)), (T = b.events), T)) {
                    te.remove(o, "handle events");
                    for (v in T)
                        for (l = 0, f = T[v].length; l < f; l++)
                            d.event.add(o, v, T[v][l]);
                }
                Be.hasData(n) &&
                    ((m = Be.access(n)), (A = d.extend({}, m)), Be.set(o, A));
            }
        }
        function Co(n, o) {
            var l = o.nodeName.toLowerCase();
            l === "input" && rn.test(n.type)
                ? (o.checked = n.checked)
                : (l === "input" || l === "textarea") &&
                  (o.defaultValue = n.defaultValue);
        }
        function $t(n, o, l, f) {
            o = c(o);
            var v,
                b,
                m,
                A,
                T,
                I,
                H = 0,
                U = n.length,
                R = U - 1,
                M = o[0],
                Q = P(M);
            if (
                Q ||
                (U > 1 && typeof M == "string" && !N.checkClone && yo.test(M))
            )
                return n.each(function (se) {
                    var z = n.eq(se);
                    Q && (o[0] = M.call(this, se, z.html())), $t(z, o, l, f);
                });
            if (
                U &&
                ((v = wa(o, n[0].ownerDocument, !1, n, f)),
                (b = v.firstChild),
                v.childNodes.length === 1 && (v = b),
                b || f)
            ) {
                for (m = d.map(We(v, "script"), xo), A = m.length; H < U; H++)
                    (T = v),
                        H !== R &&
                            ((T = d.clone(T, !0, !0)),
                            A && d.merge(m, We(T, "script"))),
                        l.call(n[H], T, H);
                if (A)
                    for (
                        I = m[m.length - 1].ownerDocument, d.map(m, wo), H = 0;
                        H < A;
                        H++
                    )
                        (T = m[H]),
                            xa.test(T.type || "") &&
                                !te.access(T, "globalEval") &&
                                d.contains(I, T) &&
                                (T.src &&
                                (T.type || "").toLowerCase() !== "module"
                                    ? d._evalUrl &&
                                      !T.noModule &&
                                      d._evalUrl(
                                          T.src,
                                          {
                                              nonce:
                                                  T.nonce ||
                                                  T.getAttribute("nonce"),
                                          },
                                          I
                                      )
                                    : J(T.textContent.replace(_o, ""), T, I));
            }
            return n;
        }
        function Sa(n, o, l) {
            for (
                var f, v = o ? d.filter(o, n) : n, b = 0;
                (f = v[b]) != null;
                b++
            )
                !l && f.nodeType === 1 && d.cleanData(We(f)),
                    f.parentNode &&
                        (l && Mt(f) && fr(We(f, "script")),
                        f.parentNode.removeChild(f));
            return n;
        }
        d.extend({
            htmlPrefilter: function (n) {
                return n;
            },
            clone: function (n, o, l) {
                var f,
                    v,
                    b,
                    m,
                    A = n.cloneNode(!0),
                    T = Mt(n);
                if (
                    !N.noCloneChecked &&
                    (n.nodeType === 1 || n.nodeType === 11) &&
                    !d.isXMLDoc(n)
                )
                    for (m = We(A), b = We(n), f = 0, v = b.length; f < v; f++)
                        Co(b[f], m[f]);
                if (o)
                    if (l)
                        for (
                            b = b || We(n), m = m || We(A), f = 0, v = b.length;
                            f < v;
                            f++
                        )
                            Ta(b[f], m[f]);
                    else Ta(n, A);
                return (
                    (m = We(A, "script")),
                    m.length > 0 && fr(m, !T && We(n, "script")),
                    A
                );
            },
            cleanData: function (n) {
                for (
                    var o, l, f, v = d.event.special, b = 0;
                    (l = n[b]) !== void 0;
                    b++
                )
                    if (en(l)) {
                        if ((o = l[te.expando])) {
                            if (o.events)
                                for (f in o.events)
                                    v[f]
                                        ? d.event.remove(l, f)
                                        : d.removeEvent(l, f, o.handle);
                            l[te.expando] = void 0;
                        }
                        l[Be.expando] && (l[Be.expando] = void 0);
                    }
            },
        }),
            d.fn.extend({
                detach: function (n) {
                    return Sa(this, n, !0);
                },
                remove: function (n) {
                    return Sa(this, n);
                },
                text: function (n) {
                    return gt(
                        this,
                        function (o) {
                            return o === void 0
                                ? d.text(this)
                                : this.empty().each(function () {
                                      (this.nodeType === 1 ||
                                          this.nodeType === 11 ||
                                          this.nodeType === 9) &&
                                          (this.textContent = o);
                                  });
                        },
                        null,
                        n,
                        arguments.length
                    );
                },
                append: function () {
                    return $t(this, arguments, function (n) {
                        if (
                            this.nodeType === 1 ||
                            this.nodeType === 11 ||
                            this.nodeType === 9
                        ) {
                            var o = Da(this, n);
                            o.appendChild(n);
                        }
                    });
                },
                prepend: function () {
                    return $t(this, arguments, function (n) {
                        if (
                            this.nodeType === 1 ||
                            this.nodeType === 11 ||
                            this.nodeType === 9
                        ) {
                            var o = Da(this, n);
                            o.insertBefore(n, o.firstChild);
                        }
                    });
                },
                before: function () {
                    return $t(this, arguments, function (n) {
                        this.parentNode &&
                            this.parentNode.insertBefore(n, this);
                    });
                },
                after: function () {
                    return $t(this, arguments, function (n) {
                        this.parentNode &&
                            this.parentNode.insertBefore(n, this.nextSibling);
                    });
                },
                empty: function () {
                    for (var n, o = 0; (n = this[o]) != null; o++)
                        n.nodeType === 1 &&
                            (d.cleanData(We(n, !1)), (n.textContent = ""));
                    return this;
                },
                clone: function (n, o) {
                    return (
                        (n = n ?? !1),
                        (o = o ?? n),
                        this.map(function () {
                            return d.clone(this, n, o);
                        })
                    );
                },
                html: function (n) {
                    return gt(
                        this,
                        function (o) {
                            var l = this[0] || {},
                                f = 0,
                                v = this.length;
                            if (o === void 0 && l.nodeType === 1)
                                return l.innerHTML;
                            if (
                                typeof o == "string" &&
                                !go.test(o) &&
                                !rt[(_a.exec(o) || ["", ""])[1].toLowerCase()]
                            ) {
                                o = d.htmlPrefilter(o);
                                try {
                                    for (; f < v; f++)
                                        (l = this[f] || {}),
                                            l.nodeType === 1 &&
                                                (d.cleanData(We(l, !1)),
                                                (l.innerHTML = o));
                                    l = 0;
                                } catch {}
                            }
                            l && this.empty().append(o);
                        },
                        null,
                        n,
                        arguments.length
                    );
                },
                replaceWith: function () {
                    var n = [];
                    return $t(
                        this,
                        arguments,
                        function (o) {
                            var l = this.parentNode;
                            d.inArray(this, n) < 0 &&
                                (d.cleanData(We(this)),
                                l && l.replaceChild(o, this));
                        },
                        n
                    );
                },
            }),
            d.each(
                {
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith",
                },
                function (n, o) {
                    d.fn[n] = function (l) {
                        for (
                            var f, v = [], b = d(l), m = b.length - 1, A = 0;
                            A <= m;
                            A++
                        )
                            (f = A === m ? this : this.clone(!0)),
                                d(b[A])[o](f),
                                h.apply(v, f.get());
                        return this.pushStack(v);
                    };
                }
            );
        var dr = new RegExp("^(" + ma + ")(?!px)[a-z%]+$", "i"),
            hr = /^--/,
            jn = function (n) {
                var o = n.ownerDocument.defaultView;
                return (!o || !o.opener) && (o = t), o.getComputedStyle(n);
            },
            Aa = function (n, o, l) {
                var f,
                    v,
                    b = {};
                for (v in o) (b[v] = n.style[v]), (n.style[v] = o[v]);
                f = l.call(n);
                for (v in o) n.style[v] = b[v];
                return f;
            },
            Do = new RegExp(yt.join("|"), "i"),
            Na = "[\\x20\\t\\r\\n\\f]",
            To = new RegExp(
                "^" + Na + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Na + "+$",
                "g"
            );
        (function () {
            function n() {
                if (I) {
                    (T.style.cssText =
                        "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                        (I.style.cssText =
                            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                        kt.appendChild(T).appendChild(I);
                    var H = t.getComputedStyle(I);
                    (l = H.top !== "1%"),
                        (A = o(H.marginLeft) === 12),
                        (I.style.right = "60%"),
                        (b = o(H.right) === 36),
                        (f = o(H.width) === 36),
                        (I.style.position = "absolute"),
                        (v = o(I.offsetWidth / 3) === 12),
                        kt.removeChild(T),
                        (I = null);
                }
            }
            function o(H) {
                return Math.round(parseFloat(H));
            }
            var l,
                f,
                v,
                b,
                m,
                A,
                T = O.createElement("div"),
                I = O.createElement("div");
            I.style &&
                ((I.style.backgroundClip = "content-box"),
                (I.cloneNode(!0).style.backgroundClip = ""),
                (N.clearCloneStyle = I.style.backgroundClip === "content-box"),
                d.extend(N, {
                    boxSizingReliable: function () {
                        return n(), f;
                    },
                    pixelBoxStyles: function () {
                        return n(), b;
                    },
                    pixelPosition: function () {
                        return n(), l;
                    },
                    reliableMarginLeft: function () {
                        return n(), A;
                    },
                    scrollboxSize: function () {
                        return n(), v;
                    },
                    reliableTrDimensions: function () {
                        var H, U, R, M;
                        return (
                            m == null &&
                                ((H = O.createElement("table")),
                                (U = O.createElement("tr")),
                                (R = O.createElement("div")),
                                (H.style.cssText =
                                    "position:absolute;left:-11111px;border-collapse:separate"),
                                (U.style.cssText = "border:1px solid"),
                                (U.style.height = "1px"),
                                (R.style.height = "9px"),
                                (R.style.display = "block"),
                                kt.appendChild(H).appendChild(U).appendChild(R),
                                (M = t.getComputedStyle(U)),
                                (m =
                                    parseInt(M.height, 10) +
                                        parseInt(M.borderTopWidth, 10) +
                                        parseInt(M.borderBottomWidth, 10) ===
                                    U.offsetHeight),
                                kt.removeChild(H)),
                            m
                        );
                    },
                }));
        })();
        function an(n, o, l) {
            var f,
                v,
                b,
                m,
                A = hr.test(o),
                T = n.style;
            return (
                (l = l || jn(n)),
                l &&
                    ((m = l.getPropertyValue(o) || l[o]),
                    A && m && (m = m.replace(To, "$1") || void 0),
                    m === "" && !Mt(n) && (m = d.style(n, o)),
                    !N.pixelBoxStyles() &&
                        dr.test(m) &&
                        Do.test(o) &&
                        ((f = T.width),
                        (v = T.minWidth),
                        (b = T.maxWidth),
                        (T.minWidth = T.maxWidth = T.width = m),
                        (m = l.width),
                        (T.width = f),
                        (T.minWidth = v),
                        (T.maxWidth = b))),
                m !== void 0 ? m + "" : m
            );
        }
        function La(n, o) {
            return {
                get: function () {
                    if (n()) {
                        delete this.get;
                        return;
                    }
                    return (this.get = o).apply(this, arguments);
                },
            };
        }
        var ka = ["Webkit", "Moz", "ms"],
            Ea = O.createElement("div").style,
            Ia = {};
        function So(n) {
            for (var o = n[0].toUpperCase() + n.slice(1), l = ka.length; l--; )
                if (((n = ka[l] + o), n in Ea)) return n;
        }
        function pr(n) {
            var o = d.cssProps[n] || Ia[n];
            return o || (n in Ea ? n : (Ia[n] = So(n) || n));
        }
        var Ao = /^(none|table(?!-c[ea]).+)/,
            No = {
                position: "absolute",
                visibility: "hidden",
                display: "block",
            },
            Fa = { letterSpacing: "0", fontWeight: "400" };
        function ja(n, o, l) {
            var f = nn.exec(o);
            return f ? Math.max(0, f[2] - (l || 0)) + (f[3] || "px") : o;
        }
        function vr(n, o, l, f, v, b) {
            var m = o === "width" ? 1 : 0,
                A = 0,
                T = 0;
            if (l === (f ? "border" : "content")) return 0;
            for (; m < 4; m += 2)
                l === "margin" && (T += d.css(n, l + yt[m], !0, v)),
                    f
                        ? (l === "content" &&
                              (T -= d.css(n, "padding" + yt[m], !0, v)),
                          l !== "margin" &&
                              (T -= d.css(
                                  n,
                                  "border" + yt[m] + "Width",
                                  !0,
                                  v
                              )))
                        : ((T += d.css(n, "padding" + yt[m], !0, v)),
                          l !== "padding"
                              ? (T += d.css(
                                    n,
                                    "border" + yt[m] + "Width",
                                    !0,
                                    v
                                ))
                              : (A += d.css(
                                    n,
                                    "border" + yt[m] + "Width",
                                    !0,
                                    v
                                )));
            return (
                !f &&
                    b >= 0 &&
                    (T +=
                        Math.max(
                            0,
                            Math.ceil(
                                n["offset" + o[0].toUpperCase() + o.slice(1)] -
                                    b -
                                    T -
                                    A -
                                    0.5
                            )
                        ) || 0),
                T
            );
        }
        function Pa(n, o, l) {
            var f = jn(n),
                v = !N.boxSizingReliable() || l,
                b = v && d.css(n, "boxSizing", !1, f) === "border-box",
                m = b,
                A = an(n, o, f),
                T = "offset" + o[0].toUpperCase() + o.slice(1);
            if (dr.test(A)) {
                if (!l) return A;
                A = "auto";
            }
            return (
                ((!N.boxSizingReliable() && b) ||
                    (!N.reliableTrDimensions() && Ce(n, "tr")) ||
                    A === "auto" ||
                    (!parseFloat(A) &&
                        d.css(n, "display", !1, f) === "inline")) &&
                    n.getClientRects().length &&
                    ((b = d.css(n, "boxSizing", !1, f) === "border-box"),
                    (m = T in n),
                    m && (A = n[T])),
                (A = parseFloat(A) || 0),
                A + vr(n, o, l || (b ? "border" : "content"), m, f, A) + "px"
            );
        }
        d.extend({
            cssHooks: {
                opacity: {
                    get: function (n, o) {
                        if (o) {
                            var l = an(n, "opacity");
                            return l === "" ? "1" : l;
                        }
                    },
                },
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
            },
            cssProps: {},
            style: function (n, o, l, f) {
                if (!(!n || n.nodeType === 3 || n.nodeType === 8 || !n.style)) {
                    var v,
                        b,
                        m,
                        A = dt(o),
                        T = hr.test(o),
                        I = n.style;
                    if (
                        (T || (o = pr(A)),
                        (m = d.cssHooks[o] || d.cssHooks[A]),
                        l !== void 0)
                    ) {
                        if (
                            ((b = typeof l),
                            b === "string" &&
                                (v = nn.exec(l)) &&
                                v[1] &&
                                ((l = ga(n, o, v)), (b = "number")),
                            l == null || l !== l)
                        )
                            return;
                        b === "number" &&
                            !T &&
                            (l += (v && v[3]) || (d.cssNumber[A] ? "" : "px")),
                            !N.clearCloneStyle &&
                                l === "" &&
                                o.indexOf("background") === 0 &&
                                (I[o] = "inherit"),
                            (!m ||
                                !("set" in m) ||
                                (l = m.set(n, l, f)) !== void 0) &&
                                (T ? I.setProperty(o, l) : (I[o] = l));
                    } else
                        return m &&
                            "get" in m &&
                            (v = m.get(n, !1, f)) !== void 0
                            ? v
                            : I[o];
                }
            },
            css: function (n, o, l, f) {
                var v,
                    b,
                    m,
                    A = dt(o),
                    T = hr.test(o);
                return (
                    T || (o = pr(A)),
                    (m = d.cssHooks[o] || d.cssHooks[A]),
                    m && "get" in m && (v = m.get(n, !0, l)),
                    v === void 0 && (v = an(n, o, f)),
                    v === "normal" && o in Fa && (v = Fa[o]),
                    l === "" || l
                        ? ((b = parseFloat(v)),
                          l === !0 || isFinite(b) ? b || 0 : v)
                        : v
                );
            },
        }),
            d.each(["height", "width"], function (n, o) {
                d.cssHooks[o] = {
                    get: function (l, f, v) {
                        if (f)
                            return Ao.test(d.css(l, "display")) &&
                                (!l.getClientRects().length ||
                                    !l.getBoundingClientRect().width)
                                ? Aa(l, No, function () {
                                      return Pa(l, o, v);
                                  })
                                : Pa(l, o, v);
                    },
                    set: function (l, f, v) {
                        var b,
                            m = jn(l),
                            A = !N.scrollboxSize() && m.position === "absolute",
                            T = A || v,
                            I =
                                T &&
                                d.css(l, "boxSizing", !1, m) === "border-box",
                            H = v ? vr(l, o, v, I, m) : 0;
                        return (
                            I &&
                                A &&
                                (H -= Math.ceil(
                                    l[
                                        "offset" +
                                            o[0].toUpperCase() +
                                            o.slice(1)
                                    ] -
                                        parseFloat(m[o]) -
                                        vr(l, o, "border", !1, m) -
                                        0.5
                                )),
                            H &&
                                (b = nn.exec(f)) &&
                                (b[3] || "px") !== "px" &&
                                ((l.style[o] = f), (f = d.css(l, o))),
                            ja(l, f, H)
                        );
                    },
                };
            }),
            (d.cssHooks.marginLeft = La(N.reliableMarginLeft, function (n, o) {
                if (o)
                    return (
                        (parseFloat(an(n, "marginLeft")) ||
                            n.getBoundingClientRect().left -
                                Aa(n, { marginLeft: 0 }, function () {
                                    return n.getBoundingClientRect().left;
                                })) + "px"
                    );
            })),
            d.each(
                { margin: "", padding: "", border: "Width" },
                function (n, o) {
                    (d.cssHooks[n + o] = {
                        expand: function (l) {
                            for (
                                var f = 0,
                                    v = {},
                                    b =
                                        typeof l == "string"
                                            ? l.split(" ")
                                            : [l];
                                f < 4;
                                f++
                            )
                                v[n + yt[f] + o] = b[f] || b[f - 2] || b[0];
                            return v;
                        },
                    }),
                        n !== "margin" && (d.cssHooks[n + o].set = ja);
                }
            ),
            d.fn.extend({
                css: function (n, o) {
                    return gt(
                        this,
                        function (l, f, v) {
                            var b,
                                m,
                                A = {},
                                T = 0;
                            if (Array.isArray(f)) {
                                for (b = jn(l), m = f.length; T < m; T++)
                                    A[f[T]] = d.css(l, f[T], !1, b);
                                return A;
                            }
                            return v !== void 0
                                ? d.style(l, f, v)
                                : d.css(l, f);
                        },
                        n,
                        o,
                        arguments.length > 1
                    );
                },
            });
        function $e(n, o, l, f, v) {
            return new $e.prototype.init(n, o, l, f, v);
        }
        (d.Tween = $e),
            ($e.prototype = {
                constructor: $e,
                init: function (n, o, l, f, v, b) {
                    (this.elem = n),
                        (this.prop = l),
                        (this.easing = v || d.easing._default),
                        (this.options = o),
                        (this.start = this.now = this.cur()),
                        (this.end = f),
                        (this.unit = b || (d.cssNumber[l] ? "" : "px"));
                },
                cur: function () {
                    var n = $e.propHooks[this.prop];
                    return n && n.get
                        ? n.get(this)
                        : $e.propHooks._default.get(this);
                },
                run: function (n) {
                    var o,
                        l = $e.propHooks[this.prop];
                    return (
                        this.options.duration
                            ? (this.pos = o =
                                  d.easing[this.easing](
                                      n,
                                      this.options.duration * n,
                                      0,
                                      1,
                                      this.options.duration
                                  ))
                            : (this.pos = o = n),
                        (this.now = (this.end - this.start) * o + this.start),
                        this.options.step &&
                            this.options.step.call(this.elem, this.now, this),
                        l && l.set
                            ? l.set(this)
                            : $e.propHooks._default.set(this),
                        this
                    );
                },
            }),
            ($e.prototype.init.prototype = $e.prototype),
            ($e.propHooks = {
                _default: {
                    get: function (n) {
                        var o;
                        return n.elem.nodeType !== 1 ||
                            (n.elem[n.prop] != null &&
                                n.elem.style[n.prop] == null)
                            ? n.elem[n.prop]
                            : ((o = d.css(n.elem, n.prop, "")),
                              !o || o === "auto" ? 0 : o);
                    },
                    set: function (n) {
                        d.fx.step[n.prop]
                            ? d.fx.step[n.prop](n)
                            : n.elem.nodeType === 1 &&
                              (d.cssHooks[n.prop] ||
                                  n.elem.style[pr(n.prop)] != null)
                            ? d.style(n.elem, n.prop, n.now + n.unit)
                            : (n.elem[n.prop] = n.now);
                    },
                },
            }),
            ($e.propHooks.scrollTop = $e.propHooks.scrollLeft =
                {
                    set: function (n) {
                        n.elem.nodeType &&
                            n.elem.parentNode &&
                            (n.elem[n.prop] = n.now);
                    },
                }),
            (d.easing = {
                linear: function (n) {
                    return n;
                },
                swing: function (n) {
                    return 0.5 - Math.cos(n * Math.PI) / 2;
                },
                _default: "swing",
            }),
            (d.fx = $e.prototype.init),
            (d.fx.step = {});
        var Ut,
            Pn,
            Lo = /^(?:toggle|show|hide)$/,
            ko = /queueHooks$/;
        function br() {
            Pn &&
                (O.hidden === !1 && t.requestAnimationFrame
                    ? t.requestAnimationFrame(br)
                    : t.setTimeout(br, d.fx.interval),
                d.fx.tick());
        }
        function Ra() {
            return (
                t.setTimeout(function () {
                    Ut = void 0;
                }),
                (Ut = Date.now())
            );
        }
        function Rn(n, o) {
            var l,
                f = 0,
                v = { height: n };
            for (o = o ? 1 : 0; f < 4; f += 2 - o)
                (l = yt[f]), (v["margin" + l] = v["padding" + l] = n);
            return o && (v.opacity = v.width = n), v;
        }
        function Ha(n, o, l) {
            for (
                var f,
                    v = (ut.tweeners[o] || []).concat(ut.tweeners["*"]),
                    b = 0,
                    m = v.length;
                b < m;
                b++
            )
                if ((f = v[b].call(l, o, n))) return f;
        }
        function Eo(n, o, l) {
            var f,
                v,
                b,
                m,
                A,
                T,
                I,
                H,
                U = "width" in o || "height" in o,
                R = this,
                M = {},
                Q = n.style,
                se = n.nodeType && In(n),
                z = te.get(n, "fxshow");
            l.queue ||
                ((m = d._queueHooks(n, "fx")),
                m.unqueued == null &&
                    ((m.unqueued = 0),
                    (A = m.empty.fire),
                    (m.empty.fire = function () {
                        m.unqueued || A();
                    })),
                m.unqueued++,
                R.always(function () {
                    R.always(function () {
                        m.unqueued--, d.queue(n, "fx").length || m.empty.fire();
                    });
                }));
            for (f in o)
                if (((v = o[f]), Lo.test(v))) {
                    if (
                        (delete o[f],
                        (b = b || v === "toggle"),
                        v === (se ? "hide" : "show"))
                    )
                        if (v === "show" && z && z[f] !== void 0) se = !0;
                        else continue;
                    M[f] = (z && z[f]) || d.style(n, f);
                }
            if (((T = !d.isEmptyObject(o)), !(!T && d.isEmptyObject(M)))) {
                U &&
                    n.nodeType === 1 &&
                    ((l.overflow = [Q.overflow, Q.overflowX, Q.overflowY]),
                    (I = z && z.display),
                    I == null && (I = te.get(n, "display")),
                    (H = d.css(n, "display")),
                    H === "none" &&
                        (I
                            ? (H = I)
                            : (qt([n], !0),
                              (I = n.style.display || I),
                              (H = d.css(n, "display")),
                              qt([n]))),
                    (H === "inline" || (H === "inline-block" && I != null)) &&
                        d.css(n, "float") === "none" &&
                        (T ||
                            (R.done(function () {
                                Q.display = I;
                            }),
                            I == null &&
                                ((H = Q.display), (I = H === "none" ? "" : H))),
                        (Q.display = "inline-block"))),
                    l.overflow &&
                        ((Q.overflow = "hidden"),
                        R.always(function () {
                            (Q.overflow = l.overflow[0]),
                                (Q.overflowX = l.overflow[1]),
                                (Q.overflowY = l.overflow[2]);
                        })),
                    (T = !1);
                for (f in M)
                    T ||
                        (z
                            ? "hidden" in z && (se = z.hidden)
                            : (z = te.access(n, "fxshow", { display: I })),
                        b && (z.hidden = !se),
                        se && qt([n], !0),
                        R.done(function () {
                            se || qt([n]), te.remove(n, "fxshow");
                            for (f in M) d.style(n, f, M[f]);
                        })),
                        (T = Ha(se ? z[f] : 0, f, R)),
                        f in z ||
                            ((z[f] = T.start),
                            se && ((T.end = T.start), (T.start = 0)));
            }
        }
        function Io(n, o) {
            var l, f, v, b, m;
            for (l in n)
                if (
                    ((f = dt(l)),
                    (v = o[f]),
                    (b = n[l]),
                    Array.isArray(b) && ((v = b[1]), (b = n[l] = b[0])),
                    l !== f && ((n[f] = b), delete n[l]),
                    (m = d.cssHooks[f]),
                    m && "expand" in m)
                ) {
                    (b = m.expand(b)), delete n[f];
                    for (l in b) l in n || ((n[l] = b[l]), (o[l] = v));
                } else o[f] = v;
        }
        function ut(n, o, l) {
            var f,
                v,
                b = 0,
                m = ut.prefilters.length,
                A = d.Deferred().always(function () {
                    delete T.elem;
                }),
                T = function () {
                    if (v) return !1;
                    for (
                        var U = Ut || Ra(),
                            R = Math.max(0, I.startTime + I.duration - U),
                            M = R / I.duration || 0,
                            Q = 1 - M,
                            se = 0,
                            z = I.tweens.length;
                        se < z;
                        se++
                    )
                        I.tweens[se].run(Q);
                    return (
                        A.notifyWith(n, [I, Q, R]),
                        Q < 1 && z
                            ? R
                            : (z || A.notifyWith(n, [I, 1, 0]),
                              A.resolveWith(n, [I]),
                              !1)
                    );
                },
                I = A.promise({
                    elem: n,
                    props: d.extend({}, o),
                    opts: d.extend(
                        !0,
                        { specialEasing: {}, easing: d.easing._default },
                        l
                    ),
                    originalProperties: o,
                    originalOptions: l,
                    startTime: Ut || Ra(),
                    duration: l.duration,
                    tweens: [],
                    createTween: function (U, R) {
                        var M = d.Tween(
                            n,
                            I.opts,
                            U,
                            R,
                            I.opts.specialEasing[U] || I.opts.easing
                        );
                        return I.tweens.push(M), M;
                    },
                    stop: function (U) {
                        var R = 0,
                            M = U ? I.tweens.length : 0;
                        if (v) return this;
                        for (v = !0; R < M; R++) I.tweens[R].run(1);
                        return (
                            U
                                ? (A.notifyWith(n, [I, 1, 0]),
                                  A.resolveWith(n, [I, U]))
                                : A.rejectWith(n, [I, U]),
                            this
                        );
                    },
                }),
                H = I.props;
            for (Io(H, I.opts.specialEasing); b < m; b++)
                if (((f = ut.prefilters[b].call(I, n, H, I.opts)), f))
                    return (
                        P(f.stop) &&
                            (d._queueHooks(I.elem, I.opts.queue).stop =
                                f.stop.bind(f)),
                        f
                    );
            return (
                d.map(H, Ha, I),
                P(I.opts.start) && I.opts.start.call(n, I),
                I.progress(I.opts.progress)
                    .done(I.opts.done, I.opts.complete)
                    .fail(I.opts.fail)
                    .always(I.opts.always),
                d.fx.timer(
                    d.extend(T, { elem: n, anim: I, queue: I.opts.queue })
                ),
                I
            );
        }
        (d.Animation = d.extend(ut, {
            tweeners: {
                "*": [
                    function (n, o) {
                        var l = this.createTween(n, o);
                        return ga(l.elem, n, nn.exec(o), l), l;
                    },
                ],
            },
            tweener: function (n, o) {
                P(n) ? ((o = n), (n = ["*"])) : (n = n.match(qe));
                for (var l, f = 0, v = n.length; f < v; f++)
                    (l = n[f]),
                        (ut.tweeners[l] = ut.tweeners[l] || []),
                        ut.tweeners[l].unshift(o);
            },
            prefilters: [Eo],
            prefilter: function (n, o) {
                o ? ut.prefilters.unshift(n) : ut.prefilters.push(n);
            },
        })),
            (d.speed = function (n, o, l) {
                var f =
                    n && typeof n == "object"
                        ? d.extend({}, n)
                        : {
                              complete: l || (!l && o) || (P(n) && n),
                              duration: n,
                              easing: (l && o) || (o && !P(o) && o),
                          };
                return (
                    d.fx.off
                        ? (f.duration = 0)
                        : typeof f.duration != "number" &&
                          (f.duration in d.fx.speeds
                              ? (f.duration = d.fx.speeds[f.duration])
                              : (f.duration = d.fx.speeds._default)),
                    (f.queue == null || f.queue === !0) && (f.queue = "fx"),
                    (f.old = f.complete),
                    (f.complete = function () {
                        P(f.old) && f.old.call(this),
                            f.queue && d.dequeue(this, f.queue);
                    }),
                    f
                );
            }),
            d.fn.extend({
                fadeTo: function (n, o, l, f) {
                    return this.filter(In)
                        .css("opacity", 0)
                        .show()
                        .end()
                        .animate({ opacity: o }, n, l, f);
                },
                animate: function (n, o, l, f) {
                    var v = d.isEmptyObject(n),
                        b = d.speed(o, l, f),
                        m = function () {
                            var A = ut(this, d.extend({}, n), b);
                            (v || te.get(this, "finish")) && A.stop(!0);
                        };
                    return (
                        (m.finish = m),
                        v || b.queue === !1
                            ? this.each(m)
                            : this.queue(b.queue, m)
                    );
                },
                stop: function (n, o, l) {
                    var f = function (v) {
                        var b = v.stop;
                        delete v.stop, b(l);
                    };
                    return (
                        typeof n != "string" &&
                            ((l = o), (o = n), (n = void 0)),
                        o && this.queue(n || "fx", []),
                        this.each(function () {
                            var v = !0,
                                b = n != null && n + "queueHooks",
                                m = d.timers,
                                A = te.get(this);
                            if (b) A[b] && A[b].stop && f(A[b]);
                            else
                                for (b in A)
                                    A[b] && A[b].stop && ko.test(b) && f(A[b]);
                            for (b = m.length; b--; )
                                m[b].elem === this &&
                                    (n == null || m[b].queue === n) &&
                                    (m[b].anim.stop(l),
                                    (v = !1),
                                    m.splice(b, 1));
                            (v || !l) && d.dequeue(this, n);
                        })
                    );
                },
                finish: function (n) {
                    return (
                        n !== !1 && (n = n || "fx"),
                        this.each(function () {
                            var o,
                                l = te.get(this),
                                f = l[n + "queue"],
                                v = l[n + "queueHooks"],
                                b = d.timers,
                                m = f ? f.length : 0;
                            for (
                                l.finish = !0,
                                    d.queue(this, n, []),
                                    v && v.stop && v.stop.call(this, !0),
                                    o = b.length;
                                o--;

                            )
                                b[o].elem === this &&
                                    b[o].queue === n &&
                                    (b[o].anim.stop(!0), b.splice(o, 1));
                            for (o = 0; o < m; o++)
                                f[o] && f[o].finish && f[o].finish.call(this);
                            delete l.finish;
                        })
                    );
                },
            }),
            d.each(["toggle", "show", "hide"], function (n, o) {
                var l = d.fn[o];
                d.fn[o] = function (f, v, b) {
                    return f == null || typeof f == "boolean"
                        ? l.apply(this, arguments)
                        : this.animate(Rn(o, !0), f, v, b);
                };
            }),
            d.each(
                {
                    slideDown: Rn("show"),
                    slideUp: Rn("hide"),
                    slideToggle: Rn("toggle"),
                    fadeIn: { opacity: "show" },
                    fadeOut: { opacity: "hide" },
                    fadeToggle: { opacity: "toggle" },
                },
                function (n, o) {
                    d.fn[n] = function (l, f, v) {
                        return this.animate(o, l, f, v);
                    };
                }
            ),
            (d.timers = []),
            (d.fx.tick = function () {
                var n,
                    o = 0,
                    l = d.timers;
                for (Ut = Date.now(); o < l.length; o++)
                    (n = l[o]), !n() && l[o] === n && l.splice(o--, 1);
                l.length || d.fx.stop(), (Ut = void 0);
            }),
            (d.fx.timer = function (n) {
                d.timers.push(n), d.fx.start();
            }),
            (d.fx.interval = 13),
            (d.fx.start = function () {
                Pn || ((Pn = !0), br());
            }),
            (d.fx.stop = function () {
                Pn = null;
            }),
            (d.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (d.fn.delay = function (n, o) {
                return (
                    (n = (d.fx && d.fx.speeds[n]) || n),
                    (o = o || "fx"),
                    this.queue(o, function (l, f) {
                        var v = t.setTimeout(l, n);
                        f.stop = function () {
                            t.clearTimeout(v);
                        };
                    })
                );
            }),
            (function () {
                var n = O.createElement("input"),
                    o = O.createElement("select"),
                    l = o.appendChild(O.createElement("option"));
                (n.type = "checkbox"),
                    (N.checkOn = n.value !== ""),
                    (N.optSelected = l.selected),
                    (n = O.createElement("input")),
                    (n.value = "t"),
                    (n.type = "radio"),
                    (N.radioValue = n.value === "t");
            })();
        var Oa,
            on = d.expr.attrHandle;
        d.fn.extend({
            attr: function (n, o) {
                return gt(this, d.attr, n, o, arguments.length > 1);
            },
            removeAttr: function (n) {
                return this.each(function () {
                    d.removeAttr(this, n);
                });
            },
        }),
            d.extend({
                attr: function (n, o, l) {
                    var f,
                        v,
                        b = n.nodeType;
                    if (!(b === 3 || b === 8 || b === 2)) {
                        if (typeof n.getAttribute > "u") return d.prop(n, o, l);
                        if (
                            ((b !== 1 || !d.isXMLDoc(n)) &&
                                (v =
                                    d.attrHooks[o.toLowerCase()] ||
                                    (d.expr.match.bool.test(o) ? Oa : void 0)),
                            l !== void 0)
                        ) {
                            if (l === null) {
                                d.removeAttr(n, o);
                                return;
                            }
                            return v &&
                                "set" in v &&
                                (f = v.set(n, l, o)) !== void 0
                                ? f
                                : (n.setAttribute(o, l + ""), l);
                        }
                        return v && "get" in v && (f = v.get(n, o)) !== null
                            ? f
                            : ((f = d.find.attr(n, o)), f ?? void 0);
                    }
                },
                attrHooks: {
                    type: {
                        set: function (n, o) {
                            if (
                                !N.radioValue &&
                                o === "radio" &&
                                Ce(n, "input")
                            ) {
                                var l = n.value;
                                return (
                                    n.setAttribute("type", o),
                                    l && (n.value = l),
                                    o
                                );
                            }
                        },
                    },
                },
                removeAttr: function (n, o) {
                    var l,
                        f = 0,
                        v = o && o.match(qe);
                    if (v && n.nodeType === 1)
                        for (; (l = v[f++]); ) n.removeAttribute(l);
                },
            }),
            (Oa = {
                set: function (n, o, l) {
                    return (
                        o === !1 ? d.removeAttr(n, l) : n.setAttribute(l, l), l
                    );
                },
            }),
            d.each(d.expr.match.bool.source.match(/\w+/g), function (n, o) {
                var l = on[o] || d.find.attr;
                on[o] = function (f, v, b) {
                    var m,
                        A,
                        T = v.toLowerCase();
                    return (
                        b ||
                            ((A = on[T]),
                            (on[T] = m),
                            (m = l(f, v, b) != null ? T : null),
                            (on[T] = A)),
                        m
                    );
                };
            });
        var Fo = /^(?:input|select|textarea|button)$/i,
            jo = /^(?:a|area)$/i;
        d.fn.extend({
            prop: function (n, o) {
                return gt(this, d.prop, n, o, arguments.length > 1);
            },
            removeProp: function (n) {
                return this.each(function () {
                    delete this[d.propFix[n] || n];
                });
            },
        }),
            d.extend({
                prop: function (n, o, l) {
                    var f,
                        v,
                        b = n.nodeType;
                    if (!(b === 3 || b === 8 || b === 2))
                        return (
                            (b !== 1 || !d.isXMLDoc(n)) &&
                                ((o = d.propFix[o] || o), (v = d.propHooks[o])),
                            l !== void 0
                                ? v &&
                                  "set" in v &&
                                  (f = v.set(n, l, o)) !== void 0
                                    ? f
                                    : (n[o] = l)
                                : v && "get" in v && (f = v.get(n, o)) !== null
                                ? f
                                : n[o]
                        );
                },
                propHooks: {
                    tabIndex: {
                        get: function (n) {
                            var o = d.find.attr(n, "tabindex");
                            return o
                                ? parseInt(o, 10)
                                : Fo.test(n.nodeName) ||
                                  (jo.test(n.nodeName) && n.href)
                                ? 0
                                : -1;
                        },
                    },
                },
                propFix: { for: "htmlFor", class: "className" },
            }),
            N.optSelected ||
                (d.propHooks.selected = {
                    get: function (n) {
                        var o = n.parentNode;
                        return (
                            o && o.parentNode && o.parentNode.selectedIndex,
                            null
                        );
                    },
                    set: function (n) {
                        var o = n.parentNode;
                        o &&
                            (o.selectedIndex,
                            o.parentNode && o.parentNode.selectedIndex);
                    },
                }),
            d.each(
                [
                    "tabIndex",
                    "readOnly",
                    "maxLength",
                    "cellSpacing",
                    "cellPadding",
                    "rowSpan",
                    "colSpan",
                    "useMap",
                    "frameBorder",
                    "contentEditable",
                ],
                function () {
                    d.propFix[this.toLowerCase()] = this;
                }
            );
        function Et(n) {
            var o = n.match(qe) || [];
            return o.join(" ");
        }
        function It(n) {
            return (n.getAttribute && n.getAttribute("class")) || "";
        }
        function mr(n) {
            return Array.isArray(n)
                ? n
                : typeof n == "string"
                ? n.match(qe) || []
                : [];
        }
        d.fn.extend({
            addClass: function (n) {
                var o, l, f, v, b, m;
                return P(n)
                    ? this.each(function (A) {
                          d(this).addClass(n.call(this, A, It(this)));
                      })
                    : ((o = mr(n)),
                      o.length
                          ? this.each(function () {
                                if (
                                    ((f = It(this)),
                                    (l =
                                        this.nodeType === 1 &&
                                        " " + Et(f) + " "),
                                    l)
                                ) {
                                    for (b = 0; b < o.length; b++)
                                        (v = o[b]),
                                            l.indexOf(" " + v + " ") < 0 &&
                                                (l += v + " ");
                                    (m = Et(l)),
                                        f !== m &&
                                            this.setAttribute("class", m);
                                }
                            })
                          : this);
            },
            removeClass: function (n) {
                var o, l, f, v, b, m;
                return P(n)
                    ? this.each(function (A) {
                          d(this).removeClass(n.call(this, A, It(this)));
                      })
                    : arguments.length
                    ? ((o = mr(n)),
                      o.length
                          ? this.each(function () {
                                if (
                                    ((f = It(this)),
                                    (l =
                                        this.nodeType === 1 &&
                                        " " + Et(f) + " "),
                                    l)
                                ) {
                                    for (b = 0; b < o.length; b++)
                                        for (
                                            v = o[b];
                                            l.indexOf(" " + v + " ") > -1;

                                        )
                                            l = l.replace(" " + v + " ", " ");
                                    (m = Et(l)),
                                        f !== m &&
                                            this.setAttribute("class", m);
                                }
                            })
                          : this)
                    : this.attr("class", "");
            },
            toggleClass: function (n, o) {
                var l,
                    f,
                    v,
                    b,
                    m = typeof n,
                    A = m === "string" || Array.isArray(n);
                return P(n)
                    ? this.each(function (T) {
                          d(this).toggleClass(n.call(this, T, It(this), o), o);
                      })
                    : typeof o == "boolean" && A
                    ? o
                        ? this.addClass(n)
                        : this.removeClass(n)
                    : ((l = mr(n)),
                      this.each(function () {
                          if (A)
                              for (b = d(this), v = 0; v < l.length; v++)
                                  (f = l[v]),
                                      b.hasClass(f)
                                          ? b.removeClass(f)
                                          : b.addClass(f);
                          else
                              (n === void 0 || m === "boolean") &&
                                  ((f = It(this)),
                                  f && te.set(this, "__className__", f),
                                  this.setAttribute &&
                                      this.setAttribute(
                                          "class",
                                          f || n === !1
                                              ? ""
                                              : te.get(this, "__className__") ||
                                                    ""
                                      ));
                      }));
            },
            hasClass: function (n) {
                var o,
                    l,
                    f = 0;
                for (o = " " + n + " "; (l = this[f++]); )
                    if (
                        l.nodeType === 1 &&
                        (" " + Et(It(l)) + " ").indexOf(o) > -1
                    )
                        return !0;
                return !1;
            },
        });
        var Po = /\r/g;
        d.fn.extend({
            val: function (n) {
                var o,
                    l,
                    f,
                    v = this[0];
                return arguments.length
                    ? ((f = P(n)),
                      this.each(function (b) {
                          var m;
                          this.nodeType === 1 &&
                              (f
                                  ? (m = n.call(this, b, d(this).val()))
                                  : (m = n),
                              m == null
                                  ? (m = "")
                                  : typeof m == "number"
                                  ? (m += "")
                                  : Array.isArray(m) &&
                                    (m = d.map(m, function (A) {
                                        return A == null ? "" : A + "";
                                    })),
                              (o =
                                  d.valHooks[this.type] ||
                                  d.valHooks[this.nodeName.toLowerCase()]),
                              (!o ||
                                  !("set" in o) ||
                                  o.set(this, m, "value") === void 0) &&
                                  (this.value = m));
                      }))
                    : v
                    ? ((o =
                          d.valHooks[v.type] ||
                          d.valHooks[v.nodeName.toLowerCase()]),
                      o && "get" in o && (l = o.get(v, "value")) !== void 0
                          ? l
                          : ((l = v.value),
                            typeof l == "string" ? l.replace(Po, "") : l ?? ""))
                    : void 0;
            },
        }),
            d.extend({
                valHooks: {
                    option: {
                        get: function (n) {
                            var o = d.find.attr(n, "value");
                            return o ?? Et(d.text(n));
                        },
                    },
                    select: {
                        get: function (n) {
                            var o,
                                l,
                                f,
                                v = n.options,
                                b = n.selectedIndex,
                                m = n.type === "select-one",
                                A = m ? null : [],
                                T = m ? b + 1 : v.length;
                            for (b < 0 ? (f = T) : (f = m ? b : 0); f < T; f++)
                                if (
                                    ((l = v[f]),
                                    (l.selected || f === b) &&
                                        !l.disabled &&
                                        (!l.parentNode.disabled ||
                                            !Ce(l.parentNode, "optgroup")))
                                ) {
                                    if (((o = d(l).val()), m)) return o;
                                    A.push(o);
                                }
                            return A;
                        },
                        set: function (n, o) {
                            for (
                                var l,
                                    f,
                                    v = n.options,
                                    b = d.makeArray(o),
                                    m = v.length;
                                m--;

                            )
                                (f = v[m]),
                                    (f.selected =
                                        d.inArray(d.valHooks.option.get(f), b) >
                                        -1) && (l = !0);
                            return l || (n.selectedIndex = -1), b;
                        },
                    },
                },
            }),
            d.each(["radio", "checkbox"], function () {
                (d.valHooks[this] = {
                    set: function (n, o) {
                        if (Array.isArray(o))
                            return (n.checked = d.inArray(d(n).val(), o) > -1);
                    },
                }),
                    N.checkOn ||
                        (d.valHooks[this].get = function (n) {
                            return n.getAttribute("value") === null
                                ? "on"
                                : n.value;
                        });
            }),
            (N.focusin = "onfocusin" in t);
        var Ma = /^(?:focusinfocus|focusoutblur)$/,
            qa = function (n) {
                n.stopPropagation();
            };
        d.extend(d.event, {
            trigger: function (n, o, l, f) {
                var v,
                    b,
                    m,
                    A,
                    T,
                    I,
                    H,
                    U,
                    R = [l || O],
                    M = x.call(n, "type") ? n.type : n,
                    Q = x.call(n, "namespace") ? n.namespace.split(".") : [];
                if (
                    ((b = U = m = l = l || O),
                    !(l.nodeType === 3 || l.nodeType === 8) &&
                        !Ma.test(M + d.event.triggered) &&
                        (M.indexOf(".") > -1 &&
                            ((Q = M.split(".")), (M = Q.shift()), Q.sort()),
                        (T = M.indexOf(":") < 0 && "on" + M),
                        (n = n[d.expando]
                            ? n
                            : new d.Event(M, typeof n == "object" && n)),
                        (n.isTrigger = f ? 2 : 3),
                        (n.namespace = Q.join(".")),
                        (n.rnamespace = n.namespace
                            ? new RegExp(
                                  "(^|\\.)" +
                                      Q.join("\\.(?:.*\\.|)") +
                                      "(\\.|$)"
                              )
                            : null),
                        (n.result = void 0),
                        n.target || (n.target = l),
                        (o = o == null ? [n] : d.makeArray(o, [n])),
                        (H = d.event.special[M] || {}),
                        !(!f && H.trigger && H.trigger.apply(l, o) === !1)))
                ) {
                    if (!f && !H.noBubble && !W(l)) {
                        for (
                            A = H.delegateType || M,
                                Ma.test(A + M) || (b = b.parentNode);
                            b;
                            b = b.parentNode
                        )
                            R.push(b), (m = b);
                        m === (l.ownerDocument || O) &&
                            R.push(m.defaultView || m.parentWindow || t);
                    }
                    for (v = 0; (b = R[v++]) && !n.isPropagationStopped(); )
                        (U = b),
                            (n.type = v > 1 ? A : H.bindType || M),
                            (I =
                                (te.get(b, "events") || Object.create(null))[
                                    n.type
                                ] && te.get(b, "handle")),
                            I && I.apply(b, o),
                            (I = T && b[T]),
                            I &&
                                I.apply &&
                                en(b) &&
                                ((n.result = I.apply(b, o)),
                                n.result === !1 && n.preventDefault());
                    return (
                        (n.type = M),
                        !f &&
                            !n.isDefaultPrevented() &&
                            (!H._default ||
                                H._default.apply(R.pop(), o) === !1) &&
                            en(l) &&
                            T &&
                            P(l[M]) &&
                            !W(l) &&
                            ((m = l[T]),
                            m && (l[T] = null),
                            (d.event.triggered = M),
                            n.isPropagationStopped() &&
                                U.addEventListener(M, qa),
                            l[M](),
                            n.isPropagationStopped() &&
                                U.removeEventListener(M, qa),
                            (d.event.triggered = void 0),
                            m && (l[T] = m)),
                        n.result
                    );
                }
            },
            simulate: function (n, o, l) {
                var f = d.extend(new d.Event(), l, {
                    type: n,
                    isSimulated: !0,
                });
                d.event.trigger(f, null, o);
            },
        }),
            d.fn.extend({
                trigger: function (n, o) {
                    return this.each(function () {
                        d.event.trigger(n, o, this);
                    });
                },
                triggerHandler: function (n, o) {
                    var l = this[0];
                    if (l) return d.event.trigger(n, o, l, !0);
                },
            }),
            N.focusin ||
                d.each({ focus: "focusin", blur: "focusout" }, function (n, o) {
                    var l = function (f) {
                        d.event.simulate(o, f.target, d.event.fix(f));
                    };
                    d.event.special[o] = {
                        setup: function () {
                            var f = this.ownerDocument || this.document || this,
                                v = te.access(f, o);
                            v || f.addEventListener(n, l, !0),
                                te.access(f, o, (v || 0) + 1);
                        },
                        teardown: function () {
                            var f = this.ownerDocument || this.document || this,
                                v = te.access(f, o) - 1;
                            v
                                ? te.access(f, o, v)
                                : (f.removeEventListener(n, l, !0),
                                  te.remove(f, o));
                        },
                    };
                });
        var ln = t.location,
            Ba = { guid: Date.now() },
            gr = /\?/;
        d.parseXML = function (n) {
            var o, l;
            if (!n || typeof n != "string") return null;
            try {
                o = new t.DOMParser().parseFromString(n, "text/xml");
            } catch {}
            return (
                (l = o && o.getElementsByTagName("parsererror")[0]),
                (!o || l) &&
                    d.error(
                        "Invalid XML: " +
                            (l
                                ? d.map(l.childNodes, function (f) {
                                      return f.textContent;
                                  }).join(`
`)
                                : n)
                    ),
                o
            );
        };
        var Ro = /\[\]$/,
            Wa = /\r?\n/g,
            Ho = /^(?:submit|button|image|reset|file)$/i,
            Oo = /^(?:input|select|textarea|keygen)/i;
        function yr(n, o, l, f) {
            var v;
            if (Array.isArray(o))
                d.each(o, function (b, m) {
                    l || Ro.test(n)
                        ? f(n, m)
                        : yr(
                              n +
                                  "[" +
                                  (typeof m == "object" && m != null ? b : "") +
                                  "]",
                              m,
                              l,
                              f
                          );
                });
            else if (!l && K(o) === "object")
                for (v in o) yr(n + "[" + v + "]", o[v], l, f);
            else f(n, o);
        }
        (d.param = function (n, o) {
            var l,
                f = [],
                v = function (b, m) {
                    var A = P(m) ? m() : m;
                    f[f.length] =
                        encodeURIComponent(b) +
                        "=" +
                        encodeURIComponent(A ?? "");
                };
            if (n == null) return "";
            if (Array.isArray(n) || (n.jquery && !d.isPlainObject(n)))
                d.each(n, function () {
                    v(this.name, this.value);
                });
            else for (l in n) yr(l, n[l], o, v);
            return f.join("&");
        }),
            d.fn.extend({
                serialize: function () {
                    return d.param(this.serializeArray());
                },
                serializeArray: function () {
                    return this.map(function () {
                        var n = d.prop(this, "elements");
                        return n ? d.makeArray(n) : this;
                    })
                        .filter(function () {
                            var n = this.type;
                            return (
                                this.name &&
                                !d(this).is(":disabled") &&
                                Oo.test(this.nodeName) &&
                                !Ho.test(n) &&
                                (this.checked || !rn.test(n))
                            );
                        })
                        .map(function (n, o) {
                            var l = d(this).val();
                            return l == null
                                ? null
                                : Array.isArray(l)
                                ? d.map(l, function (f) {
                                      return {
                                          name: o.name,
                                          value: f.replace(
                                              Wa,
                                              `\r
`
                                          ),
                                      };
                                  })
                                : {
                                      name: o.name,
                                      value: l.replace(
                                          Wa,
                                          `\r
`
                                      ),
                                  };
                        })
                        .get();
                },
            });
        var Mo = /%20/g,
            qo = /#.*$/,
            Bo = /([?&])_=[^&]*/,
            Wo = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            $o = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Uo = /^(?:GET|HEAD)$/,
            Vo = /^\/\//,
            $a = {},
            _r = {},
            Ua = "*/".concat("*"),
            xr = O.createElement("a");
        xr.href = ln.href;
        function Va(n) {
            return function (o, l) {
                typeof o != "string" && ((l = o), (o = "*"));
                var f,
                    v = 0,
                    b = o.toLowerCase().match(qe) || [];
                if (P(l))
                    for (; (f = b[v++]); )
                        f[0] === "+"
                            ? ((f = f.slice(1) || "*"),
                              (n[f] = n[f] || []).unshift(l))
                            : (n[f] = n[f] || []).push(l);
            };
        }
        function Xa(n, o, l, f) {
            var v = {},
                b = n === _r;
            function m(A) {
                var T;
                return (
                    (v[A] = !0),
                    d.each(n[A] || [], function (I, H) {
                        var U = H(o, l, f);
                        if (typeof U == "string" && !b && !v[U])
                            return o.dataTypes.unshift(U), m(U), !1;
                        if (b) return !(T = U);
                    }),
                    T
                );
            }
            return m(o.dataTypes[0]) || (!v["*"] && m("*"));
        }
        function wr(n, o) {
            var l,
                f,
                v = d.ajaxSettings.flatOptions || {};
            for (l in o)
                o[l] !== void 0 && ((v[l] ? n : f || (f = {}))[l] = o[l]);
            return f && d.extend(!0, n, f), n;
        }
        function Xo(n, o, l) {
            for (
                var f, v, b, m, A = n.contents, T = n.dataTypes;
                T[0] === "*";

            )
                T.shift(),
                    f === void 0 &&
                        (f = n.mimeType || o.getResponseHeader("Content-Type"));
            if (f) {
                for (v in A)
                    if (A[v] && A[v].test(f)) {
                        T.unshift(v);
                        break;
                    }
            }
            if (T[0] in l) b = T[0];
            else {
                for (v in l) {
                    if (!T[0] || n.converters[v + " " + T[0]]) {
                        b = v;
                        break;
                    }
                    m || (m = v);
                }
                b = b || m;
            }
            if (b) return b !== T[0] && T.unshift(b), l[b];
        }
        function Go(n, o, l, f) {
            var v,
                b,
                m,
                A,
                T,
                I = {},
                H = n.dataTypes.slice();
            if (H[1])
                for (m in n.converters) I[m.toLowerCase()] = n.converters[m];
            for (b = H.shift(); b; )
                if (
                    (n.responseFields[b] && (l[n.responseFields[b]] = o),
                    !T &&
                        f &&
                        n.dataFilter &&
                        (o = n.dataFilter(o, n.dataType)),
                    (T = b),
                    (b = H.shift()),
                    b)
                ) {
                    if (b === "*") b = T;
                    else if (T !== "*" && T !== b) {
                        if (((m = I[T + " " + b] || I["* " + b]), !m)) {
                            for (v in I)
                                if (
                                    ((A = v.split(" ")),
                                    A[1] === b &&
                                        ((m =
                                            I[T + " " + A[0]] ||
                                            I["* " + A[0]]),
                                        m))
                                ) {
                                    m === !0
                                        ? (m = I[v])
                                        : I[v] !== !0 &&
                                          ((b = A[0]), H.unshift(A[1]));
                                    break;
                                }
                        }
                        if (m !== !0)
                            if (m && n.throws) o = m(o);
                            else
                                try {
                                    o = m(o);
                                } catch (U) {
                                    return {
                                        state: "parsererror",
                                        error: m
                                            ? U
                                            : "No conversion from " +
                                              T +
                                              " to " +
                                              b,
                                    };
                                }
                    }
                }
            return { state: "success", data: o };
        }
        d.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ln.href,
                type: "GET",
                isLocal: $o.test(ln.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ua,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": d.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (n, o) {
                return o ? wr(wr(n, d.ajaxSettings), o) : wr(d.ajaxSettings, n);
            },
            ajaxPrefilter: Va($a),
            ajaxTransport: Va(_r),
            ajax: function (n, o) {
                typeof n == "object" && ((o = n), (n = void 0)), (o = o || {});
                var l,
                    f,
                    v,
                    b,
                    m,
                    A,
                    T,
                    I,
                    H,
                    U,
                    R = d.ajaxSetup({}, o),
                    M = R.context || R,
                    Q = R.context && (M.nodeType || M.jquery) ? d(M) : d.event,
                    se = d.Deferred(),
                    z = d.Callbacks("once memory"),
                    Ie = R.statusCode || {},
                    Le = {},
                    Ke = {},
                    ye = "canceled",
                    le = {
                        readyState: 0,
                        getResponseHeader: function (he) {
                            var Se;
                            if (T) {
                                if (!b)
                                    for (b = {}; (Se = Wo.exec(v)); )
                                        b[Se[1].toLowerCase() + " "] = (
                                            b[Se[1].toLowerCase() + " "] || []
                                        ).concat(Se[2]);
                                Se = b[he.toLowerCase() + " "];
                            }
                            return Se == null ? null : Se.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return T ? v : null;
                        },
                        setRequestHeader: function (he, Se) {
                            return (
                                T == null &&
                                    ((he = Ke[he.toLowerCase()] =
                                        Ke[he.toLowerCase()] || he),
                                    (Le[he] = Se)),
                                this
                            );
                        },
                        overrideMimeType: function (he) {
                            return T == null && (R.mimeType = he), this;
                        },
                        statusCode: function (he) {
                            var Se;
                            if (he)
                                if (T) le.always(he[le.status]);
                                else for (Se in he) Ie[Se] = [Ie[Se], he[Se]];
                            return this;
                        },
                        abort: function (he) {
                            var Se = he || ye;
                            return l && l.abort(Se), Ue(0, Se), this;
                        },
                    };
                if (
                    (se.promise(le),
                    (R.url = ((n || R.url || ln.href) + "").replace(
                        Vo,
                        ln.protocol + "//"
                    )),
                    (R.type = o.method || o.type || R.method || R.type),
                    (R.dataTypes = (R.dataType || "*")
                        .toLowerCase()
                        .match(qe) || [""]),
                    R.crossDomain == null)
                ) {
                    A = O.createElement("a");
                    try {
                        (A.href = R.url),
                            (A.href = A.href),
                            (R.crossDomain =
                                xr.protocol + "//" + xr.host !=
                                A.protocol + "//" + A.host);
                    } catch {
                        R.crossDomain = !0;
                    }
                }
                if (
                    (R.data &&
                        R.processData &&
                        typeof R.data != "string" &&
                        (R.data = d.param(R.data, R.traditional)),
                    Xa($a, R, o, le),
                    T)
                )
                    return le;
                (I = d.event && R.global),
                    I && d.active++ === 0 && d.event.trigger("ajaxStart"),
                    (R.type = R.type.toUpperCase()),
                    (R.hasContent = !Uo.test(R.type)),
                    (f = R.url.replace(qo, "")),
                    R.hasContent
                        ? R.data &&
                          R.processData &&
                          (R.contentType || "").indexOf(
                              "application/x-www-form-urlencoded"
                          ) === 0 &&
                          (R.data = R.data.replace(Mo, "+"))
                        : ((U = R.url.slice(f.length)),
                          R.data &&
                              (R.processData || typeof R.data == "string") &&
                              ((f += (gr.test(f) ? "&" : "?") + R.data),
                              delete R.data),
                          R.cache === !1 &&
                              ((f = f.replace(Bo, "$1")),
                              (U =
                                  (gr.test(f) ? "&" : "?") +
                                  "_=" +
                                  Ba.guid++ +
                                  U)),
                          (R.url = f + U)),
                    R.ifModified &&
                        (d.lastModified[f] &&
                            le.setRequestHeader(
                                "If-Modified-Since",
                                d.lastModified[f]
                            ),
                        d.etag[f] &&
                            le.setRequestHeader("If-None-Match", d.etag[f])),
                    ((R.data && R.hasContent && R.contentType !== !1) ||
                        o.contentType) &&
                        le.setRequestHeader("Content-Type", R.contentType),
                    le.setRequestHeader(
                        "Accept",
                        R.dataTypes[0] && R.accepts[R.dataTypes[0]]
                            ? R.accepts[R.dataTypes[0]] +
                                  (R.dataTypes[0] !== "*"
                                      ? ", " + Ua + "; q=0.01"
                                      : "")
                            : R.accepts["*"]
                    );
                for (H in R.headers) le.setRequestHeader(H, R.headers[H]);
                if (R.beforeSend && (R.beforeSend.call(M, le, R) === !1 || T))
                    return le.abort();
                if (
                    ((ye = "abort"),
                    z.add(R.complete),
                    le.done(R.success),
                    le.fail(R.error),
                    (l = Xa(_r, R, o, le)),
                    !l)
                )
                    Ue(-1, "No Transport");
                else {
                    if (
                        ((le.readyState = 1),
                        I && Q.trigger("ajaxSend", [le, R]),
                        T)
                    )
                        return le;
                    R.async &&
                        R.timeout > 0 &&
                        (m = t.setTimeout(function () {
                            le.abort("timeout");
                        }, R.timeout));
                    try {
                        (T = !1), l.send(Le, Ue);
                    } catch (he) {
                        if (T) throw he;
                        Ue(-1, he);
                    }
                }
                function Ue(he, Se, un, Hn) {
                    var Ye,
                        Ft,
                        jt,
                        Ve,
                        Dt,
                        at = Se;
                    T ||
                        ((T = !0),
                        m && t.clearTimeout(m),
                        (l = void 0),
                        (v = Hn || ""),
                        (le.readyState = he > 0 ? 4 : 0),
                        (Ye = (he >= 200 && he < 300) || he === 304),
                        un && (Ve = Xo(R, le, un)),
                        !Ye &&
                            d.inArray("script", R.dataTypes) > -1 &&
                            d.inArray("json", R.dataTypes) < 0 &&
                            (R.converters["text script"] = function () {}),
                        (Ve = Go(R, Ve, le, Ye)),
                        Ye
                            ? (R.ifModified &&
                                  ((Dt = le.getResponseHeader("Last-Modified")),
                                  Dt && (d.lastModified[f] = Dt),
                                  (Dt = le.getResponseHeader("etag")),
                                  Dt && (d.etag[f] = Dt)),
                              he === 204 || R.type === "HEAD"
                                  ? (at = "nocontent")
                                  : he === 304
                                  ? (at = "notmodified")
                                  : ((at = Ve.state),
                                    (Ft = Ve.data),
                                    (jt = Ve.error),
                                    (Ye = !jt)))
                            : ((jt = at),
                              (he || !at) &&
                                  ((at = "error"), he < 0 && (he = 0))),
                        (le.status = he),
                        (le.statusText = (Se || at) + ""),
                        Ye
                            ? se.resolveWith(M, [Ft, at, le])
                            : se.rejectWith(M, [le, at, jt]),
                        le.statusCode(Ie),
                        (Ie = void 0),
                        I &&
                            Q.trigger(Ye ? "ajaxSuccess" : "ajaxError", [
                                le,
                                R,
                                Ye ? Ft : jt,
                            ]),
                        z.fireWith(M, [le, at]),
                        I &&
                            (Q.trigger("ajaxComplete", [le, R]),
                            --d.active || d.event.trigger("ajaxStop")));
                }
                return le;
            },
            getJSON: function (n, o, l) {
                return d.get(n, o, l, "json");
            },
            getScript: function (n, o) {
                return d.get(n, void 0, o, "script");
            },
        }),
            d.each(["get", "post"], function (n, o) {
                d[o] = function (l, f, v, b) {
                    return (
                        P(f) && ((b = b || v), (v = f), (f = void 0)),
                        d.ajax(
                            d.extend(
                                {
                                    url: l,
                                    type: o,
                                    dataType: b,
                                    data: f,
                                    success: v,
                                },
                                d.isPlainObject(l) && l
                            )
                        )
                    );
                };
            }),
            d.ajaxPrefilter(function (n) {
                var o;
                for (o in n.headers)
                    o.toLowerCase() === "content-type" &&
                        (n.contentType = n.headers[o] || "");
            }),
            (d._evalUrl = function (n, o, l) {
                return d.ajax({
                    url: n,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: { "text script": function () {} },
                    dataFilter: function (f) {
                        d.globalEval(f, o, l);
                    },
                });
            }),
            d.fn.extend({
                wrapAll: function (n) {
                    var o;
                    return (
                        this[0] &&
                            (P(n) && (n = n.call(this[0])),
                            (o = d(n, this[0].ownerDocument).eq(0).clone(!0)),
                            this[0].parentNode && o.insertBefore(this[0]),
                            o
                                .map(function () {
                                    for (var l = this; l.firstElementChild; )
                                        l = l.firstElementChild;
                                    return l;
                                })
                                .append(this)),
                        this
                    );
                },
                wrapInner: function (n) {
                    return P(n)
                        ? this.each(function (o) {
                              d(this).wrapInner(n.call(this, o));
                          })
                        : this.each(function () {
                              var o = d(this),
                                  l = o.contents();
                              l.length ? l.wrapAll(n) : o.append(n);
                          });
                },
                wrap: function (n) {
                    var o = P(n);
                    return this.each(function (l) {
                        d(this).wrapAll(o ? n.call(this, l) : n);
                    });
                },
                unwrap: function (n) {
                    return (
                        this.parent(n)
                            .not("body")
                            .each(function () {
                                d(this).replaceWith(this.childNodes);
                            }),
                        this
                    );
                },
            }),
            (d.expr.pseudos.hidden = function (n) {
                return !d.expr.pseudos.visible(n);
            }),
            (d.expr.pseudos.visible = function (n) {
                return !!(
                    n.offsetWidth ||
                    n.offsetHeight ||
                    n.getClientRects().length
                );
            }),
            (d.ajaxSettings.xhr = function () {
                try {
                    return new t.XMLHttpRequest();
                } catch {}
            });
        var Jo = { 0: 200, 1223: 204 },
            sn = d.ajaxSettings.xhr();
        (N.cors = !!sn && "withCredentials" in sn),
            (N.ajax = sn = !!sn),
            d.ajaxTransport(function (n) {
                var o, l;
                if (N.cors || (sn && !n.crossDomain))
                    return {
                        send: function (f, v) {
                            var b,
                                m = n.xhr();
                            if (
                                (m.open(
                                    n.type,
                                    n.url,
                                    n.async,
                                    n.username,
                                    n.password
                                ),
                                n.xhrFields)
                            )
                                for (b in n.xhrFields) m[b] = n.xhrFields[b];
                            n.mimeType &&
                                m.overrideMimeType &&
                                m.overrideMimeType(n.mimeType),
                                !n.crossDomain &&
                                    !f["X-Requested-With"] &&
                                    (f["X-Requested-With"] = "XMLHttpRequest");
                            for (b in f) m.setRequestHeader(b, f[b]);
                            (o = function (A) {
                                return function () {
                                    o &&
                                        ((o =
                                            l =
                                            m.onload =
                                            m.onerror =
                                            m.onabort =
                                            m.ontimeout =
                                            m.onreadystatechange =
                                                null),
                                        A === "abort"
                                            ? m.abort()
                                            : A === "error"
                                            ? typeof m.status != "number"
                                                ? v(0, "error")
                                                : v(m.status, m.statusText)
                                            : v(
                                                  Jo[m.status] || m.status,
                                                  m.statusText,
                                                  (m.responseType || "text") !==
                                                      "text" ||
                                                      typeof m.responseText !=
                                                          "string"
                                                      ? { binary: m.response }
                                                      : {
                                                            text: m.responseText,
                                                        },
                                                  m.getAllResponseHeaders()
                                              ));
                                };
                            }),
                                (m.onload = o()),
                                (l = m.onerror = m.ontimeout = o("error")),
                                m.onabort !== void 0
                                    ? (m.onabort = l)
                                    : (m.onreadystatechange = function () {
                                          m.readyState === 4 &&
                                              t.setTimeout(function () {
                                                  o && l();
                                              });
                                      }),
                                (o = o("abort"));
                            try {
                                m.send((n.hasContent && n.data) || null);
                            } catch (A) {
                                if (o) throw A;
                            }
                        },
                        abort: function () {
                            o && o();
                        },
                    };
            }),
            d.ajaxPrefilter(function (n) {
                n.crossDomain && (n.contents.script = !1);
            }),
            d.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                    "text script": function (n) {
                        return d.globalEval(n), n;
                    },
                },
            }),
            d.ajaxPrefilter("script", function (n) {
                n.cache === void 0 && (n.cache = !1),
                    n.crossDomain && (n.type = "GET");
            }),
            d.ajaxTransport("script", function (n) {
                if (n.crossDomain || n.scriptAttrs) {
                    var o, l;
                    return {
                        send: function (f, v) {
                            (o = d("<script>")
                                .attr(n.scriptAttrs || {})
                                .prop({ charset: n.scriptCharset, src: n.url })
                                .on(
                                    "load error",
                                    (l = function (b) {
                                        o.remove(),
                                            (l = null),
                                            b &&
                                                v(
                                                    b.type === "error"
                                                        ? 404
                                                        : 200,
                                                    b.type
                                                );
                                    })
                                )),
                                O.head.appendChild(o[0]);
                        },
                        abort: function () {
                            l && l();
                        },
                    };
                }
            });
        var Ga = [],
            Cr = /(=)\?(?=&|$)|\?\?/;
        d.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var n = Ga.pop() || d.expando + "_" + Ba.guid++;
                return (this[n] = !0), n;
            },
        }),
            d.ajaxPrefilter("json jsonp", function (n, o, l) {
                var f,
                    v,
                    b,
                    m =
                        n.jsonp !== !1 &&
                        (Cr.test(n.url)
                            ? "url"
                            : typeof n.data == "string" &&
                              (n.contentType || "").indexOf(
                                  "application/x-www-form-urlencoded"
                              ) === 0 &&
                              Cr.test(n.data) &&
                              "data");
                if (m || n.dataTypes[0] === "jsonp")
                    return (
                        (f = n.jsonpCallback =
                            P(n.jsonpCallback)
                                ? n.jsonpCallback()
                                : n.jsonpCallback),
                        m
                            ? (n[m] = n[m].replace(Cr, "$1" + f))
                            : n.jsonp !== !1 &&
                              (n.url +=
                                  (gr.test(n.url) ? "&" : "?") +
                                  n.jsonp +
                                  "=" +
                                  f),
                        (n.converters["script json"] = function () {
                            return b || d.error(f + " was not called"), b[0];
                        }),
                        (n.dataTypes[0] = "json"),
                        (v = t[f]),
                        (t[f] = function () {
                            b = arguments;
                        }),
                        l.always(function () {
                            v === void 0 ? d(t).removeProp(f) : (t[f] = v),
                                n[f] &&
                                    ((n.jsonpCallback = o.jsonpCallback),
                                    Ga.push(f)),
                                b && P(v) && v(b[0]),
                                (b = v = void 0);
                        }),
                        "script"
                    );
            }),
            (N.createHTMLDocument = (function () {
                var n = O.implementation.createHTMLDocument("").body;
                return (
                    (n.innerHTML = "<form></form><form></form>"),
                    n.childNodes.length === 2
                );
            })()),
            (d.parseHTML = function (n, o, l) {
                if (typeof n != "string") return [];
                typeof o == "boolean" && ((l = o), (o = !1));
                var f, v, b;
                return (
                    o ||
                        (N.createHTMLDocument
                            ? ((o = O.implementation.createHTMLDocument("")),
                              (f = o.createElement("base")),
                              (f.href = O.location.href),
                              o.head.appendChild(f))
                            : (o = O)),
                    (v = mt.exec(n)),
                    (b = !l && []),
                    v
                        ? [o.createElement(v[1])]
                        : ((v = wa([n], o, b)),
                          b && b.length && d(b).remove(),
                          d.merge([], v.childNodes))
                );
            }),
            (d.fn.load = function (n, o, l) {
                var f,
                    v,
                    b,
                    m = this,
                    A = n.indexOf(" ");
                return (
                    A > -1 && ((f = Et(n.slice(A))), (n = n.slice(0, A))),
                    P(o)
                        ? ((l = o), (o = void 0))
                        : o && typeof o == "object" && (v = "POST"),
                    m.length > 0 &&
                        d
                            .ajax({
                                url: n,
                                type: v || "GET",
                                dataType: "html",
                                data: o,
                            })
                            .done(function (T) {
                                (b = arguments),
                                    m.html(
                                        f
                                            ? d("<div>")
                                                  .append(d.parseHTML(T))
                                                  .find(f)
                                            : T
                                    );
                            })
                            .always(
                                l &&
                                    function (T, I) {
                                        m.each(function () {
                                            l.apply(
                                                this,
                                                b || [T.responseText, I, T]
                                            );
                                        });
                                    }
                            ),
                    this
                );
            }),
            (d.expr.pseudos.animated = function (n) {
                return d.grep(d.timers, function (o) {
                    return n === o.elem;
                }).length;
            }),
            (d.offset = {
                setOffset: function (n, o, l) {
                    var f,
                        v,
                        b,
                        m,
                        A,
                        T,
                        I,
                        H = d.css(n, "position"),
                        U = d(n),
                        R = {};
                    H === "static" && (n.style.position = "relative"),
                        (A = U.offset()),
                        (b = d.css(n, "top")),
                        (T = d.css(n, "left")),
                        (I =
                            (H === "absolute" || H === "fixed") &&
                            (b + T).indexOf("auto") > -1),
                        I
                            ? ((f = U.position()), (m = f.top), (v = f.left))
                            : ((m = parseFloat(b) || 0),
                              (v = parseFloat(T) || 0)),
                        P(o) && (o = o.call(n, l, d.extend({}, A))),
                        o.top != null && (R.top = o.top - A.top + m),
                        o.left != null && (R.left = o.left - A.left + v),
                        "using" in o ? o.using.call(n, R) : U.css(R);
                },
            }),
            d.fn.extend({
                offset: function (n) {
                    if (arguments.length)
                        return n === void 0
                            ? this
                            : this.each(function (v) {
                                  d.offset.setOffset(this, n, v);
                              });
                    var o,
                        l,
                        f = this[0];
                    if (f)
                        return f.getClientRects().length
                            ? ((o = f.getBoundingClientRect()),
                              (l = f.ownerDocument.defaultView),
                              {
                                  top: o.top + l.pageYOffset,
                                  left: o.left + l.pageXOffset,
                              })
                            : { top: 0, left: 0 };
                },
                position: function () {
                    if (this[0]) {
                        var n,
                            o,
                            l,
                            f = this[0],
                            v = { top: 0, left: 0 };
                        if (d.css(f, "position") === "fixed")
                            o = f.getBoundingClientRect();
                        else {
                            for (
                                o = this.offset(),
                                    l = f.ownerDocument,
                                    n = f.offsetParent || l.documentElement;
                                n &&
                                (n === l.body || n === l.documentElement) &&
                                d.css(n, "position") === "static";

                            )
                                n = n.parentNode;
                            n &&
                                n !== f &&
                                n.nodeType === 1 &&
                                ((v = d(n).offset()),
                                (v.top += d.css(n, "borderTopWidth", !0)),
                                (v.left += d.css(n, "borderLeftWidth", !0)));
                        }
                        return {
                            top: o.top - v.top - d.css(f, "marginTop", !0),
                            left: o.left - v.left - d.css(f, "marginLeft", !0),
                        };
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (
                            var n = this.offsetParent;
                            n && d.css(n, "position") === "static";

                        )
                            n = n.offsetParent;
                        return n || kt;
                    });
                },
            }),
            d.each(
                { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                function (n, o) {
                    var l = o === "pageYOffset";
                    d.fn[n] = function (f) {
                        return gt(
                            this,
                            function (v, b, m) {
                                var A;
                                if (
                                    (W(v)
                                        ? (A = v)
                                        : v.nodeType === 9 &&
                                          (A = v.defaultView),
                                    m === void 0)
                                )
                                    return A ? A[o] : v[b];
                                A
                                    ? A.scrollTo(
                                          l ? A.pageXOffset : m,
                                          l ? m : A.pageYOffset
                                      )
                                    : (v[b] = m);
                            },
                            n,
                            f,
                            arguments.length
                        );
                    };
                }
            ),
            d.each(["top", "left"], function (n, o) {
                d.cssHooks[o] = La(N.pixelPosition, function (l, f) {
                    if (f)
                        return (
                            (f = an(l, o)),
                            dr.test(f) ? d(l).position()[o] + "px" : f
                        );
                });
            }),
            d.each({ Height: "height", Width: "width" }, function (n, o) {
                d.each(
                    { padding: "inner" + n, content: o, "": "outer" + n },
                    function (l, f) {
                        d.fn[f] = function (v, b) {
                            var m =
                                    arguments.length &&
                                    (l || typeof v != "boolean"),
                                A =
                                    l ||
                                    (v === !0 || b === !0
                                        ? "margin"
                                        : "border");
                            return gt(
                                this,
                                function (T, I, H) {
                                    var U;
                                    return W(T)
                                        ? f.indexOf("outer") === 0
                                            ? T["inner" + n]
                                            : T.document.documentElement[
                                                  "client" + n
                                              ]
                                        : T.nodeType === 9
                                        ? ((U = T.documentElement),
                                          Math.max(
                                              T.body["scroll" + n],
                                              U["scroll" + n],
                                              T.body["offset" + n],
                                              U["offset" + n],
                                              U["client" + n]
                                          ))
                                        : H === void 0
                                        ? d.css(T, I, A)
                                        : d.style(T, I, H, A);
                                },
                                o,
                                m ? v : void 0,
                                m
                            );
                        };
                    }
                );
            }),
            d.each(
                [
                    "ajaxStart",
                    "ajaxStop",
                    "ajaxComplete",
                    "ajaxError",
                    "ajaxSuccess",
                    "ajaxSend",
                ],
                function (n, o) {
                    d.fn[o] = function (l) {
                        return this.on(o, l);
                    };
                }
            ),
            d.fn.extend({
                bind: function (n, o, l) {
                    return this.on(n, null, o, l);
                },
                unbind: function (n, o) {
                    return this.off(n, null, o);
                },
                delegate: function (n, o, l, f) {
                    return this.on(o, n, l, f);
                },
                undelegate: function (n, o, l) {
                    return arguments.length === 1
                        ? this.off(n, "**")
                        : this.off(o, n || "**", l);
                },
                hover: function (n, o) {
                    return this.mouseenter(n).mouseleave(o || n);
                },
            }),
            d.each(
                "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                    " "
                ),
                function (n, o) {
                    d.fn[o] = function (l, f) {
                        return arguments.length > 0
                            ? this.on(o, null, l, f)
                            : this.trigger(o);
                    };
                }
            );
        var Ko = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        (d.proxy = function (n, o) {
            var l, f, v;
            if (
                (typeof o == "string" && ((l = n[o]), (o = n), (n = l)), !!P(n))
            )
                return (
                    (f = u.call(arguments, 2)),
                    (v = function () {
                        return n.apply(o || this, f.concat(u.call(arguments)));
                    }),
                    (v.guid = n.guid = n.guid || d.guid++),
                    v
                );
        }),
            (d.holdReady = function (n) {
                n ? d.readyWait++ : d.ready(!0);
            }),
            (d.isArray = Array.isArray),
            (d.parseJSON = JSON.parse),
            (d.nodeName = Ce),
            (d.isFunction = P),
            (d.isWindow = W),
            (d.camelCase = dt),
            (d.type = K),
            (d.now = Date.now),
            (d.isNumeric = function (n) {
                var o = d.type(n);
                return (
                    (o === "number" || o === "string") &&
                    !isNaN(n - parseFloat(n))
                );
            }),
            (d.trim = function (n) {
                return n == null ? "" : (n + "").replace(Ko, "$1");
            });
        var Yo = t.jQuery,
            zo = t.$;
        return (
            (d.noConflict = function (n) {
                return (
                    t.$ === d && (t.$ = zo),
                    n && t.jQuery === d && (t.jQuery = Yo),
                    d
                );
            }),
            typeof r > "u" && (t.jQuery = t.$ = d),
            d
        );
    });
})(hl);
const F = Hr;
/*! DataTables 1.13.2
 * ©2008-2023 SpryMedia Ltd - datatables.net/license
 */ let C = F;
var j = function (e, t) {
        if (this instanceof j) return C(e).DataTable(t);
        (t = e),
            (this.$ = function (c, h) {
                return this.api(!0).$(c, h);
            }),
            (this._ = function (c, h) {
                return this.api(!0).rows(c, h).data();
            }),
            (this.api = function (c) {
                return c ? new ce(Qn(this[ke.iApiIndex])) : new ce(this);
            }),
            (this.fnAddData = function (c, h) {
                var p = this.api(!0),
                    g =
                        Array.isArray(c) &&
                        (Array.isArray(c[0]) || C.isPlainObject(c[0]))
                            ? p.rows.add(c)
                            : p.row.add(c);
                return (h === void 0 || h) && p.draw(), g.flatten().toArray();
            }),
            (this.fnAdjustColumnSizing = function (c) {
                var h = this.api(!0).columns.adjust(),
                    p = h.settings()[0],
                    g = p.oScroll;
                c === void 0 || c
                    ? h.draw(!1)
                    : (g.sX !== "" || g.sY !== "") && lr(p);
            }),
            (this.fnClearTable = function (c) {
                var h = this.api(!0).clear();
                (c === void 0 || c) && h.draw();
            }),
            (this.fnClose = function (c) {
                this.api(!0).row(c).child.hide();
            }),
            (this.fnDeleteRow = function (c, h, p) {
                var g = this.api(!0),
                    y = g.rows(c),
                    x = y.settings()[0],
                    w = x.aoData[y[0][0]];
                return (
                    y.remove(),
                    h && h.call(this, x, w),
                    (p === void 0 || p) && g.draw(),
                    w
                );
            }),
            (this.fnDestroy = function (c) {
                this.api(!0).destroy(c);
            }),
            (this.fnDraw = function (c) {
                this.api(!0).draw(c);
            }),
            (this.fnFilter = function (c, h, p, g, y, x) {
                var w = this.api(!0);
                h == null
                    ? w.search(c, p, g, x)
                    : w.column(h).search(c, p, g, x),
                    w.draw();
            }),
            (this.fnGetData = function (c, h) {
                var p = this.api(!0);
                if (c !== void 0) {
                    var g = c.nodeName ? c.nodeName.toLowerCase() : "";
                    return h !== void 0 || g == "td" || g == "th"
                        ? p.cell(c, h).data()
                        : p.row(c).data() || null;
                }
                return p.data().toArray();
            }),
            (this.fnGetNodes = function (c) {
                var h = this.api(!0);
                return c !== void 0
                    ? h.row(c).node()
                    : h.rows().nodes().flatten().toArray();
            }),
            (this.fnGetPosition = function (c) {
                var h = this.api(!0),
                    p = c.nodeName.toUpperCase();
                if (p == "TR") return h.row(c).index();
                if (p == "TD" || p == "TH") {
                    var g = h.cell(c).index();
                    return [g.row, g.columnVisible, g.column];
                }
                return null;
            }),
            (this.fnIsOpen = function (c) {
                return this.api(!0).row(c).child.isShown();
            }),
            (this.fnOpen = function (c, h, p) {
                return this.api(!0).row(c).child(h, p).show().child()[0];
            }),
            (this.fnPageChange = function (c, h) {
                var p = this.api(!0).page(c);
                (h === void 0 || h) && p.draw(!1);
            }),
            (this.fnSetColumnVis = function (c, h, p) {
                var g = this.api(!0).column(c).visible(h);
                (p === void 0 || p) && g.columns.adjust().draw();
            }),
            (this.fnSettings = function () {
                return Qn(this[ke.iApiIndex]);
            }),
            (this.fnSort = function (c) {
                this.api(!0).order(c).draw();
            }),
            (this.fnSortListener = function (c, h, p) {
                this.api(!0).order.listener(c, h, p);
            }),
            (this.fnUpdate = function (c, h, p, g, y) {
                var x = this.api(!0);
                return (
                    p == null ? x.row(h).data(c) : x.cell(h, p).data(c),
                    (y === void 0 || y) && x.columns.adjust(),
                    (g === void 0 || g) && x.draw(),
                    0
                );
            }),
            (this.fnVersionCheck = ke.fnVersionCheck);
        var r = this,
            a = t === void 0,
            s = this.length;
        a && (t = {}), (this.oApi = this.internal = ke.internal);
        for (var u in j.ext.internal) u && (this[u] = ro(u));
        return (
            this.each(function () {
                var c = {},
                    h = s > 1 ? Vr(c, t, !0) : t,
                    p = 0,
                    g,
                    y = this.getAttribute("id"),
                    x = !1,
                    w = j.defaults,
                    D = C(this);
                if (this.nodeName.toLowerCase() != "table") {
                    ot(
                        null,
                        0,
                        "Non-table node initialisation (" + this.nodeName + ")",
                        2
                    );
                    return;
                }
                ii(w),
                    _i(w.column),
                    wt(w, w, !0),
                    wt(w.column, w.column, !0),
                    wt(w, C.extend(h, D.data()), !0);
                var N = j.settings;
                for (p = 0, g = N.length; p < g; p++) {
                    var P = N[p];
                    if (
                        P.nTable == this ||
                        (P.nTHead && P.nTHead.parentNode == this) ||
                        (P.nTFoot && P.nTFoot.parentNode == this)
                    ) {
                        var W =
                                h.bRetrieve !== void 0
                                    ? h.bRetrieve
                                    : w.bRetrieve,
                            O = h.bDestroy !== void 0 ? h.bDestroy : w.bDestroy;
                        if (a || W) return P.oInstance;
                        if (O) {
                            P.oInstance.fnDestroy();
                            break;
                        } else {
                            ot(P, 0, "Cannot reinitialise DataTable", 3);
                            return;
                        }
                    }
                    if (P.sTableId == this.id) {
                        N.splice(p, 1);
                        break;
                    }
                }
                (y === null || y === "") &&
                    ((y = "DataTables_Table_" + j.ext._unique++),
                    (this.id = y));
                var k = C.extend(!0, {}, j.models.oSettings, {
                    sDestroyWidth: D[0].style.width,
                    sInstance: y,
                    sTableId: y,
                });
                (k.nTable = this),
                    (k.oApi = r.internal),
                    (k.oInit = h),
                    N.push(k),
                    (k.oInstance = r.length === 1 ? r : D.dataTable()),
                    ii(h),
                    qr(h.oLanguage),
                    h.aLengthMenu &&
                        !h.iDisplayLength &&
                        (h.iDisplayLength = Array.isArray(h.aLengthMenu[0])
                            ? h.aLengthMenu[0][0]
                            : h.aLengthMenu[0]),
                    (h = Vr(C.extend(!0, {}, w), h)),
                    ct(k.oFeatures, h, [
                        "bPaginate",
                        "bLengthChange",
                        "bFilter",
                        "bSort",
                        "bSortMulti",
                        "bInfo",
                        "bProcessing",
                        "bAutoWidth",
                        "bSortClasses",
                        "bServerSide",
                        "bDeferRender",
                    ]),
                    ct(k, h, [
                        "asStripeClasses",
                        "ajax",
                        "fnServerData",
                        "fnFormatNumber",
                        "sServerMethod",
                        "aaSorting",
                        "aaSortingFixed",
                        "aLengthMenu",
                        "sPaginationType",
                        "sAjaxSource",
                        "sAjaxDataProp",
                        "iStateDuration",
                        "sDom",
                        "bSortCellsTop",
                        "iTabIndex",
                        "fnStateLoadCallback",
                        "fnStateSaveCallback",
                        "renderer",
                        "searchDelay",
                        "rowId",
                        ["iCookieDuration", "iStateDuration"],
                        ["oSearch", "oPreviousSearch"],
                        ["aoSearchCols", "aoPreSearchCols"],
                        ["iDisplayLength", "_iDisplayLength"],
                    ]),
                    ct(k.oScroll, h, [
                        ["sScrollX", "sX"],
                        ["sScrollXInner", "sXInner"],
                        ["sScrollY", "sY"],
                        ["bScrollCollapse", "bCollapse"],
                    ]),
                    ct(k.oLanguage, h, "fnInfoCallback"),
                    Oe(k, "aoDrawCallback", h.fnDrawCallback, "user"),
                    Oe(k, "aoServerParams", h.fnServerParams, "user"),
                    Oe(k, "aoStateSaveParams", h.fnStateSaveParams, "user"),
                    Oe(k, "aoStateLoadParams", h.fnStateLoadParams, "user"),
                    Oe(k, "aoStateLoaded", h.fnStateLoaded, "user"),
                    Oe(k, "aoRowCallback", h.fnRowCallback, "user"),
                    Oe(k, "aoRowCreatedCallback", h.fnCreatedRow, "user"),
                    Oe(k, "aoHeaderCallback", h.fnHeaderCallback, "user"),
                    Oe(k, "aoFooterCallback", h.fnFooterCallback, "user"),
                    Oe(k, "aoInitComplete", h.fnInitComplete, "user"),
                    Oe(k, "aoPreDrawCallback", h.fnPreDrawCallback, "user"),
                    (k.rowIdFn = Kt(h.rowId)),
                    xi(k);
                var J = k.oClasses;
                if (
                    (C.extend(J, j.ext.classes, h.oClasses),
                    D.addClass(J.sTable),
                    k.iInitDisplayStart === void 0 &&
                        ((k.iInitDisplayStart = h.iDisplayStart),
                        (k._iDisplayStart = h.iDisplayStart)),
                    h.iDeferLoading !== null)
                ) {
                    k.bDeferLoading = !0;
                    var K = Array.isArray(h.iDeferLoading);
                    (k._iRecordsDisplay = K
                        ? h.iDeferLoading[0]
                        : h.iDeferLoading),
                        (k._iRecordsTotal = K
                            ? h.iDeferLoading[1]
                            : h.iDeferLoading);
                }
                var oe = k.oLanguage;
                C.extend(!0, oe, h.oLanguage),
                    oe.sUrl
                        ? (C.ajax({
                              dataType: "json",
                              url: oe.sUrl,
                              success: function (me) {
                                  wt(w.oLanguage, me),
                                      qr(me),
                                      C.extend(!0, oe, me, k.oInit.oLanguage),
                                      pe(k, null, "i18n", [k]),
                                      mn(k);
                              },
                              error: function () {
                                  mn(k);
                              },
                          }),
                          (x = !0))
                        : pe(k, null, "i18n", [k]),
                    h.asStripeClasses === null &&
                        (k.asStripeClasses = [J.sStripeOdd, J.sStripeEven]);
                var d = k.asStripeClasses,
                    Z = D.children("tbody").find("tr").eq(0);
                C.inArray(
                    !0,
                    C.map(d, function (me, Ee) {
                        return Z.hasClass(me);
                    })
                ) !== -1 &&
                    (C("tbody tr", this).removeClass(d.join(" ")),
                    (k.asDestroyStripes = d.slice()));
                var Y = [],
                    ue,
                    de = this.getElementsByTagName("thead");
                if (
                    (de.length !== 0 && (yn(k.aoHeader, de[0]), (Y = ar(k))),
                    h.aoColumns === null)
                )
                    for (ue = [], p = 0, g = Y.length; p < g; p++)
                        ue.push(null);
                else ue = h.aoColumns;
                for (p = 0, g = ue.length; p < g; p++) Gr(k, Y ? Y[p] : null);
                if (
                    (wi(k, h.aoColumnDefs, ue, function (me, Ee) {
                        Kn(k, me, Ee);
                    }),
                    Z.length)
                ) {
                    var be = function (me, Ee) {
                        return me.getAttribute("data-" + Ee) !== null
                            ? Ee
                            : null;
                    };
                    C(Z[0])
                        .children("th, td")
                        .each(function (me, Ee) {
                            var Je = k.aoColumns[me];
                            if (
                                (Je || ot(k, 0, "Incorrect column count", 18),
                                Je.mData === me)
                            ) {
                                var Me = be(Ee, "sort") || be(Ee, "order"),
                                    He = be(Ee, "filter") || be(Ee, "search");
                                (Me !== null || He !== null) &&
                                    ((Je.mData = {
                                        _: me + ".display",
                                        sort:
                                            Me !== null
                                                ? me + ".@data-" + Me
                                                : void 0,
                                        type:
                                            Me !== null
                                                ? me + ".@data-" + Me
                                                : void 0,
                                        filter:
                                            He !== null
                                                ? me + ".@data-" + He
                                                : void 0,
                                    }),
                                    Kn(k, me));
                            }
                        });
                }
                var Ce = k.oFeatures,
                    mt = function () {
                        if (h.aaSorting === void 0) {
                            var me = k.aaSorting;
                            for (p = 0, g = me.length; p < g; p++)
                                me[p][1] = k.aoColumns[p].asSorting[0];
                        }
                        zn(k),
                            Ce.bSort &&
                                Oe(k, "aoDrawCallback", function () {
                                    if (k.bSorted) {
                                        var lt = zt(k),
                                            nt = {};
                                        C.each(lt, function (qe, Ct) {
                                            nt[Ct.src] = Ct.dir;
                                        }),
                                            pe(k, null, "order", [k, lt, nt]),
                                            Vi(k);
                                    }
                                }),
                            Oe(
                                k,
                                "aoDrawCallback",
                                function () {
                                    (k.bSorted ||
                                        Re(k) === "ssp" ||
                                        Ce.bDeferRender) &&
                                        zn(k);
                                },
                                "sc"
                            );
                        var Ee = D.children("caption").each(function () {
                                this._captionSide = C(this).css("caption-side");
                            }),
                            Je = D.children("thead");
                        Je.length === 0 && (Je = C("<thead/>").appendTo(D)),
                            (k.nTHead = Je[0]);
                        var Me = D.children("tbody");
                        Me.length === 0 && (Me = C("<tbody/>").insertAfter(Je)),
                            (k.nTBody = Me[0]);
                        var He = D.children("tfoot");
                        if (
                            (He.length === 0 &&
                                Ee.length > 0 &&
                                (k.oScroll.sX !== "" || k.oScroll.sY !== "") &&
                                (He = C("<tfoot/>").appendTo(D)),
                            He.length === 0 || He.children().length === 0
                                ? D.addClass(J.sNoFooter)
                                : He.length > 0 &&
                                  ((k.nTFoot = He[0]),
                                  yn(k.aoFooter, k.nTFoot)),
                            h.aaData)
                        )
                            for (p = 0; p < h.aaData.length; p++)
                                At(k, h.aaData[p]);
                        else
                            (k.bDeferLoading || Re(k) == "dom") &&
                                nr(k, C(k.nTBody).children("tr"));
                        (k.aiDisplay = k.aiDisplayMaster.slice()),
                            (k.bInitialised = !0),
                            x === !1 && mn(k);
                    };
                Oe(k, "aoDrawCallback", Nn, "state_save"),
                    h.bStateSave ? ((Ce.bStateSave = !0), Gi(k, h, mt)) : mt();
            }),
            (r = null),
            this
        );
    },
    ke,
    ce,
    ae,
    we,
    Ir = {},
    ri = /[\r\n\u2028]/g,
    Jn = /<.*?>/g,
    pl =
        /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
    vl = new RegExp(
        "(\\" +
            [
                "/",
                ".",
                "*",
                "+",
                "?",
                "|",
                "(",
                ")",
                "[",
                "]",
                "{",
                "}",
                "\\",
                "$",
                "^",
                "-",
            ].join("|\\") +
            ")",
        "g"
    ),
    Or = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
    pt = function (e) {
        return !e || e === !0 || e === "-";
    },
    vi = function (e) {
        var t = parseInt(e, 10);
        return !isNaN(t) && isFinite(e) ? t : null;
    },
    bi = function (e, t) {
        return (
            Ir[t] || (Ir[t] = new RegExp(Zr(t), "g")),
            typeof e == "string" && t !== "."
                ? e.replace(/\./g, "").replace(Ir[t], ".")
                : e
        );
    },
    Mr = function (e, t, r) {
        let a = typeof e;
        var s = a === "string";
        return a === "number" || a === "bigint" || pt(e)
            ? !0
            : (t && s && (e = bi(e, t)),
              r && s && (e = e.replace(Or, "")),
              !isNaN(parseFloat(e)) && isFinite(e));
    },
    bl = function (e) {
        return pt(e) || typeof e == "string";
    },
    ai = function (e, t, r) {
        if (pt(e)) return !0;
        var a = bl(e);
        return a && Mr(ml(e), t, r) ? !0 : null;
    },
    tt = function (e, t, r) {
        var a = [],
            s = 0,
            u = e.length;
        if (r !== void 0)
            for (; s < u; s++) e[s] && e[s][t] && a.push(e[s][t][r]);
        else for (; s < u; s++) e[s] && a.push(e[s][t]);
        return a;
    },
    _n = function (e, t, r, a) {
        var s = [],
            u = 0,
            c = t.length;
        if (a !== void 0)
            for (; u < c; u++) e[t[u]][r] && s.push(e[t[u]][r][a]);
        else for (; u < c; u++) s.push(e[t[u]][r]);
        return s;
    },
    Jt = function (e, t) {
        var r = [],
            a;
        t === void 0 ? ((t = 0), (a = e)) : ((a = t), (t = e));
        for (var s = t; s < a; s++) r.push(s);
        return r;
    },
    mi = function (e) {
        for (var t = [], r = 0, a = e.length; r < a; r++) e[r] && t.push(e[r]);
        return t;
    },
    ml = function (e) {
        return e.replace(Jn, "");
    },
    gl = function (e) {
        if (e.length < 2) return !0;
        for (
            var t = e.slice().sort(), r = t[0], a = 1, s = t.length;
            a < s;
            a++
        ) {
            if (t[a] === r) return !1;
            r = t[a];
        }
        return !0;
    },
    er = function (e) {
        if (gl(e)) return e.slice();
        var t = [],
            r,
            a,
            s = e.length,
            u,
            c = 0;
        e: for (a = 0; a < s; a++) {
            for (r = e[a], u = 0; u < c; u++) if (t[u] === r) continue e;
            t.push(r), c++;
        }
        return t;
    },
    gi = function (e, t) {
        if (Array.isArray(t)) for (var r = 0; r < t.length; r++) gi(e, t[r]);
        else e.push(t);
        return e;
    },
    yi = function (e, t) {
        return t === void 0 && (t = 0), this.indexOf(e, t) !== -1;
    };
Array.isArray ||
    (Array.isArray = function (e) {
        return Object.prototype.toString.call(e) === "[object Array]";
    });
Array.prototype.includes || (Array.prototype.includes = yi);
String.prototype.trim ||
    (String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    });
String.prototype.includes || (String.prototype.includes = yi);
j.util = {
    throttle: function (e, t) {
        var r = t !== void 0 ? t : 200,
            a,
            s;
        return function () {
            var u = this,
                c = +new Date(),
                h = arguments;
            a && c < a + r
                ? (clearTimeout(s),
                  (s = setTimeout(function () {
                      (a = void 0), e.apply(u, h);
                  }, r)))
                : ((a = c), e.apply(u, h));
        };
    },
    escapeRegex: function (e) {
        return e.replace(vl, "\\$1");
    },
    set: function (e) {
        if (C.isPlainObject(e)) return j.util.set(e._);
        if (e === null) return function () {};
        if (typeof e == "function")
            return function (r, a, s) {
                e(r, "set", a, s);
            };
        if (
            typeof e == "string" &&
            (e.indexOf(".") !== -1 ||
                e.indexOf("[") !== -1 ||
                e.indexOf("(") !== -1)
        ) {
            var t = function (r, a, s) {
                for (
                    var u = Br(s),
                        c,
                        h = u[u.length - 1],
                        p,
                        g,
                        y,
                        x,
                        w = 0,
                        D = u.length - 1;
                    w < D;
                    w++
                ) {
                    if (u[w] === "__proto__" || u[w] === "constructor")
                        throw new Error("Cannot set prototype values");
                    if (((p = u[w].match(hn)), (g = u[w].match(Vt)), p)) {
                        if (
                            ((u[w] = u[w].replace(hn, "")),
                            (r[u[w]] = []),
                            (c = u.slice()),
                            c.splice(0, w + 1),
                            (x = c.join(".")),
                            Array.isArray(a))
                        )
                            for (var N = 0, P = a.length; N < P; N++)
                                (y = {}), t(y, a[N], x), r[u[w]].push(y);
                        else r[u[w]] = a;
                        return;
                    } else
                        g && ((u[w] = u[w].replace(Vt, "")), (r = r[u[w]](a)));
                    (r[u[w]] === null || r[u[w]] === void 0) && (r[u[w]] = {}),
                        (r = r[u[w]]);
                }
                h.match(Vt)
                    ? (r = r[h.replace(Vt, "")](a))
                    : (r[h.replace(hn, "")] = a);
            };
            return function (r, a) {
                return t(r, a, e);
            };
        } else
            return function (r, a) {
                r[e] = a;
            };
    },
    get: function (e) {
        if (C.isPlainObject(e)) {
            var t = {};
            return (
                C.each(e, function (a, s) {
                    s && (t[a] = j.util.get(s));
                }),
                function (a, s, u, c) {
                    var h = t[s] || t._;
                    return h !== void 0 ? h(a, s, u, c) : a;
                }
            );
        } else {
            if (e === null)
                return function (a) {
                    return a;
                };
            if (typeof e == "function")
                return function (a, s, u, c) {
                    return e(a, s, u, c);
                };
            if (
                typeof e == "string" &&
                (e.indexOf(".") !== -1 ||
                    e.indexOf("[") !== -1 ||
                    e.indexOf("(") !== -1)
            ) {
                var r = function (a, s, u) {
                    var c, h, p, g;
                    if (u !== "")
                        for (var y = Br(u), x = 0, w = y.length; x < w; x++) {
                            if (
                                ((c = y[x].match(hn)), (h = y[x].match(Vt)), c)
                            ) {
                                if (
                                    ((y[x] = y[x].replace(hn, "")),
                                    y[x] !== "" && (a = a[y[x]]),
                                    (p = []),
                                    y.splice(0, x + 1),
                                    (g = y.join(".")),
                                    Array.isArray(a))
                                )
                                    for (var D = 0, N = a.length; D < N; D++)
                                        p.push(r(a[D], s, g));
                                var P = c[0].substring(1, c[0].length - 1);
                                a = P === "" ? p : p.join(P);
                                break;
                            } else if (h) {
                                (y[x] = y[x].replace(Vt, "")), (a = a[y[x]]());
                                continue;
                            }
                            if (a === null || a[y[x]] === void 0) return;
                            a = a[y[x]];
                        }
                    return a;
                };
                return function (a, s) {
                    return r(a, s, e);
                };
            } else
                return function (a, s) {
                    return a[e];
                };
        }
    },
};
function xn(e) {
    var t = "a aa ai ao as b fn i m o s ",
        r,
        a,
        s = {};
    C.each(e, function (u, c) {
        (r = u.match(/^([^A-Z]+?)([A-Z])/)),
            r &&
                t.indexOf(r[1] + " ") !== -1 &&
                ((a = u.replace(r[0], r[2].toLowerCase())),
                (s[a] = u),
                r[1] === "o" && xn(e[u]));
    }),
        (e._hungarianMap = s);
}
function wt(e, t, r) {
    e._hungarianMap || xn(e);
    var a;
    C.each(t, function (s, u) {
        (a = e._hungarianMap[s]),
            a !== void 0 &&
                (r || t[a] === void 0) &&
                (a.charAt(0) === "o"
                    ? (t[a] || (t[a] = {}),
                      C.extend(!0, t[a], t[s]),
                      wt(e[a], t[a], r))
                    : (t[a] = t[s]));
    });
}
function qr(e) {
    var t = j.defaults.oLanguage,
        r = t.sDecimal;
    if ((r && Xr(r), e)) {
        var a = e.sZeroRecords;
        !e.sEmptyTable &&
            a &&
            t.sEmptyTable === "No data available in table" &&
            ct(e, e, "sZeroRecords", "sEmptyTable"),
            !e.sLoadingRecords &&
                a &&
                t.sLoadingRecords === "Loading..." &&
                ct(e, e, "sZeroRecords", "sLoadingRecords"),
            e.sInfoThousands && (e.sThousands = e.sInfoThousands);
        var s = e.sDecimal;
        s && r !== s && Xr(s);
    }
}
var Xe = function (e, t, r) {
    e[t] !== void 0 && (e[r] = e[t]);
};
function ii(e) {
    Xe(e, "ordering", "bSort"),
        Xe(e, "orderMulti", "bSortMulti"),
        Xe(e, "orderClasses", "bSortClasses"),
        Xe(e, "orderCellsTop", "bSortCellsTop"),
        Xe(e, "order", "aaSorting"),
        Xe(e, "orderFixed", "aaSortingFixed"),
        Xe(e, "paging", "bPaginate"),
        Xe(e, "pagingType", "sPaginationType"),
        Xe(e, "pageLength", "iDisplayLength"),
        Xe(e, "searching", "bFilter"),
        typeof e.sScrollX == "boolean" &&
            (e.sScrollX = e.sScrollX ? "100%" : ""),
        typeof e.scrollX == "boolean" && (e.scrollX = e.scrollX ? "100%" : "");
    var t = e.aoSearchCols;
    if (t)
        for (var r = 0, a = t.length; r < a; r++)
            t[r] && wt(j.models.oSearch, t[r]);
}
function _i(e) {
    Xe(e, "orderable", "bSortable"),
        Xe(e, "orderData", "aDataSort"),
        Xe(e, "orderSequence", "asSorting"),
        Xe(e, "orderDataType", "sortDataType");
    var t = e.aDataSort;
    typeof t == "number" && !Array.isArray(t) && (e.aDataSort = [t]);
}
function xi(e) {
    if (!j.__browser) {
        var t = {};
        j.__browser = t;
        var r = C("<div/>")
                .css({
                    position: "fixed",
                    top: 0,
                    left: C(window).scrollLeft() * -1,
                    height: 1,
                    width: 1,
                    overflow: "hidden",
                })
                .append(
                    C("<div/>")
                        .css({
                            position: "absolute",
                            top: 1,
                            left: 1,
                            width: 100,
                            overflow: "scroll",
                        })
                        .append(C("<div/>").css({ width: "100%", height: 10 }))
                )
                .appendTo("body"),
            a = r.children(),
            s = a.children();
        (t.barWidth = a[0].offsetWidth - a[0].clientWidth),
            (t.bScrollOversize =
                s[0].offsetWidth === 100 && a[0].clientWidth !== 100),
            (t.bScrollbarLeft = Math.round(s.offset().left) !== 1),
            (t.bBounding = !!r[0].getBoundingClientRect().width),
            r.remove();
    }
    C.extend(e.oBrowser, j.__browser),
        (e.oScroll.iBarWidth = j.__browser.barWidth);
}
function oi(e, t, r, a, s, u) {
    var c = a,
        h,
        p = !1;
    for (r !== void 0 && ((h = r), (p = !0)); c !== s; )
        e.hasOwnProperty(c) &&
            ((h = p ? t(h, e[c], c, e) : e[c]), (p = !0), (c += u));
    return h;
}
function Gr(e, t) {
    var r = j.defaults.column,
        a = e.aoColumns.length,
        s = C.extend({}, j.models.oColumn, r, {
            nTh: t || document.createElement("th"),
            sTitle: r.sTitle ? r.sTitle : t ? t.innerHTML : "",
            aDataSort: r.aDataSort ? r.aDataSort : [a],
            mData: r.mData ? r.mData : a,
            idx: a,
        });
    e.aoColumns.push(s);
    var u = e.aoPreSearchCols;
    (u[a] = C.extend({}, j.models.oSearch, u[a])), Kn(e, a, C(t).data());
}
function Kn(e, t, r) {
    var a = e.aoColumns[t],
        s = e.oClasses,
        u = C(a.nTh);
    if (!a.sWidthOrig) {
        a.sWidthOrig = u.attr("width") || null;
        var c = (u.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
        c && (a.sWidthOrig = c[1]);
    }
    if (r != null) {
        _i(r),
            wt(j.defaults.column, r, !0),
            r.mDataProp !== void 0 && !r.mData && (r.mData = r.mDataProp),
            r.sType && (a._sManualType = r.sType),
            r.className && !r.sClass && (r.sClass = r.className),
            r.sClass && u.addClass(r.sClass);
        var h = a.sClass;
        C.extend(a, r),
            ct(a, r, "sWidth", "sWidthOrig"),
            h !== a.sClass && (a.sClass = h + " " + a.sClass),
            r.iDataSort !== void 0 && (a.aDataSort = [r.iDataSort]),
            ct(a, r, "aDataSort");
    }
    var p = a.mData,
        g = Kt(p),
        y = a.mRender ? Kt(a.mRender) : null,
        x = function (N) {
            return typeof N == "string" && N.indexOf("@") !== -1;
        };
    (a._bAttrSrc =
        C.isPlainObject(p) && (x(p.sort) || x(p.type) || x(p.filter))),
        (a._setter = null),
        (a.fnGetData = function (N, P, W) {
            var O = g(N, P, void 0, W);
            return y && P ? y(O, P, N, W) : O;
        }),
        (a.fnSetData = function (N, P, W) {
            return St(p)(N, P, W);
        }),
        typeof p != "number" && (e._rowReadObject = !0),
        e.oFeatures.bSort || ((a.bSortable = !1), u.addClass(s.sSortableNone));
    var w = C.inArray("asc", a.asSorting) !== -1,
        D = C.inArray("desc", a.asSorting) !== -1;
    !a.bSortable || (!w && !D)
        ? ((a.sSortingClass = s.sSortableNone), (a.sSortingClassJUI = ""))
        : w && !D
        ? ((a.sSortingClass = s.sSortableAsc),
          (a.sSortingClassJUI = s.sSortJUIAscAllowed))
        : !w && D
        ? ((a.sSortingClass = s.sSortableDesc),
          (a.sSortingClassJUI = s.sSortJUIDescAllowed))
        : ((a.sSortingClass = s.sSortable), (a.sSortingClassJUI = s.sSortJUI));
}
function wn(e) {
    if (e.oFeatures.bAutoWidth !== !1) {
        var t = e.aoColumns;
        ta(e);
        for (var r = 0, a = t.length; r < a; r++)
            t[r].nTh.style.width = t[r].sWidth;
    }
    var s = e.oScroll;
    (s.sY !== "" || s.sX !== "") && lr(e), pe(e, null, "column-sizing", [e]);
}
function Cn(e, t) {
    var r = tr(e, "bVisible");
    return typeof r[t] == "number" ? r[t] : null;
}
function Dn(e, t) {
    var r = tr(e, "bVisible"),
        a = C.inArray(t, r);
    return a !== -1 ? a : null;
}
function Yt(e) {
    var t = 0;
    return (
        C.each(e.aoColumns, function (r, a) {
            a.bVisible && C(a.nTh).css("display") !== "none" && t++;
        }),
        t
    );
}
function tr(e, t) {
    var r = [];
    return (
        C.map(e.aoColumns, function (a, s) {
            a[t] && r.push(s);
        }),
        r
    );
}
function Jr(e) {
    var t = e.aoColumns,
        r = e.aoData,
        a = j.ext.type.detect,
        s,
        u,
        c,
        h,
        p,
        g,
        y,
        x,
        w;
    for (s = 0, u = t.length; s < u; s++)
        if (((y = t[s]), (w = []), !y.sType && y._sManualType))
            y.sType = y._sManualType;
        else if (!y.sType) {
            for (c = 0, h = a.length; c < h; c++) {
                for (
                    p = 0, g = r.length;
                    p < g &&
                    (w[p] === void 0 && (w[p] = Ge(e, p, s, "type")),
                    (x = a[c](w[p], e)),
                    !(
                        (!x && c !== a.length - 1) ||
                        (x === "html" && !pt(w[p]))
                    ));
                    p++
                );
                if (x) {
                    y.sType = x;
                    break;
                }
            }
            y.sType || (y.sType = "string");
        }
}
function wi(e, t, r, a) {
    var s,
        u,
        c,
        h,
        p,
        g,
        y,
        x = e.aoColumns;
    if (t)
        for (s = t.length - 1; s >= 0; s--) {
            y = t[s];
            var w =
                y.target !== void 0
                    ? y.target
                    : y.targets !== void 0
                    ? y.targets
                    : y.aTargets;
            for (Array.isArray(w) || (w = [w]), c = 0, h = w.length; c < h; c++)
                if (typeof w[c] == "number" && w[c] >= 0) {
                    for (; x.length <= w[c]; ) Gr(e);
                    a(w[c], y);
                } else if (typeof w[c] == "number" && w[c] < 0)
                    a(x.length + w[c], y);
                else if (typeof w[c] == "string")
                    for (p = 0, g = x.length; p < g; p++)
                        (w[c] == "_all" || C(x[p].nTh).hasClass(w[c])) &&
                            a(p, y);
        }
    if (r) for (s = 0, u = r.length; s < u; s++) a(s, r[s]);
}
function At(e, t, r, a) {
    var s = e.aoData.length,
        u = C.extend(!0, {}, j.models.oRow, {
            src: r ? "dom" : "data",
            idx: s,
        });
    (u._aData = t), e.aoData.push(u);
    for (var c = e.aoColumns, h = 0, p = c.length; h < p; h++)
        c[h].sType = null;
    e.aiDisplayMaster.push(s);
    var g = e.rowIdFn(t);
    return (
        g !== void 0 && (e.aIds[g] = u),
        (r || !e.oFeatures.bDeferRender) && Yr(e, s, r, a),
        s
    );
}
function nr(e, t) {
    var r;
    return (
        t instanceof C || (t = C(t)),
        t.map(function (a, s) {
            return (r = Kr(e, s)), At(e, r.data, s, r.cells);
        })
    );
}
function yl(e, t) {
    return t._DT_RowIndex !== void 0 ? t._DT_RowIndex : null;
}
function _l(e, t, r) {
    return C.inArray(r, e.aoData[t].anCells);
}
function Ge(e, t, r, a) {
    a === "search" ? (a = "filter") : a === "order" && (a = "sort");
    var s = e.iDraw,
        u = e.aoColumns[r],
        c = e.aoData[t]._aData,
        h = u.sDefaultContent,
        p = u.fnGetData(c, a, { settings: e, row: t, col: r });
    if (p === void 0)
        return (
            e.iDrawError != s &&
                h === null &&
                (ot(
                    e,
                    0,
                    "Requested unknown parameter " +
                        (typeof u.mData == "function"
                            ? "{function}"
                            : "'" + u.mData + "'") +
                        " for row " +
                        t +
                        ", column " +
                        r,
                    4
                ),
                (e.iDrawError = s)),
            h
        );
    if ((p === c || p === null) && h !== null && a !== void 0) p = h;
    else if (typeof p == "function") return p.call(c);
    if (p === null && a === "display") return "";
    if (a === "filter") {
        var g = j.ext.type.search;
        g[u.sType] && (p = g[u.sType](p));
    }
    return p;
}
function Ci(e, t, r, a) {
    var s = e.aoColumns[r],
        u = e.aoData[t]._aData;
    s.fnSetData(u, a, { settings: e, row: t, col: r });
}
var hn = /\[.*?\]$/,
    Vt = /\(\)$/;
function Br(e) {
    return C.map(e.match(/(\\.|[^\.])+/g) || [""], function (t) {
        return t.replace(/\\\./g, ".");
    });
}
var Kt = j.util.get,
    St = j.util.set;
function Wr(e) {
    return tt(e.aoData, "_aData");
}
function rr(e) {
    (e.aoData.length = 0),
        (e.aiDisplayMaster.length = 0),
        (e.aiDisplay.length = 0),
        (e.aIds = {});
}
function Vn(e, t, r) {
    for (var a = -1, s = 0, u = e.length; s < u; s++)
        e[s] == t ? (a = s) : e[s] > t && e[s]--;
    a != -1 && r === void 0 && e.splice(a, 1);
}
function Tn(e, t, r, a) {
    var s = e.aoData[t],
        u,
        c,
        h = function (y, x) {
            for (; y.childNodes.length; ) y.removeChild(y.firstChild);
            y.innerHTML = Ge(e, t, x, "display");
        };
    if (r === "dom" || ((!r || r === "auto") && s.src === "dom"))
        s._aData = Kr(e, s, a, a === void 0 ? void 0 : s._aData).data;
    else {
        var p = s.anCells;
        if (p)
            if (a !== void 0) h(p[a], a);
            else for (u = 0, c = p.length; u < c; u++) h(p[u], u);
    }
    (s._aSortData = null), (s._aFilterData = null);
    var g = e.aoColumns;
    if (a !== void 0) g[a].sType = null;
    else {
        for (u = 0, c = g.length; u < c; u++) g[u].sType = null;
        zr(e, s);
    }
}
function Kr(e, t, r, a) {
    var s = [],
        u = t.firstChild,
        c,
        h,
        p = 0,
        g,
        y = e.aoColumns,
        x = e._rowReadObject;
    a = a !== void 0 ? a : x ? {} : [];
    var w = function (k, J) {
            if (typeof k == "string") {
                var K = k.indexOf("@");
                if (K !== -1) {
                    var oe = k.substring(K + 1),
                        d = St(k);
                    d(a, J.getAttribute(oe));
                }
            }
        },
        D = function (k) {
            if (r === void 0 || r === p)
                if (((h = y[p]), (g = k.innerHTML.trim()), h && h._bAttrSrc)) {
                    var J = St(h.mData._);
                    J(a, g),
                        w(h.mData.sort, k),
                        w(h.mData.type, k),
                        w(h.mData.filter, k);
                } else
                    x
                        ? (h._setter || (h._setter = St(h.mData)),
                          h._setter(a, g))
                        : (a[p] = g);
            p++;
        };
    if (u)
        for (; u; )
            (c = u.nodeName.toUpperCase()),
                (c == "TD" || c == "TH") && (D(u), s.push(u)),
                (u = u.nextSibling);
    else {
        s = t.anCells;
        for (var N = 0, P = s.length; N < P; N++) D(s[N]);
    }
    var W = t.firstChild ? t : t.nTr;
    if (W) {
        var O = W.getAttribute("id");
        O && St(e.rowId)(a, O);
    }
    return { data: a, cells: s };
}
function Yr(e, t, r, a) {
    var s = e.aoData[t],
        u = s._aData,
        c = [],
        h,
        p,
        g,
        y,
        x,
        w;
    if (s.nTr === null) {
        for (
            h = r || document.createElement("tr"),
                s.nTr = h,
                s.anCells = c,
                h._DT_RowIndex = t,
                zr(e, s),
                y = 0,
                x = e.aoColumns.length;
            y < x;
            y++
        )
            (g = e.aoColumns[y]),
                (w = !r),
                (p = w ? document.createElement(g.sCellType) : a[y]),
                p || ot(e, 0, "Incorrect column count", 18),
                (p._DT_CellIndex = { row: t, column: y }),
                c.push(p),
                (w ||
                    ((g.mRender || g.mData !== y) &&
                        (!C.isPlainObject(g.mData) ||
                            g.mData._ !== y + ".display"))) &&
                    (p.innerHTML = Ge(e, t, y, "display")),
                g.sClass && (p.className += " " + g.sClass),
                g.bVisible && !r
                    ? h.appendChild(p)
                    : !g.bVisible && r && p.parentNode.removeChild(p),
                g.fnCreatedCell &&
                    g.fnCreatedCell.call(e.oInstance, p, Ge(e, t, y), u, t, y);
        pe(e, "aoRowCreatedCallback", null, [h, u, t, c]);
    }
}
function zr(e, t) {
    var r = t.nTr,
        a = t._aData;
    if (r) {
        var s = e.rowIdFn(a);
        if ((s && (r.id = s), a.DT_RowClass)) {
            var u = a.DT_RowClass.split(" ");
            (t.__rowc = t.__rowc ? er(t.__rowc.concat(u)) : u),
                C(r).removeClass(t.__rowc.join(" ")).addClass(a.DT_RowClass);
        }
        a.DT_RowAttr && C(r).attr(a.DT_RowAttr),
            a.DT_RowData && C(r).data(a.DT_RowData);
    }
}
function Di(e) {
    var t,
        r,
        a,
        s,
        u,
        c = e.nTHead,
        h = e.nTFoot,
        p = C("th, td", c).length === 0,
        g = e.oClasses,
        y = e.aoColumns;
    for (p && (s = C("<tr/>").appendTo(c)), t = 0, r = y.length; t < r; t++)
        (u = y[t]),
            (a = C(u.nTh).addClass(u.sClass)),
            p && a.appendTo(s),
            e.oFeatures.bSort &&
                (a.addClass(u.sSortingClass),
                u.bSortable !== !1 &&
                    (a
                        .attr("tabindex", e.iTabIndex)
                        .attr("aria-controls", e.sTableId),
                    ra(e, u.nTh, t))),
            u.sTitle != a[0].innerHTML && a.html(u.sTitle),
            oa(e, "header")(e, a, u, g);
    if (
        (p && yn(e.aoHeader, c),
        C(c).children("tr").children("th, td").addClass(g.sHeaderTH),
        C(h).children("tr").children("th, td").addClass(g.sFooterTH),
        h !== null)
    ) {
        var x = e.aoFooter[0];
        for (t = 0, r = x.length; t < r; t++)
            (u = y[t]),
                u
                    ? ((u.nTf = x[t].cell),
                      u.sClass && C(u.nTf).addClass(u.sClass))
                    : ot(e, 0, "Incorrect column count", 18);
    }
}
function gn(e, t, r) {
    var a,
        s,
        u,
        c,
        h,
        p,
        g,
        y = [],
        x = [],
        w = e.aoColumns.length,
        D,
        N;
    if (t) {
        for (r === void 0 && (r = !1), a = 0, s = t.length; a < s; a++) {
            for (
                y[a] = t[a].slice(), y[a].nTr = t[a].nTr, u = w - 1;
                u >= 0;
                u--
            )
                !e.aoColumns[u].bVisible && !r && y[a].splice(u, 1);
            x.push([]);
        }
        for (a = 0, s = y.length; a < s; a++) {
            if (((g = y[a].nTr), g))
                for (; (p = g.firstChild); ) g.removeChild(p);
            for (u = 0, c = y[a].length; u < c; u++)
                if (((D = 1), (N = 1), x[a][u] === void 0)) {
                    for (
                        g.appendChild(y[a][u].cell), x[a][u] = 1;
                        y[a + D] !== void 0 && y[a][u].cell == y[a + D][u].cell;

                    )
                        (x[a + D][u] = 1), D++;
                    for (
                        ;
                        y[a][u + N] !== void 0 &&
                        y[a][u].cell == y[a][u + N].cell;

                    ) {
                        for (h = 0; h < D; h++) x[a + h][u + N] = 1;
                        N++;
                    }
                    C(y[a][u].cell).attr("rowspan", D).attr("colspan", N);
                }
        }
    }
}
function Nt(e, t) {
    xl(e);
    var r = pe(e, "aoPreDrawCallback", "preDraw", [e]);
    if (C.inArray(!1, r) !== -1) {
        et(e, !1);
        return;
    }
    var a = [],
        s = 0,
        u = e.asStripeClasses,
        c = u.length,
        h = e.oLanguage,
        p = Re(e) == "ssp",
        g = e.aiDisplay,
        y = e._iDisplayStart,
        x = e.fnDisplayEnd();
    if (((e.bDrawing = !0), e.bDeferLoading))
        (e.bDeferLoading = !1), e.iDraw++, et(e, !1);
    else if (!p) e.iDraw++;
    else if (!e.bDestroying && !t) {
        Si(e);
        return;
    }
    if (g.length !== 0)
        for (
            var w = p ? 0 : y, D = p ? e.aoData.length : x, N = w;
            N < D;
            N++
        ) {
            var P = g[N],
                W = e.aoData[P];
            W.nTr === null && Yr(e, P);
            var O = W.nTr;
            if (c !== 0) {
                var k = u[s % c];
                W._sRowStripe != k &&
                    (C(O).removeClass(W._sRowStripe).addClass(k),
                    (W._sRowStripe = k));
            }
            pe(e, "aoRowCallback", null, [O, W._aData, s, N, P]),
                a.push(O),
                s++;
        }
    else {
        var J = h.sZeroRecords;
        e.iDraw == 1 && Re(e) == "ajax"
            ? (J = h.sLoadingRecords)
            : h.sEmptyTable && e.fnRecordsTotal() === 0 && (J = h.sEmptyTable),
            (a[0] = C("<tr/>", { class: c ? u[0] : "" }).append(
                C("<td />", {
                    valign: "top",
                    colSpan: Yt(e),
                    class: e.oClasses.sRowEmpty,
                }).html(J)
            )[0]);
    }
    pe(e, "aoHeaderCallback", "header", [
        C(e.nTHead).children("tr")[0],
        Wr(e),
        y,
        x,
        g,
    ]),
        pe(e, "aoFooterCallback", "footer", [
            C(e.nTFoot).children("tr")[0],
            Wr(e),
            y,
            x,
            g,
        ]);
    var K = C(e.nTBody);
    K.children().detach(),
        K.append(C(a)),
        pe(e, "aoDrawCallback", "draw", [e]),
        (e.bSorted = !1),
        (e.bFiltered = !1),
        (e.bDrawing = !1);
}
function Ot(e, t) {
    var r = e.oFeatures,
        a = r.bSort,
        s = r.bFilter;
    a && Ui(e),
        s
            ? An(e, e.oPreviousSearch)
            : (e.aiDisplay = e.aiDisplayMaster.slice()),
        t !== !0 && (e._iDisplayStart = 0),
        (e._drawHold = t),
        Nt(e),
        (e._drawHold = !1);
}
function Ti(e) {
    var t = e.oClasses,
        r = C(e.nTable),
        a = C("<div/>").insertBefore(r),
        s = e.oFeatures,
        u = C("<div/>", {
            id: e.sTableId + "_wrapper",
            class: t.sWrapper + (e.nTFoot ? "" : " " + t.sNoFooter),
        });
    (e.nHolding = a[0]),
        (e.nTableWrapper = u[0]),
        (e.nTableReinsertBefore = e.nTable.nextSibling);
    for (var c = e.sDom.split(""), h, p, g, y, x, w, D = 0; D < c.length; D++) {
        if (((h = null), (p = c[D]), p == "<")) {
            if (((g = C("<div/>")[0]), (y = c[D + 1]), y == "'" || y == '"')) {
                for (x = "", w = 2; c[D + w] != y; ) (x += c[D + w]), w++;
                if (
                    (x == "H"
                        ? (x = t.sJUIHeader)
                        : x == "F" && (x = t.sJUIFooter),
                    x.indexOf(".") != -1)
                ) {
                    var N = x.split(".");
                    (g.id = N[0].substr(1, N[0].length - 1)),
                        (g.className = N[1]);
                } else
                    x.charAt(0) == "#"
                        ? (g.id = x.substr(1, x.length - 1))
                        : (g.className = x);
                D += w;
            }
            u.append(g), (u = C(g));
        } else if (p == ">") u = u.parent();
        else if (p == "l" && s.bPaginate && s.bLengthChange) h = Hi(e);
        else if (p == "f" && s.bFilter) h = Li(e);
        else if (p == "r" && s.bProcessing) h = Mi(e);
        else if (p == "t") h = qi(e);
        else if (p == "i" && s.bInfo) h = ji(e);
        else if (p == "p" && s.bPaginate) h = Oi(e);
        else if (j.ext.feature.length !== 0) {
            for (var P = j.ext.feature, W = 0, O = P.length; W < O; W++)
                if (p == P[W].cFeature) {
                    h = P[W].fnInit(e);
                    break;
                }
        }
        if (h) {
            var k = e.aanFeatures;
            k[p] || (k[p] = []), k[p].push(h), u.append(h);
        }
    }
    a.replaceWith(u), (e.nHolding = null);
}
function yn(e, t) {
    var r = C(t).children("tr"),
        a,
        s,
        u,
        c,
        h,
        p,
        g,
        y,
        x,
        w,
        D,
        N = function (P, W, O) {
            for (var k = P[W]; k[O]; ) O++;
            return O;
        };
    for (e.splice(0, e.length), u = 0, p = r.length; u < p; u++) e.push([]);
    for (u = 0, p = r.length; u < p; u++)
        for (a = r[u], y = 0, s = a.firstChild; s; ) {
            if (
                s.nodeName.toUpperCase() == "TD" ||
                s.nodeName.toUpperCase() == "TH"
            )
                for (
                    x = s.getAttribute("colspan") * 1,
                        w = s.getAttribute("rowspan") * 1,
                        x = !x || x === 0 || x === 1 ? 1 : x,
                        w = !w || w === 0 || w === 1 ? 1 : w,
                        g = N(e, u, y),
                        D = x === 1,
                        h = 0;
                    h < x;
                    h++
                )
                    for (c = 0; c < w; c++)
                        (e[u + c][g + h] = { cell: s, unique: D }),
                            (e[u + c].nTr = a);
            s = s.nextSibling;
        }
}
function ar(e, t, r) {
    var a = [];
    r || ((r = e.aoHeader), t && ((r = []), yn(r, t)));
    for (var s = 0, u = r.length; s < u; s++)
        for (var c = 0, h = r[s].length; c < h; c++)
            r[s][c].unique &&
                (!a[c] || !e.bSortCellsTop) &&
                (a[c] = r[s][c].cell);
    return a;
}
function xl(e) {
    var t = Re(e) == "ssp",
        r = e.iInitDisplayStart;
    r !== void 0 &&
        r !== -1 &&
        ((e._iDisplayStart = t ? r : r >= e.fnRecordsDisplay() ? 0 : r),
        (e.iInitDisplayStart = -1));
}
function ir(e, t, r) {
    if ((pe(e, "aoServerParams", "serverParams", [t]), t && Array.isArray(t))) {
        var a = {},
            s = /(.*?)\[\]$/;
        C.each(t, function (x, w) {
            var D = w.name.match(s);
            if (D) {
                var N = D[0];
                a[N] || (a[N] = []), a[N].push(w.value);
            } else a[w.name] = w.value;
        }),
            (t = a);
    }
    var u,
        c = e.ajax,
        h = e.oInstance,
        p = function (x) {
            var w = e.jqXHR ? e.jqXHR.status : null;
            (x === null || (typeof w == "number" && w == 204)) &&
                ((x = {}), Sn(e, x, []));
            var D = x.error || x.sError;
            D && ot(e, 0, D),
                (e.json = x),
                pe(e, null, "xhr", [e, x, e.jqXHR]),
                r(x);
        };
    if (C.isPlainObject(c) && c.data) {
        u = c.data;
        var g = typeof u == "function" ? u(t, e) : u;
        (t = typeof u == "function" && g ? g : C.extend(!0, t, g)),
            delete c.data;
    }
    var y = {
        data: t,
        success: p,
        dataType: "json",
        cache: !1,
        type: e.sServerMethod,
        error: function (x, w, D) {
            var N = pe(e, null, "xhr", [e, null, e.jqXHR]);
            C.inArray(!0, N) === -1 &&
                (w == "parsererror"
                    ? ot(e, 0, "Invalid JSON response", 1)
                    : x.readyState === 4 && ot(e, 0, "Ajax error", 7)),
                et(e, !1);
        },
    };
    (e.oAjaxData = t),
        pe(e, null, "preXhr", [e, t]),
        e.fnServerData
            ? e.fnServerData.call(
                  h,
                  e.sAjaxSource,
                  C.map(t, function (x, w) {
                      return { name: w, value: x };
                  }),
                  p,
                  e
              )
            : e.sAjaxSource || typeof c == "string"
            ? (e.jqXHR = C.ajax(C.extend(y, { url: c || e.sAjaxSource })))
            : typeof c == "function"
            ? (e.jqXHR = c.call(h, t, p, e))
            : ((e.jqXHR = C.ajax(C.extend(y, c))), (c.data = u));
}
function Si(e) {
    e.iDraw++,
        et(e, !0),
        ir(e, Ai(e), function (t) {
            Ni(e, t);
        });
}
function Ai(e) {
    var t = e.aoColumns,
        r = t.length,
        a = e.oFeatures,
        s = e.oPreviousSearch,
        u = e.aoPreSearchCols,
        c,
        h = [],
        p,
        g,
        y,
        x = zt(e),
        w = e._iDisplayStart,
        D = a.bPaginate !== !1 ? e._iDisplayLength : -1,
        N = function (O, k) {
            h.push({ name: O, value: k });
        };
    N("sEcho", e.iDraw),
        N("iColumns", r),
        N("sColumns", tt(t, "sName").join(",")),
        N("iDisplayStart", w),
        N("iDisplayLength", D);
    var P = {
        draw: e.iDraw,
        columns: [],
        order: [],
        start: w,
        length: D,
        search: { value: s.sSearch, regex: s.bRegex },
    };
    for (c = 0; c < r; c++)
        (g = t[c]),
            (y = u[c]),
            (p = typeof g.mData == "function" ? "function" : g.mData),
            P.columns.push({
                data: p,
                name: g.sName,
                searchable: g.bSearchable,
                orderable: g.bSortable,
                search: { value: y.sSearch, regex: y.bRegex },
            }),
            N("mDataProp_" + c, p),
            a.bFilter &&
                (N("sSearch_" + c, y.sSearch),
                N("bRegex_" + c, y.bRegex),
                N("bSearchable_" + c, g.bSearchable)),
            a.bSort && N("bSortable_" + c, g.bSortable);
    a.bFilter && (N("sSearch", s.sSearch), N("bRegex", s.bRegex)),
        a.bSort &&
            (C.each(x, function (O, k) {
                P.order.push({ column: k.col, dir: k.dir }),
                    N("iSortCol_" + O, k.col),
                    N("sSortDir_" + O, k.dir);
            }),
            N("iSortingCols", x.length));
    var W = j.ext.legacy.ajax;
    return W === null ? (e.sAjaxSource ? h : P) : W ? h : P;
}
function Ni(e, t) {
    var r = function (g, y) {
            return t[g] !== void 0 ? t[g] : t[y];
        },
        a = Sn(e, t),
        s = r("sEcho", "draw"),
        u = r("iTotalRecords", "recordsTotal"),
        c = r("iTotalDisplayRecords", "recordsFiltered");
    if (s !== void 0) {
        if (s * 1 < e.iDraw) return;
        e.iDraw = s * 1;
    }
    a || (a = []),
        rr(e),
        (e._iRecordsTotal = parseInt(u, 10)),
        (e._iRecordsDisplay = parseInt(c, 10));
    for (var h = 0, p = a.length; h < p; h++) At(e, a[h]);
    (e.aiDisplay = e.aiDisplayMaster.slice()),
        Nt(e, !0),
        e._bInitComplete || Yn(e, t),
        et(e, !1);
}
function Sn(e, t, r) {
    var a =
        C.isPlainObject(e.ajax) && e.ajax.dataSrc !== void 0
            ? e.ajax.dataSrc
            : e.sAjaxDataProp;
    if (!r) return a === "data" ? t.aaData || t[a] : a !== "" ? Kt(a)(t) : t;
    St(a)(t, r);
}
function Li(e) {
    var t = e.oClasses,
        r = e.sTableId,
        a = e.oLanguage,
        s = e.oPreviousSearch,
        u = e.aanFeatures,
        c = '<input type="search" class="' + t.sFilterInput + '"/>',
        h = a.sSearch;
    h = h.match(/_INPUT_/) ? h.replace("_INPUT_", c) : h + c;
    var p = C("<div/>", {
            id: u.f ? null : r + "_filter",
            class: t.sFilter,
        }).append(C("<label/>").append(h)),
        g = function (w) {
            u.f;
            var D = this.value ? this.value : "";
            (s.return && w.key !== "Enter") ||
                (D != s.sSearch &&
                    (An(e, {
                        sSearch: D,
                        bRegex: s.bRegex,
                        bSmart: s.bSmart,
                        bCaseInsensitive: s.bCaseInsensitive,
                        return: s.return,
                    }),
                    (e._iDisplayStart = 0),
                    Nt(e)));
        },
        y = e.searchDelay !== null ? e.searchDelay : Re(e) === "ssp" ? 400 : 0,
        x = C("input", p)
            .val(s.sSearch)
            .attr("placeholder", a.sSearchPlaceholder)
            .on("keyup.DT search.DT input.DT paste.DT cut.DT", y ? na(g, y) : g)
            .on("mouseup", function (w) {
                setTimeout(function () {
                    g.call(x[0], w);
                }, 10);
            })
            .on("keypress.DT", function (w) {
                if (w.keyCode == 13) return !1;
            })
            .attr("aria-controls", r);
    return (
        C(e.nTable).on("search.dt.DT", function (w, D) {
            if (e === D)
                try {
                    x[0] !== document.activeElement && x.val(s.sSearch);
                } catch {}
        }),
        p[0]
    );
}
function An(e, t, r) {
    var a = e.oPreviousSearch,
        s = e.aoPreSearchCols,
        u = function (p) {
            (a.sSearch = p.sSearch),
                (a.bRegex = p.bRegex),
                (a.bSmart = p.bSmart),
                (a.bCaseInsensitive = p.bCaseInsensitive),
                (a.return = p.return);
        },
        c = function (p) {
            return p.bEscapeRegex !== void 0 ? !p.bEscapeRegex : p.bRegex;
        };
    if ((Jr(e), Re(e) != "ssp")) {
        Ii(e, t.sSearch, r, c(t), t.bSmart, t.bCaseInsensitive, t.return), u(t);
        for (var h = 0; h < s.length; h++)
            Ei(e, s[h].sSearch, h, c(s[h]), s[h].bSmart, s[h].bCaseInsensitive);
        ki(e);
    } else u(t);
    (e.bFiltered = !0), pe(e, null, "search", [e]);
}
function ki(e) {
    for (
        var t = j.ext.search, r = e.aiDisplay, a, s, u = 0, c = t.length;
        u < c;
        u++
    ) {
        for (var h = [], p = 0, g = r.length; p < g; p++)
            (s = r[p]),
                (a = e.aoData[s]),
                t[u](e, a._aFilterData, s, a._aData, p) && h.push(s);
        (r.length = 0), C.merge(r, h);
    }
}
function Ei(e, t, r, a, s, u) {
    if (t !== "") {
        for (
            var c, h = [], p = e.aiDisplay, g = Qr(t, a, s, u), y = 0;
            y < p.length;
            y++
        )
            (c = e.aoData[p[y]]._aFilterData[r]), g.test(c) && h.push(p[y]);
        e.aiDisplay = h;
    }
}
function Ii(e, t, r, a, s, u) {
    var c = Qr(t, a, s, u),
        h = e.oPreviousSearch.sSearch,
        p = e.aiDisplayMaster,
        g,
        y,
        x,
        w = [];
    if ((j.ext.search.length !== 0 && (r = !0), (y = Fi(e)), t.length <= 0))
        e.aiDisplay = p.slice();
    else {
        for (
            (y ||
                r ||
                a ||
                h.length > t.length ||
                t.indexOf(h) !== 0 ||
                e.bSorted) &&
                (e.aiDisplay = p.slice()),
                g = e.aiDisplay,
                x = 0;
            x < g.length;
            x++
        )
            c.test(e.aoData[g[x]]._sFilterRow) && w.push(g[x]);
        e.aiDisplay = w;
    }
}
function Qr(e, t, r, a) {
    if (((e = t ? e : Zr(e)), r)) {
        var s = C.map(e.match(/"[^"]+"|[^ ]+/g) || [""], function (u) {
            if (u.charAt(0) === '"') {
                var c = u.match(/^"(.*)"$/);
                u = c ? c[1] : u;
            }
            return u.replace('"', "");
        });
        e = "^(?=.*?" + s.join(")(?=.*?") + ").*$";
    }
    return new RegExp(e, a ? "i" : "");
}
var Zr = j.util.escapeRegex,
    Xn = C("<div>")[0],
    wl = Xn.textContent !== void 0;
function Fi(e) {
    var t = e.aoColumns,
        r,
        a,
        s,
        u,
        c,
        h,
        p,
        g,
        y = !1;
    for (a = 0, u = e.aoData.length; a < u; a++)
        if (((g = e.aoData[a]), !g._aFilterData)) {
            for (h = [], s = 0, c = t.length; s < c; s++)
                (r = t[s]),
                    r.bSearchable
                        ? ((p = Ge(e, a, s, "filter")),
                          p === null && (p = ""),
                          typeof p != "string" &&
                              p.toString &&
                              (p = p.toString()))
                        : (p = ""),
                    p.indexOf &&
                        p.indexOf("&") !== -1 &&
                        ((Xn.innerHTML = p),
                        (p = wl ? Xn.textContent : Xn.innerText)),
                    p.replace && (p = p.replace(/[\r\n\u2028]/g, "")),
                    h.push(p);
            (g._aFilterData = h), (g._sFilterRow = h.join("  ")), (y = !0);
        }
    return y;
}
function li(e) {
    return {
        search: e.sSearch,
        smart: e.bSmart,
        regex: e.bRegex,
        caseInsensitive: e.bCaseInsensitive,
    };
}
function si(e) {
    return {
        sSearch: e.search,
        bSmart: e.smart,
        bRegex: e.regex,
        bCaseInsensitive: e.caseInsensitive,
    };
}
function ji(e) {
    var t = e.sTableId,
        r = e.aanFeatures.i,
        a = C("<div/>", {
            class: e.oClasses.sInfo,
            id: r ? null : t + "_info",
        });
    return (
        r ||
            (e.aoDrawCallback.push({ fn: Pi, sName: "information" }),
            a.attr("role", "status").attr("aria-live", "polite"),
            C(e.nTable).attr("aria-describedby", t + "_info")),
        a[0]
    );
}
function Pi(e) {
    var t = e.aanFeatures.i;
    if (t.length !== 0) {
        var r = e.oLanguage,
            a = e._iDisplayStart + 1,
            s = e.fnDisplayEnd(),
            u = e.fnRecordsTotal(),
            c = e.fnRecordsDisplay(),
            h = c ? r.sInfo : r.sInfoEmpty;
        c !== u && (h += " " + r.sInfoFiltered),
            (h += r.sInfoPostFix),
            (h = Ri(e, h));
        var p = r.fnInfoCallback;
        p !== null && (h = p.call(e.oInstance, e, a, s, u, c, h)), C(t).html(h);
    }
}
function Ri(e, t) {
    var r = e.fnFormatNumber,
        a = e._iDisplayStart + 1,
        s = e._iDisplayLength,
        u = e.fnRecordsDisplay(),
        c = s === -1;
    return t
        .replace(/_START_/g, r.call(e, a))
        .replace(/_END_/g, r.call(e, e.fnDisplayEnd()))
        .replace(/_MAX_/g, r.call(e, e.fnRecordsTotal()))
        .replace(/_TOTAL_/g, r.call(e, u))
        .replace(/_PAGE_/g, r.call(e, c ? 1 : Math.ceil(a / s)))
        .replace(/_PAGES_/g, r.call(e, c ? 1 : Math.ceil(u / s)));
}
function mn(e) {
    var t,
        r,
        a = e.iInitDisplayStart,
        s = e.aoColumns,
        u,
        c = e.oFeatures,
        h = e.bDeferLoading;
    if (!e.bInitialised) {
        setTimeout(function () {
            mn(e);
        }, 200);
        return;
    }
    for (
        Ti(e),
            Di(e),
            gn(e, e.aoHeader),
            gn(e, e.aoFooter),
            et(e, !0),
            c.bAutoWidth && ta(e),
            t = 0,
            r = s.length;
        t < r;
        t++
    )
        (u = s[t]), u.sWidth && (u.nTh.style.width = Ne(u.sWidth));
    pe(e, null, "preInit", [e]), Ot(e);
    var p = Re(e);
    (p != "ssp" || h) &&
        (p == "ajax"
            ? ir(e, [], function (g) {
                  var y = Sn(e, g);
                  for (t = 0; t < y.length; t++) At(e, y[t]);
                  (e.iInitDisplayStart = a), Ot(e), et(e, !1), Yn(e, g);
              })
            : (et(e, !1), Yn(e)));
}
function Yn(e, t) {
    (e._bInitComplete = !0),
        (t || e.oInit.aaData) && wn(e),
        pe(e, null, "plugin-init", [e, t]),
        pe(e, "aoInitComplete", "init", [e, t]);
}
function ea(e, t) {
    var r = parseInt(t, 10);
    (e._iDisplayLength = r), ia(e), pe(e, null, "length", [e, r]);
}
function Hi(e) {
    for (
        var t = e.oClasses,
            r = e.sTableId,
            a = e.aLengthMenu,
            s = Array.isArray(a[0]),
            u = s ? a[0] : a,
            c = s ? a[1] : a,
            h = C("<select/>", {
                name: r + "_length",
                "aria-controls": r,
                class: t.sLengthSelect,
            }),
            p = 0,
            g = u.length;
        p < g;
        p++
    )
        h[0][p] = new Option(
            typeof c[p] == "number" ? e.fnFormatNumber(c[p]) : c[p],
            u[p]
        );
    var y = C("<div><label/></div>").addClass(t.sLength);
    return (
        e.aanFeatures.l || (y[0].id = r + "_length"),
        y
            .children()
            .append(e.oLanguage.sLengthMenu.replace("_MENU_", h[0].outerHTML)),
        C("select", y)
            .val(e._iDisplayLength)
            .on("change.DT", function (x) {
                ea(e, C(this).val()), Nt(e);
            }),
        C(e.nTable).on("length.dt.DT", function (x, w, D) {
            e === w && C("select", y).val(D);
        }),
        y[0]
    );
}
function Oi(e) {
    var t = e.sPaginationType,
        r = j.ext.pager[t],
        a = typeof r == "function",
        s = function (h) {
            Nt(h);
        },
        u = C("<div/>").addClass(e.oClasses.sPaging + t)[0],
        c = e.aanFeatures;
    return (
        a || r.fnInit(e, u, s),
        c.p ||
            ((u.id = e.sTableId + "_paginate"),
            e.aoDrawCallback.push({
                fn: function (h) {
                    if (a) {
                        var p = h._iDisplayStart,
                            g = h._iDisplayLength,
                            y = h.fnRecordsDisplay(),
                            x = g === -1,
                            w = x ? 0 : Math.ceil(p / g),
                            D = x ? 1 : Math.ceil(y / g),
                            N = r(w, D),
                            P,
                            W;
                        for (P = 0, W = c.p.length; P < W; P++)
                            oa(h, "pageButton")(h, c.p[P], P, N, w, D);
                    } else r.fnUpdate(h, s);
                },
                sName: "pagination",
            })),
        u
    );
}
function or(e, t, r) {
    var a = e._iDisplayStart,
        s = e._iDisplayLength,
        u = e.fnRecordsDisplay();
    u === 0 || s === -1
        ? (a = 0)
        : typeof t == "number"
        ? ((a = t * s), a > u && (a = 0))
        : t == "first"
        ? (a = 0)
        : t == "previous"
        ? ((a = s >= 0 ? a - s : 0), a < 0 && (a = 0))
        : t == "next"
        ? a + s < u && (a += s)
        : t == "last"
        ? (a = Math.floor((u - 1) / s) * s)
        : ot(e, 0, "Unknown paging action: " + t, 5);
    var c = e._iDisplayStart !== a;
    return (
        (e._iDisplayStart = a),
        c
            ? (pe(e, null, "page", [e]), r && Nt(e))
            : pe(e, null, "page-nc", [e]),
        c
    );
}
function Mi(e) {
    return C("<div/>", {
        id: e.aanFeatures.r ? null : e.sTableId + "_processing",
        class: e.oClasses.sProcessing,
    })
        .html(e.oLanguage.sProcessing)
        .append("<div><div></div><div></div><div></div><div></div></div>")
        .insertBefore(e.nTable)[0];
}
function et(e, t) {
    e.oFeatures.bProcessing &&
        C(e.aanFeatures.r).css("display", t ? "block" : "none"),
        pe(e, null, "processing", [e, t]);
}
function qi(e) {
    var t = C(e.nTable),
        r = e.oScroll;
    if (r.sX === "" && r.sY === "") return e.nTable;
    var a = r.sX,
        s = r.sY,
        u = e.oClasses,
        c = t.children("caption"),
        h = c.length ? c[0]._captionSide : null,
        p = C(t[0].cloneNode(!1)),
        g = C(t[0].cloneNode(!1)),
        y = t.children("tfoot"),
        x = "<div/>",
        w = function (k) {
            return k ? Ne(k) : null;
        };
    y.length || (y = null);
    var D = C(x, { class: u.sScrollWrapper })
        .append(
            C(x, { class: u.sScrollHead })
                .css({
                    overflow: "hidden",
                    position: "relative",
                    border: 0,
                    width: a ? w(a) : "100%",
                })
                .append(
                    C(x, { class: u.sScrollHeadInner })
                        .css({
                            "box-sizing": "content-box",
                            width: r.sXInner || "100%",
                        })
                        .append(
                            p
                                .removeAttr("id")
                                .css("margin-left", 0)
                                .append(h === "top" ? c : null)
                                .append(t.children("thead"))
                        )
                )
        )
        .append(
            C(x, { class: u.sScrollBody })
                .css({ position: "relative", overflow: "auto", width: w(a) })
                .append(t)
        );
    y &&
        D.append(
            C(x, { class: u.sScrollFoot })
                .css({
                    overflow: "hidden",
                    border: 0,
                    width: a ? w(a) : "100%",
                })
                .append(
                    C(x, { class: u.sScrollFootInner }).append(
                        g
                            .removeAttr("id")
                            .css("margin-left", 0)
                            .append(h === "bottom" ? c : null)
                            .append(t.children("tfoot"))
                    )
                )
        );
    var N = D.children(),
        P = N[0],
        W = N[1],
        O = y ? N[2] : null;
    return (
        a &&
            C(W).on("scroll.DT", function (k) {
                var J = this.scrollLeft;
                (P.scrollLeft = J), y && (O.scrollLeft = J);
            }),
        C(W).css("max-height", s),
        r.bCollapse || C(W).css("height", s),
        (e.nScrollHead = P),
        (e.nScrollBody = W),
        (e.nScrollFoot = O),
        e.aoDrawCallback.push({ fn: lr, sName: "scrolling" }),
        D[0]
    );
}
function lr(e) {
    var t = e.oScroll,
        r = t.sX,
        a = t.sXInner,
        s = t.sY,
        u = t.iBarWidth,
        c = C(e.nScrollHead),
        h = c[0].style,
        p = c.children("div"),
        g = p[0].style,
        y = p.children("table"),
        x = e.nScrollBody,
        w = C(x),
        D = x.style,
        N = C(e.nScrollFoot),
        P = N.children("div"),
        W = P.children("table"),
        O = C(e.nTHead),
        k = C(e.nTable),
        J = k[0],
        K = J.style,
        oe = e.nTFoot ? C(e.nTFoot) : null,
        d = e.oBrowser,
        Z = d.bScrollOversize;
    tt(e.aoColumns, "nTh");
    var Y,
        ue,
        de,
        be,
        Ce,
        mt,
        me = [],
        Ee = [],
        Je = [],
        Me = [],
        He,
        lt,
        nt,
        qe = function (ge) {
            var Te = ge.style;
            (Te.paddingTop = "0"),
                (Te.paddingBottom = "0"),
                (Te.borderTopWidth = "0"),
                (Te.borderBottomWidth = "0"),
                (Te.height = 0);
        },
        Ct = x.scrollHeight > x.clientHeight;
    if (e.scrollBarVis !== Ct && e.scrollBarVis !== void 0) {
        (e.scrollBarVis = Ct), wn(e);
        return;
    } else e.scrollBarVis = Ct;
    k.children("thead, tfoot").remove(),
        oe &&
            ((mt = oe.clone().prependTo(k)),
            (ue = oe.find("tr")),
            (be = mt.find("tr")),
            mt.find("[id]").removeAttr("id")),
        (Ce = O.clone().prependTo(k)),
        (Y = O.find("tr")),
        (de = Ce.find("tr")),
        Ce.find("th, td").removeAttr("tabindex"),
        Ce.find("[id]").removeAttr("id"),
        r || ((D.width = "100%"), (c[0].style.width = "100%")),
        C.each(ar(e, Ce), function (ge, Te) {
            (He = Cn(e, ge)), (Te.style.width = e.aoColumns[He].sWidth);
        }),
        oe &&
            ht(function (ge) {
                ge.style.width = "";
            }, be),
        (nt = k.outerWidth()),
        r === ""
            ? ((K.width = "100%"),
              Z &&
                  (k.find("tbody").height() > x.offsetHeight ||
                      w.css("overflow-y") == "scroll") &&
                  (K.width = Ne(k.outerWidth() - u)),
              (nt = k.outerWidth()))
            : a !== "" && ((K.width = Ne(a)), (nt = k.outerWidth())),
        ht(qe, de),
        ht(function (ge) {
            var Te = window.getComputedStyle
                ? window.getComputedStyle(ge).width
                : Ne(C(ge).width());
            Je.push(ge.innerHTML), me.push(Te);
        }, de),
        ht(function (ge, Te) {
            ge.style.width = me[Te];
        }, Y),
        C(de).css("height", 0),
        oe &&
            (ht(qe, be),
            ht(function (ge) {
                Me.push(ge.innerHTML), Ee.push(Ne(C(ge).css("width")));
            }, be),
            ht(function (ge, Te) {
                ge.style.width = Ee[Te];
            }, ue),
            C(be).height(0)),
        ht(function (ge, Te) {
            (ge.innerHTML =
                '<div class="dataTables_sizing">' + Je[Te] + "</div>"),
                (ge.childNodes[0].style.height = "0"),
                (ge.childNodes[0].style.overflow = "hidden"),
                (ge.style.width = me[Te]);
        }, de),
        oe &&
            ht(function (ge, Te) {
                (ge.innerHTML =
                    '<div class="dataTables_sizing">' + Me[Te] + "</div>"),
                    (ge.childNodes[0].style.height = "0"),
                    (ge.childNodes[0].style.overflow = "hidden"),
                    (ge.style.width = Ee[Te]);
            }, be),
        Math.round(k.outerWidth()) < Math.round(nt)
            ? ((lt =
                  x.scrollHeight > x.offsetHeight ||
                  w.css("overflow-y") == "scroll"
                      ? nt + u
                      : nt),
              Z &&
                  (x.scrollHeight > x.offsetHeight ||
                      w.css("overflow-y") == "scroll") &&
                  (K.width = Ne(lt - u)),
              (r === "" || a !== "") &&
                  ot(e, 1, "Possible column misalignment", 6))
            : (lt = "100%"),
        (D.width = Ne(lt)),
        (h.width = Ne(lt)),
        oe && (e.nScrollFoot.style.width = Ne(lt)),
        s || (Z && (D.height = Ne(J.offsetHeight + u)));
    var st = k.outerWidth();
    (y[0].style.width = Ne(st)), (g.width = Ne(st));
    var Lt = k.height() > x.clientHeight || w.css("overflow-y") == "scroll",
        Zt = "padding" + (d.bScrollbarLeft ? "Left" : "Right");
    (g[Zt] = Lt ? u + "px" : "0px"),
        oe &&
            ((W[0].style.width = Ne(st)),
            (P[0].style.width = Ne(st)),
            (P[0].style[Zt] = Lt ? u + "px" : "0px")),
        k.children("colgroup").insertBefore(k.children("thead")),
        w.trigger("scroll"),
        (e.bSorted || e.bFiltered) && !e._drawHold && (x.scrollTop = 0);
}
function ht(e, t, r) {
    for (var a = 0, s = 0, u = t.length, c, h; s < u; ) {
        for (c = t[s].firstChild, h = r ? r[s].firstChild : null; c; )
            c.nodeType === 1 && (r ? e(c, h, a) : e(c, a), a++),
                (c = c.nextSibling),
                (h = r ? h.nextSibling : null);
        s++;
    }
}
var Cl = /<.*?>/g;
function ta(e) {
    var t = e.nTable,
        r = e.aoColumns,
        a = e.oScroll,
        s = a.sY,
        u = a.sX,
        c = a.sXInner,
        h = r.length,
        p = tr(e, "bVisible"),
        g = C("th", e.nTHead),
        y = t.getAttribute("width"),
        x = t.parentNode,
        w = !1,
        D,
        N,
        P,
        W = e.oBrowser,
        O = W.bScrollOversize,
        k = t.style.width;
    for (k && k.indexOf("%") !== -1 && (y = k), D = 0; D < p.length; D++)
        (N = r[p[D]]),
            N.sWidth !== null && ((N.sWidth = Bi(N.sWidthOrig, x)), (w = !0));
    if (O || (!w && !u && !s && h == Yt(e) && h == g.length))
        for (D = 0; D < h; D++) {
            var J = Cn(e, D);
            J !== null && (r[J].sWidth = Ne(g.eq(D).width()));
        }
    else {
        var K = C(t).clone().css("visibility", "hidden").removeAttr("id");
        K.find("tbody tr").remove();
        var oe = C("<tr/>").appendTo(K.find("tbody"));
        for (
            K.find("thead, tfoot").remove(),
                K.append(C(e.nTHead).clone()).append(C(e.nTFoot).clone()),
                K.find("tfoot th, tfoot td").css("width", ""),
                g = ar(e, K.find("thead")[0]),
                D = 0;
            D < p.length;
            D++
        )
            (N = r[p[D]]),
                (g[D].style.width =
                    N.sWidthOrig !== null && N.sWidthOrig !== ""
                        ? Ne(N.sWidthOrig)
                        : ""),
                N.sWidthOrig &&
                    u &&
                    C(g[D]).append(
                        C("<div/>").css({
                            width: N.sWidthOrig,
                            margin: 0,
                            padding: 0,
                            border: 0,
                            height: 1,
                        })
                    );
        if (e.aoData.length)
            for (D = 0; D < p.length; D++)
                (P = p[D]),
                    (N = r[P]),
                    C(Wi(e, P))
                        .clone(!1)
                        .append(N.sContentPadding)
                        .appendTo(oe);
        C("[name]", K).removeAttr("name");
        var d = C("<div/>")
            .css(
                u || s
                    ? {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          height: 1,
                          right: 0,
                          overflow: "hidden",
                      }
                    : {}
            )
            .append(K)
            .appendTo(x);
        u && c
            ? K.width(c)
            : u
            ? (K.css("width", "auto"),
              K.removeAttr("width"),
              K.width() < x.clientWidth && y && K.width(x.clientWidth))
            : s
            ? K.width(x.clientWidth)
            : y && K.width(y);
        var Z = 0;
        for (D = 0; D < p.length; D++) {
            var Y = C(g[D]),
                ue = Y.outerWidth() - Y.width(),
                de = W.bBounding
                    ? Math.ceil(g[D].getBoundingClientRect().width)
                    : Y.outerWidth();
            (Z += de), (r[p[D]].sWidth = Ne(de - ue));
        }
        (t.style.width = Ne(Z)), d.remove();
    }
    if ((y && (t.style.width = Ne(y)), (y || u) && !e._reszEvt)) {
        var be = function () {
            C(window).on(
                "resize.DT-" + e.sInstance,
                na(function () {
                    wn(e);
                })
            );
        };
        O ? setTimeout(be, 1e3) : be(), (e._reszEvt = !0);
    }
}
var na = j.util.throttle;
function Bi(e, t) {
    if (!e) return 0;
    var r = C("<div/>")
            .css("width", Ne(e))
            .appendTo(t || document.body),
        a = r[0].offsetWidth;
    return r.remove(), a;
}
function Wi(e, t) {
    var r = $i(e, t);
    if (r < 0) return null;
    var a = e.aoData[r];
    return a.nTr ? a.anCells[t] : C("<td/>").html(Ge(e, r, t, "display"))[0];
}
function $i(e, t) {
    for (var r, a = -1, s = -1, u = 0, c = e.aoData.length; u < c; u++)
        (r = Ge(e, u, t, "display") + ""),
            (r = r.replace(Cl, "")),
            (r = r.replace(/&nbsp;/g, " ")),
            r.length > a && ((a = r.length), (s = u));
    return s;
}
function Ne(e) {
    return e === null
        ? "0px"
        : typeof e == "number"
        ? e < 0
            ? "0px"
            : e + "px"
        : e.match(/\d$/)
        ? e + "px"
        : e;
}
function zt(e) {
    var t,
        r,
        a,
        s = [],
        u = e.aoColumns,
        c,
        h,
        p,
        g,
        y = e.aaSortingFixed,
        x = C.isPlainObject(y),
        w = [],
        D = function (N) {
            N.length && !Array.isArray(N[0]) ? w.push(N) : C.merge(w, N);
        };
    for (
        Array.isArray(y) && D(y),
            x && y.pre && D(y.pre),
            D(e.aaSorting),
            x && y.post && D(y.post),
            t = 0;
        t < w.length;
        t++
    )
        for (g = w[t][0], c = u[g].aDataSort, r = 0, a = c.length; r < a; r++)
            (h = c[r]),
                (p = u[h].sType || "string"),
                w[t]._idx === void 0 &&
                    (w[t]._idx = C.inArray(w[t][1], u[h].asSorting)),
                s.push({
                    src: g,
                    col: h,
                    dir: w[t][1],
                    index: w[t]._idx,
                    type: p,
                    formatter: j.ext.type.order[p + "-pre"],
                });
    return s;
}
function Ui(e) {
    var t,
        r,
        a,
        s = [],
        u = j.ext.type.order,
        c = e.aoData;
    e.aoColumns;
    var h = 0,
        p,
        g = e.aiDisplayMaster,
        y;
    for (Jr(e), y = zt(e), t = 0, r = y.length; t < r; t++)
        (p = y[t]), p.formatter && h++, Xi(e, p.col);
    if (Re(e) != "ssp" && y.length !== 0) {
        for (t = 0, a = g.length; t < a; t++) s[g[t]] = t;
        h === y.length
            ? g.sort(function (x, w) {
                  var D,
                      N,
                      P,
                      W,
                      O,
                      k = y.length,
                      J = c[x]._aSortData,
                      K = c[w]._aSortData;
                  for (P = 0; P < k; P++)
                      if (
                          ((O = y[P]),
                          (D = J[O.col]),
                          (N = K[O.col]),
                          (W = D < N ? -1 : D > N ? 1 : 0),
                          W !== 0)
                      )
                          return O.dir === "asc" ? W : -W;
                  return (D = s[x]), (N = s[w]), D < N ? -1 : D > N ? 1 : 0;
              })
            : g.sort(function (x, w) {
                  var D,
                      N,
                      P,
                      W,
                      O,
                      k,
                      J = y.length,
                      K = c[x]._aSortData,
                      oe = c[w]._aSortData;
                  for (P = 0; P < J; P++)
                      if (
                          ((O = y[P]),
                          (D = K[O.col]),
                          (N = oe[O.col]),
                          (k = u[O.type + "-" + O.dir] || u["string-" + O.dir]),
                          (W = k(D, N)),
                          W !== 0)
                      )
                          return W;
                  return (D = s[x]), (N = s[w]), D < N ? -1 : D > N ? 1 : 0;
              });
    }
    e.bSorted = !0;
}
function Vi(e) {
    for (
        var t,
            r,
            a = e.aoColumns,
            s = zt(e),
            u = e.oLanguage.oAria,
            c = 0,
            h = a.length;
        c < h;
        c++
    ) {
        var p = a[c],
            g = p.asSorting,
            y = p.ariaTitle || p.sTitle.replace(/<.*?>/g, ""),
            x = p.nTh;
        x.removeAttribute("aria-sort"),
            p.bSortable
                ? (s.length > 0 && s[0].col == c
                      ? (x.setAttribute(
                            "aria-sort",
                            s[0].dir == "asc" ? "ascending" : "descending"
                        ),
                        (r = g[s[0].index + 1] || g[0]))
                      : (r = g[0]),
                  (t =
                      y + (r === "asc" ? u.sSortAscending : u.sSortDescending)))
                : (t = y),
            x.setAttribute("aria-label", t);
    }
}
function $r(e, t, r, a) {
    var s = e.aoColumns[t],
        u = e.aaSorting,
        c = s.asSorting,
        h,
        p = function (y, x) {
            var w = y._idx;
            return (
                w === void 0 && (w = C.inArray(y[1], c)),
                w + 1 < c.length ? w + 1 : x ? null : 0
            );
        };
    if (
        (typeof u[0] == "number" && (u = e.aaSorting = [u]),
        r && e.oFeatures.bSortMulti)
    ) {
        var g = C.inArray(t, tt(u, "0"));
        g !== -1
            ? ((h = p(u[g], !0)),
              h === null && u.length === 1 && (h = 0),
              h === null ? u.splice(g, 1) : ((u[g][1] = c[h]), (u[g]._idx = h)))
            : (u.push([t, c[0], 0]), (u[u.length - 1]._idx = 0));
    } else
        u.length && u[0][0] == t
            ? ((h = p(u[0])), (u.length = 1), (u[0][1] = c[h]), (u[0]._idx = h))
            : ((u.length = 0), u.push([t, c[0]]), (u[0]._idx = 0));
    Ot(e), typeof a == "function" && a(e);
}
function ra(e, t, r, a) {
    var s = e.aoColumns[r];
    aa(t, {}, function (u) {
        s.bSortable !== !1 &&
            (e.oFeatures.bProcessing
                ? (et(e, !0),
                  setTimeout(function () {
                      $r(e, r, u.shiftKey, a), Re(e) !== "ssp" && et(e, !1);
                  }, 0))
                : $r(e, r, u.shiftKey, a));
    });
}
function zn(e) {
    var t = e.aLastSort,
        r = e.oClasses.sSortColumn,
        a = zt(e),
        s = e.oFeatures,
        u,
        c,
        h;
    if (s.bSort && s.bSortClasses) {
        for (u = 0, c = t.length; u < c; u++)
            (h = t[u].src),
                C(tt(e.aoData, "anCells", h)).removeClass(
                    r + (u < 2 ? u + 1 : 3)
                );
        for (u = 0, c = a.length; u < c; u++)
            (h = a[u].src),
                C(tt(e.aoData, "anCells", h)).addClass(r + (u < 2 ? u + 1 : 3));
    }
    e.aLastSort = a;
}
function Xi(e, t) {
    var r = e.aoColumns[t],
        a = j.ext.order[r.sSortDataType],
        s;
    a && (s = a.call(e.oInstance, e, t, Dn(e, t)));
    for (
        var u,
            c,
            h = j.ext.type.order[r.sType + "-pre"],
            p = 0,
            g = e.aoData.length;
        p < g;
        p++
    )
        (u = e.aoData[p]),
            u._aSortData || (u._aSortData = []),
            (!u._aSortData[t] || a) &&
                ((c = a ? s[p] : Ge(e, p, t, "sort")),
                (u._aSortData[t] = h ? h(c) : c));
}
function Nn(e) {
    if (!e._bLoadingState) {
        var t = {
            time: +new Date(),
            start: e._iDisplayStart,
            length: e._iDisplayLength,
            order: C.extend(!0, [], e.aaSorting),
            search: li(e.oPreviousSearch),
            columns: C.map(e.aoColumns, function (r, a) {
                return {
                    visible: r.bVisible,
                    search: li(e.aoPreSearchCols[a]),
                };
            }),
        };
        (e.oSavedState = t),
            pe(e, "aoStateSaveParams", "stateSaveParams", [e, t]),
            e.oFeatures.bStateSave &&
                !e.bDestroying &&
                e.fnStateSaveCallback.call(e.oInstance, e, t);
    }
}
function Gi(e, t, r) {
    if (!e.oFeatures.bStateSave) {
        r();
        return;
    }
    var a = function (u) {
            Ur(e, u, r);
        },
        s = e.fnStateLoadCallback.call(e.oInstance, e, a);
    return s !== void 0 && Ur(e, s, r), !0;
}
function Ur(e, t, r) {
    var a,
        s,
        u = e.aoColumns;
    e._bLoadingState = !0;
    var c = e._bInitComplete ? new j.Api(e) : null;
    if (!t || !t.time) {
        (e._bLoadingState = !1), r();
        return;
    }
    var h = pe(e, "aoStateLoadParams", "stateLoadParams", [e, t]);
    if (C.inArray(!1, h) !== -1) {
        (e._bLoadingState = !1), r();
        return;
    }
    var p = e.iStateDuration;
    if (p > 0 && t.time < +new Date() - p * 1e3) {
        (e._bLoadingState = !1), r();
        return;
    }
    if (t.columns && u.length !== t.columns.length) {
        (e._bLoadingState = !1), r();
        return;
    }
    if (
        ((e.oLoadedState = C.extend(!0, {}, t)),
        t.length !== void 0 &&
            (c ? c.page.len(t.length) : (e._iDisplayLength = t.length)),
        t.start !== void 0 &&
            (c === null
                ? ((e._iDisplayStart = t.start),
                  (e.iInitDisplayStart = t.start))
                : or(e, t.start / e._iDisplayLength)),
        t.order !== void 0 &&
            ((e.aaSorting = []),
            C.each(t.order, function (y, x) {
                e.aaSorting.push(x[0] >= u.length ? [0, x[1]] : x);
            })),
        t.search !== void 0 && C.extend(e.oPreviousSearch, si(t.search)),
        t.columns)
    ) {
        for (a = 0, s = t.columns.length; a < s; a++) {
            var g = t.columns[a];
            g.visible !== void 0 &&
                (c
                    ? c.column(a).visible(g.visible, !1)
                    : (u[a].bVisible = g.visible)),
                g.search !== void 0 &&
                    C.extend(e.aoPreSearchCols[a], si(g.search));
        }
        c && c.columns.adjust();
    }
    (e._bLoadingState = !1), pe(e, "aoStateLoaded", "stateLoaded", [e, t]), r();
}
function Qn(e) {
    var t = j.settings,
        r = C.inArray(e, tt(t, "nTable"));
    return r !== -1 ? t[r] : null;
}
function ot(e, t, r, a) {
    if (
        ((r =
            "DataTables warning: " +
            (e ? "table id=" + e.sTableId + " - " : "") +
            r),
        a &&
            (r +=
                ". For more information about this error, please see http://datatables.net/tn/" +
                a),
        t)
    )
        window.console && console.log && console.log(r);
    else {
        var s = j.ext,
            u = s.sErrMode || s.errMode;
        if ((e && pe(e, null, "error", [e, a, r]), u == "alert")) alert(r);
        else {
            if (u == "throw") throw new Error(r);
            typeof u == "function" && u(e, a, r);
        }
    }
}
function ct(e, t, r, a) {
    if (Array.isArray(r)) {
        C.each(r, function (s, u) {
            Array.isArray(u) ? ct(e, t, u[0], u[1]) : ct(e, t, u);
        });
        return;
    }
    a === void 0 && (a = r), t[r] !== void 0 && (e[a] = t[r]);
}
function Vr(e, t, r) {
    var a;
    for (var s in t)
        t.hasOwnProperty(s) &&
            ((a = t[s]),
            C.isPlainObject(a)
                ? (C.isPlainObject(e[s]) || (e[s] = {}), C.extend(!0, e[s], a))
                : r && s !== "data" && s !== "aaData" && Array.isArray(a)
                ? (e[s] = a.slice())
                : (e[s] = a));
    return e;
}
function aa(e, t, r) {
    C(e)
        .on("click.DT", t, function (a) {
            C(e).trigger("blur"), r(a);
        })
        .on("keypress.DT", t, function (a) {
            a.which === 13 && (a.preventDefault(), r(a));
        })
        .on("selectstart.DT", function () {
            return !1;
        });
}
function Oe(e, t, r, a) {
    r && e[t].push({ fn: r, sName: a });
}
function pe(e, t, r, a) {
    var s = [];
    if (
        (t &&
            (s = C.map(e[t].slice().reverse(), function (h, p) {
                return h.fn.apply(e.oInstance, a);
            })),
        r !== null)
    ) {
        var u = C.Event(r + ".dt"),
            c = C(e.nTable);
        c.trigger(u, a),
            c.parents("body").length === 0 && C("body").trigger(u, a),
            s.push(u.result);
    }
    return s;
}
function ia(e) {
    var t = e._iDisplayStart,
        r = e.fnDisplayEnd(),
        a = e._iDisplayLength;
    t >= r && (t = r - a),
        (t -= t % a),
        (a === -1 || t < 0) && (t = 0),
        (e._iDisplayStart = t);
}
function oa(e, t) {
    var r = e.renderer,
        a = j.ext.renderer[t];
    return C.isPlainObject(r) && r[t]
        ? a[r[t]] || a._
        : (typeof r == "string" && a[r]) || a._;
}
function Re(e) {
    return e.oFeatures.bServerSide
        ? "ssp"
        : e.ajax || e.sAjaxSource
        ? "ajax"
        : "dom";
}
var Ji = [],
    je = Array.prototype,
    Dl = function (e) {
        var t,
            r,
            a = j.settings,
            s = C.map(a, function (u, c) {
                return u.nTable;
            });
        if (e) {
            if (e.nTable && e.oApi) return [e];
            if (e.nodeName && e.nodeName.toLowerCase() === "table")
                return (t = C.inArray(e, s)), t !== -1 ? [a[t]] : null;
            if (e && typeof e.settings == "function")
                return e.settings().toArray();
            typeof e == "string" ? (r = C(e)) : e instanceof C && (r = e);
        } else return [];
        if (r)
            return r
                .map(function (u) {
                    return (t = C.inArray(this, s)), t !== -1 ? a[t] : null;
                })
                .toArray();
    };
ce = function (e, t) {
    if (!(this instanceof ce)) return new ce(e, t);
    var r = [],
        a = function (c) {
            var h = Dl(c);
            h && r.push.apply(r, h);
        };
    if (Array.isArray(e)) for (var s = 0, u = e.length; s < u; s++) a(e[s]);
    else a(e);
    (this.context = er(r)),
        t && C.merge(this, t),
        (this.selector = { rows: null, cols: null, opts: null }),
        ce.extend(this, this, Ji);
};
j.Api = ce;
C.extend(ce.prototype, {
    any: function () {
        return this.count() !== 0;
    },
    concat: je.concat,
    context: [],
    count: function () {
        return this.flatten().length;
    },
    each: function (e) {
        for (var t = 0, r = this.length; t < r; t++)
            e.call(this, this[t], t, this);
        return this;
    },
    eq: function (e) {
        var t = this.context;
        return t.length > e ? new ce(t[e], this[e]) : null;
    },
    filter: function (e) {
        var t = [];
        if (je.filter) t = je.filter.call(this, e, this);
        else
            for (var r = 0, a = this.length; r < a; r++)
                e.call(this, this[r], r, this) && t.push(this[r]);
        return new ce(this.context, t);
    },
    flatten: function () {
        var e = [];
        return new ce(this.context, e.concat.apply(e, this.toArray()));
    },
    join: je.join,
    indexOf:
        je.indexOf ||
        function (e, t) {
            for (var r = t || 0, a = this.length; r < a; r++)
                if (this[r] === e) return r;
            return -1;
        },
    iterator: function (e, t, r, a) {
        var s = [],
            u,
            c,
            h,
            p,
            g,
            y = this.context,
            x,
            w,
            D,
            N = this.selector;
        for (
            typeof e == "string" && ((a = r), (r = t), (t = e), (e = !1)),
                c = 0,
                h = y.length;
            c < h;
            c++
        ) {
            var P = new ce(y[c]);
            if (t === "table")
                (u = r.call(P, y[c], c)), u !== void 0 && s.push(u);
            else if (t === "columns" || t === "rows")
                (u = r.call(P, y[c], this[c], c)), u !== void 0 && s.push(u);
            else if (
                t === "column" ||
                t === "column-rows" ||
                t === "row" ||
                t === "cell"
            )
                for (
                    w = this[c],
                        t === "column-rows" && (x = sr(y[c], N.opts)),
                        p = 0,
                        g = w.length;
                    p < g;
                    p++
                )
                    (D = w[p]),
                        t === "cell"
                            ? (u = r.call(P, y[c], D.row, D.column, c, p))
                            : (u = r.call(P, y[c], D, c, p, x)),
                        u !== void 0 && s.push(u);
        }
        if (s.length || a) {
            var W = new ce(y, e ? s.concat.apply([], s) : s),
                O = W.selector;
            return (O.rows = N.rows), (O.cols = N.cols), (O.opts = N.opts), W;
        }
        return this;
    },
    lastIndexOf:
        je.lastIndexOf ||
        function (e, t) {
            return this.indexOf.apply(this.toArray.reverse(), arguments);
        },
    length: 0,
    map: function (e) {
        var t = [];
        if (je.map) t = je.map.call(this, e, this);
        else
            for (var r = 0, a = this.length; r < a; r++)
                t.push(e.call(this, this[r], r));
        return new ce(this.context, t);
    },
    pluck: function (e) {
        var t = j.util.get(e);
        return this.map(function (r) {
            return t(r);
        });
    },
    pop: je.pop,
    push: je.push,
    reduce:
        je.reduce ||
        function (e, t) {
            return oi(this, e, t, 0, this.length, 1);
        },
    reduceRight:
        je.reduceRight ||
        function (e, t) {
            return oi(this, e, t, this.length - 1, -1, -1);
        },
    reverse: je.reverse,
    selector: null,
    shift: je.shift,
    slice: function () {
        return new ce(this.context, this);
    },
    sort: je.sort,
    splice: je.splice,
    toArray: function () {
        return je.slice.call(this);
    },
    to$: function () {
        return C(this);
    },
    toJQuery: function () {
        return C(this);
    },
    unique: function () {
        return new ce(this.context, er(this));
    },
    unshift: je.unshift,
});
ce.extend = function (e, t, r) {
    if (!(!r.length || !t || (!(t instanceof ce) && !t.__dt_wrapper))) {
        var a,
            s,
            u,
            c = function (h, p, g) {
                return function () {
                    var y = p.apply(h, arguments);
                    return ce.extend(y, y, g.methodExt), y;
                };
            };
        for (a = 0, s = r.length; a < s; a++)
            (u = r[a]),
                (t[u.name] =
                    u.type === "function"
                        ? c(e, u.val, u)
                        : u.type === "object"
                        ? {}
                        : u.val),
                (t[u.name].__dt_wrapper = !0),
                ce.extend(e, t[u.name], u.propExt);
    }
};
ce.register = ae = function (e, t) {
    if (Array.isArray(e)) {
        for (var r = 0, a = e.length; r < a; r++) ce.register(e[r], t);
        return;
    }
    var s,
        u,
        c = e.split("."),
        h = Ji,
        p,
        g,
        y = function (w, D) {
            for (var N = 0, P = w.length; N < P; N++)
                if (w[N].name === D) return w[N];
            return null;
        };
    for (s = 0, u = c.length; s < u; s++) {
        (g = c[s].indexOf("()") !== -1),
            (p = g ? c[s].replace("()", "") : c[s]);
        var x = y(h, p);
        x ||
            ((x = {
                name: p,
                val: {},
                methodExt: [],
                propExt: [],
                type: "object",
            }),
            h.push(x)),
            s === u - 1
                ? ((x.val = t),
                  (x.type =
                      typeof t == "function"
                          ? "function"
                          : C.isPlainObject(t)
                          ? "object"
                          : "other"))
                : (h = g ? x.methodExt : x.propExt);
    }
};
ce.registerPlural = we = function (e, t, r) {
    ce.register(e, r),
        ce.register(t, function () {
            var a = r.apply(this, arguments);
            return a === this
                ? this
                : a instanceof ce
                ? a.length
                    ? Array.isArray(a[0])
                        ? new ce(a.context, a[0])
                        : a[0]
                    : void 0
                : a;
        });
};
var Ki = function (e, t) {
    if (Array.isArray(e))
        return C.map(e, function (a) {
            return Ki(a, t);
        });
    if (typeof e == "number") return [t[e]];
    var r = C.map(t, function (a, s) {
        return a.nTable;
    });
    return C(r)
        .filter(e)
        .map(function (a) {
            var s = C.inArray(this, r);
            return t[s];
        })
        .toArray();
};
ae("tables()", function (e) {
    return e != null ? new ce(Ki(e, this.context)) : this;
});
ae("table()", function (e) {
    var t = this.tables(e),
        r = t.context;
    return r.length ? new ce(r[0]) : t;
});
we("tables().nodes()", "table().node()", function () {
    return this.iterator(
        "table",
        function (e) {
            return e.nTable;
        },
        1
    );
});
we("tables().body()", "table().body()", function () {
    return this.iterator(
        "table",
        function (e) {
            return e.nTBody;
        },
        1
    );
});
we("tables().header()", "table().header()", function () {
    return this.iterator(
        "table",
        function (e) {
            return e.nTHead;
        },
        1
    );
});
we("tables().footer()", "table().footer()", function () {
    return this.iterator(
        "table",
        function (e) {
            return e.nTFoot;
        },
        1
    );
});
we("tables().containers()", "table().container()", function () {
    return this.iterator(
        "table",
        function (e) {
            return e.nTableWrapper;
        },
        1
    );
});
ae("draw()", function (e) {
    return this.iterator("table", function (t) {
        e === "page"
            ? Nt(t)
            : (typeof e == "string" && (e = e !== "full-hold"),
              Ot(t, e === !1));
    });
});
ae("page()", function (e) {
    return e === void 0
        ? this.page.info().page
        : this.iterator("table", function (t) {
              or(t, e);
          });
});
ae("page.info()", function (e) {
    if (this.context.length !== 0) {
        var t = this.context[0],
            r = t._iDisplayStart,
            a = t.oFeatures.bPaginate ? t._iDisplayLength : -1,
            s = t.fnRecordsDisplay(),
            u = a === -1;
        return {
            page: u ? 0 : Math.floor(r / a),
            pages: u ? 1 : Math.ceil(s / a),
            start: r,
            end: t.fnDisplayEnd(),
            length: a,
            recordsTotal: t.fnRecordsTotal(),
            recordsDisplay: s,
            serverSide: Re(t) === "ssp",
        };
    }
});
ae("page.len()", function (e) {
    return e === void 0
        ? this.context.length !== 0
            ? this.context[0]._iDisplayLength
            : void 0
        : this.iterator("table", function (t) {
              ea(t, e);
          });
});
var Yi = function (e, t, r) {
    if (r) {
        var a = new ce(e);
        a.one("draw", function () {
            r(a.ajax.json());
        });
    }
    if (Re(e) == "ssp") Ot(e, t);
    else {
        et(e, !0);
        var s = e.jqXHR;
        s && s.readyState !== 4 && s.abort(),
            ir(e, [], function (u) {
                rr(e);
                for (var c = Sn(e, u), h = 0, p = c.length; h < p; h++)
                    At(e, c[h]);
                Ot(e, t), et(e, !1);
            });
    }
};
ae("ajax.json()", function () {
    var e = this.context;
    if (e.length > 0) return e[0].json;
});
ae("ajax.params()", function () {
    var e = this.context;
    if (e.length > 0) return e[0].oAjaxData;
});
ae("ajax.reload()", function (e, t) {
    return this.iterator("table", function (r) {
        Yi(r, t === !1, e);
    });
});
ae("ajax.url()", function (e) {
    var t = this.context;
    return e === void 0
        ? t.length === 0
            ? void 0
            : ((t = t[0]),
              t.ajax
                  ? C.isPlainObject(t.ajax)
                      ? t.ajax.url
                      : t.ajax
                  : t.sAjaxSource)
        : this.iterator("table", function (r) {
              C.isPlainObject(r.ajax) ? (r.ajax.url = e) : (r.ajax = e);
          });
});
ae("ajax.url().load()", function (e, t) {
    return this.iterator("table", function (r) {
        Yi(r, t === !1, e);
    });
});
var la = function (e, t, r, a, s) {
        var u = [],
            c,
            h,
            p,
            g,
            y,
            x,
            w = typeof t;
        for (
            (!t || w === "string" || w === "function" || t.length === void 0) &&
                (t = [t]),
                p = 0,
                g = t.length;
            p < g;
            p++
        )
            for (
                h =
                    t[p] && t[p].split && !t[p].match(/[\[\(:]/)
                        ? t[p].split(",")
                        : [t[p]],
                    y = 0,
                    x = h.length;
                y < x;
                y++
            )
                (c = r(typeof h[y] == "string" ? h[y].trim() : h[y])),
                    c && c.length && (u = u.concat(c));
        var D = ke.selector[e];
        if (D.length) for (p = 0, g = D.length; p < g; p++) u = D[p](a, s, u);
        return er(u);
    },
    sa = function (e) {
        return (
            e || (e = {}),
            e.filter && e.search === void 0 && (e.search = e.filter),
            C.extend({ search: "none", order: "current", page: "all" }, e)
        );
    },
    ua = function (e) {
        for (var t = 0, r = e.length; t < r; t++)
            if (e[t].length > 0)
                return (
                    (e[0] = e[t]),
                    (e[0].length = 1),
                    (e.length = 1),
                    (e.context = [e.context[t]]),
                    e
                );
        return (e.length = 0), e;
    },
    sr = function (e, t) {
        var r,
            a,
            s,
            u = [],
            c = e.aiDisplay,
            h = e.aiDisplayMaster,
            p = t.search,
            g = t.order,
            y = t.page;
        if (Re(e) == "ssp") return p === "removed" ? [] : Jt(0, h.length);
        if (y == "current")
            for (r = e._iDisplayStart, a = e.fnDisplayEnd(); r < a; r++)
                u.push(c[r]);
        else if (g == "current" || g == "applied") {
            if (p == "none") u = h.slice();
            else if (p == "applied") u = c.slice();
            else if (p == "removed") {
                for (var x = {}, r = 0, a = c.length; r < a; r++)
                    x[c[r]] = null;
                u = C.map(h, function (w) {
                    return x.hasOwnProperty(w) ? null : w;
                });
            }
        } else if (g == "index" || g == "original")
            for (r = 0, a = e.aoData.length; r < a; r++)
                p == "none"
                    ? u.push(r)
                    : ((s = C.inArray(r, c)),
                      ((s === -1 && p == "removed") ||
                          (s >= 0 && p == "applied")) &&
                          u.push(r));
        return u;
    },
    Tl = function (e, t, r) {
        var a,
            s = function (u) {
                var c = vi(u),
                    h = e.aoData;
                if (c !== null && !r) return [c];
                if ((a || (a = sr(e, r)), c !== null && C.inArray(c, a) !== -1))
                    return [c];
                if (u == null || u === "") return a;
                if (typeof u == "function")
                    return C.map(a, function (D) {
                        var N = h[D];
                        return u(D, N._aData, N.nTr) ? D : null;
                    });
                if (u.nodeName) {
                    var p = u._DT_RowIndex,
                        g = u._DT_CellIndex;
                    if (p !== void 0) return h[p] && h[p].nTr === u ? [p] : [];
                    if (g)
                        return h[g.row] && h[g.row].nTr === u.parentNode
                            ? [g.row]
                            : [];
                    var y = C(u).closest("*[data-dt-row]");
                    return y.length ? [y.data("dt-row")] : [];
                }
                if (typeof u == "string" && u.charAt(0) === "#") {
                    var x = e.aIds[u.replace(/^#/, "")];
                    if (x !== void 0) return [x.idx];
                }
                var w = mi(_n(e.aoData, a, "nTr"));
                return C(w)
                    .filter(u)
                    .map(function () {
                        return this._DT_RowIndex;
                    })
                    .toArray();
            };
        return la("row", t, s, e, r);
    };
ae("rows()", function (e, t) {
    e === void 0 ? (e = "") : C.isPlainObject(e) && ((t = e), (e = "")),
        (t = sa(t));
    var r = this.iterator(
        "table",
        function (a) {
            return Tl(a, e, t);
        },
        1
    );
    return (r.selector.rows = e), (r.selector.opts = t), r;
});
ae("rows().nodes()", function () {
    return this.iterator(
        "row",
        function (e, t) {
            return e.aoData[t].nTr || void 0;
        },
        1
    );
});
ae("rows().data()", function () {
    return this.iterator(
        !0,
        "rows",
        function (e, t) {
            return _n(e.aoData, t, "_aData");
        },
        1
    );
});
we("rows().cache()", "row().cache()", function (e) {
    return this.iterator(
        "row",
        function (t, r) {
            var a = t.aoData[r];
            return e === "search" ? a._aFilterData : a._aSortData;
        },
        1
    );
});
we("rows().invalidate()", "row().invalidate()", function (e) {
    return this.iterator("row", function (t, r) {
        Tn(t, r, e);
    });
});
we("rows().indexes()", "row().index()", function () {
    return this.iterator(
        "row",
        function (e, t) {
            return t;
        },
        1
    );
});
we("rows().ids()", "row().id()", function (e) {
    for (var t = [], r = this.context, a = 0, s = r.length; a < s; a++)
        for (var u = 0, c = this[a].length; u < c; u++) {
            var h = r[a].rowIdFn(r[a].aoData[this[a][u]]._aData);
            t.push((e === !0 ? "#" : "") + h);
        }
    return new ce(r, t);
});
we("rows().remove()", "row().remove()", function () {
    var e = this;
    return (
        this.iterator("row", function (t, r, a) {
            var s = t.aoData,
                u = s[r],
                c,
                h,
                p,
                g,
                y,
                x;
            for (s.splice(r, 1), c = 0, h = s.length; c < h; c++)
                if (
                    ((y = s[c]),
                    (x = y.anCells),
                    y.nTr !== null && (y.nTr._DT_RowIndex = c),
                    x !== null)
                )
                    for (p = 0, g = x.length; p < g; p++)
                        x[p]._DT_CellIndex.row = c;
            Vn(t.aiDisplayMaster, r),
                Vn(t.aiDisplay, r),
                Vn(e[a], r, !1),
                t._iRecordsDisplay > 0 && t._iRecordsDisplay--,
                ia(t);
            var w = t.rowIdFn(u._aData);
            w !== void 0 && delete t.aIds[w];
        }),
        this.iterator("table", function (t) {
            for (var r = 0, a = t.aoData.length; r < a; r++)
                t.aoData[r].idx = r;
        }),
        this
    );
});
ae("rows.add()", function (e) {
    var t = this.iterator(
            "table",
            function (a) {
                var s,
                    u,
                    c,
                    h = [];
                for (u = 0, c = e.length; u < c; u++)
                    (s = e[u]),
                        s.nodeName && s.nodeName.toUpperCase() === "TR"
                            ? h.push(nr(a, s)[0])
                            : h.push(At(a, s));
                return h;
            },
            1
        ),
        r = this.rows(-1);
    return r.pop(), C.merge(r, t), r;
});
ae("row()", function (e, t) {
    return ua(this.rows(e, t));
});
ae("row().data()", function (e) {
    var t = this.context;
    if (e === void 0)
        return t.length && this.length ? t[0].aoData[this[0]]._aData : void 0;
    var r = t[0].aoData[this[0]];
    return (
        (r._aData = e),
        Array.isArray(e) && r.nTr && r.nTr.id && St(t[0].rowId)(e, r.nTr.id),
        Tn(t[0], this[0], "data"),
        this
    );
});
ae("row().node()", function () {
    var e = this.context;
    return (e.length && this.length && e[0].aoData[this[0]].nTr) || null;
});
ae("row.add()", function (e) {
    e instanceof C && e.length && (e = e[0]);
    var t = this.iterator("table", function (r) {
        return e.nodeName && e.nodeName.toUpperCase() === "TR"
            ? nr(r, e)[0]
            : At(r, e);
    });
    return this.row(t[0]);
});
C(document).on("plugin-init.dt", function (e, t) {
    var r = new ce(t),
        a = "on-plugin-init",
        s = "stateSaveParams." + a,
        u = "destroy. " + a;
    r.on(s, function (h, p, g) {
        for (var y = p.rowIdFn, x = p.aoData, w = [], D = 0; D < x.length; D++)
            x[D]._detailsShow && w.push("#" + y(x[D]._aData));
        g.childRows = w;
    }),
        r.on(u, function () {
            r.off(s + " " + u);
        });
    var c = r.state.loaded();
    c &&
        c.childRows &&
        r
            .rows(
                C.map(c.childRows, function (h) {
                    return h.replace(/:/g, "\\:");
                })
            )
            .every(function () {
                pe(t, null, "requestChild", [this]);
            });
});
var Sl = function (e, t, r, a) {
        var s = [],
            u = function (c, h) {
                if (Array.isArray(c) || c instanceof C) {
                    for (var p = 0, g = c.length; p < g; p++) u(c[p], h);
                    return;
                }
                if (c.nodeName && c.nodeName.toLowerCase() === "tr") s.push(c);
                else {
                    var y = C("<tr><td></td></tr>").addClass(h);
                    (C("td", y).addClass(h).html(c)[0].colSpan = Yt(e)),
                        s.push(y[0]);
                }
            };
        u(r, a),
            t._details && t._details.detach(),
            (t._details = C(s)),
            t._detailsShow && t._details.insertAfter(t.nTr);
    },
    zi = j.util.throttle(function (e) {
        Nn(e[0]);
    }, 500),
    fa = function (e, t) {
        var r = e.context;
        if (r.length) {
            var a = r[0].aoData[t !== void 0 ? t : e[0]];
            a &&
                a._details &&
                (a._details.remove(),
                (a._detailsShow = void 0),
                (a._details = void 0),
                C(a.nTr).removeClass("dt-hasChild"),
                zi(r));
        }
    },
    Qi = function (e, t) {
        var r = e.context;
        if (r.length && e.length) {
            var a = r[0].aoData[e[0]];
            a._details &&
                ((a._detailsShow = t),
                t
                    ? (a._details.insertAfter(a.nTr),
                      C(a.nTr).addClass("dt-hasChild"))
                    : (a._details.detach(),
                      C(a.nTr).removeClass("dt-hasChild")),
                pe(r[0], null, "childRow", [t, e.row(e[0])]),
                Al(r[0]),
                zi(r));
        }
    },
    Al = function (e) {
        var t = new ce(e),
            r = ".dt.DT_details",
            a = "draw" + r,
            s = "column-sizing" + r,
            u = "destroy" + r,
            c = e.aoData;
        t.off(a + " " + s + " " + u),
            tt(c, "_details").length > 0 &&
                (t.on(a, function (h, p) {
                    e === p &&
                        t
                            .rows({ page: "current" })
                            .eq(0)
                            .each(function (g) {
                                var y = c[g];
                                y._detailsShow && y._details.insertAfter(y.nTr);
                            });
                }),
                t.on(s, function (h, p, g, y) {
                    if (e === p)
                        for (var x, w = Yt(p), D = 0, N = c.length; D < N; D++)
                            (x = c[D]),
                                x._details &&
                                    x._details
                                        .children("td[colspan]")
                                        .attr("colspan", w);
                }),
                t.on(u, function (h, p) {
                    if (e === p)
                        for (var g = 0, y = c.length; g < y; g++)
                            c[g]._details && fa(t, g);
                }));
    },
    Nl = "",
    Ln = Nl + "row().child",
    ur = Ln + "()";
ae(ur, function (e, t) {
    var r = this.context;
    return e === void 0
        ? r.length && this.length
            ? r[0].aoData[this[0]]._details
            : void 0
        : (e === !0
              ? this.child.show()
              : e === !1
              ? fa(this)
              : r.length && this.length && Sl(r[0], r[0].aoData[this[0]], e, t),
          this);
});
ae([Ln + ".show()", ur + ".show()"], function (e) {
    return Qi(this, !0), this;
});
ae([Ln + ".hide()", ur + ".hide()"], function () {
    return Qi(this, !1), this;
});
ae([Ln + ".remove()", ur + ".remove()"], function () {
    return fa(this), this;
});
ae(Ln + ".isShown()", function () {
    var e = this.context;
    return (e.length && this.length && e[0].aoData[this[0]]._detailsShow) || !1;
});
var Ll = /^([^:]+):(name|visIdx|visible)$/,
    Zi = function (e, t, r, a, s) {
        for (var u = [], c = 0, h = s.length; c < h; c++)
            u.push(Ge(e, s[c], t));
        return u;
    },
    kl = function (e, t, r) {
        var a = e.aoColumns,
            s = tt(a, "sName"),
            u = tt(a, "nTh"),
            c = function (h) {
                var p = vi(h);
                if (h === "") return Jt(a.length);
                if (p !== null) return [p >= 0 ? p : a.length + p];
                if (typeof h == "function") {
                    var g = sr(e, r);
                    return C.map(a, function (P, W) {
                        return h(W, Zi(e, W, 0, 0, g), u[W]) ? W : null;
                    });
                }
                var y = typeof h == "string" ? h.match(Ll) : "";
                if (y)
                    switch (y[2]) {
                        case "visIdx":
                        case "visible":
                            var x = parseInt(y[1], 10);
                            if (x < 0) {
                                var w = C.map(a, function (P, W) {
                                    return P.bVisible ? W : null;
                                });
                                return [w[w.length + x]];
                            }
                            return [Cn(e, x)];
                        case "name":
                            return C.map(s, function (P, W) {
                                return P === y[1] ? W : null;
                            });
                        default:
                            return [];
                    }
                if (h.nodeName && h._DT_CellIndex)
                    return [h._DT_CellIndex.column];
                var D = C(u)
                    .filter(h)
                    .map(function () {
                        return C.inArray(this, u);
                    })
                    .toArray();
                if (D.length || !h.nodeName) return D;
                var N = C(h).closest("*[data-dt-column]");
                return N.length ? [N.data("dt-column")] : [];
            };
        return la("column", t, c, e, r);
    },
    El = function (e, t, r) {
        var a = e.aoColumns,
            s = a[t],
            u = e.aoData,
            c,
            h,
            p,
            g;
        if (r === void 0) return s.bVisible;
        if (s.bVisible !== r) {
            if (r) {
                var y = C.inArray(!0, tt(a, "bVisible"), t + 1);
                for (h = 0, p = u.length; h < p; h++)
                    (g = u[h].nTr),
                        (c = u[h].anCells),
                        g && g.insertBefore(c[t], c[y] || null);
            } else C(tt(e.aoData, "anCells", t)).detach();
            s.bVisible = r;
        }
    };
ae("columns()", function (e, t) {
    e === void 0 ? (e = "") : C.isPlainObject(e) && ((t = e), (e = "")),
        (t = sa(t));
    var r = this.iterator(
        "table",
        function (a) {
            return kl(a, e, t);
        },
        1
    );
    return (r.selector.cols = e), (r.selector.opts = t), r;
});
we("columns().header()", "column().header()", function (e, t) {
    return this.iterator(
        "column",
        function (r, a) {
            return r.aoColumns[a].nTh;
        },
        1
    );
});
we("columns().footer()", "column().footer()", function (e, t) {
    return this.iterator(
        "column",
        function (r, a) {
            return r.aoColumns[a].nTf;
        },
        1
    );
});
we("columns().data()", "column().data()", function () {
    return this.iterator("column-rows", Zi, 1);
});
we("columns().dataSrc()", "column().dataSrc()", function () {
    return this.iterator(
        "column",
        function (e, t) {
            return e.aoColumns[t].mData;
        },
        1
    );
});
we("columns().cache()", "column().cache()", function (e) {
    return this.iterator(
        "column-rows",
        function (t, r, a, s, u) {
            return _n(
                t.aoData,
                u,
                e === "search" ? "_aFilterData" : "_aSortData",
                r
            );
        },
        1
    );
});
we("columns().nodes()", "column().nodes()", function () {
    return this.iterator(
        "column-rows",
        function (e, t, r, a, s) {
            return _n(e.aoData, s, "anCells", t);
        },
        1
    );
});
we("columns().visible()", "column().visible()", function (e, t) {
    var r = this,
        a = this.iterator("column", function (s, u) {
            if (e === void 0) return s.aoColumns[u].bVisible;
            El(s, u, e);
        });
    return (
        e !== void 0 &&
            this.iterator("table", function (s) {
                gn(s, s.aoHeader),
                    gn(s, s.aoFooter),
                    s.aiDisplay.length ||
                        C(s.nTBody).find("td[colspan]").attr("colspan", Yt(s)),
                    Nn(s),
                    r.iterator("column", function (u, c) {
                        pe(u, null, "column-visibility", [u, c, e, t]);
                    }),
                    (t === void 0 || t) && r.columns.adjust();
            }),
        a
    );
});
we("columns().indexes()", "column().index()", function (e) {
    return this.iterator(
        "column",
        function (t, r) {
            return e === "visible" ? Dn(t, r) : r;
        },
        1
    );
});
ae("columns.adjust()", function () {
    return this.iterator(
        "table",
        function (e) {
            wn(e);
        },
        1
    );
});
ae("column.index()", function (e, t) {
    if (this.context.length !== 0) {
        var r = this.context[0];
        if (e === "fromVisible" || e === "toData") return Cn(r, t);
        if (e === "fromData" || e === "toVisible") return Dn(r, t);
    }
});
ae("column()", function (e, t) {
    return ua(this.columns(e, t));
});
var Il = function (e, t, r) {
    var a = e.aoData,
        s = sr(e, r),
        u = mi(_n(a, s, "anCells")),
        c = C(gi([], u)),
        h,
        p = e.aoColumns.length,
        g,
        y,
        x,
        w,
        D,
        N,
        P = function (W) {
            var O = typeof W == "function";
            if (W == null || O) {
                for (g = [], y = 0, x = s.length; y < x; y++)
                    for (h = s[y], w = 0; w < p; w++)
                        (D = { row: h, column: w }),
                            O
                                ? ((N = a[h]),
                                  W(
                                      D,
                                      Ge(e, h, w),
                                      N.anCells ? N.anCells[w] : null
                                  ) && g.push(D))
                                : g.push(D);
                return g;
            }
            if (C.isPlainObject(W))
                return W.column !== void 0 &&
                    W.row !== void 0 &&
                    C.inArray(W.row, s) !== -1
                    ? [W]
                    : [];
            var k = c
                .filter(W)
                .map(function (J, K) {
                    return {
                        row: K._DT_CellIndex.row,
                        column: K._DT_CellIndex.column,
                    };
                })
                .toArray();
            return k.length || !W.nodeName
                ? k
                : ((N = C(W).closest("*[data-dt-row]")),
                  N.length
                      ? [{ row: N.data("dt-row"), column: N.data("dt-column") }]
                      : []);
        };
    return la("cell", t, P, e, r);
};
ae("cells()", function (e, t, r) {
    if (
        (C.isPlainObject(e) &&
            (e.row === void 0 ? ((r = e), (e = null)) : ((r = t), (t = null))),
        C.isPlainObject(t) && ((r = t), (t = null)),
        t == null)
    )
        return this.iterator("table", function (w) {
            return Il(w, e, sa(r));
        });
    var a = r ? { page: r.page, order: r.order, search: r.search } : {},
        s = this.columns(t, a),
        u = this.rows(e, a),
        c,
        h,
        p,
        g,
        y = this.iterator(
            "table",
            function (w, D) {
                var N = [];
                for (c = 0, h = u[D].length; c < h; c++)
                    for (p = 0, g = s[D].length; p < g; p++)
                        N.push({ row: u[D][c], column: s[D][p] });
                return N;
            },
            1
        ),
        x = r && r.selected ? this.cells(y, r) : y;
    return C.extend(x.selector, { cols: t, rows: e, opts: r }), x;
});
we("cells().nodes()", "cell().node()", function () {
    return this.iterator(
        "cell",
        function (e, t, r) {
            var a = e.aoData[t];
            return a && a.anCells ? a.anCells[r] : void 0;
        },
        1
    );
});
ae("cells().data()", function () {
    return this.iterator(
        "cell",
        function (e, t, r) {
            return Ge(e, t, r);
        },
        1
    );
});
we("cells().cache()", "cell().cache()", function (e) {
    return (
        (e = e === "search" ? "_aFilterData" : "_aSortData"),
        this.iterator(
            "cell",
            function (t, r, a) {
                return t.aoData[r][e][a];
            },
            1
        )
    );
});
we("cells().render()", "cell().render()", function (e) {
    return this.iterator(
        "cell",
        function (t, r, a) {
            return Ge(t, r, a, e);
        },
        1
    );
});
we("cells().indexes()", "cell().index()", function () {
    return this.iterator(
        "cell",
        function (e, t, r) {
            return { row: t, column: r, columnVisible: Dn(e, r) };
        },
        1
    );
});
we("cells().invalidate()", "cell().invalidate()", function (e) {
    return this.iterator("cell", function (t, r, a) {
        Tn(t, r, e, a);
    });
});
ae("cell()", function (e, t, r) {
    return ua(this.cells(e, t, r));
});
ae("cell().data()", function (e) {
    var t = this.context,
        r = this[0];
    return e === void 0
        ? t.length && r.length
            ? Ge(t[0], r[0].row, r[0].column)
            : void 0
        : (Ci(t[0], r[0].row, r[0].column, e),
          Tn(t[0], r[0].row, "data", r[0].column),
          this);
});
ae("order()", function (e, t) {
    var r = this.context;
    return e === void 0
        ? r.length !== 0
            ? r[0].aaSorting
            : void 0
        : (typeof e == "number"
              ? (e = [[e, t]])
              : e.length &&
                !Array.isArray(e[0]) &&
                (e = Array.prototype.slice.call(arguments)),
          this.iterator("table", function (a) {
              a.aaSorting = e.slice();
          }));
});
ae("order.listener()", function (e, t, r) {
    return this.iterator("table", function (a) {
        ra(a, e, t, r);
    });
});
ae("order.fixed()", function (e) {
    if (!e) {
        var t = this.context,
            r = t.length ? t[0].aaSortingFixed : void 0;
        return Array.isArray(r) ? { pre: r } : r;
    }
    return this.iterator("table", function (a) {
        a.aaSortingFixed = C.extend(!0, {}, e);
    });
});
ae(["columns().order()", "column().order()"], function (e) {
    var t = this;
    return this.iterator("table", function (r, a) {
        var s = [];
        C.each(t[a], function (u, c) {
            s.push([c, e]);
        }),
            (r.aaSorting = s);
    });
});
ae("search()", function (e, t, r, a) {
    var s = this.context;
    return e === void 0
        ? s.length !== 0
            ? s[0].oPreviousSearch.sSearch
            : void 0
        : this.iterator("table", function (u) {
              u.oFeatures.bFilter &&
                  An(
                      u,
                      C.extend({}, u.oPreviousSearch, {
                          sSearch: e + "",
                          bRegex: t === null ? !1 : t,
                          bSmart: r === null ? !0 : r,
                          bCaseInsensitive: a === null ? !0 : a,
                      }),
                      1
                  );
          });
});
we("columns().search()", "column().search()", function (e, t, r, a) {
    return this.iterator("column", function (s, u) {
        var c = s.aoPreSearchCols;
        if (e === void 0) return c[u].sSearch;
        s.oFeatures.bFilter &&
            (C.extend(c[u], {
                sSearch: e + "",
                bRegex: t === null ? !1 : t,
                bSmart: r === null ? !0 : r,
                bCaseInsensitive: a === null ? !0 : a,
            }),
            An(s, s.oPreviousSearch, 1));
    });
});
ae("state()", function () {
    return this.context.length ? this.context[0].oSavedState : null;
});
ae("state.clear()", function () {
    return this.iterator("table", function (e) {
        e.fnStateSaveCallback.call(e.oInstance, e, {});
    });
});
ae("state.loaded()", function () {
    return this.context.length ? this.context[0].oLoadedState : null;
});
ae("state.save()", function () {
    return this.iterator("table", function (e) {
        Nn(e);
    });
});
j.versionCheck = j.fnVersionCheck = function (e) {
    for (
        var t = j.version.split("."),
            r = e.split("."),
            a,
            s,
            u = 0,
            c = r.length;
        u < c;
        u++
    )
        if (
            ((a = parseInt(t[u], 10) || 0),
            (s = parseInt(r[u], 10) || 0),
            a !== s)
        )
            return a > s;
    return !0;
};
j.isDataTable = j.fnIsDataTable = function (e) {
    var t = C(e).get(0),
        r = !1;
    return e instanceof j.Api
        ? !0
        : (C.each(j.settings, function (a, s) {
              var u = s.nScrollHead ? C("table", s.nScrollHead)[0] : null,
                  c = s.nScrollFoot ? C("table", s.nScrollFoot)[0] : null;
              (s.nTable === t || u === t || c === t) && (r = !0);
          }),
          r);
};
j.tables = j.fnTables = function (e) {
    var t = !1;
    C.isPlainObject(e) && ((t = e.api), (e = e.visible));
    var r = C.map(j.settings, function (a) {
        if (!e || (e && C(a.nTable).is(":visible"))) return a.nTable;
    });
    return t ? new ce(r) : r;
};
j.camelToHungarian = wt;
ae("$()", function (e, t) {
    var r = this.rows(t).nodes(),
        a = C(r);
    return C([].concat(a.filter(e).toArray(), a.find(e).toArray()));
});
C.each(["on", "one", "off"], function (e, t) {
    ae(t + "()", function () {
        var r = Array.prototype.slice.call(arguments);
        r[0] = C.map(r[0].split(/\s/), function (s) {
            return s.match(/\.dt\b/) ? s : s + ".dt";
        }).join(" ");
        var a = C(this.tables().nodes());
        return a[t].apply(a, r), this;
    });
});
ae("clear()", function () {
    return this.iterator("table", function (e) {
        rr(e);
    });
});
ae("settings()", function () {
    return new ce(this.context, this.context);
});
ae("init()", function () {
    var e = this.context;
    return e.length ? e[0].oInit : null;
});
ae("data()", function () {
    return this.iterator("table", function (e) {
        return tt(e.aoData, "_aData");
    }).flatten();
});
ae("destroy()", function (e) {
    return (
        (e = e || !1),
        this.iterator("table", function (t) {
            var r = t.oClasses,
                a = t.nTable,
                s = t.nTBody,
                u = t.nTHead,
                c = t.nTFoot,
                h = C(a),
                p = C(s),
                g = C(t.nTableWrapper),
                y = C.map(t.aoData, function (P) {
                    return P.nTr;
                }),
                x;
            (t.bDestroying = !0),
                pe(t, "aoDestroyCallback", "destroy", [t]),
                e || new ce(t).columns().visible(!0),
                g.off(".DT").find(":not(tbody *)").off(".DT"),
                C(window).off(".DT-" + t.sInstance),
                a != u.parentNode &&
                    (h.children("thead").detach(), h.append(u)),
                c &&
                    a != c.parentNode &&
                    (h.children("tfoot").detach(), h.append(c)),
                (t.aaSorting = []),
                (t.aaSortingFixed = []),
                zn(t),
                C(y).removeClass(t.asStripeClasses.join(" ")),
                C("th, td", u).removeClass(
                    r.sSortable +
                        " " +
                        r.sSortableAsc +
                        " " +
                        r.sSortableDesc +
                        " " +
                        r.sSortableNone
                ),
                p.children().detach(),
                p.append(y);
            var w = t.nTableWrapper.parentNode,
                D = e ? "remove" : "detach";
            h[D](),
                g[D](),
                !e &&
                    w &&
                    (w.insertBefore(a, t.nTableReinsertBefore),
                    h.css("width", t.sDestroyWidth).removeClass(r.sTable),
                    (x = t.asDestroyStripes.length),
                    x &&
                        p.children().each(function (P) {
                            C(this).addClass(t.asDestroyStripes[P % x]);
                        }));
            var N = C.inArray(t, j.settings);
            N !== -1 && j.settings.splice(N, 1);
        })
    );
});
C.each(["column", "row", "cell"], function (e, t) {
    ae(t + "s().every()", function (r) {
        var a = this.selector.opts,
            s = this;
        return this.iterator(t, function (u, c, h, p, g) {
            r.call(
                s[t](c, t === "cell" ? h : a, t === "cell" ? a : void 0),
                c,
                h,
                p,
                g
            );
        });
    });
});
ae("i18n()", function (e, t, r) {
    var a = this.context[0],
        s = Kt(e)(a.oLanguage);
    return (
        s === void 0 && (s = t),
        r !== void 0 &&
            C.isPlainObject(s) &&
            (s = s[r] !== void 0 ? s[r] : s._),
        s.replace("%d", r)
    );
});
j.version = "1.13.2";
j.settings = [];
j.models = {};
j.models.oSearch = {
    bCaseInsensitive: !0,
    sSearch: "",
    bRegex: !1,
    bSmart: !0,
    return: !1,
};
j.models.oRow = {
    nTr: null,
    anCells: null,
    _aData: [],
    _aSortData: null,
    _aFilterData: null,
    _sFilterRow: null,
    _sRowStripe: "",
    src: null,
    idx: -1,
};
j.models.oColumn = {
    idx: null,
    aDataSort: null,
    asSorting: null,
    bSearchable: null,
    bSortable: null,
    bVisible: null,
    _sManualType: null,
    _bAttrSrc: !1,
    fnCreatedCell: null,
    fnGetData: null,
    fnSetData: null,
    mData: null,
    mRender: null,
    nTh: null,
    nTf: null,
    sClass: null,
    sContentPadding: null,
    sDefaultContent: null,
    sName: null,
    sSortDataType: "std",
    sSortingClass: null,
    sSortingClassJUI: null,
    sTitle: null,
    sType: null,
    sWidth: null,
    sWidthOrig: null,
};
j.defaults = {
    aaData: null,
    aaSorting: [[0, "asc"]],
    aaSortingFixed: [],
    ajax: null,
    aLengthMenu: [10, 25, 50, 100],
    aoColumns: null,
    aoColumnDefs: null,
    aoSearchCols: [],
    asStripeClasses: null,
    bAutoWidth: !0,
    bDeferRender: !1,
    bDestroy: !1,
    bFilter: !0,
    bInfo: !0,
    bLengthChange: !0,
    bPaginate: !0,
    bProcessing: !1,
    bRetrieve: !1,
    bScrollCollapse: !1,
    bServerSide: !1,
    bSort: !0,
    bSortMulti: !0,
    bSortCellsTop: !1,
    bSortClasses: !0,
    bStateSave: !1,
    fnCreatedRow: null,
    fnDrawCallback: null,
    fnFooterCallback: null,
    fnFormatNumber: function (e) {
        return e
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
    },
    fnHeaderCallback: null,
    fnInfoCallback: null,
    fnInitComplete: null,
    fnPreDrawCallback: null,
    fnRowCallback: null,
    fnServerData: null,
    fnServerParams: null,
    fnStateLoadCallback: function (e) {
        try {
            return JSON.parse(
                (e.iStateDuration === -1
                    ? sessionStorage
                    : localStorage
                ).getItem("DataTables_" + e.sInstance + "_" + location.pathname)
            );
        } catch {
            return {};
        }
    },
    fnStateLoadParams: null,
    fnStateLoaded: null,
    fnStateSaveCallback: function (e, t) {
        try {
            (e.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
                "DataTables_" + e.sInstance + "_" + location.pathname,
                JSON.stringify(t)
            );
        } catch {}
    },
    fnStateSaveParams: null,
    iStateDuration: 7200,
    iDeferLoading: null,
    iDisplayLength: 10,
    iDisplayStart: 0,
    iTabIndex: 0,
    oClasses: {},
    oLanguage: {
        oAria: {
            sSortAscending: ": activate to sort column ascending",
            sSortDescending: ": activate to sort column descending",
        },
        oPaginate: {
            sFirst: "First",
            sLast: "Last",
            sNext: "Next",
            sPrevious: "Previous",
        },
        sEmptyTable: "No data available in table",
        sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
        sInfoEmpty: "Showing 0 to 0 of 0 entries",
        sInfoFiltered: "(filtered from _MAX_ total entries)",
        sInfoPostFix: "",
        sDecimal: "",
        sThousands: ",",
        sLengthMenu: "Show _MENU_ entries",
        sLoadingRecords: "Loading...",
        sProcessing: "",
        sSearch: "Search:",
        sSearchPlaceholder: "",
        sUrl: "",
        sZeroRecords: "No matching records found",
    },
    oSearch: C.extend({}, j.models.oSearch),
    sAjaxDataProp: "data",
    sAjaxSource: null,
    sDom: "lfrtip",
    searchDelay: null,
    sPaginationType: "simple_numbers",
    sScrollX: "",
    sScrollXInner: "",
    sScrollY: "",
    sServerMethod: "GET",
    renderer: null,
    rowId: "DT_RowId",
};
xn(j.defaults);
j.defaults.column = {
    aDataSort: null,
    iDataSort: -1,
    asSorting: ["asc", "desc"],
    bSearchable: !0,
    bSortable: !0,
    bVisible: !0,
    fnCreatedCell: null,
    mData: null,
    mRender: null,
    sCellType: "td",
    sClass: "",
    sContentPadding: "",
    sDefaultContent: null,
    sName: "",
    sSortDataType: "std",
    sTitle: null,
    sType: null,
    sWidth: null,
};
xn(j.defaults.column);
j.models.oSettings = {
    oFeatures: {
        bAutoWidth: null,
        bDeferRender: null,
        bFilter: null,
        bInfo: null,
        bLengthChange: null,
        bPaginate: null,
        bProcessing: null,
        bServerSide: null,
        bSort: null,
        bSortMulti: null,
        bSortClasses: null,
        bStateSave: null,
    },
    oScroll: {
        bCollapse: null,
        iBarWidth: 0,
        sX: null,
        sXInner: null,
        sY: null,
    },
    oLanguage: { fnInfoCallback: null },
    oBrowser: {
        bScrollOversize: !1,
        bScrollbarLeft: !1,
        bBounding: !1,
        barWidth: 0,
    },
    ajax: null,
    aanFeatures: [],
    aoData: [],
    aiDisplay: [],
    aiDisplayMaster: [],
    aIds: {},
    aoColumns: [],
    aoHeader: [],
    aoFooter: [],
    oPreviousSearch: {},
    aoPreSearchCols: [],
    aaSorting: null,
    aaSortingFixed: [],
    asStripeClasses: null,
    asDestroyStripes: [],
    sDestroyWidth: 0,
    aoRowCallback: [],
    aoHeaderCallback: [],
    aoFooterCallback: [],
    aoDrawCallback: [],
    aoRowCreatedCallback: [],
    aoPreDrawCallback: [],
    aoInitComplete: [],
    aoStateSaveParams: [],
    aoStateLoadParams: [],
    aoStateLoaded: [],
    sTableId: "",
    nTable: null,
    nTHead: null,
    nTFoot: null,
    nTBody: null,
    nTableWrapper: null,
    bDeferLoading: !1,
    bInitialised: !1,
    aoOpenRows: [],
    sDom: null,
    searchDelay: null,
    sPaginationType: "two_button",
    iStateDuration: 0,
    aoStateSave: [],
    aoStateLoad: [],
    oSavedState: null,
    oLoadedState: null,
    sAjaxSource: null,
    sAjaxDataProp: null,
    jqXHR: null,
    json: void 0,
    oAjaxData: void 0,
    fnServerData: null,
    aoServerParams: [],
    sServerMethod: null,
    fnFormatNumber: null,
    aLengthMenu: null,
    iDraw: 0,
    bDrawing: !1,
    iDrawError: -1,
    _iDisplayLength: 10,
    _iDisplayStart: 0,
    _iRecordsTotal: 0,
    _iRecordsDisplay: 0,
    oClasses: {},
    bFiltered: !1,
    bSorted: !1,
    bSortCellsTop: null,
    oInit: null,
    aoDestroyCallback: [],
    fnRecordsTotal: function () {
        return Re(this) == "ssp"
            ? this._iRecordsTotal * 1
            : this.aiDisplayMaster.length;
    },
    fnRecordsDisplay: function () {
        return Re(this) == "ssp"
            ? this._iRecordsDisplay * 1
            : this.aiDisplay.length;
    },
    fnDisplayEnd: function () {
        var e = this._iDisplayLength,
            t = this._iDisplayStart,
            r = t + e,
            a = this.aiDisplay.length,
            s = this.oFeatures,
            u = s.bPaginate;
        return s.bServerSide
            ? u === !1 || e === -1
                ? t + a
                : Math.min(t + e, this._iRecordsDisplay)
            : !u || r > a || e === -1
            ? a
            : r;
    },
    oInstance: null,
    sInstance: null,
    iTabIndex: 0,
    nScrollHead: null,
    nScrollFoot: null,
    aLastSort: [],
    oPlugins: {},
    rowIdFn: null,
    rowId: null,
};
j.ext = ke = {
    buttons: {},
    classes: {},
    builder: "-source-",
    errMode: "alert",
    feature: [],
    search: [],
    selector: { cell: [], column: [], row: [] },
    internal: {},
    legacy: { ajax: null },
    pager: {},
    renderer: { pageButton: {}, header: {} },
    order: {},
    type: { detect: [], search: {}, order: {} },
    _unique: 0,
    fnVersionCheck: j.fnVersionCheck,
    iApiIndex: 0,
    oJUIClasses: {},
    sVersion: j.version,
};
C.extend(ke, {
    afnFiltering: ke.search,
    aTypes: ke.type.detect,
    ofnSearch: ke.type.search,
    oSort: ke.type.order,
    afnSortData: ke.order,
    aoFeatures: ke.feature,
    oApi: ke.internal,
    oStdClasses: ke.classes,
    oPagination: ke.pager,
});
C.extend(j.ext.classes, {
    sTable: "dataTable",
    sNoFooter: "no-footer",
    sPageButton: "paginate_button",
    sPageButtonActive: "current",
    sPageButtonDisabled: "disabled",
    sStripeOdd: "odd",
    sStripeEven: "even",
    sRowEmpty: "dataTables_empty",
    sWrapper: "dataTables_wrapper",
    sFilter: "dataTables_filter",
    sInfo: "dataTables_info",
    sPaging: "dataTables_paginate paging_",
    sLength: "dataTables_length",
    sProcessing: "dataTables_processing",
    sSortAsc: "sorting_asc",
    sSortDesc: "sorting_desc",
    sSortable: "sorting",
    sSortableAsc: "sorting_desc_disabled",
    sSortableDesc: "sorting_asc_disabled",
    sSortableNone: "sorting_disabled",
    sSortColumn: "sorting_",
    sFilterInput: "",
    sLengthSelect: "",
    sScrollWrapper: "dataTables_scroll",
    sScrollHead: "dataTables_scrollHead",
    sScrollHeadInner: "dataTables_scrollHeadInner",
    sScrollBody: "dataTables_scrollBody",
    sScrollFoot: "dataTables_scrollFoot",
    sScrollFootInner: "dataTables_scrollFootInner",
    sHeaderTH: "",
    sFooterTH: "",
    sSortJUIAsc: "",
    sSortJUIDesc: "",
    sSortJUI: "",
    sSortJUIAscAllowed: "",
    sSortJUIDescAllowed: "",
    sSortJUIWrapper: "",
    sSortIcon: "",
    sJUIHeader: "",
    sJUIFooter: "",
});
var eo = j.ext.pager;
function pn(e, t) {
    var r = [],
        a = eo.numbers_length,
        s = Math.floor(a / 2);
    return (
        t <= a
            ? (r = Jt(0, t))
            : e <= s
            ? ((r = Jt(0, a - 2)), r.push("ellipsis"), r.push(t - 1))
            : e >= t - 1 - s
            ? ((r = Jt(t - (a - 2), t)),
              r.splice(0, 0, "ellipsis"),
              r.splice(0, 0, 0))
            : ((r = Jt(e - s + 2, e + s - 1)),
              r.push("ellipsis"),
              r.push(t - 1),
              r.splice(0, 0, "ellipsis"),
              r.splice(0, 0, 0)),
        (r.DT_el = "span"),
        r
    );
}
C.extend(eo, {
    simple: function (e, t) {
        return ["previous", "next"];
    },
    full: function (e, t) {
        return ["first", "previous", "next", "last"];
    },
    numbers: function (e, t) {
        return [pn(e, t)];
    },
    simple_numbers: function (e, t) {
        return ["previous", pn(e, t), "next"];
    },
    full_numbers: function (e, t) {
        return ["first", "previous", pn(e, t), "next", "last"];
    },
    first_last_numbers: function (e, t) {
        return ["first", pn(e, t), "last"];
    },
    _numbers: pn,
    numbers_length: 7,
});
C.extend(!0, j.ext.renderer, {
    pageButton: {
        _: function (e, t, r, a, s, u) {
            var c = e.oClasses,
                h = e.oLanguage.oPaginate,
                p = e.oLanguage.oAria.paginate || {},
                g,
                y,
                x = function (D, N) {
                    var P,
                        W,
                        O,
                        k,
                        J,
                        K = c.sPageButtonDisabled,
                        oe = function (ue) {
                            or(e, ue.data.action, !0);
                        };
                    for (P = 0, W = N.length; P < W; P++)
                        if (((k = N[P]), Array.isArray(k))) {
                            var d = C("<" + (k.DT_el || "div") + "/>").appendTo(
                                D
                            );
                            x(d, k);
                        } else {
                            switch (
                                ((g = null), (y = k), (J = e.iTabIndex), k)
                            ) {
                                case "ellipsis":
                                    D.append(
                                        '<span class="ellipsis">&#x2026;</span>'
                                    );
                                    break;
                                case "first":
                                    (g = h.sFirst),
                                        s === 0 && ((J = -1), (y += " " + K));
                                    break;
                                case "previous":
                                    (g = h.sPrevious),
                                        s === 0 && ((J = -1), (y += " " + K));
                                    break;
                                case "next":
                                    (g = h.sNext),
                                        (u === 0 || s === u - 1) &&
                                            ((J = -1), (y += " " + K));
                                    break;
                                case "last":
                                    (g = h.sLast),
                                        (u === 0 || s === u - 1) &&
                                            ((J = -1), (y += " " + K));
                                    break;
                                default:
                                    (g = e.fnFormatNumber(k + 1)),
                                        (y =
                                            s === k ? c.sPageButtonActive : "");
                                    break;
                            }
                            if (g !== null) {
                                var Z = e.oInit.pagingTag || "a",
                                    Y = y.indexOf(K) !== -1;
                                (O = C("<" + Z + ">", {
                                    class: c.sPageButton + " " + y,
                                    "aria-controls": e.sTableId,
                                    "aria-disabled": Y ? "true" : null,
                                    "aria-label": p[k],
                                    "aria-role": "link",
                                    "aria-current":
                                        y === c.sPageButtonActive
                                            ? "page"
                                            : null,
                                    "data-dt-idx": k,
                                    tabindex: J,
                                    id:
                                        r === 0 && typeof k == "string"
                                            ? e.sTableId + "_" + k
                                            : null,
                                })
                                    .html(g)
                                    .appendTo(D)),
                                    aa(O, { action: k }, oe);
                            }
                        }
                },
                w;
            try {
                w = C(t).find(document.activeElement).data("dt-idx");
            } catch {}
            x(C(t).empty(), a),
                w !== void 0 &&
                    C(t)
                        .find("[data-dt-idx=" + w + "]")
                        .trigger("focus");
        },
    },
});
C.extend(j.ext.type.detect, [
    function (e, t) {
        var r = t.oLanguage.sDecimal;
        return Mr(e, r) ? "num" + r : null;
    },
    function (e, t) {
        if (e && !(e instanceof Date) && !pl.test(e)) return null;
        var r = Date.parse(e);
        return (r !== null && !isNaN(r)) || pt(e) ? "date" : null;
    },
    function (e, t) {
        var r = t.oLanguage.sDecimal;
        return Mr(e, r, !0) ? "num-fmt" + r : null;
    },
    function (e, t) {
        var r = t.oLanguage.sDecimal;
        return ai(e, r) ? "html-num" + r : null;
    },
    function (e, t) {
        var r = t.oLanguage.sDecimal;
        return ai(e, r, !0) ? "html-num-fmt" + r : null;
    },
    function (e, t) {
        return pt(e) || (typeof e == "string" && e.indexOf("<") !== -1)
            ? "html"
            : null;
    },
]);
C.extend(j.ext.type.search, {
    html: function (e) {
        return pt(e)
            ? e
            : typeof e == "string"
            ? e.replace(ri, " ").replace(Jn, "")
            : "";
    },
    string: function (e) {
        return pt(e) ? e : typeof e == "string" ? e.replace(ri, " ") : e;
    },
});
var Un = function (e, t, r, a) {
    if (e !== 0 && (!e || e === "-")) return -1 / 0;
    let s = typeof e;
    return s === "number" || s === "bigint"
        ? e
        : (t && (e = bi(e, t)),
          e.replace &&
              (r && (e = e.replace(r, "")), a && (e = e.replace(a, ""))),
          e * 1);
};
function Xr(e) {
    C.each(
        {
            num: function (t) {
                return Un(t, e);
            },
            "num-fmt": function (t) {
                return Un(t, e, Or);
            },
            "html-num": function (t) {
                return Un(t, e, Jn);
            },
            "html-num-fmt": function (t) {
                return Un(t, e, Jn, Or);
            },
        },
        function (t, r) {
            (ke.type.order[t + e + "-pre"] = r),
                t.match(/^html\-/) &&
                    (ke.type.search[t + e] = ke.type.search.html);
        }
    );
}
C.extend(ke.type.order, {
    "date-pre": function (e) {
        var t = Date.parse(e);
        return isNaN(t) ? -1 / 0 : t;
    },
    "html-pre": function (e) {
        return pt(e)
            ? ""
            : e.replace
            ? e.replace(/<.*?>/g, "").toLowerCase()
            : e + "";
    },
    "string-pre": function (e) {
        return pt(e)
            ? ""
            : typeof e == "string"
            ? e.toLowerCase()
            : e.toString
            ? e.toString()
            : "";
    },
    "string-asc": function (e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
    },
    "string-desc": function (e, t) {
        return e < t ? 1 : e > t ? -1 : 0;
    },
});
Xr("");
C.extend(!0, j.ext.renderer, {
    header: {
        _: function (e, t, r, a) {
            C(e.nTable).on("order.dt.DT", function (s, u, c, h) {
                if (e === u) {
                    var p = r.idx;
                    t.removeClass(a.sSortAsc + " " + a.sSortDesc).addClass(
                        h[p] == "asc"
                            ? a.sSortAsc
                            : h[p] == "desc"
                            ? a.sSortDesc
                            : r.sSortingClass
                    );
                }
            });
        },
        jqueryui: function (e, t, r, a) {
            C("<div/>")
                .addClass(a.sSortJUIWrapper)
                .append(t.contents())
                .append(
                    C("<span/>").addClass(
                        a.sSortIcon + " " + r.sSortingClassJUI
                    )
                )
                .appendTo(t),
                C(e.nTable).on("order.dt.DT", function (s, u, c, h) {
                    if (e === u) {
                        var p = r.idx;
                        t
                            .removeClass(a.sSortAsc + " " + a.sSortDesc)
                            .addClass(
                                h[p] == "asc"
                                    ? a.sSortAsc
                                    : h[p] == "desc"
                                    ? a.sSortDesc
                                    : r.sSortingClass
                            ),
                            t
                                .find("span." + a.sSortIcon)
                                .removeClass(
                                    a.sSortJUIAsc +
                                        " " +
                                        a.sSortJUIDesc +
                                        " " +
                                        a.sSortJUI +
                                        " " +
                                        a.sSortJUIAscAllowed +
                                        " " +
                                        a.sSortJUIDescAllowed
                                )
                                .addClass(
                                    h[p] == "asc"
                                        ? a.sSortJUIAsc
                                        : h[p] == "desc"
                                        ? a.sSortJUIDesc
                                        : r.sSortingClassJUI
                                );
                    }
                });
        },
    },
});
var Gn = function (e) {
    return (
        Array.isArray(e) && (e = e.join(",")),
        typeof e == "string"
            ? e
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
            : e
    );
};
function ui(e, t, r, a, s) {
    return window.moment ? e[t](s) : window.luxon ? e[r](s) : a ? e[a](s) : e;
}
var fi = !1;
function Zn(e, t, r) {
    var a;
    if (window.moment) {
        if (((a = window.moment.utc(e, t, r, !0)), !a.isValid())) return null;
    } else if (window.luxon) {
        if (
            ((a =
                t && typeof e == "string"
                    ? window.luxon.DateTime.fromFormat(e, t)
                    : window.luxon.DateTime.fromISO(e)),
            !a.isValid)
        )
            return null;
        a.setLocale(r);
    } else
        t
            ? (fi ||
                  alert(
                      "DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"
                  ),
              (fi = !0))
            : (a = new Date(e));
    return a;
}
function Fr(e) {
    return function (t, r, a, s) {
        arguments.length === 0
            ? ((a = "en"), (r = null), (t = null))
            : arguments.length === 1
            ? ((a = "en"), (r = t), (t = null))
            : arguments.length === 2 && ((a = r), (r = t), (t = null));
        var u = "datetime-" + r;
        return (
            j.ext.type.order[u] ||
                (j.ext.type.detect.unshift(function (c) {
                    return c === u ? u : !1;
                }),
                (j.ext.type.order[u + "-asc"] = function (c, h) {
                    var p = c.valueOf(),
                        g = h.valueOf();
                    return p === g ? 0 : p < g ? -1 : 1;
                }),
                (j.ext.type.order[u + "-desc"] = function (c, h) {
                    var p = c.valueOf(),
                        g = h.valueOf();
                    return p === g ? 0 : p > g ? -1 : 1;
                })),
            function (c, h) {
                if (c == null)
                    if (s === "--now") {
                        var p = new Date();
                        c = new Date(
                            Date.UTC(
                                p.getFullYear(),
                                p.getMonth(),
                                p.getDate(),
                                p.getHours(),
                                p.getMinutes(),
                                p.getSeconds()
                            )
                        );
                    } else c = "";
                if (h === "type") return u;
                if (c === "")
                    return h !== "sort"
                        ? ""
                        : Zn("0000-01-01 00:00:00", null, a);
                if (
                    r !== null &&
                    t === r &&
                    h !== "sort" &&
                    h !== "type" &&
                    !(c instanceof Date)
                )
                    return c;
                var g = Zn(c, t, a);
                if (g === null) return c;
                if (h === "sort") return g;
                var y =
                    r === null
                        ? ui(g, "toDate", "toJSDate", "")[e]()
                        : ui(g, "format", "toFormat", "toISOString", r);
                return h === "display" ? Gn(y) : y;
            }
        );
    };
}
var to = ",",
    no = ".";
if (Intl)
    try {
        for (
            var vn = new Intl.NumberFormat().formatToParts(100000.1), Xt = 0;
            Xt < vn.length;
            Xt++
        )
            vn[Xt].type === "group"
                ? (to = vn[Xt].value)
                : vn[Xt].type === "decimal" && (no = vn[Xt].value);
    } catch {}
j.datetime = function (e, t) {
    var r = "datetime-detect-" + e;
    t || (t = "en"),
        j.ext.type.order[r] ||
            (j.ext.type.detect.unshift(function (a) {
                var s = Zn(a, e, t);
                return a === "" || s ? r : !1;
            }),
            (j.ext.type.order[r + "-pre"] = function (a) {
                return Zn(a, e, t) || 0;
            }));
};
j.render = {
    date: Fr("toLocaleDateString"),
    datetime: Fr("toLocaleString"),
    time: Fr("toLocaleTimeString"),
    number: function (e, t, r, a, s) {
        return (
            e == null && (e = to),
            t == null && (t = no),
            {
                display: function (u) {
                    if (
                        (typeof u != "number" && typeof u != "string") ||
                        u === "" ||
                        u === null
                    )
                        return u;
                    var c = u < 0 ? "-" : "",
                        h = parseFloat(u);
                    if (isNaN(h)) return Gn(u);
                    (h = h.toFixed(r)), (u = Math.abs(h));
                    var p = parseInt(u, 10),
                        g = r ? t + (u - p).toFixed(r).substring(2) : "";
                    return (
                        p === 0 && parseFloat(g) === 0 && (c = ""),
                        c +
                            (a || "") +
                            p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, e) +
                            g +
                            (s || "")
                    );
                },
            }
        );
    },
    text: function () {
        return { display: Gn, filter: Gn };
    },
};
function ro(e) {
    return function () {
        var t = [Qn(this[j.ext.iApiIndex])].concat(
            Array.prototype.slice.call(arguments)
        );
        return j.ext.internal[e].apply(this, t);
    };
}
C.extend(j.ext.internal, {
    _fnExternApiFunc: ro,
    _fnBuildAjax: ir,
    _fnAjaxUpdate: Si,
    _fnAjaxParameters: Ai,
    _fnAjaxUpdateDraw: Ni,
    _fnAjaxDataSrc: Sn,
    _fnAddColumn: Gr,
    _fnColumnOptions: Kn,
    _fnAdjustColumnSizing: wn,
    _fnVisibleToColumnIndex: Cn,
    _fnColumnIndexToVisible: Dn,
    _fnVisbleColumns: Yt,
    _fnGetColumns: tr,
    _fnColumnTypes: Jr,
    _fnApplyColumnDefs: wi,
    _fnHungarianMap: xn,
    _fnCamelToHungarian: wt,
    _fnLanguageCompat: qr,
    _fnBrowserDetect: xi,
    _fnAddData: At,
    _fnAddTr: nr,
    _fnNodeToDataIndex: yl,
    _fnNodeToColumnIndex: _l,
    _fnGetCellData: Ge,
    _fnSetCellData: Ci,
    _fnSplitObjNotation: Br,
    _fnGetObjectDataFn: Kt,
    _fnSetObjectDataFn: St,
    _fnGetDataMaster: Wr,
    _fnClearTable: rr,
    _fnDeleteIndex: Vn,
    _fnInvalidate: Tn,
    _fnGetRowElements: Kr,
    _fnCreateTr: Yr,
    _fnBuildHead: Di,
    _fnDrawHead: gn,
    _fnDraw: Nt,
    _fnReDraw: Ot,
    _fnAddOptionsHtml: Ti,
    _fnDetectHeader: yn,
    _fnGetUniqueThs: ar,
    _fnFeatureHtmlFilter: Li,
    _fnFilterComplete: An,
    _fnFilterCustom: ki,
    _fnFilterColumn: Ei,
    _fnFilter: Ii,
    _fnFilterCreateSearch: Qr,
    _fnEscapeRegex: Zr,
    _fnFilterData: Fi,
    _fnFeatureHtmlInfo: ji,
    _fnUpdateInfo: Pi,
    _fnInfoMacros: Ri,
    _fnInitialise: mn,
    _fnInitComplete: Yn,
    _fnLengthChange: ea,
    _fnFeatureHtmlLength: Hi,
    _fnFeatureHtmlPaginate: Oi,
    _fnPageChange: or,
    _fnFeatureHtmlProcessing: Mi,
    _fnProcessingDisplay: et,
    _fnFeatureHtmlTable: qi,
    _fnScrollDraw: lr,
    _fnApplyToChildren: ht,
    _fnCalculateColumnWidths: ta,
    _fnThrottle: na,
    _fnConvertToWidth: Bi,
    _fnGetWidestNode: Wi,
    _fnGetMaxLenString: $i,
    _fnStringToCss: Ne,
    _fnSortFlatten: zt,
    _fnSort: Ui,
    _fnSortAria: Vi,
    _fnSortListener: $r,
    _fnSortAttachListener: ra,
    _fnSortingClasses: zn,
    _fnSortData: Xi,
    _fnSaveState: Nn,
    _fnLoadState: Gi,
    _fnImplementState: Ur,
    _fnSettingsFromNode: Qn,
    _fnLog: ot,
    _fnMap: ct,
    _fnBindAction: aa,
    _fnCallbackReg: Oe,
    _fnCallbackFire: pe,
    _fnLengthOverflow: ia,
    _fnRenderer: oa,
    _fnDataSource: Re,
    _fnRowAttributes: zr,
    _fnExtend: Vr,
    _fnCalculateEnd: function () {},
});
C.fn.dataTable = j;
j.$ = C;
C.fn.dataTableSettings = j.settings;
C.fn.dataTableExt = j.ext;
C.fn.DataTable = function (e) {
    return C(this).dataTable(e).api();
};
C.each(j, function (e, t) {
    C.fn.DataTable[e] = t;
});
j.use = function (e, t) {
    t === "lib" || e.fn ? (C = e) : (t == "win" || e.document) && (window = e);
};
/*! DataTables Bootstrap 5 integration
 * 2020 SpryMedia Ltd - datatables.net/license
 */ F.extend(!0, j.defaults, {
    dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row dt-row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    renderer: "bootstrap",
});
F.extend(j.ext.classes, {
    sWrapper: "dataTables_wrapper dt-bootstrap5",
    sFilterInput: "form-control form-control-sm",
    sLengthSelect: "form-select form-select-sm",
    sProcessing: "dataTables_processing card",
    sPageButton: "paginate_button page-item",
});
j.ext.renderer.pageButton.bootstrap = function (e, t, r, a, s, u) {
    var c = new j.Api(e),
        h = e.oClasses,
        p = e.oLanguage.oPaginate,
        g = e.oLanguage.oAria.paginate || {},
        y,
        x,
        w = function (W, O) {
            var k,
                J,
                K,
                oe,
                d = function (Y) {
                    Y.preventDefault(),
                        !F(Y.currentTarget).hasClass("disabled") &&
                            c.page() != Y.data.action &&
                            c.page(Y.data.action).draw("page");
                };
            for (k = 0, J = O.length; k < J; k++)
                if (((oe = O[k]), Array.isArray(oe))) w(W, oe);
                else {
                    switch (((y = ""), (x = ""), oe)) {
                        case "ellipsis":
                            (y = "&#x2026;"), (x = "disabled");
                            break;
                        case "first":
                            (y = p.sFirst),
                                (x = oe + (s > 0 ? "" : " disabled"));
                            break;
                        case "previous":
                            (y = p.sPrevious),
                                (x = oe + (s > 0 ? "" : " disabled"));
                            break;
                        case "next":
                            (y = p.sNext),
                                (x = oe + (s < u - 1 ? "" : " disabled"));
                            break;
                        case "last":
                            (y = p.sLast),
                                (x = oe + (s < u - 1 ? "" : " disabled"));
                            break;
                        default:
                            (y = oe + 1), (x = s === oe ? "active" : "");
                            break;
                    }
                    if (y) {
                        var Z = x.indexOf("disabled") !== -1;
                        (K = F("<li>", {
                            class: h.sPageButton + " " + x,
                            id:
                                r === 0 && typeof oe == "string"
                                    ? e.sTableId + "_" + oe
                                    : null,
                        })
                            .append(
                                F("<a>", {
                                    href: Z ? null : "#",
                                    "aria-controls": e.sTableId,
                                    "aria-disabled": Z ? "true" : null,
                                    "aria-label": g[oe],
                                    "aria-role": "link",
                                    "aria-current":
                                        x === "active" ? "page" : null,
                                    "data-dt-idx": oe,
                                    tabindex: e.iTabIndex,
                                    class: "page-link",
                                }).html(y)
                            )
                            .appendTo(W)),
                            e.oApi._fnBindAction(K, { action: oe }, d);
                    }
                }
        },
        D = F(t),
        N;
    try {
        N = D.find(document.activeElement).data("dt-idx");
    } catch {}
    var P = D.children("ul.pagination");
    P.length
        ? P.empty()
        : (P = D.html("<ul/>").children("ul").addClass("pagination")),
        w(P, a),
        N !== void 0 && D.find("[data-dt-idx=" + N + "]").trigger("focus");
};
/*! Buttons for DataTables 2.3.4
 * ©2016-2023 SpryMedia Ltd - datatables.net/license
 */ var Fl = 0,
    jl = 0,
    Ze = j.ext.buttons;
function ca(e, t, r) {
    F.fn.animate
        ? e.stop().fadeIn(t, r)
        : (e.css("display", "block"), r && r.call(e));
}
function da(e, t, r) {
    F.fn.animate
        ? e.stop().fadeOut(t, r)
        : (e.css("display", "none"), r && r.call(e));
}
var Ae = function (e, t) {
    if (!(this instanceof Ae))
        return function (r) {
            return new Ae(r, e).container();
        };
    typeof t > "u" && (t = {}),
        t === !0 && (t = {}),
        Array.isArray(t) && (t = { buttons: t }),
        (this.c = F.extend(!0, {}, Ae.defaults, t)),
        t.buttons && (this.c.buttons = t.buttons),
        (this.s = {
            dt: new j.Api(e),
            buttons: [],
            listenKeys: "",
            namespace: "dtb" + Fl++,
        }),
        (this.dom = {
            container: F("<" + this.c.dom.container.tag + "/>").addClass(
                this.c.dom.container.className
            ),
        }),
        this._constructor();
};
F.extend(Ae.prototype, {
    action: function (e, t) {
        var r = this._nodeToButton(e);
        return t === void 0 ? r.conf.action : ((r.conf.action = t), this);
    },
    active: function (e, t) {
        var r = this._nodeToButton(e),
            a = this.c.dom.button.active,
            s = F(r.node);
        return t === void 0
            ? s.hasClass(a)
            : (s.toggleClass(a, t === void 0 ? !0 : t), this);
    },
    add: function (e, t, r) {
        var a = this.s.buttons;
        if (typeof t == "string") {
            for (
                var s = t.split("-"), u = this.s, c = 0, h = s.length - 1;
                c < h;
                c++
            )
                u = u.buttons[s[c] * 1];
            (a = u.buttons), (t = s[s.length - 1] * 1);
        }
        return (
            this._expandButton(
                a,
                e,
                e !== void 0 ? e.split : void 0,
                (e === void 0 || e.split === void 0 || e.split.length === 0) &&
                    u !== void 0,
                !1,
                t
            ),
            (r === void 0 || r === !0) && this._draw(),
            this
        );
    },
    collectionRebuild: function (e, t) {
        var r = this._nodeToButton(e);
        if (t !== void 0) {
            var a;
            for (a = r.buttons.length - 1; a >= 0; a--)
                this.remove(r.buttons[a].node);
            for (
                r.conf.prefixButtons &&
                    t.unshift.apply(t, r.conf.prefixButtons),
                    r.conf.postfixButtons &&
                        t.push.apply(t, r.conf.postfixButtons),
                    a = 0;
                a < t.length;
                a++
            ) {
                var s = t[a];
                this._expandButton(
                    r.buttons,
                    s,
                    s !== void 0 &&
                        s.config !== void 0 &&
                        s.config.split !== void 0,
                    !0,
                    s.parentConf !== void 0 && s.parentConf.split !== void 0,
                    null,
                    s.parentConf
                );
            }
        }
        this._draw(r.collection, r.buttons);
    },
    container: function () {
        return this.dom.container;
    },
    disable: function (e) {
        var t = this._nodeToButton(e);
        return (
            F(t.node).addClass(this.c.dom.button.disabled).prop("disabled", !0),
            this
        );
    },
    destroy: function () {
        F("body").off("keyup." + this.s.namespace);
        var e = this.s.buttons.slice(),
            t,
            r;
        for (t = 0, r = e.length; t < r; t++) this.remove(e[t].node);
        this.dom.container.remove();
        var a = this.s.dt.settings()[0];
        for (t = 0, r = a.length; t < r; t++)
            if (a.inst === this) {
                a.splice(t, 1);
                break;
            }
        return this;
    },
    enable: function (e, t) {
        if (t === !1) return this.disable(e);
        var r = this._nodeToButton(e);
        return (
            F(r.node)
                .removeClass(this.c.dom.button.disabled)
                .prop("disabled", !1),
            this
        );
    },
    index: function (e, t, r) {
        t || ((t = ""), (r = this.s.buttons));
        for (var a = 0, s = r.length; a < s; a++) {
            var u = r[a].buttons;
            if (r[a].node === e) return t + a;
            if (u && u.length) {
                var c = this.index(e, a + "-", u);
                if (c !== null) return c;
            }
        }
        return null;
    },
    name: function () {
        return this.c.name;
    },
    node: function (e) {
        if (!e) return this.dom.container;
        var t = this._nodeToButton(e);
        return F(t.node);
    },
    processing: function (e, t) {
        var r = this.s.dt,
            a = this._nodeToButton(e);
        return t === void 0
            ? F(a.node).hasClass("processing")
            : (F(a.node).toggleClass("processing", t),
              F(r.table().node()).triggerHandler("buttons-processing.dt", [
                  t,
                  r.button(e),
                  r,
                  F(e),
                  a.conf,
              ]),
              this);
    },
    remove: function (e) {
        var t = this._nodeToButton(e),
            r = this._nodeToHost(e),
            a = this.s.dt;
        if (t.buttons.length)
            for (var s = t.buttons.length - 1; s >= 0; s--)
                this.remove(t.buttons[s].node);
        (t.conf.destroying = !0),
            t.conf.destroy && t.conf.destroy.call(a.button(e), a, F(e), t.conf),
            this._removeKey(t.conf),
            F(t.node).remove();
        var u = F.inArray(t, r);
        return r.splice(u, 1), this;
    },
    text: function (e, t) {
        var r = this._nodeToButton(e),
            a = this.c.dom.collection.buttonLiner,
            s =
                r.inCollection && a && a.tag
                    ? a.tag
                    : this.c.dom.buttonLiner.tag,
            u = this.s.dt,
            c = F(r.node),
            h = function (p) {
                return typeof p == "function" ? p(u, c, r.conf) : p;
            };
        return t === void 0
            ? h(r.conf.text)
            : ((r.conf.text = t),
              s
                  ? c
                        .children(s)
                        .eq(0)
                        .filter(":not(.dt-down-arrow)")
                        .html(h(t))
                  : c.html(h(t)),
              this);
    },
    _constructor: function () {
        var e = this,
            t = this.s.dt,
            r = t.settings()[0],
            a = this.c.buttons;
        r._buttons || (r._buttons = []),
            r._buttons.push({ inst: this, name: this.c.name });
        for (var s = 0, u = a.length; s < u; s++) this.add(a[s]);
        t.on("destroy", function (c, h) {
            h === r && e.destroy();
        }),
            F("body").on("keyup." + this.s.namespace, function (c) {
                if (
                    !document.activeElement ||
                    document.activeElement === document.body
                ) {
                    var h = String.fromCharCode(c.keyCode).toLowerCase();
                    e.s.listenKeys.toLowerCase().indexOf(h) !== -1 &&
                        e._keypress(h, c);
                }
            });
    },
    _addKey: function (e) {
        e.key &&
            (this.s.listenKeys += F.isPlainObject(e.key) ? e.key.key : e.key);
    },
    _draw: function (e, t) {
        e || ((e = this.dom.container), (t = this.s.buttons)),
            e.children().detach();
        for (var r = 0, a = t.length; r < a; r++)
            e.append(t[r].inserter),
                e.append(" "),
                t[r].buttons &&
                    t[r].buttons.length &&
                    this._draw(t[r].collection, t[r].buttons);
    },
    _expandButton: function (e, t, r, a, s, u, c) {
        var h = this.s.dt,
            p = !1,
            g = Array.isArray(t) ? t : [t];
        t === void 0 && (g = Array.isArray(r) ? r : [r]),
            t !== void 0 && t.split !== void 0 && (p = !0);
        for (var y = 0, x = g.length; y < x; y++) {
            var w = this._resolveExtends(g[y]);
            if (w) {
                if (
                    (w.config !== void 0 && w.config.split
                        ? (p = !0)
                        : (p = !1),
                    Array.isArray(w))
                ) {
                    this._expandButton(
                        e,
                        w,
                        D !== void 0 && D.conf !== void 0
                            ? D.conf.split
                            : void 0,
                        a,
                        c !== void 0 && c.split !== void 0,
                        u,
                        c
                    );
                    continue;
                }
                var D = this._buildButton(
                    w,
                    a,
                    w.split !== void 0 ||
                        (w.config !== void 0 && w.config.split !== void 0),
                    s
                );
                if (D) {
                    if (
                        (u != null ? (e.splice(u, 0, D), u++) : e.push(D),
                        D.conf.buttons || D.conf.split)
                    ) {
                        if (
                            ((D.collection = F(
                                "<" +
                                    (p
                                        ? this.c.dom.splitCollection.tag
                                        : this.c.dom.collection.tag) +
                                    "/>"
                            )),
                            (D.conf._collection = D.collection),
                            D.conf.split)
                        )
                            for (var N = 0; N < D.conf.split.length; N++)
                                typeof D.conf.split[N] == "object" &&
                                    ((D.conf.split[N].parent = c),
                                    D.conf.split[N].collectionLayout ===
                                        void 0 &&
                                        (D.conf.split[N].collectionLayout =
                                            D.conf.collectionLayout),
                                    D.conf.split[N].dropup === void 0 &&
                                        (D.conf.split[N].dropup =
                                            D.conf.dropup),
                                    D.conf.split[N].fade === void 0 &&
                                        (D.conf.split[N].fade = D.conf.fade));
                        else
                            F(D.node).append(
                                F(
                                    '<span class="dt-down-arrow">' +
                                        this.c.dom.splitDropdown.text +
                                        "</span>"
                                )
                            );
                        this._expandButton(
                            D.buttons,
                            D.conf.buttons,
                            D.conf.split,
                            !p,
                            p,
                            u,
                            D.conf
                        );
                    }
                    (D.conf.parent = c),
                        w.init &&
                            w.init.call(h.button(D.node), h, F(D.node), w);
                }
            }
        }
    },
    _buildButton: function (e, t, r, a) {
        var s = this.c.dom.button,
            u = this.c.dom.buttonLiner,
            c = this.c.dom.collection;
        this.c.dom.split;
        var h = this.c.dom.splitCollection,
            p = this.c.dom.splitDropdownButton,
            g = this.s.dt,
            y = function (Z) {
                return typeof Z == "function" ? Z(g, w, e) : Z;
            };
        if (e.spacer) {
            var x = F("<span></span>")
                .addClass("dt-button-spacer " + e.style + " " + s.spacerClass)
                .html(y(e.text));
            return {
                conf: e,
                node: x,
                inserter: x,
                buttons: [],
                inCollection: t,
                isSplit: r,
                inSplit: a,
                collection: null,
            };
        }
        if (
            (!r && a && h ? (s = p) : !r && t && c.button && (s = c.button),
            !r && a && h.buttonLiner
                ? (u = h.buttonLiner)
                : !r && t && c.buttonLiner && (u = c.buttonLiner),
            e.available && !e.available(g, e) && !e.hasOwnProperty("html"))
        )
            return !1;
        var w;
        if (e.hasOwnProperty("html")) w = F(e.html);
        else {
            var D = function (Z, Y, ue, de) {
                    de.action.call(Y.button(ue), Z, Y, ue, de),
                        F(Y.table().node()).triggerHandler(
                            "buttons-action.dt",
                            [Y.button(ue), Y, ue, de]
                        );
                },
                N = e.tag || s.tag,
                P = e.clickBlurs === void 0 ? !0 : e.clickBlurs;
            if (
                ((w = F("<" + N + "/>")
                    .addClass(s.className)
                    .addClass(a ? this.c.dom.splitDropdownButton.className : "")
                    .attr("tabindex", this.s.dt.settings()[0].iTabIndex)
                    .attr("aria-controls", this.s.dt.table().node().id)
                    .on("click.dtb", function (Z) {
                        Z.preventDefault(),
                            !w.hasClass(s.disabled) &&
                                e.action &&
                                D(Z, g, w, e),
                            P && w.trigger("blur");
                    })
                    .on("keypress.dtb", function (Z) {
                        Z.keyCode === 13 &&
                            (Z.preventDefault(),
                            !w.hasClass(s.disabled) &&
                                e.action &&
                                D(Z, g, w, e));
                    })),
                N.toLowerCase() === "a" && w.attr("href", "#"),
                N.toLowerCase() === "button" && w.attr("type", "button"),
                u.tag)
            ) {
                var W = F("<" + u.tag + "/>")
                    .html(y(e.text))
                    .addClass(u.className);
                u.tag.toLowerCase() === "a" && W.attr("href", "#"), w.append(W);
            } else w.html(y(e.text));
            e.enabled === !1 && w.addClass(s.disabled),
                e.className && w.addClass(e.className),
                e.titleAttr && w.attr("title", y(e.titleAttr)),
                e.attr && w.attr(e.attr),
                e.namespace || (e.namespace = ".dt-button-" + jl++),
                e.config !== void 0 &&
                    e.config.split &&
                    (e.split = e.config.split);
        }
        var O = this.c.dom.buttonContainer,
            k;
        O && O.tag
            ? (k = F("<" + O.tag + "/>")
                  .addClass(O.className)
                  .append(w))
            : (k = w),
            this._addKey(e),
            this.c.buttonCreated && (k = this.c.buttonCreated(e, k));
        var J;
        if (r) {
            (J = F("<div/>").addClass(this.c.dom.splitWrapper.className)),
                J.append(w);
            var K = F.extend(e, {
                text: this.c.dom.splitDropdown.text,
                className: this.c.dom.splitDropdown.className,
                closeButton: !1,
                attr: { "aria-haspopup": "dialog", "aria-expanded": !1 },
                align: this.c.dom.splitDropdown.align,
                splitAlignClass: this.c.dom.splitDropdown.splitAlignClass,
            });
            this._addKey(K);
            var oe = function (Z, Y, ue, de) {
                    Ze.split.action.call(Y.button(J), Z, Y, ue, de),
                        F(Y.table().node()).triggerHandler(
                            "buttons-action.dt",
                            [Y.button(ue), Y, ue, de]
                        ),
                        ue.attr("aria-expanded", !0);
                },
                d = F(
                    '<button class="' +
                        this.c.dom.splitDropdown.className +
                        ' dt-button"><span class="dt-btn-split-drop-arrow">' +
                        this.c.dom.splitDropdown.text +
                        "</span></button>"
                )
                    .on("click.dtb", function (Z) {
                        Z.preventDefault(),
                            Z.stopPropagation(),
                            d.hasClass(s.disabled) || oe(Z, g, d, K),
                            P && d.trigger("blur");
                    })
                    .on("keypress.dtb", function (Z) {
                        Z.keyCode === 13 &&
                            (Z.preventDefault(),
                            d.hasClass(s.disabled) || oe(Z, g, d, K));
                    });
            e.split.length === 0 && d.addClass("dtb-hide-drop"),
                J.append(d).attr(K.attr);
        }
        return {
            conf: e,
            node: r ? J.get(0) : w.get(0),
            inserter: r ? J : k,
            buttons: [],
            inCollection: t,
            isSplit: r,
            inSplit: a,
            collection: null,
        };
    },
    _nodeToButton: function (e, t) {
        t || (t = this.s.buttons);
        for (var r = 0, a = t.length; r < a; r++) {
            if (t[r].node === e) return t[r];
            if (t[r].buttons.length) {
                var s = this._nodeToButton(e, t[r].buttons);
                if (s) return s;
            }
        }
    },
    _nodeToHost: function (e, t) {
        t || (t = this.s.buttons);
        for (var r = 0, a = t.length; r < a; r++) {
            if (t[r].node === e) return t;
            if (t[r].buttons.length) {
                var s = this._nodeToHost(e, t[r].buttons);
                if (s) return s;
            }
        }
    },
    _keypress: function (e, t) {
        if (!t._buttonsHandled) {
            var r = function (s, u) {
                    if (s.key) {
                        if (s.key === e) (t._buttonsHandled = !0), F(u).click();
                        else if (F.isPlainObject(s.key)) {
                            if (
                                s.key.key !== e ||
                                (s.key.shiftKey && !t.shiftKey) ||
                                (s.key.altKey && !t.altKey) ||
                                (s.key.ctrlKey && !t.ctrlKey) ||
                                (s.key.metaKey && !t.metaKey)
                            )
                                return;
                            (t._buttonsHandled = !0), F(u).click();
                        }
                    }
                },
                a = function (s) {
                    for (var u = 0, c = s.length; u < c; u++)
                        r(s[u].conf, s[u].node),
                            s[u].buttons.length && a(s[u].buttons);
                };
            a(this.s.buttons);
        }
    },
    _removeKey: function (e) {
        if (e.key) {
            var t = F.isPlainObject(e.key) ? e.key.key : e.key,
                r = this.s.listenKeys.split(""),
                a = F.inArray(t, r);
            r.splice(a, 1), (this.s.listenKeys = r.join(""));
        }
    },
    _resolveExtends: function (e) {
        var t = this,
            r = this.s.dt,
            a,
            s,
            u = function (y) {
                for (var x = 0; !F.isPlainObject(y) && !Array.isArray(y); ) {
                    if (y === void 0) return;
                    if (typeof y == "function") {
                        if (((y = y.call(t, r, e)), !y)) return !1;
                    } else if (typeof y == "string") {
                        if (!Ze[y]) return { html: y };
                        y = Ze[y];
                    }
                    if ((x++, x > 30)) throw "Buttons: Too many iterations";
                }
                return Array.isArray(y) ? y : F.extend({}, y);
            };
        for (e = u(e); e && e.extend; ) {
            if (!Ze[e.extend])
                throw "Cannot extend unknown button type: " + e.extend;
            var c = u(Ze[e.extend]);
            if (Array.isArray(c)) return c;
            if (!c) return !1;
            var h = c.className;
            e.config !== void 0 &&
                c.config !== void 0 &&
                (e.config = F.extend({}, c.config, e.config)),
                (e = F.extend({}, c, e)),
                h && e.className !== h && (e.className = h + " " + e.className),
                (e.extend = c.extend);
        }
        var p = e.postfixButtons;
        if (p)
            for (e.buttons || (e.buttons = []), a = 0, s = p.length; a < s; a++)
                e.buttons.push(p[a]);
        var g = e.prefixButtons;
        if (g)
            for (e.buttons || (e.buttons = []), a = 0, s = g.length; a < s; a++)
                e.buttons.splice(a, 0, g[a]);
        return e;
    },
    _popover: function (e, t, r, a) {
        var s = t,
            u = this.c,
            c = !1,
            h = F.extend(
                {
                    align: "button-left",
                    autoClose: !1,
                    background: !0,
                    backgroundClassName: "dt-button-background",
                    closeButton: !0,
                    contentClassName: u.dom.collection.className,
                    collectionLayout: "",
                    collectionTitle: "",
                    dropup: !1,
                    fade: 400,
                    popoverTitle: "",
                    rightAlignClassName: "dt-button-right",
                    tag: u.dom.collection.tag,
                },
                r
            ),
            p = t.node(),
            g = function () {
                (c = !0),
                    da(F(".dt-button-collection"), h.fade, function () {
                        F(this).detach();
                    }),
                    F(
                        s
                            .buttons(
                                '[aria-haspopup="dialog"][aria-expanded="true"]'
                            )
                            .nodes()
                    ).attr("aria-expanded", "false"),
                    F("div.dt-button-background").off("click.dtb-collection"),
                    Ae.background(!1, h.backgroundClassName, h.fade, p),
                    F(window).off("resize.resize.dtb-collection"),
                    F("body").off(".dtb-collection"),
                    s.off("buttons-action.b-internal"),
                    s.off("destroy");
            };
        if (e === !1) {
            g();
            return;
        }
        var y = F(
            s.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()
        );
        y.length &&
            (p.closest("div.dt-button-collection").length && (p = y.eq(0)),
            g());
        var x = F(".dt-button", e).length,
            w = "";
        x === 3
            ? (w = "dtb-b3")
            : x === 2
            ? (w = "dtb-b2")
            : x === 1 && (w = "dtb-b1");
        var D = F("<div/>")
            .addClass("dt-button-collection")
            .addClass(h.collectionLayout)
            .addClass(h.splitAlignClass)
            .addClass(w)
            .css("display", "none")
            .attr({ "aria-modal": !0, role: "dialog" });
        (e = F(e)
            .addClass(h.contentClassName)
            .attr("role", "menu")
            .appendTo(D)),
            p.attr("aria-expanded", "true"),
            p.parents("body")[0] !== document.body &&
                (p = document.body.lastChild),
            h.popoverTitle
                ? D.prepend(
                      '<div class="dt-button-collection-title">' +
                          h.popoverTitle +
                          "</div>"
                  )
                : h.collectionTitle &&
                  D.prepend(
                      '<div class="dt-button-collection-title">' +
                          h.collectionTitle +
                          "</div>"
                  ),
            h.closeButton &&
                D.prepend('<div class="dtb-popover-close">x</div>').addClass(
                    "dtb-collection-closeable"
                ),
            ca(D.insertAfter(p), h.fade);
        var N = F(t.table().container()),
            P = D.css("position");
        if (
            ((h.span === "container" || h.align === "dt-container") &&
                ((p = p.parent()), D.css("width", N.width())),
            P === "absolute")
        ) {
            var W = F(p[0].offsetParent),
                O = p.position(),
                k = p.offset(),
                J = W.offset(),
                K = W.position(),
                oe = window.getComputedStyle(W[0]);
            (J.height = W.outerHeight()),
                (J.width = W.width() + parseFloat(oe.paddingLeft)),
                (J.right = J.left + J.width),
                (J.bottom = J.top + J.height);
            var d = O.top + p.outerHeight(),
                Z = O.left;
            D.css({ top: d, left: Z }), (oe = window.getComputedStyle(D[0]));
            var Y = D.offset();
            (Y.height = D.outerHeight()),
                (Y.width = D.outerWidth()),
                (Y.right = Y.left + Y.width),
                (Y.bottom = Y.top + Y.height),
                (Y.marginTop = parseFloat(oe.marginTop)),
                (Y.marginBottom = parseFloat(oe.marginBottom)),
                h.dropup &&
                    (d = O.top - Y.height - Y.marginTop - Y.marginBottom),
                (h.align === "button-right" ||
                    D.hasClass(h.rightAlignClassName)) &&
                    (Z = O.left - Y.width + p.outerWidth()),
                (h.align === "dt-container" || h.align === "container") &&
                    (Z < O.left && (Z = -O.left),
                    Z + Y.width > J.width && (Z = J.width - Y.width)),
                K.left + Z + Y.width > F(window).width() &&
                    (Z = F(window).width() - Y.width - K.left),
                k.left + Z < 0 && (Z = -k.left),
                K.top + d + Y.height >
                    F(window).height() + F(window).scrollTop() &&
                    (d = O.top - Y.height - Y.marginTop - Y.marginBottom),
                K.top + d < F(window).scrollTop() &&
                    (d = O.top + p.outerHeight()),
                D.css({ top: d, left: Z });
        } else {
            var P = function () {
                var de = F(window).height() / 2,
                    be = D.height() / 2;
                be > de && (be = de), D.css("marginTop", be * -1);
            };
            P(),
                F(window).on("resize.dtb-collection", function () {
                    P();
                });
        }
        h.background &&
            Ae.background(
                !0,
                h.backgroundClassName,
                h.fade,
                h.backgroundHost || p
            ),
            F("div.dt-button-background").on(
                "click.dtb-collection",
                function () {}
            ),
            h.autoClose &&
                setTimeout(function () {
                    s.on(
                        "buttons-action.b-internal",
                        function (ue, de, be, Ce) {
                            Ce[0] !== p[0] && g();
                        }
                    );
                }, 0),
            F(D).trigger("buttons-popover.dt"),
            s.on("destroy", g),
            setTimeout(function () {
                (c = !1),
                    F("body")
                        .on("click.dtb-collection", function (ue) {
                            if (!c) {
                                var de = F.fn.addBack ? "addBack" : "andSelf",
                                    be = F(ue.target).parent()[0];
                                ((!F(ue.target).parents()[de]().filter(e)
                                    .length &&
                                    !F(be).hasClass("dt-buttons")) ||
                                    F(ue.target).hasClass(
                                        "dt-button-background"
                                    )) &&
                                    g();
                            }
                        })
                        .on("keyup.dtb-collection", function (ue) {
                            ue.keyCode === 27 && g();
                        })
                        .on("keydown.dtb-collection", function (ue) {
                            var de = F("a, button", e),
                                be = document.activeElement;
                            ue.keyCode === 9 &&
                                (de.index(be) === -1
                                    ? (de.first().focus(), ue.preventDefault())
                                    : ue.shiftKey
                                    ? be === de[0] &&
                                      (de.last().focus(), ue.preventDefault())
                                    : be === de.last()[0] &&
                                      (de.first().focus(),
                                      ue.preventDefault()));
                        });
            }, 0);
    },
});
Ae.background = function (e, t, r, a) {
    r === void 0 && (r = 400),
        a || (a = document.body),
        e
            ? ca(
                  F("<div/>").addClass(t).css("display", "none").insertAfter(a),
                  r
              )
            : da(F("div." + t), r, function () {
                  F(this).removeClass(t).remove();
              });
};
Ae.instanceSelector = function (e, t) {
    if (e == null)
        return F.map(t, function (u) {
            return u.inst;
        });
    var r = [],
        a = F.map(t, function (u) {
            return u.name;
        }),
        s = function (u) {
            if (Array.isArray(u)) {
                for (var c = 0, h = u.length; c < h; c++) s(u[c]);
                return;
            }
            if (typeof u == "string")
                if (u.indexOf(",") !== -1) s(u.split(","));
                else {
                    var p = F.inArray(u.trim(), a);
                    p !== -1 && r.push(t[p].inst);
                }
            else
                typeof u == "number"
                    ? r.push(t[u].inst)
                    : typeof u == "object" && r.push(u);
        };
    return s(e), r;
};
Ae.buttonSelector = function (e, t) {
    for (
        var r = [],
            a = function (p, g, y) {
                for (var x, w, D = 0, N = g.length; D < N; D++)
                    (x = g[D]),
                        x &&
                            ((w = y !== void 0 ? y + D : D + ""),
                            p.push({ node: x.node, name: x.conf.name, idx: w }),
                            x.buttons && a(p, x.buttons, w + "-"));
            },
            s = function (p, g) {
                var y,
                    x,
                    w = [];
                a(w, g.s.buttons);
                var D = F.map(w, function (k) {
                    return k.node;
                });
                if (Array.isArray(p) || p instanceof F) {
                    for (y = 0, x = p.length; y < x; y++) s(p[y], g);
                    return;
                }
                if (p == null || p === "*")
                    for (y = 0, x = w.length; y < x; y++)
                        r.push({ inst: g, node: w[y].node });
                else if (typeof p == "number")
                    g.s.buttons[p] &&
                        r.push({ inst: g, node: g.s.buttons[p].node });
                else if (typeof p == "string")
                    if (p.indexOf(",") !== -1) {
                        var N = p.split(",");
                        for (y = 0, x = N.length; y < x; y++) s(N[y].trim(), g);
                    } else if (p.match(/^\d+(\-\d+)*$/)) {
                        var P = F.map(w, function (k) {
                            return k.idx;
                        });
                        r.push({ inst: g, node: w[F.inArray(p, P)].node });
                    } else if (p.indexOf(":name") !== -1) {
                        var W = p.replace(":name", "");
                        for (y = 0, x = w.length; y < x; y++)
                            w[y].name === W &&
                                r.push({ inst: g, node: w[y].node });
                    } else
                        F(D)
                            .filter(p)
                            .each(function () {
                                r.push({ inst: g, node: this });
                            });
                else if (typeof p == "object" && p.nodeName) {
                    var O = F.inArray(p, D);
                    O !== -1 && r.push({ inst: g, node: D[O] });
                }
            },
            u = 0,
            c = e.length;
        u < c;
        u++
    ) {
        var h = e[u];
        s(t, h);
    }
    return r;
};
Ae.stripData = function (e, t) {
    return (
        typeof e != "string" ||
            ((e = e.replace(
                /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                ""
            )),
            (e = e.replace(/<!\-\-.*?\-\->/g, "")),
            (!t || t.stripHtml) && (e = e.replace(/<[^>]*>/g, "")),
            (!t || t.trim) && (e = e.replace(/^\s+|\s+$/g, "")),
            (!t || t.stripNewlines) && (e = e.replace(/\n/g, " ")),
            (!t || t.decodeEntities) && ((di.innerHTML = e), (e = di.value))),
        e
    );
};
Ae.defaults = {
    buttons: ["copy", "excel", "csv", "pdf", "print"],
    name: "main",
    tabIndex: 0,
    dom: {
        container: { tag: "div", className: "dt-buttons" },
        collection: { tag: "div", className: "" },
        button: {
            tag: "button",
            className: "dt-button",
            active: "active",
            disabled: "disabled",
            spacerClass: "",
        },
        buttonLiner: { tag: "span", className: "" },
        split: { tag: "div", className: "dt-button-split" },
        splitWrapper: { tag: "div", className: "dt-btn-split-wrapper" },
        splitDropdown: {
            tag: "button",
            text: "&#x25BC;",
            className: "dt-btn-split-drop",
            align: "split-right",
            splitAlignClass: "dt-button-split-left",
        },
        splitDropdownButton: {
            tag: "button",
            className: "dt-btn-split-drop-button dt-button",
        },
        splitCollection: {
            tag: "div",
            className: "dt-button-split-collection",
        },
    },
};
Ae.version = "2.3.4";
F.extend(Ze, {
    collection: {
        text: function (e) {
            return e.i18n("buttons.collection", "Collection");
        },
        className: "buttons-collection",
        closeButton: !1,
        init: function (e, t, r) {
            t.attr("aria-expanded", !1);
        },
        action: function (e, t, r, a) {
            a._collection.parents("body").length
                ? this.popover(!1, a)
                : this.popover(a._collection, a),
                e.type === "keypress" &&
                    F("a, button", a._collection).eq(0).focus();
        },
        attr: { "aria-haspopup": "dialog" },
    },
    split: {
        text: function (e) {
            return e.i18n("buttons.split", "Split");
        },
        className: "buttons-split",
        closeButton: !1,
        init: function (e, t, r) {
            return t.attr("aria-expanded", !1);
        },
        action: function (e, t, r, a) {
            this.popover(a._collection, a);
        },
        attr: { "aria-haspopup": "dialog" },
    },
    copy: function (e, t) {
        if (Ze.copyHtml5) return "copyHtml5";
    },
    csv: function (e, t) {
        if (Ze.csvHtml5 && Ze.csvHtml5.available(e, t)) return "csvHtml5";
    },
    excel: function (e, t) {
        if (Ze.excelHtml5 && Ze.excelHtml5.available(e, t)) return "excelHtml5";
    },
    pdf: function (e, t) {
        if (Ze.pdfHtml5 && Ze.pdfHtml5.available(e, t)) return "pdfHtml5";
    },
    pageLength: function (e) {
        var t = e.settings()[0].aLengthMenu,
            r = [],
            a = [],
            s = function (h) {
                return h.i18n(
                    "buttons.pageLength",
                    { "-1": "Show all rows", _: "Show %d rows" },
                    h.page.len()
                );
            };
        if (Array.isArray(t[0])) (r = t[0]), (a = t[1]);
        else
            for (var u = 0; u < t.length; u++) {
                var c = t[u];
                F.isPlainObject(c)
                    ? (r.push(c.value), a.push(c.label))
                    : (r.push(c), a.push(c));
            }
        return {
            extend: "collection",
            text: s,
            className: "buttons-page-length",
            autoClose: !0,
            buttons: F.map(r, function (h, p) {
                return {
                    text: a[p],
                    className: "button-page-length",
                    action: function (g, y) {
                        y.page.len(h).draw();
                    },
                    init: function (g, y, x) {
                        var w = this,
                            D = function () {
                                w.active(g.page.len() === h);
                            };
                        g.on("length.dt" + x.namespace, D), D();
                    },
                    destroy: function (g, y, x) {
                        g.off("length.dt" + x.namespace);
                    },
                };
            }),
            init: function (h, p, g) {
                var y = this;
                h.on("length.dt" + g.namespace, function () {
                    y.text(g.text);
                });
            },
            destroy: function (h, p, g) {
                h.off("length.dt" + g.namespace);
            },
        };
    },
    spacer: {
        style: "empty",
        spacer: !0,
        text: function (e) {
            return e.i18n("buttons.spacer", "");
        },
    },
});
j.Api.register("buttons()", function (e, t) {
    t === void 0 && ((t = e), (e = void 0)), (this.selector.buttonGroup = e);
    var r = this.iterator(
        !0,
        "table",
        function (a) {
            if (a._buttons)
                return Ae.buttonSelector(Ae.instanceSelector(e, a._buttons), t);
        },
        !0
    );
    return (r._groupSelector = e), r;
});
j.Api.register("button()", function (e, t) {
    var r = this.buttons(e, t);
    return r.length > 1 && r.splice(1, r.length), r;
});
j.Api.registerPlural("buttons().active()", "button().active()", function (e) {
    return e === void 0
        ? this.map(function (t) {
              return t.inst.active(t.node);
          })
        : this.each(function (t) {
              t.inst.active(t.node, e);
          });
});
j.Api.registerPlural("buttons().action()", "button().action()", function (e) {
    return e === void 0
        ? this.map(function (t) {
              return t.inst.action(t.node);
          })
        : this.each(function (t) {
              t.inst.action(t.node, e);
          });
});
j.Api.registerPlural(
    "buttons().collectionRebuild()",
    "button().collectionRebuild()",
    function (e) {
        return this.each(function (t) {
            for (var r = 0; r < e.length; r++)
                typeof e[r] == "object" && (e[r].parentConf = t);
            t.inst.collectionRebuild(t.node, e);
        });
    }
);
j.Api.register(["buttons().enable()", "button().enable()"], function (e) {
    return this.each(function (t) {
        t.inst.enable(t.node, e);
    });
});
j.Api.register(["buttons().disable()", "button().disable()"], function () {
    return this.each(function (e) {
        e.inst.disable(e.node);
    });
});
j.Api.register("button().index()", function () {
    var e = null;
    return (
        this.each(function (t) {
            var r = t.inst.index(t.node);
            r !== null && (e = r);
        }),
        e
    );
});
j.Api.registerPlural("buttons().nodes()", "button().node()", function () {
    var e = F();
    return (
        F(
            this.each(function (t) {
                e = e.add(t.inst.node(t.node));
            })
        ),
        e
    );
});
j.Api.registerPlural(
    "buttons().processing()",
    "button().processing()",
    function (e) {
        return e === void 0
            ? this.map(function (t) {
                  return t.inst.processing(t.node);
              })
            : this.each(function (t) {
                  t.inst.processing(t.node, e);
              });
    }
);
j.Api.registerPlural("buttons().text()", "button().text()", function (e) {
    return e === void 0
        ? this.map(function (t) {
              return t.inst.text(t.node);
          })
        : this.each(function (t) {
              t.inst.text(t.node, e);
          });
});
j.Api.registerPlural("buttons().trigger()", "button().trigger()", function () {
    return this.each(function (e) {
        e.inst.node(e.node).trigger("click");
    });
});
j.Api.register("button().popover()", function (e, t) {
    return this.map(function (r) {
        return r.inst._popover(e, this.button(this[0].node), t);
    });
});
j.Api.register("buttons().containers()", function () {
    var e = F(),
        t = this._groupSelector;
    return (
        this.iterator(!0, "table", function (r) {
            if (r._buttons)
                for (
                    var a = Ae.instanceSelector(t, r._buttons),
                        s = 0,
                        u = a.length;
                    s < u;
                    s++
                )
                    e = e.add(a[s].container());
        }),
        e
    );
});
j.Api.register("buttons().container()", function () {
    return this.containers().eq(0);
});
j.Api.register("button().add()", function (e, t, r) {
    var a = this.context;
    if (a.length) {
        var s = Ae.instanceSelector(this._groupSelector, a[0]._buttons);
        s.length && s[0].add(t, e, r);
    }
    return this.button(this._groupSelector, e);
});
j.Api.register("buttons().destroy()", function () {
    return (
        this.pluck("inst")
            .unique()
            .each(function (e) {
                e.destroy();
            }),
        this
    );
});
j.Api.registerPlural("buttons().remove()", "buttons().remove()", function () {
    return (
        this.each(function (e) {
            e.inst.remove(e.node);
        }),
        this
    );
});
var bn;
j.Api.register("buttons.info()", function (e, t, r) {
    var a = this;
    return e === !1
        ? (this.off("destroy.btn-info"),
          da(F("#datatables_buttons_info"), 400, function () {
              F(this).remove();
          }),
          clearTimeout(bn),
          (bn = null),
          this)
        : (bn && clearTimeout(bn),
          F("#datatables_buttons_info").length &&
              F("#datatables_buttons_info").remove(),
          (e = e ? "<h2>" + e + "</h2>" : ""),
          ca(
              F('<div id="datatables_buttons_info" class="dt-button-info"/>')
                  .html(e)
                  .append(
                      F("<div/>")[typeof t == "string" ? "html" : "append"](t)
                  )
                  .css("display", "none")
                  .appendTo("body")
          ),
          r !== void 0 &&
              r !== 0 &&
              (bn = setTimeout(function () {
                  a.buttons.info(!1);
              }, r)),
          this.on("destroy.btn-info", function () {
              a.buttons.info(!1);
          }),
          this);
});
j.Api.register("buttons.exportData()", function (e) {
    if (this.context.length) return Hl(new j.Api(this.context[0]), e);
});
j.Api.register("buttons.exportInfo()", function (e) {
    return (
        e || (e = {}),
        {
            filename: Pl(e),
            title: Rl(e),
            messageTop: ci(this, e.message || e.messageTop, "top"),
            messageBottom: ci(this, e.messageBottom, "bottom"),
        }
    );
});
var Pl = function (e) {
        var t =
            e.filename === "*" &&
            e.title !== "*" &&
            e.title !== void 0 &&
            e.title !== null &&
            e.title !== ""
                ? e.title
                : e.filename;
        if ((typeof t == "function" && (t = t()), t == null)) return null;
        t.indexOf("*") !== -1 &&
            (t = t.replace("*", F("head > title").text()).trim()),
            (t = t.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, ""));
        var r = ha(e.extension);
        return r || (r = ""), t + r;
    },
    ha = function (e) {
        return e == null ? null : typeof e == "function" ? e() : e;
    },
    Rl = function (e) {
        var t = ha(e.title);
        return t === null
            ? null
            : t.indexOf("*") !== -1
            ? t.replace("*", F("head > title").text() || "Exported data")
            : t;
    },
    ci = function (e, t, r) {
        var a = ha(t);
        if (a === null) return null;
        var s = F("caption", e.table().container()).eq(0);
        if (a === "*") {
            var u = s.css("caption-side");
            return u !== r ? null : s.length ? s.text() : "";
        }
        return a;
    },
    di = F("<textarea/>")[0],
    Hl = function (e, t) {
        var r = F.extend(
                !0,
                {},
                {
                    rows: null,
                    columns: "",
                    modifier: { search: "applied", order: "applied" },
                    orthogonal: "display",
                    stripHtml: !0,
                    stripNewlines: !0,
                    decodeEntities: !0,
                    trim: !0,
                    format: {
                        header: function (J) {
                            return Ae.stripData(J, r);
                        },
                        footer: function (J) {
                            return Ae.stripData(J, r);
                        },
                        body: function (J) {
                            return Ae.stripData(J, r);
                        },
                    },
                    customizeData: null,
                },
                t
            ),
            a = e
                .columns(r.columns)
                .indexes()
                .map(function (J) {
                    var K = e.column(J).header();
                    return r.format.header(K.innerHTML, J, K);
                })
                .toArray(),
            s = e.table().footer()
                ? e
                      .columns(r.columns)
                      .indexes()
                      .map(function (J) {
                          var K = e.column(J).footer();
                          return r.format.footer(K ? K.innerHTML : "", J, K);
                      })
                      .toArray()
                : null,
            u = F.extend({}, r.modifier);
        e.select &&
            typeof e.select.info == "function" &&
            u.selected === void 0 &&
            e.rows(r.rows, F.extend({ selected: !0 }, u)).any() &&
            F.extend(u, { selected: !0 });
        for (
            var c = e.rows(r.rows, u).indexes().toArray(),
                h = e.cells(c, r.columns),
                p = h.render(r.orthogonal).toArray(),
                g = h.nodes().toArray(),
                y = a.length,
                x = y > 0 ? p.length / y : 0,
                w = [],
                D = 0,
                N = 0,
                P = x;
            N < P;
            N++
        ) {
            for (var W = [y], O = 0; O < y; O++)
                (W[O] = r.format.body(p[D], N, O, g[D])), D++;
            w[N] = W;
        }
        var k = { header: a, footer: s, body: w };
        return r.customizeData && r.customizeData(k), k;
    };
F.fn.dataTable.Buttons = Ae;
F.fn.DataTable.Buttons = Ae;
F(document).on("init.dt plugin-init.dt", function (e, t) {
    if (e.namespace === "dt") {
        var r = t.oInit.buttons || j.defaults.buttons;
        r && !t._buttons && new Ae(t, r).container();
    }
});
function ao(e, t) {
    var r = new j.Api(e),
        a = t || r.init().buttons || j.defaults.buttons;
    return new Ae(r, a).container();
}
j.ext.feature.push({ fnInit: ao, cFeature: "B" });
j.ext.features && j.ext.features.register("buttons", ao);
/*! Bootstrap integration for DataTables' Buttons
 * ©2016 SpryMedia Ltd - datatables.net/license
 */ F.extend(!0, j.Buttons.defaults, {
    dom: {
        container: { className: "dt-buttons btn-group flex-wrap" },
        button: { className: "btn btn-secondary" },
        collection: {
            tag: "div",
            className: "dropdown-menu",
            closeButton: !1,
            button: {
                tag: "a",
                className: "dt-button dropdown-item",
                active: "active",
                disabled: "disabled",
            },
        },
        splitWrapper: {
            tag: "div",
            className: "dt-btn-split-wrapper btn-group",
            closeButton: !1,
        },
        splitDropdown: {
            tag: "button",
            text: "",
            className:
                "btn btn-secondary dt-btn-split-drop dropdown-toggle dropdown-toggle-split",
            closeButton: !1,
            align: "split-left",
            splitAlignClass: "dt-button-split-left",
        },
        splitDropdownButton: {
            tag: "button",
            className: "dt-btn-split-drop-button btn btn-secondary",
            closeButton: !1,
        },
    },
    buttonCreated: function (e, t) {
        return e.buttons ? F('<div class="btn-group"/>').append(t) : t;
    },
});
j.ext.buttons.collection.className += " dropdown-toggle";
j.ext.buttons.collection.rightAlignClassName = "dropdown-menu-right";
/*! Select for DataTables 1.6.0
 * 2015-2023 SpryMedia Ltd - datatables.net/license/mit
 */ j.select = {};
j.select.version = "1.6.0";
j.select.init = function (e) {
    var t = e.settings()[0];
    if (!t._select) {
        var r = e.state.loaded(),
            a = function (P, W, O) {
                if (!(O === null || O.select === void 0)) {
                    if (
                        (e.rows({ selected: !0 }).any() && e.rows().deselect(),
                        O.select.rows !== void 0 &&
                            e.rows(O.select.rows).select(),
                        e.columns({ selected: !0 }).any() &&
                            e.columns().deselect(),
                        O.select.columns !== void 0 &&
                            e.columns(O.select.columns).select(),
                        e.cells({ selected: !0 }).any() && e.cells().deselect(),
                        O.select.cells !== void 0)
                    )
                        for (var k = 0; k < O.select.cells.length; k++)
                            e.cell(
                                O.select.cells[k].row,
                                O.select.cells[k].column
                            ).select();
                    e.state.save();
                }
            };
        e.on("stateSaveParams", function (P, W, O) {
            (O.select = {}),
                (O.select.rows = e.rows({ selected: !0 }).ids(!0).toArray()),
                (O.select.columns = e.columns({ selected: !0 })[0]),
                (O.select.cells = e
                    .cells({ selected: !0 })[0]
                    .map(function (k) {
                        return { row: e.row(k.row).id(!0), column: k.column };
                    }));
        })
            .on("stateLoadParams", a)
            .one("init", function () {
                a(void 0, void 0, r);
            });
        var s = t.oInit.select,
            u = j.defaults.select,
            c = s === void 0 ? u : s,
            h = "row",
            p = "api",
            g = !1,
            y = !0,
            x = !0,
            w = "td, th",
            D = "selected",
            N = !1;
        (t._select = {}),
            c === !0
                ? ((p = "os"), (N = !0))
                : typeof c == "string"
                ? ((p = c), (N = !0))
                : F.isPlainObject(c) &&
                  (c.blurable !== void 0 && (g = c.blurable),
                  c.toggleable !== void 0 && (y = c.toggleable),
                  c.info !== void 0 && (x = c.info),
                  c.items !== void 0 && (h = c.items),
                  c.style !== void 0
                      ? ((p = c.style), (N = !0))
                      : ((p = "os"), (N = !0)),
                  c.selector !== void 0 && (w = c.selector),
                  c.className !== void 0 && (D = c.className)),
            e.select.selector(w),
            e.select.items(h),
            e.select.style(p),
            e.select.blurable(g),
            e.select.toggleable(y),
            e.select.info(x),
            (t._select.className = D),
            (F.fn.dataTable.ext.order["select-checkbox"] = function (P, W) {
                return this.api()
                    .column(W, { order: "index" })
                    .nodes()
                    .map(function (O) {
                        return P._select.items === "row"
                            ? F(O).parent().hasClass(P._select.className)
                            : P._select.items === "cell"
                            ? F(O).hasClass(P._select.className)
                            : !1;
                    });
            }),
            !N &&
                F(e.table().node()).hasClass("selectable") &&
                e.select.style("os");
    }
};
function hi(e, t, r) {
    var a,
        s,
        u,
        c = function (p, g) {
            if (p > g) {
                var y = g;
                (g = p), (p = y);
            }
            var x = !1;
            return e
                .columns(":visible")
                .indexes()
                .filter(function (w) {
                    return w === p && (x = !0), w === g ? ((x = !1), !0) : x;
                });
        },
        h = function (p, g) {
            var y = e.rows({ search: "applied" }).indexes();
            if (y.indexOf(p) > y.indexOf(g)) {
                var x = g;
                (g = p), (p = x);
            }
            var w = !1;
            return y.filter(function (D) {
                return D === p && (w = !0), D === g ? ((w = !1), !0) : w;
            });
        };
    !e.cells({ selected: !0 }).any() && !r
        ? ((s = c(0, t.column)), (u = h(0, t.row)))
        : ((s = c(r.column, t.column)), (u = h(r.row, t.row))),
        (a = e.cells(u, s).flatten()),
        e.cells(t, { selected: !0 }).any()
            ? e.cells(a).deselect()
            : e.cells(a).select();
}
function pa(e) {
    var t = e.settings()[0],
        r = t._select.selector;
    F(e.table().container())
        .off("mousedown.dtSelect", r)
        .off("mouseup.dtSelect", r)
        .off("click.dtSelect", r),
        F("body").off("click.dtSelect" + va(e.table().node()));
}
function io(e) {
    var t = F(e.table().container()),
        r = e.settings()[0],
        a = r._select.selector,
        s;
    t
        .on("mousedown.dtSelect", a, function (u) {
            (u.shiftKey || u.metaKey || u.ctrlKey) &&
                t
                    .css("-moz-user-select", "none")
                    .one("selectstart.dtSelect", a, function () {
                        return !1;
                    }),
                window.getSelection && (s = window.getSelection());
        })
        .on("mouseup.dtSelect", a, function () {
            t.css("-moz-user-select", "");
        })
        .on("click.dtSelect", a, function (u) {
            var c = e.select.items(),
                h;
            if (s) {
                var p = window.getSelection();
                if (
                    (!p.anchorNode ||
                        F(p.anchorNode).closest("table")[0] ===
                            e.table().node()) &&
                    p !== s
                )
                    return;
            }
            var g = e.settings()[0],
                y = e
                    .settings()[0]
                    .oClasses.sWrapper.trim()
                    .replace(/ +/g, ".");
            if (F(u.target).closest("div." + y)[0] == e.table().container()) {
                var x = e.cell(F(u.target).closest("td, th"));
                if (x.any()) {
                    var w = F.Event("user-select.dt");
                    if ((vt(e, w, [c, x, u]), !w.isDefaultPrevented())) {
                        var D = x.index();
                        c === "row"
                            ? ((h = D.row), jr(u, e, g, "row", h))
                            : c === "column"
                            ? ((h = x.index().column), jr(u, e, g, "column", h))
                            : c === "cell" &&
                              ((h = x.index()), jr(u, e, g, "cell", h)),
                            (g._select_lastCell = D);
                    }
                }
            }
        }),
        F("body").on("click.dtSelect" + va(e.table().node()), function (u) {
            if (r._select.blurable) {
                if (
                    F(u.target).parents().filter(e.table().container())
                        .length ||
                    F(u.target).parents("html").length === 0 ||
                    F(u.target).parents("div.DTE").length
                )
                    return;
                var c = F.Event("select-blur.dt");
                if ((vt(e, c, [u.target, u]), c.isDefaultPrevented())) return;
                kn(r, !0);
            }
        });
}
function vt(e, t, r, a) {
    (a && !e.flatten().length) ||
        (typeof t == "string" && (t = t + ".dt"),
        r.unshift(e),
        F(e.table().node()).trigger(t, r));
}
function Ol(e) {
    var t = e.settings()[0];
    if (!(!t._select.info || !t.aanFeatures.i) && e.select.style() !== "api") {
        var r = e.rows({ selected: !0 }).flatten().length,
            a = e.columns({ selected: !0 }).flatten().length,
            s = e.cells({ selected: !0 }).flatten().length,
            u = function (c, h, p) {
                c.append(
                    F('<span class="select-item"/>').append(
                        e.i18n(
                            "select." + h + "s",
                            {
                                _: "%d " + h + "s selected",
                                0: "",
                                1: "1 " + h + " selected",
                            },
                            p
                        )
                    )
                );
            };
        F.each(t.aanFeatures.i, function (c, h) {
            h = F(h);
            var p = F('<span class="select-info"/>');
            u(p, "row", r), u(p, "column", a), u(p, "cell", s);
            var g = h.children("span.select-info");
            g.length && g.remove(), p.text() !== "" && h.append(p);
        });
    }
}
function Ml(e) {
    var t = new j.Api(e);
    (e._select_init = !0),
        e.aoRowCreatedCallback.push({
            fn: function (r, a, s) {
                var u,
                    c,
                    h = e.aoData[s];
                for (
                    h._select_selected && F(r).addClass(e._select.className),
                        u = 0,
                        c = e.aoColumns.length;
                    u < c;
                    u++
                )
                    (e.aoColumns[u]._select_selected ||
                        (h._selected_cells && h._selected_cells[u])) &&
                        F(h.anCells[u]).addClass(e._select.className);
            },
            sName: "select-deferRender",
        }),
        t.on("preXhr.dt.dtSelect", function (r, a) {
            if (a === t.settings()[0]) {
                var s = t
                        .rows({ selected: !0 })
                        .ids(!0)
                        .filter(function (c) {
                            return c !== void 0;
                        }),
                    u = t
                        .cells({ selected: !0 })
                        .eq(0)
                        .map(function (c) {
                            var h = t.row(c.row).id(!0);
                            return h ? { row: h, column: c.column } : void 0;
                        })
                        .filter(function (c) {
                            return c !== void 0;
                        });
                t.one("draw.dt.dtSelect", function () {
                    t.rows(s).select(),
                        u.any() &&
                            u.each(function (c) {
                                t.cells(c.row, c.column).select();
                            });
                });
            }
        }),
        t.on(
            "draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt",
            function () {
                Ol(t), t.state.save();
            }
        ),
        t.on("destroy.dtSelect", function () {
            F(t.rows({ selected: !0 }).nodes()).removeClass(
                t.settings()[0]._select.className
            ),
                pa(t),
                t.off(".dtSelect"),
                F("body").off(".dtSelect" + va(t.table().node()));
        });
}
function pi(e, t, r, a) {
    var s = e[t + "s"]({ search: "applied" }).indexes(),
        u = F.inArray(a, s),
        c = F.inArray(r, s);
    if (!e[t + "s"]({ selected: !0 }).any() && u === -1)
        s.splice(F.inArray(r, s) + 1, s.length);
    else {
        if (u > c) {
            var h = c;
            (c = u), (u = h);
        }
        s.splice(c + 1, s.length), s.splice(0, u);
    }
    e[t](r, { selected: !0 }).any()
        ? (s.splice(F.inArray(r, s), 1), e[t + "s"](s).deselect())
        : e[t + "s"](s).select();
}
function kn(e, t) {
    if (t || e._select.style === "single") {
        var r = new j.Api(e);
        r.rows({ selected: !0 }).deselect(),
            r.columns({ selected: !0 }).deselect(),
            r.cells({ selected: !0 }).deselect();
    }
}
function jr(e, t, r, a, s) {
    var u = t.select.style(),
        c = t.select.toggleable(),
        h = t[a](s, { selected: !0 }).any();
    if (!(h && !c))
        if (u === "os")
            if (e.ctrlKey || e.metaKey) t[a](s).select(!h);
            else if (e.shiftKey)
                a === "cell"
                    ? hi(t, s, r._select_lastCell || null)
                    : pi(
                          t,
                          a,
                          s,
                          r._select_lastCell ? r._select_lastCell[a] : null
                      );
            else {
                var p = t[a + "s"]({ selected: !0 });
                h && p.flatten().length === 1
                    ? t[a](s).deselect()
                    : (p.deselect(), t[a](s).select());
            }
        else
            u == "multi+shift" && e.shiftKey
                ? a === "cell"
                    ? hi(t, s, r._select_lastCell || null)
                    : pi(
                          t,
                          a,
                          s,
                          r._select_lastCell ? r._select_lastCell[a] : null
                      )
                : t[a](s).select(!h);
}
function va(e) {
    return e.id.replace(/[^a-zA-Z0-9\-\_]/g, "-");
}
F.each(
    [
        { type: "row", prop: "aoData" },
        { type: "column", prop: "aoColumns" },
    ],
    function (e, t) {
        j.ext.selector[t.type].push(function (r, a, s) {
            var u = a.selected,
                c,
                h = [];
            if (u !== !0 && u !== !1) return s;
            for (var p = 0, g = s.length; p < g; p++)
                (c = r[t.prop][s[p]]),
                    ((u === !0 && c._select_selected === !0) ||
                        (u === !1 && !c._select_selected)) &&
                        h.push(s[p]);
            return h;
        });
    }
);
j.ext.selector.cell.push(function (e, t, r) {
    var a = t.selected,
        s,
        u = [];
    if (a === void 0) return r;
    for (var c = 0, h = r.length; c < h; c++)
        (s = e.aoData[r[c].row]),
            ((a === !0 &&
                s._selected_cells &&
                s._selected_cells[r[c].column] === !0) ||
                (a === !1 &&
                    (!s._selected_cells || !s._selected_cells[r[c].column]))) &&
                u.push(r[c]);
    return u;
});
var bt = j.Api.register,
    Qt = j.Api.registerPlural;
bt("select()", function () {
    return this.iterator("table", function (e) {
        j.select.init(new j.Api(e));
    });
});
bt("select.blurable()", function (e) {
    return e === void 0
        ? this.context[0]._select.blurable
        : this.iterator("table", function (t) {
              t._select.blurable = e;
          });
});
bt("select.toggleable()", function (e) {
    return e === void 0
        ? this.context[0]._select.toggleable
        : this.iterator("table", function (t) {
              t._select.toggleable = e;
          });
});
bt("select.info()", function (e) {
    return e === void 0
        ? this.context[0]._select.info
        : this.iterator("table", function (t) {
              t._select.info = e;
          });
});
bt("select.items()", function (e) {
    return e === void 0
        ? this.context[0]._select.items
        : this.iterator("table", function (t) {
              (t._select.items = e), vt(new j.Api(t), "selectItems", [e]);
          });
});
bt("select.style()", function (e) {
    return e === void 0
        ? this.context[0]._select.style
        : this.iterator("table", function (t) {
              t._select || j.select.init(new j.Api(t)),
                  t._select_init || Ml(t),
                  (t._select.style = e);
              var r = new j.Api(t);
              pa(r), e !== "api" && io(r), vt(new j.Api(t), "selectStyle", [e]);
          });
});
bt("select.selector()", function (e) {
    return e === void 0
        ? this.context[0]._select.selector
        : this.iterator("table", function (t) {
              pa(new j.Api(t)),
                  (t._select.selector = e),
                  t._select.style !== "api" && io(new j.Api(t));
          });
});
Qt("rows().select()", "row().select()", function (e) {
    var t = this;
    return e === !1
        ? this.deselect()
        : (this.iterator("row", function (r, a) {
              kn(r),
                  (r.aoData[a]._select_selected = !0),
                  F(r.aoData[a].nTr).addClass(r._select.className);
          }),
          this.iterator("table", function (r, a) {
              vt(t, "select", ["row", t[a]], !0);
          }),
          this);
});
bt("row().selected()", function () {
    var e = this.context[0];
    return !!(
        e &&
        this.length &&
        e.aoData[this[0]] &&
        e.aoData[this[0]]._select_selected
    );
});
Qt("columns().select()", "column().select()", function (e) {
    var t = this;
    return e === !1
        ? this.deselect()
        : (this.iterator("column", function (r, a) {
              kn(r), (r.aoColumns[a]._select_selected = !0);
              var s = new j.Api(r).column(a);
              F(s.header()).addClass(r._select.className),
                  F(s.footer()).addClass(r._select.className),
                  s.nodes().to$().addClass(r._select.className);
          }),
          this.iterator("table", function (r, a) {
              vt(t, "select", ["column", t[a]], !0);
          }),
          this);
});
bt("column().selected()", function () {
    var e = this.context[0];
    return !!(
        e &&
        this.length &&
        e.aoColumns[this[0]] &&
        e.aoColumns[this[0]]._select_selected
    );
});
Qt("cells().select()", "cell().select()", function (e) {
    var t = this;
    return e === !1
        ? this.deselect()
        : (this.iterator("cell", function (r, a, s) {
              kn(r);
              var u = r.aoData[a];
              u._selected_cells === void 0 && (u._selected_cells = []),
                  (u._selected_cells[s] = !0),
                  u.anCells && F(u.anCells[s]).addClass(r._select.className);
          }),
          this.iterator("table", function (r, a) {
              vt(t, "select", ["cell", t.cells(t[a]).indexes().toArray()], !0);
          }),
          this);
});
bt("cell().selected()", function () {
    var e = this.context[0];
    if (e && this.length) {
        var t = e.aoData[this[0][0].row];
        if (t && t._selected_cells && t._selected_cells[this[0][0].column])
            return !0;
    }
    return !1;
});
Qt("rows().deselect()", "row().deselect()", function () {
    var e = this;
    return (
        this.iterator("row", function (t, r) {
            (t.aoData[r]._select_selected = !1),
                (t._select_lastCell = null),
                F(t.aoData[r].nTr).removeClass(t._select.className);
        }),
        this.iterator("table", function (t, r) {
            vt(e, "deselect", ["row", e[r]], !0);
        }),
        this
    );
});
Qt("columns().deselect()", "column().deselect()", function () {
    var e = this;
    return (
        this.iterator("column", function (t, r) {
            t.aoColumns[r]._select_selected = !1;
            var a = new j.Api(t),
                s = a.column(r);
            F(s.header()).removeClass(t._select.className),
                F(s.footer()).removeClass(t._select.className),
                a
                    .cells(null, r)
                    .indexes()
                    .each(function (u) {
                        var c = t.aoData[u.row],
                            h = c._selected_cells;
                        c.anCells &&
                            (!h || !h[u.column]) &&
                            F(c.anCells[u.column]).removeClass(
                                t._select.className
                            );
                    });
        }),
        this.iterator("table", function (t, r) {
            vt(e, "deselect", ["column", e[r]], !0);
        }),
        this
    );
});
Qt("cells().deselect()", "cell().deselect()", function () {
    var e = this;
    return (
        this.iterator("cell", function (t, r, a) {
            var s = t.aoData[r];
            s._selected_cells !== void 0 && (s._selected_cells[a] = !1),
                s.anCells &&
                    !t.aoColumns[a]._select_selected &&
                    F(s.anCells[a]).removeClass(t._select.className);
        }),
        this.iterator("table", function (t, r) {
            vt(e, "deselect", ["cell", e[r]], !0);
        }),
        this
    );
});
function Gt(e, t) {
    return function (r) {
        return r.i18n("buttons." + e, t);
    };
}
function Pr(e) {
    var t = e._eventNamespace;
    return "draw.dt.DT" + t + " select.dt.DT" + t + " deselect.dt.DT" + t;
}
function ql(e, t) {
    return !!(
        (F.inArray("rows", t.limitTo) !== -1 &&
            e.rows({ selected: !0 }).any()) ||
        (F.inArray("columns", t.limitTo) !== -1 &&
            e.columns({ selected: !0 }).any()) ||
        (F.inArray("cells", t.limitTo) !== -1 &&
            e.cells({ selected: !0 }).any())
    );
}
var Rr = 0;
F.extend(j.ext.buttons, {
    selected: {
        text: Gt("selected", "Selected"),
        className: "buttons-selected",
        limitTo: ["rows", "columns", "cells"],
        init: function (e, t, r) {
            var a = this;
            (r._eventNamespace = ".select" + Rr++),
                e.on(Pr(r), function () {
                    a.enable(ql(e, r));
                }),
                this.disable();
        },
        destroy: function (e, t, r) {
            e.off(r._eventNamespace);
        },
    },
    selectedSingle: {
        text: Gt("selectedSingle", "Selected single"),
        className: "buttons-selected-single",
        init: function (e, t, r) {
            var a = this;
            (r._eventNamespace = ".select" + Rr++),
                e.on(Pr(r), function () {
                    var s =
                        e.rows({ selected: !0 }).flatten().length +
                        e.columns({ selected: !0 }).flatten().length +
                        e.cells({ selected: !0 }).flatten().length;
                    a.enable(s === 1);
                }),
                this.disable();
        },
        destroy: function (e, t, r) {
            e.off(r._eventNamespace);
        },
    },
    selectAll: {
        text: Gt("selectAll", "Select all"),
        className: "buttons-select-all",
        action: function () {
            var e = this.select.items();
            this[e + "s"]().select();
        },
    },
    selectNone: {
        text: Gt("selectNone", "Deselect all"),
        className: "buttons-select-none",
        action: function () {
            kn(this.settings()[0], !0);
        },
        init: function (e, t, r) {
            var a = this;
            (r._eventNamespace = ".select" + Rr++),
                e.on(Pr(r), function () {
                    var s =
                        e.rows({ selected: !0 }).flatten().length +
                        e.columns({ selected: !0 }).flatten().length +
                        e.cells({ selected: !0 }).flatten().length;
                    a.enable(s > 0);
                }),
                this.disable();
        },
        destroy: function (e, t, r) {
            e.off(r._eventNamespace);
        },
    },
    showSelected: {
        text: Gt("showSelected", "Show only selected"),
        className: "buttons-show-selected",
        action: function (e, t, r, a) {
            if (a._filter) {
                var s = j.ext.search.indexOf(a._filter);
                s !== -1 && (j.ext.search.splice(s, 1), (a._filter = null)),
                    this.active(!1);
            } else {
                var u = function (c, h, p) {
                    return c !== t.settings()[0]
                        ? !0
                        : c.aoData[p]._select_selected;
                };
                (a._filter = u), j.ext.search.push(u), this.active(!0);
            }
            t.draw();
        },
    },
});
F.each(["Row", "Column", "Cell"], function (e, t) {
    var r = t.toLowerCase();
    j.ext.buttons["select" + t + "s"] = {
        text: Gt("select" + t + "s", "Select " + r + "s"),
        className: "buttons-select-" + r + "s",
        action: function () {
            this.select.items(r);
        },
        init: function (a) {
            var s = this;
            a.on("selectItems.dt.DT", function (u, c, h) {
                s.active(h === r);
            });
        },
    };
});
F.fn.DataTable.select = j.select;
F(document).on("preInit.dt.dtSelect", function (e, t) {
    e.namespace === "dt" && j.select.init(new j.Api(t));
});
window._buildUrl = function (e, t) {
    let r = e.ajax.url() || "",
        a = e.ajax.params();
    return (a.action = t), r + "?" + $.param(a);
};
document.addEventListener("DOMContentLoaded", function () {
    let e = $("table");
    e.on("select.dt", function (t, r, a, s) {
        r.rows({ selected: !0 }).every(function (u, c, h) {
            var p = this.data();
            p.deleted_at == null &&
                (r.button("restore:name").disable(),
                r.button("forceDelete:name").disable(),
                r.button("forceDeleteSingle:name").disable());
        });
    }),
        e.on("deselect.dt", function (t, r, a, s) {
            r.rows({ selected: !0 }).every(function (u, c, h) {
                var p = this.data();
                p.deleted_at == null &&
                    (r.button("restore:name").disable(),
                    r.button("forceDelete:name").disable(),
                    r.button("forceDeleteSingle:name").disable());
            });
        });
});
document.addEventListener("DOMContentLoaded", function () {
    $.fn.dataTable.ext.buttons.add = {
        name: "add",
        className: "buttons-add btn-primary",
        text: '<i class="bi bi-plus"></i> New',
        action: function (e, t, r, a) {
            let s = window.location.toString();
            s.indexOf("?") > 0 && (s = s.substring(0, s.indexOf("?"))),
                (window.location = s + "/create");
        },
    };
});
document.addEventListener("DOMContentLoaded", function () {
    $.fn.dataTable.ext.buttons.export = {
        name: "export",
        extend: "collection",
        className: "btn-primary",
        text: 'Export&nbsp;<span class="caret"/>',
        buttons: [
            { extend: "csv", text: "CSV" },
            { extend: "excel", text: "Excel" },
            { extend: "pdf", text: "PDF" },
        ],
    };
});
document.addEventListener("DOMContentLoaded", function () {
    $.fn.dataTable.ext.buttons.csv = {
        name: "csv",
        className: "buttons-csv btn-primary",
        titleAttr: "Export as CSV",
        text: '<i class="bi bi-filetype-csv"></i>',
        action: function (e, t, r, a) {
            window.location = _buildUrl(t, "csv");
        },
    };
});
document.addEventListener("DOMContentLoaded", function () {
    $.fn.dataTable.ext.buttons.excel = {
        name: "excel",
        className: "buttons-excel btn-primary",
        titleAttr: "Export as Excel",
        text: '<i class="bi bi-file-earmark-excel"></i>',
        action: function (e, t, r, a) {
            window.location = _buildUrl(t, "excel");
        },
    };
});
document.addEventListener("DOMContentLoaded", function () {
    $.fn.dataTable.ext.buttons.pdf = {
        name: "pdf",
        className: "buttons-pdf btn-primary",
        titleAttr: "Export as PDF",
        text: '<i class="bi bi-file-pdf"></i>',
        action: function (e, t, r, a) {
            window.location = _buildUrl(t, "pdf");
        },
    };
});
document.addEventListener("DOMContentLoaded", function () {
    $.fn.dataTable.ext.buttons.print = {
        name: "print",
        className: "buttons-print btn-primary",
        titleAttr: "Print",
        text: '<i class="bi bi-printer"></i>',
        action: function (e, t, r, a) {
            window.location = _buildUrl(t, "print");
        },
    };
});
document.addEventListener("DOMContentLoaded", function () {
    $.fn.dataTable.ext.buttons.reset = {
        name: "reset",
        className: "btn-primary",
        titleAttr: "Reset",
        text: '<i class="bi bi-arrow-counterclockwise"></i>',
        action: function (e, t, r, a) {
            $(".dataTable")
                .find(":input")
                .each(function () {
                    $(this).val("");
                })
                .each(function (s) {
                    let u = $.fn.dataTable.util.escapeRegex($(this).val());
                    t.table()
                        .column($(this).closest("th").index())
                        .search(u || "", !1, !0);
                }),
                t.search("").draw();
        },
    };
});
document.addEventListener("DOMContentLoaded", function () {
    $.fn.dataTable.ext.buttons.reload = {
        name: "reload",
        className: "btn-primary",
        titleAttr: "Reload",
        text: '<i class="bi bi-arrow-repeat"></i>',
        action: function (e, t, r, a) {
            t.draw(!1);
        },
        init: function (e, t, r) {
            e.on("processing.dt", (a, s, u) => {
                let c = $(t);
                u
                    ? c.html(`<i class="spinner-border spinner-border-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</i>`)
                    : c.html('<i class="bi bi-arrow-repeat"></i>'),
                    c.attr("disabled", u);
            });
        },
    };
});
document.addEventListener("DOMContentLoaded", function () {
    $.fn.dataTable.ext.buttons.restore = {
        name: "restore",
        extend: "selected",
        className: "buttons-restore btn-primary",
        text: '<i class="bi bi-undo"></i> Restore',
        action: function (e, t, r, a) {
            (a.editor || t.editor()).remove(
                t.rows({ selected: !0 }).indexes(),
                {
                    title: a.formTitle || "Restore Record",
                    message: function (u, c) {
                        let h = c.row({ selected: !0 }).data();
                        return (
                            h.DTE_Restore ||
                            "Are you sure you want to restore record # " +
                                h.DT_RowId +
                                "?"
                        );
                    },
                    buttons: [
                        {
                            text: '<i class="bi bi-undo"></i> Restore',
                            className: "btn btn-primary btn-editor-restore",
                            action: function () {
                                this.submit(null, null, function (u) {
                                    u.action = "restore";
                                });
                            },
                        },
                        {
                            text: "Cancel",
                            className: "btn ml-2",
                            action: function () {
                                this.close();
                            },
                        },
                    ],
                }
            );
        },
    };
});
document.addEventListener("DOMContentLoaded", function () {
    $.fn.dataTable.ext.buttons.duplicate = {
        name: "duplicate",
        extend: "selected",
        className: "buttons-duplicate btn-primary",
        text: '<i class="bi bi-copy"></i> Duplicate',
        action: function (e, t, r, a) {
            (a.editor || t.editor())
                .edit(t.rows({ selected: !0 }).indexes(), {
                    title: a.formTitle || "Duplicate Record",
                    buttons: a.formButtons || [
                        {
                            text: '<i class="bi bi-copy"></i> Duplicate',
                            className: "btn btn-primary btn-editor-duplicate",
                            action: function () {
                                this.submit();
                            },
                        },
                        {
                            text: "Cancel",
                            className: "btn ml-2",
                            action: function () {
                                this.close();
                            },
                        },
                    ],
                })
                .mode("create");
        },
    };
});
document.addEventListener("DOMContentLoaded", function () {
    $.fn.dataTable.ext.buttons.duplicateSingle = {
        name: "duplicateSingle",
        extend: "selectedSingle",
        className: "buttons-duplicate btn-primary",
        text: '<i class="bi bi-copy"></i> Duplicate',
        action: function (e, t, r, a) {
            (a.editor || t.editor())
                .edit(t.rows({ selected: !0 }).indexes(), {
                    title: a.formTitle || "Duplicate Record",
                    buttons: a.formButtons || [
                        {
                            text: '<i class="bi bi-copy"></i> Duplicate',
                            className: "btn btn-primary btn-editor-duplicate",
                            action: function () {
                                this.submit();
                            },
                        },
                        {
                            text: "Cancel",
                            className: "btn ml-2",
                            action: function () {
                                this.close();
                            },
                        },
                    ],
                })
                .mode("create");
        },
    };
});
document.addEventListener("DOMContentLoaded", function () {
    $.fn.dataTable.ext.buttons.forceDelete = {
        name: "forceDelete",
        extend: "selected",
        className: "buttons-force-delete btn-danger",
        text: '<i class="bi bi-trash"></i> Force Delete',
        action: function (e, t, r, a) {
            (a.editor || t.editor()).remove(
                t.rows({ selected: !0 }).indexes(),
                {
                    title: a.formTitle || "Force Delete Record(/s)",
                    message: function (u, c) {
                        let h = c.rows(u.modifier()).data();
                        return (
                            "Are you sure you want to force delete the following record(s)? <ul><li>" +
                            (h[0].hasOwnProperty("DTE_Remove")
                                ? h.pluck("DTE_Remove")
                                : h.pluck("DT_RowId")
                            ).join("</li><li>") +
                            "</li></ul>"
                        );
                    },
                    buttons: [
                        {
                            text: '<i class="bi bi-trash"></i> Delete',
                            className: "btn btn-danger btn-editor-remove",
                            action: function () {
                                this.submit(null, null, function (u) {
                                    u.action = "forceDelete";
                                });
                            },
                        },
                        {
                            text: "Cancel",
                            className: "btn ml-2",
                            action: function () {
                                this.close();
                            },
                        },
                    ],
                }
            );
        },
    };
});
document.addEventListener("DOMContentLoaded", function () {
    $.fn.dataTable.ext.buttons.forceDeleteSingle = {
        name: "forceDeleteSingle",
        extend: "selectedSingle",
        className: "buttons-force-delete btn-danger",
        text: '<i class="bi bi-trash"></i> Force Delete',
        action: function (e, t, r, a) {
            (a.editor || t.editor()).remove(
                t.rows({ selected: !0 }).indexes(),
                {
                    title: a.formTitle || "Force Delete Record",
                    message: function (u, c) {
                        let h = c.row({ selected: !0 }).data();
                        return (
                            h.DTE_Remove ||
                            "Are you sure you want to force delete record # " +
                                h.DT_RowId +
                                "?"
                        );
                    },
                    buttons: [
                        {
                            text: '<i class="bi bi-trash"></i> Delete',
                            className: "btn btn-danger btn-editor-remove",
                            action: function () {
                                this.submit(null, null, function (u) {
                                    u.action = "forceDelete";
                                });
                            },
                        },
                        {
                            text: "Cancel",
                            className: "btn ml-2",
                            action: function () {
                                this.close();
                            },
                        },
                    ],
                }
            );
        },
    };
});
document.addEventListener("DOMContentLoaded", function () {
    $.fn.dataTable.ext.buttons.url = {
        name: "url",
        extend: "selectedSingle",
        className: "buttons-url",
        text: "URL Action (change me)",
        action: function (e, t, r, a) {
            let s = t.row({ selected: !0 }).data(),
                u = a.data || "DTE_URL",
                c = s[u] || "#";
            a.target == "_blank"
                ? window.open(c, "_blank")
                : (window.location = c);
        },
    };
});
document.addEventListener("DOMContentLoaded", function () {
    $.fn.dataTable.ext.buttons.ajax = {
        name: "ajax",
        extend: "selectedSingle",
        className: "buttons-ajax",
        text: "Ajax Action (Change Me)",
        action: function (e, t, r, a) {
            let s = t.row({ selected: !0 }).data(),
                u = s[a.data || "DTE_AJAX"] || "",
                c = a.method || "POST";
            if (a.hasOwnProperty("confirmation") && !confirm(a.confirmation))
                return a.hasOwnProperty("onCancel") && a.onCancel(), !1;
            $.ajax({ url: u, method: c, data: s })
                .done((h) => {
                    a.hasOwnProperty("onSuccess") && a.onSuccess(h), t.draw();
                })
                .fail((h) => {
                    a.hasOwnProperty("onError") && a.onError(h);
                });
        },
    };
});
document.addEventListener("DOMContentLoaded", function () {
    $.fn.dataTable.ext.buttons.ajaxBatch = {
        name: "ajaxBatch",
        extend: "selected",
        className: "buttons-ajax",
        text: "Ajax Batch Action (Change Me)",
        action: function (e, t, r, a) {
            let s = t.rows({ selected: !0 }).data(),
                u = { data: [] };
            for (i = 0; i < s.count(); i++) u.data.push(s[i]);
            if (a.hasOwnProperty("confirmation") && !confirm(a.confirmation))
                return a.hasOwnProperty("onCancel") && a.onCancel(), !1;
            let c = a.url || "",
                h = a.method || "POST";
            $.ajax({ url: c, method: h, data: u })
                .done((p) => {
                    a.hasOwnProperty("onSuccess") && a.onSuccess(p), t.draw();
                })
                .fail((p) => {
                    a.hasOwnProperty("onError") && a.onError(p);
                });
        },
    };
});
document.addEventListener("DOMContentLoaded", function () {
    $.fn.dataTable.ext.buttons.toggleScope = {
        name: "toggleScope",
        className: "buttons-toggle",
        text: '<i class="bi bi-square"></i> Toggle',
        action: function (e, t, r, a) {
            r.find("i").toggleClass("bi-check-square").toggleClass("bi-square");
            let s = a.scope,
                u = a.key || "scopes";
            t.on("preXhr." + s, (c, h, p) => {
                (p[u] = p[u] || {}),
                    (p[u][s] = r.find("i.bi-check-square").length);
            }),
                t.draw();
        },
    };
});
document.addEventListener("DOMContentLoaded", function () {
    ($.fn.dataTable.ext.buttons.withTrashed = {
        name: "withTrashed",
        className: "buttons-toggle",
        text: '<i class="bi bi-square"></i> Show Deleted',
        action: function (e, t, r, a) {
            r.find("i").toggleClass("fa-check-square").toggleClass("fa-square");
            let s = a.key || "scopes";
            t.on("preXhr.withTrashed", (u, c, h) => {
                (h[s] = h[s] || {}),
                    (h[s].withTrashed = r.find("i.fa-check-square").length);
            }),
                t.draw();
        },
    }),
        ($.fn.dataTable.ext.buttons.onlyTrashed = {
            name: "onlyTrashed",
            className: "buttons-toggle",
            text: '<i class="bi bi-square"></i> Only Deleted',
            action: function (e, t, r, a) {
                r.find("i")
                    .toggleClass("fa-check-square")
                    .toggleClass("fa-square");
                let s = a.key || "scopes";
                t.on("preXhr.onlyTrashed", (u, c, h) => {
                    (h[s] = h[s] || {}),
                        (h[s].onlyTrashed = r.find("i.fa-check-square").length);
                }),
                    t.draw();
            },
        });
});
document.addEventListener("DOMContentLoaded", function () {
    ($.fn.dataTable.render.badge = function (e) {
        return function (t, r, a) {
            return (
                e || (e = "info"),
                '<span class="badge badge-' + e + '">' + t + "</span>"
            );
        };
    }),
        ($.fn.dataTable.render.boolean = function () {
            return function (e) {
                let t = "danger",
                    r = "N";
                return (
                    (e || e === "1") && ((t = "success"), (r = "Y")),
                    '<span class="badge badge-' + t + '">' + r + "</span>"
                );
            };
        }),
        ($.fn.dataTable.render.suffix = function (e) {
            return function (t) {
                return t + " " + e;
            };
        }),
        ($.fn.dataTable.render.prefix = function (e) {
            return function (t) {
                return e + " " + t;
            };
        });
});
window.jQuery = window.$ = F;
window.DataTable = j;
F.extend(!0, j.defaults, {
    dom: "<'row'<'col-sm-12 mb-4'B>><'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
});
F.extend(!0, j.Buttons.defaults, { dom: { buttonLiner: { tag: "" } } });
F.extend(j.ext.classes, {
    sTable: "dataTable table table-striped table-bordered table-hover",
});
