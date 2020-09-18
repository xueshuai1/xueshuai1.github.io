(function (c, r) {
    var a = c.getElementById("paramsSetBtn");
    var n = c.getElementById("paramsPanel");
    var i = c.getElementById("paramsPanelUl");
    var u = {
        floatPrecision: 3,
        gzip: true,
        original: false,
        pretty: false,
        plugins: {}
    };
    var e = function () {
        var e = {
            "plugins": [{
                    "id": "removeDoctype",
                    "name": "移除doctype",
                    "active": true
                },
                {
                    "id": "removeXMLProcInst",
                    "name": "移除XML指令",
                    "active": true
                },
                {
                    "id": "removeComments",
                    "name": "移除注释",
                    "active": true
                },
                {
                    "id": "removeMetadata",
                    "name": "移除<metadata>",
                    "active": true
                },
                {
                    "id": "removeXMLNS",
                    "name": "移除xmlns",
                },
                {
                    "id": "removeEditorsNSData",
                    "name": "移除编辑器数据",
                    "active": true
                },
                {
                    "id": "cleanupAttrs",
                    "name": "清除属性空格",
                    "active": true
                },
                {
                    "id": "inlineStyles",
                    "name": "内联样式",
                    "active": true
                },
                {
                    "id": "minifyStyles",
                    "name": "压缩styles",
                    "active": true
                },
                {
                    "id": "convertStyleToAttrs",
                    "name": "转换样式为属性",
                    "active": true,
                },
                {
                    "id": "cleanupIDs",
                    "name": "清除ID",

                },
                {
                    "id": "removeRasterImages",
                    "name": "移除栅格图像"
                },
                {
                    "id": "removeUselessDefs",
                    "name": "移除未使用的defs",
                    "active": true
                },
                {
                    "id": "cleanupNumericValues",
                    "name": "数字四舍五入重写",
                    "active": true
                },
                {
                    "id": "cleanupListOfValues",
                    "name": "优化列表的值"
                },
                {
                    "id": "convertColors",
                    "name": "压缩色值",
                    "active": true
                },
                {
                    "id": "removeUnknownsAndDefaults",
                    "name": "移除未知值和默认值",
                    "active": true
                },
                {
                    "id": "removeNonInheritableGroupAttrs",
                    "name": "移除不必要的组属性",
                    "active": true
                },
                {
                    "id": "removeUselessStrokeAndFill",
                    "name": "移除未使用的stroke和fill",
                    "active": true
                },
                {
                    "id": "removeViewBox",
                    "name": "移除viewBox",
                    "active": false
                },
                {
                    "id": "cleanupEnableBackground",
                    "name": "移除/整理可用背景",
                    "active": true
                },
                {
                    "id": "removeHiddenElems",
                    "name": "移除隐藏的元素",
                    "active": true
                },
                {
                    "id": "removeEmptyText",
                    "name": "移除空的text",
                    "active": true
                },
                {
                    "id": "convertShapeToPath",
                    "name": "图形转路径",
                    "active": true
                },
                {
                    "id": "moveElemsAttrsToGroup",
                    "name": "移动元素属性到组",
                    "active": true
                },
                {
                    "id": "moveGroupAttrsToElems",
                    "name": "移动group属性到元素",
                    "active": true
                },
                {
                    "id": "collapseGroups",
                    "name": "合并组",
                    "active": true
                },
                {
                    "id": "convertPathData",
                    "name": "转换路径数据",
                    "active": true
                },
                {
                    "id": "convertTransform",
                    "name": "转换transform",
                    "active": true
                },
                {
                    "id": "removeEmptyAttrs",
                    "name": "移除空的属性",
                    "active": true
                },
                {
                    "id": "removeEmptyContainers",
                    "name": "移除空的容器",
                    "active": true
                },
                {
                    "id": "mergePaths",
                    "name": "合并路径",
                    "active": true
                },
                {
                    "id": "removeUnusedNS",
                    "name": "移除未使用命名空间",
                    "active": true
                },
                {
                    "id": "sortAttrs",
                    "name": "属性排序"
                },
                {
                    "id": "removeTitle",
                    "name": "移除<title>",
                    "active": true
                },
                {
                    "id": "removeDesc",
                    "name": "移除<desc>",
                    "active": true
                },
                {
                    "id": "removeDimensions",
                    "name": "删除尺寸",
                    "active": true
                },
                {
                    "id": "removeStyleElement",
                    "name": "移除style元素"
                },
                {
                    "id": "removeScriptElement",
                    "name": "移除script元素"
                }
            ]
        };
        var n = "";
        e.plugins.forEach(function (e, t) {
            var a = "";
            if (e.active) {
                u.plugins[e.id] = true;
                a = "checked"
            } else {
                u.plugins[e.id] = false
            }
            var r = "paramsSwitch" + t;
            n = n + '<li class="params-panel-li ell"><input type="checkbox" name="' + e.id + '" ' + a + ' id="' + r + '"><label class="ui-switch" for="' + r + '"></label><label for="' + r + '" class="params-txt">' + e.name.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</label></li>"
        });
        if (i) {
            i.innerHTML = n
        }
    };
    e();
    if (a && n) {
        a.addEventListener("click", function () {
            n.classList.toggle("dn")
        });
        c.addEventListener("mouseup", function (e) {
            var t = e.target;
            if (!n.classList.contains("dn") && t != n && t != a && n.contains(t) == false) {
                n.classList.add("dn")
            }
        })
    }
    var t = c.getElementById("scrollDetect");
    if (t && 100 - t.clientWidth > 10 && typeof c.webkitHidden != "undefined") {
        c.body.classList.add("scrollbar")
    }
    var d = function (e, t, a) {
        var r = c.createElement("span");
        r.className = "text-popup";
        c.body.appendChild(r);
        r.innerHTML = e;
        r.addEventListener("animationend", function () {
            r.parentNode.removeChild(r)
        });
        r.style.left = t - r.clientWidth / 2 + "px";
        r.style.top = a - r.clientHeight + "px"
    };
    var s = c.getElementById("lightError");
    s.addEventListener("mousedown", function () {
        this.classList.add("dn")
    });
    var v = function (e) {
        if (s && e) {
            s.classList.remove("dn");
            s.querySelector("span").innerHTML = e;
            setTimeout(function () {
                s.classList.add("dn")
            }, 3e3);
            console.error(e)
        }
    };
    var l = c.getElementById("spritesError");
    if (l) {
        l.addEventListener("click", function () {
            this.innerHTML = ""
        })
    }
    var o = c.getElementById("removeFill");
    var f = c.querySelector("#areaSprites");
    var g = /fill=\"(?:#?\w+|url\(#(?:\w|\-)+\))\"/g;
    if (o && f) {
        o.addEventListener("click", function (e) {
            f.value = f.value.replace(g, "");
            d("移除成功", e.pageX, e.pageY);
            this.className = "gray"
        })
    }
    var p = c.getElementById("previewX");
    var m = c.getElementById("resultTbody");
    var y = c.getElementById("fileSVG");
    var h = c.getElementById("fileDragArea");
    var E = c.getElementById("tempResult");
    var L = E.innerHTML;
    m.removeChild(E);
    String.prototype.temp = function (a) {
        return this.replace(/\{\{\w+\}\}/gi, function (e) {
            var t = a[e.replace(/[\{\}]/g, "")];
            return t + "" == "undefined" ? "" : t
        })
    };
    var b = {
        layout: function () {
            if (!p || !m) {
                return this
            }
            if (!m.querySelector("tr")) {
                p.classList.add("dn")
            } else {
                p.classList.remove("dn")
            }
        },
        sprites: function () {
            var e = m.querySelectorAll(".jsAreaSvgo");
            if (e.length == 0 || !f) {
                return
            }
            var a = function (e, t) {
                var a = e;
                if (!e) {
                    return ""
                }
                t = t || "";
                var r = e.match(/viewBox="[\s\w]+"/i);
                var n = r && r[0];
                return a.replace(/<\/svg>/i, "</symbol>").replace(/<svg([\w\W]*?)>/, '<symbol id="' + t + '" ' + n + ">")
            };
            var r = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display:none;">';
            Array.from(e).forEach(function (e) {
                var t = e.getAttribute("data-filename");
                r += a(e.value, t)
            });
            r += "</svg>";
            f.value = r;
            if (g.test(r)) {
                o.className = "blue"
            } else {
                o.className = "gray"
            }
            var t = r.match(/id=[\'\"]+([\w\W]*?)[\'\"]+/g);
            var n = false;
            if (t && t.length > 1) {
                t.forEach(function (a, r) {
                    if (n == false) {
                        t.forEach(function (e, t) {
                            if (r != t && a.replace(/\'|\"/g, "") == e.replace(/\'|\"/g, "")) {
                                n = a
                            }
                        })
                    }
                })
            }
            if (l) {
                l.innerHTML = n ? "下面sprites合并的代码中存在重复的id属性值" + n.split("=")[1].replace(/\'|\"/g, "") : ""
            }
        },
        events: function () {
            if (!p) {
                return
            }
            p.addEventListener("click", function (e) {
                var t = e.target;
                if (!t || t.tagName.toUpperCase() != "A") {
                    return
                }
                var a = t.getAttribute("data-type");
                var r = t.getAttribute("data-rel");
                if (a == "delete") {
                    Array.from(m.querySelectorAll("tr")).forEach(function (e) {
                        if (e.contains(t)) {
                            m.removeChild(e)
                        }
                    });
                    b.layout();
                    b.sprites();
                    return
                }
                if (!a || !r) {
                    return
                }
                var n = c.getElementById(r);
                if (!n) {
                    return
                }
                if (!n.value) {
                    v("没有需要" + a + "的内容");
                    return
                }
                if (a == "copy") {
                    var i = c.activeElement;
                    n.focus();
                    n.setSelectionRange(0, n.value.length);
                    c.execCommand("copy", true);
                    i.focus();
                    i.blur();
                    d("复制成功", e.pageX, e.pageY)
                } else if (a == "download") {
                    var s = n.getAttribute("data-filename") || +new Date;
                    if (n.id != "areaSprites") {
                        s = s
                    }
                    s += ".svg";
                    var l = c.createElement("a");
                    l.download = s;
                    l.style.display = "none";
                    var o = new Blob([n.value], {
                        type: "image/svg+xml"
                    });
                    l.href = URL.createObjectURL(o);
                    c.body.appendChild(l);
                    l.click();
                    c.body.removeChild(l)
                }
            });
            if (h) {
                r.addEventListener("dragenter", function (e) {
                    e.preventDefault()
                }, false);
                r.addEventListener("dragover", function (e) {
                    e.preventDefault()
                }, false);
                h.addEventListener("dragover", function () {
                    this.classList.add("over")
                }, false);
                h.addEventListener("dragleave", function () {
                    this.classList.remove("over")
                }, false);
                h.addEventListener("drop", function (e) {
                    b.files(e.dataTransfer.files);
                    e.preventDefault()
                }, false)
            }
            if (y) {
                y.addEventListener("change", function (e) {
                    b.files(e.target.files)
                }, false)
            }
            c.addEventListener("paste", function (e) {
                var t = (e.clipboardData || r.clipboardData).getData("text");
                t = t.replace(/[^\x20-\xFF]/gi, "");
                if (/<svg[\w\W]*?>[\w\W]+<\/svg>/gi.test(t)) {
                    var a = b.render(t);
                    m.insertAdjacentHTML("afterbegin", a);
                    b.layout();
                    b.sprites()
                } else {
                    v("粘贴文本并未包含SVG信息")
                }
            });
            i.addEventListener("click", function (e) {
                if (e.target && e.target.type == "checkbox") {
                    b.setting()
                }
            });
            var e = c.getElementById("paramsFrom");
            if (e) {
                e.addEventListener("reset", function () {
                    setTimeout(function () {
                        b.setting()
                    })
                })
            }
        },
        setting: function () {
            var e = i.querySelectorAll('input[type="checkbox"]');
            Array.from(e).forEach(function (e) {
                var t = e.name;
                var a = e.checked;
                u.plugins[t] = a
            });
            var t = c.querySelectorAll(".jsAreaOrigin");
            Array.from(t).forEach(function (e, t) {
                var a = e.value;
                self.svgo({
                    id: t,
                    action: "load",
                    data: a
                });
                var r = self.svgo({
                    id: t,
                    action: "process",
                    settings: u
                }).result;
                var n = r.data;
                n = n.replace("<style/>", "").replace("<defs></defs>", "");
                var i = b.encode(n);
                var s = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(n)));
                var l = e.parentElement.parentElement;
                var o = l.querySelector(".jsAreaSvgo");
                var c = l.querySelector(".jsAreaEncode");
                var d = l.querySelector(".jsBase64Encode");
                var v = l.querySelector(".jsSvgPreview");
                var f = l.querySelector(".jsOptimizeRatio");
                if (o) {
                    o.value = n
                }
                if (d) {
                    d.value = s
                }
                if (c) {
                    c.value = i
                }
                if (v) {
                    v.innerHTML = n
                }
                if (f) {
                    f.innerHTML = b.ratio(a, n)
                }
            });
            b.sprites()
        },
        ratio: function (e, t) {
            e = e || "";
            t = t || "";
            var a = Math.ceil(100 * e.length / 1024) / 100;
            var r = Math.ceil(100 * t.length / 1024) / 100;
            var n = Math.round(1e3 * (e.length - t.length) / e.length) / 10;
            return a + "k → " + r + 'k <span class="green">↓' + n + "%</span>"
        },
        encode: function (e) {
            return "data:image/svg+xml," + e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/{/g, "%7B").replace(/}/g, "%7D").replace(/</g, "%3C").replace(/>/g, "%3E")
        },
        render: function (e, t) {
            if (!e) {
                return ""
            }
            var a = (Math.random() + "").replace("0.", "");
            var r = {
                filename: t || +new Date,
                idSvgo: "svgo" + a,
                idEncode: "encode" + a,
                idBase64: "base64" + a,
                originSvg: e,
                optimizeSvg: "",
                encodeSVG: "",
                optimizeRatio: ""
            };
            self.svgo({
                id: a,
                action: "load",
                data: e
            });
            var n = self.svgo({
                id: a,
                action: "process",
                settings: u
            }).result;
            var i = n.data;
            if (/NaN/.test(i)) {
                i = e
            }
            i = i.replace("<style/>", "").replace("<defs></defs>", "");
            r.optimizeSvg = i;
            var s = i;
            r.base64SVG = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(s)));
            r.encodeSVG = this.encode(s);
            r.optimizeRatio = b.ratio(e, r.optimizeSvg);
            return L.temp(r)
        },
        files: function (a) {
            var e = a.length;
            var r = 0;
            var n = "";
            var i = new FileReader;
            var s = function () {
                var e = a[r];
                if (!e) {
                    m.insertAdjacentHTML("afterbegin", n);
                    b.layout();
                    b.sprites();
                    return
                }
                var t = e.name;
                if (/svg/i.test(e.type) && /svg$/i.test(t)) {
                    i.onload = function (e) {
                        var svgDom = document.createElement("div");
                        svgDom.innerHTML = e.target.result;
                        if (svgDom.children[0].querySelector("defs")) {
                            var defsDom = svgDom.children[0].querySelector("defs").children;
                            var nodelist = svgDom.children[0].querySelectorAll("*");
                            var map = new Map();
                            for (let item of defsDom) {
                                map.set(item.id, item);
                            }
                            nodelist.forEach(item => {
                                let fill = item.attributes.getNamedItem("fill");
                                if (fill && fill.value.indexOf("url(#") > -1) {
                                    var _id = fill.value.split("url(#")[1].split(")")[0];
                                    if (map.has(_id)) {
                                        var r = "jl-" + randomRange(5, 8);
                                        fill.value = `url(#${r})`;
                                        map.get(_id).id = r;
                                    }
                                }
                            })
                        }

                        n += b.render(svgDom.innerHTML, t.replace(/\.svg$/i, ""));
                        r++;
                        s()
                    };
                    i.readAsText(e)
                } else {
                    v(t + "并非SVG文件");
                    h.classList.remove("over");
                    r++;
                    s()
                }
            };
            s()
        },
        init: function () {
            this.events()
        }
    };
    /** 随机生成固定位数或者一定范围内的字符串数字组合
     * @param {Number} min 范围最小值
     * @param {Number} max 范围最大值，当不传递时表示生成指定位数的组合
     * @param {String} charStr指定的字符串中生成组合
     * @returns {String} 返回字符串结果
     * */
    function randomRange(min, max, charStr) {
        var returnStr = "", //返回的字符串
            range; //生成的字符串长度

        //随机生成字符
        var autoGetStr = function () {
            var charFun = function () {
                var n = Math.floor(Math.random() * 62);
                if (n < 10) {
                    return n; //1-10
                } else if (n < 36) {
                    return String.fromCharCode(n + 55); //A-Z
                } else {
                    return String.fromCharCode(n + 61); //a-z    
                }
            }
            while (returnStr.length < range) {
                returnStr += charFun();
            }
        };

        //根据指定的字符串中生成组合
        var accordCharStrGet = function () {
            for (var i = 0; i < range; i++) {
                var index = Math.round(Math.random() * (charStr.length - 1));
                returnStr += charStr.substring(index, index + 1);
            }
        };
        if (typeof min == 'undefined') {
            min = 10;
        }
        if (typeof max == 'string') {
            charStr = max;
        }
        range = ((max && typeof max == 'number') ? Math.round(Math.random() * (max - min)) + min : min);

        if (charStr) {
            accordCharStrGet();
        } else {
            autoGetStr();
        }
        return returnStr;
    }
    b.init()
})(document, window);