(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["client-chunk-product-details"],
  {
    "0024": function (e, t, n) {
      "use strict";
      var a = n("f8b5"),
        r = n.n(a);
      r.a;
    },
    "00fd": function (e, t, n) {
      var a = n("9e69"),
        r = Object.prototype,
        i = r.hasOwnProperty,
        s = r.toString,
        o = a ? a.toStringTag : void 0;
      function c(e) {
        var t = i.call(e, o),
          n = e[o];
        try {
          e[o] = void 0;
          var a = !0;
        } catch (c) {}
        var r = s.call(e);
        return a && (t ? (e[o] = n) : delete e[o]), r;
      }
      e.exports = c;
    },
    "0104": function (e, t, n) {},
    "0393": function (e, t, n) {
      "use strict";
      n("210b");
      var a = n("604c"),
        r = n("d9bd");
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      t["a"] = a["a"].extend({
        name: "v-expansion-panels",
        provide: function () {
          return { expansionPanels: this };
        },
        props: {
          accordion: Boolean,
          disabled: Boolean,
          flat: Boolean,
          hover: Boolean,
          focusable: Boolean,
          inset: Boolean,
          popout: Boolean,
          readonly: Boolean,
          tile: Boolean,
        },
        computed: {
          classes: function () {
            return s({}, a["a"].options.computed.classes.call(this), {
              "v-expansion-panels": !0,
              "v-expansion-panels--accordion": this.accordion,
              "v-expansion-panels--flat": this.flat,
              "v-expansion-panels--hover": this.hover,
              "v-expansion-panels--focusable": this.focusable,
              "v-expansion-panels--inset": this.inset,
              "v-expansion-panels--popout": this.popout,
              "v-expansion-panels--tile": this.tile,
            });
          },
        },
        created: function () {
          this.$attrs.hasOwnProperty("expand") &&
            Object(r["a"])("expand", "multiple", this),
            Array.isArray(this.value) &&
              this.value.length > 0 &&
              "boolean" === typeof this.value[0] &&
              Object(r["a"])(
                ':value="[true, false, true]"',
                ':value="[0, 2]"',
                this
              );
        },
        methods: {
          updateItem: function (e, t) {
            var n = this.getValue(e, t),
              a = this.getValue(e, t + 1);
            (e.isActive = this.toggleMethod(n)),
              (e.nextIsActive = this.toggleMethod(a));
          },
        },
      });
    },
    "03dd": function (e, t, n) {
      var a = n("eac5"),
        r = n("57a5"),
        i = Object.prototype,
        s = i.hasOwnProperty;
      function o(e) {
        if (!a(e)) return r(e);
        var t = [];
        for (var n in Object(e))
          s.call(e, n) && "constructor" != n && t.push(n);
        return t;
      }
      e.exports = o;
    },
    "0644": function (e, t, n) {
      var a = n("3818"),
        r = 1,
        i = 4;
      function s(e) {
        return a(e, r | i);
      }
      e.exports = s;
    },
    "07c7": function (e, t) {
      function n() {
        return !1;
      }
      e.exports = n;
    },
    "087d": function (e, t) {
      function n(e, t) {
        var n = -1,
          a = t.length,
          r = e.length;
        while (++n < a) e[r + n] = t[n];
        return e;
      }
      e.exports = n;
    },
    "0930": function (e, t, n) {
      e.exports = n.p + "img/search.6a0e5332.svg";
    },
    "0963": function (e, t, n) {
      "use strict";
      var a = n("0104"),
        r = n.n(a);
      r.a;
    },
    "0b07": function (e, t, n) {
      var a = n("34ac"),
        r = n("3698");
      function i(e, t) {
        var n = r(e, t);
        return a(n) ? n : void 0;
      }
      e.exports = i;
    },
    "0d24": function (e, t, n) {
      (function (e) {
        var a = n("2b3e"),
          r = n("07c7"),
          i = t && !t.nodeType && t,
          s = i && "object" == typeof e && e && !e.nodeType && e,
          o = s && s.exports === i,
          c = o ? a.Buffer : void 0,
          l = c ? c.isBuffer : void 0,
          u = l || r;
        e.exports = u;
      }.call(this, n("62e4")(e)));
    },
    "0e07": function (e, t, n) {
      "use strict";
    },
    "0f0f": function (e, t, n) {
      var a = n("8eeb"),
        r = n("9934");
      function i(e, t) {
        return e && a(t, r(t), e);
      }
      e.exports = i;
    },
    1041: function (e, t, n) {
      var a = n("8eeb"),
        r = n("a029");
      function i(e, t) {
        return a(e, r(e), t);
      }
      e.exports = i;
    },
    1290: function (e, t) {
      function n(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      }
      e.exports = n;
    },
    1310: function (e, t) {
      function n(e) {
        return null != e && "object" == typeof e;
      }
      e.exports = n;
    },
    1331: function (e, t, n) {},
    "135c": function (e, t, n) {},
    1368: function (e, t, n) {
      var a = n("da03"),
        r = (function () {
          var e = /[^.]+$/.exec((a && a.keys && a.keys.IE_PROTO) || "");
          return e ? "Symbol(src)_1." + e : "";
        })();
      function i(e) {
        return !!r && r in e;
      }
      e.exports = i;
    },
    1659: function (e, t, n) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "v-fade-transition",
            [
              (null != e.cover && "" !== e.cover) ||
              (null != e.freetext && "" !== e.freetext) ||
              1 === e.atleastonefrozen
                ? n(
                    "v-sheet",
                    { staticClass: "restaurant-info text-left" },
                    [
                      n("v-row", { attrs: { "no-gutters": "" } }, [
                        n("span", { staticClass: "info-title" }, [
                          e._v(e._s(e.$t("Informazioni"))),
                        ]),
                      ]),
                      null != e.cover && "" !== e.cover
                        ? n(
                            "v-row",
                            {
                              staticClass: "justify-start",
                              attrs: { "no-gutters": "" },
                            },
                            [
                              n(
                                "span",
                                { staticClass: "info-cover text-start" },
                                [e._v(e._s(e.$t("Coperto")) + ": ")]
                              ),
                              n("span", {
                                staticClass: "info-cover text-start",
                                domProps: { innerHTML: e._s(e.cover) },
                              }),
                              n(
                                "span",
                                { staticClass: "info-cover text-start" },
                                [e._v("€")]
                              ),
                            ]
                          )
                        : e._e(),
                      null != e.freetext && "" !== e.freetext
                        ? n(
                            "v-row",
                            {
                              staticClass: "justify-start",
                              attrs: { "no-gutters": "" },
                            },
                            [
                              n("span", {
                                staticClass: "info-freetext text-start",
                                domProps: { innerHTML: e._s(e.freetext) },
                              }),
                            ]
                          )
                        : e._e(),
                      ((null != e.cover && "" !== e.cover) ||
                        (null != e.freetext && "" !== e.freetext)) &&
                      1 === e.atleastonefrozen
                        ? n("v-row", { attrs: { "no-gutters": "" } }, [
                            n("span"),
                          ])
                        : e._e(),
                      1 === e.atleastonefrozen
                        ? n(
                            "v-row",
                            {
                              staticClass: "justify-start",
                              attrs: { "no-gutters": "" },
                            },
                            [
                              n(
                                "span",
                                { staticClass: "info-frozen text-start" },
                                [
                                  e._v(
                                    "* " +
                                      e._s(
                                        e.$t(
                                          "Questo piatto potrebbe contenere cibi congelati o surgelati"
                                        )
                                      )
                                  ),
                                ]
                              ),
                            ]
                          )
                        : e._e(),
                    ],
                    1
                  )
                : e._e(),
            ],
            1
          );
        },
        r = [],
        i = n("2f62");
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                c(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var l = {
          name: "MenuInfo",
          computed: o(
            {},
            Object(i["e"])("restaurant", [
              "atleastonefrozen",
              "cover",
              "freetext",
            ])
          ),
        },
        u = l,
        p = (n("dfa9"), n("2877")),
        d = n("6544"),
        h = n.n(d),
        f = n("0789"),
        v = n("0fd9"),
        g = n("8dd9"),
        m = Object(p["a"])(u, a, r, !1, null, "26fcac3e", null);
      t["a"] = m.exports;
      h()(m, { VFadeTransition: f["c"], VRow: v["a"], VSheet: g["a"] });
    },
    1813: function (e, t, n) {
      "use strict";
      var a = n("7935"),
        r = n.n(a);
      r.a;
    },
    "1a2d": function (e, t, n) {
      var a = n("42a2"),
        r = n("1310"),
        i = "[object Map]";
      function s(e) {
        return r(e) && a(e) == i;
      }
      e.exports = s;
    },
    "1a8c": function (e, t) {
      function n(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      }
      e.exports = n;
    },
    "1acf": function (e, t, n) {
      "use strict";
      var a = n("5461"),
        r = n.n(a);
      r.a;
    },
    "1bac": function (e, t, n) {
      var a = n("7d1f"),
        r = n("a029"),
        i = n("9934");
      function s(e) {
        return a(e, i, r);
      }
      e.exports = s;
    },
    "1cec": function (e, t, n) {
      var a = n("0b07"),
        r = n("2b3e"),
        i = a(r, "Promise");
      e.exports = i;
    },
    "1efc": function (e, t) {
      function n(e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      }
      e.exports = n;
    },
    "1f07": function (e, t, n) {
      "use strict";
      n.r(t);
      var a = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "transition",
            {
              attrs: {
                name: "slide-x-reverse-transition",
                mode: "out-in",
                "leave-absolute": "",
              },
            },
            [
              a(
                "v-container",
                {
                  directives: [
                    {
                      name: "touch",
                      rawName: "v-touch",
                      value: {
                        right: function () {
                          return e.closeItem();
                        },
                      },
                      expression: "{ right: () => closeItem() }",
                    },
                  ],
                  staticClass: "page-container item-container",
                  attrs: {
                    fluid: "",
                    "fill-height": "",
                    "align-start": "",
                    "pa-0": "",
                  },
                },
                [
                  e.demoVersion ? a("demo-popup") : e._e(),
                  a(
                    "v-app-bar",
                    {
                      staticClass: "page-app-bar item-app-bar",
                      class: { "navbar--hidden": e.navBarReduced },
                      attrs: {
                        app: "",
                        height: "82px",
                        color: "white",
                        elevation: "1",
                        top: "",
                      },
                    },
                    [
                      a("img", {
                        ref: "icon",
                        staticClass: "back-icon",
                        attrs: {
                          src: n("8155"),
                          alt: "Item Icon",
                          width: "24",
                          height: "24",
                        },
                        on: { click: e.closeItem },
                      }),
                      a(
                        "v-flex",
                        { attrs: { "text-center": "" } },
                        [
                          a(
                            "v-fade-transition",
                            [
                              e.currentSpecialMenu
                                ? a(
                                    "v-toolbar-title",
                                    {
                                      staticStyle: {
                                        "max-width": "50%",
                                        margin: "0 auto",
                                      },
                                      attrs: {
                                        "text-center": "",
                                        "text-truncate": "",
                                      },
                                    },
                                    [
                                      e._v(
                                        "\n                         " +
                                          e._s(
                                            void 0 !== e.menuspec &&
                                              "" !== e.menuspec.name
                                              ? e.menuspec.name
                                              : e.$t("Menu")
                                          ) +
                                          " \n                    "
                                      ),
                                    ]
                                  )
                                : e._e(),
                            ],
                            1
                          ),
                          a("language-chooser-select"),
                          a("cart-widget", {
                            nativeOn: {
                              click: function (t) {
                                return e.toggleCart(t);
                              },
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a(
                    "v-content",
                    { staticClass: "page-content item-content" },
                    [
                      a(
                        "v-fade-transition",
                        [
                          e.currentSpecialMenu
                            ? a(
                                "v-container",
                                {
                                  staticClass: "inner-container",
                                  attrs: {
                                    fluid: "",
                                    "fill-height": "",
                                    "pa-0": "",
                                  },
                                },
                                [
                                  a(
                                    "v-flex",
                                    {
                                      attrs: {
                                        "justify-start": "",
                                        "align-start": "",
                                        "flex-direction": "column",
                                      },
                                    },
                                    [
                                      e.currentSpecialMenu.image_default ||
                                      e.currentSpecialMenu.image
                                        ? a(
                                            "v-sheet",
                                            {
                                              staticClass: "specialmenu--top",
                                              attrs: { tile: "" },
                                            },
                                            [
                                              a("v-img", {
                                                staticClass:
                                                  "d-inline-block logo-image",
                                                attrs: {
                                                  src:
                                                    void 0 !=
                                                    e.currentSpecialMenu.image
                                                      ? e.currentSpecialMenu
                                                          .image
                                                      : e.currentSpecialMenu
                                                          .image_default,
                                                  "aspect-ratio": 375 / 180,
                                                  cover: "",
                                                },
                                                scopedSlots: e._u(
                                                  [
                                                    {
                                                      key: "placeholder",
                                                      fn: function () {
                                                        return [
                                                          a(
                                                            "v-row",
                                                            {
                                                              staticClass:
                                                                "fill-height ma-0",
                                                              attrs: {
                                                                align: "center",
                                                                justify:
                                                                  "center",
                                                              },
                                                            },
                                                            [
                                                              a(
                                                                "v-progress-circular",
                                                                {
                                                                  attrs: {
                                                                    indeterminate:
                                                                      "",
                                                                    color:
                                                                      "yellow",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ];
                                                      },
                                                      proxy: !0,
                                                    },
                                                  ],
                                                  null,
                                                  !1,
                                                  2631675555
                                                ),
                                              }),
                                              "816933a93a4e4c53786c7e1ca4eefc6b" !==
                                                e.hash &&
                                              "26467bd3c32c3ca47ca99608e8f3c3f5" !==
                                                e.hash
                                                ? a(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "title-and-price d-flex flex-column",
                                                    },
                                                    [
                                                      a(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "title text-center text-truncate",
                                                        },
                                                        [
                                                          e._v(
                                                            e._s(
                                                              e
                                                                .currentSpecialMenu
                                                                .name
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                      void 0 !=
                                                      e.currentSpecialMenu.price
                                                        ? a(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "subtitle text-center text-truncate",
                                                            },
                                                            [
                                                              e._v(
                                                                "\n                                    " +
                                                                  e._s(
                                                                    e._f(
                                                                      "pricer"
                                                                    )(
                                                                      e
                                                                        .currentSpecialMenu
                                                                        .price
                                                                    )
                                                                  ) +
                                                                  " " +
                                                                  e._s(
                                                                    e.getPriceMode(
                                                                      e.currentSpecialMenu
                                                                    )
                                                                  ) +
                                                                  "\n                                "
                                                              ),
                                                            ]
                                                          )
                                                        : e._e(),
                                                    ]
                                                  )
                                                : e._e(),
                                            ],
                                            1
                                          )
                                        : e._e(),
                                      void 0 !==
                                        e.currentSpecialMenu.description &&
                                      e.currentSpecialMenu.description.length >
                                        0
                                        ? a(
                                            "v-row",
                                            {
                                              staticClass:
                                                "pa-5 pb-2 pt-2 no-gutters text-start justify-start specialmenu-description",
                                            },
                                            [
                                              a("p", {
                                                domProps: {
                                                  innerHTML: e._s(
                                                    e.currentSpecialMenu
                                                      .description
                                                  ),
                                                },
                                              }),
                                            ]
                                          )
                                        : e._e(),
                                      a("v-divider", { staticClass: "mx-5" }),
                                      a(
                                        "v-row",
                                        {
                                          staticClass:
                                            "pa-5 pb-2 pt-0 no-gutters text-start justify-start specialmenu-groups",
                                          class: {
                                            "extra-bottom-padding":
                                              e.addToCartEnabled,
                                          },
                                          attrs: { "no-gutters": "" },
                                        },
                                        [
                                          a(
                                            "v-col",
                                            e._l(
                                              e.currentSpecialMenu
                                                .specialcategories,
                                              function (t) {
                                                return a(
                                                  "v-row",
                                                  {
                                                    key: t.id,
                                                    staticClass:
                                                      "specialmenu-group",
                                                  },
                                                  [
                                                    a(
                                                      "v-col",
                                                      [
                                                        a(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "specialmenu-group--top pb-4",
                                                          },
                                                          [
                                                            a(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "title",
                                                              },
                                                              [
                                                                e._v(
                                                                  e._s(t.name)
                                                                ),
                                                              ]
                                                            ),
                                                            a("span", {
                                                              staticClass:
                                                                "subtitle",
                                                              domProps: {
                                                                innerHTML: e._s(
                                                                  t.description
                                                                ),
                                                              },
                                                            }),
                                                            "816933a93a4e4c53786c7e1ca4eefc6b" !==
                                                              e.hash &&
                                                            "26467bd3c32c3ca47ca99608e8f3c3f5" !==
                                                              e.hash
                                                              ? a(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "d-flex justify-space-between align-center",
                                                                  },
                                                                  [
                                                                    e.isSpecialMenuCategoryFullyRequired(
                                                                      t
                                                                    )
                                                                      ? a(
                                                                          "span",
                                                                          {
                                                                            staticClass:
                                                                              "subtitle",
                                                                            staticStyle:
                                                                              {
                                                                                color:
                                                                                  "#bbb",
                                                                              },
                                                                          },
                                                                          [
                                                                            e._v(
                                                                              "\n                                                    " +
                                                                                e._s(
                                                                                  (e.isSpecialMenuCategoryMandatory(
                                                                                    t
                                                                                  )
                                                                                    ? 1 ===
                                                                                      e.minItems(
                                                                                        t
                                                                                      )
                                                                                      ? e.$t(
                                                                                          "Opzione compresa nel menu"
                                                                                        )
                                                                                      : e.$t(
                                                                                          "Opzioni comprese nel menu"
                                                                                        )
                                                                                    : 1 ===
                                                                                      e.minItems(
                                                                                        t
                                                                                      )
                                                                                    ? e.$t(
                                                                                        "Scegli un'opzione"
                                                                                      )
                                                                                    : e.$t(
                                                                                        "Scegli le varianti richieste delle seguenti opzioni comprese",
                                                                                        [
                                                                                          e.minItems(
                                                                                            t
                                                                                          ),
                                                                                        ]
                                                                                      )) +
                                                                                    ":"
                                                                                ) +
                                                                                "\n                                                "
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : a(
                                                                          "span",
                                                                          {
                                                                            staticClass:
                                                                              "subtitle",
                                                                            staticStyle:
                                                                              {
                                                                                color:
                                                                                  "#bbb",
                                                                              },
                                                                          },
                                                                          [
                                                                            e._v(
                                                                              "\n                                                    " +
                                                                                e._s(
                                                                                  (0 ==
                                                                                  e.minItems(
                                                                                    t
                                                                                  )
                                                                                    ? 1 ===
                                                                                      e.maxItems(
                                                                                        t
                                                                                      )
                                                                                      ? e.$t(
                                                                                          "Scegli al massimo una opzione"
                                                                                        )
                                                                                      : e.$t(
                                                                                          "Scegli al massimo {0} opzioni",
                                                                                          [
                                                                                            t.selectableoptions,
                                                                                          ]
                                                                                        )
                                                                                    : e.minItems(
                                                                                        t
                                                                                      ) !==
                                                                                      e.maxItems(
                                                                                        t
                                                                                      )
                                                                                    ? e.$t(
                                                                                        "Scegli da {0} a {1} opzioni",
                                                                                        [
                                                                                          t.min_selectableoptions,
                                                                                          t.selectableoptions,
                                                                                        ]
                                                                                      )
                                                                                    : 1 ===
                                                                                      e.maxItems(
                                                                                        t
                                                                                      )
                                                                                    ? e.$t(
                                                                                        "Scegli una opzione"
                                                                                      )
                                                                                    : e.$t(
                                                                                        "Scegli {0} opzioni",
                                                                                        [
                                                                                          t.selectableoptions,
                                                                                        ]
                                                                                      )) +
                                                                                    ":"
                                                                                ) +
                                                                                "\n                                                "
                                                                            ),
                                                                          ]
                                                                        ),
                                                                  ]
                                                                )
                                                              : e._e(),
                                                          ]
                                                        ),
                                                        t.menuentries.length > 0
                                                          ? a(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "specialmenu-group--content",
                                                              },
                                                              [
                                                                a(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "specialmenu-group--wrap",
                                                                  },
                                                                  e._l(
                                                                    t.menuentries,
                                                                    function (
                                                                      n
                                                                    ) {
                                                                      return a(
                                                                        "menu-item-card",
                                                                        {
                                                                          key: n.id,
                                                                          attrs:
                                                                            {
                                                                              mode: 0,
                                                                              item: n,
                                                                              specialmenu:
                                                                                e
                                                                                  .currentSpecialMenu
                                                                                  .id,
                                                                              specialmenucategory:
                                                                                t.id,
                                                                            },
                                                                        }
                                                                      );
                                                                    }
                                                                  ),
                                                                  1
                                                                ),
                                                              ]
                                                            )
                                                          : e._e(),
                                                        a("v-divider"),
                                                      ],
                                                      1
                                                    ),
                                                  ],
                                                  1
                                                );
                                              }
                                            ),
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      e.addToCartEnabled &&
                                      "816933a93a4e4c53786c7e1ca4eefc6b" !==
                                        e.hash &&
                                      "26467bd3c32c3ca47ca99608e8f3c3f5" !==
                                        e.hash
                                        ? a(
                                            "div",
                                            { staticClass: "specialmenu-cart" },
                                            [
                                              a(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "d-flex col-6 align-center justify-space-between",
                                                  staticStyle: {
                                                    "max-width": "171px",
                                                  },
                                                },
                                                [
                                                  a(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        elevation: "0",
                                                        fab: "",
                                                        dark: "",
                                                        small: "",
                                                        color: "black",
                                                      },
                                                      on: {
                                                        click: function (t) {
                                                          return e.removeSpecialFromCart();
                                                        },
                                                      },
                                                    },
                                                    [
                                                      a(
                                                        "v-icon",
                                                        { attrs: { dark: "" } },
                                                        [e._v("mdi-minus")]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "quantity-value",
                                                    },
                                                    [
                                                      e._v(
                                                        e._s(
                                                          e.selectedMenuEntriesCartQty
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                  a(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        elevation: "0",
                                                        fab: "",
                                                        dark: "",
                                                        small: "",
                                                        color: "black",
                                                      },
                                                      on: {
                                                        click: function (t) {
                                                          return e.addSpecialToCart();
                                                        },
                                                      },
                                                    },
                                                    [
                                                      a(
                                                        "v-icon",
                                                        { attrs: { dark: "" } },
                                                        [e._v("mdi-plus")]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          )
                                        : e._e(),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        r = [],
        i = n("2f62"),
        s = n("7fca"),
        o = n("47cf"),
        c = n("7da6"),
        l = n("0e25"),
        u = n("7a86"),
        p = n("afbd"),
        d = (n("58e9"), n("7765"));
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                v(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function v(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var g = {
          components: {
            RelatedDrinks: u["a"],
            DemoPopup: d["a"],
            IngredientsList: l["a"],
            LanguageChooserSelect: s["a"],
            MenuItemCard: o["a"],
            CartWidget: c["a"],
          },
          props: { hash: String, id: Number },
          data: function () {
            return { menuSpecName: "", selectedMenuEntriesForCart: [] };
          },
          computed: f(
            {},
            Object(i["e"])("app", {
              appCurrentLanguage: function (e) {
                return e.currentLanguage;
              },
            }),
            {},
            Object(i["e"])("filters", [
              "currentSearchKey",
              "currentTags",
              "currentAllergenTags",
            ]),
            {},
            Object(i["e"])("restaurant", [
              "availableLanguages",
              "logo",
              "menuspec",
            ]),
            {},
            Object(i["e"])("cart", ["itemsCount", "itemsSpecial"]),
            {},
            Object(i["e"])("app", [
              "navBarReduced",
              "splashShown",
              "demoVersion",
            ]),
            {},
            Object(i["c"])("specialmenus", [
              "isSpecialMenuCategoryMandatory",
              "hasSpecialMenuItemOptions",
              "isSpecialMenuCategoryFullyRequired",
              "specialMenuTextForGA",
            ]),
            {},
            Object(i["c"])("restaurant", ["getPriceMode"]),
            {},
            Object(i["e"])("specialmenus", [
              "specialMenus",
              "currentSpecialMenu",
              "selectedMenuEntriesOfSpecialMenu",
              "addToCartEnabled",
              "addToCartsEnabled",
            ]),
            {
              selectedMenuEntriesCartQty: function () {
                var e = this,
                  t = this.itemsSpecial.find(function (t) {
                    return (
                      t.id === e.currentSpecialMenu.id &&
                      JSON.stringify(t.menuentries) ==
                        JSON.stringify(e.selectedMenuEntriesForCart)
                    );
                  });
                return t ? t.quantity : 0;
              },
            }
          ),
          methods: f(
            {},
            Object(i["b"])("cart", [
              "addSpecialMenuToCart",
              "removeSpecialMenuFromCart",
            ]),
            {},
            Object(i["b"])("specialmenus", [
              "resetSelectedMenuentries",
              "updateSelectedMenuentries",
              "resetSelectedMenuEntriesOfSpecialMenu",
            ]),
            {},
            Object(i["d"])("specialmenus", ["setCurrentSpecialMenu"]),
            {
              minItems: function (e) {
                return void 0 !== e && null != e.min_selectableoptions
                  ? e.min_selectableoptions
                  : 1;
              },
              maxItems: function (e) {
                return void 0 !== e && null != e.selectableoptions
                  ? e.selectableoptions
                  : 1;
              },
              getMenuImage: function () {
                return void 0 !== this.currentSpecialMenu.image
                  ? this.currentSpecialMenu.image
                  : this.currentSpecialMenu.image_default;
              },
              closeItem: function () {
                var e = this;
                Object(p["a"])(
                  this.$ga,
                  "exitSpecialMenu",
                  void 0 !== this.currentSpecialMenu.name_orig
                    ? this.currentSpecialMenu.name_orig
                    : this.currentSpecialMenu.name
                ),
                  setTimeout(function () {
                    e.$router.go(-1);
                  }, 200);
              },
              toggleCart: function () {
                this.$router.push({
                  name: "cart",
                  params: { hash: this.hash },
                }),
                  Object(p["a"])(this.$ga, "viewOrder");
              },
              addSpecialToCart: function () {
                var e = this.selectedMenuEntriesForCart;
                if (0 !== e.length) {
                  var t = {
                    id: this.currentSpecialMenu.id,
                    name: this.currentSpecialMenu.name,
                    menuentries: e,
                    price: this.currentSpecialMenu.price,
                  };
                  this.addSpecialMenuToCart(t),
                    Object(p["a"])(
                      this.$ga,
                      "specialMenuOrderAdd",
                      this.currentSpecialMenu.name
                    ),
                    console.log("adding to specialmenu" + JSON.stringify(t));
                  var n = this.specialMenuTextForGA(t);
                  null != n &&
                    n.length > 0 &&
                    Object(p["a"])(this.$ga, "specialMenuOrderAddDetail", n);
                }
              },
              removeSpecialFromCart: function () {
                var e = this.selectedMenuEntriesForCart;
                if (0 !== e.length) {
                  var t = {
                    id: this.currentSpecialMenu.id,
                    name: this.currentSpecialMenu.name,
                    menuentries: e,
                    price: this.currentSpecialMenu.price,
                  };
                  this.removeSpecialMenuFromCart(t),
                    Object(p["a"])(
                      this.$ga,
                      "specialMenuOrderRemove",
                      this.currentSpecialMenu.name
                    );
                  var n = this.specialMenuTextForGA(t);
                  null != n &&
                    n.length > 0 &&
                    Object(p["a"])(this.$ga, "specialMenuOrderRemoveDetail", n);
                }
              },
              setSelectedMenuEntriesForCart: function () {
                var e = this,
                  t = [],
                  n = !0,
                  a = !1,
                  r = void 0;
                try {
                  for (
                    var i,
                      s = function () {
                        var n = i.value,
                          a = e.isSpecialMenuCategoryMandatory(n),
                          r = e.isSpecialMenuCategoryFullyRequired(n);
                        if (a) {
                          var s = !0,
                            o = !1,
                            c = void 0;
                          try {
                            for (
                              var l, u = n.menuentries[Symbol.iterator]();
                              !(s = (l = u.next()).done);
                              s = !0
                            ) {
                              var p = l.value;
                              t.push({
                                id: p.id,
                                specialmenuid: e.currentSpecialMenu.id,
                                specialmenucategoryid: n.id,
                              });
                            }
                          } catch (_) {
                            (o = !0), (c = _);
                          } finally {
                            try {
                              s || null == u.return || u.return();
                            } finally {
                              if (o) throw c;
                            }
                          }
                        } else {
                          var d = e.selectedMenuEntriesOfSpecialMenu.filter(
                            function (e) {
                              return e.specialmenucategory === n.id;
                            }
                          );
                          if (r) {
                            var h = !0,
                              f = !1,
                              v = void 0;
                            try {
                              for (
                                var g,
                                  m = function () {
                                    var a = g.value,
                                      r = d.find(function (e) {
                                        return (
                                          null != e.menuentry &&
                                          e.menuentry.id === a.id
                                        );
                                      });
                                    null != r && null != r.menuentry
                                      ? void 0 === r.menuentry.specialmenuid
                                        ? t.push(
                                            Object.assign(
                                              {
                                                specialmenuid:
                                                  e.currentSpecialMenu.id,
                                                specialmenucategoryid: n.id,
                                              },
                                              r.menuentry
                                            )
                                          )
                                        : t.push(r.menuentry)
                                      : t.push({
                                          id: a.id,
                                          specialmenuid:
                                            e.currentSpecialMenu.id,
                                          specialmenucategoryid: n.id,
                                        });
                                  },
                                  b = n.menuentries[Symbol.iterator]();
                                !(h = (g = b.next()).done);
                                h = !0
                              )
                                m();
                            } catch (_) {
                              (f = !0), (v = _);
                            } finally {
                              try {
                                h || null == b.return || b.return();
                              } finally {
                                if (f) throw v;
                              }
                            }
                          } else
                            d.forEach(function (a) {
                              void 0 === a.menuentry.specialmenuid
                                ? t.push(
                                    Object.assign(
                                      {
                                        specialmenuid: e.currentSpecialMenu.id,
                                        specialmenucategoryid: n.id,
                                      },
                                      a.menuentry
                                    )
                                  )
                                : t.push(a.menuentry);
                            });
                        }
                      },
                      o =
                        this.currentSpecialMenu.specialcategories[
                          Symbol.iterator
                        ]();
                    !(n = (i = o.next()).done);
                    n = !0
                  )
                    s();
                } catch (c) {
                  (a = !0), (r = c);
                } finally {
                  try {
                    n || null == o.return || o.return();
                  } finally {
                    if (a) throw r;
                  }
                }
                this.selectedMenuEntriesForCart = t;
              },
            }
          ),
          mounted: function () {
            this.splashShown ||
              this.$router.push({
                name: "restaurant",
                params: { hash: this.hash },
              }),
              Object(p["a"])(this.$ga, "page", "special-menu");
          },
          activated: function () {
            var e = this;
            this.setCurrentSpecialMenu(
              this.specialMenus.filter(function (t) {
                return t.id === e.id;
              })[0]
            );
          },
          watch: {
            selectedMenuEntriesOfSpecialMenu: function () {
              void 0 !== this.currentSpecialMenu &&
                this.setSelectedMenuEntriesForCart();
            },
            currentSpecialMenu: function () {
              void 0 !== this.currentSpecialMenu &&
                (this.updateSelectedMenuentries(),
                this.resetSelectedMenuEntriesOfSpecialMenu(),
                this.setSelectedMenuEntriesForCart());
            },
          },
        },
        m = g,
        b = (n("7adc"), n("2877")),
        _ = n("6544"),
        y = n.n(_),
        O = n("40dc"),
        C = n("8336"),
        w = n("62ad"),
        j = n("a523"),
        P = n("a75b"),
        x = n("ce7e"),
        S = n("0789"),
        T = n("0e8f"),
        A = n("132d"),
        k = n("adda"),
        E = n("490a"),
        M = n("0fd9"),
        V = n("8dd9"),
        $ = n("2a7f"),
        R = Object(b["a"])(m, a, r, !1, null, "1d70c553", null);
      t["default"] = R.exports;
      y()(R, {
        VAppBar: O["a"],
        VBtn: C["a"],
        VCol: w["a"],
        VContainer: j["a"],
        VContent: P["a"],
        VDivider: x["a"],
        VFadeTransition: S["c"],
        VFlex: T["a"],
        VIcon: A["a"],
        VImg: k["a"],
        VProgressCircular: E["a"],
        VRow: M["a"],
        VSheet: V["a"],
        VToolbarTitle: $["a"],
      });
    },
    "1f08": function (e, t, n) {},
    "1fc8": function (e, t, n) {
      var a = n("4245");
      function r(e, t) {
        var n = a(this, e),
          r = n.size;
        return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
      }
      e.exports = r;
    },
    "210b": function (e, t, n) {},
    "23f3": function (e, t, n) {
      e.exports = n.p + "img/restaurant.1f743e03.svg";
    },
    2474: function (e, t, n) {
      var a = n("2b3e"),
        r = a.Uint8Array;
      e.exports = r;
    },
    2478: function (e, t, n) {
      var a = n("4245");
      function r(e) {
        return a(this, e).get(e);
      }
      e.exports = r;
    },
    2524: function (e, t, n) {
      var a = n("6044"),
        r = "__lodash_hash_undefined__";
      function i(e, t) {
        var n = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] = a && void 0 === t ? r : t),
          this
        );
      }
      e.exports = i;
    },
    "253c": function (e, t, n) {
      var a = n("3729"),
        r = n("1310"),
        i = "[object Arguments]";
      function s(e) {
        return r(e) && a(e) == i;
      }
      e.exports = s;
    },
    "269a": function (e, t) {
      e.exports = function (e, t) {
        var n =
          "function" === typeof e.exports ? e.exports.extendOptions : e.options;
        for (var a in ("function" === typeof e.exports &&
          (n.directives = e.exports.options.directives),
        (n.directives = n.directives || {}),
        t))
          n.directives[a] = n.directives[a] || t[a];
      };
    },
    "28c9": function (e, t) {
      function n() {
        (this.__data__ = []), (this.size = 0);
      }
      e.exports = n;
    },
    "29f3": function (e, t) {
      var n = Object.prototype,
        a = n.toString;
      function r(e) {
        return a.call(e);
      }
      e.exports = r;
    },
    "2b3e": function (e, t, n) {
      var a = n("585a"),
        r = "object" == typeof self && self && self.Object === Object && self,
        i = a || r || Function("return this")();
      e.exports = i;
    },
    "2bf7": function (e, t, n) {},
    "2d3b": function (e, t, n) {
      "use strict";
      n.r(t);
      var a = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "v-container",
            {
              directives: [
                {
                  name: "touch",
                  rawName: "v-touch",
                  value: {
                    right: function () {
                      return e.closeItem();
                    },
                  },
                  expression: "{ right: () => closeItem() }",
                },
              ],
              staticClass: "page-container main-restaurant-container",
              class: {
                "francescana-container":
                  "816933a93a4e4c53786c7e1ca4eefc6b" === e.hash ||
                  "26467bd3c32c3ca47ca99608e8f3c3f5" === e.hash,
              },
              attrs: {
                fluid: "",
                "fill-height": "",
                "align-start": "",
                "pa-0": "",
              },
            },
            [
              "816933a93a4e4c53786c7e1ca4eefc6b" === e.hash ||
              "26467bd3c32c3ca47ca99608e8f3c3f5" === e.hash
                ? a("div", { staticClass: "francescana-bg" })
                : e._e(),
              a(
                "v-app-bar",
                {
                  staticClass: "page-app-bar main-restaurant-app-bar",
                  class: { "navbar--hidden": e.navBarReduced },
                  attrs: {
                    app: "",
                    height: "82px",
                    color: "white",
                    elevation: "1",
                    top: "",
                  },
                },
                [
                  a("img", {
                    ref: "icon",
                    staticClass: "back-icon",
                    attrs: {
                      src: n("8155"),
                      alt: "Item Icon",
                      width: "24",
                      height: "24",
                    },
                    on: { click: e.closeItem },
                  }),
                  a(
                    "v-flex",
                    { attrs: { "text-center": "" } },
                    [
                      a(
                        "v-fade-transition",
                        [
                          a(
                            "v-toolbar-title",
                            {
                              staticStyle: {
                                "max-width": "50%",
                                margin: "0 auto",
                              },
                              attrs: { "text-center": "", "text-truncate": "" },
                            },
                            [e._v(e._s(e.$t("Cerca")))]
                          ),
                        ],
                        1
                      ),
                      a("language-chooser-select"),
                      a("cart-widget", {
                        nativeOn: {
                          click: function (t) {
                            return e.toggleCart(t);
                          },
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              a(
                "v-content",
                { staticClass: "page-content search-content" },
                [
                  a("filters-bar", { attrs: { hash: e.hash } }),
                  a(
                    "v-container",
                    {
                      staticClass: "inner-container align-start",
                      attrs: { fluid: "", "fill-height": "", "pa-0": "" },
                    },
                    [
                      a(
                        "v-flex",
                        {
                          attrs: {
                            "justify-start": "",
                            "align-start": "",
                            "flex-direction": "column",
                          },
                        },
                        [
                          a(
                            "v-flex",
                            {
                              attrs: {
                                "justify-start": "",
                                "align-start": "",
                                "flex-direction": "column",
                              },
                            },
                            [
                              a(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value:
                                        e.currentSearchKeyHasValue ||
                                        null != e.currentCategoryName ||
                                        e.currentTagsAllergenTagsNames.length >
                                          0,
                                      expression:
                                        "\n                            currentSearchKeyHasValue ||\n                            currentCategoryName != null ||\n                            currentTagsAllergenTagsNames.length > 0\n                        ",
                                    },
                                  ],
                                  staticClass: "search_results_typo",
                                },
                                [
                                  a(
                                    "v-sheet",
                                    {
                                      class: {
                                        "pl-4": !e.$vuetify.rtl,
                                        "pr-4": e.$vuetify.rtl,
                                      },
                                      attrs: { color: "grey lighten-5" },
                                    },
                                    [
                                      a("p", [
                                        e.currentSearchKeyHasValue &&
                                        e.weHaveSearchResults
                                          ? a(
                                              "span",
                                              { staticClass: "d-block" },
                                              [
                                                e._v(
                                                  e._s(
                                                    e.$t(
                                                      "Risultati di ricerca per"
                                                    )
                                                  ) +
                                                    "\n                                    "
                                                ),
                                                null != e.currentSearchKey
                                                  ? a("strong", [
                                                      e._v(
                                                        ' "' +
                                                          e._s(
                                                            e.currentSearchKey
                                                          ) +
                                                          '"'
                                                      ),
                                                    ])
                                                  : e._e(),
                                              ]
                                            )
                                          : e._e(),
                                        e.weHaveSearchResults
                                          ? e._e()
                                          : a(
                                              "span",
                                              { staticClass: "d-block" },
                                              [
                                                e._v(
                                                  e._s(
                                                    e.$t(
                                                      "Nessun risultato trovato"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                        e.currentTagsAllergenTagsNames.length >
                                        0
                                          ? a(
                                              "span",
                                              { staticClass: "d-block" },
                                              [
                                                e._v(
                                                  "\n                                    " +
                                                    e._s(
                                                      e.$t("Filtri applicati")
                                                    ) +
                                                    ":\n                                    "
                                                ),
                                                a("strong", [
                                                  e._v(
                                                    " " +
                                                      e._s(
                                                        e.currentTagsAllergenTagsNames
                                                      ) +
                                                      " "
                                                  ),
                                                ]),
                                              ]
                                            )
                                          : e._e(),
                                        null != e.currentCategoryName
                                          ? a(
                                              "span",
                                              { staticClass: "d-block" },
                                              [
                                                e._v(
                                                  e._s(e.$t("Categoria")) + ": "
                                                ),
                                                a("strong", [
                                                  e._v(
                                                    e._s(e.currentCategoryName)
                                                  ),
                                                ]),
                                              ]
                                            )
                                          : e._e(),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              e.weHaveSearchResults
                                ? a(
                                    "v-sheet",
                                    {
                                      class: {
                                        "pl-4": !e.$vuetify.rtl,
                                        "pr-4": e.$vuetify.rtl,
                                      },
                                    },
                                    e._l(
                                      e.filteredCategoriesAndProducts,
                                      function (t) {
                                        return a(
                                          "v-sheet",
                                          { key: t.id },
                                          [
                                            a(
                                              "div",
                                              { staticClass: "section-header" },
                                              [
                                                a(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "section-title text-start",
                                                  },
                                                  [e._v(e._s(t.name))]
                                                ),
                                                t.name_orig
                                                  ? a(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "section-sub-title text-start",
                                                      },
                                                      [e._v(e._s(t.name_orig))]
                                                    )
                                                  : e._e(),
                                              ]
                                            ),
                                            e._l(t.menuentries, function (t) {
                                              return a("menu-item-card", {
                                                key: t,
                                                staticClass:
                                                  "cart-menu-item-card",
                                                attrs: {
                                                  mode: 0,
                                                  item: e.getItem(t),
                                                },
                                              });
                                            }),
                                          ],
                                          2
                                        );
                                      }
                                    ),
                                    1
                                  )
                                : e._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        r = [],
        i = n("2f62"),
        s = n("7fca"),
        o = n("47cf"),
        c = n("7da6"),
        l = n("d885"),
        u = n("d0db");
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                h(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function h(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var f = {
          components: {
            LanguageChooserSelect: s["a"],
            MenuItemCard: o["a"],
            CartWidget: c["a"],
            MenuCategoriesAsExpansionPanels: l["a"],
            FiltersBar: u["a"],
          },
          props: { hash: String },
          data: function () {
            return {};
          },
          computed: d(
            {},
            Object(i["e"])("app", {
              appCurrentLanguage: function (e) {
                return e.currentLanguage;
              },
            }),
            {},
            Object(i["e"])("categories", ["menuCategories"]),
            {},
            Object(i["e"])("restaurant", ["availableLanguages", "logo"]),
            {},
            Object(i["e"])("cart", ["itemsCount"]),
            {},
            Object(i["e"])("app", ["navBarReduced", "splashShown"]),
            {},
            Object(i["e"])("filters", [
              "currentSearchKey",
              "currentTags",
              "currentAllergenTags",
            ]),
            {},
            Object(i["c"])("filters", [
              "filteredCategoriesAndProducts",
              "currentCategoryName",
              "filteredTags",
              "filteredAllergenTags",
            ]),
            {},
            Object(i["c"])("items", ["getItem"]),
            {
              weHaveSearchResults: function () {
                return (
                  void 0 !== this.filteredCategoriesAndProducts &&
                  this.filteredCategoriesAndProducts.length > 0
                );
              },
              currentSearchKeyHasValue: function () {
                return (
                  null != this.currentSearchKey &&
                  this.currentSearchKey.length > 0
                );
              },
              currentTagsAllergenTagsNames: function () {
                var e = [];
                if (void 0 != this.filteredTags && this.filteredTags.length > 0)
                  for (var t in this.filteredTags) {
                    var n = this.filteredTags[t];
                    this.currentTags.indexOf(n.id) > -1 &&
                      e.push('"' + n.name + '"');
                  }
                if (
                  void 0 != this.filteredAllergenTags &&
                  this.filteredAllergenTags.length > 0
                )
                  for (var t in this.filteredAllergenTags) {
                    n = this.filteredAllergenTags[t];
                    this.currentAllergenTags.indexOf(n.id) > -1 &&
                      e.push('"' + n.name + '"');
                  }
                var a = "";
                return e.length > 0 && (a = e.join(", ")), a;
              },
            }
          ),
          methods: d(
            {},
            Object(i["b"])("filters", [
              "setCurrentSearchKey",
              "setCurrentTags",
              "setCurrentAllergenTags",
            ]),
            {
              closeItem: function () {
                var e = this;
                this.setCurrentSearchKey(""),
                  this.setCurrentTags([]),
                  this.setCurrentAllergenTags([]),
                  setTimeout(function () {
                    e.$router.go(-1);
                  }, 500);
              },
              toggleCart: function () {
                this.$router.push({
                  name: "cart",
                  params: { hash: this.hash },
                });
              },
            }
          ),
          mounted: function () {
            this.splashShown ||
              this.$router.push({
                name: "restaurant",
                params: { hash: this.hash },
              });
          },
        },
        v = f,
        g = (n("8635"), n("2877")),
        m = n("6544"),
        b = n.n(m),
        _ = n("40dc"),
        y = n("a523"),
        O = n("a75b"),
        C = n("0789"),
        w = n("0e8f"),
        j = n("8dd9"),
        P = n("2a7f"),
        x = Object(g["a"])(v, a, r, !1, null, "56552ec6", null);
      t["default"] = x.exports;
      b()(x, {
        VAppBar: _["a"],
        VContainer: y["a"],
        VContent: O["a"],
        VFadeTransition: C["c"],
        VFlex: w["a"],
        VSheet: j["a"],
        VToolbarTitle: P["a"],
      });
    },
    "2d7c": function (e, t) {
      function n(e, t) {
        var n = -1,
          a = null == e ? 0 : e.length,
          r = 0,
          i = [];
        while (++n < a) {
          var s = e[n];
          t(s, n, e) && (i[r++] = s);
        }
        return i;
      }
      e.exports = n;
    },
    "2dcb": function (e, t, n) {
      var a = n("91e9"),
        r = a(Object.getPrototypeOf, Object);
      e.exports = r;
    },
    "2fcc": function (e, t) {
      function n(e) {
        var t = this.__data__,
          n = t["delete"](e);
        return (this.size = t.size), n;
      }
      e.exports = n;
    },
    "30c9": function (e, t, n) {
      var a = n("9520"),
        r = n("b218");
      function i(e) {
        return null != e && r(e.length) && !a(e);
      }
      e.exports = i;
    },
    "32b3": function (e, t, n) {
      var a = n("872a"),
        r = n("9638"),
        i = Object.prototype,
        s = i.hasOwnProperty;
      function o(e, t, n) {
        var i = e[t];
        (s.call(e, t) && r(i, n) && (void 0 !== n || t in e)) || a(e, t, n);
      }
      e.exports = o;
    },
    "32f4": function (e, t, n) {
      var a = n("2d7c"),
        r = n("d327"),
        i = Object.prototype,
        s = i.propertyIsEnumerable,
        o = Object.getOwnPropertySymbols,
        c = o
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  a(o(e), function (t) {
                    return s.call(e, t);
                  }));
            }
          : r;
      e.exports = c;
    },
    "34ac": function (e, t, n) {
      var a = n("9520"),
        r = n("1368"),
        i = n("1a8c"),
        s = n("dc57"),
        o = /[\\^$.*+?()[\]{}|]/g,
        c = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        u = Object.prototype,
        p = l.toString,
        d = u.hasOwnProperty,
        h = RegExp(
          "^" +
            p
              .call(d)
              .replace(o, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      function f(e) {
        if (!i(e) || r(e)) return !1;
        var t = a(e) ? h : c;
        return t.test(s(e));
      }
      e.exports = f;
    },
    3698: function (e, t) {
      function n(e, t) {
        return null == e ? void 0 : e[t];
      }
      e.exports = n;
    },
    "36c1": function (e, t, n) {},
    3718: function (e, t, n) {
      "use strict";
      (function (e) {
        var a = n("2f62"),
          r = n("7fca"),
          i = n("7da6"),
          s = n("5b90"),
          o = n("521e"),
          c = n("d0db"),
          l = n("99a0"),
          u = n("afbd"),
          p = n("1659"),
          d = n("7765");
        function h(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, a);
          }
          return n;
        }
        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? h(Object(n), !0).forEach(function (t) {
                  v(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function v(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        t["a"] = {
          components: {
            MenuInfo: p["a"],
            DemoPopup: d["a"],
            LanguageChooserSelect: r["a"],
            CartWidget: i["a"],
            SpecialMenusAsList: s["a"],
            WrongTranslationPopup: o["a"],
            FiltersBar: c["a"],
            BottomReviewBox: l["a"],
          },
          props: { hash: String },
          data: function () {
            return {
              drawer: null,
              offsetTop: 0,
              savedOffsetTop: 0,
              showWrongTranslationPopup: !1,
            };
          },
          computed: f(
            {},
            Object(a["e"])("app", {
              appCurrentLanguage: function (e) {
                return e.currentLanguage;
              },
            }),
            {},
            Object(a["e"])("restaurant", [
              "name",
              "description",
              "currentLanguage",
              "logo",
              "availableLanguages",
              "atleastonefrozen",
              "cover",
              "freetext",
              "reviewslinks",
              "socialsharelinks",
              "menuspec",
              "menuspecdisabled",
              "menucartadisabled",
              "vinicartadisabled",
            ]),
            {},
            Object(a["c"])("restaurant", ["isLangRTL"]),
            {},
            Object(a["e"])("categories", [
              "menuCategories",
              "menuDrinkCategories",
            ]),
            {},
            Object(a["e"])("app", [
              "navBarReduced",
              "splashShown",
              "demoVersion",
            ]),
            {},
            Object(a["e"])("specialmenus", ["specialMenus"]),
            {},
            Object(a["c"])("items", ["getAllItems"]),
            {
              version: function () {
                if (
                  e &&
                  Object({
                    VUE_APP_I18N_LOCALE: "it",
                    VUE_APP_I18N_FALLBACK_LOCALE: "it",
                    VUE_APP_TITLE: "Dishcovery",
                    VUE_APP_SHORT_TITLE: "Dishcovery",
                    VUE_APP_API_URL: "https://dishcovery.menu/api",
                    VUE_APP_ANALYTICS_ENABLED: "1",
                    VUE_APP_ANALYTICS_UA: "UA-126641753-1",
                    VUE_APP_ANALYTICS_GA4: "G-MKPM1NCE7P",
                    VUE_APP_ANALYTICS_GA4_ABI: "G-KBRTNKSFGF",
                    VUE_APP_ANALYTICS_GA4_COCA_NORD: "G-ZG1Q5FYB12",
                    VUE_APP_ANALYTICS_GA4_COCA_CENTER: "G-HYM8864DCM",
                    VUE_APP_ANALYTICS_GA4_COCA_SUD: "G-3LZ3ZVQCSE",
                    VUE_APP_VERSION: "4.7.5",
                    VUE_APP_ORDERS_ENABLED: "1",
                    VUE_APP_PUSHER_HOST: "127.0.0.1",
                    VUE_APP_PUSHER_PORT: "9001",
                    VUE_APP_PUSHER_APP_ID: "dishcovery-admin-app-id",
                    VUE_APP_PUSHER_APP_KEY: "dishcovery-admin",
                    VUE_APP_PUSHER_APP_SECRET:
                      "NhrHJn2mPZon9wlvqsHOlGhaQx1JVHZ8",
                    VUE_APP_PUSHER_APP_PATH: "",
                    VUE_APP_PUSHER_APP_CLUSTER: "eu",
                    VUE_APP_PUSHER_USE_SSL: "true",
                    VUE_APP_PUSHER_SCHEME: "https",
                    VUE_APP_PUSHER_ENABLED_TRANSPORT: "wss",
                    VUE_APP_USE_PUSHER: "0",
                    VUE_APP_SESSION_DURATION_HOURS: "2",
                    NODE_ENV: "production",
                    BASE_URL: "/app/",
                  })
                )
                  return "4.7.5";
              },
              justSpecialMenus: function () {
                return (
                  void 0 !== this.specialMenus &&
                  this.specialMenus.length > 0 &&
                  this.menucartadisabled
                );
              },
            }
          ),
          methods: f(
            {},
            Object(a["b"])("app", ["setNavBarReduced"]),
            {},
            Object(a["d"])("specialmenus", ["resetSelectedMenuentries"]),
            {
              onScroll: function (e) {
                var t = e.target.scrollingElement.scrollTop;
                t < 0 ||
                  Math.abs(t - this.offsetTop) < 30 ||
                  (t < 60
                    ? this.navBarReduced && this.setNavBarReduced(!1)
                    : this.navBarReduced || this.setNavBarReduced(!0),
                  (this.offsetTop = t));
              },
              toggleCart: function () {
                this.$router.push({
                  name: "cart",
                  params: { hash: this.hash },
                }),
                  Object(u["a"])(this.$ga, "viewOrder");
              },
              showReportTranslationPopup: function () {
                (this.drawer = !1),
                  (this.showWrongTranslationPopup = !0),
                  (document.getElementsByTagName("html")[0].className =
                    "no-scroll");
              },
              closeReportTranslationPopup: function () {
                document
                  .getElementsByTagName("html")[0]
                  .removeAttribute("class", "no-scroll"),
                  (this.showWrongTranslationPopup = !1);
              },
              navToMenus: function () {
                this.$router.push({
                  name: "restaurant",
                  params: { hash: this.hash },
                });
              },
              navToReviews: function () {
                this.$router.push({
                  name: "reviews",
                  props: { hash: this.hash },
                });
              },
              navToSocialshare: function () {
                this.$router.push({
                  name: "socialshare",
                  props: { hash: this.hash },
                });
              },
              navToAbout: function () {
                this.$router.push({
                  name: "about",
                  props: { hash: this.hash },
                });
              },
              navToCredits: function () {
                this.$router.push({
                  name: "credits",
                  props: { hash: this.hash },
                });
              },
            }
          ),
          mounted: function () {
            this.splashShown ||
              this.$router.push({
                name: "restaurant",
                params: { hash: this.hash },
              }),
              Object(u["a"])(this.$ga, "page", "special-menus");
          },
          activated: function () {
            this.resetSelectedMenuentries();
          },
        };
      }.call(this, n("f28c")));
    },
    3729: function (e, t, n) {
      var a = n("9e69"),
        r = n("00fd"),
        i = n("29f3"),
        s = "[object Null]",
        o = "[object Undefined]",
        c = a ? a.toStringTag : void 0;
      function l(e) {
        return null == e
          ? void 0 === e
            ? o
            : s
          : c && c in Object(e)
          ? r(e)
          : i(e);
      }
      e.exports = l;
    },
    3818: function (e, t, n) {
      var a = n("7e64"),
        r = n("8057"),
        i = n("32b3"),
        s = n("5b01"),
        o = n("0f0f"),
        c = n("e538"),
        l = n("4359"),
        u = n("54eb"),
        p = n("1041"),
        d = n("a994"),
        h = n("1bac"),
        f = n("42a2"),
        v = n("c87c"),
        g = n("c2b6"),
        m = n("fa21"),
        b = n("6747"),
        _ = n("0d24"),
        y = n("cc45"),
        O = n("1a8c"),
        C = n("d7ee"),
        w = n("ec69"),
        j = 1,
        P = 2,
        x = 4,
        S = "[object Arguments]",
        T = "[object Array]",
        A = "[object Boolean]",
        k = "[object Date]",
        E = "[object Error]",
        M = "[object Function]",
        V = "[object GeneratorFunction]",
        $ = "[object Map]",
        R = "[object Number]",
        I = "[object Object]",
        D = "[object RegExp]",
        L = "[object Set]",
        B = "[object String]",
        N = "[object Symbol]",
        U = "[object WeakMap]",
        F = "[object ArrayBuffer]",
        H = "[object DataView]",
        z = "[object Float32Array]",
        K = "[object Float64Array]",
        G = "[object Int8Array]",
        Y = "[object Int16Array]",
        W = "[object Int32Array]",
        q = "[object Uint8Array]",
        X = "[object Uint8ClampedArray]",
        Q = "[object Uint16Array]",
        Z = "[object Uint32Array]",
        J = {};
      function ee(e, t, n, T, A, k) {
        var E,
          $ = t & j,
          R = t & P,
          D = t & x;
        if ((n && (E = A ? n(e, T, A, k) : n(e)), void 0 !== E)) return E;
        if (!O(e)) return e;
        var L = b(e);
        if (L) {
          if (((E = v(e)), !$)) return l(e, E);
        } else {
          var B = f(e),
            N = B == M || B == V;
          if (_(e)) return c(e, $);
          if (B == I || B == S || (N && !A)) {
            if (((E = R || N ? {} : m(e)), !$))
              return R ? p(e, o(E, e)) : u(e, s(E, e));
          } else {
            if (!J[B]) return A ? e : {};
            E = g(e, B, $);
          }
        }
        k || (k = new a());
        var U = k.get(e);
        if (U) return U;
        k.set(e, E),
          C(e)
            ? e.forEach(function (a) {
                E.add(ee(a, t, n, a, e, k));
              })
            : y(e) &&
              e.forEach(function (a, r) {
                E.set(r, ee(a, t, n, r, e, k));
              });
        var F = D ? (R ? h : d) : R ? keysIn : w,
          H = L ? void 0 : F(e);
        return (
          r(H || e, function (a, r) {
            H && ((r = a), (a = e[r])), i(E, r, ee(a, t, n, r, e, k));
          }),
          E
        );
      }
      (J[S] =
        J[T] =
        J[F] =
        J[H] =
        J[A] =
        J[k] =
        J[z] =
        J[K] =
        J[G] =
        J[Y] =
        J[W] =
        J[$] =
        J[R] =
        J[I] =
        J[D] =
        J[L] =
        J[B] =
        J[N] =
        J[q] =
        J[X] =
        J[Q] =
        J[Z] =
          !0),
        (J[E] = J[M] = J[U] = !1),
        (e.exports = ee);
    },
    "39ff": function (e, t, n) {
      var a = n("0b07"),
        r = n("2b3e"),
        i = a(r, "WeakMap");
      e.exports = i;
    },
    "3b4a": function (e, t, n) {
      var a = n("0b07"),
        r = (function () {
          try {
            var e = a(Object, "defineProperty");
            return e({}, "", {}), e;
          } catch (t) {}
        })();
      e.exports = r;
    },
    "3ff5": function (e, t, n) {
      e.exports = n.p + "img/menu.112f8deb.svg";
    },
    "41c3": function (e, t, n) {
      var a = n("1a8c"),
        r = n("eac5"),
        i = n("ec8c"),
        s = Object.prototype,
        o = s.hasOwnProperty;
      function c(e) {
        if (!a(e)) return i(e);
        var t = r(e),
          n = [];
        for (var s in e)
          ("constructor" != s || (!t && o.call(e, s))) && n.push(s);
        return n;
      }
      e.exports = c;
    },
    4245: function (e, t, n) {
      var a = n("1290");
      function r(e, t) {
        var n = e.__data__;
        return a(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
      }
      e.exports = r;
    },
    "42a2": function (e, t, n) {
      var a = n("b5a7"),
        r = n("79bc"),
        i = n("1cec"),
        s = n("c869"),
        o = n("39ff"),
        c = n("3729"),
        l = n("dc57"),
        u = "[object Map]",
        p = "[object Object]",
        d = "[object Promise]",
        h = "[object Set]",
        f = "[object WeakMap]",
        v = "[object DataView]",
        g = l(a),
        m = l(r),
        b = l(i),
        _ = l(s),
        y = l(o),
        O = c;
      ((a && O(new a(new ArrayBuffer(1))) != v) ||
        (r && O(new r()) != u) ||
        (i && O(i.resolve()) != d) ||
        (s && O(new s()) != h) ||
        (o && O(new o()) != f)) &&
        (O = function (e) {
          var t = c(e),
            n = t == p ? e.constructor : void 0,
            a = n ? l(n) : "";
          if (a)
            switch (a) {
              case g:
                return v;
              case m:
                return u;
              case b:
                return d;
              case _:
                return h;
              case y:
                return f;
            }
          return t;
        }),
        (e.exports = O);
    },
    4359: function (e, t) {
      function n(e, t) {
        var n = -1,
          a = e.length;
        t || (t = Array(a));
        while (++n < a) t[n] = e[n];
        return t;
      }
      e.exports = n;
    },
    "43a2": function (e, t, n) {
      e.exports = n.p + "img/star.3ce8f710.svg";
    },
    "43a6d": function (e, t, n) {
      "use strict";
      var a = n("1f08"),
        r = n.n(a);
      r.a;
    },
    "47c1": function (e, t, n) {
      e.exports = n.p + "img/book.8e291897.svg";
    },
    4886: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "transition",
            {
              attrs: {
                name: "slide-x-reverse-transition",
                mode: "out-in",
                "leave-absolute": "",
              },
            },
            [
              a(
                "v-container",
                {
                  directives: [
                    {
                      name: "touch",
                      rawName: "v-touch",
                      value: {
                        right: function () {
                          return e.closeItem();
                        },
                      },
                      expression: "{ right: () => closeItem() }",
                    },
                  ],
                  staticClass: "page-container main-restaurant-container",
                  attrs: {
                    fluid: "",
                    "fill-height": "",
                    "align-start": "",
                    "pa-0": "",
                  },
                },
                [
                  a(
                    "v-app-bar",
                    {
                      staticClass: "page-app-bar main-restaurant-app-bar",
                      class: { "navbar--hidden": e.navBarReduced },
                      attrs: {
                        app: "",
                        height: "82px",
                        color: "white",
                        elevation: "1",
                        top: "",
                      },
                    },
                    [
                      a("img", {
                        ref: "icon",
                        staticClass: "back-icon",
                        attrs: {
                          src: n("8155"),
                          alt: "Item Icon",
                          width: "24",
                          height: "24",
                        },
                        on: { click: e.closeItem },
                      }),
                      a(
                        "v-flex",
                        { attrs: { "text-center": "" } },
                        [
                          a(
                            "v-fade-transition",
                            [
                              e.currentMenuCategory
                                ? a(
                                    "v-toolbar-title",
                                    {
                                      staticStyle: {
                                        "max-width": "50%",
                                        margin: "0 auto",
                                      },
                                      attrs: {
                                        "text-center": "",
                                        "text-truncate": "",
                                      },
                                    },
                                    [e._v(e._s(e.currentMenuCategory.name))]
                                  )
                                : e._e(),
                            ],
                            1
                          ),
                          a("language-chooser-select"),
                          a("cart-widget", {
                            nativeOn: {
                              click: function (t) {
                                return e.toggleCart(t);
                              },
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a(
                    "v-content",
                    { staticClass: "page-content main-restaurant-content" },
                    [
                      e.currentMenuCategory
                        ? a("filters-bar", {
                            attrs: {
                              hash: e.hash,
                              menuCategory: e.currentMenuCategory.id,
                            },
                          })
                        : e._e(),
                      a(
                        "v-container",
                        {
                          staticClass: "inner-container",
                          attrs: {
                            fluid: "",
                            "fill-height": "",
                            "pa-0": "",
                            "pl-4": "",
                          },
                        },
                        [
                          a(
                            "v-flex",
                            {
                              attrs: {
                                "text-center": "",
                                "justify-start": "",
                                "align-start": "",
                                "flex-direction": "column",
                              },
                            },
                            [
                              void 0 !== e.currentMenuCategory &&
                              void 0 !== e.currentMenuCategory.children
                                ? a("menu-categories-as-expansion-panels", {
                                    attrs: {
                                      menuCategories: e.orderedCategories,
                                    },
                                  })
                                : e._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        r = [],
        i = n("2f62"),
        s = n("7fca"),
        o = n("7da6"),
        c = n("d885"),
        l = n("d0db"),
        u = n("afbd"),
        p = n("0644"),
        d = n.n(p);
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                v(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function v(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var g = {
          components: {
            LanguageChooserSelect: s["a"],
            CartWidget: o["a"],
            MenuCategoriesAsExpansionPanels: c["a"],
            FiltersBar: l["a"],
          },
          props: { hash: String, catId: Number },
          data: function () {
            return {};
          },
          computed: f(
            {},
            Object(i["e"])("app", {
              appCurrentLanguage: function (e) {
                return e.currentLanguage;
              },
            }),
            {},
            Object(i["e"])("restaurant", [
              "availableLanguages",
              "logo",
              "buyableMenuEntriesCount",
            ]),
            {},
            Object(i["e"])("categories", ["currentMenuCategory"]),
            {},
            Object(i["e"])("cart", ["itemsCount"]),
            {},
            Object(i["e"])("app", ["navBarReduced", "splashShown"]),
            {
              orderedCategories: function () {
                return void 0 !== this.currentMenuCategory.children
                  ? d()(
                      this.currentMenuCategory.children.filter(function (e) {
                        return e.visible;
                      })
                    ).sort(function (e, t) {
                      return e.order - t.order;
                    })
                  : [];
              },
            }
          ),
          methods: f(
            {},
            Object(i["b"])("categories", ["setCurrentMenuCategory"]),
            {
              closeItem: function () {
                var e = this;
                Object(u["a"])(
                  this.$ga,
                  "exitCategory",
                  void 0 !== this.currentMenuCategory.name_orig
                    ? this.currentMenuCategory.name_orig
                    : this.currentMenuCategory.name
                ),
                  setTimeout(function () {
                    e.setCurrentMenuCategory(void 0), e.$router.go(-1);
                  }, 200);
              },
              toggleCart: function () {
                this.$router.push({
                  name: "cart",
                  params: { hash: this.hash },
                });
              },
            }
          ),
          mounted: function () {
            this.splashShown ||
              this.$router.push({
                name: "restaurant",
                params: { hash: this.hash },
              }),
              Object(u["a"])(this.$ga, "page", "category");
          },
          activated: function () {
            this.setCurrentMenuCategory(this.catId);
          },
        },
        m = g,
        b = (n("b883"), n("2877")),
        _ = n("6544"),
        y = n.n(_),
        O = n("40dc"),
        C = n("a523"),
        w = n("a75b"),
        j = n("0789"),
        P = n("0e8f"),
        x = n("2a7f"),
        S = Object(b["a"])(m, a, r, !1, null, "6d135832", null);
      t["default"] = S.exports;
      y()(S, {
        VAppBar: O["a"],
        VContainer: C["a"],
        VContent: w["a"],
        VFadeTransition: j["c"],
        VFlex: P["a"],
        VToolbarTitle: x["a"],
      });
    },
    "49e2": function (e, t, n) {
      "use strict";
      var a = n("0789"),
        r = n("9d65"),
        i = n("a9ad"),
        s = n("3206"),
        o = n("80d2"),
        c = n("58df"),
        l = Object(c["a"])(
          r["a"],
          i["a"],
          Object(s["a"])(
            "expansionPanel",
            "v-expansion-panel-content",
            "v-expansion-panel"
          )
        );
      t["a"] = l.extend().extend({
        name: "v-expansion-panel-content",
        computed: {
          isActive: function () {
            return this.expansionPanel.isActive;
          },
        },
        created: function () {
          this.expansionPanel.registerContent(this);
        },
        beforeDestroy: function () {
          this.expansionPanel.unregisterContent();
        },
        render: function (e) {
          var t = this;
          return e(
            a["a"],
            this.showLazyContent(function () {
              return [
                e(
                  "div",
                  t.setBackgroundColor(t.color, {
                    staticClass: "v-expansion-panel-content",
                    directives: [{ name: "show", value: t.isActive }],
                  }),
                  [
                    e(
                      "div",
                      { class: "v-expansion-panel-content__wrap" },
                      Object(o["m"])(t)
                    ),
                  ]
                ),
              ];
            })
          );
        },
      });
    },
    "49f4": function (e, t, n) {
      var a = n("6044");
      function r() {
        (this.__data__ = a ? a(null) : {}), (this.size = 0);
      }
      e.exports = r;
    },
    "4b66": function (e, t, n) {
      "use strict";
      var a = n("974b"),
        r = n.n(a);
      r.a;
    },
    "4b8a": function (e, t, n) {
      e.exports = n.p + "img/home.91ed4a69.svg";
    },
    "4be2": function (e, t, n) {},
    "4ca6": function (e, t, n) {
      "use strict";
      n("ff44");
      var a = n("132d"),
        r = n("a9ad"),
        i = n("7560"),
        s = n("f2e7"),
        o = n("2b0e"),
        c = o["default"].extend({
          name: "transitionable",
          props: { mode: String, origin: String, transition: String },
        }),
        l = n("fe6c"),
        u = n("58df"),
        p = n("80d2");
      function d(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = h(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function h(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = {},
          i = Object.keys(e);
        for (a = 0; a < i.length; a++)
          (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r;
      }
      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                g(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      t["a"] = Object(u["a"])(
        r["a"],
        Object(l["b"])(["left", "bottom"]),
        i["a"],
        s["a"],
        c
      ).extend({
        name: "v-badge",
        props: {
          avatar: Boolean,
          bordered: Boolean,
          color: { type: String, default: "primary" },
          content: { required: !1 },
          dot: Boolean,
          label: { type: String, default: "$vuetify.badge" },
          icon: String,
          inline: Boolean,
          offsetX: [Number, String],
          offsetY: [Number, String],
          overlap: Boolean,
          tile: Boolean,
          transition: { type: String, default: "scale-rotate-transition" },
          value: { default: !0 },
        },
        computed: {
          classes: function () {
            return v(
              {
                "v-badge--avatar": this.avatar,
                "v-badge--bordered": this.bordered,
                "v-badge--bottom": this.bottom,
                "v-badge--dot": this.dot,
                "v-badge--icon": null != this.icon,
                "v-badge--inline": this.inline,
                "v-badge--left": this.left,
                "v-badge--overlap": this.overlap,
                "v-badge--tile": this.tile,
              },
              this.themeClasses
            );
          },
          computedBottom: function () {
            return this.bottom ? "auto" : this.computedYOffset;
          },
          computedLeft: function () {
            return this.isRtl
              ? this.left
                ? this.computedXOffset
                : "auto"
              : this.left
              ? "auto"
              : this.computedXOffset;
          },
          computedRight: function () {
            return this.isRtl
              ? this.left
                ? "auto"
                : this.computedXOffset
              : this.left
              ? this.computedXOffset
              : "auto";
          },
          computedTop: function () {
            return this.bottom ? this.computedYOffset : "auto";
          },
          computedXOffset: function () {
            return this.calcPosition(this.offsetX);
          },
          computedYOffset: function () {
            return this.calcPosition(this.offsetY);
          },
          isRtl: function () {
            return this.$vuetify.rtl;
          },
          offset: function () {
            return this.overlap ? (this.dot ? 8 : 12) : this.dot ? 2 : 4;
          },
          styles: function () {
            return this.inline
              ? {}
              : {
                  bottom: this.computedBottom,
                  left: this.computedLeft,
                  right: this.computedRight,
                  top: this.computedTop,
                };
          },
        },
        methods: {
          calcPosition: function (e) {
            return "calc(100% - ".concat(Object(p["f"])(e || this.offset), ")");
          },
          genBadge: function () {
            var e = this.$vuetify.lang,
              t = this.$attrs["aria-label"] || e.t(this.label),
              n = this.setBackgroundColor(this.color, {
                staticClass: "v-badge__badge",
                style: this.styles,
                attrs: {
                  "aria-atomic": this.$attrs["aria-atomic"] || "true",
                  "aria-label": t,
                  "aria-live": this.$attrs["aria-live"] || "polite",
                  title: this.$attrs.title,
                  role: this.$attrs.role || "status",
                },
                directives: [{ name: "show", value: this.isActive }],
              }),
              a = this.$createElement("span", n, [this.genBadgeContent()]);
            return this.transition
              ? this.$createElement(
                  "transition",
                  {
                    props: {
                      name: this.transition,
                      origin: this.origin,
                      mode: this.mode,
                    },
                  },
                  [a]
                )
              : a;
          },
          genBadgeContent: function () {
            if (!this.dot) {
              var e = Object(p["m"])(this, "badge");
              return (
                e ||
                (this.content
                  ? String(this.content)
                  : this.icon
                  ? this.$createElement(a["a"], this.icon)
                  : void 0)
              );
            }
          },
          genBadgeWrapper: function () {
            return this.$createElement(
              "span",
              { staticClass: "v-badge__wrapper" },
              [this.genBadge()]
            );
          },
        },
        render: function (e) {
          var t = [this.genBadgeWrapper()],
            n = [Object(p["m"])(this)],
            a = this.$attrs,
            r =
              (a["aria-atomic"],
              a["aria-label"],
              a["aria-live"],
              a.role,
              a.title,
              d(a, [
                "aria-atomic",
                "aria-label",
                "aria-live",
                "role",
                "title",
              ]));
          return (
            this.inline && this.left ? n.unshift(t) : n.push(t),
            e(
              "span",
              { staticClass: "v-badge", attrs: r, class: this.classes },
              n
            )
          );
        },
      });
    },
    "4e14": function (e, t, n) {
      "use strict";
      var a = n("9f6c"),
        r = n.n(a);
      r.a;
    },
    "50d8": function (e, t) {
      function n(e, t) {
        var n = -1,
          a = Array(e);
        while (++n < e) a[n] = t(n);
        return a;
      }
      e.exports = n;
    },
    "521e": function (e, t, n) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "v-layout",
            { attrs: { "justify-center": "" } },
            [
              n(
                "v-dialog",
                {
                  attrs: {
                    "content-class": "wrong-translation-popup",
                    absolute: "",
                    persistent: "",
                    "max-width": "290",
                  },
                  model: {
                    value: e.showDialog,
                    callback: function (t) {
                      e.showDialog = t;
                    },
                    expression: "showDialog",
                  },
                },
                [
                  n(
                    "v-card",
                    [
                      n(
                        "v-card-title",
                        {
                          staticClass:
                            "headline d-flex align-start justify-space-between",
                        },
                        [
                          n("span", { staticClass: "popup-title" }, [
                            e._v(e._s(e.$t("Segnalazione"))),
                          ]),
                          n(
                            "v-btn",
                            {
                              staticClass: "elevation-0 btn-close",
                              attrs: {
                                color: "black",
                                fab: "",
                                small: "",
                                dark: "",
                              },
                              on: {
                                click: function (t) {
                                  return e.closePopup();
                                },
                              },
                            },
                            [n("v-icon", [e._v("mdi-window-close")])],
                            1
                          ),
                        ],
                        1
                      ),
                      n(
                        "v-card-text",
                        { staticClass: "pb-0 pt-4 ma-0 px-4" },
                        [
                          n("span", { staticClass: "hint d-block pb-4" }, [
                            e._v(
                              e._s(
                                e.$t(
                                  "Hai trovato una traduzione non corretta? Scrivici il tuo suggerimento di seguito!"
                                )
                              )
                            ),
                          ]),
                          n("v-textarea", {
                            attrs: {
                              "auto-grow": !0,
                              clearable: !1,
                              counter: !1,
                              filled: !1,
                              flat: !1,
                              hint: null,
                              label: null,
                              loading: !1,
                              "no-resize": !1,
                              outlined: !0,
                              "persistent-hint": !1,
                              placeholder: null,
                              rounded: !1,
                              "row-height": 24,
                              rows: 6,
                              shaped: !1,
                              "single-line": !1,
                              solo: !1,
                            },
                            model: {
                              value: e.reportValue,
                              callback: function (t) {
                                e.reportValue = t;
                              },
                              expression: "reportValue",
                            },
                          }),
                        ],
                        1
                      ),
                      n(
                        "v-card-actions",
                        { staticClass: "pt-0 px-4" },
                        [
                          n(
                            "v-btn",
                            {
                              staticClass:
                                "button-send d-flex col-12 mt-0 mb-4",
                              attrs: {
                                elevation: "0",
                                dark: "",
                                color: "black",
                              },
                              on: {
                                click: function (t) {
                                  return e.sendReport();
                                },
                              },
                            },
                            [
                              n("span", { staticClass: "title" }, [
                                e._v(e._s(e.$t("Invia segnalazione"))),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              n(
                "v-snackbar",
                {
                  staticStyle: { color: "black" },
                  attrs: {
                    timeout: 2e3,
                    top: !0,
                    "multi-line": !0,
                    color: "amber lighten-1",
                  },
                  model: {
                    value: e.snackBarMoreText,
                    callback: function (t) {
                      e.snackBarMoreText = t;
                    },
                    expression: "snackBarMoreText",
                  },
                },
                [
                  n("v-icon", { staticStyle: { color: "black" } }, [
                    e._v("mdi-exclamation"),
                  ]),
                  n("span", [
                    e._v(
                      e._s(
                        e.$t(
                          "Descrivere più nel dettaglio l'errore di traduzione."
                        )
                      )
                    ),
                  ]),
                ],
                1
              ),
              n(
                "v-snackbar",
                {
                  attrs: {
                    "multi-line": !0,
                    timeout: 3e3,
                    top: !0,
                    color: "green",
                  },
                  model: {
                    value: e.snackBarResultOK,
                    callback: function (t) {
                      e.snackBarResultOK = t;
                    },
                    expression: "snackBarResultOK",
                  },
                },
                [
                  n("v-icon", { staticClass: "mr-3", attrs: { dark: "" } }, [
                    e._v("mdi-check"),
                  ]),
                  e._v(
                    "\n        " +
                      e._s(
                        e.$t(
                          "Segnalazione inviata con successo. Grazie per il tuo contributo!"
                        )
                      ) +
                      "\n    "
                  ),
                ],
                1
              ),
              n(
                "v-snackbar",
                {
                  attrs: {
                    "multi-line": !0,
                    top: !0,
                    timeout: 3e3,
                    color: "red lighten-1",
                  },
                  model: {
                    value: e.snackBarResultKO,
                    callback: function (t) {
                      e.snackBarResultKO = t;
                    },
                    expression: "snackBarResultKO",
                  },
                },
                [
                  n("v-icon", { staticClass: "mr-3", attrs: { dark: "" } }, [
                    e._v("mdi-emoticon-sad-outline"),
                  ]),
                  e._v(
                    "\n        " +
                      e._s(
                        e.$t(
                          "Errore nell'invio della segnalazione. Riprovare più tardi."
                        )
                      ) +
                      "\n    "
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        r = [],
        i = n("2f62"),
        s = n("2b0e"),
        o = n("68d6");
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var p = {
          props: ["showDialog"],
          mixins: [Object(o["a"])(["showDialog"], "emit-event")],
          data: function () {
            return {
              reportValue: "",
              snackBarMoreText: !1,
              snackBarResultOK: !1,
              snackBarResultKO: !1,
            };
          },
          computed: l(
            {},
            Object(i["e"])("app", {
              appCurrentLanguage: function (e) {
                return e.currentLanguage;
              },
            }),
            {},
            Object(i["e"])("restaurant", ["name"])
          ),
          methods: {
            closePopup: function () {
              this.$emit("close"),
                this.$store.commit("app/setRefreshingApp", !1);
            },
            sendReport: function () {
              var e = this;
              this.reportValue.length < 10
                ? (this.snackBarMoreText = !0)
                : (this.$store.commit("app/setRefreshingApp", !0),
                  s["default"].axios
                    .post(
                      "https://dishcovery.menu/api/sendRestaurantWrongTranslation",
                      {
                        messagetext: this.reportValue,
                        language: this.appCurrentLanguage,
                        restaurant: this.name,
                      }
                    )
                    .then(function (t) {
                      e.$store.commit("app/setRefreshingApp", !1),
                        "OK" === t.data.code
                          ? ((e.reportValue = ""),
                            (e.snackBarResultOK = !0),
                            e.closePopup())
                          : (e.snackBarResultKO = !0);
                    })
                    .catch(function (t) {
                      e.$store.commit("app/setRefreshingApp", !1),
                        console.log(t.response),
                        (e.snackBarResultKO = !0);
                    }));
            },
          },
          created: function () {
            this.ingredient;
          },
        },
        d = p,
        h = (n("4b66"), n("43a6d"), n("2877")),
        f = n("6544"),
        v = n.n(f),
        g = n("8336"),
        m = n("b0af"),
        b = n("99d9"),
        _ = n("169a"),
        y = n("132d"),
        O = n("a722"),
        C = n("2db4"),
        w = n("a844"),
        j = Object(h["a"])(d, a, r, !1, null, "1e6cdf76", null);
      t["a"] = j.exports;
      v()(j, {
        VBtn: g["a"],
        VCard: m["a"],
        VCardActions: b["a"],
        VCardText: b["b"],
        VCardTitle: b["c"],
        VDialog: _["a"],
        VIcon: y["a"],
        VLayout: O["a"],
        VSnackbar: C["a"],
        VTextarea: w["a"],
      });
    },
    5307: function (e, t, n) {
      e.exports = n.p + "img/forum.35fe1b75.svg";
    },
    5461: function (e, t, n) {},
    "54eb": function (e, t, n) {
      var a = n("8eeb"),
        r = n("32f4");
      function i(e, t) {
        return a(e, r(e), t);
      }
      e.exports = i;
    },
    "55a3": function (e, t) {
      function n(e) {
        return this.__data__.has(e);
      }
      e.exports = n;
    },
    "57a5": function (e, t, n) {
      var a = n("91e9"),
        r = a(Object.keys, Object);
      e.exports = r;
    },
    "585a": function (e, t, n) {
      (function (t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.exports = n;
      }.call(this, n("c8ba")));
    },
    "5b01": function (e, t, n) {
      var a = n("8eeb"),
        r = n("ec69");
      function i(e, t) {
        return e && a(t, r(t), e);
      }
      e.exports = i;
    },
    "5b90": function (e, t, n) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "v-expansion-panels",
            {
              attrs: {
                accordion: !1,
                popout: !1,
                inset: !1,
                multiple: !1,
                focusable: !1,
                disabled: !1,
                readonly: !1,
              },
            },
            e._l(e.specialMenus, function (t) {
              return n(
                "v-expansion-panel",
                {
                  key: t.id,
                  attrs: {
                    "active-class": "active-panel",
                    id: "xpp" + t.id,
                    readonly: "readonly",
                  },
                },
                [
                  n(
                    "v-expansion-panel-header",
                    {
                      staticClass: "category_header",
                      on: {
                        click: function (n) {
                          return e.clickedPanel(t);
                        },
                      },
                      scopedSlots: e._u(
                        [
                          {
                            key: "actions",
                            fn: function () {
                              return [
                                n("v-icon", { attrs: { color: "grey" } }, [
                                  e._v("mdi-chevron-right"),
                                ]),
                              ];
                            },
                            proxy: !0,
                          },
                        ],
                        null,
                        !0
                      ),
                    },
                    [
                      null != t.image
                        ? n("div", { staticClass: "category_image" }, [
                            n("span", {
                              style: {
                                "background-image": "url(" + t.image + ")",
                              },
                            }),
                          ])
                        : e._e(),
                      n("v-flex", { attrs: { "flex-column": "" } }, [
                        n("span", { staticClass: "title" }, [
                          e._v(e._s(t.name)),
                        ]),
                        t.name_orig
                          ? n("span", { staticClass: "sub-title" }, [
                              e._v(e._s(t.name_orig)),
                            ])
                          : e._e(),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              );
            }),
            1
          );
        },
        r = [],
        i = n("2f62"),
        s = n("47cf"),
        o = n("afbd");
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var p = {
          components: { MenuItemCard: s["a"] },
          props: [],
          data: function () {
            return {};
          },
          computed: l(
            {},
            Object(i["e"])("restaurant", [
              "name",
              "description",
              "currentLanguage",
              "logo",
              "availableLanguages",
              "atleastonefrozen",
              "cover",
              "freetext",
              "reviewslinks",
              "menuspec",
              "menucarta",
              "vinicarta",
            ]),
            {},
            Object(i["e"])("specialmenus", ["specialMenus"])
          ),
          created: function () {},
          methods: {
            clickedPanel: function (e) {
              void 0 !== e &&
                Object(o["a"])(
                  this.$ga,
                  "enterSpecialMenu",
                  void 0 !== e.name_orig ? e.name_orig : e.name
                ),
                this.$router.push({
                  name: "special-menu",
                  params: { hash: this.$store.state.restaurant.hash, id: e.id },
                });
            },
          },
        },
        d = p,
        h = (n("e3ff"), n("2877")),
        f = n("6544"),
        v = n.n(f),
        g = n("cd55"),
        m = n("c865"),
        b = n("0393"),
        _ = n("0e8f"),
        y = n("132d"),
        O = Object(h["a"])(d, a, r, !1, null, "77999671", null);
      t["a"] = O.exports;
      v()(O, {
        VExpansionPanel: g["a"],
        VExpansionPanelHeader: m["a"],
        VExpansionPanels: b["a"],
        VFlex: _["a"],
        VIcon: y["a"],
      });
    },
    "5d89": function (e, t, n) {
      var a = n("f8af");
      function r(e, t) {
        var n = t ? a(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      }
      e.exports = r;
    },
    "5e01": function (e, t, n) {
      "use strict";
      var a = n("135c"),
        r = n.n(a);
      r.a;
    },
    "5e2e": function (e, t, n) {
      var a = n("28c9"),
        r = n("69d5"),
        i = n("b4c0"),
        s = n("fba5"),
        o = n("67ca");
      function c(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        this.clear();
        while (++t < n) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      (c.prototype.clear = a),
        (c.prototype["delete"] = r),
        (c.prototype.get = i),
        (c.prototype.has = s),
        (c.prototype.set = o),
        (e.exports = c);
    },
    6044: function (e, t, n) {
      var a = n("0b07"),
        r = a(Object, "create");
      e.exports = r;
    },
    "60d5": function (e, t, n) {
      "use strict";
      n.r(t);
      var a = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "v-slide-x-reverse-transition",
            { attrs: { "leave-absolute": "" } },
            [
              a(
                "v-container",
                {
                  directives: [
                    {
                      name: "scroll",
                      rawName: "v-scroll",
                      value: e.onScroll,
                      expression: "onScroll",
                    },
                  ],
                  staticClass: "page-container main-restaurant-container",
                  class: {
                    "francescana-container":
                      "816933a93a4e4c53786c7e1ca4eefc6b" === e.hash ||
                      "26467bd3c32c3ca47ca99608e8f3c3f5" === e.hash,
                  },
                  attrs: {
                    fluid: "",
                    "fill-height": "",
                    "align-start": "",
                    "pa-0": "",
                  },
                },
                [
                  "816933a93a4e4c53786c7e1ca4eefc6b" === e.hash ||
                  "26467bd3c32c3ca47ca99608e8f3c3f5" === e.hash
                    ? a("div", { staticClass: "francescana-bg" })
                    : e._e(),
                  a(
                    "v-navigation-drawer",
                    {
                      staticClass:
                        "page-navigation-drawer main-restaurant-navigation-drawer",
                      attrs: {
                        app: "",
                        temporary: "",
                        left: !e.$vuetify.rtl,
                        right: e.$vuetify.rtl,
                        value: "false",
                      },
                      model: {
                        value: e.drawer,
                        callback: function (t) {
                          e.drawer = t;
                        },
                        expression: "drawer",
                      },
                    },
                    [
                      a(
                        "v-sheet",
                        {
                          staticClass: "drawer-restaurant-logo-container",
                          attrs: { tile: "" },
                        },
                        [
                          e.logo
                            ? a("v-img", {
                                key: e.logo,
                                staticClass: "splash-restaurant-logo",
                                attrs: {
                                  alt: "logo-restaurant",
                                  title: "Restaurant Logo",
                                  src: e.logo,
                                  "aspect-ratio": 248 / 54,
                                  contain: "",
                                },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                      a(
                        "v-list",
                        { attrs: { dense: "" } },
                        [
                          void 0 !== e.specialMenus &&
                          e.specialMenus.length > 0 &&
                          !e.menuspecdisabled &&
                          !e.menucartadisabled
                            ? a(
                                "v-list-item",
                                {
                                  on: {
                                    click: function (t) {
                                      return e.navToMenus();
                                    },
                                  },
                                },
                                [
                                  a("v-list-item-action", [
                                    a("img", {
                                      attrs: {
                                        width: "20",
                                        height: "20",
                                        src: n("47c1"),
                                      },
                                    }),
                                  ]),
                                  a(
                                    "v-list-item-content",
                                    [
                                      a("v-list-item-title", [
                                        e._v(e._s(e.$t("Menu"))),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                          a(
                            "v-list-item",
                            {
                              on: {
                                click: function (t) {
                                  return e.navToAbout();
                                },
                              },
                            },
                            [
                              a("v-list-item-action", [
                                a("img", {
                                  attrs: {
                                    width: "20",
                                    height: "20",
                                    src: n("4b8a"),
                                  },
                                }),
                              ]),
                              a(
                                "v-list-item-content",
                                [
                                  a("v-list-item-title", [
                                    e._v(e._s(e.$t("Ristorante"))),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          void 0 !== e.reviewslinks && e.reviewslinks.length > 0
                            ? a(
                                "v-list-item",
                                {
                                  on: {
                                    click: function (t) {
                                      return e.navToReviews();
                                    },
                                  },
                                },
                                [
                                  a("v-list-item-action", [
                                    a("img", {
                                      attrs: {
                                        width: "20",
                                        height: "20",
                                        src: n("43a2"),
                                      },
                                    }),
                                  ]),
                                  a(
                                    "v-list-item-content",
                                    [
                                      a("v-list-item-title", [
                                        e._v(
                                          e._s(e.$t("Scrivi una recensione"))
                                        ),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                          a(
                            "v-list-item",
                            {
                              on: {
                                click: function (t) {
                                  return e.showReportTranslationPopup();
                                },
                              },
                            },
                            [
                              a("v-list-item-action", [
                                a("img", {
                                  attrs: {
                                    width: "20",
                                    height: "20",
                                    src: n("5307"),
                                  },
                                }),
                              ]),
                              a(
                                "v-list-item-content",
                                [
                                  a("v-list-item-title", [
                                    e._v(
                                      e._s(e.$t("Segnala traduzione errata"))
                                    ),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          void 0 !== e.socialsharelinks &&
                          e.socialsharelinks.length > 0
                            ? a(
                                "v-list-item",
                                {
                                  on: {
                                    click: function (t) {
                                      return e.navToSocialshare();
                                    },
                                  },
                                },
                                [
                                  a("v-list-item-action", [
                                    a("img", {
                                      attrs: {
                                        width: "20",
                                        height: "20",
                                        src: n("b551"),
                                      },
                                    }),
                                  ]),
                                  a(
                                    "v-list-item-content",
                                    [
                                      a("v-list-item-title", [
                                        e._v(
                                          e._s(
                                            e.$t("Condividi la tua esperienza")
                                          )
                                        ),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                          a(
                            "v-list-item",
                            {
                              on: {
                                click: function (t) {
                                  return e.navToCredits();
                                },
                              },
                            },
                            [
                              a("v-list-item-action", [
                                a("img", {
                                  attrs: {
                                    width: "20",
                                    height: "20",
                                    src: n("a36f"),
                                  },
                                }),
                              ]),
                              a(
                                "v-list-item-content",
                                [
                                  a("v-list-item-title", [
                                    e._v(e._s(e.$t("Credits"))),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      a(
                        "v-sheet",
                        { staticClass: "powered-stuff" },
                        [
                          a("v-divider", { staticClass: "mx-5" }),
                          a(
                            "v-sheet",
                            {
                              staticClass:
                                "drawer-dishcovery-powered-container",
                            },
                            [
                              a("img", {
                                staticClass: "language-chooser-dishcovery-logo",
                                attrs: {
                                  alt: "logo-dishcovery",
                                  title: "Dishcovery Logo",
                                  src: n("cf05"),
                                  width: "30",
                                  height: "30",
                                },
                              }),
                              a("span", { staticClass: "font-weight-bold" }, [
                                e._v("Powered by Dishcovery"),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                      e.version
                        ? a("v-sheet", { staticClass: "version-stuff" }, [
                            a(
                              "span",
                              { staticClass: "text-center d-block pb-1" },
                              [e._v("v. " + e._s(e.version))]
                            ),
                          ])
                        : e._e(),
                    ],
                    1
                  ),
                  e.demoVersion ? a("demo-popup") : e._e(),
                  a(
                    "v-app-bar",
                    {
                      staticClass: "page-app-bar main-restaurant-app-bar",
                      class: { "navbar--hidden": e.navBarReduced },
                      attrs: {
                        app: "",
                        height: "82px",
                        color: "white",
                        elevation: "1",
                        top: "",
                      },
                    },
                    [
                      a(
                        "v-btn",
                        {
                          staticClass:
                            "v-btn--icon v-app-bar__nav-icon elevation-0",
                          attrs: {
                            absolute: "",
                            color: "white",
                            fab: "",
                            small: "",
                          },
                          on: {
                            click: function (t) {
                              t.stopPropagation(), (e.drawer = !e.drawer);
                            },
                          },
                        },
                        [
                          a("v-img", {
                            staticClass: "v-icon",
                            attrs: {
                              title: "menu",
                              alt: "menu",
                              contain: "",
                              src: n("3ff5"),
                              height: "19",
                              "aspect-ratio": 24 / 19,
                            },
                          }),
                        ],
                        1
                      ),
                      a(
                        "v-flex",
                        { attrs: { "text-center": "" } },
                        [
                          a(
                            "v-toolbar-title",
                            { attrs: { "text-center": "" } },
                            [
                              e._v(
                                e._s(
                                  "" !== e.menuCartaName
                                    ? e.menuCartaName
                                    : e.$t("Menu alla carta")
                                )
                              ),
                            ]
                          ),
                          a("language-chooser-select"),
                          a("cart-widget", {
                            nativeOn: {
                              click: function (t) {
                                return e.toggleCart(t);
                              },
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a(
                    "v-content",
                    {
                      staticClass: "page-content main-restaurant-content",
                      class: {
                        "pb-12":
                          void 0 !== e.reviewslinks &&
                          e.reviewslinks.length > 0 &&
                          e.justALaCarteMenu,
                      },
                      attrs: { id: "main-restaurant-content" },
                    },
                    [
                      a("filters-bar", { attrs: { hash: e.hash } }),
                      a(
                        "v-container",
                        {
                          staticClass: "inner-container align-start",
                          attrs: { fluid: "", "pa-0": "", "pl-4": "" },
                        },
                        [
                          a(
                            "v-flex",
                            {
                              attrs: {
                                "text-center": "",
                                "justify-start": "",
                                "align-start": "",
                                "flex-direction": "column",
                              },
                            },
                            [
                              void 0 !== e.menuCategories &&
                              void 0 !== e.menuDrinkCategories
                                ? a("menu-categories-as-expansion-panels", {
                                    attrs: {
                                      menuCategories:
                                        0 === e.menuOrder
                                          ? e.menuCategories.concat(
                                              e.menuDrinkCategories
                                            )
                                          : e.menuDrinkCategories.concat(
                                              e.menuCategories
                                            ),
                                    },
                                  })
                                : e._e(),
                              a("v-divider", { staticClass: "close-panels" }),
                              (null != e.cover && "" !== e.cover) ||
                              (null != e.freetext && "" !== e.freetext) ||
                              1 === e.atleastonefrozen
                                ? a("br")
                                : e._e(),
                              (null != e.cover && "" !== e.cover) ||
                              (null != e.freetext && "" !== e.freetext) ||
                              1 === e.atleastonefrozen
                                ? a("menu-info", {
                                    class: {
                                      "restaurant-info-with-reviews":
                                        void 0 !== e.reviewslinks &&
                                        e.reviewslinks.length > 0 &&
                                        e.justALaCarteMenu,
                                    },
                                  })
                                : e._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  void 0 !== e.reviewslinks &&
                  e.reviewslinks.length > 0 &&
                  e.justALaCarteMenu
                    ? a("bottom-review-box", { attrs: { hash: e.hash } })
                    : e._e(),
                  a("wrong-translation-popup", {
                    attrs: { showDialog: e.showWrongTranslationPopup },
                    on: { close: e.closeReportTranslationPopup },
                  }),
                ],
                1
              ),
            ],
            1
          );
        },
        r = [],
        i = n("ed53"),
        s = i["a"],
        o = (n("f51f"), n("2877")),
        c = n("6544"),
        l = n.n(c),
        u = n("40dc"),
        p = n("8336"),
        d = n("a523"),
        h = n("a75b"),
        f = n("ce7e"),
        v = n("0e8f"),
        g = n("adda"),
        m = n("8860"),
        b = n("da13"),
        _ = n("1800"),
        y = n("5d23"),
        O = n("f774"),
        C = n("8dd9"),
        w = n("0789"),
        j = n("2a7f"),
        P = n("269a"),
        x = n.n(P),
        S = n("f977"),
        T = Object(o["a"])(s, a, r, !1, null, "c1f31606", null);
      t["default"] = T.exports;
      l()(T, {
        VAppBar: u["a"],
        VBtn: p["a"],
        VContainer: d["a"],
        VContent: h["a"],
        VDivider: f["a"],
        VFlex: v["a"],
        VImg: g["a"],
        VList: m["a"],
        VListItem: b["a"],
        VListItemAction: _["a"],
        VListItemContent: y["a"],
        VListItemTitle: y["c"],
        VNavigationDrawer: O["a"],
        VSheet: C["a"],
        VSlideXReverseTransition: w["d"],
        VToolbarTitle: j["a"],
      }),
        x()(T, { Scroll: S["a"] });
    },
    "65a8": function (e, t, n) {
      "use strict";
      n.r(t);
      var a = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "transition",
            {
              attrs: {
                name: "slide-x-reverse-transition",
                "leave-absolute": "",
              },
            },
            [
              a(
                "v-container",
                {
                  directives: [
                    {
                      name: "touch",
                      rawName: "v-touch",
                      value: {
                        right: function () {
                          return e.closeMyOrders();
                        },
                      },
                      expression: "{ right: () => closeMyOrders() }",
                    },
                  ],
                  staticClass: "page-container my-orders-container",
                  attrs: {
                    fluid: "",
                    "fill-height": "",
                    "align-start": "",
                    "pa-0": "",
                  },
                },
                [
                  a(
                    "v-app-bar",
                    {
                      staticClass: "page-app-bar my-orders-app-bar",
                      class: { "navbar--hidden": e.navBarReduced },
                      attrs: {
                        app: "",
                        height: "82px",
                        color: "white",
                        elevation: "1",
                        top: "",
                      },
                    },
                    [
                      a("img", {
                        ref: "icon",
                        staticClass: "back-icon",
                        attrs: {
                          src: n("8155"),
                          alt: "Cart Icon",
                          width: "24",
                          height: "24",
                        },
                        on: { click: e.closeMyOrders },
                      }),
                      a(
                        "v-flex",
                        { attrs: { "text-center": "" } },
                        [
                          a(
                            "v-toolbar-title",
                            { attrs: { "text-center": "" } },
                            [e._v(e._s(e.$t("I miei ordini")))]
                          ),
                          a("language-chooser-select"),
                          e._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a(
                    "v-content",
                    { staticClass: "page-content my-orders-content" },
                    [
                      a(
                        "v-fade-transition",
                        [
                          a(
                            "v-container",
                            {
                              staticClass: "inner-container",
                              attrs: {
                                fluid: "",
                                "fill-height": "",
                                "px-4": "",
                                "py-8": "",
                              },
                            },
                            [
                              a(
                                "div",
                                {
                                  staticClass:
                                    "pb-4 d-flex flex-row align-items-center justify-center",
                                  staticStyle: { width: "100%" },
                                },
                                [
                                  a(
                                    "v-btn",
                                    {
                                      staticClass: "d-flex",
                                      attrs: {
                                        elevation: "0",
                                        light: "",
                                        color: "primary",
                                      },
                                      on: { click: e.getMyOrders },
                                    },
                                    [
                                      a("v-icon", [e._v("mdi-reload")]),
                                      a("span", { staticClass: "pl-2" }, [
                                        e._v(e._s(e.$t("AGGIORNA ORA"))),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-expansion-panels",
                                {
                                  attrs: {
                                    accordion: !1,
                                    popout: !0,
                                    inset: !1,
                                    multiple: !1,
                                    focusable: !1,
                                    disabled: !1,
                                    readonly: !1,
                                  },
                                },
                                e._l(e.myOrders, function (t) {
                                  return a(
                                    "v-expansion-panel",
                                    {
                                      key: t.id,
                                      attrs: {
                                        "active-class": "active-panel",
                                        id: "xpp" + t.id,
                                      },
                                    },
                                    [
                                      a(
                                        "v-expansion-panel-header",
                                        {
                                          attrs: { "disable-icon-rotate": "" },
                                          scopedSlots: e._u(
                                            [
                                              "ready" == t.status
                                                ? {
                                                    key: "actions",
                                                    fn: function () {
                                                      return [
                                                        a(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              large: "",
                                                              color:
                                                                e.getOrderColor(
                                                                  t.status
                                                                ),
                                                            },
                                                          },
                                                          [
                                                            e._v(
                                                              "mdi-check-underline-circle"
                                                            ),
                                                          ]
                                                        ),
                                                      ];
                                                    },
                                                    proxy: !0,
                                                  }
                                                : "rejected" == t.status
                                                ? {
                                                    key: "actions",
                                                    fn: function () {
                                                      return [
                                                        a(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              large: "",
                                                              color:
                                                                e.getOrderColor(
                                                                  t.status
                                                                ),
                                                            },
                                                          },
                                                          [
                                                            e._v(
                                                              "mdi-alert-circle"
                                                            ),
                                                          ]
                                                        ),
                                                      ];
                                                    },
                                                    proxy: !0,
                                                  }
                                                : "confirmed" == t.status
                                                ? {
                                                    key: "actions",
                                                    fn: function () {
                                                      return [
                                                        a(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              large: "",
                                                              color:
                                                                e.getOrderColor(
                                                                  t.status
                                                                ),
                                                            },
                                                          },
                                                          [
                                                            e._v(
                                                              "mdi-check-circle"
                                                            ),
                                                          ]
                                                        ),
                                                      ];
                                                    },
                                                    proxy: !0,
                                                  }
                                                : "viewed" == t.status
                                                ? {
                                                    key: "actions",
                                                    fn: function () {
                                                      return [
                                                        a(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              large: "",
                                                              color:
                                                                e.getOrderColor(
                                                                  t.status
                                                                ),
                                                            },
                                                          },
                                                          [e._v("mdi-clock")]
                                                        ),
                                                      ];
                                                    },
                                                    proxy: !0,
                                                  }
                                                : {
                                                    key: "actions",
                                                    fn: function () {
                                                      return [
                                                        a(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              large: "",
                                                              color:
                                                                e.getOrderColor(
                                                                  t.status
                                                                ),
                                                            },
                                                          },
                                                          [
                                                            e._v(
                                                              "mdi-send-circle"
                                                            ),
                                                          ]
                                                        ),
                                                      ];
                                                    },
                                                    proxy: !0,
                                                  },
                                            ],
                                            null,
                                            !0
                                          ),
                                        },
                                        [
                                          a(
                                            "div",
                                            {
                                              staticClass: "d-flex flex-column",
                                            },
                                            [
                                              a(
                                                "span",
                                                { staticClass: "title" },
                                                [
                                                  e._v(
                                                    "\n                                        " +
                                                      e._s(e.$t("Ordine #")) +
                                                      "\n                                        "
                                                  ),
                                                  a("b", [
                                                    e._v(
                                                      e._s(
                                                        t.restaurant_order_id
                                                      )
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              a(
                                                "span",
                                                { staticClass: "sub-title" },
                                                [
                                                  e._v(
                                                    "\n                                        " +
                                                      e._s(
                                                        e._f("moment")(
                                                          e.$moment
                                                            .utc(t.date)
                                                            .local()
                                                            .format(),
                                                          "LLL"
                                                        )
                                                      ) +
                                                      "\n                                    "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      a(
                                        "v-expansion-panel-content",
                                        [
                                          0 !== e.getOrderProgress(t.status)
                                            ? a("v-progress-linear", {
                                                attrs: {
                                                  color: e.getOrderColor(
                                                    t.status
                                                  ),
                                                  "buffer-value": "0",
                                                  value: e.getOrderProgress(
                                                    t.status
                                                  ),
                                                  stream: "",
                                                },
                                              })
                                            : a("v-divider"),
                                          a(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex flex-row justify-space-between pt-3",
                                            },
                                            [
                                              a("div", {
                                                staticClass:
                                                  "d-flex flex-column justify-start align-start",
                                              }),
                                              a(
                                                "div",
                                                {
                                                  staticClass:
                                                    "d-flex flex-column",
                                                },
                                                [
                                                  "ready" == t.status
                                                    ? a("div", [
                                                        a("b", [
                                                          e._v(
                                                            e._s(e.$t("Pronto"))
                                                          ),
                                                        ]),
                                                      ])
                                                    : "rejected" == t.status
                                                    ? a("div", [
                                                        a("b", [
                                                          e._v(
                                                            e._s(
                                                              e.$t("Rifiutato")
                                                            )
                                                          ),
                                                        ]),
                                                      ])
                                                    : "confirmed" == t.status
                                                    ? a("div", [
                                                        a("b", [
                                                          e._v(
                                                            e._s(
                                                              e.$t("Confermato")
                                                            )
                                                          ),
                                                        ]),
                                                      ])
                                                    : "viewed" == t.status
                                                    ? a("div", [
                                                        a("b", [
                                                          e._v(
                                                            e._s(
                                                              e.$t("In analisi")
                                                            )
                                                          ),
                                                        ]),
                                                      ])
                                                    : a("div", [
                                                        a("b", [
                                                          e._v(
                                                            e._s(
                                                              e.$t("Inviato")
                                                            )
                                                          ),
                                                        ]),
                                                      ]),
                                                ]
                                              ),
                                            ]
                                          ),
                                          a(
                                            "div",
                                            {
                                              staticClass:
                                                "d-block text-left py-3 order-detail-block",
                                            },
                                            [
                                              a("p", { staticClass: "mb-2" }, [
                                                a("b", [
                                                  e._v(
                                                    e._s(
                                                      e.$t("Dettaglio ordine")
                                                    ) + ":"
                                                  ),
                                                ]),
                                              ]),
                                              e._l(t.rows, function (t) {
                                                return a(
                                                  "div",
                                                  {
                                                    key: t.id,
                                                    staticClass: "mb-1",
                                                    class: {
                                                      "special-row":
                                                        "special-menu" ==
                                                        t.type,
                                                    },
                                                  },
                                                  [
                                                    e._v(
                                                      "\n                                        " +
                                                        e._s(t.entry_name) +
                                                        " "
                                                    ),
                                                    a("b", [
                                                      e._v(
                                                        " " +
                                                          e._s(t.quantity) +
                                                          " x " +
                                                          e._s(
                                                            e.getFormattedPrice(
                                                              t.cost
                                                            )
                                                          ) +
                                                          " "
                                                      ),
                                                    ]),
                                                  ]
                                                );
                                              }),
                                            ],
                                            2
                                          ),
                                          a("v-divider"),
                                          a(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex flex-column text-left pt-3",
                                            },
                                            [
                                              t.total_cost
                                                ? a(
                                                    "span",
                                                    {
                                                      staticClass: "sub-title",
                                                    },
                                                    [
                                                      e._v(
                                                        "\n                                            " +
                                                          e._s(
                                                            e.$t(
                                                              "Costo ordine"
                                                            ) + ": "
                                                          ) +
                                                          "\n                                            "
                                                      ),
                                                      a("b", [
                                                        e._v(
                                                          e._s(
                                                            e._f("pricer")(
                                                              e.getFormattedPrice(
                                                                t.total_cost
                                                              )
                                                            )
                                                          )
                                                        ),
                                                      ]),
                                                    ]
                                                  )
                                                : e._e(),
                                              t.shipping_cost
                                                ? a(
                                                    "span",
                                                    {
                                                      staticClass: "sub-title",
                                                    },
                                                    [
                                                      e._v(
                                                        "\n                                            " +
                                                          e._s(
                                                            e.$t(
                                                              "Spese di consegna"
                                                            ) + ": "
                                                          ) +
                                                          "\n                                            "
                                                      ),
                                                      a("b", [
                                                        e._v(
                                                          e._s(
                                                            e._f("pricer")(
                                                              e.getFormattedPrice(
                                                                t.shipping_cost
                                                              )
                                                            )
                                                          )
                                                        ),
                                                      ]),
                                                    ]
                                                  )
                                                : e._e(),
                                              a(
                                                "span",
                                                { staticClass: "sub-title" },
                                                [
                                                  a("b", [
                                                    e._v(
                                                      e._s(
                                                        e.$t("Totale") + ": "
                                                      )
                                                    ),
                                                  ]),
                                                  a("b", [
                                                    e._v(
                                                      e._s(
                                                        e._f("pricer")(
                                                          e.getFormattedPrice(
                                                            parseFloat(
                                                              t.total_cost
                                                            ) +
                                                              parseFloat(
                                                                t.shipping_cost
                                                              )
                                                          )
                                                        )
                                                      )
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              t.payment_result &&
                                              (null ==
                                                e.getOrderPaymentStatus(t) ||
                                                "succeeded" ===
                                                  e.getOrderPaymentStatus(t) ||
                                                "requires_capture" ===
                                                  e.getOrderPaymentStatus(t) ||
                                                e.isOrderRefunded(t))
                                                ? a(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex flex-row justify-start align-center",
                                                    },
                                                    [
                                                      t.payment_result &&
                                                      e.isOrderRefunded(t)
                                                        ? a(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "sub-title",
                                                            },
                                                            [
                                                              e._v(
                                                                "\n                                                " +
                                                                  e._s(
                                                                    e.$t(
                                                                      "Pagamento risarcito"
                                                                    ) + ": "
                                                                  ) +
                                                                  "\n                                            "
                                                              ),
                                                            ]
                                                          )
                                                        : !t.payment_result ||
                                                          (null !=
                                                            e.getOrderPaymentStatus(
                                                              t
                                                            ) &&
                                                            "succeeded" !==
                                                              e.getOrderPaymentStatus(
                                                                t
                                                              ))
                                                        ? t.payment_result &&
                                                          "requires_capture" ===
                                                            e.getOrderPaymentStatus(
                                                              t
                                                            )
                                                          ? a(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "sub-title",
                                                              },
                                                              [
                                                                e._v(
                                                                  "\n                                                " +
                                                                    e._s(
                                                                      e.$t(
                                                                        "Pagamento autorizzato"
                                                                      ) + ": "
                                                                    ) +
                                                                    "\n                                            "
                                                                ),
                                                              ]
                                                            )
                                                          : e._e()
                                                        : a(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "sub-title",
                                                            },
                                                            [
                                                              e._v(
                                                                "\n                                                " +
                                                                  e._s(
                                                                    e.$t(
                                                                      "Pagato"
                                                                    ) + ": "
                                                                  ) +
                                                                  "\n                                            "
                                                              ),
                                                            ]
                                                          ),
                                                      a(
                                                        "v-icon",
                                                        {
                                                          staticClass: "pl-2",
                                                          attrs: {
                                                            width: "32",
                                                            height: "32",
                                                            color:
                                                              "light-green accent-4",
                                                          },
                                                        },
                                                        [
                                                          e._v(
                                                            "\n                                                mdi-check-circle\n                                            "
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  )
                                                : e._e(),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  );
                                }),
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a(
                    "v-dialog",
                    {
                      attrs: { persistent: "", "max-width": "290" },
                      model: {
                        value: e.showConfirmTrash,
                        callback: function (t) {
                          e.showConfirmTrash = t;
                        },
                        expression: "showConfirmTrash",
                      },
                    },
                    [
                      a(
                        "v-card",
                        [
                          a("v-card-title", { staticClass: "headline" }, [
                            e._v(e._s(e.$t("Svuotare i tuoi ordini?"))),
                          ]),
                          a("v-card-text", [
                            e._v(
                              e._s(
                                e.$t("Si vuole davvero svuotare questa lista?")
                              )
                            ),
                          ]),
                          a(
                            "v-card-actions",
                            [
                              a("v-spacer"),
                              a(
                                "v-btn",
                                {
                                  attrs: { color: "secondary", text: "" },
                                  on: {
                                    click: function (t) {
                                      return e.confirmTrash(!1);
                                    },
                                  },
                                },
                                [e._v(e._s(e.$t("Annulla")))]
                              ),
                              a(
                                "v-btn",
                                {
                                  attrs: { color: "primary", text: "" },
                                  on: {
                                    click: function (t) {
                                      return e.confirmTrash(!0);
                                    },
                                  },
                                },
                                [e._v(e._s(e.$t("Conferma")))]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        r = [],
        i = n("2f62"),
        s = n("7fca"),
        o = (n("47cf"), n("afbd"));
      n("45d2"), n("132c"), n("5a15");
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var p = {
          components: { LanguageChooserSelect: s["a"] },
          props: { hash: String },
          data: function () {
            return {
              overlay: !1,
              isShowing: !1,
              isReady: !1,
              redirecting: !1,
              showConfirmTrash: !1,
              menuSpecName: "",
              menuCartaName: "",
            };
          },
          computed: l(
            {},
            Object(i["e"])("app", {
              appCurrentLanguage: function (e) {
                return e.currentLanguage;
              },
            }),
            {},
            Object(i["c"])("orders", ["ordersCount"]),
            {},
            Object(i["e"])("orders", ["myOrders"]),
            {},
            Object(i["c"])("restaurant", [
              "currencySymbol",
              "restaurantType",
              "offlineOrdersEnabled",
              "onlineOrdersEnabled",
            ]),
            {},
            Object(i["c"])("specialmenus", ["getSpecialMenu"]),
            {},
            Object(i["e"])("cart", [
              "itemsCount",
              "itemsSpecial",
              "cartTotalPrice",
            ]),
            {},
            Object(i["e"])("app", ["navBarReduced", "splashShown"])
          ),
          methods: l(
            {},
            Object(i["b"])("orders", ["hideMyOrders", "getMyOrders"]),
            {},
            Object(i["b"])("app", ["setOrderNotificationActive"]),
            {
              closeMyOrders: function () {
                this.$router.go(-1), Object(o["a"])(this.$ga, "closeMyOrders");
              },
              initializePage: function () {},
              clickedTrash: function () {
                this.showConfirmTrash = !0;
              },
              confirmTrash: function (e) {
                (this.showConfirmTrash = !1),
                  e &&
                    (this.hideMyOrders(),
                    Object(o["a"])(this.$ga, "hideMyOrders"));
              },
              getFormattedPrice: function (e) {
                return void 0 == e || isNaN(parseFloat(e))
                  ? "0.00" + this.currencySymbol
                  : (Math.round(100 * parseFloat(e)) / 100).toFixed(2) +
                      this.currencySymbol;
              },
              isOrderRefunded: function (e) {
                return (
                  null != e.payment_details &&
                  !0 === JSON.parse(e.payment_details).refunded
                );
              },
              getOrderPaymentStatus: function (e) {
                return (
                  null != e.payment_details &&
                  JSON.parse(e.payment_details).status
                );
              },
              getOrderColor: function (e) {
                switch (e) {
                  case "rejected":
                    return "red accent-3";
                  case "viewed":
                    return "amber accent-3";
                  case "confirmed":
                    return "light-green accent-4";
                  case "ready":
                    return "green accent-4";
                  default:
                    return "light-blue accent-3";
                }
              },
              getOrderProgress: function (e) {
                switch (e) {
                  case "received":
                    return 20;
                  case "viewed":
                    return 100 / 3;
                  case "confirmed":
                    return 200 / 3;
                  case "rejected":
                  case "ready":
                    return 100;
                  default:
                    return 0;
                }
              },
            }
          ),
          mounted: function () {
            if (!this.splashShown)
              return (
                this.$router.push({
                  name: "restaurant",
                  params: { hash: this.hash },
                }),
                void (this.redirecting = !0)
              );
            (this.redirecting = !1),
              Object(o["a"])(this.$ga, "page", "my-orders");
          },
          activated: function () {
            this.redirecting ? (this.redirecting = !1) : this.initializePage(),
              this.setOrderNotificationActive(!1);
          },
          deactivated: function () {
            this.setOrderNotificationActive(!1);
          },
        },
        d = p,
        h = (n("0024"), n("2877")),
        f = n("6544"),
        v = n.n(f),
        g = n("40dc"),
        m = n("8336"),
        b = n("b0af"),
        _ = n("99d9"),
        y = n("a523"),
        O = n("a75b"),
        C = n("169a"),
        w = n("ce7e"),
        j = n("cd55"),
        P = n("49e2"),
        x = n("c865"),
        S = n("0393"),
        T = n("0789"),
        A = n("0e8f"),
        k = n("132d"),
        E = n("8e36"),
        M = n("2fa4"),
        V = n("2a7f"),
        $ = Object(h["a"])(d, a, r, !1, null, "9dabc46a", null);
      t["default"] = $.exports;
      v()($, {
        VAppBar: g["a"],
        VBtn: m["a"],
        VCard: b["a"],
        VCardActions: _["a"],
        VCardText: _["b"],
        VCardTitle: _["c"],
        VContainer: y["a"],
        VContent: O["a"],
        VDialog: C["a"],
        VDivider: w["a"],
        VExpansionPanel: j["a"],
        VExpansionPanelContent: P["a"],
        VExpansionPanelHeader: x["a"],
        VExpansionPanels: S["a"],
        VFadeTransition: T["c"],
        VFlex: A["a"],
        VIcon: k["a"],
        VProgressLinear: E["a"],
        VSpacer: M["a"],
        VToolbarTitle: V["a"],
      });
    },
    6747: function (e, t) {
      var n = Array.isArray;
      e.exports = n;
    },
    "67a1": function (e, t, n) {
      "use strict";
      var a = n("b2d1"),
        r = n.n(a);
      r.a;
    },
    "67ca": function (e, t, n) {
      var a = n("cb5a");
      function r(e, t) {
        var n = this.__data__,
          r = a(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
      }
      e.exports = r;
    },
    "69d5": function (e, t, n) {
      var a = n("cb5a"),
        r = Array.prototype,
        i = r.splice;
      function s(e) {
        var t = this.__data__,
          n = a(t, e);
        if (n < 0) return !1;
        var r = t.length - 1;
        return n == r ? t.pop() : i.call(t, n, 1), --this.size, !0;
      }
      e.exports = s;
    },
    "6de2": function (e, t, n) {},
    "6f6c": function (e, t) {
      var n = /\w*$/;
      function a(e) {
        var t = new e.constructor(e.source, n.exec(e));
        return (t.lastIndex = e.lastIndex), t;
      }
      e.exports = a;
    },
    "6f7e": function (e, t, n) {
      e.exports = n.p + "img/star-yellow.d1e8396d.svg";
    },
    "6fcd": function (e, t, n) {
      var a = n("50d8"),
        r = n("d370"),
        i = n("6747"),
        s = n("0d24"),
        o = n("c098"),
        c = n("73ac"),
        l = Object.prototype,
        u = l.hasOwnProperty;
      function p(e, t) {
        var n = i(e),
          l = !n && r(e),
          p = !n && !l && s(e),
          d = !n && !l && !p && c(e),
          h = n || l || p || d,
          f = h ? a(e.length, String) : [],
          v = f.length;
        for (var g in e)
          (!t && !u.call(e, g)) ||
            (h &&
              ("length" == g ||
                (p && ("offset" == g || "parent" == g)) ||
                (d &&
                  ("buffer" == g || "byteLength" == g || "byteOffset" == g)) ||
                o(g, v))) ||
            f.push(g);
        return f;
      }
      e.exports = p;
    },
    "70df": function (e, t, n) {
      "use strict";
      var a = n("87b1"),
        r = n.n(a);
      r.a;
    },
    "73ac": function (e, t, n) {
      var a = n("743f"),
        r = n("b047"),
        i = n("99d3"),
        s = i && i.isTypedArray,
        o = s ? r(s) : a;
      e.exports = o;
    },
    "743f": function (e, t, n) {
      var a = n("3729"),
        r = n("b218"),
        i = n("1310"),
        s = "[object Arguments]",
        o = "[object Array]",
        c = "[object Boolean]",
        l = "[object Date]",
        u = "[object Error]",
        p = "[object Function]",
        d = "[object Map]",
        h = "[object Number]",
        f = "[object Object]",
        v = "[object RegExp]",
        g = "[object Set]",
        m = "[object String]",
        b = "[object WeakMap]",
        _ = "[object ArrayBuffer]",
        y = "[object DataView]",
        O = "[object Float32Array]",
        C = "[object Float64Array]",
        w = "[object Int8Array]",
        j = "[object Int16Array]",
        P = "[object Int32Array]",
        x = "[object Uint8Array]",
        S = "[object Uint8ClampedArray]",
        T = "[object Uint16Array]",
        A = "[object Uint32Array]",
        k = {};
      function E(e) {
        return i(e) && r(e.length) && !!k[a(e)];
      }
      (k[O] = k[C] = k[w] = k[j] = k[P] = k[x] = k[S] = k[T] = k[A] = !0),
        (k[s] =
          k[o] =
          k[_] =
          k[c] =
          k[y] =
          k[l] =
          k[u] =
          k[p] =
          k[d] =
          k[h] =
          k[f] =
          k[v] =
          k[g] =
          k[m] =
          k[b] =
            !1),
        (e.exports = E);
    },
    7530: function (e, t, n) {
      var a = n("1a8c"),
        r = Object.create,
        i = (function () {
          function e() {}
          return function (t) {
            if (!a(t)) return {};
            if (r) return r(t);
            e.prototype = t;
            var n = new e();
            return (e.prototype = void 0), n;
          };
        })();
      e.exports = i;
    },
    7935: function (e, t, n) {},
    7958: function (e, t, n) {},
    "79bc": function (e, t, n) {
      var a = n("0b07"),
        r = n("2b3e"),
        i = a(r, "Map");
      e.exports = i;
    },
    "7a48": function (e, t, n) {
      var a = n("6044"),
        r = Object.prototype,
        i = r.hasOwnProperty;
      function s(e) {
        var t = this.__data__;
        return a ? void 0 !== t[e] : i.call(t, e);
      }
      e.exports = s;
    },
    "7adc": function (e, t, n) {
      "use strict";
      var a = n("983c"),
        r = n.n(a);
      r.a;
    },
    "7b83": function (e, t, n) {
      var a = n("7c64"),
        r = n("93ed"),
        i = n("2478"),
        s = n("a524"),
        o = n("1fc8");
      function c(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        this.clear();
        while (++t < n) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      (c.prototype.clear = a),
        (c.prototype["delete"] = r),
        (c.prototype.get = i),
        (c.prototype.has = s),
        (c.prototype.set = o),
        (e.exports = c);
    },
    "7c64": function (e, t, n) {
      var a = n("e24b"),
        r = n("5e2e"),
        i = n("79bc");
      function s() {
        (this.size = 0),
          (this.__data__ = {
            hash: new a(),
            map: new (i || r)(),
            string: new a(),
          });
      }
      e.exports = s;
    },
    "7d1f": function (e, t, n) {
      var a = n("087d"),
        r = n("6747");
      function i(e, t, n) {
        var i = t(e);
        return r(e) ? i : a(i, n(e));
      }
      e.exports = i;
    },
    "7e64": function (e, t, n) {
      var a = n("5e2e"),
        r = n("efb6"),
        i = n("2fcc"),
        s = n("802a"),
        o = n("55a3"),
        c = n("d02c");
      function l(e) {
        var t = (this.__data__ = new a(e));
        this.size = t.size;
      }
      (l.prototype.clear = r),
        (l.prototype["delete"] = i),
        (l.prototype.get = s),
        (l.prototype.has = o),
        (l.prototype.set = c),
        (e.exports = l);
    },
    "802a": function (e, t) {
      function n(e) {
        return this.__data__.get(e);
      }
      e.exports = n;
    },
    8057: function (e, t) {
      function n(e, t) {
        var n = -1,
          a = null == e ? 0 : e.length;
        while (++n < a) if (!1 === t(e[n], n, e)) break;
        return e;
      }
      e.exports = n;
    },
    8635: function (e, t, n) {
      "use strict";
      var a = n("36c1"),
        r = n.n(a);
      r.a;
    },
    "872a": function (e, t, n) {
      var a = n("3b4a");
      function r(e, t, n) {
        "__proto__" == t && a
          ? a(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      }
      e.exports = r;
    },
    "87b1": function (e, t, n) {},
    "8eeb": function (e, t, n) {
      var a = n("32b3"),
        r = n("872a");
      function i(e, t, n, i) {
        var s = !n;
        n || (n = {});
        var o = -1,
          c = t.length;
        while (++o < c) {
          var l = t[o],
            u = i ? i(n[l], e[l], l, n, e) : void 0;
          void 0 === u && (u = e[l]), s ? r(n, l, u) : a(n, l, u);
        }
        return n;
      }
      e.exports = i;
    },
    "91e9": function (e, t) {
      function n(e, t) {
        return function (n) {
          return e(t(n));
        };
      }
      e.exports = n;
    },
    "93ed": function (e, t, n) {
      var a = n("4245");
      function r(e) {
        var t = a(this, e)["delete"](e);
        return (this.size -= t ? 1 : 0), t;
      }
      e.exports = r;
    },
    9520: function (e, t, n) {
      var a = n("3729"),
        r = n("1a8c"),
        i = "[object AsyncFunction]",
        s = "[object Function]",
        o = "[object GeneratorFunction]",
        c = "[object Proxy]";
      function l(e) {
        if (!r(e)) return !1;
        var t = a(e);
        return t == s || t == o || t == i || t == c;
      }
      e.exports = l;
    },
    9638: function (e, t) {
      function n(e, t) {
        return e === t || (e !== e && t !== t);
      }
      e.exports = n;
    },
    "974b": function (e, t, n) {},
    "983c": function (e, t, n) {},
    9934: function (e, t, n) {
      var a = n("6fcd"),
        r = n("41c3"),
        i = n("30c9");
      function s(e) {
        return i(e) ? a(e, !0) : r(e);
      }
      e.exports = s;
    },
    "99a0": function (e, t, n) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", { staticClass: "bottom-review-box" }, [
            a("div", { staticClass: "bottom-review-box--left" }, [
              a("img", {
                attrs: { width: "20", height: "20", src: n("6f7e") },
              }),
              a("span", [e._v(e._s(e.$t("Scrivi una recensione")))]),
            ]),
            a("div", { staticClass: "bottom-review-box--right" }, [
              a(
                "button",
                {
                  on: {
                    click: function (t) {
                      return e.navToReviews();
                    },
                  },
                },
                [e._v(e._s(e.$t("Scrivi")))]
              ),
            ]),
          ]);
        },
        r = [],
        i = {
          name: "BottomReviewBox",
          props: { hash: String },
          methods: {
            navToReviews: function () {
              this.$router.push({
                name: "reviews",
                props: { hash: this.hash },
              });
            },
          },
        },
        s = i,
        o = (n("70df"), n("2877")),
        c = Object(o["a"])(s, a, r, !1, null, "6498365a", null);
      t["a"] = c.exports;
    },
    "99d3": function (e, t, n) {
      (function (e) {
        var a = n("585a"),
          r = t && !t.nodeType && t,
          i = r && "object" == typeof e && e && !e.nodeType && e,
          s = i && i.exports === r,
          o = s && a.process,
          c = (function () {
            try {
              var e = i && i.require && i.require("util").types;
              return e || (o && o.binding && o.binding("util"));
            } catch (t) {}
          })();
        e.exports = c;
      }.call(this, n("62e4")(e)));
    },
    "9e69": function (e, t, n) {
      var a = n("2b3e"),
        r = a.Symbol;
      e.exports = r;
    },
    "9f6c": function (e, t, n) {},
    a029: function (e, t, n) {
      var a = n("087d"),
        r = n("2dcb"),
        i = n("32f4"),
        s = n("d327"),
        o = Object.getOwnPropertySymbols,
        c = o
          ? function (e) {
              var t = [];
              while (e) a(t, i(e)), (e = r(e));
              return t;
            }
          : s;
      e.exports = c;
    },
    a2db: function (e, t, n) {
      var a = n("9e69"),
        r = a ? a.prototype : void 0,
        i = r ? r.valueOf : void 0;
      function s(e) {
        return i ? Object(i.call(e)) : {};
      }
      e.exports = s;
    },
    a36f: function (e, t, n) {
      e.exports = n.p + "img/heart.3c43f1b2.svg";
    },
    a420: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "v-slide-x-reverse-transition",
            { attrs: { "leave-absolute": "" } },
            [
              a(
                "v-container",
                {
                  directives: [
                    {
                      name: "scroll",
                      rawName: "v-scroll",
                      value: e.onScroll,
                      expression: "onScroll",
                    },
                  ],
                  staticClass: "page-container main-restaurant-container",
                  class: {
                    "francescana-bg":
                      "816933a93a4e4c53786c7e1ca4eefc6b" === e.hash ||
                      "26467bd3c32c3ca47ca99608e8f3c3f5" === e.hash,
                  },
                  attrs: {
                    fluid: "",
                    "fill-height": "",
                    "align-start": "",
                    "pa-0": "",
                  },
                },
                [
                  a(
                    "v-navigation-drawer",
                    {
                      staticClass:
                        "page-navigation-drawer main-restaurant-navigation-drawer",
                      attrs: {
                        app: "",
                        temporary: "",
                        left: !e.$vuetify.rtl,
                        right: e.$vuetify.rtl,
                        value: "false",
                      },
                      model: {
                        value: e.drawer,
                        callback: function (t) {
                          e.drawer = t;
                        },
                        expression: "drawer",
                      },
                    },
                    [
                      a(
                        "v-sheet",
                        {
                          staticClass: "drawer-restaurant-logo-container",
                          attrs: { tile: "" },
                        },
                        [
                          e.logo
                            ? a("v-img", {
                                key: e.logo,
                                staticClass: "splash-restaurant-logo",
                                attrs: {
                                  alt: "logo-restaurant",
                                  title: "Restaurant Logo",
                                  src: e.logo,
                                  "aspect-ratio": 248 / 54,
                                  contain: "",
                                },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                      a(
                        "v-list",
                        { attrs: { dense: "" } },
                        [
                          void 0 !== e.specialMenus &&
                          e.specialMenus.length > 0 &&
                          !e.menuspecdisabled &&
                          !e.menucartadisabled
                            ? a(
                                "v-list-item",
                                {
                                  on: {
                                    click: function (t) {
                                      return e.navToMenus();
                                    },
                                  },
                                },
                                [
                                  a("v-list-item-action", [
                                    a("img", {
                                      attrs: {
                                        width: "20",
                                        height: "20",
                                        src: n("47c1"),
                                      },
                                    }),
                                  ]),
                                  a(
                                    "v-list-item-content",
                                    [
                                      a("v-list-item-title", [
                                        e._v(e._s(e.$t("Menu"))),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                          a(
                            "v-list-item",
                            {
                              on: {
                                click: function (t) {
                                  return e.navToAbout();
                                },
                              },
                            },
                            [
                              a("v-list-item-action", [
                                a("img", {
                                  attrs: {
                                    width: "20",
                                    height: "20",
                                    src: n("4b8a"),
                                  },
                                }),
                              ]),
                              a(
                                "v-list-item-content",
                                [
                                  a("v-list-item-title", [
                                    e._v(e._s(e.$t("Ristorante"))),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          void 0 !== e.reviewslinks && e.reviewslinks.length > 0
                            ? a(
                                "v-list-item",
                                {
                                  on: {
                                    click: function (t) {
                                      return e.navToReviews();
                                    },
                                  },
                                },
                                [
                                  a("v-list-item-action", [
                                    a("img", {
                                      attrs: {
                                        width: "20",
                                        height: "20",
                                        src: n("43a2"),
                                      },
                                    }),
                                  ]),
                                  a(
                                    "v-list-item-content",
                                    [
                                      a("v-list-item-title", [
                                        e._v(
                                          e._s(e.$t("Scrivi una recensione"))
                                        ),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                          a(
                            "v-list-item",
                            {
                              on: {
                                click: function (t) {
                                  return e.showReportTranslationPopup();
                                },
                              },
                            },
                            [
                              a("v-list-item-action", [
                                a("img", {
                                  attrs: {
                                    width: "20",
                                    height: "20",
                                    src: n("5307"),
                                  },
                                }),
                              ]),
                              a(
                                "v-list-item-content",
                                [
                                  a("v-list-item-title", [
                                    e._v(
                                      e._s(e.$t("Segnala traduzione errata"))
                                    ),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          void 0 !== e.socialsharelinks &&
                          e.socialsharelinks.length > 0
                            ? a(
                                "v-list-item",
                                {
                                  on: {
                                    click: function (t) {
                                      return e.navToSocialshare();
                                    },
                                  },
                                },
                                [
                                  a("v-list-item-action", [
                                    a("img", {
                                      attrs: {
                                        width: "20",
                                        height: "20",
                                        src: n("b551"),
                                      },
                                    }),
                                  ]),
                                  a(
                                    "v-list-item-content",
                                    [
                                      a("v-list-item-title", [
                                        e._v(
                                          e._s(
                                            e.$t("Condividi la tua esperienza")
                                          )
                                        ),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                          a(
                            "v-list-item",
                            {
                              on: {
                                click: function (t) {
                                  return e.navToCredits();
                                },
                              },
                            },
                            [
                              a("v-list-item-action", [
                                a("img", {
                                  attrs: {
                                    width: "20",
                                    height: "20",
                                    src: n("a36f"),
                                  },
                                }),
                              ]),
                              a(
                                "v-list-item-content",
                                [
                                  a("v-list-item-title", [
                                    e._v(e._s(e.$t("Credits"))),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      a(
                        "v-sheet",
                        { staticClass: "powered-stuff" },
                        [
                          a("v-divider", { staticClass: "mx-5" }),
                          a(
                            "v-sheet",
                            {
                              staticClass:
                                "drawer-dishcovery-powered-container",
                            },
                            [
                              a("img", {
                                staticClass: "language-chooser-dishcovery-logo",
                                attrs: {
                                  alt: "logo-dishcovery",
                                  title: "Dishcovery Logo",
                                  src: n("cf05"),
                                  width: "30",
                                  height: "30",
                                },
                              }),
                              a("span", { staticClass: "font-weight-bold" }, [
                                e._v("Powered by Dishcovery"),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                      e.version
                        ? a("v-sheet", { staticClass: "version-stuff" }, [
                            a(
                              "span",
                              { staticClass: "text-center d-block pb-1" },
                              [e._v("v. " + e._s(e.version))]
                            ),
                          ])
                        : e._e(),
                    ],
                    1
                  ),
                  e.demoVersion ? a("demo-popup") : e._e(),
                  a(
                    "v-app-bar",
                    {
                      staticClass: "page-app-bar main-restaurant-app-bar",
                      class: { "navbar--hidden": e.navBarReduced },
                      attrs: {
                        app: "",
                        height: "82px",
                        color: "white",
                        elevation: "1",
                        top: "",
                      },
                    },
                    [
                      a(
                        "v-btn",
                        {
                          staticClass:
                            "v-btn--icon v-app-bar__nav-icon elevation-0",
                          attrs: {
                            absolute: "",
                            color: "white",
                            fab: "",
                            small: "",
                          },
                          on: {
                            click: function (t) {
                              t.stopPropagation(), (e.drawer = !e.drawer);
                            },
                          },
                        },
                        [
                          a("v-img", {
                            staticClass: "v-icon",
                            attrs: {
                              title: "menu",
                              alt: "menu",
                              contain: "",
                              src: n("3ff5"),
                              height: "19",
                              "aspect-ratio": 24 / 19,
                            },
                          }),
                        ],
                        1
                      ),
                      a(
                        "v-flex",
                        { attrs: { "text-center": "" } },
                        [
                          a(
                            "v-toolbar-title",
                            { attrs: { "text-center": "" } },
                            [
                              e._v(
                                e._s(
                                  void 0 !== e.menuspec &&
                                    "" !== e.menuspec.name
                                    ? e.menuspec.name
                                    : e.$t("Menu speciali")
                                )
                              ),
                            ]
                          ),
                          a("language-chooser-select"),
                          a("cart-widget", {
                            nativeOn: {
                              click: function (t) {
                                return e.toggleCart(t);
                              },
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a(
                    "v-content",
                    {
                      staticClass: "page-content main-restaurant-content",
                      attrs: { id: "main-restaurant-content" },
                    },
                    [
                      a(
                        "v-container",
                        {
                          staticClass: "inner-container align-start",
                          attrs: {
                            fluid: "",
                            "fill-height": "",
                            "pa-0": "",
                            "pl-4": "",
                          },
                        },
                        [
                          a(
                            "v-flex",
                            {
                              attrs: {
                                "text-center": "",
                                "justify-start": "",
                                "align-start": "",
                                "flex-direction": "column",
                              },
                            },
                            [
                              a("special-menus-as-list"),
                              a("v-divider"),
                              a("br"),
                              a("menu-info", {
                                class: {
                                  "restaurant-info-with-reviews":
                                    void 0 !== e.reviewslinks &&
                                    e.reviewslinks.length > 0 &&
                                    e.justSpecialMenus,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  void 0 !== e.reviewslinks &&
                  e.reviewslinks.length > 0 &&
                  e.justSpecialMenus
                    ? a("bottom-review-box", { attrs: { hash: e.hash } })
                    : e._e(),
                  a("wrong-translation-popup", {
                    attrs: { showDialog: e.showWrongTranslationPopup },
                    on: { close: e.closeReportTranslationPopup },
                  }),
                ],
                1
              ),
            ],
            1
          );
        },
        r = [],
        i = n("3718"),
        s = i["a"],
        o = (n("67a1"), n("2877")),
        c = n("6544"),
        l = n.n(c),
        u = n("40dc"),
        p = n("8336"),
        d = n("a523"),
        h = n("a75b"),
        f = n("ce7e"),
        v = n("0e8f"),
        g = n("adda"),
        m = n("8860"),
        b = n("da13"),
        _ = n("1800"),
        y = n("5d23"),
        O = n("f774"),
        C = n("8dd9"),
        w = n("0789"),
        j = n("2a7f"),
        P = n("269a"),
        x = n.n(P),
        S = n("f977"),
        T = Object(o["a"])(s, a, r, !1, null, "ff5abcac", null);
      t["default"] = T.exports;
      l()(T, {
        VAppBar: u["a"],
        VBtn: p["a"],
        VContainer: d["a"],
        VContent: h["a"],
        VDivider: f["a"],
        VFlex: v["a"],
        VImg: g["a"],
        VList: m["a"],
        VListItem: b["a"],
        VListItemAction: _["a"],
        VListItemContent: y["a"],
        VListItemTitle: y["c"],
        VNavigationDrawer: O["a"],
        VSheet: C["a"],
        VSlideXReverseTransition: w["d"],
        VToolbarTitle: j["a"],
      }),
        x()(T, { Scroll: S["a"] });
    },
    a524: function (e, t, n) {
      var a = n("4245");
      function r(e) {
        return a(this, e).has(e);
      }
      e.exports = r;
    },
    a994: function (e, t, n) {
      var a = n("7d1f"),
        r = n("32f4"),
        i = n("ec69");
      function s(e) {
        return a(e, i, r);
      }
      e.exports = s;
    },
    ad68: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "v-slide-x-transition",
            { attrs: { "leave-absolute": "" } },
            [
              a(
                "v-container",
                {
                  directives: [
                    {
                      name: "scroll",
                      rawName: "v-scroll",
                      value: e.onScroll,
                      expression: "onScroll",
                    },
                  ],
                  staticClass: "page-container main-restaurant-container",
                  attrs: {
                    fluid: "",
                    "fill-height": "",
                    "align-start": "",
                    "pa-0": "",
                  },
                },
                [
                  a(
                    "v-navigation-drawer",
                    {
                      staticClass:
                        "page-navigation-drawer main-restaurant-navigation-drawer",
                      attrs: {
                        app: "",
                        temporary: "",
                        left: !e.$vuetify.rtl,
                        right: e.$vuetify.rtl,
                        value: "false",
                      },
                      model: {
                        value: e.drawer,
                        callback: function (t) {
                          e.drawer = t;
                        },
                        expression: "drawer",
                      },
                    },
                    [
                      a(
                        "v-sheet",
                        {
                          staticClass: "drawer-restaurant-logo-container",
                          attrs: { tile: "" },
                        },
                        [
                          e.logo
                            ? a("v-img", {
                                key: e.logo,
                                staticClass: "splash-restaurant-logo",
                                attrs: {
                                  alt: "logo-restaurant",
                                  title: "Restaurant Logo",
                                  src: e.logo,
                                  "aspect-ratio": 248 / 54,
                                  contain: "",
                                },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                      a(
                        "v-list",
                        { attrs: { dense: "" } },
                        [
                          void 0 !== e.specialMenus &&
                          e.specialMenus.length > 0 &&
                          !e.menuspecdisabled &&
                          !e.menucartadisabled
                            ? a(
                                "v-list-item",
                                {
                                  on: {
                                    click: function (t) {
                                      e.drawer = !e.drawer;
                                    },
                                  },
                                },
                                [
                                  a("v-list-item-action", [
                                    a("img", {
                                      attrs: {
                                        width: "20",
                                        height: "20",
                                        src: n("47c1"),
                                      },
                                    }),
                                  ]),
                                  a(
                                    "v-list-item-content",
                                    [
                                      a("v-list-item-title", [
                                        e._v(e._s(e.$t("Menu"))),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                          a(
                            "v-list-item",
                            {
                              on: {
                                click: function (t) {
                                  return e.navToAbout();
                                },
                              },
                            },
                            [
                              a("v-list-item-action", [
                                a("img", {
                                  attrs: {
                                    width: "20",
                                    height: "20",
                                    src: n("4b8a"),
                                  },
                                }),
                              ]),
                              a(
                                "v-list-item-content",
                                [
                                  a("v-list-item-title", [
                                    e._v(e._s(e.$t("Ristorante"))),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          void 0 !== e.reviewslinks && e.reviewslinks.length > 0
                            ? a(
                                "v-list-item",
                                {
                                  on: {
                                    click: function (t) {
                                      return e.navToReviews();
                                    },
                                  },
                                },
                                [
                                  a("v-list-item-action", [
                                    a("img", {
                                      attrs: {
                                        width: "20",
                                        height: "20",
                                        src: n("43a2"),
                                      },
                                    }),
                                  ]),
                                  a(
                                    "v-list-item-content",
                                    [
                                      a("v-list-item-title", [
                                        e._v(
                                          e._s(e.$t("Scrivi una recensione"))
                                        ),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                          a(
                            "v-list-item",
                            {
                              on: {
                                click: function (t) {
                                  return e.showReportTranslationPopup();
                                },
                              },
                            },
                            [
                              a("v-list-item-action", [
                                a("img", {
                                  attrs: {
                                    width: "20",
                                    height: "20",
                                    src: n("5307"),
                                  },
                                }),
                              ]),
                              a(
                                "v-list-item-content",
                                [
                                  a("v-list-item-title", [
                                    e._v(
                                      e._s(e.$t("Segnala traduzione errata"))
                                    ),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          void 0 !== e.socialsharelinks &&
                          e.socialsharelinks.length > 0
                            ? a(
                                "v-list-item",
                                {
                                  on: {
                                    click: function (t) {
                                      return e.navToSocialshare();
                                    },
                                  },
                                },
                                [
                                  a("v-list-item-action", [
                                    a("img", {
                                      attrs: {
                                        width: "20",
                                        height: "20",
                                        src: n("b551"),
                                      },
                                    }),
                                  ]),
                                  a(
                                    "v-list-item-content",
                                    [
                                      a("v-list-item-title", [
                                        e._v(
                                          e._s(
                                            e.$t("Condividi la tua esperienza")
                                          )
                                        ),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                          a(
                            "v-list-item",
                            {
                              on: {
                                click: function (t) {
                                  return e.navToCredits();
                                },
                              },
                            },
                            [
                              a("v-list-item-action", [
                                a("img", {
                                  attrs: {
                                    width: "20",
                                    height: "20",
                                    src: n("a36f"),
                                  },
                                }),
                              ]),
                              a(
                                "v-list-item-content",
                                [
                                  a("v-list-item-title", [
                                    e._v(e._s(e.$t("Credits"))),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      a(
                        "v-sheet",
                        { staticClass: "powered-stuff" },
                        [
                          a("v-divider", { staticClass: "mx-5" }),
                          a(
                            "v-sheet",
                            {
                              staticClass:
                                "drawer-dishcovery-powered-container",
                            },
                            [
                              a("img", {
                                staticClass: "language-chooser-dishcovery-logo",
                                attrs: {
                                  alt: "logo-dishcovery",
                                  title: "Dishcovery Logo",
                                  src: n("cf05"),
                                  width: "30",
                                  height: "30",
                                },
                              }),
                              a("span", { staticClass: "font-weight-bold" }, [
                                e._v("Powered by Dishcovery"),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                      e.version
                        ? a("v-sheet", { staticClass: "version-stuff" }, [
                            a(
                              "span",
                              { staticClass: "text-center d-block pb-1" },
                              [e._v("v. " + e._s(e.version))]
                            ),
                          ])
                        : e._e(),
                    ],
                    1
                  ),
                  e.demoVersion ? a("demo-popup") : e._e(),
                  a(
                    "v-app-bar",
                    {
                      staticClass: "page-app-bar main-restaurant-app-bar",
                      class: { "navbar--hidden": e.navBarReduced },
                      attrs: {
                        app: "",
                        height: "82px",
                        color: "white",
                        elevation: "1",
                        top: "",
                      },
                    },
                    [
                      a(
                        "v-btn",
                        {
                          staticClass:
                            "v-btn--icon v-app-bar__nav-icon elevation-0",
                          attrs: {
                            absolute: "",
                            color: "white",
                            fab: "",
                            small: "",
                          },
                          on: {
                            click: function (t) {
                              t.stopPropagation(), (e.drawer = !e.drawer);
                            },
                          },
                        },
                        [
                          a("v-img", {
                            staticClass: "v-icon",
                            attrs: {
                              title: "menu",
                              alt: "menu",
                              contain: "",
                              src: n("3ff5"),
                              height: "19",
                              "aspect-ratio": 24 / 19,
                            },
                          }),
                        ],
                        1
                      ),
                      a(
                        "v-flex",
                        { attrs: { "text-center": "" } },
                        [
                          a(
                            "v-toolbar-title",
                            { attrs: { "text-center": "" } },
                            [e._v(e._s(e.$t("Menu")))]
                          ),
                          a("language-chooser-select"),
                          a("cart-widget", {
                            nativeOn: {
                              click: function (t) {
                                return e.toggleCart(t);
                              },
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a(
                    "v-content",
                    {
                      staticClass: "page-content main-restaurant-content",
                      class: {
                        "francescana-bg":
                          "816933a93a4e4c53786c7e1ca4eefc6b" === e.hash ||
                          "26467bd3c32c3ca47ca99608e8f3c3f5" === e.hash,
                      },
                      attrs: { id: "main-restaurant-content" },
                    },
                    [
                      a(
                        "v-container",
                        {
                          staticClass: "inner-container align-start",
                          attrs: {
                            fluid: "",
                            "fill-height": "",
                            "pa-0": "",
                            "pl-4": "",
                            "pr-4": "",
                          },
                        },
                        [
                          a(
                            "v-flex",
                            {
                              attrs: {
                                "text-center": "",
                                "justify-start": "",
                                "align-start": "",
                                "flex-direction": "column",
                              },
                            },
                            [
                              a("div", { staticClass: "menutypes" }, [
                                e.isRegEnabled
                                  ? a("div", { attrs: { id: "covid" } }, [
                                      e.isRegRequired
                                        ? a(
                                            "span",
                                            { staticClass: "title" },
                                            [
                                              a("p", [
                                                e._v(
                                                  "In conformità con le leggi inerenti al Covid-19, per poter procedere con la consultazione è "
                                                ),
                                                a("b", [e._v("obbligatorio")]),
                                                e._v(
                                                  " registrare il proprio accesso"
                                                ),
                                              ]),
                                              a(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    elevation: "3",
                                                    plain: "",
                                                    block: "",
                                                  },
                                                  on: {
                                                    click: function (t) {
                                                      return e.navToRegistration();
                                                    },
                                                  },
                                                },
                                                [
                                                  e._v(
                                                    e._s(e.$t("REGISTRATI ORA"))
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          )
                                        : a(
                                            "span",
                                            { staticClass: "title" },
                                            [
                                              a("p", [
                                                e._v(
                                                  "In conformità con le leggi inerenti al Covid-19, per poter procedere con la consultazione è caldamente consigliato registrare il proprio accesso"
                                                ),
                                              ]),
                                              a(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    elevation: "3",
                                                    plain: "",
                                                    block: "",
                                                  },
                                                  on: {
                                                    click: function (t) {
                                                      return e.navToRegistration();
                                                    },
                                                  },
                                                },
                                                [
                                                  e._v(
                                                    e._s(e.$t("REGISTRATI ORA"))
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                    ])
                                  : e._e(),
                                void 0 !== e.specialMenus &&
                                e.specialMenus.length > 0 &&
                                !e.menuspecdisabled
                                  ? a(
                                      "div",
                                      {
                                        staticClass:
                                          "menutype menutype_specialmenus",
                                        class: {
                                          disabled:
                                            e.isRegRequired && !e.isRegDone,
                                        },
                                        style: {
                                          "background-image":
                                            "url(" + e.menuSpecImage + ")",
                                        },
                                        on: {
                                          click: function (t) {
                                            (!e.isRegRequired || e.isRegDone) &&
                                              e.navToSpecialmenus();
                                          },
                                        },
                                      },
                                      [
                                        a("div", { staticClass: "layer" }),
                                        a(
                                          "span",
                                          { staticClass: "menutype--title" },
                                          [
                                            e._v(
                                              "\n                                " +
                                                e._s(
                                                  "" !== e.menuSpecName
                                                    ? e.menuSpecName
                                                    : e.$t("Menu speciali")
                                                ) +
                                                "\n                            "
                                            ),
                                          ]
                                        ),
                                      ]
                                    )
                                  : e._e(),
                                e.menucartadisabled
                                  ? e._e()
                                  : a(
                                      "div",
                                      {
                                        staticClass:
                                          "menutype menutype_specialmenus",
                                        class: {
                                          disabled:
                                            e.isRegRequired && !e.isRegDone,
                                        },
                                        style: {
                                          "background-image":
                                            "url(" + e.menuCartaImage + ")",
                                        },
                                        on: {
                                          click: function (t) {
                                            (!e.isRegRequired || e.isRegDone) &&
                                              e.navToCategories();
                                          },
                                        },
                                      },
                                      [
                                        a("div", { staticClass: "layer" }),
                                        a(
                                          "span",
                                          { staticClass: "menutype--title" },
                                          [
                                            e._v(
                                              "\n                                " +
                                                e._s(
                                                  "" !== e.menuCartaName
                                                    ? e.menuCartaName
                                                    : e.$t("Menu alla carta")
                                                ) +
                                                "\n                            "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                "816933a93a4e4c53786c7e1ca4eefc6b" === e.hash
                                  ? a(
                                      "div",
                                      {
                                        staticClass:
                                          "menutype menutype_cartavini",
                                        class: {
                                          disabled:
                                            e.isRegRequired && !e.isRegDone,
                                        },
                                        style: {
                                          "background-image":
                                            "url(https://dishcovery.menu/assets/restaurants/1911/bg-carta-vini.jpg)",
                                        },
                                        on: {
                                          click: function (t) {
                                            (!e.isRegRequired || e.isRegDone) &&
                                              e.openFrancescanaPDF();
                                          },
                                        },
                                      },
                                      [
                                        a("div", { staticClass: "layer" }),
                                        a(
                                          "span",
                                          { staticClass: "menutype--title" },
                                          [e._v(e._s(e.$t("Carta dei vini")))]
                                        ),
                                      ]
                                    )
                                  : e._e(),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  void 0 !== e.reviewslinks && e.reviewslinks.length > 0
                    ? a("bottom-review-box", { attrs: { hash: e.hash } })
                    : e._e(),
                  a("wrong-translation-popup", {
                    attrs: { showDialog: e.showWrongTranslationPopup },
                    on: { close: e.closeReportTranslationPopup },
                  }),
                ],
                1
              ),
            ],
            1
          );
        },
        r = [],
        i = n("da60"),
        s = i["a"],
        o = (n("4e14"), n("2877")),
        c = n("6544"),
        l = n.n(c),
        u = n("40dc"),
        p = n("8336"),
        d = n("a523"),
        h = n("a75b"),
        f = n("ce7e"),
        v = n("0e8f"),
        g = n("adda"),
        m = n("8860"),
        b = n("da13"),
        _ = n("1800"),
        y = n("5d23"),
        O = n("f774"),
        C = n("8dd9"),
        w = n("0789"),
        j = n("2a7f"),
        P = n("269a"),
        x = n.n(P),
        S = n("f977"),
        T = Object(o["a"])(s, a, r, !1, null, "30a3ef72", null);
      t["default"] = T.exports;
      l()(T, {
        VAppBar: u["a"],
        VBtn: p["a"],
        VContainer: d["a"],
        VContent: h["a"],
        VDivider: f["a"],
        VFlex: v["a"],
        VImg: g["a"],
        VList: m["a"],
        VListItem: b["a"],
        VListItemAction: _["a"],
        VListItemContent: y["a"],
        VListItemTitle: y["c"],
        VNavigationDrawer: O["a"],
        VSheet: C["a"],
        VSlideXTransition: w["e"],
        VToolbarTitle: j["a"],
      }),
        x()(T, { Scroll: S["a"] });
    },
    b047: function (e, t) {
      function n(e) {
        return function (t) {
          return e(t);
        };
      }
      e.exports = n;
    },
    b218: function (e, t) {
      var n = 9007199254740991;
      function a(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n;
      }
      e.exports = a;
    },
    b299: function (e, t, n) {
      "use strict";
      var a = n("4be2"),
        r = n.n(a);
      r.a;
    },
    b2d1: function (e, t, n) {},
    b49a: function (e, t, n) {},
    b4c0: function (e, t, n) {
      var a = n("cb5a");
      function r(e) {
        var t = this.__data__,
          n = a(t, e);
        return n < 0 ? void 0 : t[n][1];
      }
      e.exports = r;
    },
    b551: function (e, t, n) {
      e.exports = n.p + "img/share.8e2d9e4c.svg";
    },
    b5a7: function (e, t, n) {
      var a = n("0b07"),
        r = n("2b3e"),
        i = a(r, "DataView");
      e.exports = i;
    },
    b789: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "v-slide-x-reverse-transition",
            { attrs: { "leave-absolute": "" } },
            [
              a(
                "v-container",
                {
                  directives: [
                    {
                      name: "touch",
                      rawName: "v-touch",
                      value: {
                        right: function () {
                          return e.closeCart();
                        },
                      },
                      expression: "{ right: () => closeCart() }",
                    },
                  ],
                  staticClass: "page-container cart-container",
                  attrs: {
                    fluid: "",
                    "fill-height": "",
                    "align-start": "",
                    "pa-0": "",
                  },
                },
                [
                  e.demoVersion ? a("demo-popup") : e._e(),
                  a(
                    "v-app-bar",
                    {
                      staticClass: "page-app-bar cart-app-bar",
                      class: { "navbar--hidden": e.navBarReduced },
                      attrs: {
                        app: "",
                        height: "82px",
                        color: "white",
                        elevation: "1",
                        top: "",
                      },
                    },
                    [
                      a("img", {
                        ref: "icon",
                        staticClass: "back-icon",
                        attrs: {
                          src: n("8155"),
                          alt: "Cart Icon",
                          width: "24",
                          height: "24",
                        },
                        on: { click: e.closeCart },
                      }),
                      a(
                        "v-flex",
                        { attrs: { "text-center": "" } },
                        [
                          a(
                            "v-toolbar-title",
                            { attrs: { "text-center": "" } },
                            [e._v(e._s(e.$t("Il tuo ordine")))]
                          ),
                          a("language-chooser-select"),
                          e.itemsCount > 0
                            ? a("img", {
                                ref: "icon",
                                staticClass: "trash-icon",
                                attrs: {
                                  src: n("dab5"),
                                  alt: "Empty cart Icon",
                                  width: "24",
                                  height: "24",
                                },
                                on: { click: e.clickedTrash },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a(
                    "v-content",
                    { staticClass: "page-content cart-content" },
                    [
                      a(
                        "v-fade-transition",
                        [
                          a(
                            "v-container",
                            {
                              staticClass: "inner-container",
                              attrs: {
                                fluid: "",
                                "fill-height": "",
                                "pa-0": "",
                              },
                            },
                            [
                              a(
                                "v-flex",
                                {
                                  attrs: {
                                    "justify-start": "",
                                    "align-start": "",
                                    "flex-direction": "column",
                                  },
                                },
                                [
                                  e.ordersCount > 0 &&
                                  ((2 == e.restaurantType &&
                                    e.offlineOrdersEnabled &&
                                    !e.offlineWhatsappOrderEnabled) ||
                                    (1 == e.restaurantType &&
                                      e.onlineOrdersEnabled &&
                                      (!e.onlineWhatsappOrderEnabled ||
                                        e.onlineMailOrderEnabled)))
                                    ? a(
                                        "v-sheet",
                                        {
                                          staticClass: "mx-4",
                                          on: {
                                            click: function (t) {
                                              return e.showMyOrders();
                                            },
                                          },
                                        },
                                        [
                                          a(
                                            "div",
                                            {
                                              staticClass:
                                                "py-4 d-flex align-items-center justify-end",
                                            },
                                            [
                                              a(
                                                "v-badge",
                                                {
                                                  staticClass: "p-0",
                                                  attrs: {
                                                    color: "red",
                                                    icon: "mdi-exclamation-thick",
                                                    "offset-x": "14",
                                                    "offset-y": "14",
                                                    value:
                                                      e.orderNotificationActive,
                                                  },
                                                },
                                                [
                                                  a(
                                                    "v-btn",
                                                    {
                                                      staticClass:
                                                        "pulsing-button d-flex",
                                                      attrs: {
                                                        elevation: "0",
                                                        light: "",
                                                        color: "primary",
                                                      },
                                                    },
                                                    [
                                                      a(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "pl-2 text-uppercase",
                                                        },
                                                        [
                                                          e._v(
                                                            e._s(
                                                              e.$t(
                                                                "I miei ordini"
                                                              )
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                      a("v-icon", [
                                                        e._v(
                                                          "mdi-chevron-right"
                                                        ),
                                                      ]),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                          a("v-divider"),
                                        ],
                                        1
                                      )
                                    : e._e(),
                                  a("cart-how-to-order"),
                                  void 0 !== e.cartCategoriesAndProducts &&
                                  e.cartCategoriesAndProducts.length > 0
                                    ? a(
                                        "v-sheet",
                                        {
                                          class: {
                                            "pl-4": !e.$vuetify.rtl,
                                            "pr-4": e.$vuetify.rtl,
                                          },
                                        },
                                        [
                                          void 0 !== e.itemsSpecial &&
                                          e.itemsSpecial.length > 0
                                            ? a(
                                                "div",
                                                {
                                                  staticClass: "section-header",
                                                },
                                                [
                                                  a(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "section-title text-start",
                                                    },
                                                    [
                                                      e._v(
                                                        "\n                                    " +
                                                          e._s(
                                                            void 0 !==
                                                              e.menucarta &&
                                                              "" !==
                                                                e.menucarta.name
                                                              ? e.menucarta.name
                                                              : e.$t(
                                                                  "Menu alla carta"
                                                                )
                                                          ) +
                                                          "\n                                "
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : e._e(),
                                          e._l(
                                            e.cartCategoriesAndProducts,
                                            function (t) {
                                              return a(
                                                "v-sheet",
                                                { key: t.id },
                                                [
                                                  a(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "section-header section-header-category",
                                                    },
                                                    [
                                                      a(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "section-title text-start",
                                                        },
                                                        [e._v(e._s(t.name))]
                                                      ),
                                                      t.name_orig
                                                        ? a(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "section-sub-title text-start",
                                                            },
                                                            [
                                                              e._v(
                                                                "\n                                        " +
                                                                  e._s(
                                                                    t.name_orig
                                                                  ) +
                                                                  "\n                                    "
                                                              ),
                                                            ]
                                                          )
                                                        : e._e(),
                                                    ]
                                                  ),
                                                  e._l(
                                                    t.menuentries,
                                                    function (n, r) {
                                                      return a(
                                                        "menu-item-card",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "show",
                                                              rawName: "v-show",
                                                              value: t,
                                                              expression: "cat",
                                                            },
                                                          ],
                                                          key: r,
                                                          staticClass:
                                                            "cart-menu-item-card",
                                                          attrs: {
                                                            mode: 1,
                                                            item: e.getItem(
                                                              n.id
                                                            ),
                                                            cartitem: n,
                                                          },
                                                        }
                                                      );
                                                    }
                                                  ),
                                                ],
                                                2
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      )
                                    : e._e(),
                                  void 0 !== e.cartCategoriesAndProducts &&
                                  e.cartCategoriesAndProducts.length > 0
                                    ? a("v-divider", {
                                        staticClass: "mt-6 mx-4",
                                      })
                                    : e._e(),
                                  void 0 !== e.itemsSpecial &&
                                  e.itemsSpecial.length > 0
                                    ? a(
                                        "v-sheet",
                                        {
                                          class: {
                                            "pl-4": !e.$vuetify.rtl,
                                            "pr-4": e.$vuetify.rtl,
                                          },
                                        },
                                        [
                                          a(
                                            "div",
                                            { staticClass: "section-header" },
                                            [
                                              a(
                                                "span",
                                                {
                                                  staticClass:
                                                    "section-title text-start",
                                                },
                                                [
                                                  e._v(
                                                    "\n                                    " +
                                                      e._s(
                                                        void 0 !== e.menuspec &&
                                                          "" !== e.menuspec.name
                                                          ? e.menuspec.name
                                                          : e.$t(
                                                              "Menu speciali"
                                                            )
                                                      ) +
                                                      "\n                                "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          e._l(e.itemsSpecial, function (t, n) {
                                            return a(
                                              "v-sheet",
                                              { key: n },
                                              [
                                                a(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "section-header section-header-category-special",
                                                  },
                                                  [
                                                    a(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "section-title text-start",
                                                      },
                                                      [
                                                        e._v(
                                                          "\n                                        " +
                                                            e._s(
                                                              e.getSpecialMenuTitle(
                                                                t
                                                              )
                                                            ) +
                                                            "\n                                    "
                                                        ),
                                                      ]
                                                    ),
                                                    t.name_orig
                                                      ? a(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "section-sub-title text-start",
                                                          },
                                                          [
                                                            e._v(
                                                              "\n                                        " +
                                                                e._s(
                                                                  t.name_orig
                                                                ) +
                                                                "\n                                    "
                                                            ),
                                                          ]
                                                        )
                                                      : e._e(),
                                                  ]
                                                ),
                                                void 0 != e.getSpecialMenu(t)
                                                  ? a(
                                                      "div",
                                                      e._l(
                                                        e.getSpecialMenu(t)
                                                          .specialcategories,
                                                        function (n) {
                                                          return a(
                                                            "div",
                                                            {
                                                              key: n.id,
                                                              staticClass:
                                                                "specialmenu-group",
                                                            },
                                                            [
                                                              a(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "specialmenu-group--top pb-2",
                                                                },
                                                                [
                                                                  a(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "title",
                                                                    },
                                                                    [
                                                                      e._v(
                                                                        e._s(
                                                                          n.name
                                                                        )
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                              n.menuentries
                                                                .length > 0
                                                                ? a(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "specialmenu-group--content",
                                                                    },
                                                                    e._l(
                                                                      n.menuentries,
                                                                      function (
                                                                        r,
                                                                        i
                                                                      ) {
                                                                        return a(
                                                                          "div",
                                                                          {
                                                                            key: i,
                                                                            staticClass:
                                                                              "specialmenu-group--wrap",
                                                                          },
                                                                          [
                                                                            t.menuentries.find(
                                                                              function (
                                                                                e
                                                                              ) {
                                                                                return (
                                                                                  e.id ===
                                                                                    r.id &&
                                                                                  e.specialmenucategoryid ===
                                                                                    n.id
                                                                                );
                                                                              }
                                                                            )
                                                                              ? a(
                                                                                  "menu-item-card",
                                                                                  {
                                                                                    staticClass:
                                                                                      "cart-menu-item-card",
                                                                                    attrs:
                                                                                      {
                                                                                        mode: 1,
                                                                                        item: e.getItem(
                                                                                          r.id
                                                                                        ),
                                                                                        specialmenu:
                                                                                          t.id,
                                                                                        specialmenucategory:
                                                                                          n.id,
                                                                                        cartitem:
                                                                                          t.menuentries.find(
                                                                                            function (
                                                                                              e
                                                                                            ) {
                                                                                              return (
                                                                                                e.id ===
                                                                                                  r.id &&
                                                                                                e.specialmenucategoryid ===
                                                                                                  n.id
                                                                                              );
                                                                                            }
                                                                                          ),
                                                                                        cartspecialitem:
                                                                                          t,
                                                                                      },
                                                                                  }
                                                                                )
                                                                              : e._e(),
                                                                          ],
                                                                          1
                                                                        );
                                                                      }
                                                                    ),
                                                                    0
                                                                  )
                                                                : e._e(),
                                                            ]
                                                          );
                                                        }
                                                      ),
                                                      0
                                                    )
                                                  : e._e(),
                                                void 0 == e.getSpecialMenu(t)
                                                  ? a(
                                                      "div",
                                                      e._l(
                                                        t.menuentries,
                                                        function (n) {
                                                          return a(
                                                            "menu-item-card",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "show",
                                                                  rawName:
                                                                    "v-show",
                                                                  value: t,
                                                                  expression:
                                                                    "specialmenu",
                                                                },
                                                              ],
                                                              key: n.id,
                                                              staticClass:
                                                                "cart-menu-item-card",
                                                              attrs: {
                                                                mode: 1,
                                                                item: e.getItem(
                                                                  n.id
                                                                ),
                                                                specialmenu:
                                                                  t.id,
                                                              },
                                                            }
                                                          );
                                                        }
                                                      ),
                                                      1
                                                    )
                                                  : e._e(),
                                                a(
                                                  "v-row",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-center ma-0",
                                                  },
                                                  [
                                                    a(
                                                      "v-col",
                                                      {
                                                        staticClass:
                                                          "d-flex col-6 align-center justify-space-between",
                                                      },
                                                      [
                                                        a(
                                                          "v-btn",
                                                          {
                                                            attrs: {
                                                              elevation: "0",
                                                              fab: "",
                                                              dark: "",
                                                              small: "",
                                                              color: "black",
                                                            },
                                                            on: {
                                                              click: function (
                                                                n
                                                              ) {
                                                                return e.removeSpecialFromCart(
                                                                  t
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [
                                                            a(
                                                              "v-icon",
                                                              {
                                                                attrs: {
                                                                  dark: "",
                                                                },
                                                              },
                                                              [
                                                                e._v(
                                                                  "mdi-minus"
                                                                ),
                                                              ]
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                        a(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "quantity-value",
                                                          },
                                                          [
                                                            e._v(
                                                              "\n                                            " +
                                                                e._s(
                                                                  e.itemSpecialQuantityInCart(
                                                                    t
                                                                  )
                                                                ) +
                                                                "\n                                        "
                                                            ),
                                                          ]
                                                        ),
                                                        a(
                                                          "v-btn",
                                                          {
                                                            attrs: {
                                                              elevation: "0",
                                                              fab: "",
                                                              dark: "",
                                                              small: "",
                                                              color: "black",
                                                            },
                                                            on: {
                                                              click: function (
                                                                n
                                                              ) {
                                                                return e.addSpecialToCart(
                                                                  t
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [
                                                            a(
                                                              "v-icon",
                                                              {
                                                                attrs: {
                                                                  dark: "",
                                                                },
                                                              },
                                                              [e._v("mdi-plus")]
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            );
                                          }),
                                        ],
                                        2
                                      )
                                    : e._e(),
                                  e._e(),
                                  e.itemsCount > 0
                                    ? a("v-divider", {
                                        staticClass: "d-block mt-4 mx-4",
                                      })
                                    : e._e(),
                                  e.itemsCount > 0
                                    ? a(
                                        "div",
                                        { staticClass: "d-block pt-4 mx-4" },
                                        [
                                          a(
                                            "span",
                                            {
                                              staticClass:
                                                "total-price text-start pb-2",
                                            },
                                            [
                                              e._v(
                                                "\n                                " +
                                                  e._s(
                                                    e.$t("Totale ordine") + ": "
                                                  ) +
                                                  "\n                                "
                                              ),
                                              a("b", [
                                                e._v(
                                                  e._s(
                                                    e._f("pricer")(
                                                      e.getFormattedPrice()
                                                    )
                                                  ) + e._s(e.currencySymbol)
                                                ),
                                              ]),
                                            ]
                                          ),
                                        ]
                                      )
                                    : e._e(),
                                  1 === e.restaurantType &&
                                  e.onlineOrdersEnabled
                                    ? a("cart-online-orders")
                                    : e._e(),
                                  2 === e.restaurantType &&
                                  e.offlineOrdersEnabled
                                    ? a("cart-offline-orders")
                                    : a("div", { staticClass: "d-block py-4" }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a(
                    "v-dialog",
                    {
                      attrs: { persistent: "", "max-width": "290" },
                      model: {
                        value: e.showConfirmTrash,
                        callback: function (t) {
                          e.showConfirmTrash = t;
                        },
                        expression: "showConfirmTrash",
                      },
                    },
                    [
                      a(
                        "v-card",
                        [
                          a("v-card-title", { staticClass: "headline" }, [
                            e._v(e._s(e.$t("Svuotare l'ordine?"))),
                          ]),
                          a("v-card-text", [
                            e._v(
                              e._s(e.$t("Si vuole davvero svuotare l'ordine?"))
                            ),
                          ]),
                          a(
                            "v-card-actions",
                            [
                              a("v-spacer"),
                              a(
                                "v-btn",
                                {
                                  attrs: { color: "secondary", text: "" },
                                  on: {
                                    click: function (t) {
                                      return e.confirmTrash(!1);
                                    },
                                  },
                                },
                                [e._v(e._s(e.$t("Annulla")))]
                              ),
                              a(
                                "v-btn",
                                {
                                  attrs: { color: "primary", text: "" },
                                  on: {
                                    click: function (t) {
                                      return e.confirmTrash(!0);
                                    },
                                  },
                                },
                                [e._v(e._s(e.$t("Conferma")))]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        r = [],
        i = n("2f62"),
        s = n("7fca"),
        o = n("47cf"),
        c = n("2b0e"),
        l = n("afbd"),
        u = (n("68d6"), n("45d2")),
        p = n("132c"),
        d = n("5a15"),
        h = n("7765");
      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                g(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var m = {
          components: {
            CartOfflineOrders: d["a"],
            CartOnlineOrders: p["a"],
            CartHowToOrder: u["a"],
            LanguageChooserSelect: s["a"],
            MenuItemCard: o["a"],
            DemoPopup: h["a"],
          },
          props: { hash: String },
          data: function () {
            return {
              confirmedHash: void 0,
              overlay: !1,
              isShowing: !1,
              isReady: !1,
              redirecting: !1,
              showConfirmTrash: !1,
              menuSpecName: "",
              menuCartaName: "",
              prevRoute: null,
            };
          },
          beforeRouteEnter: function (e, t, n) {
            n(function (e) {
              e.prevRoute = t;
            });
          },
          computed: v(
            {
              ordersEnabled: function () {
                return !0;
              },
            },
            Object(i["e"])("app", {
              appCurrentLanguage: function (e) {
                return e.currentLanguage;
              },
            }),
            {},
            Object(i["e"])("restaurant", [
              "name",
              "availableLanguages",
              "logo",
              "menuspec",
              "menucarta",
              "vinicarta",
            ]),
            {},
            Object(i["c"])("cart", [
              "cartCategoriesAndProducts",
              "itemSpecialQuantityInCart",
              "itemQuantityInCart",
              "getItemFromCart",
              "getItemSpecialFromCart",
            ]),
            {},
            Object(i["c"])("items", ["getItem"]),
            {},
            Object(i["e"])("orders", ["waitingForPayment"]),
            {},
            Object(i["c"])("orders", ["currentSessionId", "ordersCount"]),
            {},
            Object(i["c"])("restaurant", [
              "isLangRTL",
              "getPriceMode",
              "restaurantType",
              "currencySymbol",
              "offlineOrdersEnabled",
              "offlineWhatsappOrderEnabled",
              "onlineOrdersEnabled",
              "onlineWhatsappOrderEnabled",
              "onlineMailOrderEnabled",
            ]),
            {},
            Object(i["c"])("specialmenus", [
              "getSpecialMenu",
              "specialMenuTextForGA",
            ]),
            {},
            Object(i["e"])("cart", [
              "itemsCount",
              "itemsSpecial",
              "cartTotalPrice",
            ]),
            {},
            Object(i["e"])("app", [
              "deviceID",
              "navBarReduced",
              "splashShown",
              "orderNotificationActive",
              "lastCallWaiter",
              "currentLanguage",
              "demoVersion",
            ])
          ),
          watch: {
            menuspec: function () {
              this.menuSpecName = this.menuspec.name;
            },
            menucarta: function () {
              this.menuCartaName = this.menucarta.name;
            },
          },
          methods: v(
            {},
            Object(i["b"])("app", [
              "showSnackbarInfoMessageTimeout",
              "showSnackbarErrorMessageTimeout",
            ]),
            {},
            Object(i["b"])("restaurant", ["getFullRestaurantInfo"]),
            {},
            Object(i["b"])("cart", [
              "emptyCart",
              "addSpecialMenuToCart",
              "removeSpecialMenuFromCart",
            ]),
            {},
            Object(i["b"])("orders", [
              "refreshLastOrder",
              "clearCurrentOrderSession",
              "updateOrderPaymentResult",
              "loadOrdersState",
              "setWaitingForPayment",
              "setPaymentSuccessful",
            ]),
            {
              addSpecialToCart: function (e) {
                this.addSpecialMenuToCart(e),
                  Object(l["a"])(this.$ga, "specialMenuOrderAdd", e.name),
                  console.log("adding to specialmenu" + JSON.stringify(e));
                var t = this.specialMenuTextForGA(e);
                null != t &&
                  t.length > 0 &&
                  Object(l["a"])(this.$ga, "specialMenuOrderAddDetail", t);
              },
              removeSpecialFromCart: function (e) {
                this.removeSpecialMenuFromCart(e),
                  Object(l["a"])(this.$ga, "specialMenuOrderRemove", e.name);
                var t = this.specialMenuTextForGA(e);
                null != t &&
                  t.length > 0 &&
                  Object(l["a"])(this.$ga, "specialMenuOrderRemoveDetail", t);
              },
              closeCart: function () {
                void 0 != this.prevRoute && void 0 != this.prevRoute.name
                  ? this.$router.go(-1)
                  : this.$router.replace({ name: "restaurant" }),
                  Object(l["a"])(this.$ga, "closeOrder");
              },
              clickedTrash: function () {
                this.showConfirmTrash = !0;
              },
              getFormattedPrice: function () {
                return (
                  Math.round(100 * parseFloat(this.cartTotalPrice)) / 100
                ).toFixed(2);
              },
              getFormattedShippingCost: function () {
                return this.thresholdEnabled &&
                  this.cartTotalPrice > this.shippingThreshold
                  ? (
                      Math.round(100 * parseFloat(this.shippingThresholdCost)) /
                      100
                    ).toFixed(2)
                  : (
                      Math.round(100 * parseFloat(this.shippingCost)) / 100
                    ).toFixed(2);
              },
              confirmTrash: function (e) {
                (this.showConfirmTrash = !1),
                  e &&
                    (this.emptyCart(),
                    (this.paymentDone = !1),
                    2 != this.restaurantType && this.clearCurrentOrderSession(),
                    Object(l["a"])(this.$ga, "emptyOrder"));
              },
              getSpecialMenuTitle: function (e) {
                var t = this.getSpecialMenu(e);
                return t
                  ? t.name +
                      (void 0 !== this.onlineordersplatforms &&
                      this.onlineordersplatforms.length > 0 &&
                      void 0 != t.price
                        ? " (" + t.price + getPriceMode(t) + ")"
                        : "")
                  : "";
              },
              sendOrder: function () {
                var e = this,
                  t = [];
                this.cartCategoriesAndProducts.forEach(function (n) {
                  n.menuentries.forEach(function (n) {
                    var a = e.getItem(n.id);
                    void 0 != a.name_orig && t.push(a.name_orig);
                  });
                }),
                  c["default"].axios
                    .post(
                      "http://dishcovery.diapason.digital/api/v3/restaurants/" +
                        this.hash +
                        "/order",
                      { items: t }
                    )
                    .then(function (e) {})
                    .catch(function (e) {})
                    .catch(function (e) {});
              },
              initializeCart: function () {
                this.isReady ||
                  ((this.isReady = !0),
                  (this.paymentDone = !1),
                  (this.menuSpecName = this.menuspec.name),
                  (this.menuCartaName = this.menucarta.name));
              },
              showMyOrders: function () {
                this.$router.push({
                  name: "my-orders",
                  props: { hash: this.hash },
                }),
                  Object(l["a"])(this.$ga, "viewMyOrders");
              },
            }
          ),
          mounted: function () {
            var e = this;
            (this.confirmedHash = this.hash),
              this.loadOrdersState(this.confirmedHash).then(function () {
                if (
                  !e.waitingForPayment &&
                  !e.splashShown &&
                  void 0 === e.$route.query.result
                )
                  return (
                    e.$router.push({
                      name: "restaurant",
                      params: { hash: e.hash },
                    }),
                    void (e.redirecting = !0)
                  );
                if (
                  (e.setWaitingForPayment(!1), void 0 !== e.$route.query.result)
                ) {
                  var t =
                    "ok" === e.$route.query.result &&
                    e.$route.query.session_id === e.currentSessionId;
                  t ||
                    e.showSnackbarErrorMessageTimeout({
                      message: e.$t("Il pagamento non è andato a buon fine."),
                      timeout: 5e3,
                    });
                  var n =
                    null != e.$route.query.session_id
                      ? e.$route.query.session_id
                      : e.currentSessionId;
                  e
                    .updateOrderPaymentResult({
                      hash: e.hash,
                      result: { session_id: n, payment_result: t },
                      deviceID: e.deviceID,
                    })
                    .then(function () {
                      t &&
                        e.showSnackbarInfoMessageTimeout({
                          message: e.$t("Pagamento ricevuto, grazie!"),
                          timeout: 5e3,
                        });
                    })
                    .catch(function (e) {
                      console.log(e);
                    }),
                    e.$router.replace({ query: null });
                }
                e.$store
                  .dispatch("restaurant/initializeRestaurant", {
                    hash: e.confirmedHash,
                    showSplash: !1,
                  })
                  .then(
                    function (t) {
                      e.setAppTitle(e.name + " - Powered by Dishcovery"),
                        e.createManifest(e.name, document),
                        (e.$vuetify.rtl = e.isLangRTL(
                          e.currentLanguage.toString().toLowerCase()
                        ));
                    },
                    function (e) {
                      console.log("error initializing restaurant");
                    }
                  ),
                  (e.redirecting = !1),
                  Object(l["a"])(e.$ga, "page", "cart");
              });
          },
          activated: function () {
            this.redirecting ? (this.redirecting = !1) : this.initializeCart(),
              this.refreshLastOrder();
          },
        },
        b = m,
        _ = (n("f23c"), n("2877")),
        y = n("6544"),
        O = n.n(y),
        C = n("40dc"),
        w = n("4ca6"),
        j = n("8336"),
        P = n("b0af"),
        x = n("99d9"),
        S = n("62ad"),
        T = n("a523"),
        A = n("a75b"),
        k = n("169a"),
        E = n("ce7e"),
        M = n("0789"),
        V = n("0e8f"),
        $ = n("132d"),
        R = n("0fd9"),
        I = n("8dd9"),
        D = n("2fa4"),
        L = n("2a7f"),
        B = Object(_["a"])(b, a, r, !1, null, "6e5eed76", null);
      t["default"] = B.exports;
      O()(B, {
        VAppBar: C["a"],
        VBadge: w["a"],
        VBtn: j["a"],
        VCard: P["a"],
        VCardActions: x["a"],
        VCardText: x["b"],
        VCardTitle: x["c"],
        VCol: S["a"],
        VContainer: T["a"],
        VContent: A["a"],
        VDialog: k["a"],
        VDivider: E["a"],
        VFadeTransition: M["c"],
        VFlex: V["a"],
        VIcon: $["a"],
        VRow: R["a"],
        VSheet: I["a"],
        VSlideXReverseTransition: M["d"],
        VSpacer: D["a"],
        VToolbarTitle: L["a"],
      });
    },
    b883: function (e, t, n) {
      "use strict";
      var a = n("2bf7"),
        r = n.n(a);
      r.a;
    },
    bbc0: function (e, t, n) {
      var a = n("6044"),
        r = "__lodash_hash_undefined__",
        i = Object.prototype,
        s = i.hasOwnProperty;
      function o(e) {
        var t = this.__data__;
        if (a) {
          var n = t[e];
          return n === r ? void 0 : n;
        }
        return s.call(t, e) ? t[e] : void 0;
      }
      e.exports = o;
    },
    c098: function (e, t) {
      var n = 9007199254740991,
        a = /^(?:0|[1-9]\d*)$/;
      function r(e, t) {
        var r = typeof e;
        return (
          (t = null == t ? n : t),
          !!t &&
            ("number" == r || ("symbol" != r && a.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
        );
      }
      e.exports = r;
    },
    c2b6: function (e, t, n) {
      var a = n("f8af"),
        r = n("5d89"),
        i = n("6f6c"),
        s = n("a2db"),
        o = n("c8fe"),
        c = "[object Boolean]",
        l = "[object Date]",
        u = "[object Map]",
        p = "[object Number]",
        d = "[object RegExp]",
        h = "[object Set]",
        f = "[object String]",
        v = "[object Symbol]",
        g = "[object ArrayBuffer]",
        m = "[object DataView]",
        b = "[object Float32Array]",
        _ = "[object Float64Array]",
        y = "[object Int8Array]",
        O = "[object Int16Array]",
        C = "[object Int32Array]",
        w = "[object Uint8Array]",
        j = "[object Uint8ClampedArray]",
        P = "[object Uint16Array]",
        x = "[object Uint32Array]";
      function S(e, t, n) {
        var S = e.constructor;
        switch (t) {
          case g:
            return a(e);
          case c:
          case l:
            return new S(+e);
          case m:
            return r(e, n);
          case b:
          case _:
          case y:
          case O:
          case C:
          case w:
          case j:
          case P:
          case x:
            return o(e, n);
          case u:
            return new S();
          case p:
          case f:
            return new S(e);
          case d:
            return i(e);
          case h:
            return new S();
          case v:
            return s(e);
        }
      }
      e.exports = S;
    },
    c3fc: function (e, t, n) {
      var a = n("42a2"),
        r = n("1310"),
        i = "[object Set]";
      function s(e) {
        return r(e) && a(e) == i;
      }
      e.exports = s;
    },
    c7ad: function (e, t, n) {},
    c865: function (e, t, n) {
      "use strict";
      var a = n("0789"),
        r = n("9d26"),
        i = n("a9ad"),
        s = n("3206"),
        o = n("5607"),
        c = n("80d2"),
        l = n("58df");
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                d(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var h = Object(l["a"])(
        i["a"],
        Object(s["a"])(
          "expansionPanel",
          "v-expansion-panel-header",
          "v-expansion-panel"
        )
      );
      t["a"] = h.extend().extend({
        name: "v-expansion-panel-header",
        directives: { ripple: o["a"] },
        props: {
          disableIconRotate: Boolean,
          expandIcon: { type: String, default: "$expand" },
          hideActions: Boolean,
          ripple: { type: [Boolean, Object], default: !1 },
        },
        data: function () {
          return { hasMousedown: !1 };
        },
        computed: {
          classes: function () {
            return {
              "v-expansion-panel-header--active": this.isActive,
              "v-expansion-panel-header--mousedown": this.hasMousedown,
            };
          },
          isActive: function () {
            return this.expansionPanel.isActive;
          },
          isDisabled: function () {
            return this.expansionPanel.isDisabled;
          },
          isReadonly: function () {
            return this.expansionPanel.isReadonly;
          },
        },
        created: function () {
          this.expansionPanel.registerHeader(this);
        },
        beforeDestroy: function () {
          this.expansionPanel.unregisterHeader();
        },
        methods: {
          onClick: function (e) {
            this.$emit("click", e);
          },
          genIcon: function () {
            var e = Object(c["m"])(this, "actions") || [
              this.$createElement(r["a"], this.expandIcon),
            ];
            return this.$createElement(a["c"], [
              this.$createElement(
                "div",
                {
                  staticClass: "v-expansion-panel-header__icon",
                  class: {
                    "v-expansion-panel-header__icon--disable-rotate":
                      this.disableIconRotate,
                  },
                  directives: [{ name: "show", value: !this.isDisabled }],
                },
                e
              ),
            ]);
          },
        },
        render: function (e) {
          var t = this;
          return e(
            "button",
            this.setBackgroundColor(this.color, {
              staticClass: "v-expansion-panel-header",
              class: this.classes,
              attrs: { tabindex: this.isDisabled ? -1 : null, type: "button" },
              directives: [{ name: "ripple", value: this.ripple }],
              on: p({}, this.$listeners, {
                click: this.onClick,
                mousedown: function () {
                  return (t.hasMousedown = !0);
                },
                mouseup: function () {
                  return (t.hasMousedown = !1);
                },
              }),
            }),
            [
              Object(c["m"])(this, "default", { open: this.isActive }, !0),
              this.hideActions || this.genIcon(),
            ]
          );
        },
      });
    },
    c869: function (e, t, n) {
      var a = n("0b07"),
        r = n("2b3e"),
        i = a(r, "Set");
      e.exports = i;
    },
    c87c: function (e, t) {
      var n = Object.prototype,
        a = n.hasOwnProperty;
      function r(e) {
        var t = e.length,
          n = new e.constructor(t);
        return (
          t &&
            "string" == typeof e[0] &&
            a.call(e, "index") &&
            ((n.index = e.index), (n.input = e.input)),
          n
        );
      }
      e.exports = r;
    },
    c8fe: function (e, t, n) {
      var a = n("f8af");
      function r(e, t) {
        var n = t ? a(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      }
      e.exports = r;
    },
    c994: function (e, t, n) {
      "use strict";
      var a = n("c7ad"),
        r = n.n(a);
      r.a;
    },
    cb5a: function (e, t, n) {
      var a = n("9638");
      function r(e, t) {
        var n = e.length;
        while (n--) if (a(e[n][0], t)) return n;
        return -1;
      }
      e.exports = r;
    },
    cc45: function (e, t, n) {
      var a = n("1a2d"),
        r = n("b047"),
        i = n("99d3"),
        s = i && i.isMap,
        o = s ? r(s) : a;
      e.exports = o;
    },
    cd55: function (e, t, n) {
      "use strict";
      var a = n("4e82"),
        r = n("3206"),
        i = n("80d2"),
        s = n("58df");
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                l(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      t["a"] = Object(s["a"])(
        Object(a["a"])(
          "expansionPanels",
          "v-expansion-panel",
          "v-expansion-panels"
        ),
        Object(r["b"])("expansionPanel", !0)
      ).extend({
        name: "v-expansion-panel",
        props: { disabled: Boolean, readonly: Boolean },
        data: function () {
          return { content: null, header: null, nextIsActive: !1 };
        },
        computed: {
          classes: function () {
            return c(
              {
                "v-expansion-panel--active": this.isActive,
                "v-expansion-panel--next-active": this.nextIsActive,
                "v-expansion-panel--disabled": this.isDisabled,
              },
              this.groupClasses
            );
          },
          isDisabled: function () {
            return this.expansionPanels.disabled || this.disabled;
          },
          isReadonly: function () {
            return this.expansionPanels.readonly || this.readonly;
          },
        },
        methods: {
          registerContent: function (e) {
            this.content = e;
          },
          unregisterContent: function () {
            this.content = null;
          },
          registerHeader: function (e) {
            (this.header = e), e.$on("click", this.onClick);
          },
          unregisterHeader: function () {
            this.header = null;
          },
          onClick: function (e) {
            e.detail && this.header.$el.blur(),
              this.$emit("click", e),
              this.isReadonly || this.isDisabled || this.toggle();
          },
          toggle: function () {
            var e = this;
            this.content && (this.content.isBooted = !0),
              this.$nextTick(function () {
                return e.$emit("change");
              });
          },
        },
        render: function (e) {
          return e(
            "div",
            {
              staticClass: "v-expansion-panel",
              class: this.classes,
              attrs: { "aria-expanded": String(this.isActive) },
            },
            Object(i["m"])(this)
          );
        },
      });
    },
    d02c: function (e, t, n) {
      var a = n("5e2e"),
        r = n("79bc"),
        i = n("7b83"),
        s = 200;
      function o(e, t) {
        var n = this.__data__;
        if (n instanceof a) {
          var o = n.__data__;
          if (!r || o.length < s - 1)
            return o.push([e, t]), (this.size = ++n.size), this;
          n = this.__data__ = new i(o);
        }
        return n.set(e, t), (this.size = n.size), this;
      }
      e.exports = o;
    },
    d0db: function (e, t, n) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "page-filters-bar" },
            [
              a("filters-popup", {
                attrs: { showDialog: e.showFilters },
                on: { close: e.toggleShowFilters },
              }),
              a(
                "div",
                { staticClass: "page-filters-bar-items" },
                [
                  void 0 !== e.specialMenus &&
                  e.specialMenus.length > 0 &&
                  !e.menuspecdisabled &&
                  !e.menucartadisabled
                    ? a(
                        "div",
                        {
                          staticClass: "page-filters-bar--item",
                          on: { click: e.goToRestaurant },
                        },
                        [
                          a("img", {
                            ref: "icon",
                            staticClass: "restaurant-icon",
                            attrs: {
                              src: n("23f3"),
                              alt: "Restaurant Icon",
                              width: "15",
                              height: "16",
                            },
                          }),
                          a("span", [
                            e._v(
                              "\n                " +
                                e._s(e.$t("Menu")) +
                                "\n            "
                            ),
                          ]),
                        ]
                      )
                    : e._e(),
                  a(
                    "v-badge",
                    {
                      attrs: {
                        color: "red",
                        value:
                          void 0 != e.currentSearchKey &&
                          e.currentSearchKey.length > 0,
                        overlap: "",
                        "offset-x": "20",
                        "offset-y": "25",
                        icon: "mdi-check",
                      },
                    },
                    [
                      a(
                        "div",
                        {
                          staticClass: "page-filters-bar--item pt-3",
                          on: { click: e.toggleShowSearch },
                        },
                        [
                          a("img", {
                            ref: "icon",
                            staticClass: "search-icon",
                            attrs: {
                              src: n("0930"),
                              alt: "Search Icon",
                              width: "14",
                              height: "14",
                            },
                          }),
                          a("span", [e._v(e._s(e.$t("Cerca")))]),
                        ]
                      ),
                    ]
                  ),
                  (void 0 !== e.filteredTags && e.filteredTags.length > 0) ||
                  (void 0 !== e.filteredAllergenTags &&
                    e.filteredAllergenTags.length > 0)
                    ? a(
                        "v-badge",
                        {
                          attrs: {
                            color: "red",
                            value:
                              (void 0 !== e.currentAllergenTags &&
                                e.currentAllergenTags.length > 0) ||
                              (void 0 !== e.currentTags &&
                                e.currentTags.length > 0),
                            icon: "mdi-check",
                            "offset-x": "20",
                            "offset-y": "25",
                            overlap: "",
                          },
                        },
                        [
                          a(
                            "div",
                            {
                              staticClass: "page-filters-bar--item pt-3",
                              on: { click: e.toggleShowFilters },
                            },
                            [
                              a("img", {
                                ref: "icon",
                                staticClass: "filters-icon",
                                attrs: {
                                  src: n("dd98"),
                                  alt: "Filters Icon",
                                  width: "15",
                                  height: "12.5",
                                },
                              }),
                              a("span", [e._v(e._s(e.$t("Filtra")))]),
                            ]
                          ),
                        ]
                      )
                    : e._e(),
                ],
                1
              ),
              a("v-expand-transition", [
                a(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: 1 == e.showSearch,
                        expression: "showSearch == true",
                      },
                    ],
                    staticClass: "page-filters-search",
                  },
                  [
                    a("v-text-field", {
                      ref: "searchKey",
                      staticClass: "px-4 bg-white search-field pb-4 pt-1",
                      attrs: {
                        rounded: "",
                        dense: "",
                        outlined: "",
                        "hide-details": "",
                        clearable: "",
                        placeholder: e.$t("Cerca qui"),
                        "prepend-inner-icon": "mdi-magnify",
                      },
                      on: {
                        keyup: function (t) {
                          return !t.type.indexOf("key") &&
                            e._k(t.keyCode, "enter", 13, t.key, "Enter")
                            ? null
                            : e.submitSearch(t);
                        },
                        "click:clear": e.resetSearch,
                      },
                      model: {
                        value: e.searchKey,
                        callback: function (t) {
                          e.searchKey = t;
                        },
                        expression: "searchKey",
                      },
                    }),
                  ],
                  1
                ),
              ]),
            ],
            1
          );
        },
        r = [],
        i = n("2f62"),
        s = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "v-layout",
            { attrs: { "justify-center": "" } },
            [
              a(
                "v-dialog",
                {
                  attrs: {
                    "content-class": "filters-popup",
                    transition: "slide-x-reverse-transition",
                    origin: "center right",
                    absolute: "",
                    persistent: "",
                    fullscreen: "",
                  },
                  model: {
                    value: e.showDialog,
                    callback: function (t) {
                      e.showDialog = t;
                    },
                    expression: "showDialog",
                  },
                },
                [
                  a(
                    "v-container",
                    {
                      directives: [
                        {
                          name: "touch",
                          rawName: "v-touch",
                          value: {
                            right: function () {
                              return e.closeItem();
                            },
                          },
                          expression: "{ right: () => closeItem() }",
                        },
                      ],
                      staticClass: "page-container item-container",
                      attrs: {
                        fluid: "",
                        "fill-height": "",
                        id: "filters-dialog",
                        "align-start": "",
                        "pa-0": "",
                      },
                    },
                    [
                      a(
                        "v-app-bar",
                        {
                          staticClass:
                            "page-app-bar item-app-bar navbar--hidden",
                          attrs: {
                            app: "",
                            color: "white",
                            elevation: "1",
                            top: "",
                          },
                        },
                        [
                          a(
                            "button",
                            {
                              staticClass: "back-button-right",
                              on: { click: e.closePopup },
                            },
                            [
                              a("img", {
                                ref: "icon",
                                staticClass: "back-icon",
                                attrs: {
                                  src: n("8155"),
                                  alt: "Item Icon",
                                  width: "24",
                                  height: "24",
                                },
                              }),
                            ]
                          ),
                          a(
                            "v-flex",
                            { attrs: { "text-center": "" } },
                            [
                              a(
                                "v-fade-transition",
                                [
                                  a(
                                    "v-toolbar-title",
                                    {
                                      staticStyle: {
                                        "max-width": "50%",
                                        margin: "0 auto",
                                      },
                                      attrs: {
                                        "text-center": "",
                                        "text-truncate": "",
                                      },
                                    },
                                    [e._v(e._s(e.$t("Filtri")))]
                                  ),
                                ],
                                1
                              ),
                              a("v-fade-transition", [
                                e.checkedTags.length > 0 ||
                                e.checkedAllergenTags.length > 0
                                  ? a(
                                      "div",
                                      {
                                        staticClass:
                                          "filters-checkboxes-actions-top--item",
                                        on: { click: e.resetFilters },
                                      },
                                      [
                                        a(
                                          "span",
                                          {
                                            staticClass:
                                              "button text-clear-filters text-uppercase",
                                          },
                                          [
                                            e._v(
                                              " " + e._s(e.$t("Azzera")) + " "
                                            ),
                                          ]
                                        ),
                                      ]
                                    )
                                  : e._e(),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      a("div", { staticClass: "page-filters-checkboxes" }, [
                        a("div", { staticClass: "filters-checkboxes-groups" }, [
                          void 0 !== e.filteredTags && e.filteredTags.length > 0
                            ? a(
                                "div",
                                { staticClass: "filters-checkboxes-group" },
                                [
                                  a("h2", { staticClass: "pb-2" }, [
                                    e._v(e._s(e.$t("Tags"))),
                                  ]),
                                  a(
                                    "ul",
                                    e._l(e.filteredTags, function (t) {
                                      return a("li", { key: t.id }, [
                                        a(
                                          "div",
                                          {
                                            staticClass: "checkbox",
                                            on: {
                                              click: function (n) {
                                                return e.toggleTag(t.id);
                                              },
                                            },
                                          },
                                          [
                                            a(
                                              "label",
                                              {
                                                style: {
                                                  "border-color": t.icon_color,
                                                },
                                              },
                                              [
                                                a("span", {
                                                  staticClass: "icon",
                                                  domProps: {
                                                    innerHTML: e._s(
                                                      t.finalIcon
                                                    ),
                                                  },
                                                }),
                                                a(
                                                  "span",
                                                  {
                                                    staticClass: "name",
                                                    style: {
                                                      color: t.icon_color,
                                                    },
                                                  },
                                                  [e._v(e._s(t.name))]
                                                ),
                                              ]
                                            ),
                                            a("input", {
                                              attrs: { type: "checkbox" },
                                              domProps: {
                                                checked:
                                                  e.checkedTags.indexOf(+t.id) >
                                                  -1,
                                                value: t.id,
                                              },
                                            }),
                                            a("span", {
                                              staticClass: "checkmark",
                                            }),
                                          ]
                                        ),
                                      ]);
                                    }),
                                    0
                                  ),
                                ]
                              )
                            : e._e(),
                          void 0 !== e.filteredAllergenTags &&
                          e.filteredAllergenTags.length > 0
                            ? a(
                                "div",
                                { staticClass: "filters-checkboxes-group" },
                                [
                                  a("h2", { staticClass: "pb-2" }, [
                                    e._v(e._s(e.$t("Allergeni esclusi"))),
                                  ]),
                                  a(
                                    "ul",
                                    e._l(e.filteredAllergenTags, function (t) {
                                      return a("li", { key: t.id }, [
                                        a(
                                          "div",
                                          {
                                            staticClass: "checkbox",
                                            on: {
                                              click: function (n) {
                                                return e.toggleAllergenTag(
                                                  t.id
                                                );
                                              },
                                            },
                                          },
                                          [
                                            a(
                                              "label",
                                              {
                                                style: {
                                                  "border-color": t.icon_color,
                                                },
                                              },
                                              [
                                                a("span", {
                                                  staticClass: "icon",
                                                  domProps: {
                                                    innerHTML: e._s(
                                                      t.finalIcon
                                                    ),
                                                  },
                                                }),
                                                a(
                                                  "span",
                                                  {
                                                    staticClass: "name",
                                                    style: {
                                                      color: t.icon_color,
                                                    },
                                                  },
                                                  [e._v(e._s(t.name))]
                                                ),
                                              ]
                                            ),
                                            a("input", {
                                              attrs: { type: "checkbox" },
                                              domProps: {
                                                checked:
                                                  e.checkedAllergenTags.indexOf(
                                                    +t.id
                                                  ) > -1,
                                                value: t.id,
                                              },
                                            }),
                                            a("span", {
                                              staticClass: "checkmark",
                                            }),
                                          ]
                                        ),
                                      ]);
                                    }),
                                    0
                                  ),
                                ]
                              )
                            : e._e(),
                        ]),
                      ]),
                      a(
                        "div",
                        {
                          staticClass:
                            "filters-checkboxes-actions filters-checkboxes-actions--bottom pt-4",
                        },
                        [
                          a("button", { on: { click: e.submitFilters } }, [
                            e._v(e._s(e.$t("Filtra ora"))),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        o = [],
        c = n("68d6");
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function p(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var d = {
          props: ["showDialog"],
          mixins: [Object(c["a"])(["showDialog"], "emit-event")],
          data: function () {
            return { checkedTags: [], checkedAllergenTags: [] };
          },
          computed: u(
            {},
            Object(i["e"])("restaurant", ["hash"]),
            {},
            Object(i["e"])("filters", [
              "currentSearchKey",
              "currentTags",
              "currentAllergenTags",
            ]),
            {},
            Object(i["c"])("filters", ["filteredTags", "filteredAllergenTags"]),
            {},
            Object(i["e"])("app", {
              appCurrentLanguage: function (e) {
                return e.currentLanguage;
              },
            })
          ),
          methods: u(
            {
              closePopup: function () {
                this.$emit("close"),
                  this.$vuetify.goTo("#filters-dialog", {
                    duration: 500,
                    offset: 0,
                  }),
                  this.synchWithState();
              },
            },
            Object(i["b"])("filters", [
              "setCurrentSearchKey",
              "setCurrentTags",
              "setCurrentAllergenTags",
            ]),
            {
              toggleTag: function (e) {
                this.checkedTags.indexOf(e) >= 0
                  ? this.checkedTags.splice(this.checkedTags.indexOf(e), 1)
                  : this.checkedTags.push(e);
              },
              toggleAllergenTag: function (e) {
                this.checkedAllergenTags.indexOf(e) >= 0
                  ? this.checkedAllergenTags.splice(
                      this.checkedAllergenTags.indexOf(e),
                      1
                    )
                  : this.checkedAllergenTags.push(e);
              },
              resetFilters: function () {
                (this.checkedTags = []),
                  (this.checkedAllergenTags = []),
                  this.setCurrentTags(this.checkedTags),
                  this.setCurrentAllergenTags(this.checkedAllergenTags);
              },
              submitFilters: function () {
                var e = this;
                this.setCurrentTags(this.checkedTags),
                  this.setCurrentAllergenTags(this.checkedAllergenTags),
                  this.closePopup(),
                  new Promise(function (e) {
                    return setTimeout(e, 200);
                  }).then(function () {
                    "search" != e.$router.currentRoute.name &&
                      e.$router.push({
                        name: "search",
                        params: { hash: e.hash },
                      });
                  });
              },
              synchWithState: function () {
                (this.checkedTags = Object.assign([], this.currentTags)),
                  (this.checkedAllergenTags = Object.assign(
                    [],
                    this.currentAllergenTags
                  ));
              },
            }
          ),
          mounted: function () {
            this.synchWithState();
          },
        },
        h = d,
        f = (n("c994"), n("1acf"), n("2877")),
        v = n("6544"),
        g = n.n(v),
        m = n("40dc"),
        b = n("a523"),
        _ = n("169a"),
        y = n("0789"),
        O = n("0e8f"),
        C = n("a722"),
        w = n("2a7f"),
        j = Object(f["a"])(h, s, o, !1, null, "429fb538", null),
        P = j.exports;
      g()(j, {
        VAppBar: m["a"],
        VContainer: b["a"],
        VDialog: _["a"],
        VFadeTransition: y["c"],
        VFlex: O["a"],
        VLayout: C["a"],
        VToolbarTitle: w["a"],
      });
      var x = n("afbd");
      function S(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                A(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function A(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var k = {
          name: "FiltersBar",
          components: { FiltersPopup: P },
          props: { hash: String },
          data: function () {
            return {
              checkedTags: [],
              checkedAllergenTags: [],
              showSearch: !1,
              showFilters: !1,
              searchKey: "",
            };
          },
          computed: T(
            {},
            Object(i["e"])("filters", [
              "currentSearchKey",
              "currentTags",
              "currentAllergenTags",
            ]),
            {},
            Object(i["e"])("restaurant", [
              "menuspecdisabled",
              "menucartadisabled",
              "vinicartadisabled",
            ]),
            {},
            Object(i["c"])("filters", ["filteredTags", "filteredAllergenTags"]),
            {},
            Object(i["e"])("specialmenus", ["specialMenus"])
          ),
          mounted: function () {
            this.searchKey = this.currentSearchKey;
          },
          watch: {
            currentSearchKey: function () {
              this.searchKey = this.currentSearchKey;
            },
          },
          beforeDestroy: function () {
            this.showSearch = !1;
          },
          activated: function () {
            (this.checkedTags = this.currentTags),
              (this.checkedAllergenTags = this.currentAllergenTags);
          },
          methods: T(
            {},
            Object(i["b"])("filters", [
              "setCurrentSearchKey",
              "setCurrentTags",
              "setCurrentAllergenTags",
            ]),
            {
              goToRestaurant: function () {
                "restaurant" !== this.$router.currentRoute.name &&
                  this.$router.replace({
                    name: "restaurant",
                    params: { hash: this.hash },
                  });
              },
              toggleShowSearch: function () {
                var e = this;
                (this.showSearch = !this.showSearch),
                  this.showSearch &&
                    setTimeout(function () {
                      e.$refs.searchKey.focus();
                    }, 200);
              },
              submitSearch: function () {
                this.setCurrentSearchKey(this.searchKey),
                  (this.showSearch = !1),
                  null != this.searchKey &&
                    Object(x["a"])(this.$ga, "search", this.searchKey),
                  "search" !== this.$router.currentRoute.name &&
                    this.$router.push({
                      name: "search",
                      params: { hash: this.hash },
                    });
              },
              resetSearch: function () {
                var e = this;
                setTimeout(function () {
                  e.setCurrentSearchKey(e.searchKey);
                }, 200);
              },
              toggleShowFilters: function () {
                this.showFilters = !this.showFilters;
              },
              submitFilters: function () {
                this.setCurrentTags(this.checkedTags),
                  this.setCurrentAllergenTags(this.checkedAllergenTags),
                  (this.showFilters = !1),
                  "search" !== this.$router.currentRoute.name &&
                    this.$router.push({
                      name: "search",
                      params: { hash: this.hash },
                    });
              },
              resetFilters: function () {
                var e = this;
                (this.checkedTags = []),
                  (this.checkedAllergenTags = []),
                  setTimeout(function () {
                    e.setCurrentTags(e.checkedTags),
                      e.setCurrentAllergenTags(e.checkedAllergenTags);
                  }, 200);
              },
            }
          ),
        },
        E = k,
        M = (n("5e01"), n("4ca6")),
        V = n("8654"),
        $ = Object(f["a"])(E, a, r, !1, null, "3cea47d8", null);
      t["a"] = $.exports;
      g()($, { VBadge: M["a"], VExpandTransition: y["a"], VTextField: V["a"] });
    },
    d327: function (e, t) {
      function n() {
        return [];
      }
      e.exports = n;
    },
    d370: function (e, t, n) {
      var a = n("253c"),
        r = n("1310"),
        i = Object.prototype,
        s = i.hasOwnProperty,
        o = i.propertyIsEnumerable,
        c = a(
          (function () {
            return arguments;
          })()
        )
          ? a
          : function (e) {
              return r(e) && s.call(e, "callee") && !o.call(e, "callee");
            };
      e.exports = c;
    },
    d7ee: function (e, t, n) {
      var a = n("c3fc"),
        r = n("b047"),
        i = n("99d3"),
        s = i && i.isSet,
        o = s ? r(s) : a;
      e.exports = o;
    },
    d885: function (e, t, n) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "v-expansion-panels",
            {
              attrs: {
                accordion: !1,
                popout: !1,
                inset: !1,
                multiple: !1,
                focusable: !1,
                disabled: !1,
                readonly: !1,
              },
            },
            e._l(e.menuCategories, function (t) {
              return n(
                "v-expansion-panel",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        e.getItemsInCategory(t.id).length > 0 ||
                        void 0 != t.children,
                      expression:
                        "getItemsInCategory(cat.id).length > 0 || cat.children != undefined",
                    },
                  ],
                  key: t.id,
                  attrs: {
                    "active-class": "active-panel",
                    id: "xpp" + t.id,
                    readonly:
                      !!e.categoryHasSubCategoriesVisible(t.id) && "readonly",
                  },
                },
                [
                  n(
                    "v-expansion-panel-header",
                    {
                      on: {
                        click: function (n) {
                          return e.clickedPanel(t);
                        },
                      },
                      scopedSlots: e._u(
                        [
                          e.categoryHasSubCategoriesVisible(t.id)
                            ? {
                                key: "actions",
                                fn: function () {
                                  return [
                                    n("v-icon", { attrs: { color: "grey" } }, [
                                      e._v("mdi-chevron-right"),
                                    ]),
                                  ];
                                },
                                proxy: !0,
                              }
                            : null,
                        ],
                        null,
                        !0
                      ),
                    },
                    [
                      null != t.image
                        ? n("div", { staticClass: "category_image" }, [
                            n("span", {
                              style: {
                                "background-image": "url(" + t.image + ")",
                              },
                            }),
                          ])
                        : e._e(),
                      n("v-flex", { attrs: { "flex-column": "" } }, [
                        n("span", { staticClass: "title" }, [
                          e._v(e._s(t.name)),
                        ]),
                        t.name_orig
                          ? n("span", { staticClass: "sub-title" }, [
                              e._v(e._s(t.name_orig)),
                            ])
                          : e._e(),
                      ]),
                    ],
                    1
                  ),
                  n(
                    "v-expansion-panel-content",
                    e._l(e.getItemsInCategory(t.id), function (e) {
                      return n("menu-item-card", {
                        key: e.id,
                        attrs: { mode: 0, item: e },
                      });
                    }),
                    1
                  ),
                ],
                1
              );
            }),
            1
          );
        },
        r = [],
        i = n("2f62"),
        s = n("47cf"),
        o = n("afbd");
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var p = {
          components: { MenuItemCard: s["a"] },
          props: ["menuCategories", "mode"],
          data: function () {
            return { currentCategory: -1 };
          },
          computed: l(
            {},
            Object(i["c"])("items", ["getItemsInCategory"]),
            {},
            Object(i["c"])("categories", ["categoryHasSubCategoriesVisible"])
          ),
          created: function () {},
          methods: {
            clickedPanel: function (e) {
              var t = this;
              null != e &&
                e.id !== this.currentCategory &&
                (console.log(
                  "clickedCategory " +
                    (null != e.name_orig ? e.name_orig : e.name)
                ),
                Object(o["a"])(
                  this.$ga,
                  "clickedCategory",
                  null != e.name_orig ? e.name_orig : e.name
                ),
                (0 !== e.is_drink && 1 !== e.is_drink) ||
                  Object(o["a"])(
                    this.$ga,
                    "clickedCategory" + (e.is_drink ? "Beverage" : "Food"),
                    null != e.name_orig ? e.name_orig : e.name
                  )),
                void 0 !== e.children &&
                e.children.length > 0 &&
                this.categoryHasSubCategoriesVisible(e.id)
                  ? this.$router.push({
                      name: "category",
                      params: {
                        hash: this.$store.state.restaurant.hash,
                        catId: e.id,
                      },
                    })
                  : e.id !== this.currentCategory &&
                    (new Promise(function (e) {
                      return setTimeout(e, 500);
                    }).then(function () {
                      t.$vuetify.goTo("#xpp" + e.id, {
                        duration: 500,
                        offset: 20,
                      });
                    }),
                    (this.currentCategory = e.id));
            },
          },
        },
        d = p,
        h = (n("b299"), n("2877")),
        f = n("6544"),
        v = n.n(f),
        g = n("cd55"),
        m = n("49e2"),
        b = n("c865"),
        _ = n("0393"),
        y = n("0e8f"),
        O = n("132d"),
        C = Object(h["a"])(d, a, r, !1, null, "d84f713a", null);
      t["a"] = C.exports;
      v()(C, {
        VExpansionPanel: g["a"],
        VExpansionPanelContent: m["a"],
        VExpansionPanelHeader: b["a"],
        VExpansionPanels: _["a"],
        VFlex: y["a"],
        VIcon: O["a"],
      });
    },
    da03: function (e, t, n) {
      var a = n("2b3e"),
        r = a["__core-js_shared__"];
      e.exports = r;
    },
    da60: function (e, t, n) {
      "use strict";
      (function (e) {
        var a = n("2f62"),
          r = n("2b0e"),
          i = n("7fca"),
          s = n("7da6"),
          o = (n("88c3"), n("d885")),
          c = n("521e"),
          l = n("d0db"),
          u = n("99a0"),
          p = n("a584"),
          d = n("7765"),
          h = (n("0e07"), n("afbd"));
        function f(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, a);
          }
          return n;
        }
        function v(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? f(Object(n), !0).forEach(function (t) {
                  g(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function g(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        t["a"] = r["default"].extend({
          components: {
            LanguageChooserSelect: i["a"],
            DemoPopup: d["a"],
            CartWidget: s["a"],
            MenuCategoriesAsExpansionPanels: o["a"],
            WrongTranslationPopup: c["a"],
            FiltersBar: l["a"],
            BottomReviewBox: u["a"],
          },
          props: { hash: String },
          data: function () {
            return {
              confirmedHash: null,
              drawer: null,
              offsetTop: 0,
              savedOffsetTop: 0,
              showWrongTranslationPopup: !1,
              menuSpecName: "",
              menuSpecImage: "",
              menuCartaName: "",
              menuCartaImage: "",
              mainGAEventSent: !1,
              requireReg: !1,
            };
          },
          computed: v(
            {},
            Object(a["e"])("restaurant", [
              "name",
              "description",
              "logo",
              "availableLanguages",
              "atleastonefrozen",
              "cover",
              "freetext",
              "reviewslinks",
              "socialsharelinks",
              "menuspec",
              "menucarta",
              "vinicarta",
              "menuspecdisabled",
              "menucartadisabled",
              "vinicartadisabled",
              "restaurantGroups",
            ]),
            {},
            Object(a["c"])("restaurant", ["isLangRTL"]),
            {},
            Object(a["c"])("registration", ["isRegRequired", "isRegDone"]),
            {},
            Object(a["e"])("categories", [
              "menuCategories",
              "menuDrinkCategories",
            ]),
            {},
            Object(a["e"])("app", [
              "navBarReduced",
              "splashShown",
              "currentLanguage",
              "demoVersion",
            ]),
            {},
            Object(a["e"])("specialmenus", ["specialMenus"]),
            {},
            Object(a["c"])("items", ["getAllItems"]),
            {},
            Object(a["e"])("registration", ["formFields"]),
            {
              version: function () {
                if (
                  e &&
                  Object({
                    VUE_APP_I18N_LOCALE: "it",
                    VUE_APP_I18N_FALLBACK_LOCALE: "it",
                    VUE_APP_TITLE: "Dishcovery",
                    VUE_APP_SHORT_TITLE: "Dishcovery",
                    VUE_APP_API_URL: "https://dishcovery.menu/api",
                    VUE_APP_ANALYTICS_ENABLED: "1",
                    VUE_APP_ANALYTICS_UA: "UA-126641753-1",
                    VUE_APP_ANALYTICS_GA4: "G-MKPM1NCE7P",
                    VUE_APP_ANALYTICS_GA4_ABI: "G-KBRTNKSFGF",
                    VUE_APP_ANALYTICS_GA4_COCA_NORD: "G-ZG1Q5FYB12",
                    VUE_APP_ANALYTICS_GA4_COCA_CENTER: "G-HYM8864DCM",
                    VUE_APP_ANALYTICS_GA4_COCA_SUD: "G-3LZ3ZVQCSE",
                    VUE_APP_VERSION: "4.7.5",
                    VUE_APP_ORDERS_ENABLED: "1",
                    VUE_APP_PUSHER_HOST: "127.0.0.1",
                    VUE_APP_PUSHER_PORT: "9001",
                    VUE_APP_PUSHER_APP_ID: "dishcovery-admin-app-id",
                    VUE_APP_PUSHER_APP_KEY: "dishcovery-admin",
                    VUE_APP_PUSHER_APP_SECRET:
                      "NhrHJn2mPZon9wlvqsHOlGhaQx1JVHZ8",
                    VUE_APP_PUSHER_APP_PATH: "",
                    VUE_APP_PUSHER_APP_CLUSTER: "eu",
                    VUE_APP_PUSHER_USE_SSL: "true",
                    VUE_APP_PUSHER_SCHEME: "https",
                    VUE_APP_PUSHER_ENABLED_TRANSPORT: "wss",
                    VUE_APP_USE_PUSHER: "0",
                    VUE_APP_SESSION_DURATION_HOURS: "2",
                    NODE_ENV: "production",
                    BASE_URL: "/app/",
                  })
                )
                  return "4.7.5";
              },
              isRegEnabled: function () {
                return (
                  this.formFields &&
                    this.formFields.length > 0 &&
                    (this.enabledReg = !0),
                  this.enabledReg
                );
              },
            }
          ),
          watch: {
            menuspec: function () {
              this.updateSectionMenuSpec();
            },
            menucarta: function () {
              this.updateSectionMenuCarta();
            },
            specialMenus: function () {
              (void 0 !== this.specialMenus &&
                0 !== this.specialMenus.length &&
                !this.menuspecdisabled) ||
                this.menucartadisabled ||
                (this.formFields && !(this.formFields.length < 1)) ||
                this.navToCategories(),
                void 0 !== this.specialMenus &&
                  this.specialMenus.length > 0 &&
                  this.menucartadisabled &&
                  !this.menuspecdisabled &&
                  this.navToSpecialmenus();
            },
          },
          created: function () {
            var e = this;
            this.$store.commit(
              "app/setPreviewMode",
              this.$route.query.previewMode
            ),
              void 0 != this.$ga &&
                ("1" === this.$route.query.previewMode
                  ? (this.$ga.disable(),
                    this.$store.commit("app/setAnalyticsEnabled", !1),
                    console.log("Disabling Google Analytics"))
                  : (this.$ga.enable(),
                    this.$store.commit("app/setAnalyticsEnabled", !0))),
              (this.confirmedHash = this.hash),
              this.$store
                .dispatch("restaurant/initializeRestaurant", {
                  hash: this.confirmedHash,
                  showSplash: !0,
                })
                .then(
                  function (t) {
                    if (
                      (e.setAppTitle(e.name + " - Powered by Dishcovery"),
                      e.createManifest(e.name, document),
                      (e.$vuetify.rtl = e.isLangRTL(
                        e.currentLanguage.toString().toLowerCase()
                      )),
                      "1" !== e.$route.query.previewMode)
                    ) {
                      var n = [];
                      if (e.restaurantGroups) {
                        var a = !0,
                          r = !1,
                          i = void 0;
                        try {
                          for (
                            var s, o = e.restaurantGroups[Symbol.iterator]();
                            !(a = (s = o.next()).done);
                            a = !0
                          ) {
                            var c = s.value;
                            switch (c) {
                              case "abi":
                                console.log("e7r"),
                                  n.push({ id: "G-KBRTNKSFGF" });
                                break;
                              case "coca-nord":
                                console.log("n"),
                                  n.push({ id: "G-ZG1Q5FYB12" });
                                break;
                              case "coca-center":
                                console.log("c"),
                                  n.push({ id: "G-HYM8864DCM" });
                                break;
                              case "coca-sud":
                                console.log("s"),
                                  n.push({ id: "G-3LZ3ZVQCSE" });
                                break;
                            }
                          }
                        } catch (l) {
                          (r = !0), (i = l);
                        } finally {
                          try {
                            a || null == o.return || o.return();
                          } finally {
                            if (r) throw i;
                          }
                        }
                      }
                      Object(p["c"])({
                        config: { id: "G-MKPM1NCE7P" },
                        includes: n,
                      }),
                        Object(p["a"])().then(function (t) {
                          (window.vm.$ga4enabled = !0),
                            e.mainGAEventSent &&
                              e.$gtag.event("page_view", {
                                event_category: e.name,
                                event_label: "restaurant",
                              });
                        });
                    }
                  },
                  function (e) {
                    console.log("error initializing restaurant");
                  }
                );
          },
          mounted: function () {
            var e = this;
            setTimeout(function () {
              Object(h["a"])(e.$ga, "page", "restaurant"),
                (e.mainGAEventSent = !0);
            }, 1e3),
              (this.menuSpecImage =
                "https://dishcovery.menu/api/../assets/menutypes/menuspec.jpg"),
              (this.menuCartaImage =
                "https://dishcovery.menu/api/../assets/menutypes/menucarta.jpg"),
              this.updateSectionMenuSpec(),
              this.updateSectionMenuCarta();
          },
          methods: v(
            {},
            Object(a["b"])("websocket", ["connect"]),
            {},
            Object(a["b"])("app", ["setNavBarReduced"]),
            {
              updateSectionMenuCarta: function () {
                void 0 !== this.menucarta &&
                  (void 0 !== this.menucarta.name &&
                    this.menucarta.name.length > 0 &&
                    (this.menuCartaName = this.menucarta.name),
                  void 0 !== this.menucarta.image &&
                    this.menucarta.image.length > 0 &&
                    (this.menuCartaImage = this.menucarta.image));
              },
              updateSectionMenuSpec: function () {
                void 0 !== this.menuspec &&
                  (void 0 !== this.menuspec.name &&
                    this.menuspec.name.length > 0 &&
                    (this.menuSpecName = this.menuspec.name),
                  void 0 !== this.menuspec.image &&
                    this.menuspec.image.length > 0 &&
                    (this.menuSpecImage = this.menuspec.image));
              },
              onScroll: function (e) {
                var t = e.target.scrollingElement.scrollTop;
                t < 0 ||
                  Math.abs(t - this.offsetTop) < 30 ||
                  (t < 60
                    ? this.navBarReduced && this.setNavBarReduced(!1)
                    : this.navBarReduced || this.setNavBarReduced(!0),
                  (this.offsetTop = t));
              },
              toggleCart: function () {
                this.$router.push({
                  name: "cart",
                  params: { hash: this.confirmedHash },
                }),
                  Object(h["a"])(this.$ga, "viewOrder");
              },
              showReportTranslationPopup: function () {
                (this.drawer = !1),
                  (this.showWrongTranslationPopup = !0),
                  (document.getElementsByTagName("html")[0].className =
                    "no-scroll");
              },
              closeReportTranslationPopup: function () {
                document
                  .getElementsByTagName("html")[0]
                  .removeAttribute("class", "no-scroll"),
                  (this.showWrongTranslationPopup = !1);
              },
              navToSpecialmenus: function () {
                this.$router.push({
                  name: "special-menus",
                  props: { hash: this.confirmedHash },
                });
              },
              navToCategories: function () {
                this.$router.push({
                  name: "a-la-carte-menu",
                  props: { hash: this.confirmedHash },
                });
              },
              navToReviews: function () {
                this.$router.push({
                  name: "reviews",
                  props: { hash: this.confirmedHash },
                });
              },
              navToSocialshare: function () {
                this.$router.push({
                  name: "socialshare",
                  props: { hash: this.confirmedHash },
                });
              },
              navToAbout: function () {
                this.$router.push({
                  name: "about",
                  props: { hash: this.confirmedHash },
                });
              },
              navToCredits: function () {
                this.$router.push({
                  name: "credits",
                  props: { hash: this.confirmedHash },
                });
              },
              navToRegistration: function () {
                this.$router.push({
                  name: "registration",
                  pros: { hash: this.confirmedHash },
                });
              },
              openFrancescanaPDF: function () {
                window.open(
                  "https://osteriafrancescana.it/wine-list/",
                  "_self"
                );
              },
            }
          ),
        });
      }.call(this, n("f28c")));
    },
    dc57: function (e, t) {
      var n = Function.prototype,
        a = n.toString;
      function r(e) {
        if (null != e) {
          try {
            return a.call(e);
          } catch (t) {}
          try {
            return e + "";
          } catch (t) {}
        }
        return "";
      }
      e.exports = r;
    },
    dd98: function (e, t, n) {
      e.exports = n.p + "img/filters.a612e728.svg";
    },
    dfa9: function (e, t, n) {
      "use strict";
      var a = n("b49a"),
        r = n.n(a);
      r.a;
    },
    e24b: function (e, t, n) {
      var a = n("49f4"),
        r = n("1efc"),
        i = n("bbc0"),
        s = n("7a48"),
        o = n("2524");
      function c(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        this.clear();
        while (++t < n) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      (c.prototype.clear = a),
        (c.prototype["delete"] = r),
        (c.prototype.get = i),
        (c.prototype.has = s),
        (c.prototype.set = o),
        (e.exports = c);
    },
    e3ff: function (e, t, n) {
      "use strict";
      var a = n("f7a8"),
        r = n.n(a);
      r.a;
    },
    e538: function (e, t, n) {
      (function (e) {
        var a = n("2b3e"),
          r = t && !t.nodeType && t,
          i = r && "object" == typeof e && e && !e.nodeType && e,
          s = i && i.exports === r,
          o = s ? a.Buffer : void 0,
          c = o ? o.allocUnsafe : void 0;
        function l(e, t) {
          if (t) return e.slice();
          var n = e.length,
            a = c ? c(n) : new e.constructor(n);
          return e.copy(a), a;
        }
        e.exports = l;
      }.call(this, n("62e4")(e)));
    },
    eac5: function (e, t) {
      var n = Object.prototype;
      function a(e) {
        var t = e && e.constructor,
          a = ("function" == typeof t && t.prototype) || n;
        return e === a;
      }
      e.exports = a;
    },
    ec69: function (e, t, n) {
      var a = n("6fcd"),
        r = n("03dd"),
        i = n("30c9");
      function s(e) {
        return i(e) ? a(e) : r(e);
      }
      e.exports = s;
    },
    ec8c: function (e, t) {
      function n(e) {
        var t = [];
        if (null != e) for (var n in Object(e)) t.push(n);
        return t;
      }
      e.exports = n;
    },
    ed53: function (e, t, n) {
      "use strict";
      (function (e) {
        var a = n("2f62"),
          r = n("7fca"),
          i = n("7da6"),
          s = (n("88c3"), n("d885")),
          o = n("521e"),
          c = n("d0db"),
          l = n("99a0"),
          u = (n("58e9"), n("0e07"), n("afbd")),
          p = n("1659"),
          d = n("7765");
        function h(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, a);
          }
          return n;
        }
        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? h(Object(n), !0).forEach(function (t) {
                  v(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function v(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        t["a"] = {
          components: {
            MenuInfo: p["a"],
            DemoPopup: d["a"],
            LanguageChooserSelect: r["a"],
            CartWidget: i["a"],
            MenuCategoriesAsExpansionPanels: s["a"],
            WrongTranslationPopup: o["a"],
            FiltersBar: c["a"],
            BottomReviewBox: l["a"],
          },
          props: { hash: String },
          computed: f(
            {},
            Object(a["e"])("app", {
              appCurrentLanguage: function (e) {
                return e.currentLanguage;
              },
            }),
            {},
            Object(a["e"])("restaurant", [
              "name",
              "description",
              "currentLanguage",
              "logo",
              "availableLanguages",
              "atleastonefrozen",
              "cover",
              "freetext",
              "reviewslinks",
              "socialsharelinks",
              "menuorderpref",
              "menucarta",
              "menuspecdisabled",
              "menucartadisabled",
              "vinicartadisabled",
            ]),
            {},
            Object(a["c"])("restaurant", ["isLangRTL"]),
            {},
            Object(a["e"])("categories", [
              "menuCategories",
              "menuDrinkCategories",
            ]),
            {},
            Object(a["e"])("app", [
              "navBarReduced",
              "splashShown",
              "demoVersion",
            ]),
            {},
            Object(a["e"])("specialmenus", ["specialMenus"]),
            {},
            Object(a["c"])("items", ["getAllItems"]),
            {
              version: function () {
                if (
                  e &&
                  Object({
                    VUE_APP_I18N_LOCALE: "it",
                    VUE_APP_I18N_FALLBACK_LOCALE: "it",
                    VUE_APP_TITLE: "Dishcovery",
                    VUE_APP_SHORT_TITLE: "Dishcovery",
                    VUE_APP_API_URL: "https://dishcovery.menu/api",
                    VUE_APP_ANALYTICS_ENABLED: "1",
                    VUE_APP_ANALYTICS_UA: "UA-126641753-1",
                    VUE_APP_ANALYTICS_GA4: "G-MKPM1NCE7P",
                    VUE_APP_ANALYTICS_GA4_ABI: "G-KBRTNKSFGF",
                    VUE_APP_ANALYTICS_GA4_COCA_NORD: "G-ZG1Q5FYB12",
                    VUE_APP_ANALYTICS_GA4_COCA_CENTER: "G-HYM8864DCM",
                    VUE_APP_ANALYTICS_GA4_COCA_SUD: "G-3LZ3ZVQCSE",
                    VUE_APP_VERSION: "4.7.5",
                    VUE_APP_ORDERS_ENABLED: "1",
                    VUE_APP_PUSHER_HOST: "127.0.0.1",
                    VUE_APP_PUSHER_PORT: "9001",
                    VUE_APP_PUSHER_APP_ID: "dishcovery-admin-app-id",
                    VUE_APP_PUSHER_APP_KEY: "dishcovery-admin",
                    VUE_APP_PUSHER_APP_SECRET:
                      "NhrHJn2mPZon9wlvqsHOlGhaQx1JVHZ8",
                    VUE_APP_PUSHER_APP_PATH: "",
                    VUE_APP_PUSHER_APP_CLUSTER: "eu",
                    VUE_APP_PUSHER_USE_SSL: "true",
                    VUE_APP_PUSHER_SCHEME: "https",
                    VUE_APP_PUSHER_ENABLED_TRANSPORT: "wss",
                    VUE_APP_USE_PUSHER: "0",
                    VUE_APP_SESSION_DURATION_HOURS: "2",
                    NODE_ENV: "production",
                    BASE_URL: "/app/",
                  })
                )
                  return "4.7.5";
              },
              menuCartaName: function () {
                return void 0 !== this.menucarta ? this.menucarta.name : "";
              },
              justALaCarteMenu: function () {
                return (
                  void 0 == this.specialMenus ||
                  (void 0 != this.specialMenus &&
                    0 == this.specialMenus.length) ||
                  this.menuspecdisabled
                );
              },
            }
          ),
          data: function () {
            return {
              drawer: null,
              offsetTop: 0,
              savedOffsetTop: 0,
              showWrongTranslationPopup: !1,
              menuOrder: null,
            };
          },
          methods: f({}, Object(a["b"])("app", ["setNavBarReduced"]), {
            onScroll: function (e) {
              var t = e.target.scrollingElement.scrollTop;
              t < 0 ||
                Math.abs(t - this.offsetTop) < 30 ||
                (t < 60
                  ? this.navBarReduced && this.setNavBarReduced(!1)
                  : this.navBarReduced || this.setNavBarReduced(!0),
                (this.offsetTop = t));
            },
            toggleCart: function () {
              this.$router.push({ name: "cart", params: { hash: this.hash } }),
                Object(u["a"])(this.$ga, "viewOrder");
            },
            showReportTranslationPopup: function () {
              (this.drawer = !1),
                (this.showWrongTranslationPopup = !0),
                (document.getElementsByTagName("html")[0].className =
                  "no-scroll");
            },
            closeReportTranslationPopup: function () {
              document
                .getElementsByTagName("html")[0]
                .removeAttribute("class", "no-scroll"),
                (this.showWrongTranslationPopup = !1);
            },
            navToMenus: function () {
              this.$router.push({
                name: "restaurant",
                params: { hash: this.hash },
              });
            },
            navToReviews: function () {
              this.$router.push({
                name: "reviews",
                props: { hash: this.hash },
              });
            },
            navToSocialshare: function () {
              this.$router.push({
                name: "socialshare",
                props: { hash: this.hash },
              });
            },
            navToAbout: function () {
              this.$router.push({ name: "about", props: { hash: this.hash } });
            },
            navToCredits: function () {
              this.$router.push({
                name: "credits",
                props: { hash: this.hash },
              });
            },
            setMenuOrderPref: function () {
              this.menuOrder = this.menuorderpref;
            },
          }),
          mounted: function () {
            this.splashShown ||
              this.$router.push({
                name: "restaurant",
                params: { hash: this.hash },
              }),
              Object(u["a"])(this.$ga, "page", "a-la-carte-menu"),
              this.setMenuOrderPref();
          },
          updated: function () {
            this.setMenuOrderPref();
          },
        };
      }.call(this, n("f28c")));
    },
    efb6: function (e, t, n) {
      var a = n("5e2e");
      function r() {
        (this.__data__ = new a()), (this.size = 0);
      }
      e.exports = r;
    },
    f0df: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "v-slide-x-reverse-transition",
            { attrs: { "leave-absolute": "" } },
            [
              a(
                "v-container",
                {
                  directives: [
                    {
                      name: "touch",
                      rawName: "v-touch",
                      value: {
                        right: function () {
                          return e.closeItem();
                        },
                      },
                      expression: "{ right: () => closeItem() }",
                    },
                  ],
                  staticClass: "page-container item-container",
                  attrs: {
                    fluid: "",
                    "fill-height": "",
                    "align-start": "",
                    "pa-0": "",
                  },
                },
                [
                  e.demoVersion ? a("demo-popup") : e._e(),
                  a(
                    "v-app-bar",
                    {
                      staticClass: "page-app-bar item-app-bar",
                      class: { "navbar--hidden": e.navBarReduced },
                      attrs: {
                        app: "",
                        height: "82px",
                        color: "white",
                        elevation: "1",
                        top: "",
                      },
                    },
                    [
                      a("img", {
                        ref: "icon",
                        staticClass: "back-icon",
                        attrs: {
                          src: n("8155"),
                          alt: "Item Icon",
                          width: "24",
                          height: "24",
                        },
                        on: { click: e.closeItem },
                      }),
                      a(
                        "v-flex",
                        { attrs: { "text-center": "" } },
                        [
                          a(
                            "v-fade-transition",
                            [
                              e.currentItem
                                ? a(
                                    "v-toolbar-title",
                                    {
                                      staticStyle: {
                                        "max-width": "50%",
                                        margin: "0 auto",
                                      },
                                      attrs: {
                                        "text-center": "",
                                        "text-truncate": "",
                                      },
                                    },
                                    [e._v(e._s(e.currentItem.name))]
                                  )
                                : e._e(),
                            ],
                            1
                          ),
                          a("language-chooser-select"),
                          a("cart-widget", {
                            nativeOn: {
                              click: function (t) {
                                return e.toggleCart(t);
                              },
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a(
                    "v-content",
                    { staticClass: "page-content item-content" },
                    [
                      a(
                        "v-fade-transition",
                        [
                          e.currentItem
                            ? a(
                                "v-container",
                                {
                                  staticClass: "inner-container",
                                  class: {
                                    "item-specialmenu": !e.isStepperVisible(),
                                    "francescana-item":
                                      "816933a93a4e4c53786c7e1ca4eefc6b" ===
                                      e.hash,
                                    "francescana-item":
                                      "26467bd3c32c3ca47ca99608e8f3c3f5" ===
                                      e.hash,
                                  },
                                  attrs: {
                                    fluid: "",
                                    "fill-height": "",
                                    "pa-0": "",
                                  },
                                },
                                [
                                  a(
                                    "v-flex",
                                    {
                                      attrs: {
                                        "justify-start": "",
                                        "align-start": "",
                                        "flex-direction": "column",
                                      },
                                    },
                                    [
                                      e.currentItem.image
                                        ? a("v-img", {
                                            staticClass: "white--text",
                                            attrs: {
                                              src: e.currentItem.image,
                                              "aspect-ratio": 375 / 246,
                                            },
                                            scopedSlots: e._u(
                                              [
                                                {
                                                  key: "placeholder",
                                                  fn: function () {
                                                    return [
                                                      a(
                                                        "v-row",
                                                        {
                                                          staticClass:
                                                            "fill-height ma-0",
                                                          attrs: {
                                                            align: "center",
                                                            justify: "center",
                                                          },
                                                        },
                                                        [
                                                          a(
                                                            "v-progress-circular",
                                                            {
                                                              attrs: {
                                                                indeterminate:
                                                                  "",
                                                                color: "yellow",
                                                              },
                                                            }
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ];
                                                  },
                                                  proxy: !0,
                                                },
                                              ],
                                              null,
                                              !1,
                                              2631675555
                                            ),
                                          })
                                        : e._e(),
                                      a(
                                        "v-row",
                                        {
                                          staticClass:
                                            "pa-5 no-gutters text-start",
                                          class: {
                                            "pb-2":
                                              1 !== e.currentItem.frozen ||
                                              e.currentItem.name_orig,
                                            "pb-0":
                                              1 === e.currentItem.frozen &&
                                              !e.currentItem.name_orig,
                                          },
                                        },
                                        [
                                          a("v-col", [
                                            a(
                                              "span",
                                              {
                                                staticClass: "title text-start",
                                                class: {
                                                  "title-specialmenu":
                                                    !e.isStepperVisible(),
                                                },
                                              },
                                              [e._v(e._s(e.currentItem.name))]
                                            ),
                                            e.currentItem.name_orig
                                              ? a(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "sub-title text-start",
                                                  },
                                                  [
                                                    e._v(
                                                      e._s(
                                                        e.currentItem.name_orig
                                                      )
                                                    ),
                                                  ]
                                                )
                                              : e._e(),
                                          ]),
                                        ],
                                        1
                                      ),
                                      1 === e.currentItem.frozen
                                        ? a(
                                            "v-row",
                                            {
                                              staticClass:
                                                "pa-5 pb-2 pt-0 no-gutters text-start justify-start",
                                              attrs: { "no-gutters": "" },
                                            },
                                            [
                                              a(
                                                "span",
                                                {
                                                  staticClass:
                                                    "info-frozen text-start",
                                                },
                                                [
                                                  e._v(
                                                    "* " +
                                                      e._s(
                                                        e.$t(
                                                          "Questo piatto potrebbe contenere cibi congelati o surgelati"
                                                        )
                                                      )
                                                  ),
                                                ]
                                              ),
                                            ]
                                          )
                                        : e._e(),
                                      e.currentItem.tags &&
                                      e.currentItem.tags.length > 0
                                        ? a(
                                            "v-flex",
                                            {
                                              staticClass:
                                                "pa-5 pt-1 no-gutters text-start",
                                            },
                                            [
                                              a(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "tags ng-scope pl-0",
                                                },
                                                e._l(
                                                  e.currentItem.tags,
                                                  function (t) {
                                                    return void 0 !=
                                                      t.finalIcon &&
                                                      t.finalIcon.length > 0
                                                      ? a(
                                                          "li",
                                                          {
                                                            key: t.id,
                                                            staticClass:
                                                              "d-inline-flex align-center",
                                                            style: {
                                                              borderColor:
                                                                t.icon_color,
                                                            },
                                                          },
                                                          [
                                                            a("span", {
                                                              staticClass:
                                                                "tag-icon",
                                                              style: {
                                                                color:
                                                                  t.icon_color,
                                                              },
                                                              domProps: {
                                                                innerHTML: e._s(
                                                                  t.finalIcon
                                                                ),
                                                              },
                                                            }),
                                                            a("span", {
                                                              staticClass:
                                                                "tag-name",
                                                              style: {
                                                                color:
                                                                  t.icon_color,
                                                              },
                                                              domProps: {
                                                                innerHTML: e._s(
                                                                  t.name
                                                                ),
                                                              },
                                                            }),
                                                          ]
                                                        )
                                                      : e._e();
                                                  }
                                                ),
                                                0
                                              ),
                                            ]
                                          )
                                        : e._e(),
                                      e.currentItem.allergentags &&
                                      e.currentItem.allergentags.length > 0
                                        ? a(
                                            "v-flex",
                                            {
                                              staticClass:
                                                "px-5 pb-1 no-gutters text-start",
                                            },
                                            [
                                              a(
                                                "span",
                                                {
                                                  staticClass:
                                                    "allergens-title text-start",
                                                },
                                                [e._v(e._s(e.$t("Allergeni")))]
                                              ),
                                            ]
                                          )
                                        : e._e(),
                                      e.currentItem.allergentags &&
                                      e.currentItem.allergentags.length > 0
                                        ? a(
                                            "v-flex",
                                            {
                                              staticClass:
                                                "pa-5 pt-0 no-gutters text-start",
                                            },
                                            [
                                              a(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "tags ng-scope pl-0",
                                                },
                                                e._l(
                                                  e.currentItem.allergentags,
                                                  function (t) {
                                                    return a(
                                                      "li",
                                                      {
                                                        directives: [
                                                          {
                                                            name: "show",
                                                            rawName: "v-show",
                                                            value:
                                                              void 0 !=
                                                                t.finalIcon &&
                                                              t.finalIcon
                                                                .length > 0,
                                                            expression:
                                                              "tag.finalIcon != undefined && tag.finalIcon.length > 0",
                                                          },
                                                        ],
                                                        key: t.id,
                                                        staticClass:
                                                          "d-inline-flex align-center",
                                                        style: {
                                                          borderColor:
                                                            t.icon_color,
                                                        },
                                                      },
                                                      [
                                                        a("span", {
                                                          staticClass:
                                                            "tag-icon",
                                                          style: {
                                                            color: t.icon_color,
                                                          },
                                                          domProps: {
                                                            innerHTML: e._s(
                                                              t.finalIcon
                                                            ),
                                                          },
                                                        }),
                                                        a("span", {
                                                          staticClass:
                                                            "tag-name",
                                                          style: {
                                                            color: t.icon_color,
                                                          },
                                                          domProps: {
                                                            innerHTML: e._s(
                                                              t.name
                                                            ),
                                                          },
                                                        }),
                                                      ]
                                                    );
                                                  }
                                                ),
                                                0
                                              ),
                                            ]
                                          )
                                        : e._e(),
                                      a(
                                        "v-flex",
                                        {
                                          staticClass:
                                            "pa-5 pt-0 no-gutters text-start",
                                        },
                                        [
                                          e.currentItem.description &&
                                          e.currentItem.description.length > 0
                                            ? a("span", {
                                                staticClass:
                                                  "item-description text-start",
                                                class: {
                                                  "item-description-specialmenu":
                                                    !e.isStepperVisible(),
                                                },
                                                domProps: {
                                                  innerHTML: e._s(
                                                    e.currentItem.description
                                                  ),
                                                },
                                              })
                                            : e._e(),
                                        ]
                                      ),
                                      e.isStepperVisible()
                                        ? a(
                                            "v-flex",
                                            {
                                              staticClass:
                                                "pa-5 pt-0 no-gutters",
                                            },
                                            [
                                              a(
                                                "price-and-count-stepper-card",
                                                {
                                                  attrs: {
                                                    item: e.currentItem,
                                                  },
                                                }
                                              ),
                                            ],
                                            1
                                          )
                                        : e._e(),
                                      a("ingredients-list", {
                                        attrs: {
                                          ingredients:
                                            e.currentItem.ingredients,
                                        },
                                      }),
                                      a("related-drinks", {
                                        attrs: {
                                          drinks: e.currentItem.relateddrinks,
                                        },
                                      }),
                                      a("div", {
                                        staticClass:
                                          "d-block pa-0 ma-0 pb-12 mb-12",
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        r = [],
        i = n("2f62"),
        s = n("7fca"),
        o = (n("47cf"), n("7da6")),
        c = n("0e25"),
        l = n("7a86"),
        u = (n("58e9"), n("afbd")),
        p = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return e.hasPrice(e.item) || 1 === e.item.buyable
            ? n(
                "v-sheet",
                {
                  staticClass: "item-card-button pa-5",
                  attrs: { elevation: "5" },
                },
                [
                  e.hasPrice(e.item)
                    ? n(
                        "v-row",
                        {
                          class: { "pb-5": 1 === e.item.buyable },
                          attrs: { "no-gutters": "" },
                        },
                        [
                          n("v-col", [
                            n("span", { staticClass: "price text-center" }, [
                              e._v(
                                e._s(e._f("pricer")(e.item.price)) +
                                  e._s(e.getPriceMode(e.item))
                              ),
                            ]),
                          ]),
                        ],
                        1
                      )
                    : e._e(),
                  e._e(),
                  1 !== e.item.buyable ||
                  (void 0 !== e.getItemOptions.specialmenuid &&
                    0 !== e.getItemOptions.specialmenuid)
                    ? e._e()
                    : n(
                        "v-row",
                        {
                          staticClass: "d-flex justify-center",
                          attrs: { "no-gutters": "" },
                        },
                        [
                          n(
                            "v-col",
                            {
                              staticClass:
                                "d-flex col-8 align-center justify-space-between",
                              staticStyle: { "max-width": "171px" },
                            },
                            [
                              n(
                                "v-btn",
                                {
                                  attrs: {
                                    elevation: "0",
                                    fab: "",
                                    dark: "",
                                    small: "",
                                    color: "black",
                                  },
                                  on: {
                                    click: function (t) {
                                      return e.removeFromCart(e.item);
                                    },
                                  },
                                },
                                [
                                  n("v-icon", { attrs: { dark: "" } }, [
                                    e._v("mdi-minus"),
                                  ]),
                                ],
                                1
                              ),
                              n("span", { staticClass: "quantity-value" }, [
                                e._v(
                                  e._s(
                                    e.itemQuantitySkippingVariantsComboInCart(
                                      e.item
                                    )
                                  )
                                ),
                              ]),
                              n(
                                "v-btn",
                                {
                                  attrs: {
                                    elevation: "0",
                                    fab: "",
                                    dark: "",
                                    small: "",
                                    color: "black",
                                  },
                                  on: {
                                    click: function (t) {
                                      return e.addToCart(e.item);
                                    },
                                  },
                                },
                                [
                                  n("v-icon", { attrs: { dark: "" } }, [
                                    e._v("mdi-plus"),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                ],
                1
              )
            : e._e();
        },
        d = [];
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                v(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function v(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var g = {
          props: ["item"],
          computed: f(
            {},
            Object(i["e"])("itemsoptions", ["currentOptions"]),
            {},
            Object(i["c"])("cart", [
              "isItemSkippingVariantsComboInCart",
              "getItemFromCart",
              "itemQuantityInCart",
              "itemQuantitySkippingVariantsComboInCart",
              "itemDataInCart",
            ]),
            {},
            Object(i["c"])("itemsoptions", [
              "checkIfItemOptionsExist",
              "getItemOptionsSingle",
              "styledPriceModifier",
            ]),
            {},
            Object(i["c"])("items", ["hasPrice"]),
            {},
            Object(i["c"])("restaurant", ["getPriceMode"]),
            {
              getItemOptions: function () {
                return this.checkIfItemOptionsExist(
                  this.item.id,
                  this.specialmenu,
                  this.specialmenucategory
                )
                  ? this.getItemOptionsSingle(
                      this.item.id,
                      this.specialmenu,
                      this.specialmenucategory
                    )
                  : this.item;
              },
            }
          ),
          methods: f(
            {},
            Object(i["b"])("cart", [
              "addProductToCart",
              "removeProductFromCart",
              "removeProductSkippingVariantsComboFromCart",
            ]),
            {},
            Object(i["b"])("itemsoptions", ["openOptionsPopup"]),
            {
              addToCart: function (e) {
                e &&
                  (void 0 === e.menuvariants || 0 === e.menuvariants.length
                    ? (this.addProductToCart({ id: e.id }),
                      Object(u["a"])(
                        this.$ga,
                        "orderAdd",
                        void 0 !== e.name_orig ? e.name_orig : e.name
                      ),
                      Object(u["a"])(
                        this.$ga,
                        "orderAdd" + (e.is_drink ? "Beverage" : "Food"),
                        void 0 !== e.name_orig ? e.name_orig : e.name
                      ))
                    : this.openOptionsPopup({
                        itemdata: {
                          item: this.item,
                          specialmenuid: this.specialmenu,
                          specialmenucategoryid: this.specialmenucategory,
                        },
                        mode: "add",
                      }));
              },
              removeFromCart: function (e) {
                e &&
                  (Object(u["a"])(
                    this.$ga,
                    "orderRemove",
                    void 0 !== e.name_orig ? e.name_orig : e.name
                  ),
                  Object(u["a"])(
                    this.$ga,
                    "orderRemove" + (e.is_drink ? "Beverage" : "Food"),
                    void 0 !== e.name_orig ? e.name_orig : e.name
                  ),
                  void 0 === e.menuvariants || 0 === e.menuvariants.length
                    ? this.removeProductFromCart(e)
                    : this.removeProductSkippingVariantsComboFromCart(e));
              },
            }
          ),
        },
        m = g,
        b = (n("1813"), n("2877")),
        _ = n("6544"),
        y = n.n(_),
        O = n("8336"),
        C = n("62ad"),
        w = n("ce7e"),
        j = n("132d"),
        P = n("0fd9"),
        x = n("8dd9"),
        S = Object(b["a"])(m, p, d, !1, null, "27224a62", null),
        T = S.exports;
      y()(S, {
        VBtn: O["a"],
        VCol: C["a"],
        VDivider: w["a"],
        VIcon: j["a"],
        VRow: P["a"],
        VSheet: x["a"],
      });
      var A = n("7765");
      function k(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                M(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function M(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var V = {
          components: {
            PriceAndCountStepperCard: T,
            DemoPopup: A["a"],
            RelatedDrinks: l["a"],
            IngredientsList: c["a"],
            LanguageChooserSelect: s["a"],
            CartWidget: o["a"],
          },
          props: { hash: String, itemId: Number },
          data: function () {
            return { prevRoute: null };
          },
          beforeRouteEnter: function (e, t, n) {
            n(function (e) {
              e.prevRoute = t;
            });
          },
          computed: E(
            {},
            Object(i["e"])("app", {
              appCurrentLanguage: function (e) {
                return e.currentLanguage;
              },
            }),
            {},
            Object(i["e"])("filters", [
              "currentSearchKey",
              "currentTags",
              "currentAllergenTags",
            ]),
            {},
            Object(i["e"])("restaurant", ["availableLanguages", "logo"]),
            {},
            Object(i["e"])("items", ["currentItem"]),
            {},
            Object(i["e"])("cart", ["itemsCount", "currentCartItem"]),
            {},
            Object(i["e"])("app", [
              "navBarReduced",
              "splashShown",
              "demoVersion",
            ]),
            {},
            Object(i["c"])("itemsoptions", ["getItemOptionsSingle"])
          ),
          methods: E(
            {},
            Object(i["b"])("cart", [
              "addProductToCart",
              "removeProductFromCart",
            ]),
            {},
            Object(i["b"])("items", ["setCurrentItem"]),
            {},
            Object(i["b"])("itemsoptions", ["openOptionsPopup", "removeItem"]),
            {
              closeItem: function () {
                (void 0 != this.currentSearchKey &&
                  this.currentSearchKey.length > 0) ||
                (void 0 != this.currentAllergenTags &&
                  this.currentAllergenTags.length > 0) ||
                (void 0 != this.currentTags && this.currentTags.length > 0)
                  ? this.$router.replace({
                      name: "search",
                      params: { hash: this.hash },
                    })
                  : this.$router.back(),
                  this.currentItem.is_drink
                    ? Object(u["a"])(
                        this.$ga,
                        "exitDrink",
                        void 0 !== this.currentItem.name_orig
                          ? this.currentItem.name_orig
                          : this.currentItem.name
                      )
                    : Object(u["a"])(
                        this.$ga,
                        "exitPlate",
                        void 0 !== this.currentItem.name_orig
                          ? this.currentItem.name_orig
                          : this.currentItem.name
                      );
              },
              isStepperVisible: function () {
                if (void 0 !== this.prevRoute) {
                  if ("special-menu" === this.prevRoute.name) return !1;
                  if (
                    "cart" === this.prevRoute.name &&
                    void 0 !== this.currentCartItem &&
                    void 0 !== this.currentCartItem.specialmenuid &&
                    this.currentCartItem.specialmenuid > 0
                  )
                    return !1;
                }
                return !0;
              },
              toggleCart: function () {
                this.$router.push({
                  name: "cart",
                  params: { hash: this.hash },
                }),
                  Object(u["a"])(this.$ga, "viewOrder");
              },
            }
          ),
          mounted: function () {
            this.splashShown ||
              this.$router.push({
                name: "restaurant",
                params: { hash: this.hash },
              }),
              Object(u["a"])(this.$ga, "page", "plate");
          },
          activated: function () {
            this.setCurrentItem(this.itemId);
          },
        },
        $ = V,
        R = (n("0963"), n("40dc")),
        I = n("a523"),
        D = n("a75b"),
        L = n("0789"),
        B = n("0e8f"),
        N = n("adda"),
        U = n("490a"),
        F = n("2a7f"),
        H = Object(b["a"])($, a, r, !1, null, "77157aa3", null);
      t["default"] = H.exports;
      y()(H, {
        VAppBar: R["a"],
        VCol: C["a"],
        VContainer: I["a"],
        VContent: D["a"],
        VFadeTransition: L["c"],
        VFlex: B["a"],
        VImg: N["a"],
        VProgressCircular: U["a"],
        VRow: P["a"],
        VSlideXReverseTransition: L["d"],
        VToolbarTitle: F["a"],
      });
    },
    f23c: function (e, t, n) {
      "use strict";
      var a = n("6de2"),
        r = n.n(a);
      r.a;
    },
    f51f: function (e, t, n) {
      "use strict";
      var a = n("1331"),
        r = n.n(a);
      r.a;
    },
    f774: function (e, t, n) {
      "use strict";
      n("7958");
      var a = n("adda"),
        r = n("3a66"),
        i = n("a9ad"),
        s = n("b848"),
        o = n("e707"),
        c = n("d10f"),
        l = n("7560"),
        u = n("a293"),
        p = n("dc22"),
        d = n("80d2"),
        h = function (e) {
          var t = e.touchstartX,
            n = e.touchendX,
            a = e.touchstartY,
            r = e.touchendY,
            i = 0.5,
            s = 16;
          (e.offsetX = n - t),
            (e.offsetY = r - a),
            Math.abs(e.offsetY) < i * Math.abs(e.offsetX) &&
              (e.left && n < t - s && e.left(e),
              e.right && n > t + s && e.right(e)),
            Math.abs(e.offsetX) < i * Math.abs(e.offsetY) &&
              (e.up && r < a - s && e.up(e), e.down && r > a + s && e.down(e));
        };
      function f(e, t) {
        var n = e.changedTouches[0];
        (t.touchstartX = n.clientX),
          (t.touchstartY = n.clientY),
          t.start && t.start(Object.assign(e, t));
      }
      function v(e, t) {
        var n = e.changedTouches[0];
        (t.touchendX = n.clientX),
          (t.touchendY = n.clientY),
          t.end && t.end(Object.assign(e, t)),
          h(t);
      }
      function g(e, t) {
        var n = e.changedTouches[0];
        (t.touchmoveX = n.clientX),
          (t.touchmoveY = n.clientY),
          t.move && t.move(Object.assign(e, t));
      }
      function m(e) {
        var t = {
          touchstartX: 0,
          touchstartY: 0,
          touchendX: 0,
          touchendY: 0,
          touchmoveX: 0,
          touchmoveY: 0,
          offsetX: 0,
          offsetY: 0,
          left: e.left,
          right: e.right,
          up: e.up,
          down: e.down,
          start: e.start,
          move: e.move,
          end: e.end,
        };
        return {
          touchstart: function (e) {
            return f(e, t);
          },
          touchend: function (e) {
            return v(e, t);
          },
          touchmove: function (e) {
            return g(e, t);
          },
        };
      }
      function b(e, t, n) {
        var a = t.value,
          r = a.parent ? e.parentElement : e,
          i = a.options || { passive: !0 };
        if (r) {
          var s = m(t.value);
          (r._touchHandlers = Object(r._touchHandlers)),
            (r._touchHandlers[n.context._uid] = s),
            Object(d["r"])(s).forEach(function (e) {
              r.addEventListener(e, s[e], i);
            });
        }
      }
      function _(e, t, n) {
        var a = t.value.parent ? e.parentElement : e;
        if (a && a._touchHandlers) {
          var r = a._touchHandlers[n.context._uid];
          Object(d["r"])(r).forEach(function (e) {
            a.removeEventListener(e, r[e]);
          }),
            delete a._touchHandlers[n.context._uid];
        }
      }
      var y = { inserted: b, unbind: _ },
        O = y,
        C = n("58df");
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                P(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function P(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var x = Object(C["a"])(
        Object(r["a"])("left", [
          "isActive",
          "isMobile",
          "miniVariant",
          "expandOnHover",
          "permanent",
          "right",
          "temporary",
          "width",
        ]),
        i["a"],
        s["a"],
        o["a"],
        c["a"],
        l["a"]
      );
      t["a"] = x.extend({
        name: "v-navigation-drawer",
        provide: function () {
          return { isInNav: "nav" === this.tag };
        },
        directives: { ClickOutside: u["a"], Resize: p["a"], Touch: O },
        props: {
          bottom: Boolean,
          clipped: Boolean,
          disableResizeWatcher: Boolean,
          disableRouteWatcher: Boolean,
          expandOnHover: Boolean,
          floating: Boolean,
          height: {
            type: [Number, String],
            default: function () {
              return this.app ? "100vh" : "100%";
            },
          },
          miniVariant: Boolean,
          miniVariantWidth: { type: [Number, String], default: 56 },
          mobileBreakPoint: { type: [Number, String], default: 1264 },
          permanent: Boolean,
          right: Boolean,
          src: { type: [String, Object], default: "" },
          stateless: Boolean,
          tag: {
            type: String,
            default: function () {
              return this.app ? "nav" : "aside";
            },
          },
          temporary: Boolean,
          touchless: Boolean,
          width: { type: [Number, String], default: 256 },
          value: null,
        },
        data: function () {
          return {
            isMouseover: !1,
            touchArea: { left: 0, right: 0 },
            stackMinZIndex: 6,
          };
        },
        computed: {
          applicationProperty: function () {
            return this.right ? "right" : "left";
          },
          classes: function () {
            return j(
              {
                "v-navigation-drawer": !0,
                "v-navigation-drawer--absolute": this.absolute,
                "v-navigation-drawer--bottom": this.bottom,
                "v-navigation-drawer--clipped": this.clipped,
                "v-navigation-drawer--close": !this.isActive,
                "v-navigation-drawer--fixed":
                  !this.absolute && (this.app || this.fixed),
                "v-navigation-drawer--floating": this.floating,
                "v-navigation-drawer--is-mobile": this.isMobile,
                "v-navigation-drawer--is-mouseover": this.isMouseover,
                "v-navigation-drawer--mini-variant": this.isMiniVariant,
                "v-navigation-drawer--custom-mini-variant":
                  56 !== Number(this.miniVariantWidth),
                "v-navigation-drawer--open": this.isActive,
                "v-navigation-drawer--open-on-hover": this.expandOnHover,
                "v-navigation-drawer--right": this.right,
                "v-navigation-drawer--temporary": this.temporary,
              },
              this.themeClasses
            );
          },
          computedMaxHeight: function () {
            if (!this.hasApp) return null;
            var e =
              this.$vuetify.application.bottom +
              this.$vuetify.application.footer +
              this.$vuetify.application.bar;
            return this.clipped ? e + this.$vuetify.application.top : e;
          },
          computedTop: function () {
            if (!this.hasApp) return 0;
            var e = this.$vuetify.application.bar;
            return (e += this.clipped ? this.$vuetify.application.top : 0), e;
          },
          computedTransform: function () {
            return this.isActive
              ? 0
              : this.isBottom
              ? 100
              : this.right
              ? 100
              : -100;
          },
          computedWidth: function () {
            return this.isMiniVariant ? this.miniVariantWidth : this.width;
          },
          hasApp: function () {
            return this.app && !this.isMobile && !this.temporary;
          },
          isBottom: function () {
            return this.bottom && this.isMobile;
          },
          isMiniVariant: function () {
            return (
              (!this.expandOnHover && this.miniVariant) ||
              (this.expandOnHover && !this.isMouseover)
            );
          },
          isMobile: function () {
            return (
              !this.stateless &&
              !this.permanent &&
              this.$vuetify.breakpoint.width <
                parseInt(this.mobileBreakPoint, 10)
            );
          },
          reactsToClick: function () {
            return (
              !this.stateless &&
              !this.permanent &&
              (this.isMobile || this.temporary)
            );
          },
          reactsToMobile: function () {
            return (
              this.app &&
              !this.disableResizeWatcher &&
              !this.permanent &&
              !this.stateless &&
              !this.temporary
            );
          },
          reactsToResize: function () {
            return !this.disableResizeWatcher && !this.stateless;
          },
          reactsToRoute: function () {
            return (
              !this.disableRouteWatcher &&
              !this.stateless &&
              (this.temporary || this.isMobile)
            );
          },
          showOverlay: function () {
            return (
              !this.hideOverlay &&
              this.isActive &&
              (this.isMobile || this.temporary)
            );
          },
          styles: function () {
            var e = this.isBottom ? "translateY" : "translateX",
              t = {
                height: Object(d["f"])(this.height),
                top: this.isBottom ? "auto" : Object(d["f"])(this.computedTop),
                maxHeight:
                  null != this.computedMaxHeight
                    ? "calc(100% - ".concat(
                        Object(d["f"])(this.computedMaxHeight),
                        ")"
                      )
                    : void 0,
                transform: ""
                  .concat(e, "(")
                  .concat(Object(d["f"])(this.computedTransform, "%"), ")"),
                width: Object(d["f"])(this.computedWidth),
              };
            return t;
          },
        },
        watch: {
          $route: "onRouteChange",
          isActive: function (e) {
            this.$emit("input", e);
          },
          isMobile: function (e, t) {
            !e && this.isActive && !this.temporary && this.removeOverlay(),
              null != t &&
                this.reactsToResize &&
                this.reactsToMobile &&
                (this.isActive = !e);
          },
          permanent: function (e) {
            e && (this.isActive = !0);
          },
          showOverlay: function (e) {
            e ? this.genOverlay() : this.removeOverlay();
          },
          value: function (e) {
            this.permanent ||
              (null != e
                ? e !== this.isActive && (this.isActive = e)
                : this.init());
          },
          expandOnHover: "updateMiniVariant",
          isMouseover: function (e) {
            this.updateMiniVariant(!e);
          },
        },
        beforeMount: function () {
          this.init();
        },
        methods: {
          calculateTouchArea: function () {
            var e = this.$el.parentNode;
            if (e) {
              var t = e.getBoundingClientRect();
              this.touchArea = { left: t.left + 50, right: t.right - 50 };
            }
          },
          closeConditional: function () {
            return this.isActive && !this._isDestroyed && this.reactsToClick;
          },
          genAppend: function () {
            return this.genPosition("append");
          },
          genBackground: function () {
            var e = { height: "100%", width: "100%", src: this.src },
              t = this.$scopedSlots.img
                ? this.$scopedSlots.img(e)
                : this.$createElement(a["a"], { props: e });
            return this.$createElement(
              "div",
              { staticClass: "v-navigation-drawer__image" },
              [t]
            );
          },
          genDirectives: function () {
            var e = this,
              t = [
                {
                  name: "click-outside",
                  value: function () {
                    return (e.isActive = !1);
                  },
                  args: {
                    closeConditional: this.closeConditional,
                    include: this.getOpenDependentElements,
                  },
                },
              ];
            return (
              this.touchless ||
                this.stateless ||
                t.push({
                  name: "touch",
                  value: {
                    parent: !0,
                    left: this.swipeLeft,
                    right: this.swipeRight,
                  },
                }),
              t
            );
          },
          genListeners: function () {
            var e = this,
              t = {
                transitionend: function (t) {
                  if (t.target === t.currentTarget) {
                    e.$emit("transitionend", t);
                    var n = document.createEvent("UIEvents");
                    n.initUIEvent("resize", !0, !1, window, 0),
                      window.dispatchEvent(n);
                  }
                },
              };
            return (
              this.miniVariant &&
                (t.click = function () {
                  return e.$emit("update:mini-variant", !1);
                }),
              this.expandOnHover &&
                ((t.mouseenter = function () {
                  return (e.isMouseover = !0);
                }),
                (t.mouseleave = function () {
                  return (e.isMouseover = !1);
                })),
              t
            );
          },
          genPosition: function (e) {
            var t = Object(d["m"])(this, e);
            return t
              ? this.$createElement(
                  "div",
                  { staticClass: "v-navigation-drawer__".concat(e) },
                  t
                )
              : t;
          },
          genPrepend: function () {
            return this.genPosition("prepend");
          },
          genContent: function () {
            return this.$createElement(
              "div",
              { staticClass: "v-navigation-drawer__content" },
              this.$slots.default
            );
          },
          genBorder: function () {
            return this.$createElement("div", {
              staticClass: "v-navigation-drawer__border",
            });
          },
          init: function () {
            this.permanent
              ? (this.isActive = !0)
              : this.stateless || null != this.value
              ? (this.isActive = this.value)
              : this.temporary || (this.isActive = !this.isMobile);
          },
          onRouteChange: function () {
            this.reactsToRoute &&
              this.closeConditional() &&
              (this.isActive = !1);
          },
          swipeLeft: function (e) {
            (this.isActive && this.right) ||
              (this.calculateTouchArea(),
              Math.abs(e.touchendX - e.touchstartX) < 100 ||
                (this.right && e.touchstartX >= this.touchArea.right
                  ? (this.isActive = !0)
                  : !this.right && this.isActive && (this.isActive = !1)));
          },
          swipeRight: function (e) {
            (this.isActive && !this.right) ||
              (this.calculateTouchArea(),
              Math.abs(e.touchendX - e.touchstartX) < 100 ||
                (!this.right && e.touchstartX <= this.touchArea.left
                  ? (this.isActive = !0)
                  : this.right && this.isActive && (this.isActive = !1)));
          },
          updateApplication: function () {
            if (!this.isActive || this.isMobile || this.temporary || !this.$el)
              return 0;
            var e = Number(this.computedWidth);
            return isNaN(e) ? this.$el.clientWidth : e;
          },
          updateMiniVariant: function (e) {
            this.miniVariant !== e && this.$emit("update:mini-variant", e);
          },
        },
        render: function (e) {
          var t = [
            this.genPrepend(),
            this.genContent(),
            this.genAppend(),
            this.genBorder(),
          ];
          return (
            (this.src || Object(d["m"])(this, "img")) &&
              t.unshift(this.genBackground()),
            e(
              this.tag,
              this.setBackgroundColor(this.color, {
                class: this.classes,
                style: this.styles,
                directives: this.genDirectives(),
                on: this.genListeners(),
              }),
              t
            )
          );
        },
      });
    },
    f7a8: function (e, t, n) {},
    f8af: function (e, t, n) {
      var a = n("2474");
      function r(e) {
        var t = new e.constructor(e.byteLength);
        return new a(t).set(new a(e)), t;
      }
      e.exports = r;
    },
    f8b5: function (e, t, n) {},
    fa21: function (e, t, n) {
      var a = n("7530"),
        r = n("2dcb"),
        i = n("eac5");
      function s(e) {
        return "function" != typeof e.constructor || i(e) ? {} : a(r(e));
      }
      e.exports = s;
    },
    fba5: function (e, t, n) {
      var a = n("cb5a");
      function r(e) {
        return a(this.__data__, e) > -1;
      }
      e.exports = r;
    },
    ff44: function (e, t, n) {},
  },
]);
