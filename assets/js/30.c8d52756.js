(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{381:function(t,s,a){"use strict";a.r(s);var v=a(25),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"配置软件使用-qv2ray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置软件使用-qv2ray"}},[t._v("#")]),t._v(" 配置软件使用 Qv2ray")]),t._v(" "),a("p",[t._v("祝贺你! 只剩下一个步骤就可以访问解锁的互联网了！")]),t._v(" "),a("h2",{attrs:{id:"一般方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一般方法"}},[t._v("#")]),t._v(" 一般方法")]),t._v(" "),a("h3",{attrs:{id:"使用系统代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用系统代理"}},[t._v("#")]),t._v(" 使用系统代理")]),t._v(" "),a("p",[t._v("对于 "),a("strong",[t._v("Windows")]),t._v(" 和 "),a("strong",[t._v("macOS")]),t._v(" 用户，几乎所有的应用程序都将遵循系统代理设置。 对于 "),a("strong",[t._v("Linux")]),t._v(" 用户，一些应用程序，如 Firefox 和 Chromium，但不是全部，将在 GNOME/KDE 设置中读取和遵守代理配置。")]),t._v(" "),a("p",[t._v("目前 Qv2ray 支持自动设置系统代理，包括 "),a("strong",[t._v("Windows")]),t._v("、"),a("strong",[t._v("macOS")]),t._v(" 和 "),a("strong",[t._v("Linux")]),t._v("（GNOME/KDE）。 你可以在以下位置找到 Qv2ray 的 "),a("strong",[t._v("System Proxy「系统代理」")]),t._v(" 选项：")]),t._v(" "),a("ul",[a("li",[t._v("Qv2ray 托盘菜单\n"),a("ol",[a("li",[t._v("右键点击托盘图标")]),t._v(" "),a("li",[t._v("在弹出的菜单中选择 "),a("strong",[t._v("System Proxy「系统代理」 -> Enable/Disble System Proxy「开启/关闭 系统代理」")]),t._v("。")])])]),t._v(" "),a("li",[t._v("Qv2ray "),a("strong",[t._v("Preference「首选项」")]),t._v(" 窗口\n"),a("ol",[a("li",[t._v("单击主窗口中的 "),a("strong",[t._v("Preferences「首选项」")]),t._v(" 按钮")]),t._v(" "),a("li",[t._v("在 "),a("strong",[t._v("Preferences「首选项」")]),t._v(" 窗口里选择 "),a("strong",[t._v("Inbound Settings「入站设置」")])]),t._v(" "),a("li",[t._v("选择 "),a("strong",[t._v("Set System Proxy「设置系统代理」")]),t._v(" 选项")]),t._v(" "),a("li",[t._v("点击 "),a("strong",[t._v("OK")]),t._v(" 应用设置")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Linux 用户：KDE/GNOME 代理设置")]),t._v(" "),a("p",[t._v("如果您使用 GNOME 作为您的主要桌面环境，您可能会发现设置系统代理非常有用。 这是因为 GNOME 代理设置几乎是全世界公认的。")]),t._v(" "),a("p",[t._v("但是，KDE 用户可能会遇到一些困难，因为 KDE 代理设置更像是一个玩具。 即使是 KDE 应用程序本身也不会读取和遵守这种配置。 在这种情况下，您可以寻找其他解决方案来配置您的应用程序。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Windows 用户：UWP Loopback 问题")]),t._v(" "),a("p",[t._v("默认情况下，UWP 程序禁止使用带有环回地址（如 127.0.0.1）的代理，所以系统的代理设置很可能会导致你的 UWP 程序无法正常工作。")]),t._v(" "),a("p",[t._v("你可以使用一些第三方工具来 "),a("strong",[t._v("启用UWP Loopback")]),t._v("，让你的程序被代理，例如："),a("a",{attrs:{href:"https://github.com/Dispnt/UWPLoopback",target:"_blank",rel:"noopener noreferrer"}},[t._v("UWPLoopback @ GitHub"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"在应用程序中手动设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在应用程序中手动设置"}},[t._v("#")]),t._v(" 在应用程序中手动设置")]),t._v(" "),a("h4",{attrs:{id:"telegram"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#telegram"}},[t._v("#")]),t._v(" Telegram")]),t._v(" "),a("p",[t._v("你可以在应用中配置 Telegram 使用代理。进入到 "),a("strong",[t._v("Settings「设置」")]),t._v(" -> "),a("strong",[t._v("Advanced「高级」")]),t._v(" -> "),a("strong",[t._v("Network and proxy「网络和代理」")]),t._v("，点击 "),a("strong",[t._v("Connection type「连接类型」")]),t._v(" ，打开 "),a("strong",[t._v("Proxy Settings「代理设置」")]),t._v(" 对话框。")]),t._v(" "),a("p",[t._v("在 "),a("strong",[t._v("代理设置")]),t._v(" 中，点击底部的 "),a("strong",[t._v("Add Proxy「添加代理」")]),t._v(" 按钮，根据自己的喜好选择 SOCKS5/HTTP，并在空白处填写 Qv2ray 入站设置中的信息。")]),t._v(" "),a("p",[t._v("最后，点击刚刚配置好的代理条目，就大功告成了。")]),t._v(" "),a("h4",{attrs:{id:"网页浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网页浏览器"}},[t._v("#")]),t._v(" 网页浏览器")]),t._v(" "),a("p",[t._v("几乎所有的 Web 浏览器都支持代理的手动配置。 以 Firefox 为例，你可以在 "),a("strong",[t._v("Preferences「首选项」 -> General 「常规」 -> Network「网络」 -> Manual Proxy Configuration「手动代理设置」")]),t._v(" 中找到这个设置。 用 Qv2ray "),a("strong",[t._v("Inbound Settings「入站设置」")]),t._v(" 中的信息填充这些字段以使用 Qv2ray。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("使用代理插件")]),t._v(" "),a("p",[t._v("为了避免在代理服务器配置之间来回切换，您可能需要使用第三方插件（例如：SwitchyOmega）来增强您的浏览器。 这些插件可以帮助实现更复杂的配置，包括多个配置文件和进一步的流量转移。")])]),t._v(" "),a("h4",{attrs:{id:"java-应用程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-应用程序"}},[t._v("#")]),t._v(" Java 应用程序")]),t._v(" "),a("p",[t._v("对于 Java 应用程序，您可以通过 JVM 参数使用代理配置。")]),t._v(" "),a("p",[t._v("以下是一些例子：")]),t._v(" "),a("ul",[a("li",[t._v("使用 SOCKS5:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("java -DsocksProxyHost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 -DsocksProxyPort"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1088")]),t._v(" -jar some-application.jar\n")])])])]),t._v(" "),a("li",[t._v("使用 HTTP(S)："),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("java -Dhttp.proxyHost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 -Dhttp.proxyPort"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v(" -Dhttps.proxyHost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 -Dhttps.proxyPort"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v(" -jar some-application.jar\n")])])])])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("神奇的 Minecraft")]),t._v(" "),a("p",[t._v("新版本的 "),a("strong",[t._v("Minecraft 我的世界")]),t._v("（>=1.5.2） 不会遵循 JVM 代理设置。这不是 Qv2ray 的问题。 如果你真的想通过代理来玩 Minecraft，可以考虑为那个服务器设置一个 Dokodemo-door 任意门入站，并直接连接到 "),a("code",[t._v("localhost")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"依赖平台的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖平台的方法"}},[t._v("#")]),t._v(" 依赖平台的方法")]),t._v(" "),a("h3",{attrs:{id:"使用环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用环境变量"}},[t._v("#")]),t._v(" 使用环境变量")]),t._v(" "),a("p",[t._v("Linux / macOS 中的许多程序，例如 "),a("code",[t._v("curl")]),t._v(" 和 "),a("code",[t._v("wget")]),t._v("，都会使用 "),a("code",[t._v("<PROTOCOL>_PROXY")]),t._v(" 环境变量提供的代理。")]),t._v(" "),a("p",[t._v("这是一个配置示例：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Change the host and port according to Qv2ray inbound configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HTTP_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:8000"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HTTPS_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:8000"')]),t._v("\n")])])]),a("p",[t._v("如果 Qv2ray 中启用了身份验证，请使用以下设置：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Change user/pass according to your configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HTTP_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://user:pass@127.0.0.1:8000"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HTTPS_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://user:pass@127.0.0.1:8000"')]),t._v("\n")])])]),a("p",[t._v("请注意，如果您的用户名或密码中有一个特殊字符，则需要对其进行编码。 这里有一个简短的参考：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("code",[t._v("!")])]),t._v(" "),a("th",[a("code",[t._v("#")])]),t._v(" "),a("th",[a("code",[t._v("$")])]),t._v(" "),a("th",[a("code",[t._v("&")])]),t._v(" "),a("th",[a("code",[t._v("'")])]),t._v(" "),a("th",[a("code",[t._v("(")])]),t._v(" "),a("th",[a("code",[t._v(")")])]),t._v(" "),a("th",[a("code",[t._v("*")])]),t._v(" "),a("th",[a("code",[t._v("+")])]),t._v(" "),a("th",[a("code",[t._v(",")])]),t._v(" "),a("th",[a("code",[t._v("/")])]),t._v(" "),a("th",[a("code",[t._v(":")])]),t._v(" "),a("th",[a("code",[t._v(";")])]),t._v(" "),a("th",[a("code",[t._v("=")])]),t._v(" "),a("th",[a("code",[t._v("?")])]),t._v(" "),a("th",[a("code",[t._v("@")])]),t._v(" "),a("th",[a("code",[t._v("[")])]),t._v(" "),a("th",[a("code",[t._v("]")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("%21")])]),t._v(" "),a("td",[a("code",[t._v("%23")])]),t._v(" "),a("td",[a("code",[t._v("%24")])]),t._v(" "),a("td",[a("code",[t._v("%26")])]),t._v(" "),a("td",[a("code",[t._v("%27")])]),t._v(" "),a("td",[a("code",[t._v("%28")])]),t._v(" "),a("td",[a("code",[t._v("%29")])]),t._v(" "),a("td",[a("code",[t._v("%2A")])]),t._v(" "),a("td",[a("code",[t._v("%2B")])]),t._v(" "),a("td",[a("code",[t._v("%2C")])]),t._v(" "),a("td",[a("code",[t._v("%2F")])]),t._v(" "),a("td",[a("code",[t._v("%3A")])]),t._v(" "),a("td",[a("code",[t._v("%3B")])]),t._v(" "),a("td",[a("code",[t._v("%3D")])]),t._v(" "),a("td",[a("code",[t._v("%3F")])]),t._v(" "),a("td",[a("code",[t._v("%40")])]),t._v(" "),a("td",[a("code",[t._v("%5B")])]),t._v(" "),a("td",[a("code",[t._v("%5D")])])])])]),t._v(" "),a("p",[t._v("对于在 "),a("code",[t._v("sudo")]),t._v(" 中运行的程序，如果不在 shell 中运行 "),a("code",[t._v("sudo")]),t._v("，则需要配置 "),a("code",[t._v("sudo")]),t._v(" 来保留这些变量。 使用 root 调用 "),a("code",[t._v("visudo")]),t._v(" 并添加以下行：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Defaults env_keep "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP_PROXY HTTPS_PROXY"')]),t._v("\n")])])]),a("p",[t._v("尽管如此，仍然有一些程序使用自己的变量，例如，"),a("code",[t._v("rsync")]),t._v(" 对 HTTP 代理使用 "),a("code",[t._v("RSYNC_PROXY")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RSYNC_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("user:pass@127.0.0.1:8000\n")])])]),a("p",[t._v("强烈建议您阅读要用来配置代理的程序手册。")]),t._v(" "),a("h3",{attrs:{id:"使用-proxychains"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-proxychains"}},[t._v("#")]),t._v(" 使用 "),a("code",[t._v("proxychains")])]),t._v(" "),a("p",[t._v("对于那些不能使用上述方法的应用程序，Linux/ macOS 用户可以尝试使用 "),a("code",[t._v("proxychains")]),t._v("，它劫持 "),a("code",[t._v("glibc")]),t._v(" 中的函数，将网络连接重定向到代理。")]),t._v(" "),a("p",[t._v("首先，应该安装 "),a("code",[t._v("proxychains-ng")]),t._v("。 安装方法因操作系统的不同而不同，但是"),a("a",{attrs:{href:"https://github.com/rofl0r/proxychains-ng",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方项目"),a("OutboundLink")],1),t._v("应该给你一个说明。")]),t._v(" "),a("p",[t._v("编辑 "),a("code",[t._v("/etc/proxychains.conf")]),t._v("（用于全局 proxychains）或 "),a("code",[t._v("$HOME/.proxychains/proxychains.conf")]),t._v("（对于用户），编辑 "),a("code",[t._v("[ProxyList]")]),t._v(" 选项并更改为 Qv2ray 中的 SOCKS5 代理：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[ProxyList]\nsocks5  127.0.0.1  1088\n")])])]),a("p",[t._v("在配置 "),a("code",[t._v("proxychains")]),t._v(" 之后，您可以在终端使用 "),a("code",[t._v("proxychains")]),t._v(" 程序使 "),a("code",[t._v("proxychains")]),t._v(" 劫持程序使用给定的代理。 如果您厌倦了嘈杂的输出，您可能会在 "),a("code",[t._v("proxychains")]),t._v(" 之后附加 "),a("code",[t._v("-q")]),t._v(" 选项。")]),t._v(" "),a("p",[t._v("需要注意的一点是，"),a("code",[t._v("proxychains")]),t._v(" 不能用于静态链接的程序，例如 Golang 程序。")])])}),[],!1,null,null,null);s.default=_.exports}}]);