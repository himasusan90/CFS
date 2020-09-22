webpackJsonp(
    [1],
    {
        106: function (t, e, a) {
            "use strict";
            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            var i = (function () {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var n = e[a];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                    }
                }
                return function (e, a, n) {
                    return a && t(e.prototype, a), n && t(e, n), e;
                };
            })(),
                r = Math.PI / 180,
                s = (function () {
                    function t(e) {
                        n(this, t), (this.data = e), (this.image = null), (this.width = e.width), (this.rebate = e.rebate), (this.x = 0), (this.y = 0), (this.draw_width = 0), (this.draw_height = 0), (this.draw_order = 5);
                    }
                    return (
                        i(t, [
                            {
                                key: "render",
                                value: function (t) {
                                    t.save();
                                    var e = this.width / this.image.height;
                                    t.fillStyle = t.createPattern(this.image, "repeat-x");
                                    var a = this.x / e,
                                        n = this.x / e,
                                        i = (this.x, this.draw_width / e),
                                        s = this.draw_height / e;
                                    t.save(),
                                        t.scale(e, e),
                                        t.beginPath(),
                                        t.translate(a, n),
                                        t.fillRect(0, 0, i, this.image.height),
                                        t.restore(),
                                        t.save(),
                                        t.scale(e, e),
                                        t.beginPath(),
                                        t.translate(i + this.x / e, s + this.y / e),
                                        t.rotate(180 * r),
                                        t.moveTo(0, 0),
                                        t.fillRect(0, 0, i, this.image.height),
                                        t.rotate(180 * r),
                                        t.restore(),
                                        t.save(),
                                        t.scale(e, e),
                                        t.translate(this.x / e, this.y / e + s),
                                        t.rotate(-90 * r),
                                        t.beginPath(),
                                        t.moveTo(0, 0),
                                        t.lineTo(this.image.height, this.image.height),
                                        t.lineTo(s - this.image.height, this.image.height),
                                        t.lineTo(s, 0),
                                        t.lineTo(0, 0),
                                        t.closePath(),
                                        t.clip(),
                                        t.fill(),
                                        t.rotate(90 * r),
                                        t.translate(0, -s),
                                        t.restore(),
                                        t.save(),
                                        t.scale(e, e),
                                        t.translate(i + this.x / e, this.y / e),
                                        t.rotate(90 * r),
                                        t.beginPath(),
                                        t.moveTo(0, 0),
                                        t.lineTo(this.image.height, this.image.height),
                                        t.lineTo(s - this.image.height, this.image.height),
                                        t.lineTo(s, 0),
                                        t.lineTo(0, 0),
                                        t.closePath(),
                                        t.clip(),
                                        t.fill(),
                                        t.rotate(-90 * r),
                                        t.translate(-i, 0),
                                        t.restore(),
                                        t.restore();
                                },
                            },
                        ]),
                        t
                    );
                })();
            e.a = s;
        },
        107: function (t, e, a) {
            "use strict";
            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            var i = function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : obj,
                    a = e.id,
                    i = e.name,
                    r = e.width,
                    s = e.height,
                    o = e.size,
                    l = e.aspect_ratio,
                    c = e.created_at,
                    u = void 0 === c ? { date: date, timezone_type: timezone_type, timezone: timezone } : c,
                    d = e.images,
                    m = void 0 === d ? { thumbnail: thumbnail, small: small, medium: medium, large: large } : d;
                n(this, t), (this.id = a), (this.name = i), (this.width = r), (this.height = s), (this.aspect_ratio = l), (this.created_at = u), (this.images = m), (this.size = o);
            };
            e.a = i;
        },
        11: function (t, e, a) {
            "use strict";
            function n(t) {
                a(30);
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = a(12),
                r = a(31),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.default = l.exports;
        },
        111: function (t, e, a) {
            "use strict";
            function n(t) {
                return function () {
                    var e = t.apply(this, arguments);
                    return new Promise(function (t, a) {
                        function n(i, r) {
                            try {
                                var s = e[i](r),
                                    o = s.value;
                            } catch (t) {
                                return void a(t);
                            }
                            if (!s.done)
                                return Promise.resolve(o).then(
                                    function (t) {
                                        n("next", t);
                                    },
                                    function (t) {
                                        n("throw", t);
                                    }
                                );
                            t(o);
                        }
                        return n("next");
                    });
                };
            }
            a.d(e, "b", function () {
                return d;
            }),
                a.d(e, "c", function () {
                    return m;
                }),
                a.d(e, "a", function () {
                    return h;
                });
            var i = a(422),
                r = (a.n(i), a(107)),
                s = this,
                o = function (t, e, a) {
                    var n = t / e;
                    return t > e ? { width: Math.floor(a), height: Math.floor(a / n) } : { width: Math.floor(a * n), height: Math.floor(a) };
                },
                l = (function () {
                    var t = n(
                        regeneratorRuntime.mark(function t(e) {
                            return regeneratorRuntime.wrap(
                                function (t) {
                                    for (; ;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return t.abrupt(
                                                    "return",
                                                    new Promise(function (t) {
                                                        i.EXIF.getData(e, function () {
                                                            var e = i.EXIF.getAllTags(this),
                                                                a = e.Orientation ? e.Orientation : null;
                                                            t(a);
                                                        });
                                                    })
                                                );
                                            case 1:
                                            case "end":
                                                return t.stop();
                                        }
                                },
                                t,
                                s
                            );
                        })
                    );
                    return function (e) {
                        return t.apply(this, arguments);
                    };
                })(),
                c = function (t, e, a) {
                    return 4 < t && t < 9 ? { width: a, height: e } : { width: e, height: a };
                },
                u = function (t, e) {
                    var a = e.canvas,
                        n = a.width,
                        i = a.height,
                        r = document.createElement("canvas");
                    (r.width = n), (r.height = i);
                    var s = r.getContext("2d");
                    switch ((t > 4 && ((r.width = i), (r.height = n)), t)) {
                        case 2:
                            s.translate(n, 0), s.scale(-1, 1);
                            break;
                        case 3:
                            s.translate(n, i), s.rotate(Math.PI);
                            break;
                        case 4:
                            s.translate(0, i), s.scale(1, -1);
                            break;
                        case 5:
                            s.rotate(0.5 * Math.PI), s.scale(1, -1);
                            break;
                        case 6:
                            s.rotate(0.5 * Math.PI), s.translate(0, -i);
                            break;
                        case 7:
                            s.rotate(0.5 * Math.PI), s.translate(n, -i), s.scale(-1, 1);
                            break;
                        case 8:
                            s.rotate(-0.5 * Math.PI), s.translate(-n, 0);
                    }
                    return s.drawImage(a, 0, 0), r;
                },
                d = (function () {
                    var t = n(
                        regeneratorRuntime.mark(function t(e) {
                            var a,
                                n,
                                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                            return regeneratorRuntime.wrap(
                                function (t) {
                                    for (; ;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (a = URL.createObjectURL(e)), (t.next = 3), l(e);
                                            case 3:
                                                return (
                                                    (n = t.sent),
                                                    t.abrupt(
                                                        "return",
                                                        new Promise(function (t, e) {
                                                            var r = document.createElement("img");
                                                            (r.onload = function () {
                                                                var e = o(r.width, r.height, i),
                                                                    a = e.width,
                                                                    s = e.height,
                                                                    l = document.createElement("canvas"),
                                                                    d = l.getContext("2d");
                                                                if (((l.width = a), (l.height = s), d.drawImage(r, 0, 0, r.width, r.height, 0, 0, l.width, l.height), URL.revokeObjectURL(r.src), null === n || 1 === n))
                                                                    t({ src: l.toDataURL("image/jpeg", 0.9), width: r.width, height: r.height });
                                                                else {
                                                                    var m = c(n, r.width, r.height),
                                                                        h = u(n, d);
                                                                    t({ src: h.toDataURL("image/jpeg", 0.9), width: m.width, height: m.height });
                                                                }
                                                            }),
                                                                (r.onerror = function () {
                                                                    URL.revokeObjectURL(r.src), e(new Error("Could not load image"));
                                                                }),
                                                                (r.src = a);
                                                        })
                                                    )
                                                );
                                            case 5:
                                            case "end":
                                                return t.stop();
                                        }
                                },
                                t,
                                s
                            );
                        })
                    );
                    return function (e) {
                        return t.apply(this, arguments);
                    };
                })(),
                m = function (t) {
                    var e = {
                        id: t.id,
                        name: t.name,
                        width: t.image.width,
                        height: t.image.height,
                        aspect_ratio: t.image.width / t.image.height,
                        created_at: { date: "", timezone_type: "", timezone: "" },
                        images: { thumbnail: t.image.src, small: t.image.src, medium: t.image.src, large: t.image.src },
                    };
                    return new r.a(e);
                },
                h = function (t) {
                    for (var e = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], a = 0, n = parseInt(t, 10) || 0; n >= 1024;) (n /= 1024), a++;
                    return n.toFixed(n >= 10 || a < 1 ? 0 : 1) + " " + e[a];
                };
        },
        112: function (t, e, a) {
            "use strict";
            a.d(e, "a", function () {
                return n;
            }),
                a.d(e, "b", function () {
                    return i;
                }),
                a.d(e, "c", function () {
                    return r;
                });
            var n = function (t, e, a) {
                return t < e ? e : t > a ? a : t;
            },
                i = function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = parseInt(1 + "0".repeat(e)),
                        i = Math.round(t * n) / n;
                    return a ? i.toFixed(e) : i;
                },
                r = function (t, e) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                    return parseFloat((e / t.scale).toFixed(a));
                };
        },
        118: function (t, e, a) {
            "use strict";
            function n(t) {
                this.$style = a(246);
            }
            var i = a(136),
                r = a(265),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        12: function (t, e, a) {
            "use strict";
            e.a = {
                props: { type: String, delay: { type: Number, default: 0 } },
                data: function () {
                    return {};
                },
                computed: {
                    icon: function () {
                        switch (this.type) {
                            case "warning":
                                return "fa-warning";
                            case "danger":
                                return "fa-exclamation-circle";
                            case "info":
                                return "fa-info-circle";
                            default:
                                return "";
                        }
                    },
                },
                methods: {
                    animateEnter: function (t, e) {
                        var a = t.getBoundingClientRect(),
                            n = a.height,
                            i = t.style,
                            r = i.padding,
                            s = i.margin;
                        Object.assign(t.style, { height: "0px", transition: "none", overflow: "hidden", opacity: 0, margin: 0, padding: 0 }),
                            setTimeout(function () {
                                Object.assign(t.style, { height: n + "px", opacity: 1, transition: "all 0.25s ease", padding: r, margin: s }), e();
                            }, this.delay);
                    },
                    animateLeave: function (t, e) {
                        (t.style.height = "0px"), (t.style.opacity = 0), (t.style.transition = "all 0.25s ease"), setTimeout(e, 250);
                    },
                },
            };
        },
        13: function (t, e, a) {
            "use strict";
            e.a = {
                props: { is_checking_out: Boolean, can_checkout: Boolean, fetching: Boolean, price_breakdown: Object, quantity: { type: Number } },
                computed: {
                    total_price: function () {
                        var t = this.quantity * this.price_breakdown.total;
                        return t ? "$" + t.toFixed(2) : "N/A";
                    },
                },
            };
        },
        130: function (t, e, a) {
            "use strict";
            e.a = {
                props: { dismissable: Boolean },
                data: function () {
                    return { is_open: !1 };
                },
                computed: {
                    has_title: function () {
                        return !!this.$slots.title;
                    },
                },
                methods: {
                    open: function () {
                        this.is_open = !0;
                    },
                    close: function () {
                        var t = this;
                        this.$refs.background.classList.add("modal__background--leaving"),
                            setTimeout(function () {
                                t.is_open = !1;
                            }, 500);
                    },
                },
                mounted: function () {
                    document.body.appendChild(this.$el);
                },
                watch: {
                    is_open: function (t) {
                        t ? document.body.classList.add("hide-overflow") : document.body.classList.remove("hide-overflow");
                    },
                },
            };
        },
        131: function (t, e, a) {
            "use strict";
            function n(t, e) {
                function a(t, e) {
                    return _.transform(t, function (t, n, i) {
                        _.isEqual(n, e[i]) || (t[i] = _.isObject(n) && _.isObject(e[i]) ? a(n, e[i]) : n);
                    });
                }
                return a(t, e);
            }
            function i(t, e) {
                return o()(n(t, e));
            }
            function r(t, e, a) {
                var n = Math.min(t, e),
                    i = Math.max(t, e),
                    r = Math.min(a.max_width, a.max_height),
                    s = Math.max(a.max_width, a.max_height);
                return n <= r && i <= s;
            }
            (e.a = i), (e.b = r);
            var s = a(382),
                o = a.n(s);
        },
        133: function (t, e, a) {
            "use strict";
            var n = a(25),
                i = a.n(n),
                r = a(89),
                s = a.n(r),
                o = a(106),
                l = a(238),
                c = (a(239), a(134)),
                u = a(240),
                d = a(241),
                m = a(242),
                h = {},
                p = { image_data: d.a, bottom_mat_data: c.a, top_mat_data: u.a, frame_data: o.a, slip_data: l.a };
            e.a = {
                components: { Spinner: m.a },
                props: { image_width: Number, image_height: Number, image_data: Object, top_mat_data: Object, bottom_mat_data: Object, frame_data: Object, slip_data: Object, placeholder_text: Array, spacer: Boolean, vgroove: Boolean },
                data: function () {
                    return { loading: !0 };
                },
                computed: {
                    max_size: function () {
                        return 1200;
                    },
                    items: function () {
                        var t = this,
                            e = [];
                        return (
                            e.push(new d.a(Object.assign({}, this.image_data, { placeholder_text: this.placeholder_text }), this.image_width, this.image_height)),
                            ["bottom_mat_data", "top_mat_data", "slip_data", "fillet_data", "frame_data"].forEach(function (a) {
                                t[a] && e.push(new p[a](t[a]));
                            }),
                            this.applyDrawDimensions(this.applyPositions(e)).sort(function (t, e) {
                                return t.draw_order - e.draw_order;
                            })
                        );
                    },
                },
                methods: {
                    emitLoadingStart: function () {
                        this.$emit("loading-start"), (this.loading = !0);
                    },
                    emitLoadingFinish: function () {
                        this.$emit("loading-complete"), (this.loading = !1);
                    },
                    applyDrawDimensions: function (t) {
                        if (1 === t.length) return (t[0].draw_width = t[0].width), (t[0].draw_height = t[0].height), t;
                        for (var e = 0; e < t.length - 1; e++) {
                            0 === e && ((t[e].draw_width = t[e].width), (t[e].draw_height = t[e].height));
                            var a = t[e + 1],
                                n = t[e];
                            a instanceof c.a
                                ? ((a.draw_width += n.draw_width + a.left + a.right), (a.draw_height += n.draw_height + a.top + a.bottom))
                                : a instanceof o.a
                                    ? ((a.draw_width += n.draw_width + 2 * a.width), (a.draw_height += n.draw_height + 2 * a.width))
                                    : ((a.draw_width += n.draw_width), (a.draw_height += n.draw_height));
                        }
                        return t;
                    },
                    applyPositions: function (t) {
                        for (var e = t.length - 2; e >= 0; e--) {
                            var a = t[e],
                                n = t[e + 1];
                            if (n instanceof c.a) (a.x += n.x + n.left), (a.y += n.y + n.top);
                            else {
                                if (!(n instanceof o.a)) throw "Unknown previous item " + n;
                                (a.x += n.x + n.width), (a.y += n.y + n.width);
                            }
                        }
                        return t;
                    },
                    calculateGlassRect: function (t, e) {
                        return e || (e = { width: 0 }), { x: t.width + e.width, y: t.width + e.width, draw_width: t.draw_width - 2 * t.width - 2 * e.width, draw_height: t.draw_height - 2 * t.width - 2 * e.width };
                    },
                    drawCanvas: function (t, e) {
                        for (var a = 0; a < t.length; a++)
                            if ((t[a].render(e), t[a] instanceof o.a)) {
                                if (a === t.length - 1) {
                                    var n = this.items.find(function (t) {
                                        return t instanceof l.a;
                                    }),
                                        i = this.calculateGlassRect(t[a], n),
                                        r = this.spacer ? 0.75 : 0.3,
                                        u = this.spacer ? 77 : 25;
                                    this.addInnerShadow(i, e, r, u);
                                    continue;
                                }
                                this.addInnerShadow(t[a], e, 0.5, 12);
                            } else this.addInnerShadow(t[a], e, 0.5, 8);
                        var d = t.filter(function (t) {
                            return t instanceof c.a;
                        });
                        if (
                            (d.forEach(function (t) {
                                t.addStroke(e);
                            }),
                                d.length > 0 && this.vgroove)
                        ) {
                            var m = s()(d.shift());
                            (m.left -= 1), (m.top -= 1), (m.draw_width += 1), (m.draw_height += 1), m.addStroke(e);
                        }
                    },
                    addInnerShadow: function (t, e) {
                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.5,
                            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5;
                        e.save(), (e.shadowBlur = n), (e.shadowOffsetX = 0), (e.shadowOffsetY = 0), (e.shadowColor = "rgba(1,1,1," + a + ")"), (e.lineWidth = 20);
                        var i = e.lineWidth / 2;
                        e.beginPath(), e.rect(t.x, t.y, t.draw_width, t.draw_height), e.clip(), e.beginPath(), e.strokeRect(t.x - i, t.y - i, t.draw_width + 2 * i, t.draw_height + 2 * i), e.restore();
                    },
                    generateImage: function () {
                        this.$emit("generating-image");
                        var t = this.$refs.canvas,
                            e = t.getContext("2d"),
                            a = 0,
                            n = this.items[this.items.length - 1];
                        this.items.forEach(function (t) {
                            var e = t.draw_width * t.draw_height;
                            e > a && ((a = e), (n = t));
                        });
                        var i = parseInt(Math.min(this.max_size / n.draw_width, this.max_size / n.draw_height));
                        return (t.width = n.draw_width * i), (t.height = n.draw_height * i), e.save(), e.scale(i, i), this.drawCanvas(this.items, e), e.restore(), Promise.resolve(t);
                    },
                    prepareImages: function () {
                        var t = this,
                            e = [];
                        return (
                            this.items.forEach(function (a) {
                                var n = a.data;
                                a instanceof o.a
                                    ? h[n.images.tile]
                                        ? (a.image = h[n.images.tile])
                                        : e.push(
                                            new Promise(function (t, e) {
                                                var i = new Image();
                                                (i.onerror = function (t) {
                                                    return e(t);
                                                }),
                                                    (i.onload = function () {
                                                        (a.image = i), (h[n.images.tile] = i), t();
                                                    }),
                                                    (i.onerror = t),
                                                    (i.src = n.images.tile);
                                            })
                                        )
                                    : a instanceof d.a
                                        ? n.url &&
                                        (h[n.images.tile]
                                            ? ((a.image = h[n.url]), n.tile && (a.pattern = t.$refs.canvas.getContext("2d").createPattern(h[n.url], "repeat")))
                                            : e.push(
                                                new Promise(function (e, i) {
                                                    var r = new Image();
                                                    (r.onload = function () {
                                                        (a.image = r), n.tile && (a.pattern = t.$refs.canvas.getContext("2d").createPattern(r, "repeat")), (h[n.url] = r), e();
                                                    }),
                                                        (r.onerror = e),
                                                        (r.src = n.url);
                                                })
                                            ))
                                        : a instanceof c.a &&
                                        n.images.tile &&
                                        (h[n.images.tile]
                                            ? ((a.image = h[n.images.tile]), (a.pattern = t.$refs.canvas.getContext("2d").createPattern(h[n.images.tile], "repeat")))
                                            : e.push(
                                                new Promise(function (e, i) {
                                                    var r = new Image();
                                                    (r.onload = function () {
                                                        (a.image = r), (a.pattern = t.$refs.canvas.getContext("2d").createPattern(r, "repeat")), (h[n.images.tile] = r), e();
                                                    }),
                                                        (r.onerror = e),
                                                        (r.src = n.images.tile);
                                                })
                                            ));
                            }),
                            e.length > 0
                                ? (this.emitLoadingStart(),
                                    Promise.all(e).then(function (e) {
                                        return t.emitLoadingFinish(), Promise.resolve();
                                    }))
                                : Promise.all(e).then(function () {
                                    return t.emitLoadingFinish(), Promise.resolve();
                                })
                        );
                    },
                },
                mounted: function () {
                    var t = this;
                    this.prepareImages().then(function () {
                        return t.generateImage();
                    });
                },
                created: function () {
                    var t = this,
                        e = i()(function () {
                            return t.prepareImages().then(function () {
                                return t.generateImage();
                            });
                        }, 30);
                    ["image_width", "image_height", "image_data", "bottom_mat_data", "top_mat_data", "frame_data", "slip_data", "placeholder_text", "spacer", "vgroove"].forEach(function (a) {
                        t.$watch(a, e);
                    });
                },
            };
        },
        134: function (t, e, a) {
            "use strict";
            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            var i = (function () {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var n = e[a];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                    }
                }
                return function (e, a, n) {
                    return a && t(e.prototype, a), n && t(e, n), e;
                };
            })(),
                r = (function () {
                    function t(e) {
                        n(this, t),
                            (this.data = e),
                            (this.hex = e.color_hex),
                            (this.texture = e.texture),
                            (this.top = e.top),
                            (this.left = e.left),
                            (this.bottom = e.bottom),
                            (this.right = e.right),
                            (this.core = e.core_hex),
                            (this.x = 0),
                            (this.y = 0),
                            (this.draw_width = 0),
                            (this.draw_height = 0),
                            (this.draw_order = 1),
                            (this.image = null),
                            (this.pattern = null);
                    }
                    return (
                        i(t, [
                            {
                                key: "addStroke",
                                value: function (t) {
                                    t.save(), (t.strokeStyle = this.core), (t.lineWidth = 0.15);
                                    var e = t.lineWidth / 2;
                                    t.strokeRect(this.x + this.left - e, this.y + this.top - e, this.draw_width - (this.left + this.right) + 2 * e, this.draw_height - (this.top + this.bottom) + 2 * e), t.restore();
                                },
                            },
                            {
                                key: "render",
                                value: function (t) {
                                    if ((t.save(), this.pattern)) {
                                        var e = this.image.width / 28.34,
                                            a = e / this.image.width,
                                            n = this.draw_width / a,
                                            i = this.draw_height / a,
                                            r = this.x / a,
                                            s = this.y / a;
                                        t.save(), t.scale(a, a), (t.fillStyle = this.pattern), t.translate(r, s), t.rect(0, 0, n, i), t.fill(), t.restore();
                                    } else (t.fillStyle = this.hex), t.fillRect(this.x, this.y, this.draw_width, this.draw_height);
                                    t.restore();
                                },
                            },
                        ]),
                        t
                    );
                })();
            e.a = r;
        },
        135: function (t, e, a) {
            "use strict";
            e.a = {};
        },
        136: function (t, e, a) {
            "use strict";
            function n(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
                    return a;
                }
                return Array.from(t);
            }
            var i = a(247),
                r = a(15),
                s = a.n(r),
                o = a(185),
                l = a.n(o),
                c = a(107),
                u = a(250),
                d = a(263),
                m = a(111),
                h = a(264),
                p =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var a = arguments[e];
                            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
                        }
                        return t;
                    };
            e.a = {
                components: { GalleryItem: u.a, GalleryUploadItem: i.a },
                name: "user-gallery",
                props: { enabled: { type: Boolean, default: !0 } },
                data: function () {
                    return { selected: null, is_preview: !1, is_expanded: !1, images: [], uploads: [], completed: [], fetching: !0, max_file_size: 5e8, formatted_max_file_size: "500 mb" };
                },
                computed: {
                    sorted_images: function () {
                        return [].concat(n(this.images)).sort(function (t, e) {
                            return new Date(e.created_at.date) - new Date(t.created_at.date);
                        });
                    },
                    current_uploads: function () {
                        return [].concat(n(this.uploads)).filter(function (t) {
                            return !t.error;
                        });
                    },
                    total_uploads: function () {
                        return this.current_uploads.length + this.completed.length;
                    },
                    total_progress: function () {
                        var t = [].concat(n(this.current_uploads), n(this.completed));
                        return 0 === t.length
                            ? 0
                            : Math.floor(
                                t.reduce(function (t, e) {
                                    return t + e.progress;
                                }, 0) / t.length
                            );
                    },
                },
                methods: {
                    showGallery: function () {
                        (this.is_expanded = !0), document.body.classList.add(this.$style.overflowHidden);
                    },
                    hideGallery: function () {
                        (this.is_expanded = !1), document.body.classList.remove(this.$style.overflowHidden);
                    },
                    onDragEnter: function (t) { },
                    onDragLeave: function (t) { },
                    onDrop: function (t) {
                        var e = this;
                        [].concat(n(t.dataTransfer.files)).forEach(function (t) {
                            e.uploadFile(t);
                        });
                    },
                    onFileInputChange: function (t) {
                        var e = this;
                        [].concat(n(t.target.files)).forEach(function (t) {
                            return e.uploadFile(t);
                        }),
                            (t.target.value = "");
                    },
                    uploadFile: function (t) {
                        var e = this,
                            a = new d.a(t, this.max_file_size);
                        a
                            .start()
                            .then(function (t) {
                                if (
                                    (e.completed.push(a),
                                        (e.uploads = e.uploads.filter(function (t) {
                                            return t !== a;
                                        })),
                                        e.onUploadSuccess(t),
                                        e.selected && e.selected.id === a.id)
                                ) {
                                    var n = p({}, t, { is_preview: e.is_preview });
                                    e.$emit("upload_complete", { image_data: n }), (e.selected = t);
                                }
                            })
                            .catch(this.onUploadError),
                            this.uploads.push(a);
                    },
                    onUploadError: function (t) { },
                    onUploadSuccess: function (t) {
                        this.images.push(t);
                    },
                    cancelUpload: function (t) {
                        (this.uploads = this.uploads.filter(function (e) {
                            return e !== t;
                        })),
                            t.cancel(),
                            this.$emit("delete_image", { id: t.id }),
                            this.selected && this.selected.id === t.id && this.clearImage();
                    },
                    clearImage: function () {
                        (this.selected = null), (this.is_preview = !1), this.$emit("clear_image");
                    },
                    selectTmpImage: function (t) {
                        var e = Object(m.c)(t);
                        this.selectImage(e);
                    },
                    selectImage: function (t) {
                        (this.selected = t), (this.is_preview = !1), this.$emit("update_image", { image: t }), this.hideGallery();
                    },
                    previewImage: function (t) {
                        (this.selected = t), (this.is_preview = !0), this.$emit("preview_image", { image: t }), this.hideGallery();
                    },
                    previewUpload: function (t) {
                        var e = Object(m.c)(t);
                        this.previewImage(e);
                    },
                    deleteImage: function (t) {
                        var e = this;
                        l()({
                            type: "question",
                            title: "Delete image?",
                            text: "This will permanently erase your saved image",
                            showCancelButton: !0,
                            showLoaderOnConfirm: !0,
                            preConfirm: function () {
                                return s.a.delete("/api/gallery/image/" + t.id).then(function (a) {
                                    return (
                                        (e.images = e.images.filter(function (e) {
                                            return e.id !== t.id;
                                        })),
                                        a.data
                                    );
                                });
                            },
                        }).then(function (a) {
                            e.$emit("delete_image", { id: t.id });
                        });
                    },
                    fetchGallery: function () {
                        var t = this;
                        (this.fetching = !0),
                            s.a
                                .get("/api/gallery")
                                .then(function (e) {
                                    (t.images = e.data.images.map(function (t) {
                                        return new c.a(t);
                                    })),
                                        (t.fetching = !1);
                                })
                                .catch(function () {
                                    t.fetching = !1;
                                });
                    },
                },
                watch: {
                    uploads: function (t) {
                        0 === t.length && (this.completed = []);
                    },
                },
                created: function () {
                    var t = this;
                    this.fetchGallery(),
                        this.$store && this.$store.registerModule("GALLERY", h.a),
                        s.a.get("/api/max-upload-size").then(function (e) {
                            var a = e.data,
                                n = a.bytes,
                                i = a.formatted;
                            (t.max_file_size = n), (t.formatted_max_file_size = i);
                        }),
                        (window.onbeforeunload = function (e) {
                            if (t.current_uploads.length > 0) return (e.returnValue = "Upload in progress"), "Upload in progress";
                        });
                },
            };
        },
        137: function (t, e, a) {
            "use strict";
            e.a = {
                name: "gallery-upload-item",
                props: { src: String, name: String, progress: { type: Number, default: 13 }, is_usable: { type: Boolean, default: !0 }, can_preview: { type: Boolean, default: !1 }, error: Error },
                computed: {
                    placeholder_image: function () {
                        return "/public/static/images/mobile-menu/icons/015-two-polaroid.svg";
                    },
                },
            };
        },
        138: function (t, e, a) {
            "use strict";
            var n = a(386),
                i = (a.n(n), a(111));
            e.a = {
                name: "gallery-item",
                props: { can_preview: { type: Boolean, default: !1 }, thumbnail: String, name: String, width: Number, height: Number, size: Number, date: String },
                computed: {
                    file_size: function () {
                        return Object(i.a)(this.size);
                    },
                    human_date: function () {
                        return Object(n.format)(this.date, "Do MMMM YYYY");
                    },
                },
            };
        },
        14: function (t, e, a) {
            "use strict";
            e.a = { props: { can_checkout: Boolean, fetching: Boolean } };
        },
        143: function (t, e, a) {
            "use strict";
            e.a = {
                name: "image-quality",
                computed: {
                    quality: function () {
                        var t = this.image.width / 300;
                        return Math.min((t / (this.image_width / 2.54)) * 100, 100);
                    },
                    band: function () {
                        return this.quality <= 0
                            ? { bar: "danger", label: "No image detected" }
                            : this.quality <= 25
                                ? { bar: "danger", label: "Poor" }
                                : this.quality <= 40
                                    ? { bar: "warning", label: "Not Bad" }
                                    : this.quality <= 70
                                        ? { bar: "good", label: "Good" }
                                        : this.quality <= 90
                                            ? { bar: "good", label: "Great" }
                                            : { bar: "excellent", label: "Exellent" };
                    },
                },
                props: { image_width: { type: Number, default: 0 }, image: { type: Object, default: { width: 0 } } },
            };
        },
        144: function (t, e, a) {
            "use strict";
            var n = a(83),
                i = a.n(n);
            e.a = { props: { tabs: Array, selected_tab: Object, properties: Object, listeners: Object }, methods: { isEqual: i.a } };
        },
        145: function (t, e, a) {
            "use strict";
            function n(t) {
                a(271);
            }
            var i = a(146),
                r = a(272),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        146: function (t, e, a) {
            "use strict";
            e.a = { props: { heading: { type: String }, list: { type: Array }, icon: { type: String, default: "" } } };
        },
        147: function (t, e, a) {
            "use strict";
            function n(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
                    return a;
                }
                return Array.from(t);
            }
            var i = a(148);
            e.a = {
                components: { MatCircle: i.a },
                props: { heading: String, selected: Object, mats: Array },
                computed: {
                    sorted_mats: function () {
                        return [].concat(n(this.mats)).sort(function (t, e) {
                            return t.sort_order - e.sort_order;
                        });
                    },
                },
            };
        },
        148: function (t, e, a) {
            "use strict";
            function n(t) {
                a(275);
            }
            var i = a(149),
                r = a(276),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        149: function (t, e, a) {
            "use strict";
            e.a = {
                data: function () {
                    return {};
                },
                props: { mat: Object, valid: Boolean, selected: Boolean },
                computed: {
                    style: function () {
                        return { color: this.getContrast(this.mat.color_hex), backgroundImage: this.mat.images.thumbnail ? "url(" + this.mat.images.thumbnail + ")" : "", backgroundColor: this.mat.color_hex, backgroundSize: "contain" };
                    },
                },
                methods: {
                    getContrast: function (t) {
                        return (t = t.replace("#", "")), (299 * parseInt(t.substr(0, 2), 16) + 587 * parseInt(t.substr(2, 2), 16) + 114 * parseInt(t.substr(4, 2), 16)) / 1e3 >= 128 ? "black" : "white";
                    },
                },
            };
        },
        150: function (t, e, a) {
            "use strict";
            function n(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
                    return a;
                }
                return Array.from(t);
            }
            var i = a(59),
                r = a.n(i),
                s = a(15),
                o = a.n(s),
                l = a(148),
                c = a(7);
            e.a = {
                components: { MatCircle: l.a, ToolTip: c.default },
                props: { heading: String, selected: Object, mats: Array, vgroove: Boolean, show_vgroove: Boolean },
                data: function () {
                    return { current_tab: null, mat_categories: [], names: !1 };
                },
                computed: {
                    description: function () {
                        var t = this;
                        return r()(
                            this.mat_categories.find(function (e) {
                                return e.name === t.current_tab;
                            }),
                            "description",
                            null
                        );
                    },
                    groove: {
                        get: function () {
                            return this.vgroove;
                        },
                        set: function (t) {
                            this.$emit("vgroove", { vgroove: t });
                        },
                    },
                    sorted_mats: function () {
                        return []
                            .concat(
                                n(
                                    this.mats.filter(function (t) {
                                        return t.active;
                                    })
                                )
                            )
                            .sort(function (t, e) {
                                return t.sort_order - e.sort_order;
                            });
                    },
                    mat_groups: function () {
                        var t = this.sorted_mats,
                            e = {};
                        return (
                            t.forEach(function (t) {
                                void 0 === e[t.category] && (e[t.category] = []), e[t.category].push(t);
                            }),
                            e
                        );
                    },
                },
                methods: {
                    updateTab: function (t) {
                        this.current_tab = t;
                    },
                },
                created: function () {
                    var t = this;
                    o.a.get("/api/v2/matboards/category").then(function (e) {
                        (t.mat_categories = [].concat(n(e.data)).sort(function (t, e) {
                            return t.sort_order - e.sort_order;
                        })),
                            (t.current_tab = t.mat_categories[0].name);
                    });
                },
            };
        },
        18: function (t, e, a) {
            "use strict";
            e.a = {
                data: function () {
                    return { display: !1 };
                },
                watch: {
                    display: function (t) {
                        !0 === t ? this.show() : this.hide();
                    },
                },
                methods: {
                    show: function () {
                        var t = this,
                            e = this.$refs.tooltip,
                            a = this.$refs.button;
                        e.style.display = "block";
                        var n = e.getBoundingClientRect(),
                            i = n.width,
                            r = n.height,
                            s = a.getBoundingClientRect(),
                            o = s.width;
                        (e.style.top = -r - 6 + "px"), (e.style.left = -i / 2 + o / 2 + "px"), (e.style.opacity = 1);
                        var l = function e(a) {
                            (t.display = !1), document.removeEventListener("click", e);
                        };
                        setTimeout(function () {
                            return document.addEventListener("click", l);
                        }, 5);
                    },
                    hide: function () {
                        var t = this;
                        (this.$refs.tooltip.style.opacity = 0),
                            setTimeout(function () {
                                t.$refs.tooltip.style.display = "none";
                            }, 150);
                    },
                },
                created: function () {
                    this.id = "tooltip__" + Math.random();
                },
                destroyed: function () { },
            };
        },
        183: function (t, e, a) {
            "use strict";
            function n(t) {
                a(233);
            }
            var i = a(130),
                r = a(234),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        19: function (t, e, a) {
            "use strict";
            var n = a(44);
            e.a = { components: { ProductSummaryRow: n.a }, props: { summary: { type: Array } } };
        },
        190: function (t, e, a) {
            "use strict";
            function n(t) {
                a(266);
            }
            var i = a(143),
                r = a(267),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, "data-v-ce93ee02", null);
            e.a = l.exports;
        },
        20: function (t, e, a) {
            "use strict";
            e.a = {
                props: { heading: String, value: String, price: [String, Number], link_style: Boolean },
                filters: {
                    price: function (t) {
                        return "number" != typeof t || isNaN(t) ? t : "$" + t.toFixed(2);
                    },
                },
            };
        },
        21: function (t, e, a) {
            "use strict";
            var n = a(105),
                i = a.n(n),
                r = a(79),
                s = a.n(r);
            e.a = {
                props: { visible: Boolean, appearAfterSelector: { type: String, required: !0 }, topElement: { type: String, default: ".navbar-header" }, cartElement: { type: String, default: "#fs-checkout-box" } },
                data: function () {
                    return { offset_el_px_from_top: 0 };
                },
                computed: {
                    mobile_bar_visible: function () {
                        var t = this.offset_el_px_from_top < 170,
                            e = window.innerWidth < 1008;
                        return t && e;
                    },
                    scroll_offset: function () {
                        return this.mobile_bar_visible ? -170 : -15;
                    },
                },
                methods: {
                    scrollToTop: function () {
                        s()(document.querySelector(this.topElement));
                    },
                    scrollToCart: function () {
                        s()(document.querySelector(this.cartElement), { offset: this.scroll_offset });
                    },
                },
                mounted: function () {
                    var t = this,
                        e = i()(
                            function () {
                                var e = document.querySelector(t.appearAfterSelector);
                                t.offset_el_px_from_top = e.getBoundingClientRect().top;
                            },
                            100,
                            { leading: !0 }
                        );
                    window.addEventListener("scroll", e), window.addEventListener("resize", e), e();
                },
            };
        },
        22: function (t, e, a) {
            "use strict";
            function n(t) {
                for (var e = t.getContext("2d"), a = e.getImageData(0, 0, t.width, t.height), n = a.data.length, i = { top: null, left: null, right: null, bottom: null }, r = 0, s = 0, o = 0; r < n; r += 4)
                    0 !== a.data[r + 3] &&
                        ((s = (r / 4) % t.width),
                            (o = ~~(r / 4 / t.width)),
                            null === i.top && (i.top = o),
                            null === i.left ? (i.left = s) : s < i.left && (i.left = s),
                            null === i.right ? (i.right = s) : i.right < s && (i.right = s),
                            null === i.bottom ? (i.bottom = o) : i.bottom < o && (i.bottom = o));
                var l = i.bottom - i.top;
                return { width: i.right - i.left, height: l };
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
                a.d(e, "mergeCanvases", function () {
                    return i;
                }),
                a.d(e, "makeThumb", function () {
                    return r;
                }),
                a.d(e, "trimCanvas", function () {
                    return s;
                }),
                (e.measureSolidPixelArea = n);
            var i = function (t) {
                var e = parseInt(t[0].width),
                    a = parseInt(t[0].height),
                    n = document.createElement("canvas"),
                    i = n.getContext("2d");
                return (
                    (i.fillStyle = "transparent"),
                    (n.width = e),
                    (n.height = a),
                    t.forEach(function (t) {
                        i.drawImage(t, 0, 0, t.width, t.height);
                    }),
                    n
                );
            },
                r = function (t, e) {
                    if (!t) return "";
                    var a = document.createElement("canvas"),
                        n = t.width,
                        i = t.height,
                        r = n / i,
                        o = void 0,
                        l = 0;
                    n > i ? ((o = 200), (l = 200 / r)) : ((l = 200), (o = 200 * r)), (a.width = parseInt(o)), (a.height = parseInt(l));
                    var c = a.getContext("2d");
                    return e && ((c.fillStyle = e), c.fillRect(0, 0, a.width, a.height)), c.drawImage(t, 0, 0, a.width, a.height), s(a).toDataURL();
                },
                s = function (t) {
                    var e,
                        a,
                        n,
                        i = t.getContext("2d"),
                        r = document.createElement("canvas").getContext("2d"),
                        s = i.getImageData(0, 0, t.width, t.height),
                        o = s.data.length,
                        l = { top: null, left: null, right: null, bottom: null };
                    for (e = 0; e < o; e += 4)
                        0 !== s.data[e + 3] &&
                            ((a = (e / 4) % t.width),
                                (n = ~~(e / 4 / t.width)),
                                null === l.top && (l.top = n),
                                null === l.left ? (l.left = a) : a < l.left && (l.left = a),
                                null === l.right ? (l.right = a) : l.right < a && (l.right = a),
                                null === l.bottom ? (l.bottom = n) : l.bottom < n && (l.bottom = n));
                    var c = l.bottom - l.top,
                        u = l.right - l.left,
                        d = i.getImageData(l.left, l.top, u, c);
                    return (r.canvas.width = u), (r.canvas.height = c), r.putImageData(d, 0, 0), r.canvas;
                };
        },
        23: function (t, e, a) {
            "use strict";
            var n = a(22);
            e.a = {
                props: ["target"],
                methods: {
                    dismiss: function (t) {
                        var e = this;
                        this.$emit("beforeDismiss");
                        var a = document.getElementById("background-overlay");
                        (a.style.opacity = 0),
                            setTimeout(function () {
                                (a.innerHTML = ""), (a.style.display = "none"), a.remove(), document.body.classList.remove(e.$style.bodyOverlay), e.$emit("afterDismiss");
                            }, 250);
                    },
                    createOverlay: function () {
                        var t = (this.$slots.default[0] && this.$slots.default[0].elm) || null;
                        if ((this.target && "string" == typeof this.target && (t = document.querySelector(this.target)), t)) {
                            this.$emit("beforeOpen"), document.body.classList.add(this.$style.bodyOverlay);
                            var e = document.createElement("div");
                            (e.id = "background-overlay"), (e.style.display = "none"), document.body.appendChild(e);
                            var a = "CANVAS" === t.tagName ? Object(n.trimCanvas)(t) : t.cloneNode();
                            (a.id = ""),
                                Object.assign(a.style, { filter: "drop-shadow(0 4px 4px)", "max-height": "90%", "max-width": "90%" }),
                                e.appendChild(a),
                                (e.style.display = "flex"),
                                setTimeout(function () {
                                    e.style.opacity = 1;
                                }, 16),
                                (e.onclick = this.dismiss),
                                this.$emit("afterOpen");
                        }
                    },
                },
            };
        },
        233: function (t, e) { },
        234: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return t.is_open
                    ? a(
                        "div",
                        {
                            ref: "background",
                            staticClass: "modal__background",
                            on: {
                                click: function (e) {
                                    return e.target !== e.currentTarget ? null : t.close(e);
                                },
                            },
                        },
                        [
                            a("div", t._g(t._b({ ref: "foreground", staticClass: "modal__foreground" }, "div", t.$attrs, !1), t.$listeners), [
                                t.has_title
                                    ? a(
                                        "div",
                                        { staticClass: "modal__foreground__header" },
                                        [t._t("title", [a("span", [t._v(" ")])]), t._v(" "), t.dismissable ? a("button", { staticClass: "modal__close", on: { click: t.close } }, [a("span", [t._v("×")])]) : t._e()],
                                        2
                                    )
                                    : t._e(),
                                t._v(" "),
                                a("div", { staticClass: "modal__foreground__body" }, [t._t("default")], 2),
                            ]),
                        ]
                    )
                    : t._e();
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        236: function (t, e, a) {
            "use strict";
            function n(t) {
                a(237);
            }
            var i = a(133),
                r = a(245),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        237: function (t, e) { },
        238: function (t, e, a) {
            "use strict";
            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
            }
            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
            }
            var s = a(106),
                o = (function (t) {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        n(this, e);
                        var s = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, a, r));
                        return (s.draw_order = 4), s;
                    }
                    return r(e, t), e;
                })(s.a);
            e.a = o;
        },
        239: function (t, e, a) {
            "use strict";
            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
            }
            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
            }
            var s = a(106);
            !(function (t) {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    n(this, e);
                    var s = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, a, r));
                    return (s.draw_order = 3), s;
                }
                r(e, t);
            })(s.a);
        },
        240: function (t, e, a) {
            "use strict";
            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
            }
            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
            }
            var s = a(134),
                o = (function (t) {
                    function e(t) {
                        n(this, e);
                        var a = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                        return (a.draw_order = 0), a;
                    }
                    return r(e, t), e;
                })(s.a);
            e.a = o;
        },
        241: function (t, e, a) {
            "use strict";
            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            var i = (function () {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var n = e[a];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                    }
                }
                return function (e, a, n) {
                    return a && t(e.prototype, a), n && t(e, n), e;
                };
            })(),
                r = (function () {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        n(this, t),
                            (this.data = e),
                            (this.image = null),
                            (this.width = a),
                            (this.height = i),
                            (this.x = 0),
                            (this.y = 0),
                            (this.draw_width = 0),
                            (this.draw_height = 0),
                            (this.pattern = null),
                            (this.draw_order = 2),
                            (this.placeholder_text = e.placeholder_text || []);
                    }
                    return (
                        i(t, [
                            {
                                key: "drawPlaceholder",
                                value: function (t) {
                                    var e = document.createElement("CANVAS"),
                                        a = this.draw_width / this.draw_height;
                                    (e.width = t.width), (e.height = parseInt(t.width / a));
                                    var n = e.getContext("2d");
                                    (n.fillStyle = "#EEE"),
                                        n.fillRect(0, 0, e.width, e.height),
                                        n.save(),
                                        n.translate(e.width / 2 - 75, 0.25 * e.height - 25),
                                        (n.fillStyle = "#581845"),
                                        n.fillRect(0, 0, 100, 100),
                                        (n.shadowColor = "rgba(1,1,1,0)"),
                                        (n.strokeStyle = "#EEE"),
                                        (n.lineWidth = 5),
                                        n.strokeRect(0, 0, 100, 100),
                                        (n.fillStyle = "#581845"),
                                        (n.shadowColor = "rgba(1,1,1,0.25)"),
                                        n.fillRect(50, 50, 75, 75),
                                        (n.shadowColor = "rgba(1,1,1,0)"),
                                        n.strokeRect(50, 50, 75, 75),
                                        (n.fillStyle = "#97A5D6"),
                                        (n.shadowColor = "rgba(1,1,1,0.25)"),
                                        n.fillRect(100, 100, 50, 50),
                                        (n.shadowColor = "rgba(1,1,1,0)"),
                                        n.strokeRect(100, 100, 50, 50),
                                        n.restore();
                                    n.save(), (n.fillStyle = "#581845"), (n.font = "40px Arial"), (n.baseline = "top"), (n.textAlign = "center");
                                    return (
                                        this.placeholder_text.forEach(function (t, a) {
                                            var i = e.width / 2,
                                                r = 0.25 * e.height + 175 + 55 * a;
                                            n.fillText(t, i, r);
                                        }),
                                        n.restore(),
                                        e
                                    );
                                },
                            },
                            {
                                key: "render",
                                value: function (t) {
                                    if ((t.save(), (t.fillStyle = "#EEE"), this.image))
                                        if (this.pattern) {
                                            var e = 16 / this.image.height,
                                                a = this.draw_width / e,
                                                n = this.draw_height / e,
                                                i = this.x / e,
                                                r = this.x / e;
                                            t.scale(e, e), (t.fillStyle = this.pattern), t.rect(i, r, a, n), t.fill();
                                        } else t.drawImage(this.image, this.x, this.y, this.draw_width, this.draw_height);
                                    else {
                                        var s = this.drawPlaceholder(t.canvas);
                                        t.drawImage(s, this.x, this.y, this.draw_width, this.draw_height);
                                    }
                                    t.restore();
                                },
                            },
                        ]),
                        t
                    );
                })();
            e.a = r;
        },
        242: function (t, e, a) {
            "use strict";
            function n(t) {
                a(243);
            }
            var i = a(135),
                r = a(244),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        243: function (t, e) { },
        244: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0);
            },
                i = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", { staticClass: "sk-fading-circle" }, [
                            a("div", { staticClass: "sk-circle1 sk-circle" }),
                            t._v(" "),
                            a("div", { staticClass: "sk-circle2 sk-circle" }),
                            t._v(" "),
                            a("div", { staticClass: "sk-circle3 sk-circle" }),
                            t._v(" "),
                            a("div", { staticClass: "sk-circle4 sk-circle" }),
                            t._v(" "),
                            a("div", { staticClass: "sk-circle5 sk-circle" }),
                            t._v(" "),
                            a("div", { staticClass: "sk-circle6 sk-circle" }),
                            t._v(" "),
                            a("div", { staticClass: "sk-circle7 sk-circle" }),
                            t._v(" "),
                            a("div", { staticClass: "sk-circle8 sk-circle" }),
                            t._v(" "),
                            a("div", { staticClass: "sk-circle9 sk-circle" }),
                            t._v(" "),
                            a("div", { staticClass: "sk-circle10 sk-circle" }),
                            t._v(" "),
                            a("div", { staticClass: "sk-circle11 sk-circle" }),
                            t._v(" "),
                            a("div", { staticClass: "sk-circle12 sk-circle" }),
                        ]);
                    },
                ],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        245: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "frame-engine__container" }, [
                    a(
                        "div",
                        { staticClass: "frame-engine__loading-anchor" },
                        [
                            a("canvas", { ref: "canvas", staticClass: "frame-engine__canvas" }, [
                                t._v("\n      Preview your choices in real time! This text is displayed if your\n      browser does not support canvas. Please update your browser to the\n      latest version.\n    "),
                            ]),
                            t._v(" "),
                            a("transition", { attrs: { name: "fade" } }, [t.loading ? a("div", { staticClass: "frame-engine__loading" }, [a("spinner")], 1) : t._e()]),
                        ],
                        1
                    ),
                ]);
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        246: function (t, e) {
            t.exports = {
                "flex-center": "UserGallery---flex-center---2qWAQ_0",
                flexCenter: "UserGallery---flex-center---2qWAQ_0",
                "overflow-hidden": "UserGallery---overflow-hidden---1g4Pt_0",
                overflowHidden: "UserGallery---overflow-hidden---1g4Pt_0",
                "main-content": "UserGallery---main-content---ZoGYU_0",
                mainContent: "UserGallery---main-content---ZoGYU_0",
                "gallery-button": "UserGallery---gallery-button---2D-Q__0",
                galleryButton: "UserGallery---gallery-button---2D-Q__0",
                "gallery-button-text": "UserGallery---gallery-button-text---3J1Gr_0",
                galleryButtonText: "UserGallery---gallery-button-text---3J1Gr_0",
                "remove-image-button": "UserGallery---remove-image-button---3h-Ke_0 UserGallery---gallery-button---2D-Q__0",
                removeImageButton: "UserGallery---remove-image-button---3h-Ke_0 UserGallery---gallery-button---2D-Q__0",
                title: "UserGallery---title---3mVIL_0",
                background: "UserGallery---background---1qw8i_0 UserGallery---flex-center---2qWAQ_0",
                window: "UserGallery---window---1afFM_0",
                "close-button": "UserGallery---close-button---2t6r9_0",
                closeButton: "UserGallery---close-button---2t6r9_0",
                "drop-zone-container": "UserGallery---drop-zone-container---2zveP_0 UserGallery---flex-center---2qWAQ_0",
                dropZoneContainer: "UserGallery---drop-zone-container---2zveP_0 UserGallery---flex-center---2qWAQ_0",
                "drop-zone": "UserGallery---drop-zone---2BWho_0 UserGallery---flex-center---2qWAQ_0",
                dropZone: "UserGallery---drop-zone---2BWho_0 UserGallery---flex-center---2qWAQ_0",
                icon: "UserGallery---icon---3Oo-V_0",
                "drop-zone-text-container": "UserGallery---drop-zone-text-container---b110L_0 UserGallery---flex-center---2qWAQ_0",
                dropZoneTextContainer: "UserGallery---drop-zone-text-container---b110L_0 UserGallery---flex-center---2qWAQ_0",
                "uploading-files": "UserGallery---uploading-files---2vReB_0",
                uploadingFiles: "UserGallery---uploading-files---2vReB_0",
                "ready-files": "UserGallery---ready-files---BEiMf_0",
                readyFiles: "UserGallery---ready-files---BEiMf_0",
                "no-saved-images-message": "UserGallery---no-saved-images-message---3VL7e_0",
                noSavedImagesMessage: "UserGallery---no-saved-images-message---3VL7e_0",
                "button-progress": "UserGallery---button-progress---3iXCf_0",
                buttonProgress: "UserGallery---button-progress---3iXCf_0",
                "progress-container": "UserGallery---progress-container---2LWwm_0",
                progressContainer: "UserGallery---progress-container---2LWwm_0",
                progress: "UserGallery---progress---26Fgt_0",
            };
        },
        247: function (t, e, a) {
            "use strict";
            function n(t) {
                this.$style = a(248);
            }
            var i = a(137),
                r = a(249),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        248: function (t, e) {
            t.exports = {
                row: "GalleryUploadItem---row---3vpsd_0",
                clickable: "GalleryUploadItem---clickable---2CRSj_0",
                "middle-section": "GalleryUploadItem---middle-section---KgqvS_0",
                middleSection: "GalleryUploadItem---middle-section---KgqvS_0",
                "button-container": "GalleryUploadItem---button-container---1a6fl_0",
                buttonContainer: "GalleryUploadItem---button-container---1a6fl_0",
                "image-container": "GalleryUploadItem---image-container---3W0qo_0",
                imageContainer: "GalleryUploadItem---image-container---3W0qo_0",
                button: "GalleryUploadItem---button---2nliw_0",
                use: "GalleryUploadItem---use---22JQ4_0 GalleryUploadItem---button---2nliw_0",
                preview: "GalleryUploadItem---preview---1oG8u_0 GalleryUploadItem---button---2nliw_0",
                delete: "GalleryUploadItem---delete---3TcCL_0 GalleryUploadItem---button---2nliw_0",
                "meta-info": "GalleryUploadItem---meta-info---2eS4N_0",
                metaInfo: "GalleryUploadItem---meta-info---2eS4N_0",
                name: "GalleryUploadItem---name---I-Uk3_0",
                "progress-percent": "GalleryUploadItem---progress-percent---1ZFW__0",
                progressPercent: "GalleryUploadItem---progress-percent---1ZFW__0",
                image: "GalleryUploadItem---image---GSBHV_0",
                "progress-container": "GalleryUploadItem---progress-container---13FgL_0",
                progressContainer: "GalleryUploadItem---progress-container---13FgL_0",
                "progress-meter": "GalleryUploadItem---progress-meter---3J7hE_0",
                progressMeter: "GalleryUploadItem---progress-meter---3J7hE_0",
                "wait-for-upload-warning": "GalleryUploadItem---wait-for-upload-warning---2P1d4_0",
                waitForUploadWarning: "GalleryUploadItem---wait-for-upload-warning---2P1d4_0",
            };
        },
        249: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { class: t.$style.row }, [
                    a("div", { class: t.$style["image-container"] }, [a("div", { class: t.$style.image, style: { backgroundImage: "url('" + (t.src ? t.src : t.placeholder_image) + "')" } })]),
                    t._v(" "),
                    a(
                        "div",
                        { class: t.$style["middle-section"] },
                        [
                            t.error
                                ? a("div", { class: t.$style["error-panel"] }, [t._v("\n      " + t._s(t.error.message) + "\n    ")])
                                : [
                                    a(
                                        "div",
                                        { class: t.$style["meta-info"] },
                                        [
                                            t.progress > 99
                                                ? a("span", { class: t.$style.name }, [t._v("Processing... "), a("i", { staticClass: "fa fa-spinner fa-pulse" })])
                                                : [a("span", { class: t.$style.name }, [t._v(t._s(t.name))]), t._v(" "), a("span", { class: t.$style["progress-percent"] }, [t._v(t._s(t.progress) + "%")])],
                                        ],
                                        2
                                    ),
                                    t._v(" "),
                                    a("div", { class: t.$style["progress-container"] }, [a("div", { class: t.$style["progress-meter"], style: { width: t.progress + "%" } })]),
                                    t._v(" "),
                                    t.is_usable ? t._e() : a("div", { class: t.$style["wait-for-upload-warning"] }, [t._v("\n        To use this image, please wait for the upload to complete.\n      ")]),
                                ],
                        ],
                        2
                    ),
                    t._v(" "),
                    a("div", { class: t.$style["button-container"] }, [
                        a(
                            "button",
                            {
                                class: t.$style.use,
                                attrs: { disabled: !t.is_usable },
                                on: {
                                    click: function (e) {
                                        return e.stopPropagation(), e.preventDefault(), t.$emit("use_image");
                                    },
                                },
                            },
                            [t._v("\n      Use for Printing\n    ")]
                        ),
                        t._v(" "),
                        t.can_preview
                            ? a(
                                "button",
                                {
                                    class: t.$style.preview,
                                    attrs: { disabled: !t.is_usable },
                                    on: {
                                        click: function (e) {
                                            return e.stopPropagation(), e.preventDefault(), t.$emit("preview");
                                        },
                                    },
                                },
                                [t._v("\n      Preview (No Printing)\n    ")]
                            )
                            : t._e(),
                        t._v(" "),
                        a(
                            "button",
                            {
                                class: t.$style.delete,
                                on: {
                                    click: function (e) {
                                        return e.stopPropagation(), e.preventDefault(), t.$emit("cancel_upload");
                                    },
                                },
                            },
                            [t._v("\n      Cancel\n    ")]
                        ),
                    ]),
                ]);
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        250: function (t, e, a) {
            "use strict";
            function n(t) {
                this.$style = a(251);
            }
            var i = a(138),
                r = a(262),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        251: function (t, e) {
            t.exports = {
                row: "GalleryItem---row---eAoXJ_0",
                "middle-section": "GalleryItem---middle-section---2hJiq_0",
                middleSection: "GalleryItem---middle-section---2hJiq_0",
                "button-container": "GalleryItem---button-container---1siq__0",
                buttonContainer: "GalleryItem---button-container---1siq__0",
                "image-container": "GalleryItem---image-container---3sN6X_0",
                imageContainer: "GalleryItem---image-container---3sN6X_0",
                button: "GalleryItem---button---1o9xw_0",
                use: "GalleryItem---use---3oKdW_0 GalleryItem---button---1o9xw_0",
                preview: "GalleryItem---preview---2jV-X_0 GalleryItem---button---1o9xw_0",
                delete: "GalleryItem---delete---MzPpG_0 GalleryItem---button---1o9xw_0",
                "meta-info": "GalleryItem---meta-info---2MNUn_0",
                metaInfo: "GalleryItem---meta-info---2MNUn_0",
                name: "GalleryItem---name---1MxSi_0",
                image: "GalleryItem---image---ZOvI9_0",
                "file-info": "GalleryItem---file-info---3srNC_0",
                fileInfo: "GalleryItem---file-info---3srNC_0",
                "file-info-title": "GalleryItem---file-info-title---3mbXI_0",
                fileInfoTitle: "GalleryItem---file-info-title---3mbXI_0",
            };
        },
        26: function (t, e, a) {
            "use strict";
            function n(t) {
                var e = 0,
                    a = 0,
                    n = 0,
                    i = 0;
                return (
                    "detail" in t && (a = t.detail),
                    "wheelDelta" in t && (a = -t.wheelDelta / 120),
                    "wheelDeltaY" in t && (a = -t.wheelDeltaY / 120),
                    "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120),
                    "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((e = a), (a = 0)),
                    (n = e * r),
                    (i = a * r),
                    "deltaY" in t && (i = t.deltaY),
                    "deltaX" in t && (n = t.deltaX),
                    (n || i) && t.deltaMode && (1 == t.deltaMode ? ((n *= s), (i *= s)) : ((n *= o), (i *= o))),
                    n && !e && (e = n < 1 ? -1 : 1),
                    i && !a && (a = i < 1 ? -1 : 1),
                    { spinX: e, spinY: a, pixelX: n, pixelY: i }
                );
            }
            var i = a(71),
                r = 10,
                s = 40,
                o = 800;
            e.a = {
                name: "frame-picker",
                components: { FrameCard: i.a },
                props: { frames: Array, selected: Object },
                data: function () {
                    return { observer: null, cache: {} };
                },
                methods: {
                    imageFor: function (t) {
                        return this.cache[t] && this.cache[t].seen ? this.cache[t].src : null;
                    },
                    scroll: function (t) {
                        var e = t.currentTarget,
                            a = n(t);
                        e.scrollLeft += a.pixelY + a.pixelX;
                    },
                    watchIt: function (t) {
                        var e = t.el,
                            a = t.code;
                        (e.frame_code = a), this.observer.observe(e);
                    },
                },
                watch: {
                    frames: function (t) {
                        var e = this;
                        t.forEach(function (t) {
                            e.cache.hasOwnProperty(t.code) || e.$set(e.cache, t.code, { seen: !1, src: t.thumb_image });
                        });
                    },
                },
                created: function () {
                    var t = this,
                        e = { root: this.$refs.container, rootMargin: "0px 20px 0px 20px", threshold: 0.5 },
                        a = function (e, a) {
                            e.forEach(function (e) {
                                e.isIntersecting && ((t.cache[e.target.frame_code].seen = !0), a.unobserve(e.target));
                            });
                        };
                    this.observer = new IntersectionObserver(a, e);
                },
            };
        },
        262: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { class: t.$style.row, attrs: { title: t.name } }, [
                    a("div", { class: t.$style["image-container"] }, [a("div", { class: t.$style.image, style: { backgroundImage: "url('" + t.thumbnail + "')" } })]),
                    t._v(" "),
                    a("div", { class: t.$style["middle-section"] }, [
                        a("div", { class: t.$style["meta-info"] }, [a("span", { class: t.$style.name }, [t._v(t._s(t.name))])]),
                        t._v(" "),
                        a("small", { class: t.$style["file-info"] }, [
                            a("span", { class: t.$style.dimensions }, [a("span", { class: t.$style["file-info-title"] }, [t._v("Dimensions:")]), t._v("\n        " + t._s(t.width) + " x " + t._s(t.height) + " pixels")]),
                            t._v(" "),
                            a("br"),
                            t._v(" "),
                            a("span", { class: t.$style["upload-date"] }, [a("span", { class: t.$style["file-info-title"] }, [t._v("Uploaded:")]), t._v("\n        " + t._s(t.human_date) + "\n      ")]),
                            t._v(" "),
                            a("br"),
                            t._v(" "),
                            a("span", { class: t.$style["file-size"] }, [a("span", { class: t.$style["file-info-title"] }, [t._v("File Size:")]), t._v("\n        " + t._s(t.file_size) + "\n      ")]),
                        ]),
                    ]),
                    t._v(" "),
                    a("div", { class: t.$style["button-container"] }, [
                        a(
                            "button",
                            {
                                class: t.$style.use,
                                on: {
                                    click: function (e) {
                                        return e.stopPropagation(), e.preventDefault(), t.$emit("use_image");
                                    },
                                },
                            },
                            [t._v("\n      Use for Printing\n    ")]
                        ),
                        t._v(" "),
                        t.can_preview
                            ? a(
                                "button",
                                {
                                    class: t.$style.preview,
                                    on: {
                                        click: function (e) {
                                            return e.stopPropagation(), e.preventDefault(), t.$emit("preview");
                                        },
                                    },
                                },
                                [t._v("\n      Preview (No Printing)\n    ")]
                            )
                            : t._e(),
                        t._v(" "),
                        a(
                            "button",
                            {
                                class: t.$style.delete,
                                on: {
                                    click: function (e) {
                                        return e.stopPropagation(), e.preventDefault(), t.$emit("delete");
                                    },
                                },
                            },
                            [a("i", { staticClass: "fa fa-trash" }), t._v(" Delete\n    ")]
                        ),
                    ]),
                ]);
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        263: function (t, e, a) {
            "use strict";
            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
            }
            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
            }
            a.d(e, "a", function () {
                return f;
            });
            var s = a(15),
                o = a.n(s),
                l = a(423),
                c = a.n(l),
                u = a(107),
                d = a(111),
                m = (function () {
                    function t(t, e) {
                        for (var a = 0; a < e.length; a++) {
                            var n = e[a];
                            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                        }
                    }
                    return function (e, a, n) {
                        return a && t(e.prototype, a), n && t(e, n), e;
                    };
                })(),
                h = ["image/png", "image/jpeg", "image/bmp", "image/x-windows-bmp", "image/tiff", "image/gif"],
                p = (function (t) {
                    function e(t) {
                        return (
                            n(this, e),
                            i(
                                this,
                                (e.__proto__ || Object.getPrototypeOf(e)).call(
                                    this,
                                    "File '" + t + "' is using an unsupported file type. Please convert your image to either jpg,png,tiff and try uploading again, or contact us to see your available options."
                                )
                            )
                        );
                    }
                    return r(e, t), e;
                })(Error),
                _ = (function (t) {
                    function e(t, a) {
                        n(this, e);
                        var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "File size too large. Your File: " + Object(d.a)(t) + ",  Max size: " + Object(d.a)(a)));
                        return (r.bytes = t), (r.byte_limit = a), r;
                    }
                    return r(e, t), e;
                })(Error),
                f = (function () {
                    function t(e) {
                        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
                        if ((n(this, t), !(e instanceof File))) throw new Error("Not a file");
                        (this.file = e),
                            (this.id = "__FILE_UPLOAD__" + Math.random()),
                            (this.progress = 0),
                            (this.size = e.size),
                            (this.name = e.name),
                            (this.cancel_token = null),
                            (this.is_uploading = !1),
                            (this.thumbnail = null),
                            (this.is_usable = !0),
                            (this.byte_limit = a),
                            (this.image = { width: 0, height: 0, src: null }),
                            (this.error = null);
                    }
                    return (
                        m(t, [
                            {
                                key: "cancel",
                                value: function () {
                                    this.cancel_token && this.cancel_token();
                                },
                            },
                            {
                                key: "start",
                                value: function () {
                                    var t = this;
                                    if (!this.is_uploading) {
                                        if (-1 === h.indexOf(this.file.type)) return (this.is_usable = !1), (this.error = new p(this.name)), Promise.reject(this.error);
                                        if (this.size > this.byte_limit) return (this.is_usable = !1), (this.error = new _(this.size, this.byte_limit)), Promise.reject(this.error);
                                        if (
                                            ((this.is_uploading = !0),
                                                Object(d.b)(this.file, 800)
                                                    .then(function (e) {
                                                        (t.is_usable = !0), (t.image = e);
                                                    })
                                                    .catch(function () {
                                                        t.is_usable = !1;
                                                    }),
                                                c()().support)
                                        )
                                            return new Promise(function (e, a) {
                                                var n = null,
                                                    i = { target: "/api/gallery/chunk", chunkRetryInterval: 1e3 },
                                                    r = new c.a(i);
                                                (t.cancel_token = r.cancel),
                                                    r.on("fileAdded", function (t, e) {
                                                        o.a.post("/api/gallery/chunk/init", { file_name: t.file.name, file_size: t.size, chunks: t.chunks.length }).then(function (t) {
                                                            (n = t.data.request_id), (i.query = { request_id: n }), r.upload();
                                                        });
                                                    }),
                                                    r.on("fileProgress", function (e, a, n, i) {
                                                        t.progress = t.is_uploading ? Math.round(100 * e.progress()) : 0;
                                                    }),
                                                    r.on("fileSuccess", function (t) {
                                                        var a = this;
                                                        o.a
                                                            .create()
                                                            .post("/api/gallery/chunk/complete", { request_id: n })
                                                            .then(function (t) {
                                                                (a.is_uploading = !1), e(new u.a(t.data.image));
                                                            })
                                                            .catch(function (t) { });
                                                    }),
                                                    r.on("fileError", function (e, n) {
                                                        (t.is_usable = !1),
                                                            (t.error = n
                                                                ? new Error(JSON.parse(n).message)
                                                                : new Error("An error occured while trying to upload '" + t.name + "'. If this keeps happening, please contact us to see your available options.")),
                                                            a(t.error);
                                                    }),
                                                    r.on("cancel", function () {
                                                        o.a.delete("/api/gallery/chunk/" + n).then(function (t) {
                                                            t.data;
                                                            return console.log;
                                                        });
                                                    }),
                                                    r.addFile(t.file);
                                            });
                                        var e = new FormData();
                                        e.append("file", this.file);
                                        var a = {
                                            cancelToken: new o.a.CancelToken(function (e) {
                                                t.cancel_token = e;
                                            }),
                                            onUploadProgress: function (e) {
                                                t.progress = t.is_uploading ? Math.round((100 * e.loaded) / e.total) : 0;
                                            },
                                        };
                                        return o.a
                                            .post("/api/gallery", e, a)
                                            .then(function (e) {
                                                return (t.is_uploading = !1), new u.a(e.data.image);
                                            })
                                            .catch(function () {
                                                throw (
                                                    ((t.is_usable = !1), (t.error = new Error("An error occured while trying to upload '" + t.name + "'. If this keeps happening, please contact us to see your available options.")), t.error)
                                                );
                                            });
                                    }
                                },
                            },
                        ]),
                        t
                    );
                })();
        },
        264: function (t, e, a) {
            "use strict";
            var n = { image_message: "This is my message" },
                i = {},
                r = {},
                s = {};
            e.a = {
                namespaced: !0,
                state: function () {
                    return n;
                },
                getters: function () {
                    return i;
                },
                actions: function () {
                    return r;
                },
                mutations: function () {
                    return s;
                },
            };
        },
        265: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { class: t.$style.galleryWrapper }, [
                    a(
                        "button",
                        {
                            class: t.$style.galleryButton,
                            attrs: { disabled: !t.enabled },
                            on: {
                                click: function (e) {
                                    return e.preventDefault(), t.showGallery(e);
                                },
                            },
                        },
                        [
                            a("span", { class: t.$style.galleryButtonText }, [a("i", { staticClass: "fa fa-2x fa-cloud-upload" }), t._v(" "), t.selected ? a("span", [t._v(" Replace Image")]) : a("span", [t._v(" Upload Image")])]),
                            t._v(" "),
                            t.uploads.length > 0
                                ? a("span", { class: t.$style.buttonProgress }, [
                                    t._v("\n      Uploading " + t._s(t.total_uploads) + "\n      " + t._s(1 === t.total_uploads ? "file" : "files") + " (" + t._s(t.total_progress) + "%)\n\n      "),
                                    a("span", { class: t.$style.progressContainer }, [a("span", { class: t.$style.progress, style: { width: t.total_progress + "%" } })]),
                                ])
                                : t._e(),
                        ]
                    ),
                    t._v(" "),
                    t.selected
                        ? a(
                            "button",
                            {
                                class: t.$style.removeImageButton,
                                attrs: { disabled: !t.enabled },
                                on: {
                                    click: function (e) {
                                        return e.preventDefault(), t.clearImage(e);
                                    },
                                },
                            },
                            [a("span", { class: t.$style.galleryButtonText }, [a("i", { staticClass: "fa fa-times" }), t._v(" Remove Image\n    ")])]
                        )
                        : t._e(),
                    t._v(" "),
                    a(
                        "div",
                        {
                            directives: [{ name: "show", rawName: "v-show", value: t.is_expanded, expression: "is_expanded" }],
                            class: t.$style.background,
                            on: {
                                click: function (e) {
                                    return e.target !== e.currentTarget ? null : t.hideGallery(e);
                                },
                            },
                        },
                        [
                            a("div", { class: t.$style.window }, [
                                a("div", { class: t.$style.mainContent }, [
                                    a(
                                        "label",
                                        {
                                            class: t.$style.dropZoneContainer,
                                            on: {
                                                dragenter: t.onDragEnter,
                                                dragleave: t.onDragLeave,
                                                dragover: function (t) {
                                                    t.preventDefault();
                                                },
                                                drop: function (e) {
                                                    return e.preventDefault(), t.onDrop(e);
                                                },
                                            },
                                        },
                                        [
                                            a("input", {
                                                staticStyle: { display: "none" },
                                                attrs: { type: "file", accept: "image/png, image/jpeg, image/bmp, image/x-windows-bmp, image/tiff, image/gif", multiple: "" },
                                                on: { change: t.onFileInputChange },
                                            }),
                                            t._v(" "),
                                            a("span", { class: t.$style.dropZone }, [
                                                a("i", { staticClass: "fa fa-cloud-upload fa-5x", class: t.$style.icon }),
                                                t._v(" "),
                                                a("span", { class: t.$style.dropZoneTextContainer }, [
                                                    a("span", [t._v("Drag an image or click to begin uploading")]),
                                                    t._v(" "),
                                                    a("span", [t._v("Accepted file types: JPG TIFF PNG BMP")]),
                                                    t._v(" "),
                                                    a("span", [t._v("Max file size: " + t._s(t.formatted_max_file_size))]),
                                                    t._v(" "),
                                                    a("span", [t._v("For larger files or other formats, contact us")]),
                                                ]),
                                            ]),
                                        ]
                                    ),
                                    t._v(" "),
                                    t.uploads.length > 0
                                        ? a(
                                            "div",
                                            { class: t.$style.uploadingFiles },
                                            [
                                                a("h2", { class: t.$style.title }, [
                                                    t._v("\n            Upload Queue\n            "),
                                                    a("small", [t._v("\n              (" + t._s((1 === t.current_uploads.length ? "1 file" : t.current_uploads.length + " files") + " remaining") + ")\n            ")]),
                                                ]),
                                                t._v(" "),
                                                t._l(t.uploads, function (e) {
                                                    return a("gallery-upload-item", {
                                                        key: e.id,
                                                        attrs: { name: e.name, src: e.image.src, is_usable: e.is_usable, progress: e.progress, error: e.error, can_preview: t.$attrs.can_preview },
                                                        on: {
                                                            preview: function (a) {
                                                                return t.previewUpload(e);
                                                            },
                                                            use_image: function (a) {
                                                                return t.selectTmpImage(e);
                                                            },
                                                            cancel_upload: function (a) {
                                                                return t.cancelUpload(e);
                                                            },
                                                        },
                                                    });
                                                }),
                                            ],
                                            2
                                        )
                                        : t._e(),
                                    t._v(" "),
                                    a(
                                        "div",
                                        { class: t.$style.readyFiles },
                                        [
                                            a("h2", { class: t.$style.title }, [
                                                t._v("\n            Saved Images\n\n            "),
                                                t.fetching
                                                    ? a("small", [t._v("\n              Checking for saved images...\n              "), a("i", { staticClass: "fa fa-spinner fa-pulse" })])
                                                    : t.images.length > 0
                                                        ? a("small", [t._v("\n              (" + t._s(1 === t.images.length ? "1 file" : t.images.length + " files") + ")\n            ")])
                                                        : t._e(),
                                            ]),
                                            t._v(" "),
                                            0 === t.images.length
                                                ? a("p", { class: t.$style.noSavedImagesMessage }, [t._v("\n            You have no saved images.\n          ")])
                                                : t._l(t.sorted_images, function (e) {
                                                    return a("gallery-item", {
                                                        key: e.id,
                                                        attrs: { image_data: e, name: e.name, size: e.size, thumbnail: e.images.thumbnail, width: e.width, height: e.height, date: e.created_at.date, can_preview: t.$attrs.can_preview },
                                                        on: {
                                                            preview: function (a) {
                                                                return t.previewImage(e);
                                                            },
                                                            use_image: function (a) {
                                                                return t.selectImage(e);
                                                            },
                                                            delete: function (a) {
                                                                return t.deleteImage(e);
                                                            },
                                                        },
                                                    });
                                                }),
                                        ],
                                        2
                                    ),
                                ]),
                                t._v(" "),
                                a(
                                    "div",
                                    {
                                        class: t.$style.closeButton,
                                        on: {
                                            click: function (e) {
                                                return e.preventDefault(), t.hideGallery(e);
                                            },
                                        },
                                    },
                                    [a("i", { staticClass: "fa fa-times" }), t._v(" Close Gallery\n      ")]
                                ),
                            ]),
                        ]
                    ),
                ]);
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        266: function (t, e) { },
        267: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "progress" }, [
                    a("div", { staticClass: "progress-bar progress-bar-striped", class: ["progress-bar-" + t.band.bar], style: { width: t.quality + "%" } }, [
                        a("span", { attrs: { id: "print-quality-text" } }, [t._v(t._s(t.band.label))]),
                    ]),
                ]);
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        268: function (t, e, a) {
            "use strict";
            function n(t) {
                a(269);
            }
            var i = a(144),
                r = a(270),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        269: function (t, e) { },
        27: function (t, e, a) {
            "use strict";
            e.a = {
                props: { image: String, code: String, width: Number, rate: Number, depth: Number, rebate: Number, material: String, description: String, selected: { type: Boolean, default: !1 }, valid: { type: Boolean, default: !0 } },
                methods: {
                    onClick: function (t) {
                        this.$emit("click", t);
                    },
                },
                mounted: function () {
                    this.$emit("mounted", { el: this.$el, code: this.code });
                },
            };
        },
        270: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "tab-picker" }, [
                    a(
                        "ul",
                        { staticClass: "tab-list" },
                        t._l(t.tabs, function (e) {
                            return a(
                                "li",
                                {
                                    staticClass: "tab-item",
                                    attrs: { id: e.id },
                                    on: {
                                        click: function (a) {
                                            return t.$emit("change", e);
                                        },
                                    },
                                },
                                [a("span", { class: { "current-tab": t.isEqual(t.selected_tab, e) } }, [t._v(t._s(e.label))])]
                            );
                        }),
                        0
                    ),
                    t._v(" "),
                    a(
                        "div",
                        { staticClass: "card tab-picker__body" },
                        [
                            t.selected_tab.disabled ? a("div", { staticClass: "tab-picker__body--disabled" }, [t._v("\n      " + t._s(t.selected_tab.disabled_reason) + "\n    ")]) : t._e(),
                            t._v(" "),
                            a("keep-alive", [t.selected_tab ? a(t.selected_tab.component, t._g(t._b({ tag: "component", class: { nope: t.selected_tab.disabled } }, "component", t.properties, !1), t.listeners)) : t._e()], 1),
                        ],
                        1
                    ),
                ]);
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        271: function (t, e) { },
        272: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "list-bundle" }, [
                    a("h4", { staticClass: "list-bundle__heading" }, [t._v(t._s(t.heading))]),
                    t._v(" "),
                    a(
                        "ul",
                        t._l(t.list, function (e) {
                            return a("li", { staticClass: "list-bundle__item" }, [a("i", { staticClass: "list-bundle__icon", class: [t.icon] }), t._v(" " + t._s(e) + "\n    ")]);
                        }),
                        0
                    ),
                ]);
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        273: function (t, e, a) {
            "use strict";
            function n(t) {
                a(274);
            }
            var i = a(147),
                r = a(277),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        274: function (t, e) { },
        275: function (t, e) { },
        276: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a(
                    "div",
                    { staticClass: "matboard-circle", class: { "matboard-circle--selected": t.selected, "matboard-circle--invalid": !t.valid }, style: t.style, attrs: { title: t.mat.code + " " + t.mat.name } },
                    [t.selected ? a("span", { staticClass: "fa fa-check matboard-circle__check" }) : t._e(), t._v(" "), t._t("default")],
                    2
                );
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        277: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a(
                    "div",
                    { staticClass: "matboard-grid", staticStyle: { "min-height": "125px" } },
                    [
                        t.heading ? a("h4", [t._v(t._s(t.heading))]) : t._e(),
                        t._v(" "),
                        t._l(t.sorted_mats, function (e) {
                            return a("mat-circle", {
                                key: e.code,
                                attrs: { mat: e, selected: t.selected === e },
                                nativeOn: {
                                    click: function (a) {
                                        return t.$emit("change", { mat: e });
                                    },
                                },
                            });
                        }),
                    ],
                    2
                );
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        278: function (t, e, a) {
            "use strict";
            function n(t) {
                a(279);
            }
            var i = a(150),
                r = a(280),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, "data-v-0998d9e8", null);
            e.a = l.exports;
        },
        279: function (t, e) { },
        28: function (t, e) {
            t.exports = cart;
        },
        280: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "tabbed-mat-picker" }, [
                    a("h4", { staticStyle: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, [
                        a("span", [
                            t.heading ? a("span", { staticStyle: { display: "block", "margin-bottom": "3px" } }, [t._v("\n        " + t._s(t.heading) + "\n      ")]) : t._e(),
                            t._v(" "),
                            t.show_vgroove
                                ? a(
                                    "label",
                                    [
                                        a("input", {
                                            directives: [{ name: "model", rawName: "v-model", value: t.groove, expression: "groove" }],
                                            attrs: { type: "checkbox" },
                                            domProps: { checked: Array.isArray(t.groove) ? t._i(t.groove, null) > -1 : t.groove },
                                            on: {
                                                change: function (e) {
                                                    var a = t.groove,
                                                        n = e.target,
                                                        i = !!n.checked;
                                                    if (Array.isArray(a)) {
                                                        var r = t._i(a, null);
                                                        n.checked ? r < 0 && (t.groove = a.concat([null])) : r > -1 && (t.groove = a.slice(0, r).concat(a.slice(r + 1)));
                                                    } else t.groove = i;
                                                },
                                            },
                                        }),
                                        t._v(" V Groove\n        "),
                                        a("tool-tip", [t._v("A vgroove is a line cut around the opening which helps bring focus\n          to your image")]),
                                    ],
                                    1
                                )
                                : t._e(),
                        ]),
                        t._v(" "),
                        t.selected
                            ? a(
                                "span",
                                { staticClass: "selected-preview" },
                                [
                                    a("span", { staticClass: "selected-preview__text-container" }, [
                                        a("span", [a("span", { staticStyle: { "font-weight": "500" } }, [t._v(t._s(t.selected.code))]), t._v("\n          " + t._s(t.selected.name))]),
                                        t._v(" "),
                                        a("span", { staticClass: "selected-preview__text-container__size" }, [
                                            t._v("Max Size:\n          "),
                                            a("span", { staticStyle: { "font-weight": "500" } }, [t._v(t._s(t.selected.max_width) + " x " + t._s(t.selected.max_height) + " cm")]),
                                        ]),
                                    ]),
                                    t._v(" "),
                                    a("mat-circle", { staticStyle: { "margin-left": "7px" }, attrs: { mat: t.selected } }),
                                ],
                                1
                            )
                            : t._e(),
                    ]),
                    t._v(" "),
                    a(
                        "ul",
                        { staticClass: "tabbed-mat-picker__tabs" },
                        t._l(t.mat_categories, function (e) {
                            return t.mat_groups[e.name]
                                ? a(
                                    "li",
                                    {
                                        class: { "current-tab": e.name === t.current_tab },
                                        on: {
                                            click: function (a) {
                                                return a.preventDefault(), t.updateTab(e.name);
                                            },
                                        },
                                    },
                                    [a("span", [t._v(t._s(e.name))])]
                                )
                                : t._e();
                        }),
                        0
                    ),
                    t._v(" "),
                    t.description ? a("p", { staticStyle: { margin: "10px 0" } }, [t._v(t._s(t.description))]) : t._e(),
                    t._v(" "),
                    a(
                        "div",
                        { staticClass: "matboard-grid tabbed-mat-picker__grid", staticStyle: { "min-height": "125px" } },
                        t._l(t.mat_groups[t.current_tab], function (e) {
                            return a(
                                "mat-circle",
                                {
                                    key: e.code,
                                    attrs: { mat: e, selected: t.selected && e && t.selected.code === e.code },
                                    nativeOn: {
                                        click: function (a) {
                                            return t.$emit("change", { mat: e });
                                        },
                                    },
                                },
                                [t.names ? a("div", { staticClass: "matboard-circle__name" }, [t._v(t._s(e.code))]) : t._e()]
                            );
                        }),
                        1
                    ),
                ]);
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        281: function (t, e, a) {
            "use strict";
            e.a = {
                install: function (t, e) {
                    (t.prototype.$formatPrice = function (t) {
                        return "$" + t.toFixed(2);
                    }),
                        t.mixin({
                            filters: {
                                price: function (t) {
                                    return "number" != typeof t || isNaN(t) ? t : "$" + t.toFixed(2);
                                },
                            },
                        });
                },
            };
        },
        30: function (t, e) { },
        31: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("transition", { on: { enter: t.animateEnter, leave: t.animateLeave } }, [
                    a("div", { staticClass: "alert-box", class: "alert-box--" + t.type }, [
                        a("div", { staticClass: "alert-box__icon" }, [a("i", { staticClass: "fa fa-2x", class: t.icon })]),
                        t._v(" "),
                        a("div", { staticClass: "alert-box__text" }, [t._t("default")], 2),
                    ]),
                ]);
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        32: function (t, e, a) {
            "use strict";
            function n(t) {
                a(33);
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = a(13),
                r = a(34),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.default = l.exports;
        },
        33: function (t, e) { },
        34: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a(
                    "div",
                    { staticClass: "card", attrs: { id: "fs-checkout-box" } },
                    [
                        t._t("top"),
                        t._v(" "),
                        a("div", { staticClass: "columns", attrs: { id: "checkout-row" } }, [
                            a("div", { staticClass: "column", staticStyle: { "text-align": "center" }, attrs: { id: "qty-price" } }, [
                                a("div", { attrs: { id: "quantity-container" } }, [
                                    a("label", { attrs: { id: "quantity-label", for: "product-quantity" } }, [t._v("Quantity:")]),
                                    t._v(" "),
                                    a("input", {
                                        staticClass: "text-center",
                                        attrs: { type: "number", id: "product-quantity", step: "1", min: "1", "aria-label": "Product Quantity" },
                                        domProps: { value: t.quantity },
                                        on: {
                                            input: function (e) {
                                                t.$emit("change-quantity", parseInt(e.target.value));
                                            },
                                        },
                                    }),
                                ]),
                                t._v(" "),
                                a("div", { staticClass: "column", attrs: { id: "checkout-total" } }, [
                                    a("span", { attrs: { id: "label-total" } }, [t._v("Total:")]),
                                    t._v(" "),
                                    t.fetching
                                        ? a("span", { attrs: { id: "total-quantity-price" } }, [a("i", { staticClass: "fa fa-pulse fa-spinner" })])
                                        : a("span", { attrs: { id: "total-quantity-price" } }, [t._v(t._s(t.total_price))]),
                                ]),
                            ]),
                            t._v(" "),
                            a("div", { staticClass: "column is-full-mobile is-one-third-tablet" }, [t._t("cart-button")], 2),
                        ]),
                        t._v(" "),
                        t.$slots.default ? a("div", { staticClass: "dashed-break" }) : t._e(),
                        t._v(" "),
                        t._t("default"),
                    ],
                    2
                );
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        35: function (t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var n = a(14),
                i = a(36),
                r = a(0),
                s = r(n.a, i.a, !1, null, null, null);
            e.default = s.exports;
        },
        36: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [
                    t.can_checkout
                        ? a(
                            "button",
                            {
                                staticClass: "btn btn-success btn-lg btn-block",
                                attrs: { disabled: t.fetching },
                                on: {
                                    click: function (e) {
                                        return e.preventDefault(), t.$emit("add-to-cart", e);
                                    },
                                },
                            },
                            [a("i", { staticClass: "fa fa-shopping-cart" }), t._v(" Add to cart\n    "), t._t("default")],
                            2
                        )
                        : a(
                            "div",
                            {
                                on: {
                                    click: function (e) {
                                        return e.preventDefault(), t.$emit("add-to-cart", e);
                                    },
                                },
                            },
                            [t._m(0)]
                        ),
                ]);
            },
                i = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("button", { staticClass: "btn btn-success btn-lg btn-block", staticStyle: { "pointer-events": "none" }, attrs: { disabled: "" } }, [
                            a("i", { staticClass: "fa fa-shopping-cart" }),
                            t._v(" Add to cart\n    "),
                        ]);
                    },
                ],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        381: function (t, e, a) {
            "use strict";
            function n(t) {
                return function () {
                    var e = t.apply(this, arguments);
                    return new Promise(function (t, a) {
                        function n(i, r) {
                            try {
                                var s = e[i](r),
                                    o = s.value;
                            } catch (t) {
                                return void a(t);
                            }
                            if (!s.done)
                                return Promise.resolve(o).then(
                                    function (t) {
                                        n("next", t);
                                    },
                                    function (t) {
                                        n("throw", t);
                                    }
                                );
                            t(o);
                        }
                        return n("next");
                    });
                };
            }
            var i = a(25),
                r = a.n(i),
                s = a(131),
                o = a(132),
                l = a(79),
                c = a.n(l),
                u = a(383),
                d = a.n(u),
                m = a(184),
                h = a.n(m),
                p = a(185),
                _ = a.n(p),
                f = a(236),
                g = a(859),
                v = a(268),
                b = a(32),
                y = a(42),
                w = a(11),
                k = a(51),
                C = a(7),
                x = a(964),
                E = a(967),
                P = a(971),
                S = a(974),
                O = a(977),
                I = a(35),
                A = a(980),
                $ = a(62),
                T = a(48),
                F = a(118),
                G = a(190),
                M =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var a = arguments[e];
                            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
                        }
                        return t;
                    };
            e.a = {
                components: {
                    ImageQuality: G.a,
                    UserGallery: F.a,
                    FrameEngine: f.a,
                    Dimensions: g.a,
                    TabPicker: v.a,
                    Checkout: b.default,
                    ProductSummary: y.default,
                    AlertBox: w.default,
                    Overlay: k.default,
                    Tooltip: C.default,
                    AddToCartButton: I.default,
                    MobilePreviewBar: T.default,
                },
                name: "app",
                data: function () {
                    return { is_checking_out: !1, selected_tab: null };
                },
                computed: M(
                    {
                        pack_size: {
                            get: function () {
                                return this.pack_quantity;
                            },
                            set: function (t) {
                                this.updatePackQuantity({ quantity: t });
                            },
                        },
                        image_uploading: function () {
                            return this.image && 0 === this.image.id.indexOf("__FILE_UPLOAD__");
                        },
                        tabs: function () {
                            var t = this,
                                e = function () {
                                    return { disabled: t.$store.getters.is_float_frame, disabled_reason: "This option is not available with a float frame selected." };
                                };
                            return [
                                { label: "Frames", component: E.a, id: "frames-tab" },
                                M({ label: "Mats", component: P.a, id: "mats-tab" }, e()),
                                M({ label: "Glass & Backing", component: x.a, id: "glass-backing-tab" }, e()),
                                M({ label: "Printing", component: S.a, id: "printing-tab" }, e()),
                                M({ label: "Extras", component: O.a, id: "extras-tab" }, e()),
                            ];
                        },
                        tab_props: function () {
                            if (!this.selected_tab) return null;
                            switch (this.selected_tab.label) {
                                case "Frames":
                                    return { frame_check: this.frame_check, selected_frame: this.frame, glass_width: this.glass_width, glass_height: this.glass_height, tabs: this.frame_tabs };
                                case "Mats":
                                    return {
                                        mats: this.matboards,
                                        top_mat: this.top_mat,
                                        bottom_mat: this.bottom_mat,
                                        unit_type: this.unit_type,
                                        opening_type: this.opening_type,
                                        number_of_mats: this.number_of_mats,
                                        has_printing: this.has_printing,
                                        border_alignment_mode: this.mat_width_type,
                                        show_custom: !0,
                                        show_uniform: !0,
                                        vgroove: this.vgroove,
                                        min_mats: 0,
                                    };
                                case "Glass & Backing":
                                    return { glass_types: this.glass_types, backing_types: this.backing_types, glass: this.glass, backing: this.backing, hanger: this.hanger, hanger_types: this.hanger_types };
                                case "Printing":
                                    return { paper_types: this.paper_types, paper: this.paper };
                                case "Extras":
                                    var t = !("none" !== this.paper && this.backing.toLowerCase().includes("non_adhesive")),
                                        e = !this.glass.toLowerCase().includes("non_reflective");
                                    return { allow_spacer: t && e, spacer: this.spacer, slip_frames: this.slips, slip: this.slip };
                            }
                        },
                        tab_listeners: function () {
                            var t = this;
                            if (!this.selected_tab) return null;
                            switch (this.selected_tab.label) {
                                case "Frames":
                                    return {
                                        change_frame: function (e) {
                                            return t.$store.dispatch("setCurrentFrame", { frame: e });
                                        },
                                        remove_frame: function () {
                                            return t.$store.commit($.n, { frame: null });
                                        },
                                    };
                                case "Mats":
                                    return {
                                        change_number_of_mats: function (e) {
                                            return t.$store.commit($.v, { number: e });
                                        },
                                        change_mat: this.updateMat,
                                        change_opening_type: this.updateOpeningType,
                                        change_width_type: function (e) {
                                            return t.$store.commit($.u, { width_type: e });
                                        },
                                        change_vgroove: function (e) {
                                            return t.$store.dispatch("updateVgroove", e);
                                        },
                                    };
                                case "Glass & Backing":
                                    return { change_glass: this.updateGlass, change_backing: this.updateBacking, change_hanger: this.updateHanger };
                                case "Printing":
                                    return { change_paper: this.updatePaper };
                                case "Extras":
                                    return { change_spacer: this.updateSpacer, change_slip: this.updateSlip, change_hanger: this.updateHanger };
                            }
                        },
                        can_checkout: function () {
                            return this.errors.length <= 0 && +this.price_breakdown.total > 0 && !this.image_uploading;
                        },
                    },
                    Object(o.e)({
                        fetching_price: function (t) {
                            return t.prices.fetching_price;
                        },
                        quantity: function (t) {
                            return t.checkout.quantity;
                        },
                        frame_tabs: function (t) {
                            return t.frames.frames.filter(function (t) {
                                return "slips" !== t.key;
                            });
                        },
                        slips: function (t) {
                            return t.frames.frames.find(function (t) {
                                return "slips" === t.key;
                            }).frames;
                        },
                        paper: function (t) {
                            return t.paper;
                        },
                        paper_types: function (t) {
                            return t.paper_types;
                        },
                        glass_types: function (t) {
                            return t.glass_types;
                        },
                        backing_types: function (t) {
                            return t.backing_types;
                        },
                        number_of_mats: function (t) {
                            return t.mats.number_of_mats;
                        },
                        opening_type: function (t) {
                            return t.mats.opening_type;
                        },
                        mat_width_type: function (t) {
                            return t.mats.mat_width_type;
                        },
                        vgroove: function (t) {
                            return t.mats.vgroove;
                        },
                        aspect_locked: function (t) {
                            return t.image_dimensions.aspect_locked;
                        },
                        image: function (t) {
                            return t.image_dimensions.selected_image;
                        },
                        image_width: function (t) {
                            return t.image_dimensions.image_width;
                        },
                        image_height: function (t) {
                            return t.image_dimensions.image_height;
                        },
                        image_size_presets: function (t) {
                            return t.image_dimensions.image_size_presets;
                        },
                        slip: function (t) {
                            return t.extras.slip;
                        },
                        spacer: function (t) {
                            return t.extras.spacer;
                        },
                        hanger: function (t) {
                            return t.extras.hanger;
                        },
                        pack_quantity: function (t) {
                            return t.pack_quantity;
                        },
                        bulk_options: function (t) {
                            return t.bulk_options;
                        },
                    }),
                    Object(o.c)([
                        "fc_frame",
                        "fc_mats",
                        "fc_image",
                        "fc_slip",
                        "fc_placeholder_text",
                        "glass_width",
                        "glass_height",
                        "top_mat",
                        "bottom_mat",
                        "unit_type",
                        "summary",
                        "price_breakdown",
                        "frame",
                        "glass",
                        "backing",
                        "aspect_ratio",
                        "has_printing",
                        "hanger_types",
                        "is_float_frame",
                        "matboards",
                    ]),
                    Object(o.c)({ dimension_check: "validation/dimension", frame_check: "validation/frame", errors: "validation/all" })
                ),
                methods: M(
                    {
                        previewImage: function (t) {
                            var e = t.image;
                            this.$store.dispatch("previewImage", { image: e }), this.setOpenTabFromId("printing-tab");
                        },
                        updateImage: function (t) {
                            var e = t.image;
                            this.$store.dispatch("updateImage", { image: e }), this.setOpenTabFromId("printing-tab");
                        },
                        mergeImageData: function (t) {
                            var e = t.image_data;
                            this.$store.commit($.j, { image_data: e });
                        },
                        clearImage: function () {
                            this.$store.commit($.i);
                        },
                        deleteImage: function (t) {
                            var e = t.id;
                            this.$store.commit($.b, { id: e });
                        },
                        handleSummaryClick: function (t) {
                            var e = t.heading,
                                a = { Frame: "frames-tab", Glass: "glass-backing-tab", Backing: "glass-backing-tab", Hanger: "glass-backing-tab", "Mat (Top)": "mats-tab", "Mat (Bottom)": "mats-tab", Printing: "printing-tab" },
                                n = document.getElementById(a[e]);
                            n && (this.setOpenTabFromId(n.id), c()(n, { offset: this.scroll_offset }));
                        },
                        setOpenTab: function (t) {
                            this.selected_tab = t;
                        },
                        setOpenTabFromId: function (t) {
                            this.selected_tab = this.tabs.find(function (e) {
                                return e.id === t;
                            });
                        },
                    },
                    Object(o.d)({ updateMat: $.t, updateGlass: $.o, updateBacking: $.m, updateOpeningType: $.w, updateImageWidth: $.s, updateImageHeight: $.r, updateUnitType: $.C, updateSlip: $.A, updateSpacer: $.B, updateHanger: $.p }),
                    Object(o.b)(["updateDimensions", "updatePaper", "fetchBulkOptions", "updatePackQuantity"]),
                    {
                        updateQuantity: function (t) {
                            (t = Math.max(1, t)), this.$store.commit($.z, { quantity: t });
                        },
                        addToCart: (function () {
                            function t() {
                                return e.apply(this, arguments);
                            }
                            var e = n(
                                regeneratorRuntime.mark(function t() {
                                    var e, a, n, i, r, s, o;
                                    return regeneratorRuntime.wrap(
                                        function (t) {
                                            for (; ;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        if (this.can_checkout) {
                                                            t.next = 3;
                                                            break;
                                                        }
                                                        return c()(this.$refs.checkout.$el, { offset: -15 }), t.abrupt("return");
                                                    case 3:
                                                        if (((t.prev = 3), null === this.image || "none" !== this.paper)) {
                                                            t.next = 10;
                                                            break;
                                                        }
                                                        return (
                                                            (t.next = 7),
                                                            _()({
                                                                type: "warning",
                                                                title: "Please Confirm",
                                                                html: "You have uploaded an image but have selected <b>'No Printing'</b>. Is this correct?",
                                                                showCancelButton: !0,
                                                                confirmButtonText: "Yes, Add To Cart",
                                                                confirmButtonColor: "#5CB85C",
                                                                cancelButtonText: "No, Show me printing options",
                                                                cancelButtonColor: "#3085D6",
                                                            })
                                                        );
                                                    case 7:
                                                        return (
                                                            this.clearImage(),
                                                            (t.next = 10),
                                                            new Promise(function (t) {
                                                                return setTimeout(t, 500);
                                                            })
                                                        );
                                                    case 10:
                                                        t.next = 16;
                                                        break;
                                                    case 12:
                                                        return (
                                                            (t.prev = 12),
                                                            (t.t0 = t.catch(3)),
                                                            "cancel" === t.t0 && (e = document.getElementById("printing-tab")) && (this.setOpenTabFromId(e.id), c()(e, { offset: this.scroll_offset })),
                                                            t.abrupt("return")
                                                        );
                                                    case 16:
                                                        return (this.is_checking_out = !0), (t.prev = 17), (t.next = 20), this.$store.dispatch("addToCart");
                                                    case 20:
                                                        return (
                                                            (a = t.sent),
                                                            (t.next = 23),
                                                            _()({
                                                                type: "success",
                                                                title: "Success!",
                                                                text: "Your item has been added to your cart.",
                                                                showCancelButton: !0,
                                                                confirmButtonText: "Go to cart",
                                                                cancelButtonText: "Continue Shopping",
                                                            })
                                                        );
                                                    case 23:
                                                        (n = t.sent),
                                                            !0 === n && (window.location.href = "/shopping-cart"),
                                                            (i = a.total),
                                                            (r = a.item_count),
                                                            (s = document.querySelector("[data-cart-product-units]")),
                                                            s && (s.innerHTML = r),
                                                            (o = document.querySelector("[data-cart-total-price]")),
                                                            o && (o.innerHTML = i.toFixed(2)),
                                                            (t.next = 38);
                                                        break;
                                                    case 32:
                                                        if (((t.prev = 32), (t.t1 = t.catch(17)), "cancel" !== t.t1)) {
                                                            t.next = 36;
                                                            break;
                                                        }
                                                        return t.abrupt("return");
                                                    case 36:
                                                        return (
                                                            (t.next = 38),
                                                            _()({
                                                                type: "error",
                                                                title: "Uh oh!",
                                                                html: 'An error occured while trying to add your product to cart.<br/>Please refresh the page and try again',
                                                                confirmButtonText: "Ok",
                                                            })
                                                        );
                                                    case 38:
                                                        return (t.prev = 38), (this.is_checking_out = !1), t.finish(38);
                                                    case 41:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                        [
                                            [3, 12],
                                            [17, 32, 38, 41],
                                        ]
                                    );
                                })
                            );
                            return t;
                        })(),
                        startTour: function () {
                            d.a.startTour(Object(A.a)(), 0);
                        },
                    }
                ),
                created: function () {
                    var t = this;
                    this.fetchBulkOptions(),
                        (this.selected_tab = this.tabs[0]),
                        this.$store.dispatch("fetchMats").then(function () {
                            var e = {};
                            window.location.search.length > 0 && Object.assign(e, h.a.parse(window.location.search.substring(1)));
                            var a = {
                                opening_width: 10.2,
                                opening_height: 15.3,
                                frame: "224F",
                                glass: "CLEAR",
                                backing: "MDF",
                                paper: "none",
                                spacer: !1,
                                slip: null,
                                top_mat: null,
                                bottom_mat: null,
                                vgroove: !1,
                                hanger: "HANGER_STANDBACK",
                                image_overlap: "true",
                                image_id: null,
                                units: "cm",
                                is_pack: !1,
                                pack_quantity: null,
                            },
                                n = Object.assign({}, a);
                            for (var i in n) e.hasOwnProperty(i) && (n[i] = e[i]);
                            e.image_size && (n.image_size = e.image_size), t.$store.dispatch("loadDefaults", { original: a, obj: n });
                        });
                },
                mounted: function () {
                    var t = this,
                        e = r()(function (t) {
                            return t.dispatch("fetchPrice");
                        }, 321);
                    this.$store.watch(
                        function (t, e) {
                            return e.request_object;
                        },
                        function (a, n) {
                            var i = Object.keys(Object(s.a)(a.items.product, n.items.product)),
                                r = ["data.top_mat.code", "data.bottom_mat.code", "data.opening_type", "quantity"],
                                o = !0,
                                l = !1,
                                c = void 0;
                            try {
                                for (var u, d = i[Symbol.iterator](); !(o = (u = d.next()).done); o = !0) {
                                    var m = u.value;
                                    if (-1 === r.indexOf(m)) {
                                        e(t.$store);
                                        break;
                                    }
                                }
                            } catch (t) {
                                (l = !0), (c = t);
                            } finally {
                                try {
                                    !o && d.return && d.return();
                                } finally {
                                    if (l) throw c;
                                }
                            }
                        }
                    ),
                        this.$store.watch(
                            function (t, e) {
                                return { hanger_types: e.hanger_types, hanger: t.extras.hanger };
                            },
                            function (e) {
                                var a = e.hanger,
                                    n = e.hanger_types;
                                if (
                                    !1 ===
                                    n.find(function (t) {
                                        return t.key === a;
                                    }).enabled
                                ) {
                                    var i = n.find(function (t) {
                                        return !0 === t.enabled;
                                    });
                                    t.$store.commit($.p, { hanger: i.key });
                                }
                            }
                        );
                },
            };
        },
        385: function (t, e, a) {
            "use strict";
            var n = a(118),
                i = a(190),
                r = a(7);
            e.a = {
                components: { UserGallery: n.a, ImageQuality: i.a, Tooltip: r.default },
                props: {
                    image_width: Number,
                    image_height: Number,
                    unit_type: { type: String, default: "cm" },
                    aspect_locked: { type: Boolean, default: !1 },
                    aspect_ratio: { type: Number, default: 11 },
                    presets: Array,
                    image: Object,
                    valid_dimensions: { type: Boolean, default: !0 },
                },
                data: function () {
                    return { preset: null, can_show_slot: !1 };
                },
                watch: {
                    preset: function (t, e) {
                        t && this.loadPresetSize(t);
                    },
                },
                computed: {
                    a_presets: function () {
                        return this.presets.filter(function (t) {
                            return t.label.toLowerCase().startsWith("a");
                        });
                    },
                    b_presets: function () {
                        return this.presets.filter(function (t) {
                            return t.label.toLowerCase().startsWith("b");
                        });
                    },
                    numeric_presets: function () {
                        return this.presets.filter(function (t) {
                            return /\d+/.test(t.label.toLowerCase()[0]);
                        });
                    },
                    has_image: function () {
                        return !!this.image;
                    },
                    width: function () {
                        return this.$getScaled(this.image_width);
                    },
                    height: function () {
                        return this.$getScaled(this.image_height);
                    },
                    units: {
                        get: function () {
                            return this.unit_type;
                        },
                        set: function (t) {
                            this.$emit("change_units", { unit_type: t });
                        },
                    },
                    min_dimension_message: function () {
                        return "Min: " + this.$getScaled(10) + " x " + this.$getScaled(10) + " " + this.units + ", Max: " + this.$getScaled(101.5) + " x " + this.$getScaled(152.5) + " " + this.units;
                    },
                },
                methods: {
                    updateWidth: function (t) {
                        (this.preset = null), (t = Math.min(this.$setScaled(t), 999.99)), this.aspect_locked && this.emitHeight(t / this.aspect_ratio), this.emitWidth(t);
                    },
                    updateHeight: function (t) {
                        (this.preset = null), (t = Math.min(this.$setScaled(t), 999.99)), this.aspect_locked && this.emitWidth(t * this.aspect_ratio), this.emitHeight(t);
                    },
                    emitWidth: function (t) {
                        this.$emit("change_width", { width: t });
                    },
                    emitHeight: function (t) {
                        this.$emit("change_height", { height: t });
                    },
                    loadPresetSize: function (t) {
                        var e = t.width,
                            a = t.height;
                        (e || a) && this.$emit("change_dimensions", { width: e, height: a });
                    },
                },
            };
        },
        40: function (t, e) { },
        41: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a(
                    "button",
                    {
                        ref: "button",
                        staticClass: "tooltip__button",
                        attrs: { tabindex: "-1" },
                        on: {
                            click: function (e) {
                                e.preventDefault(), (t.display = !t.display);
                            },
                        },
                    },
                    [
                        a("div", { ref: "tooltip", staticClass: "tooltip__content", staticStyle: { display: "none", opacity: "0" } }, [a("span", [t._t("default")], 2)]),
                        t._v(" "),
                        a("i", { ref: "icon", staticClass: "fa fa-question-circle fa-2x", attrs: { "aria-hidden": "true" } }),
                    ]
                );
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        42: function (t, e, a) {
            "use strict";
            function n(t) {
                a(43);
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = a(19),
                r = a(47),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.default = l.exports;
        },
        424: function (t, e, a) {
            "use strict";
            function n(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
                    return a;
                }
                return Array.from(t);
            }
            var i = a(145),
                r = a(7),
                s = a(183),
                o = a(132),
                l =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var a = arguments[e];
                            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
                        }
                        return t;
                    },
                c = {
                    CLEAR: ["2mm thick", "Cost effective", "Available in very large sizes"],
                    PERSPEX: ["2mm thick", "Optical grade (clear as glass)", "Highly durable", "Very light", "94% UV resistant"],
                    NON_REFLECTIVE: ["2mm thick", "Reduces glare and reflections", "Suitable for highly lit rooms", "Matte finish"],
                    UV_CLEAR: ["2.5mm thick", "99% UV resistant", "Conservation grade", "Protects artworks from fading"],
                    UV_NON_REFLECTIVE: ["2.5mm thick", "99% UV resistant", "Conservation grade", "Protects artworks from fading", "Reduces glare and reflections", "Matte finish"],
                    none: ["Cut and join, empty frame", "Frame your protected canvas and artworks"],
                },
                u = {
                    MDF: ["Great value for money", "Rigid and durable", "Can swap out images at any time"],
                    SELF_ADHESIVE_FOAMCORE: ["Acid-Free to protect image", "Very light", "Allows for flattest mounting of image"],
                    NON_ADHESIVE_FOAMCORE: ["Acid-Free to protect image", "Very light", "Can swap out images more easily"],
                    none: [],
                };
            e.a = {
                components: { ListBundle: i.a, Tooltip: r.default, Modal: s.a },
                props: { glass_types: Array, backing_types: Array, glass: String, backing: String, hanger: String, hanger_types: Array },
                methods: {
                    openHangerModal: function () {
                        this.$refs.hanger_modal.open();
                    },
                },
                computed: l({}, Object(o.e)(["paper"]), {
                    glass_info: function () {
                        return [].concat(n(c[this.glass]));
                    },
                    backing_info: function () {
                        var t = [].concat(n(u[this.backing]));
                        return (
                            "none" !== this.paper &&
                            (this.backing.startsWith("NON_")
                                ? t.push("Image is placed or hinged in frame, paper may show slight ripples, for flattest finish choose 'Adhesive Foamcore'")
                                : this.backing.startsWith("SELF_") && t.push("We will adhere your print to the foam core, this is the best looking and flattest finish")),
                            t
                        );
                    },
                }),
            };
        },
        425: function (t, e, a) {
            "use strict";
            function n(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
                    return a;
                }
                return Array.from(t);
            }
            var i = a(83),
                r = a.n(i),
                s = a(59),
                o = a.n(s),
                l = a(11),
                c = a(7),
                u = a(61);
            a(62);
            e.a = {
                components: { FramePicker: u.default, AlertBox: l.default, Tooltip: c.default },
                props: { selected_frame: Object, glass_width: Number, glass_height: Number, frame_check: Object, tabs: Array },
                data: function () {
                    return {
                        is_searching: !1,
                        current_tab: {},
                        search_term: "",
                        order_by: { label: "Sort By Width: smallest first", direction: "asc", order: "width" },
                        options: [
                            { label: "Sort By Width: smallest first", direction: "asc", order: "width" },
                            { label: "Sort By Width: largest first", direction: "desc", order: "width" },
                            { label: "Sort By Price: low to high", direction: "asc", order: "rate" },
                            { label: "Sort By Price: high to low", direction: "desc", order: "rate" },
                        ],
                        hide_unsuitable: !0,
                    };
                },
                computed: {
                    sorted_frames: function () {
                        var t = this,
                            e = this.order_by,
                            a = e.order,
                            i = e.direction,
                            r = [].concat(n(this.current_tab.frames));
                        return (
                            this.hide_unsuitable &&
                            (r = r.filter(function (e) {
                                return t.isValid(e);
                            })),
                            (r =
                                "asc" === i
                                    ? r.sort(function (t, e) {
                                        return t[a] - e[a];
                                    })
                                    : r.sort(function (t, e) {
                                        return e[a] - t[a];
                                    })),
                            r.forEach(function (e) {
                                var a = o()(t.selected_frame, "code", NaN) === o()(e, "code", NaN);
                                (e.is_selected = a), (e.is_valid = t.isValid(e));
                            }),
                            r
                        );
                    },
                },
                watch: {
                    search_term: function (t) {
                        var e = this,
                            a = t.trim();
                        (this.is_searching = a.length > 1),
                            this.$store
                                .dispatch("queryFrames", { key: "search", query: a })
                                .then(function () {
                                    return (e.is_searching = !1);
                                })
                                .catch(function (t) {
                                    e.is_searching = !1;
                                }),
                            "search" !== this.current_tab.key &&
                            this.updateTab(
                                this.tabs.find(function (t) {
                                    return "search" === t.key;
                                })
                            );
                    },
                },
                methods: {
                    isEqual: r.a,
                    isValid: function (t) {
                        var e = Math.max(this.glass_width, this.glass_height);
                        return Math.min(this.glass_width, this.glass_height) >= t.min && e <= t.max;
                    },
                    updateTab: function (t) {
                        (this.current_tab = t), t.loaded || this.$store.dispatch("fetchFrames", t.key);
                    },
                },
                beforeMount: function () {
                    var t = this.tabs.find(function (t) {
                        return "popular" === t.key;
                    });
                    this.updateTab(t);
                },
            };
        },
        426: function (t, e, a) {
            "use strict";
            function n(t, e, a) {
                return e in t ? Object.defineProperty(t, e, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = a), t;
            }
            var i = a(83),
                r = a.n(i),
                s = a(273),
                o = a(278),
                l = a(7);
            a(62);
            e.a = {
                components: { MatPicker: s.a, TabbedMatPicker: o.a, Tooltip: l.default },
                props: {
                    mats: Array,
                    unit_type: String,
                    top_mat: Object,
                    bottom_mat: Object,
                    number_of_mats: Number,
                    min_top_width: { type: Number, default: 2 },
                    min_bottom_width: { type: Number, default: 0.5 },
                    opening_type: { type: String, default: "PHOTO" },
                    has_printing: { type: Boolean, default: !1 },
                    show_centered: Boolean,
                    show_uniform: Boolean,
                    show_custom: Boolean,
                    min_mats: { type: Number, default: 0 },
                    border_alignment_mode: { type: String, default: "custom" },
                    vgroove: Boolean,
                },
                computed: {
                    opening: {
                        get: function () {
                            return this.opening_type;
                        },
                        set: function (t) {
                            this.$emit("change_opening_type", { type: t });
                        },
                    },
                    min_top: function () {
                        return this.$getScaled(this.min_top_width);
                    },
                    min_bottom: function () {
                        return this.$getScaled(this.min_bottom_width);
                    },
                    top: function () {
                        return this.$getScaled(this.top_mat.top);
                    },
                    left: function () {
                        return this.$getScaled(this.top_mat.left);
                    },
                    right: function () {
                        return this.$getScaled(this.top_mat.right);
                    },
                    bottom: function () {
                        return this.$getScaled(this.top_mat.bottom);
                    },
                    top_uniform_width: function () {
                        return this.$getScaled(this.top_mat.top);
                    },
                    bottom_uniform_width: function () {
                        return this.$getScaled(this.bottom_mat.top);
                    },
                    width_type: {
                        get: function () {
                            return this.border_alignment_mode;
                        },
                        set: function (t) {
                            this.$emit("change_width_type", t);
                        },
                    },
                },
                methods: {
                    buildMat: function (t, e) {
                        return Object.assign({}, this[e + "_mat"], t);
                    },
                    setCustomBorderWidth: function (t, e) {
                        if (-1 !== ["top", "left", "right", "bottom"].indexOf(e)) {
                            t = Math.max(this.min_top, this.$setScaled(t));
                            var a = n({}, e, t);
                            this.$emit("change_mat", { mat: this.buildMat(a, "top"), position: "top" }), this.$emit("change_" + e, t);
                        }
                    },
                    setUniformBorderWidth: function (t, e) {
                        if (-1 !== ["top", "bottom"].indexOf(e)) {
                            t = Math.max(this["min_" + e], this.$setScaled(t));
                            var a = { top: t, left: t, right: t, bottom: t };
                            this.$emit("change_mat", { mat: this.buildMat(a, e), position: e }), "bottom" === e && this.$emit("change_inner_size", t);
                        }
                    },
                    isSelected: function (t, e) {
                        return r()(this[e + "_mat"].mat, t);
                    },
                },
                created: function () {
                    void 0 === this.$getScaled &&
                        ((this.$getScaled = function (t) {
                            return t;
                        }),
                            (this.$setScaled = function (t) {
                                return t;
                            }));
                },
            };
        },
        427: function (t, e, a) {
            "use strict";
            var n = a(145),
                i = a(11),
                r = a(118);
            e.a = {
                components: { AlertBox: i.default, ListBundle: n.a, UserGallery: r.a },
                props: { paper: String, paper_types: Array },
                computed: {
                    paper_info: function () {
                        switch (this.paper) {
                            case "LUSTER":
                                return [
                                    "Industry standard professional photographic paper",
                                    "Perfect for all types of photographs and portraits",
                                    "Partial gloss and reflection of light",
                                    "90 Year Archival Rating",
                                    "Ilford GALERIE Prestige Smooth Pearl 310gsm",
                                ];
                            case "POSTER_MATTE":
                                return ["High quality white matte paper", "No gloss or reflections", "Great for posters and reproductions", "Chromajet Hi-Res 180gsm"];
                            case "GLOSS":
                                return ["High gloss and reflection of light", "90 Year Archival Rating", "Chromajet Centurion FullGloss 255gsm"];
                            case "METALLIC":
                                return ["Amazing glossy metallic reflections", "Highlights vibrant colours with pearlescent finish", "Incredible image clarity", "Ilford GALERIE Prestige Metallic Gloss 260gsm"];
                            case "ARCHIVAL":
                                return ["Textured fine art paper", "Off-white colour", "Best suited to black and white images", "Gives character to digital art", "Highest Archival Standard", "Hahnemuhle Photo Rag Ultra Smooth 188gsm"];
                            case "ARCHIVAL_TEXTURED":
                                return [
                                    "Textured fine art paper",
                                    "Matte warm-white tone",
                                    "Incredible durability and longevity",
                                    "Crisp and vivid colours",
                                    "Excellent results with black and white images",
                                    "Gives character to digital art",
                                    "Ilford GALERIE Prestige Fine Art Textured 220gsm",
                                ];
                            case "ARCHIVAL_SMOOTH":
                                return [
                                    "Smooth fine art paper",
                                    "Matte warm-white tone",
                                    "Incredible durability and longevity",
                                    "Crisp and vivid colours",
                                    "Excellent results with black and white images",
                                    "Gives character to digital art",
                                    "Ilford GALERIE Prestige Fine Art Smooth 200gsm",
                                ];
                            case "none":
                                return [];
                        }
                    },
                },
            };
        },
        428: function (t, e, a) {
            "use strict";
            function n(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
                    return a;
                }
                return Array.from(t);
            }
            var i = a(183),
                r = a(7),
                s = a(61);
            e.a = {
                components: { FramePicker: s.default, Tooltip: r.default, Modal: i.a },
                props: { allow_spacer: Boolean, spacer: Boolean, slip_frames: Array, slip: Object },
                computed: {
                    has_slip: function () {
                        return null !== this.slip;
                    },
                    slips: function () {
                        var t = []
                            .concat(n(this.slip_frames))
                            .sort(function (t, e) {
                                return t.width - e.width;
                            })
                            .slice(1),
                            e = this.has_slip ? this.slip.code : null;
                        return (
                            t.forEach(function (t) {
                                t.is_selected = t.code === e;
                            }),
                            t
                        );
                    },
                },
                methods: {
                    toggleSlip: function (t) {
                        this.slip ? this.$emit("change_slip", { slip: null }) : this.$emit("change_slip", { slip: this.slips[0] });
                    },
                    emitChangeSpacer: function (t) {
                        t.target.value;
                        this.$emit("change_spacer", { spacer: !this.spacer, type: "auto" });
                    },
                },
                mounted: function () {
                    this.$store.dispatch("fetchFrames", "slips");
                },
            };
        },
        43: function (t, e) { },
        44: function (t, e, a) {
            "use strict";
            function n(t) {
                a(45);
            }
            var i = a(20),
                r = a(46),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        45: function (t, e) { },
        46: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("tr", { staticClass: "product-summary__row" }, [
                    a("td", [t._v(t._s(t.heading))]),
                    t._v(" "),
                    a("td", { class: { "product-summary__row--link": t.link_style }, domProps: { innerHTML: t._s(t.value) } }),
                    t._v(" "),
                    a("td", [t._v(t._s(t._f("price")(t.price)))]),
                ]);
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        47: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a(
                    "div",
                    { staticClass: "product-summary" },
                    [
                        t._t("errors"),
                        t._v(" "),
                        t._t("default"),
                        t._v(" "),
                        a("table", { staticClass: "table is-striped is-narrow" }, [
                            t._m(0),
                            t._v(" "),
                            a(
                                "tbody",
                                t._l(t.summary, function (e) {
                                    return a("product-summary-row", {
                                        key: e.heading,
                                        attrs: { heading: e.heading, value: e.value, price: e.price },
                                        nativeOn: {
                                            click: function (a) {
                                                return t.$emit("click_label", e);
                                            },
                                        },
                                    });
                                }),
                                1
                            ),
                        ]),
                    ],
                    2
                );
            },
                i = [
                ],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        48: function (t, e, a) {
            "use strict";
            function n(t) {
                a(49);
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = a(21),
                r = a(50),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.default = l.exports;
        },
        49: function (t, e) { },
        50: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "mobile-preview-bar", class: { "mobile-preview-bar--visible": t.mobile_bar_visible } }, [
                    a(
                        "div",
                        { staticClass: "mobile-bar" },
                    ),
                ]);
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        51: function (t, e, a) {
            "use strict";
            function n(t) {
                a(52), (this.$style = a(53));
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = a(23),
                r = a(54),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.default = l.exports;
        },
        52: function (t, e) { },
        53: function (t, e) {
            t.exports = { "body-overlay": "Overlay---body-overlay---WY4PA_1", bodyOverlay: "Overlay---body-overlay---WY4PA_1" };
        },
        54: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("div", { staticClass: "overlay-container", on: { click: t.createOverlay } }, [t._t("default")], 2);
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        61: function (t, e, a) {
            "use strict";
            function n(t) {
                a(70);
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = a(26),
                r = a(74),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.default = l.exports;
        },
        62: function (t, e, a) {
            "use strict";
            a.d(e, "s", function () {
                return n;
            }),
                a.d(e, "r", function () {
                    return i;
                }),
                a.d(e, "C", function () {
                    return r;
                }),
                a.d(e, "o", function () {
                    return s;
                }),
                a.d(e, "m", function () {
                    return o;
                }),
                a.d(e, "y", function () {
                    return l;
                }),
                a.d(e, "q", function () {
                    return c;
                }),
                a.d(e, "j", function () {
                    return u;
                }),
                a.d(e, "l", function () {
                    return d;
                }),
                a.d(e, "a", function () {
                    return m;
                }),
                a.d(e, "i", function () {
                    return h;
                }),
                a.d(e, "b", function () {
                    return p;
                }),
                a.d(e, "f", function () {
                    return _;
                }),
                a.d(e, "n", function () {
                    return f;
                }),
                a.d(e, "A", function () {
                    return g;
                }),
                a.d(e, "g", function () {
                    return v;
                }),
                a.d(e, "u", function () {
                    return b;
                }),
                a.d(e, "v", function () {
                    return y;
                }),
                a.d(e, "t", function () {
                    return w;
                }),
                a.d(e, "w", function () {
                    return k;
                }),
                a.d(e, "D", function () {
                    return C;
                }),
                a.d(e, "k", function () {
                    return x;
                }),
                a.d(e, "h", function () {
                    return E;
                }),
                a.d(e, "z", function () {
                    return P;
                }),
                a.d(e, "c", function () {
                    return S;
                }),
                a.d(e, "e", function () {
                    return O;
                }),
                a.d(e, "d", function () {
                    return I;
                }),
                a.d(e, "x", function () {
                    return A;
                }),
                a.d(e, "B", function () {
                    return $;
                }),
                a.d(e, "p", function () {
                    return T;
                });
            var n = "UPDATE_IMAGE_WIDTH",
                i = "UPDATE_IMAGE_HEIGHT",
                r = "UPDATE_UNIT_TYPE",
                s = "UPDATE_GLASS",
                o = "UPDATE_BACKING",
                l = "UPDATE_PAPER",
                c = "UPDATE_IMAGE",
                u = "REPLACE_IMAGE_DATA",
                d = "SET_GALLERY_IMAGES",
                m = "ADD_GALLERY_IMAGE",
                h = "REMOVE_IMAGE",
                p = "DELETE_IMAGE",
                _ = "POPULATE_FRAMES",
                f = "UPDATE_FRAME",
                g = "UPDATE_SLIP",
                v = "POPULATE_MATS",
                b = "UPDATE_MAT_WIDTH_TYPE",
                y = "UPDATE_NUMBER_OF_MATS",
                w = "UPDATE_MATS",
                k = "UPDATE_OPENING_TYPE",
                C = "UPDATE_VGROOVE",
                x = "REQUEST_PRICES",
                E = "RECEIVE_PRICES",
                P = "UPDATE_QUANTITY",
                S = "FETCHING_BULK_OPTIONS",
                O = "FETCHING_BULK_OPTIONS_SUCCESS",
                I = "FETCHING_BULK_OPTIONS_FAIL",
                A = "UPDATE_PACK_QUANTITY",
                $ = "UPDATE_SPACER",
                T = "UPDATE_HANGER";
        },
        7: function (t, e, a) {
            "use strict";
            function n(t) {
                a(40);
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = a(18),
                r = a(41),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.default = l.exports;
        },
        70: function (t, e) { },
        71: function (t, e, a) {
            "use strict";
            function n(t) {
                a(72);
            }
            var i = a(27),
                r = a(73),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        72: function (t, e) { },
        73: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "frame-card", class: { "frame-card--selected": t.selected, "frame-card--invalid": !t.valid }, on: { click: t.onClick } }, [
                    a("div", { staticClass: "frame-card__main" }, [
                        t.image
                            ? a("img", { staticClass: "frame-image", attrs: { src: t.image, alt: "Frame " + t.code } })
                            : a("div", { staticClass: "frame-card__placeholder" }, [a("i", { staticClass: "fa fa-2x fa-spinner fa-pulse" })]),
                        t._v(" "),
                        a("div", { staticClass: "frame-card__code" }, [t._v(t._s(t.code))]),
                        t._v(" "),
                        a("div", { staticClass: "frame-card__size" }, [t._v("Width: " + t._s(t.width) + " cm")]),
                        t._v(" "),
                        a("div", { staticClass: "frame-card__rate" }, [t._v("Price Rate " + t._s(t.rate))]),
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "frame-card__info", class: { "frame-card__info--expanded": t.selected } }, [
                        a("table", { staticClass: "frame-card__info__table" }, [
                            a("thead", [a("tr", [a("td", { staticClass: "title", attrs: { colspan: "2" } }, [t._v(t._s(t.code))])])]),
                            t._v(" "),
                            a("tbody", [
                                a("tr", [a("td", [t._v("Width")]), t._v(" "), a("td", [t._v(t._s(t.width) + " cm")])]),
                                t._v(" "),
                                a("tr", [a("td", [t._v("Depth")]), t._v(" "), a("td", [t._v(t._s(t.depth) + " cm")])]),
                                t._v(" "),
                                a("tr", [a("td", [t._v("Rebate")]), t._v(" "), a("td", [t._v(t._s(t.rebate) + " cm")])]),
                                t._v(" "),
                                a("tr", [a("td", [t._v("Material")]), t._v(" "), a("td", [t._v(t._s(t.material))])]),
                                t._v(" "),
                                a("tr", [a("td", [t._v("Colour")]), t._v(" "), a("td", [t._v(t._s(t.description))])]),
                            ]),
                        ]),
                    ]),
                ]);
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        74: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a(
                    "div",
                    {
                        ref: "container",
                        staticClass: "frame-list-container",
                        on: {
                            wheel: function (e) {
                                return e.preventDefault(), t.scroll(e);
                            },
                        },
                    },
                    [
                        t._t("default"),
                        t._v(" "),
                        t._l(t.frames, function (e) {
                            return a(
                                "div",
                                { staticClass: "frame-card__container" },
                                [
                                    a("frame-card", {
                                        key: e.id,
                                        attrs: {
                                            frame: e,
                                            image: t.imageFor(e.code),
                                            code: e.code,
                                            width: e.width,
                                            rate: e.rate,
                                            depth: e.depth,
                                            rebate: e.rebate,
                                            material: e.material,
                                            description: e.description,
                                            selected: e.is_selected,
                                            valid: e.is_valid,
                                        },
                                        on: {
                                            mounted: t.watchIt,
                                            click: function (a) {
                                                return a.preventDefault(), t.$emit("change", e);
                                            },
                                        },
                                    }),
                                ],
                                1
                            );
                        }),
                    ],
                    2
                );
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        852: function (t, e, a) {
            a(84), (t.exports = a(853));
        },
        853: function (t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var n = a(24),
                i = a(854),
                r = a(982),
                s = a(991),
                o = a(281);
            a(101),
                a(102),
                n.default.use(s.a),
                n.default.use(o.a),
                new n.default({
                    el: "#app",
                    store: r.a,
                    render: function (t) {
                        return t(i.a);
                    },
                });
        },
        854: function (t, e, a) {
            "use strict";
            function n(t) {
                a(855);
            }
            var i = a(381),
                r = a(981),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        855: function (t, e) { },
        859: function (t, e, a) {
            "use strict";
            function n(t) {
                a(860);
            }
            var i = a(385),
                r = a(963),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        860: function (t, e) { },
        963: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", { staticClass: "card dimensions" }, [
                    a("div", { staticClass: "columns is-desktop" }, [
                        a("div", { staticClass: "column", attrs: { id: "dimensions-column" } }, [
                            a("div", { staticClass: "dimensions__sizing" }, [
                                a(
                                    "div",
                                    { staticClass: "field is-grouped is-horizontal", staticStyle: { "align-items": "center" } },
                                    [a("h4", { staticClass: "field-label" }, [t._v("Printing (Optional)")]), t._v(" "), t._t("uploads")],
                                    2
                                ),
                                t._v(" "),
                                a("div", { staticClass: "field is-grouped is-horizontal", staticStyle: { "align-items": "center" } }, [
                                    a("h4", { staticClass: "field-label" }, [t._v("Units")]),
                                    t._v(" "),
                                    a("div", { staticClass: "field-body" }, [
                                        a("div", { staticClass: "field is-grouped", staticStyle: { "align-items": "center" } }, [
                                            a("label", { staticClass: "material-radio" }, [
                                                a("input", {
                                                    directives: [{ name: "model", rawName: "v-model", value: t.units, expression: "units" }],
                                                    attrs: { value: "cm", type: "radio", "aria-label": "Use centimetres" },
                                                    domProps: { checked: t._q(t.units, "cm") },
                                                    on: {
                                                        change: function (e) {
                                                            t.units = "cm";
                                                        },
                                                    },
                                                }),
                                                t._v(" "),
                                                t._m(0),
                                                t._v(" "),
                                                a("span", { staticClass: "material-radio__label" }, [t._v("cm")]),
                                            ]),
                                            t._v(" "),
                                            a("label", { staticClass: "material-radio" }, [
                                                a("input", {
                                                    directives: [{ name: "model", rawName: "v-model", value: t.units, expression: "units" }],
                                                    attrs: { value: "inch", type: "radio", "aria-label": "Use inches" },
                                                    domProps: { checked: t._q(t.units, "inch") },
                                                    on: {
                                                        change: function (e) {
                                                            t.units = "inch";
                                                        },
                                                    },
                                                }),
                                                t._v(" "),
                                                t._m(1),
                                                t._v(" "),
                                                a("span", { staticClass: "material-radio__label" }, [t._v("inch")]),
                                            ]),
                                        ]),
                                    ]),
                                ]),
                                t._v(" "),
                                a("div", { staticClass: "field is-grouped is-horizontal dimensions__size", staticStyle: { "align-items": "flex-start" } }, [
                                    a("h4", { staticClass: "field-label" }, [t._v("Image Size")]),
                                    t._v(" "),
                                    a("div", { staticClass: "field-body", staticStyle: { "flex-direction": "column" } }, [
                                        a("div", [
                                            a("div", { staticClass: "field is-grouped" }, [
                                                a("div", { staticClass: "columns", staticStyle: { width: "100%" } }, [
                                                    a("div", { staticClass: "column", staticStyle: { display: "flex" } }, [
                                                        a("div", { staticClass: "field" }, [
                                                            a("label", { staticClass: "label" }, [t._v("\n                        WIDTH\n                      ")]),
                                                            t._v(" "),
                                                            a("div", { staticClass: "control" }, [
                                                                a("input", {
                                                                    attrs: { type: "number", step: "0.1", "aria-label": "Image width", min: "1", max: "999.99" },
                                                                    domProps: { value: t.width },
                                                                    on: {
                                                                        input: function (e) {
                                                                            return t.updateWidth(e.target.value);
                                                                        },
                                                                    },
                                                                }),
                                                            ]),
                                                        ]),
                                                        t._v(" "),
                                                        a("span", { staticClass: "mid" }, [t._v("×")]),
                                                        t._v(" "),
                                                        a("div", { staticClass: "field" }, [
                                                            a("label", { staticClass: "label" }, [t._v("HEIGHT")]),
                                                            t._v(" "),
                                                            a("div", { staticClass: "control" }, [
                                                                a("input", {
                                                                    attrs: { type: "number", step: "0.1", "aria-label": "Image height", min: "1", max: "999.99" },
                                                                    domProps: { value: t.height },
                                                                    on: {
                                                                        input: function (e) {
                                                                            return t.updateHeight(e.target.value);
                                                                        },
                                                                    },
                                                                }),
                                                            ]),
                                                        ]),
                                                        t._v(" "),
                                                        a("span", { staticClass: "mid" }, [t._v(t._s(t.units))]),
                                                    ]),
                                                    t._v(" "),
                                                    a("div", { staticClass: "column", staticStyle: { display: "flex", "align-items": "flex-end" } }, [
                                                        t.has_image
                                                            ? t._e()
                                                            : a("div", { staticClass: "select is-fullwidth" }, [
                                                                a(
                                                                    "select",
                                                                    {
                                                                        directives: [{ name: "model", rawName: "v-model", value: t.preset, expression: "preset" }],
                                                                        on: {
                                                                            change: function (e) {
                                                                                var a = Array.prototype.filter
                                                                                    .call(e.target.options, function (t) {
                                                                                        return t.selected;
                                                                                    })
                                                                                    .map(function (t) {
                                                                                        return "_value" in t ? t._value : t.value;
                                                                                    });
                                                                                t.preset = e.target.multiple ? a : a[0];
                                                                            },
                                                                        },
                                                                    },
                                                                    [
                                                                        a("option", { domProps: { value: null } }, [t._v("Standard Sizes")]),
                                                                        t._v(" "),
                                                                        t._l(t.numeric_presets, function (e) {
                                                                            return a("option", { domProps: { value: e } }, [t._v(t._s(e.label))]);
                                                                        }),
                                                                        t._v(" "),
                                                                        t.b_presets.length
                                                                            ? a(
                                                                                "optgroup",
                                                                                { attrs: { label: "B" } },
                                                                                t._l(t.b_presets, function (e) {
                                                                                    return a("option", { domProps: { value: e } }, [t._v(t._s(e.label))]);
                                                                                }),
                                                                                0
                                                                            )
                                                                            : t._e(),
                                                                        t._v(" "),
                                                                        t.a_presets.length
                                                                            ? a(
                                                                                "optgroup",
                                                                                { attrs: { label: "A" } },
                                                                                t._l(t.a_presets, function (e) {
                                                                                    return a("option", { domProps: { value: e } }, [t._v(t._s(e.label))]);
                                                                                }),
                                                                                0
                                                                            )
                                                                            : t._e(),
                                                                    ],
                                                                    2
                                                                ),
                                                            ]),
                                                    ]),
                                                ]),
                                            ]),
                                        ]),
                                        t._v(" "),
                                        a("div", { staticClass: "size-help" }, [
                                            t.aspect_locked
                                                ? a(
                                                    "div",
                                                    { staticClass: "dimensions__aspect-info" },
                                                    [
                                                        a("i", { staticClass: "fa fa-lock" }),
                                                        t._v(" "),
                                                        a("span", [t._v("Image ratio is locked.")]),
                                                        t._v(" "),
                                                        a("tooltip", { key: "tooltip-aspect-locked", attrs: { "aria-label": "Aspect ratio Tooltip" } }, [
                                                            t._v(
                                                                "\n                  To prevent your image from stretching when you resize, the\n                  width will automatically adjust to your selected height, and\n                  vice versa.\n                "
                                                            ),
                                                        ]),
                                                    ],
                                                    1
                                                )
                                                : t._e(),
                                            t._v(" "),
                                            !t.aspect_locked && t.has_image
                                                ? a(
                                                    "div",
                                                    { staticClass: "dimensions__aspect-info" },
                                                    [
                                                        a("i", { staticClass: "fa fa-unlock" }),
                                                        t._v(" "),
                                                        t._m(2),
                                                        t._v(" "),
                                                        a("tooltip", { key: "tooltip-aspect-unlocked", attrs: { "aria-label": "Aspect ratio tooltip" } }, [
                                                            t._v("\n                  You are free to resize (and stretch) the image since you\n                  have selected no printing.\n                "),
                                                        ]),
                                                    ],
                                                    1
                                                )
                                                : t._e(),
                                        ]),
                                        t._v(" "),
                                        a("div", { class: { "invalid-dimensions": !t.valid_dimensions }, staticStyle: { "font-size": "1.2rem", transition: "all 0.25s ease", "margin-bottom": "10px" } }, [
                                            t._v("\n              " + t._s(t.min_dimension_message) + "\n            "),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ]),
                    ]),
                ]);
            },
                i = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("span", { staticClass: "outer" }, [a("span", { staticClass: "inner" })]);
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("span", { staticClass: "outer" }, [a("span", { staticClass: "inner" })]);
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("span", [t._v("Image ratio is "), a("b", [t._v("unlocked")]), t._v(", because your paper type is\n                  set to none.")]);
                    },
                ],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        964: function (t, e, a) {
            "use strict";
            function n(t) {
                a(965);
            }
            var i = a(424),
                r = a(966),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        965: function (t, e) { },
        966: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", [
                    a("div", { staticClass: "columns" }, [
                        a("div", { staticClass: "column" }, [
                            a("h3", { staticClass: "card-title", attrs: { id: "glass-title" } }, [t._v("Glass")]),
                            t._v(" "),
                            a(
                                "fieldset",
                                { attrs: { id: "glass-type" } },
                                t._l(t.glass_types, function (e) {
                                    return a("label", { staticClass: "material-radio", class: { disabled: !e.enabled } }, [
                                        a("input", {
                                            attrs: { type: "radio", name: "glass-type", disabled: !e.enabled, "aria-label": e.label },
                                            domProps: { value: e.key, checked: e.key === t.glass },
                                            on: {
                                                change: function (e) {
                                                    return t.$emit("change_glass", { glass: e.target.value });
                                                },
                                            },
                                        }),
                                        t._v(" "),
                                        t._m(0, !0),
                                        t._v(" "),
                                        a("span", { staticClass: "material-radio__label" }, [t._v(t._s(e.label))]),
                                        t._v(" "),
                                        e.enabled ? t._e() : a("span", [a("tooltip", { attrs: { "aria-label": "Unavailable glass tooltip" } }, [a("span", { domProps: { innerHTML: t._s(e.disabled_reason) } })])], 1),
                                    ]);
                                }),
                                0
                            ),
                        ]),
                        t._v(" "),
                        a("div", { staticClass: "column" }, [a("div", { attrs: { id: "extra-info" } }, [a("list-bundle", { attrs: { heading: "Glass Details", list: t.glass_info, icon: "glyphicon glyphicon-ok" } })], 1)]),
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "columns" }, [
                        a(
                            "div",
                            { staticClass: "column" },
                            [
                                a("h3", { staticClass: "card-title", attrs: { id: "backing-title" } }, [t._v("Backing")]),
                                t._v(" "),
                                t._l(t.backing_types, function (e) {
                                    return a("label", { staticClass: "material-radio", class: { disabled: !e.enabled } }, [
                                        a("input", {
                                            attrs: { type: "radio", name: "backing-type", disabled: !e.enabled, "aria-label": e.label },
                                            domProps: { value: e.key, checked: e.key === t.backing },
                                            on: {
                                                change: function (e) {
                                                    return t.$emit("change_backing", { backing: e.target.value });
                                                },
                                            },
                                        }),
                                        t._v(" "),
                                        t._m(1, !0),
                                        t._v(" "),
                                        a("span", { staticClass: "material-radio__label" }, [t._v(t._s(e.label))]),
                                        t._v(" "),
                                        e.enabled ? t._e() : a("span", [a("tooltip", { attrs: { "aria-label": "Unavailable backing tooltip" } }, [a("span", { domProps: { innerHTML: t._s(e.disabled_reason) } })])], 1),
                                    ]);
                                }),
                            ],
                            2
                        ),
                        t._v(" "),
                        a("div", { staticClass: "column" }, [a("list-bundle", { attrs: { heading: "Backing Details", list: t.backing_info, icon: "glyphicon glyphicon-ok" } })], 1),
                    ]),
                    t._v(" "),
                    a("div", [
                        a("div", { staticStyle: { "font-size": "1.8rem" } }, [
                            t._v("\n      Hanging System\n      "),
                            a(
                                "button",
                                {
                                    staticClass: "badge btn btn-default btn-primary btn-xs",
                                    staticStyle: { "font-weight": "300" },
                                    on: {
                                        click: function (e) {
                                            return e.preventDefault(), t.openHangerModal(e);
                                        },
                                    },
                                },
                                [t._v("\n        More Info\n      ")]
                            ),
                        ]),
                        t._v(" "),
                        a("div", [t._v("\n      The hanging system will be set up for your frame as you see it in the\n      preview.\n    ")]),
                    ]),
                    t._v(" "),
                    a("div", { staticClass: "columns" }, [
                        a("div", { staticClass: "column" }, [
                            a("div", [
                                a(
                                    "div",
                                    { staticClass: "extras-tab__hangers__options" },
                                    t._l(t.hanger_types, function (e) {
                                        return a("label", { staticClass: "material-radio", class: { disabled: !e.enabled } }, [
                                            a("input", {
                                                attrs: { type: "radio", disabled: !e.enabled, "aria-label": "Use " + e.label },
                                                domProps: { value: e.key, checked: t.hanger === e.key },
                                                on: {
                                                    change: function (e) {
                                                        return t.$emit("change_hanger", { hanger: e.target.value });
                                                    },
                                                },
                                            }),
                                            t._v(" "),
                                            t._m(2, !0),
                                            t._v(" "),
                                            a("span", { staticClass: "material-radio__label" }, [t._v(t._s(e.label))]),
                                            t._v(" "),
                                            e.enabled ? t._e() : a("span", [a("tooltip", { attrs: { "aria-label": "Unavailable hanger tooltip" } }, [t._v(t._s(e.disabled_reason))])], 1),
                                        ]);
                                    }),
                                    0
                                ),
                            ]),
                        ]),
                    ]),
                    t._v(" "),
                    a(
                        "div",
                        [
                            a("modal", { ref: "hanger_modal", attrs: { dismissable: !0 } }, [
                                a("h3", { staticStyle: { margin: "0" }, attrs: { slot: "title" }, slot: "title" }, [t._v("Hanging System")]),
                                t._v(" "),
                                a(
                                    "div",
                                    { staticClass: "hanger-modal" },
                                    t._l(t.hanger_types, function (e) {
                                        return a("div", { staticClass: "hanger-modal__row" }, [
                                            a("div", { staticClass: "hanger-modal__row__image" }, [a("img", { attrs: { src: e.image, alt: e.label } })]),
                                            t._v(" "),
                                            a("div", { staticClass: "hanger-modal__row__data" }, [a("div", [t._v(t._s(e.label))]), t._v(" "), a("div", { domProps: { innerHTML: t._s(e.description) } }, [t._v(t._s(e.description))])]),
                                        ]);
                                    }),
                                    0
                                ),
                            ]),
                        ],
                        1
                    ),
                ]);
            },
                i = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("span", { staticClass: "outer" }, [a("span", { staticClass: "inner" })]);
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("span", { staticClass: "outer" }, [a("span", { staticClass: "inner" })]);
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("span", { staticClass: "outer" }, [a("span", { staticClass: "inner" })]);
                    },
                ],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        967: function (t, e, a) {
            "use strict";
            function n(t) {
                (this.$style = a(968)), a(969);
            }
            var i = a(425),
                r = a(970),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        968: function (t, e) {
            t.exports = {
                "no-frames": "FramesTab---no-frames---1MABg_0",
                noFrames: "FramesTab---no-frames---1MABg_0",
                search: "FramesTab---search---1CIKU_0",
                "select-sorting": "FramesTab---select-sorting---h0Lcr_0",
                selectSorting: "FramesTab---select-sorting---h0Lcr_0",
                "tab-list": "FramesTab---tab-list---2iFa6_0",
                tabList: "FramesTab---tab-list---2iFa6_0",
                "tab-text": "FramesTab---tab-text---3IkZG_0",
                tabText: "FramesTab---tab-text---3IkZG_0",
                tab: "FramesTab---tab---3c_QL_0",
                "current-tab": "FramesTab---current-tab---3tG84_0 FramesTab---tab---3c_QL_0",
                currentTab: "FramesTab---current-tab---3tG84_0 FramesTab---tab---3c_QL_0",
            };
        },
        969: function (t, e) { },
        970: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "frame-tab" }, [
                    a("div", { staticClass: "columns" }, [
                        a("div", { staticClass: "column" }, [
                            a("div", { staticClass: "form-group" }, [
                                a("div", { staticClass: "select is-fullwidth" }, [
                                    a(
                                        "select",
                                        {
                                            directives: [{ name: "model", rawName: "v-model", value: t.order_by, expression: "order_by" }],
                                            class: t.$style["select-sorting"],
                                            attrs: { id: "frames-order-by", title: "Sorting Options" },
                                            on: {
                                                change: function (e) {
                                                    var a = Array.prototype.filter
                                                        .call(e.target.options, function (t) {
                                                            return t.selected;
                                                        })
                                                        .map(function (t) {
                                                            return "_value" in t ? t._value : t.value;
                                                        });
                                                    t.order_by = e.target.multiple ? a : a[0];
                                                },
                                            },
                                        },
                                        t._l(t.options, function (e) {
                                            return a("option", { domProps: { value: e } }, [t._v(t._s(e.label))]);
                                        }),
                                        0
                                    ),
                                ]),
                            ]),
                        ]),
                        t._v(" "),
                        a("div", { staticClass: "column" }, [
                            a("div", { staticClass: "form-group" }, [
                                a("input", {
                                    directives: [{ name: "model", rawName: "v-model", value: t.search_term, expression: "search_term" }],
                                    staticClass: "form-control",
                                    class: t.$style.search,
                                    attrs: { type: "text", id: "frames-search-input", title: "Frame Search", "aria-label": "Search for frames", placeholder: "  Type a frame code or search term" },
                                    domProps: { value: t.search_term },
                                    on: {
                                        input: function (e) {
                                            e.target.composing || (t.search_term = e.target.value);
                                        },
                                    },
                                }),
                            ]),
                        ]),
                    ]),
                    t._v(" "),
                    a(
                        "div",
                        [
                            a(
                                "ul",
                                { class: t.$style["tab-list"] },
                                t._l(t.tabs, function (e) {
                                    return "search" !== e.key
                                        ? a(
                                            "li",
                                            {
                                                class: t.$style.tab,
                                                on: {
                                                    click: function (a) {
                                                        return a.preventDefault(), t.updateTab(e);
                                                    },
                                                },
                                            },
                                            [
                                                a("span", { class: [t.isEqual(t.current_tab, e) && t.$style["current-tab"], t.$style["tab-text"]] }, [
                                                    e.icon ? a("i", { class: ["fa fa-" + e.icon] }) : t._e(),
                                                    t._v("\n          " + t._s(e.name)),
                                                ]),
                                            ]
                                        )
                                        : t._e();
                                }),
                                0
                            ),
                            t._v(" "),
                            a(
                                "frame-picker",
                                {
                                    attrs: { frames: t.sorted_frames },
                                    on: {
                                        change: function (e) {
                                            return t.$emit("change_frame", e);
                                        },
                                    },
                                },
                                [
                                    t.is_searching
                                        ? a("div", { class: t.$style["no-frames"] }, [a("h3", [t._v("Searching for '" + t._s(t.search_term) + "'")])])
                                        : 0 === t.sorted_frames.length
                                            ? a(
                                                "div",
                                                { class: t.$style["no-frames"] },
                                                [
                                                    t.current_tab.loaded
                                                        ? "search" === t.current_tab.key
                                                            ? [
                                                                t.search_term.length < 2
                                                                    ? a("h3", [t._v("\n            Type at least 2 characters to begin searching\n          ")])
                                                                    : a("h3", [t._v("No results found for '" + t._s(t.search_term) + "'")]),
                                                            ]
                                                            : a("h3", [t._v("No Frames")])
                                                        : a("h3", [t._v("Loading...")]),
                                                ],
                                                2
                                            )
                                            : t._e(),
                                ]
                            ),
                            t._v(" "),
                            "float" === t.current_tab.key ? a("div", [t._m(0)]) : t._e(),
                            t._v(" "),
                            "timber" === t.current_tab.key ? a("div", [t._m(1)]) : t._e(),
                            t._v(" "),
                            a(
                                "div",
                                [
                                    a("label", [
                                        a("input", {
                                            directives: [{ name: "model", rawName: "v-model", value: t.hide_unsuitable, expression: "hide_unsuitable" }],
                                            attrs: { type: "checkbox", "aria-label": "Hide unsuitable frames" },
                                            domProps: { checked: Array.isArray(t.hide_unsuitable) ? t._i(t.hide_unsuitable, null) > -1 : t.hide_unsuitable },
                                            on: {
                                                change: function (e) {
                                                    var a = t.hide_unsuitable,
                                                        n = e.target,
                                                        i = !!n.checked;
                                                    if (Array.isArray(a)) {
                                                        var r = t._i(a, null);
                                                        n.checked ? r < 0 && (t.hide_unsuitable = a.concat([null])) : r > -1 && (t.hide_unsuitable = a.slice(0, r).concat(a.slice(r + 1)));
                                                    } else t.hide_unsuitable = i;
                                                },
                                            },
                                        }),
                                        t._v("\n        Hide Unsuitable Frames"),
                                    ]),
                                    t._v(" "),
                                    a("tooltip", { attrs: { "aria-label": "Hide unsuitable frames tooltip" } }, [
                                        t._v("Each frame has a maximum length it can support. You can uncheck this\n        option to view the entire collection."),
                                    ]),
                                ],
                                1
                            ),
                            t._v(" "),
                            t.frame_check.valid ? t._e() : a("alert-box", { attrs: { type: "warning" } }, [a("span", { domProps: { innerHTML: t._s(t.frame_check.message) } })]),
                        ],
                        1
                    ),
                ]);
            },
                i = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", [
                            a("div", { staticClass: "alert material-alert-warning" }, [
                                a("p", [
                                    t._v("\n            An additional 6mm gap on each side is added to the image size\n            entered. These frames are for canvas only, by selecting one of\n            these frames\n            "),
                                    a("strong", [t._v("your mat, backing, image, and glass option will be\n              removed.")]),
                                ]),
                            ]),
                        ]);
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", [
                            a("div", { staticClass: "alert material-alert-warning" }, [
                                a("p", [t._v("\n            Please note that these frames are made of natural wood and there\n            are variations in colour between batches/stocks\n          ")]),
                            ]),
                        ]);
                    },
                ],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        971: function (t, e, a) {
            "use strict";
            function n(t) {
                a(972);
            }
            var i = a(426),
                r = a(973),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        972: function (t, e) { },
        973: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "mats-tab" }, [
                    a("div", { staticClass: "columns" }, [
                        a("div", { staticClass: "column" }, [
                            a("div", { staticClass: "mats-tab__number-of-mats" }, [
                                a("div", { staticClass: "material-radio__heading--block" }, [t._v("Style")]),
                                t._v(" "),
                                t.min_mats <= 1
                                    ? a("label", { staticClass: "material-radio" }, [
                                        a("input", {
                                            attrs: { type: "radio", "aria-label": "Use 1 matboard" },
                                            domProps: { value: 1, checked: 1 === t.number_of_mats },
                                            on: {
                                                change: function (e) {
                                                    return t.$emit("change_number_of_mats", 1);
                                                },
                                            },
                                        }),
                                        t._v(" "),
                                        t._m(0),
                                        t._v(" "),
                                        a("span", { staticClass: "material-radio__label" }, [t._v("Single")]),
                                    ])
                                    : t._e(),
                                t._v(" "),
                                t.min_mats <= 2
                                    ? a("label", { staticClass: "material-radio" }, [
                                        a("input", {
                                            attrs: { type: "radio", "aria-label": "Use 2 matboards" },
                                            domProps: { value: 2, checked: 2 === t.number_of_mats },
                                            on: {
                                                change: function (e) {
                                                    return t.$emit("change_number_of_mats", 2);
                                                },
                                            },
                                        }),
                                        t._v(" "),
                                        t._m(1),
                                        t._v(" "),
                                        a("span", { staticClass: "material-radio__label" }, [t._v("Double")]),
                                    ])
                                    : t._e(),
                                t._v(" "),
                                t.min_mats <= 0
                                    ? a("label", { staticClass: "material-radio" }, [
                                        a("input", {
                                            attrs: { type: "radio", "aria-label": "Use no matboards" },
                                            domProps: { value: 0, checked: 0 === t.number_of_mats },
                                            on: {
                                                change: function (e) {
                                                    return t.$emit("change_number_of_mats", 0);
                                                },
                                            },
                                        }),
                                        t._v(" "),
                                        t._m(2),
                                        t._v(" "),
                                        a("span", { staticClass: "material-radio__label" }, [t._v("None")]),
                                    ])
                                    : t._e(),
                            ]),
                        ]),
                        t._v(" "),
                        a("div", { staticClass: "column is-one-third" }, [
                            a("div", { staticClass: "mats-tab__opening-type" }, [
                                a("fieldset", [
                                    a("div", { staticClass: "material-radio__heading--block" }, [t._v("Image overlap")]),
                                    t._v(" "),
                                    a("div", [
                                        a("div", { staticClass: "select" }, [
                                            a(
                                                "select",
                                                {
                                                    directives: [{ name: "model", rawName: "v-model", value: t.opening, expression: "opening" }],
                                                    attrs: { name: "image_overlap", title: "Image Overlap", disabled: 0 === t.number_of_mats || t.has_printing },
                                                    on: {
                                                        change: function (e) {
                                                            var a = Array.prototype.filter
                                                                .call(e.target.options, function (t) {
                                                                    return t.selected;
                                                                })
                                                                .map(function (t) {
                                                                    return "_value" in t ? t._value : t.value;
                                                                });
                                                            t.opening = e.target.multiple ? a : a[0];
                                                        },
                                                    },
                                                },
                                                [a("option", { attrs: { value: "PHOTO" } }, [t._v("On")]), t._v(" "), a("option", { attrs: { value: "EXACT" } }, [t._v("Off")])]
                                            ),
                                        ]),
                                        t._v(" "),
                                        a(
                                            "label",
                                            [
                                                t.has_printing
                                                    ? a("tooltip", { key: "has_printing", attrs: { "aria-label": "Image overlap tooltip" } }, [
                                                        a("div", [t._v("\n                  This option is not available when printing is selected\n                ")]),
                                                    ])
                                                    : a("tooltip", { key: "normal", attrs: { "aria-label": "Image overlap tooltip" } }, [
                                                        a("div", [a("b", [t._v("On")]), t._v(": Opening cut with 3-5mm image overlap.")]),
                                                        t._v(" "),
                                                        a("div", [
                                                            a("b", [t._v("Off")]),
                                                            t._v(": Opening cut to\n                  "),
                                                            a("span", { staticStyle: { "font-weight": "400", "text-decoration": "underline" } }, [t._v("exact")]),
                                                            t._v("\n                  image size entered.\n                "),
                                                        ]),
                                                    ]),
                                            ],
                                            1
                                        ),
                                    ]),
                                ]),
                            ]),
                        ]),
                    ]),
                    t._v(" "),
                    a(
                        "div",
                        { staticStyle: { "padding-top": "10px" } },
                        [
                            a("tabbed-mat-picker", {
                                attrs: { mats: t.mats, heading: "Top Mat", show_vgroove: !0, vgroove: t.vgroove, selected: t.top_mat && t.top_mat.mat },
                                on: {
                                    vgroove: function (e) {
                                        return t.$emit("change_vgroove", e);
                                    },
                                    change: function (e) {
                                        t.$emit("change_mat", { mat: t.buildMat(e, "top"), position: "top" });
                                    },
                                },
                            }),
                            t._v(" "),
                            a("fieldset", { attrs: { disabled: 0 === t.number_of_mats } }, [
                                t.show_centered
                                    ? a("fieldset", { staticClass: "mats-tab__uniform" }, [
                                        a("label", { staticClass: "material-radio" }, [
                                            a("input", {
                                                directives: [{ name: "model", rawName: "v-model", value: t.width_type, expression: "width_type" }],
                                                attrs: { type: "radio", value: "centered", "aria-label": "Choose centered width" },
                                                domProps: { checked: t._q(t.width_type, "centered") },
                                                on: {
                                                    change: function (e) {
                                                        t.width_type = "centered";
                                                    },
                                                },
                                            }),
                                            t._v(" "),
                                            t._m(3),
                                            t._v(" "),
                                            a("span", { staticClass: "material-radio__label" }, [t._v("Centered Opening")]),
                                        ]),
                                    ])
                                    : t._e(),
                                t._v(" "),
                                t.show_uniform
                                    ? a("fieldset", { staticClass: "mats-tab__uniform" }, [
                                        a("label", { staticClass: "material-radio" }, [
                                            a("input", {
                                                directives: [{ name: "model", rawName: "v-model", value: t.width_type, expression: "width_type" }],
                                                attrs: { type: "radio", value: "uniform", "aria-label": "Choose uniform width" },
                                                domProps: { checked: t._q(t.width_type, "uniform") },
                                                on: {
                                                    change: function (e) {
                                                        t.width_type = "uniform";
                                                    },
                                                },
                                            }),
                                            t._v(" "),
                                            t._m(4),
                                            t._v(" "),
                                            a("span", { staticClass: "material-radio__label" }, [t._v("Uniform Width")]),
                                        ]),
                                        t._v(" "),
                                        a("label", [
                                            a("span", { staticClass: "inline-block" }, [
                                                a("input", {
                                                    attrs: { type: "number", min: t.min_top, max: 20, step: "0.1", "aria-label": "Top matboard uniform width", disabled: "custom" === t.border_alignment_mode },
                                                    domProps: { value: t.top_uniform_width },
                                                    on: {
                                                        input: function (e) {
                                                            return t.setUniformBorderWidth(e.target.value, "top");
                                                        },
                                                    },
                                                }),
                                                t._v(" "),
                                                a("span", [t._v(t._s(t.unit_type))]),
                                            ]),
                                        ]),
                                    ])
                                    : t._e(),
                                t._v(" "),
                                t.show_custom
                                    ? a("fieldset", { staticClass: "mats-tab__custom" }, [
                                        a("label", { staticClass: "material-radio" }, [
                                            a("input", {
                                                directives: [{ name: "model", rawName: "v-model", value: t.width_type, expression: "width_type" }],
                                                attrs: { type: "radio", value: "custom", "aria-label": "Choose custom width" },
                                                domProps: { checked: t._q(t.width_type, "custom") },
                                                on: {
                                                    change: function (e) {
                                                        t.width_type = "custom";
                                                    },
                                                },
                                            }),
                                            t._v(" "),
                                            t._m(5),
                                            t._v(" "),
                                            a("span", { staticClass: "material-radio__label" }, [t._v("Custom Width")]),
                                        ]),
                                        t._v(" "),
                                        a("fieldset", { attrs: { disabled: "custom" !== t.border_alignment_mode } }, [
                                            a("label", [
                                                t._v("\n            Top:"),
                                                a("br"),
                                                a("input", {
                                                    attrs: { type: "number", min: t.min_top_width, max: 20, step: "0.1", "aria-label": "Custom top width" },
                                                    domProps: { value: t.top },
                                                    on: {
                                                        input: function (e) {
                                                            return t.setCustomBorderWidth(e.target.value, "top");
                                                        },
                                                    },
                                                }),
                                            ]),
                                            t._v(" "),
                                            a("label", [
                                                t._v("\n            Bottom:"),
                                                a("br"),
                                                t._v(" "),
                                                a("input", {
                                                    attrs: { type: "number", min: t.min_top_width, max: 20, step: "0.1", "aria-label": "Custom bottom width" },
                                                    domProps: { value: t.bottom },
                                                    on: {
                                                        input: function (e) {
                                                            return t.setCustomBorderWidth(e.target.value, "bottom");
                                                        },
                                                    },
                                                }),
                                            ]),
                                            t._v(" "),
                                            a("label", [
                                                t._v("\n            Left:"),
                                                a("br"),
                                                t._v(" "),
                                                a("input", {
                                                    attrs: { type: "number", min: t.min_top_width, max: 20, step: "0.1", "aria-label": "Custom left width" },
                                                    domProps: { value: t.left },
                                                    on: {
                                                        input: function (e) {
                                                            return t.setCustomBorderWidth(e.target.value, "left");
                                                        },
                                                    },
                                                }),
                                            ]),
                                            t._v(" "),
                                            a("label", [
                                                t._v("\n            Right:"),
                                                a("br"),
                                                t._v(" "),
                                                a("input", {
                                                    attrs: { type: "number", min: t.min_top_width, max: 20, step: "0.1", "aria-label": "Custom right width" },
                                                    domProps: { value: t.right },
                                                    on: {
                                                        input: function (e) {
                                                            return t.setCustomBorderWidth(e.target.value, "right");
                                                        },
                                                    },
                                                }),
                                            ]),
                                            t._v(" "),
                                            a("span", [t._v(t._s(t.unit_type))]),
                                        ]),
                                    ])
                                    : t._e(),
                            ]),
                            t._v(" "),
                            2 === t.number_of_mats
                                ? a(
                                    "div",
                                    [
                                        a("hr"),
                                        t._v(" "),
                                        a("tabbed-mat-picker", {
                                            attrs: { mats: t.mats, heading: "Bottom Mat", selected: t.bottom_mat.mat },
                                            on: {
                                                change: function (e) {
                                                    t.$emit("change_mat", { mat: t.buildMat(e, "bottom"), position: "bottom" });
                                                },
                                            },
                                        }),
                                        t._v(" "),
                                        a("label", [
                                            t._v("Width:"),
                                            a("input", {
                                                attrs: { type: "number", min: t.min_bottom, max: 20, step: "0.1", "aria-label": "Bottom matboard uniform width" },
                                                domProps: { value: t.bottom_uniform_width },
                                                on: {
                                                    input: function (e) {
                                                        return t.setUniformBorderWidth(e.target.value, "bottom");
                                                    },
                                                },
                                            }),
                                        ]),
                                        t._v(" "),
                                        a("span", [t._v(t._s(t.unit_type))]),
                                    ],
                                    1
                                )
                                : t._e(),
                        ],
                        1
                    ),
                ]);
            },
                i = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("span", { staticClass: "outer" }, [a("span", { staticClass: "inner" })]);
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("span", { staticClass: "outer" }, [a("span", { staticClass: "inner" })]);
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("span", { staticClass: "outer" }, [a("span", { staticClass: "inner" })]);
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("span", { staticClass: "outer" }, [a("span", { staticClass: "inner" })]);
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("span", { staticClass: "outer" }, [a("span", { staticClass: "inner" })]);
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("span", { staticClass: "outer" }, [a("span", { staticClass: "inner" })]);
                    },
                ],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        974: function (t, e, a) {
            "use strict";
            function n(t) {
                this.$style = a(975);
            }
            var i = a(427),
                r = a(976),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        975: function (t, e) {
            t.exports = { label: "PrintingTab---label---3lRku_0", "radio-icon": "PrintingTab---radio-icon---4QE1t_0", radioIcon: "PrintingTab---radio-icon---4QE1t_0" };
        },
        976: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", [
                    a("div", { staticClass: "columns" }, [
                        a("div", { staticClass: "column" }, [
                            a("h3", { staticClass: "card-title" }, [t._v("Paper")]),
                            t._v(" "),
                            a(
                                "fieldset",
                                { attrs: { id: "paper-type" } },
                                t._l(t.paper_types, function (e) {
                                    return a("label", { staticClass: "material-radio", class: t.$style.label }, [
                                        a("input", {
                                            attrs: { type: "radio", "aria-label": e.label },
                                            domProps: { value: e.key, checked: t.paper === e.key },
                                            on: {
                                                change: function (a) {
                                                    return t.$emit("change_paper", { paper: e.key });
                                                },
                                            },
                                        }),
                                        t._v(" "),
                                        a("span", { staticClass: "outer", class: t.$style["radio-icon"] }, [a("span", { staticClass: "inner" })]),
                                        t._v(" "),
                                        a("span", { staticClass: "material-radio__label" }, [t._v(t._s(e.label))]),
                                    ]);
                                }),
                                0
                            ),
                        ]),
                        t._v(" "),
                        a("div", { staticClass: "column" }, [
                            a(
                                "div",
                                { attrs: { id: "extra-info" } },
                                ["none" !== t.paper ? a("list-bundle", { attrs: { heading: "Paper Details", list: t.paper_info, icon: "glyphicon glyphicon-ok" } }) : a("div", { staticClass: "printing-info" })],
                                1
                            ),
                        ]),
                    ]),
                    t._v(" "),
                    a(
                        "div",
                        [
                            a("alert-box", { attrs: { type: "info" } }, [
                                a("span", [t._v("All printing and calibration performed professionally on site using\n        an Epson SureColor P20070. Colours are calibrated with an Barbieri\n        Spectro LFP qb.")]),
                            ]),
                        ],
                        1
                    ),
                ]);
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        977: function (t, e, a) {
            "use strict";
            function n(t) {
                a(978);
            }
            var i = a(428),
                r = a(979),
                s = a(0),
                o = n,
                l = s(i.a, r.a, !1, o, null, null);
            e.a = l.exports;
        },
        978: function (t, e) { },
        979: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "extras-tab" }, [
                    a("ul", [
                        a("li", { staticClass: "extras-tab__spacer" }, [
                            a("div", [
                                a("label", { staticClass: "material-checkbox", class: { disabled: !t.allow_spacer }, attrs: { for: "spacer-input" } }, [
                                    a("input", { attrs: { type: "checkbox", disabled: !t.allow_spacer, id: "spacer-input", "aria-label": "Use a spacer" }, domProps: { checked: t.spacer }, on: { change: t.emitChangeSpacer } }),
                                    t._v(" "),
                                    t._m(0),
                                    t._v(" "),
                                    a("span", { staticClass: "material-checkbox__label" }, [t._v("Spacer")]),
                                ]),
                                t._v(" "),
                                a("div", [t._v("A spacer separates the artwork from the glass")]),
                                t._v(" "),
                                a("div", { staticStyle: { color: "red", "font-style": "italic", "font-size": "1.3rem", "font-weight": "400" } }, [t._v("\n          A spacer cannot be selected with non-reflective glass\n        ")]),
                            ]),
                            t._v(" "),
                            t._m(1),
                        ]),
                        t._v(" "),
                        a(
                            "li",
                            { staticClass: "extras-tab__inner-frame" },
                            [
                                a("label", { staticClass: "material-checkbox" }, [
                                    a("input", { attrs: { type: "checkbox", "aria-label": "Use an inner frame" }, domProps: { checked: !!t.slip }, on: { change: t.toggleSlip } }),
                                    t._v(" "),
                                    t._m(2),
                                    t._v(" "),
                                    a("span", { staticClass: "material-checkbox__label" }, [t._v("Inner Frame")]),
                                ]),
                                t._v(" "),
                                a("div", [t._v("An inner frame adds a unique style")]),
                                t._v(" "),
                                a(
                                    "keep-alive",
                                    [
                                        a("frame-picker", {
                                            directives: [{ name: "show", rawName: "v-show", value: !!t.slip, expression: "!!slip" }],
                                            staticClass: "transitioner",
                                            style: { opacity: t.slip ? 1 : 0.35 },
                                            attrs: { frames: t.slips },
                                            on: {
                                                change: function (e) {
                                                    return t.$emit("change_slip", { slip: e });
                                                },
                                            },
                                        }),
                                    ],
                                    1
                                ),
                            ],
                            1
                        ),
                    ]),
                ]);
            },
                i = [
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("span", { staticClass: "material-checkbox__check" }, [a("span", { staticClass: "fa fa-check" })]);
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("div", [a("div", { staticClass: "pic" })]);
                    },
                    function () {
                        var t = this,
                            e = t.$createElement,
                            a = t._self._c || e;
                        return a("span", { staticClass: "material-checkbox__check" }, [a("span", { staticClass: "fa fa-check" })]);
                    },
                ],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        980: function (t, e, a) {
            "use strict";
            e.a = function () {
                return {
                    id: "custom-frames-tour",
                    showPrevButton: !0,
                    showCloseButton: !0,
                    steps: [
                        {
                            title: "Let's get started",
                            content:
                                "This short tour will guide you through making your own custom frames online. You can interact with any part of the page throughout the tour and see the changes you make appear live here. Click ‘Next’ to begin",
                            target: document.querySelector("#main-canvas canvas"),
                            placement: "top",
                            yOffset: 100,
                            zindex: 999,
                        },
                        {
                            title: "Sizing or Uploading Images",
                            content: "Measure and enter the size of your photo or artwork that you’re framing below. You can also upload an image to have it professionally printed.",
                            target: document.querySelector("#dimensions-column"),
                            placement: "top",
                            arrowOffset: 128,
                            zindex: 999,
                        },
                        {
                            title: "Choose a Frame",
                            content: "Select a frame category below to view the range. Then browse through and select your favourite frame. You can try as many as you like.",
                            target: "#frames-tab",
                            placement: "top",
                            nextOnTargetClick: !0,
                            onShow: function () {
                                document.getElementById("frames-tab").click();
                            },
                            zindex: 999,
                        },
                        {
                            title: "Choose a Mat (Optional)",
                            content: "A mat board sits between your image and the frame. Choose your favourite colour to match your frame and image, be creative! Try a double mat for that special touch.",
                            target: "#mats-tab",
                            placement: "top",
                            onShow: function () {
                                document.getElementById("mats-tab").click();
                            },
                            zindex: 999,
                        },
                        {
                            title: "Choose a Glass Type (Optional)",
                            content: "We offer a range of glass types to suit different scenarios, <b>Clear Perspex</b> is our recommendation but you can select each option to see their features.",
                            target: "#glass-backing-tab",
                            placement: "top",
                            onShow: function () {
                                document.getElementById("glass-backing-tab").click();
                            },
                            zindex: 999,
                        },
                        {
                            title: "Choose a Backing Type (Optional)",
                            content:
                                "The backing you choose will sit behind your image/artwork.<br>Foam Core is a light, acid-free backing which will protect your images from fading. If you plan on changing photos often, then choose <b>MDF</b> or <b>Non-Adhesive Foam Core</b>. If we’re printing for you, we recommend <b>Adhesive Foam Core</b>",
                            target: "#backing-title",
                            placement: "top",
                            onShow: function () {
                                document.getElementById("glass-backing-tab").click();
                            },
                            zindex: 999,
                        },
                        {
                            title: "Choose a Paper Type (Optional)",
                            content: "Here you can view our selection of paper types, select a paper type to view more information on it.<br>If you’ve uploaded an image to use as a preview only, choose <b>No Printing</b>",
                            target: "#printing-tab",
                            xOffset: -220,
                            arrowOffset: 240,
                            placement: "top",
                            onShow: function () {
                                document.getElementById("printing-tab").click();
                            },
                            zindex: 999,
                        },
                        {
                            title: "Extra Options",
                            content: "We’re almost there! Here you can add some finishing touches to the frame.",
                            target: "#extras-tab",
                            placement: "top",
                            xOffset: -250,
                            arrowOffset: 260,
                            onShow: function () {
                                document.getElementById("extras-tab").click();
                            },
                            zindex: 999,
                        },
                        {
                            title: "Summary & Checkout",
                            content:
                                "In this area you can see a summary of your selections. When you have checked over the details, choose your quantity and click <b>Add to cart</b>.<br> Great job on making such a beautiful frame! You can still make any adjustments to your frame and if you have any questions or need recommendations don’t hesitate to contact us.",
                            target: "#checkout-total",
                            xOffset: "center",
                            arrowOffset: "center",
                            placement: "top",
                        },
                        999,
                    ],
                };
            };
        },
        981: function (t, e, a) {
            "use strict";
            var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [
                    a("div", { attrs: { id: "custom-framing-wrapper" } }, [
                        a(
                            "div",
                            { attrs: { id: "bg-wrapper" } },
                            [
                                a("div", { staticClass: "fs-page-title container", staticStyle: { "margin-bottom": "10px" } }, [
                                    a("h1", { staticClass: "main-title  is-full" }, [t._v("")]),
                                    t._v(" "),
                                    a("h3", { staticClass: "sub-heading is-full", staticStyle: { position: "relative", "margin-bottom": "7px" } }, [
                                        t._v("\n\n          "),
                                    ]),
                                ]),
                                t._v(" "),
                                a("mobile-preview-bar", { ref: "mobile_bar", attrs: { id: "mobile-bar", "appear-after-selector": "#dimensions" } }, [
                                    a("div", { staticClass: "mobile-bar__canvas-section", attrs: { slot: "preview" }, slot: "preview" }, [
                                        a(
                                            "div",
                                            [
                                                a(
                                                    "overlay",
                                                    { staticClass: "mobile-bar__canvas-container", attrs: { target: "#main-canvas canvas" } },
                                                    [
                                                        a("frame-engine", {
                                                            ref: "canvas",
                                                            attrs: {
                                                                id: "mobile-preview-canvas",
                                                                image_width: t.image_width,
                                                                image_height: t.image_height,
                                                                image_data: t.fc_image,
                                                                top_mat_data: t.fc_mats.top,
                                                                bottom_mat_data: t.fc_mats.bottom,
                                                                frame_data: t.fc_frame,
                                                                slip_data: t.fc_slip,
                                                                vgroove: t.vgroove,
                                                                spacer: t.spacer,
                                                                placeholder_text: t.fc_placeholder_text,
                                                            },
                                                        }),
                                                    ],
                                                    1
                                                ),
                                            ],
                                            1
                                        ),
                                    ]),
                                ]),
                                t._v(" "),
                                a("div", { staticClass: "container" }, [
                                    a("div", { staticClass: "columns is-desktop" }, [
                                        a(
                                            "div",
                                            { staticClass: "column", attrs: { id: "product-preview" } },
                                            [
                                                a(
                                                    "overlay",
                                                    { attrs: { id: "canvas-container", target: "#main-canvas canvas" } },
                                                    [
                                                        a("frame-engine", {
                                                            ref: "canvas",
                                                            attrs: {
                                                                id: "main-canvas",
                                                                image_width: t.image_width,
                                                                image_height: t.image_height,
                                                                image_data: t.fc_image,
                                                                top_mat_data: t.fc_mats.top,
                                                                bottom_mat_data: t.fc_mats.bottom,
                                                                frame_data: t.fc_frame,
                                                                slip_data: t.fc_slip,
                                                                vgroove: t.vgroove,
                                                                spacer: t.spacer,
                                                                placeholder_text: t.fc_placeholder_text,
                                                            },
                                                        }),
                                                    ],
                                                    1
                                                ),
                                            ],
                                            1
                                        ),
                                        t._v(" "),
                                        a(
                                            "div",
                                            { staticClass: "column is-half-desktop" },
                                            [
                                                a("div", { staticStyle: { display: "flex", "justify-content": "center", "margin-bottom": "7px" } }, [
                                                ]),
                                                t._v(" "),
                                                a(
                                                    "div",
                                                    [
                                                        a(
                                                            "dimensions",
                                                            {
                                                                ref: "dimensions",
                                                                attrs: {
                                                                    id: "dimensions",
                                                                    image_width: t.image_width,
                                                                    image_height: t.image_height,
                                                                    image: t.image,
                                                                    unit_type: t.unit_type,
                                                                    aspect_locked: t.aspect_locked,
                                                                    aspect_ratio: t.aspect_ratio,
                                                                    presets: t.image_size_presets,
                                                                    valid_dimensions: t.dimension_check.valid,
                                                                },
                                                                on: { change_width: t.updateImageWidth, change_height: t.updateImageHeight, change_dimensions: t.updateDimensions, change_units: t.updateUnitType },
                                                            },
                                                            [
                                                                a(
                                                                    "div",
                                                                    { staticClass: "field-body", attrs: { slot: "uploads", id: "uploads-column" }, slot: "uploads" },
                                                                    [
                                                                        a("user-gallery", {
                                                                            attrs: { can_preview: !0, enabled: !t.is_float_frame },
                                                                            on: { update_image: t.updateImage, clear_image: t.clearImage, delete_image: t.deleteImage, upload_complete: t.mergeImageData, preview_image: t.previewImage },
                                                                        }),
                                                                        t._v(" "),
                                                                        t.image && "none" !== t.paper
                                                                            ? a(
                                                                                "div",
                                                                                { staticStyle: { width: "100%" } },
                                                                                [
                                                                                    a(
                                                                                        "div",
                                                                                        [
                                                                                            t._v("\n                      Print Quality:\n                      "),
                                                                                            a("tooltip", { attrs: { "aria-label": "Upload quality estimation tooltip" } }, [
                                                                                                a("span", [
                                                                                                    t._v(
                                                                                                        "\n                          This tool checks your uploaded image and estimates\n                          the printing quality at the size you've entered. We\n                          recommend aiming for 'Good' or better, however we'll\n                          still be able to print your images regardless of the\n                          quality listed here. Please note that this is an\n                          estimate and may not be indicative of the final\n                          quality. You're always welcome to contact us to\n                          check your images for you.\n                        "
                                                                                                    ),
                                                                                                ]),
                                                                                            ]),
                                                                                        ],
                                                                                        1
                                                                                    ),
                                                                                    t._v(" "),
                                                                                    a("image-quality", { attrs: { image_width: t.image_width, image: t.image } }),
                                                                                ],
                                                                                1
                                                                            )
                                                                            : t._e(),
                                                                    ],
                                                                    1
                                                                ),
                                                            ]
                                                        ),
                                                    ],
                                                    1
                                                ),
                                                t._v(" "),
                                                a("tab-picker", { attrs: { tabs: t.tabs, selected_tab: t.selected_tab, properties: t.tab_props, listeners: t.tab_listeners }, on: { change: t.setOpenTab } }),
                                                t._v(" "),
                                                a(
                                                    "checkout",
                                                    {
                                                        ref: "checkout",
                                                        attrs: { quantity: t.quantity, price_breakdown: t.price_breakdown, can_checkout: t.can_checkout, fetching: t.fetching_price, is_checking_out: t.is_checking_out },
                                                        on: { "change-quantity": t.updateQuantity },
                                                    },
                                                    [
                                                        a("div", { staticClass: "column field is-grouped is-horizontal", staticStyle: { padding: "0", "flex-direction": "column" }, attrs: { slot: "top" }, slot: "top" }, [
                                                            a("div", { staticStyle: { display: "flex", "align-items": "baseline" } }, [
                                                                t._v(" "),
                                                            ]),
                                                            t._v(" "),
                                                            a("div", [t.pack_size ? a("div") : t._e()]),
                                                        ]),
                                                        t._v(" "),
                                                        a(
                                                            "add-to-cart-button",
                                                            { attrs: { slot: "cart-button", can_checkout: t.can_checkout, fetching: t.is_checking_out || t.fetching_price }, on: { "add-to-cart": t.addToCart }, slot: "cart-button" },
                                                            [a("span")]
                                                        ),
                                                        t._v(" "),
                                                        a(
                                                            "div",
                                                            [
                                                                a(
                                                                    "product-summary",
                                                                    { attrs: { summary: t.summary }, on: { click_label: t.handleSummaryClick } },
                                                                    [
                                                                        t._l(t.errors, function (e, n) {
                                                                            return a("alert-box", { key: n, attrs: { slot: "errors", type: "danger" }, slot: "errors" }, [a("span", { domProps: { innerHTML: t._s(e) } })]);
                                                                        }),
                                                                        t._v(" "),
                                                                        a("p", { attrs: { slot: "errors" }, slot: "errors" }, [
                                                                            t._v,
                                                                        ]),
                                                                    ],
                                                                    2
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
                                    ]),
                                ]),
                            ],
                            1
                        ),
                    ]),
                ]);
            },
                i = [],
                r = { render: n, staticRenderFns: i };
            e.a = r;
        },
        982: function (t, e, a) {
            "use strict";
            function n(t, e, a) {
                return e in t ? Object.defineProperty(t, e, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = a), t;
            }
            var i,
                r = a(24),
                s = a(132),
                o = a(983),
                l = a(984),
                c = a(985),
                u = a(986),
                d = a(987),
                m = a(988),
                h = a(989),
                p = a(990),
                f = a(62),
                g = a(15),
                v = a.n(g),
                b = a(112);
            r.default.use(s.a);
            var y = {
                glass_types: [
                    { key: "CLEAR", label: "Clear Glass", enabled: !0, description: "", disabled_reason: "" },
                    { key: "PERSPEX", label: "Clear Perspex", enabled: !0, description: "", disabled_reason: "" },
                    { key: "NON_REFLECTIVE", label: "Non-Reflective Glass", enabled: !0, description: "", disabled_reason: "Unavailable when a spacer is selected" },
                    { key: "UV_CLEAR", label: "UV Clear Glass", enabled: !0, description: "", disabled_reason: "" },
                    { key: "UV_NON_REFLECTIVE", label: "UV Non-Reflective Glass", enabled: !0, description: "", disabled_reason: "Unavailable when a spacer is selected" },
                    { key: "none", label: "No Glass", enabled: !0, disabled_reason: "" },
                ],
                backing_types: [
                    { key: "MDF", label: "MDF (Wood)", enabled: !0, description: "", disabled_reason: "Not available with printing." },
                    { key: "SELF_ADHESIVE_FOAMCORE", label: "Adhesive Foamcore", enabled: !0, description: "", disabled_reason: "" },
                    { key: "NON_ADHESIVE_FOAMCORE", label: "Non-Adhesive Foamcore", enabled: !0, description: "", disabled_reason: "Unavailable when printing and a spacer is selected" },
                    { key: "none", label: "No Backing", enabled: !1, description: "", disabled_reason: "Only available with <b>float frames</b>" },
                ],
                backing: "MDF",
                glass: "CLEAR",
                paper_types: [
                    { key: "LUSTER", label: "Semi-Gloss (Luster)", enabled: !0, description: "", disabled_reason: "" },
                    { key: "METALLIC", label: "High Gloss (Metallic)", enabled: !0, description: "", disabled_reason: "" },
                    { key: "ARCHIVAL_SMOOTH", label: "Matte Smooth (Archival)", enabled: !0, description: "", disabled_reason: "" },
                    { key: "none", label: "No Printing (preview only)", enabled: !0, description: "", disabled_reason: "" },
                ],
                paper: "none",
                pack_quantity: null,
                bulk_options: [{ key: null, quantity: null, discount: null, label: "Select a pack size" }],
            },
                w = {
                    has_glass: function (t) {
                        return "none" !== t.glass;
                    },
                    has_backing: function (t) {
                        return "none" !== t.backing;
                    },
                    has_printing: function (t) {
                        return "none" !== t.paper;
                    },
                    glass: function (t) {
                        return t.glass;
                    },
                    backing: function (t) {
                        return t.backing;
                    },
                    paper: function (t) {
                        return t.paper;
                    },
                    MAX_SIZE: function () {
                        return 152.5;
                    },
                },
                k = {
                    loadDefaults: function (t, e) {
                        var a = (t.state, t.commit),
                            n = t.dispatch,
                            i = (t.getters, e.original),
                            r = e.obj;
                        if (
                            (n("fetchFrameByCode", r.frame).catch(function () {
                                return n("fetchFrameByCode", i.frame);
                            }),
                                r.top_mat)
                        ) {
                            var s = {};
                            if (r.top_mat.size) {
                                var o = Math.max(1, r.top_mat.size);
                                Object.assign(s, { top: o, left: o, right: o, bottom: o });
                            } else
                                (s.top = r.top_mat.top ? Math.max(1, r.top_mat.top) : 5.1),
                                    (s.left = r.top_mat.left ? Math.max(1, r.top_mat.left) : 5.1),
                                    (s.right = r.top_mat.right ? Math.max(1, r.top_mat.right) : 5.1),
                                    (s.bottom = r.top_mat.bottom ? Math.max(1, r.top_mat.bottom) : 5.1);
                            ((s.top === s.left) === s.right) !== s.bottom && a(f.u, { width_type: "custom" }), r.top_mat.code ? (s.mat = r.top_mat.code) : (s.mat = "M34"), a(f.v, { number: 1 }), a(f.t, { position: "top", mat: s });
                        }
                        if (r.top_mat && r.bottom_mat) {
                            var l = {};
                            if (r.bottom_mat.size) {
                                var c = Math.max(0.5, r.bottom_mat.size);
                                Object.assign(l, { top: c, left: c, right: c, bottom: c });
                            }
                            r.bottom_mat.code && (l.mat = r.bottom_mat.code), a(f.v, { number: 2 }), a(f.t, { position: "bottom", mat: l });
                        }
                        "true" === r.vgroove && a(f.D, { vgroove: !0 }),
                            "true" === r.spacer && a(f.B, { spacer: !0, type: "auto" }),
                            "true" === r.image_overlap
                                ? a(f.w, { type: "PHOTO" })
                                : "PHOTO" === r.image_overlap
                                    ? a(f.w, { type: "PHOTO" })
                                    : "false" === r.image_overlap
                                        ? a(f.w, { type: "EXACT" })
                                        : "EXACT" === r.image_overlap && a(f.w, { type: "EXACT" }),
                            "cm" !== r.units.toLowerCase() && a(f.C, { unit_type: r.units.toLowerCase() }),
                            r.is_pack && n("updatePackQuantity", { quantity: r.pack_quantity }),
                            r.backing && a(f.m, { backing: r.backing }),
                            r.paper && a(f.y, { paper: r.paper }),
                            new Promise(function (t, e) {
                                if (r.image_id)
                                    return v.a
                                        .get("/api/gallery/image/" + r.image_id)
                                        .then(function (e) {
                                            a(f.q, { image: e.data.image }), a(f.s, { width: Math.max(1, +r.opening_width) }), a(f.r, { height: Math.max(1, +r.opening_height) }), t();
                                        })
                                        .catch(function () {
                                            return t();
                                        });
                                a(f.s, { width: Math.max(1, +r.opening_width) }), a(f.r, { height: Math.max(1, +r.opening_height) }), t();
                            }).then(function () {
                                a(f.o, { glass: r.glass }), a(f.m, { backing: r.backing }), r.hanger && a(f.p, { hanger: r.hanger });
                            });
                    },
                    updatePackQuantity: function (t, e) {
                        var a = t.commit,
                            n = t.state,
                            i = e.quantity;
                        n.bulk_options.find(function (t) {
                            return t.quantity === parseInt(i);
                        }) || (i = null),
                            a(f.x, { quantity: i });
                    },
                    updatePaper: function (t, e) {
                        var a = t.state,
                            n = t.commit,
                            i = (t.dispatch, t.rootState),
                            r = e.paper;
                        a.paper_types.find(function (t) {
                            return t.key === r;
                        }) && n(f.y, { paper: r });
                        var s = i.mats.opening_type;
                        "none" !== r && "EXACT" === s && n(f.w, { type: "PHOTO" });
                    },
                    fetchBulkOptions: function (t) {
                        var e = t.commit;
                        return (
                            e(f.c),
                            v.a
                                .get("/api/v2/bulk-options/:product_code=CUSTOM_PICTURE_FRAME")
                                .then(function (t) {
                                    return e(f.e, { options: t.data }), Promise.resolve({ options: t.data });
                                })
                                .catch(function (t) {
                                    return e(f.d), Promise.reject(t);
                                })
                        );
                    },
                },
                C =
                    ((i = {}),
                        n(i, f.h, function (t, e) {
                            var a = _.cloneDeep(t.bulk_options);
                            for (var n in e.breakdowns)
                                !(function (t) {
                                    var n = a.find(function (e) {
                                        return "" + e.key === t;
                                    });
                                    if (n) {
                                        var i = e.breakdowns[t].pack;
                                        n.label = "Pack of " + i.quantity + " @ $" + Object(b.b)(i.unit_price, 2, !0) + " each - Save " + i.discount_label;
                                    }
                                })(n);
                            t.bulk_options = a;
                        }),
                        n(i, f.x, function (t, e) {
                            var a = e.quantity;
                            t.pack_quantity = a;
                        }),
                        n(i, f.e, function (t, e) {
                            e.options.forEach(function (e) {
                                var a = { key: e.id, quantity: e.pack_quantity, discount: e.percent_discount, label: "" };
                                t.bulk_options.push(a);
                            });
                        }),
                        n(i, f.o, function (t, e) {
                            var a = e.glass;
                            t.glass_types.find(function (t) {
                                return t.key === a;
                            }) && (t.glass = a);
                        }),
                        n(i, f.m, function (t, e) {
                            var a = e.backing;
                            t.backing_types.find(function (t) {
                                return t.key === a;
                            }) && (t.backing = a);
                        }),
                        n(i, f.y, function (t, e) {
                            var a = e.paper;
                            (t.paper = a),
                                (t.backing_types.find(function (t) {
                                    return "MDF" === t.key;
                                }).enabled = "none" === a);
                        }),
                        n(i, f.q, function (t) {
                            (t.backing_types.find(function (t) {
                                return "MDF" === t.key;
                            }).enabled = !1),
                                "MDF" === t.backing && (t.backing = "SELF_ADHESIVE_FOAMCORE"),
                                "none" === t.paper && (t.paper = "LUSTER"),
                                t.extras.spacer &&
                                ((t.backing_types.find(function (t) {
                                    return "NON_ADHESIVE_FOAMCORE" === t.key;
                                }).enabled = !1),
                                    (t.backing = "SELF_ADHESIVE_FOAMCORE"));
                        }),
                        n(i, f.i, function (t) {
                            (t.backing_types.find(function (t) {
                                return "MDF" === t.key;
                            }).enabled = !0),
                                (t.backing_types.find(function (t) {
                                    return "NON_ADHESIVE_FOAMCORE" === t.key;
                                }).enabled = !0),
                                (t.paper = "none");
                        }),
                        n(i, f.B, function (t, e) {
                            var a = e.spacer;
                            t.glass_types.forEach(function (t) {
                                t.key.includes("NON_REFLECTIVE") && (t.enabled = !a);
                            }),
                                (t.backing_types.find(function (t) {
                                    return "NON_ADHESIVE_FOAMCORE" === t.key;
                                }).enabled = !(a && "none" !== t.paper));
                        }),
                        i),
                x = { mats: d.a, frames: u.a, prices: o.a, image_dimensions: l.a, frame_creator: c.a, checkout: m.a, validation: h.a, extras: p.a };
            e.a = new s.a.Store({ actions: k, getters: w, state: y, mutations: C, modules: x, strict: !1 });
        },
        983: function (t, e, a) {
            "use strict";
            function n(t, e, a) {
                return e in t ? Object.defineProperty(t, e, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = a), t;
            }
            var i,
                r = a(15),
                s = a.n(r),
                o = a(62),
                l = (a(112), a(28)),
                c = a.n(l),
                u = { frame: 0, slip: 0, top_mat: 0, bottom_mat: 0, vgroove: 0, glass: 0, backing: 0, hanger: 0, paper: 0, spacer: 0, total: 0, fetching_price: !1, materials: { backing: [], glass: [], paper: [] } },
                d = {
                    request_object: function (t, e, a, n) {
                        var i = n.final_product;
                        n.glass_width, n.glass_height;
                        return { batch: !0, items: { product: i } };
                    },
                    price_breakdown: function (t, e, a, n) {
                        var i = { frame: t.frame, top_mat: t.top_mat, bottom_mat: t.bottom_mat, vgroove: t.vgroove, glass: t.glass, backing: t.backing, hanger: t.hanger, paper: t.paper, spacer: t.spacer, slip: t.slip, total: t.total };
                        return n["validation/dimension"].valid ? i : Object.assign({}, i, { total: "N/A" });
                    },
                },
                m = (s.a.CancelToken, void 0),
                h = {
                    fetchPrice: function (t) {
                        var e = t.commit,
                            a = (t.getters, t.rootState),
                            n = t.rootGetters;
                        m && m(), e(o.k);
                        var i = _.cloneDeep(n.final_product),
                            r = { product: i };
                        a.bulk_options
                            .filter(function (t) {
                                return null !== t.key;
                            })
                            .map(function (t) {
                                var e = _.cloneDeep(i);
                                return (e.data.is_pack = !0), (e.data.pack_quantity = t.quantity), (e.data.quantity = 1), { obj: e, key: t.key };
                            })
                            .forEach(function (t) {
                                var e = t.obj,
                                    a = t.key;
                                r[a] = e;
                            });
                        var s = { batch: !0, items: r };
                        return c.a
                            .checkPrice(s)
                            .then(function (t) {
                                return e(o.h, t), Promise.resolve(t);
                            })
                            .catch(function (t) {
                                return Promise.reject(t);
                            });
                    },
                },
                p =
                    ((i = {}),
                        n(i, o.k, function (t) {
                            t.fetching_price = !0;
                        }),
                        n(i, o.h, function (t, e) {
                            t.total = e.price_list.product;
                            var a = { frame: 0, top_mat: 0, bottom_mat: 0, vgroove: 0, glass: 0, hanger: 0, backing: 0, paper: 0, spacer: 0, total: e.price_list.product };
                            Object.assign(t, a, e.breakdowns.product), (t.fetching_price = !1);
                        }),
                        i);
            e.a = { state: u, getters: d, actions: h, mutations: p };
        },
        984: function (t, e, a) {
            "use strict";
            function n(t, e, a) {
                return e in t ? Object.defineProperty(t, e, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = a), t;
            }
            function i(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
                    return a;
                }
                return Array.from(t);
            }
            var r,
                s = a(62),
                o = a(15),
                l = a.n(o),
                c = {
                    image_width: 10.2,
                    image_height: 15.3,
                    unit_type: "cm",
                    aspect_locked: !1,
                    image_size_presets: [
                        { width: 10.2, height: 15.2, label: '4" x 6" (10.2 x 15.2 cm)' },
                        { width: 12.7, height: 17.8, label: '5" x 7" (12.7 x 17.8 cm)' },
                        { width: 15.2, height: 20.3, label: '6" x 8" (15.2 x 20.3 cm)' },
                        { width: 20.3, height: 25.4, label: '8" x 10" (20.3 x 25.4 cm)' },
                        { width: 20.3, height: 30.5, label: '8" x 12" (20.3 x 30.5 cm)' },
                        { width: 27.9, height: 35.6, label: '11" x 14" (27.9 x 35.6 cm)' },
                        { width: 30.5, height: 40.6, label: '12" x 16" (30.5 x 40.6 cm)' },
                        { width: 40.6, height: 50.8, label: '16" x 20" (40.6 x 50.8 cm)' },
                        { width: 40.6, height: 61, label: '16" x 24" (40.6 x 61.0 cm)' },
                        { width: 45.6, height: 61, label: '18" x 24" (45.6 x 61.0 cm)' },
                        { width: 70.7, height: 100, label: "B1 (70.7 x 100.0 cm)" },
                        { width: 50, height: 70.7, label: "B2 (50.0 x 70.7 cm)" },
                        { width: 14.8, height: 21, label: "A5 (14.8 x 21.0 cm)" },
                        { width: 21, height: 29.7, label: "A4 (21.0 x 29.7 cm)" },
                        { width: 29.7, height: 42, label: "A3 (29.7 x 42.0 cm)" },
                        { width: 42, height: 59.4, label: "A2 (42.0 x 59.4 cm)" },
                        { width: 59.4, height: 84.1, label: "A1 (59.4 x 84.1 cm)" },
                        { width: 84.1, height: 118.9, label: "A0 (84.1 x 118.9 cm)" },
                    ],
                    images: [],
                    selected_image: null,
                    quality: 0,
                },
                u = {
                    width: null,
                    height: null,
                    stack: [],
                    getDimensions: function () {
                        var t = this.width,
                            e = this.height;
                        return this.reset(), { width: t, height: e };
                    },
                    setDimensions: function (t) {
                        var e = t.width,
                            a = t.height;
                        null === this.width && ((this.width = e), (this.height = a));
                    },
                    reset: function () {
                        (this.width = null), (this.height = null);
                    },
                },
                d = {
                    aspect_ratio: function (t) {
                        return t.selected_image ? t.selected_image.aspect_ratio : 1;
                    },
                    unit_type: function (t) {
                        return t.unit_type;
                    },
                    image_width: function (t) {
                        return t.image_width;
                    },
                    image_height: function (t) {
                        return t.image_height;
                    },
                    aspect_locked: function (t) {
                        return t.aspect_locked;
                    },
                    glass_width: function (t, e, a, n) {
                        var i = e.image_width;
                        if (n.has_top_mat) {
                            var r = n.top_mat;
                            i += r.left + r.right;
                        }
                        if (n.has_bottom_mat) {
                            var s = n.bottom_mat;
                            i += s.left + s.right;
                        }
                        return i;
                    },
                    glass_height: function (t, e, a) {
                        var n = e.image_height;
                        if (null !== a.mats.current_mats.top_mat.mat) {
                            var i = a.mats.current_mats.top_mat;
                            n += i.top + i.bottom;
                        }
                        if (null !== a.mats.current_mats.bottom_mat.mat) {
                            var r = a.mats.current_mats.bottom_mat;
                            n += r.top + r.bottom;
                        }
                        return n;
                    },
                    outside_width: function (t, e, a) {
                        var n = e.glass_width;
                        return e.has_frame && ((n += 2 * e.frame.width), (n -= 2 * e.frame.rebate)), n;
                    },
                    outside_height: function (t, e, a) {
                        var n = e.glass_height;
                        return e.has_frame && ((n += 2 * e.frame.width), (n -= 2 * e.frame.rebate)), n;
                    },
                    has_image: function (t) {
                        return null !== t.selected_image;
                    },
                    image: function (t) {
                        return t.selected_image;
                    },
                    images: function (t) {
                        return [].concat(i(t.images)).sort(function (t, e) {
                            return t.id < e.id;
                        });
                    },
                },
                m = {
                    previewImage: function (t, e) {
                        var a = (t.state, t.commit),
                            n = t.dispatch,
                            i = t.rootState,
                            r = e.image,
                            o = i.image_dimensions,
                            l = o.image_width,
                            c = o.image_height;
                        a(s.y, { paper: "none" }), a(s.q, { image: r }), a(s.y, { paper: "none" }), n("updateDimensions", { width: l, height: c });
                    },
                    updateDimensions: function (t, e) {
                        var a = t.commit,
                            n = e.width,
                            i = e.height;
                        a(s.s, { width: n }), a(s.r, { height: i });
                    },
                    fetchImages: function (t) {
                        var e = t.commit;
                        l.a.get("/api/gallery").then(function (t) {
                            e(s.l, { images: [].concat(i(t.data.images)) });
                        });
                    },
                    deleteImage: function (t, e) {
                        var a = t.commit,
                            n = t.state;
                        return new Promise(function (t, r) {
                            l.a
                                .delete("/api/gallery/image/" + e)
                                .then(function (r) {
                                    a(s.l, {
                                        images: [].concat(
                                            i(
                                                n.images.filter(function (t) {
                                                    return t.id !== e;
                                                })
                                            )
                                        ),
                                    }),
                                        n.selected_image && n.selected_image.id === e && a(s.i),
                                        t();
                                })
                                .catch(function (t) {
                                    r(t);
                                });
                        });
                    },
                    updateImage: function (t, e) {
                        var a = (t.state, t.commit),
                            n = e.image;
                        a(s.q, { image: n }), a(s.m, { backing: "SELF_ADHESIVE_FOAMCORE" });
                    },
                },
                h =
                    ((r = {}),
                        n(r, s.s, function (t, e) {
                            var a = e.width;
                            t.image_width = +a.toFixed(1);
                        }),
                        n(r, s.r, function (t, e) {
                            var a = e.height;
                            t.image_height = +a.toFixed(1);
                        }),
                        n(r, s.C, function (t, e) {
                            var a = e.unit_type;
                            t.unit_type = a;
                        }),
                        n(r, s.q, function (t, e) {
                            var a = e.image;
                            u.reset(), (t.aspect_locked = !1);
                            var n = a.width,
                                i = a.height;
                            if (((n *= 0.015), (i *= 0.015), n < 10 || i < 10)) {
                                var r = n / i;
                                n < i ? ((n = 10), (i = n / r)) : ((i = 10), (n = r * i));
                            }
                            (t.image_width = n), (t.image_height = i), (t.aspect_locked = !0), (t.selected_image = a);
                        }),
                        n(r, s.j, function (t, e) {
                            var a = e.image_data;
                            t.selected_image = a;
                        }),
                        n(r, s.y, function (t, e) {
                            var a = e.paper;
                            if ("none" === a && null !== t.selected_image) {
                                var n = t.image_width,
                                    i = t.image_height;
                                u.setDimensions({ width: n, height: i });
                            } else {
                                var r = u.getDimensions(),
                                    s = r.width,
                                    o = r.height;
                                null !== s && ((t.image_width = s), (t.image_height = o));
                            }
                            null !== t.selected_image ? (t.aspect_locked = "none" !== a) : (t.aspect_locked = !1);
                        }),
                        n(r, s.l, function (t, e) {
                            var a = e.images;
                            t.images = a;
                        }),
                        n(r, s.a, function (t, e) {
                            var a = e.image;
                            t.images = [].concat(i(t.images), [a]);
                        }),
                        n(r, s.i, function (t) {
                            (t.selected_image = null), (t.aspect_locked = !1), u.reset();
                        }),
                        n(r, s.b, function (t, e) {
                            var a = e.id;
                            t.selected_image && t.selected_image.id === a && ((t.selected_image = null), (t.aspect_locked = !1));
                        }),
                        r);
            e.a = { state: c, getters: d, actions: m, mutations: h };
        },
        985: function (t, e, a) {
            "use strict";
            var n = a(429),
                i = a.n(n),
                r = { canvas_element: null },
                s = {
                    fc_frame: function (t, e, a) {
                        var n = a.frames.current_frame;
                        return i()(n) ? null : { rebate: n.rebate, images: { tile: n.tile_image }, width: n.width };
                    },
                    fc_slip: function (t, e, a) {
                        var n = a.extras.slip;
                        return n ? { rebate: n.rebate, images: { tile: n.tile_image }, width: n.width } : null;
                    },
                    fc_mats: function (t, e, a) {
                        var n = { top: {}, bottom: {} },
                            i = a.mats.current_mats;
                        if (null === i.top_mat.mat) n.top = null;
                        else {
                            var r = i.top_mat,
                                s = r.top,
                                o = r.left,
                                l = r.right,
                                c = r.bottom,
                                u = r.mat;
                            Object.assign(n.top, u, { top: s, left: o, right: l, bottom: c });
                        }
                        if (null === i.bottom_mat.mat) n.bottom = null;
                        else {
                            var d = i.bottom_mat,
                                m = d.top,
                                h = d.left,
                                p = d.right,
                                _ = d.bottom,
                                f = d.mat;
                            Object.assign(n.bottom, f, { top: m, left: h, right: p, bottom: _ });
                        }
                        return n;
                    },
                    fc_image: function (t, e) {
                        var a = {},
                            n = e.image;
                        Object.assign(a, n);
                        var i = null;
                        return window && n && (i = n.images.large), (a.url = i), a;
                    },
                    fc_placeholder_text: function (t, e, a, n) {
                        var i = n.image_width,
                            r = n.image_height,
                            s = n.outside_width,
                            o = n.outside_height,
                            l = n.unit_type,
                            c = n.frame,
                            u = n.has_frame,
                            d = "inch" === l ? 2.54 : 1,
                            m = function (t) {
                                return +(t / d).toFixed(1);
                            };
                        "inch" === l && (l = "inches");
                        var h = 0;
                        return (
                            a.mats.number_of_mats > 0 ? "PHOTO" === a.mats.opening_type && (h = i >= 40 || r >= 40 ? 1 : 0.6) : u && (h = 2 * c.rebate),
                            ["Image Size: " + m(i) + " x " + m(r) + " " + l, "Visible (approx): " + m(i - h) + " x " + m(r - h) + " " + l, "Outside (approx): " + m(s) + " x " + m(o) + " " + l]
                        );
                    },
                },
                o = {},
                l = {};
            e.a = { state: r, getters: s, actions: o, mutations: l };
        },
        986: function (t, e, a) {
            "use strict";
            function n(t, e, a) {
                return e in t ? Object.defineProperty(t, e, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = a), t;
            }
            function i(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
                    return a;
                }
                return Array.from(t);
            }
            var r,
                s = a(59),
                o = a.n(s),
                l = a(429),
                c = a.n(l),
                u = a(15),
                d = a.n(u),
                m = a(185),
                h = a.n(m),
                p = a(62),
                _ = {
                    frames: [
                        { key: "popular", name: "Popular", icon: "star", loaded: !1, frames: [] },
                        { key: "on_sale", name: "On Sale", icon: "dollar", loaded: !1, frames: [] },
                        { key: "aluminium", name: "Aluminium", icon: null, loaded: !1, frames: [] },
                        { key: "black", name: "Black", icon: null, loaded: !1, frames: [] },
                        { key: "white", name: "White", icon: null, loaded: !1, frames: [] },
                        { key: "colourful", name: "Colourful", icon: null, loaded: !1, frames: [] },
                        { key: "stain", name: "Stains", icon: null, loaded: !1, frames: [] },
                        { key: "gold", name: "Gold", icon: null, loaded: !1, frames: [] },
                        { key: "silver", name: "Silver", icon: null, loaded: !1, frames: [] },
                        { key: "timber", name: "Raw Timber", icon: null, loaded: !1, frames: [] },
                        { key: "slips", name: "Slips", icon: null, loaded: !1, frames: [] },
                        { key: "float", name: "Float for Canvas", icon: null, loaded: !1, frames: [] },
                        { key: "search", name: "Search Results", icon: null, loaded: !1, frames: [], search_text: "" },
                    ],
                    current_frame: {},
                },
                f = {
                    has_frame: function (t) {
                        return !c()(t.current_frame);
                    },
                    frame: function (t) {
                        return t.current_frame;
                    },
                    is_float_frame: function (t) {
                        return "8-Float for Canvas" === o()(t, "current_frame.category");
                    },
                },
                g = null,
                v = {
                    fetchFrameById: function (t, e) {
                        var a = t.commit;
                        return d.a.get("/api/frames/" + e).then(function (t) {
                            var e = t.data.data;
                            if (null !== e) return a(p.n, { frame: e }), Promise.resolve(e);
                        });
                    },
                    fetchFrameByCode: function (t, e) {
                        var a = t.commit;
                        return d.a.get("/api/frames/code/" + e).then(function (t) {
                            var e = t.data.data;
                            if (null !== e) return a(p.n, { frame: e }), Promise.resolve(e);
                        });
                    },
                    fetchFrames: function (t, e) {
                        var a = t.commit;
                        return d.a.get("/api/frames/category/" + e).then(function (t) {
                            a(p.f, { key: e, frames: t.data.data });
                        });
                    },
                    queryFrames: function (t, e) {
                        var a = t.commit,
                            n = e.query,
                            i = e.key;
                        return n.length > 1
                            ? (g && g(),
                                a(p.f, { key: i, frames: [] }),
                                d.a
                                    .get("/api/frames/search/search_text=" + n, {
                                        cancelToken: new d.a.CancelToken(function (t) {
                                            return (g = t);
                                        }),
                                    })
                                    .then(function (t) {
                                        return a(p.f, { key: i, frames: t.data.data }), { frames: t.data.data };
                                    }))
                            : Promise.reject("Query must have at least 2 characters");
                    },
                    setCurrentFrame: function (t, e) {
                        var a = t.commit,
                            n = t.getters,
                            i = t.state,
                            r = e.frame,
                            s = function () {
                                return i.current_frame && i.current_frame.code.startsWith("108");
                            },
                            o = function () {
                                a(p.v, { number: 0 }),
                                    a(p.i),
                                    a(p.o, { glass: "none" }),
                                    a(p.y, { paper: "none" }),
                                    a(p.m, { backing: "none" }),
                                    a(p.A, { slip: null }),
                                    a(p.B, { spacer: !1 }),
                                    a(p.p, { hanger: "D_RINGS_STRING" }),
                                    a(p.n, { frame: r });
                            };
                        if (
                            (function () {
                                return r && r.code.startsWith("108");
                            })()
                        )
                            s()
                                ? o()
                                : h()({
                                    title: "Warning?",
                                    html: "Choosing this frame will remove your <b>mat, backing, image, and glass</b>.",
                                    type: "warning",
                                    showCancelButton: !0,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Continue",
                                }).then(function () {
                                    o();
                                });
                        else {
                            if (s()) {
                                if ("none" === n.backing) {
                                    var l = n.has_printing ? "NON_ADHESIVE_FOAMCORE" : "MDF";
                                    a(p.m, { backing: l });
                                }
                                "none" === n.glass && a(p.o, { glass: "CLEAR" });
                            }
                            a(p.n, { frame: r });
                        }
                    },
                },
                b =
                    ((r = {}),
                        n(r, p.f, function (t, e) {
                            var a = e.key,
                                n = e.frames,
                                r = t.frames.find(function (t) {
                                    return t.key === a;
                                });
                            (r.loaded = !0), (r.frames = [].concat(i(n)));
                        }),
                        n(r, p.n, function (t, e) {
                            var a = e.frame;
                            t.current_frame = a;
                        }),
                        r);
            e.a = { state: _, getters: f, actions: v, mutations: b };
        },
        987: function (t, e, a) {
            "use strict";
            function n(t, e, a) {
                return e in t ? Object.defineProperty(t, e, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = a), t;
            }
            function i(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
                    return a;
                }
                return Array.from(t);
            }
            var r,
                s = a(15),
                o = a.n(s),
                l = a(62),
                c = {
                    mats: [],
                    vgroove: !1,
                    number_of_mats: 0,
                    mat_width_type: "uniform",
                    opening_type: "PHOTO",
                    current_mats: { top_mat: { top: 5.1, left: 5.1, right: 5.1, bottom: 5.1, mat: null }, bottom_mat: { top: 0.5, left: 0.5, right: 0.5, bottom: 0.5, mat: null } },
                },
                u = {
                    matboards: function (t) {
                        return [].concat(i(t.mats)).sort(function (t, e) {
                            return t.sort_order - e.sort_order;
                        });
                    },
                    has_top_mat: function (t) {
                        return null !== t.current_mats.top_mat.mat;
                    },
                    has_bottom_mat: function (t) {
                        return null !== t.current_mats.bottom_mat.mat;
                    },
                    top_mat: function (t) {
                        return t.current_mats.top_mat;
                    },
                    bottom_mat: function (t) {
                        return t.current_mats.bottom_mat;
                    },
                },
                d = {
                    updateVgroove: function (t, e) {
                        var a = t.commit,
                            n = (t.dispatch, t.state),
                            i = e.vgroove;
                        a(l.D, { vgroove: i }), 0 === n.number_of_mats && a(l.v, { number: 1 });
                    },
                    fetchMats: function (t) {
                        var e = t.commit;
                        return o.a.get("/api/v2/matboards").then(function (t) {
                            e(l.g, { mats: t.data });
                        });
                    },
                },
                m =
                    ((r = {}),
                        n(r, l.D, function (t, e) {
                            var a = e.vgroove;
                            t.vgroove = a;
                        }),
                        n(r, l.g, function (t, e) {
                            var a = e.mats;
                            t.mats = [].concat(i(a));
                        }),
                        n(r, l.w, function (t, e) {
                            var a = e.type;
                            t.opening_type = a;
                        }),
                        n(r, l.u, function (t, e) {
                            var a = e.width_type;
                            if ("uniform" === a) {
                                var n = t.current_mats.top_mat.top;
                                Object.assign(t.current_mats.top_mat, { left: n, right: n, bottom: n });
                            }
                            t.mat_width_type = a;
                        }),
                        n(r, l.v, function (t, e) {
                            var a = e.number;
                            t.number_of_mats = a;
                            var n =
                                t.mats.find(function (t) {
                                    return "M34" === t.code;
                                }) || t.mats[0],
                                i = { mat: n },
                                r = { mat: null },
                                s = t.current_mats,
                                o = s.top_mat,
                                l = s.bottom_mat;
                            switch (a) {
                                case 0:
                                    Object.assign(o, r), Object.assign(l, r), (t.vgroove = !1);
                                    break;
                                case 1:
                                    Object.assign(l, r), null === o.mat && Object.assign(o, i);
                                    break;
                                case 2:
                                    null === o.mat && Object.assign(o, i), null === l.mat && Object.assign(l, i);
                            }
                        }),
                        n(r, l.t, function (t, e) {
                            var a = e.mat,
                                n = e.position;
                            if ("string" == typeof a.mat) {
                                var i = t.mats.find(function (t) {
                                    return t.code === a.mat;
                                });
                                if (!i) return;
                                a.mat = i;
                            }
                            Object.assign(t.current_mats[n + "_mat"], a), 0 === t.number_of_mats && (t.number_of_mats = 1);
                        }),
                        n(r, l.q, function (t, e) {
                            e.image;
                            "EXACT" === t.opening_type && (t.opening_type = "PHOTO");
                        }),
                        r);
            e.a = { state: c, getters: u, actions: d, mutations: m };
        },
        988: function (t, e, a) {
            "use strict";
            function n(t, e, a) {
                return e in t ? Object.defineProperty(t, e, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = a), t;
            }
            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            var r,
                s = a(28),
                o = a.n(s),
                l = a(15),
                c = (a.n(l), a(62)),
                u = a(22),
                d = function t(e) {
                    var a = e.heading,
                        n = e.value,
                        r = e.price;
                    i(this, t), (this.heading = a), (this.value = n), (this.price = r);
                },
                m = { quantity: 1 },
                h = {
                    final_product: function (t, e, a, n) {
                        var i = { type: "product", product_type: "CUSTOM_PICTURE_FRAME", quantity: t.quantity },
                            r = { image_width: +e.image_width.toFixed(1), image_height: +e.image_height.toFixed(1), frame: null, opening_type: a.mats.opening_type, hanger: a.extras.hanger, vgroove: a.mats.vgroove };
                        if (((r.is_pack = null !== a.pack_quantity), r.is_pack && (r.pack_quantity = a.pack_quantity), e.has_frame && (r.frame = e.frame.code), n.has_slip && (r.slip = n.slip.code), e.has_top_mat)) {
                            var s = e.top_mat,
                                o = s.top,
                                l = s.left,
                                c = s.bottom,
                                u = s.right,
                                d = s.mat;
                            r.top_mat = { top: o, left: l, bottom: c, right: u, code: d.code, name: d.name };
                        }
                        if (e.has_bottom_mat) {
                            var m = e.bottom_mat,
                                h = m.top,
                                p = m.left,
                                _ = m.bottom,
                                f = m.right,
                                g = m.mat;
                            r.bottom_mat = { top: h, left: p, bottom: _, right: f, code: g.code, name: g.name };
                        }
                        return (
                            e.has_glass && (r.glass = e.glass),
                            e.has_backing && (r.backing = e.backing),
                            e.has_printing && (r.paper = e.paper),
                            e.has_image && e.has_printing && ((r.image = { url: ("" + e.image.images.large).replace("_large.jpg", "_original.jpg"), name: e.image.name, paper: e.paper }), (r.image_id = e.image.id)),
                            n.has_spacer && (r.spacer = "Spacer"),
                            (i.data = r),
                            i
                        );
                    },
                    summary: function (t, e, a, n) {
                        var i = [],
                            r = n.price_breakdown,
                            s = n.has_frame,
                            o = n.frame,
                            l = n.has_top_mat,
                            c = n.top_mat,
                            u = n.has_bottom_mat,
                            m = n.bottom_mat,
                            h = n.has_glass,
                            p = n.has_backing,
                            _ = n.has_printing,
                            f = n.has_image,
                            g = n.image_width,
                            v = n.image_height,
                            b = n.glass_width,
                            y = n.glass_height,
                            w = n.outside_width,
                            k = n.outside_height,
                            C = n.has_spacer,
                            x = (n.spacer, n.has_slip),
                            E = n.slip,
                            P = n["validation/dimension"],
                            S = a.extras.hanger,
                            O = a.mats.vgroove,
                            I = a.pack_quantity;
                        if (null !== I) {
                            var A = 1 === t.quantity ? "1 pack" : t.quantity + " packs";
                            i.push(new d({ heading: "Total Quantity", value: A + " of " + I, price: null }));
                        }
                        s && i.push(new d({ heading: "Frame", value: o.code, price: r.frame })),
                            x && i.push(new d({ heading: "Slip", value: E.code, price: r.slip })),
                            C && i.push(new d({ heading: "Spacer", value: '<i class="fa fa-check"></i>', price: r.spacer }));
                        var $ = function (t) {
                            return t.code + " " + t.name;
                        };
                        if (
                            (l && i.push(new d({ heading: "Mat (Top)", value: $(c.mat), price: r.top_mat })),
                                u && i.push(new d({ heading: "Mat (Bottom)", value: $(m.mat), price: r.bottom_mat })),
                                O && i.push(new d({ heading: "V Groove", value: '<i class="fa fa-check"></i>', price: r.vgroove })),
                                h)
                        ) {
                            var T = a.glass_types.find(function (t) {
                                return t.key === n.glass;
                            }).label;
                            i.push(new d({ heading: "Glass", value: T, price: r.glass }));
                        }
                        if (p) {
                            var F = a.backing_types.find(function (t) {
                                return t.key === n.backing;
                            }).label;
                            i.push(new d({ heading: "Backing", value: F, price: r.backing }));
                        }
                        if (_) {
                            var G = a.paper_types.find(function (t) {
                                return t.key === n.paper;
                            }).label;
                            i.push(new d({ heading: "Printing", value: G, price: r.paper }));
                        } else !_ && f && i.push(new d({ heading: "Printing", value: "none", price: r.paper }));
                        return (
                            i.push(
                                new d({
                                    heading: "Hanger",
                                    value: n.hanger_types.find(function (t) {
                                        return t.key === S;
                                    }).label,
                                    price: null,
                                })
                            ),
                            i.push(new d({ heading: "Image Size", value: g.toFixed(1) + " x " + v.toFixed(1) + " cm", price: null })),
                            i.push(new d({ heading: "Glass Size (approx)", value: b.toFixed(1) + " x " + y.toFixed(1) + " cm", price: null })),
                            i.push(new d({ heading: "Outside Size (approx)", value: w.toFixed(1) + " x " + k.toFixed(1) + " cm", price: null })),
                            P.valid ||
                            i.forEach(function (t) {
                                return (t.price = "N/A");
                            }),
                            i
                        );
                    },
                },
                p = {
                    addToCart: function (t) {
                        var e = (t.state, t.commit, t.getters),
                            a = (t.rootState, e.final_product);
                        return (a.data.thumb = Object(u.makeThumb)(document.querySelector(".frame-engine__canvas"))), o.a.addToCart(a);
                    },
                },
                _ =
                    ((r = {}),
                        n(r, c.z, function (t, e) {
                            var a = e.quantity;
                            a < 1 && (a = 1), (t.quantity = a);
                        }),
                        n(r, c.x, function (t) {
                            t.quantity = 1;
                        }),
                        r);
            e.a = { state: m, getters: h, actions: p, mutations: _ };
        },
        989: function (t, e, a) {
            "use strict";
            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            var i = function t(e) {
                var a = e.valid,
                    i = e.message;
                n(this, t), (this.valid = a), (this.message = i);
            },
                r = {},
                s = {
                    dimension: function (t, e, a, n) {
                        var r = { cm: { min: 10, max_1: 101.5, max_2: 152.5 }, inch: { min: 4, max_1: 40, max_2: 60 } },
                            s = "cm" === n.unit_type ? 1 : 2.54,
                            o = r[n.unit_type],
                            l = o.min,
                            c = o.max_1,
                            u = o.max_2,
                            d = n.glass_width >= l * s && n.glass_height >= l * s,
                            m = n.glass_width <= c * s && n.glass_height <= u * s,
                            h = n.glass_width <= u * s && n.glass_height <= c * s,
                            p = "";
                        return (
                            (n.has_top_mat || n.has_bottom_mat) && (p = "including mats "),
                            new i({ valid: d && (m || h), message: "The size entered " + p + "should be within the following dimensions: <br>Min : " + l + " x " + l + " " + n.unit_type + " , Max : " + c + " x " + u + " " + n.unit_type })
                        );
                    },
                    max_dimension: function (t, e, a, n) {
                        var r = { cm: { min: 10, max_1: 101.5, max_2: 152.5 }, inch: { min: 4, max_1: 40, max_2: 60 } },
                            s = "cm" === n.unit_type ? 1 : 2.54,
                            o = r[n.unit_type],
                            l = o.max_1,
                            c = o.max_2,
                            u = n.glass_width <= l * s && n.glass_height <= c * s,
                            d = n.glass_width <= c * s && n.glass_height <= l * s,
                            m = "";
                        return (n.has_top_mat || n.has_bottom_mat) && (m = "including mats "), new i({ valid: u || d, message: "The size entered " + m + "should be less than <b>" + l + " x " + c + "</b> " + n.unit_type });
                    },
                    frame: function (t, e, a, n) {
                        if (!n.has_frame) return { valid: !0 };
                        var r = n.glass_width,
                            s = n.glass_height,
                            o = n.frame,
                            l = Math.max(r, s);
                        Math.min(r, s);
                        return new i({ valid: !n.has_frame || l <= o.max, message: "The selected frame can only support a maximum length of <b>" + o.max + " cm</b>. Please choose a different frame or adjust the size." });
                    },
                    paper_without_upload: function (t, e, a, n) {
                        var r = n.paper,
                            s = n.has_image,
                            o = !0;
                        return s || "none" === r || (o = !1), new i({ valid: o, message: "You have selected a printing paper but have not chosen an image.<br>Please either select an image or set your paper type to <b>no printing</b>" });
                    },
                    currently_uploading_image: function (t, e, a, n) {
                        var r = n.image,
                            s = !(r && 0 === ("" + r.id).indexOf("__FILE_UPLOAD__"));
                        return new i({ valid: s, message: "Your image is still being uploaded. Please wait until it finishes uploading before checking out." });
                    },
                    all: function (t, e) {
                        return [e.dimension, e.frame, e.paper_without_upload, e.currently_uploading_image]
                            .filter(function (t) {
                                return !t.valid;
                            })
                            .map(function (t) {
                                return t.message;
                            });
                    },
                },
                o = {},
                l = {};
            e.a = { namespaced: !0, state: r, getters: s, actions: o, mutations: l };
        },
        990: function (t, e, a) {
            "use strict";
            function n(t, e, a) {
                return e in t ? Object.defineProperty(t, e, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = a), t;
            }
            var i,
                r = a(62),
                s = { spacer: !1, spacer_type: "auto", hanger: "HANGER_STANDBACK", slip: null },
                o = {
                    has_spacer: function (t) {
                        return t.spacer;
                    },
                    spacer: function (t) {
                        return t.spacer ? "yes" : "none";
                    },
                    has_slip: function (t) {
                        return !!t.slip;
                    },
                    slip: function (t) {
                        return t.slip;
                    },
                    hanger_types: function (t, e, a, n) {
                        var i = n.glass_width,
                            r = n.glass_height,
                            s = n.backing,
                            o = n.has_backing,
                            l = n.has_frame,
                            c = n.frame,
                            u = l && c.width < 2,
                            d = l && c.code.startsWith("108"),
                            m = i > 45 || r > 45,
                            h = o && s.includes("FOAMCORE"),
                            p = (i <= 29.7 && r <= 21) || (i <= 21 && r <= 29.7),
                            _ = !1,
                            f = !1,
                            g = p;
                        return (
                            d ? ((_ = !1), (g = !1), (f = !0)) : u ? ((_ = !0), (f = !1)) : m || h ? ((_ = !1), (f = !0)) : ((_ = !0), (f = !0)),
                            [
                                {
                                    key: "HANGER_STANDBACK",
                                    label: "Standback + Hanger",
                                    image: "/public/static/images/hangers/hanger_standback.png",
                                    enabled: g,
                                    disabled_reason: "Only available for products smaller than A4 glass size (including matboards)",
                                    description: "Standbacks will let your image stand on its own, perfect for tables and displays",
                                },
                                {
                                    key: "METAL_HANGERS",
                                    label: "Metal Hangers",
                                    image: "/public/static/images/hangers/metal_hangers.png",
                                    enabled: _,
                                    disabled_reason: "Can not be selected with foamcore backing, or if the glass width or height is greater than 45cm",
                                    description: "Metal hangers are suitable for smaller items, and are very easy to hang. <br> Will be set up for both portrait and landscape hanging",
                                },
                                {
                                    key: "D_RINGS_STRING",
                                    label: "D-rings & string",
                                    image: "/public/static/images/hangers/d_ring_string.png",
                                    enabled: f,
                                    disabled_reason: "Only frames larger than 2cm can support d-rings",
                                    description: "D-rings & string provide sturdy a sturdy hanging system for larger items. <br> Will be set up in the orientation you see in the preview",
                                },
                            ]
                        );
                    },
                },
                l = {},
                c =
                    ((i = {}),
                        n(i, r.B, function (t, e) {
                            var a = e.spacer,
                                n = e.type;
                            (t.spacer = a), (t.spacer_type = n);
                        }),
                        n(i, r.p, function (t, e) {
                            var a = e.hanger;
                            t.hanger = a;
                        }),
                        n(i, r.A, function (t, e) {
                            var a = e.slip;
                            t.slip = a;
                        }),
                        i);
            e.a = { state: s, getters: o, actions: l, mutations: c };
        },
        991: function (t, e, a) {
            "use strict";
            e.a = {
                install: function (t, e) {
                    Object.defineProperty(t.prototype, "$scale", {
                        get: function () {
                            return "inch" === this.$store.state.image_dimensions.unit_type ? 2.54 : 1;
                        },
                    }),
                        (t.prototype.$getScaled = function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                            return t ? +(t / this.$scale).toFixed(e) : "";
                        }),
                        (t.prototype.$setScaled = function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                            return t ? +(t * this.$scale).toFixed(e) : "";
                        });
                },
            };
        },
    },
    [852]
);
//# sourceMappingURL=custom_framing.js.map?5a4b53700433ca6e0f80
