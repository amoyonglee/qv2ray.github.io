(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{379:function(v,_,a){"use strict";a.r(_);var t=a(25),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"配置-v2ray-核心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-v2ray-核心"}},[v._v("#")]),v._v(" 配置 V2Ray 核心")]),v._v(" "),a("p",[v._v("在成功安装 Qv2ray 后，在真正使用 Qv2ray 之前，还需要基于 V2Ray 核心完成一些必要的配置。")]),v._v(" "),a("h2",{attrs:{id:"下载-v2ray-核心文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载-v2ray-核心文件"}},[v._v("#")]),v._v(" 下载 V2Ray 核心文件")]),v._v(" "),a("p",[v._v("由于某些众所周知的政策原因，Qv2ray 本身并"),a("strong",[v._v("不包含")]),v._v(" V2Ray 核心可执行文件。这些核心文件来自一个叫做 "),a("code",[v._v("v2ray-core")]),v._v(" 的项目，需要用户手动下载安装到指定位置。")]),v._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[v._v("手动管理 vs 自动管理")]),v._v(" "),a("p",[v._v("如果你正在使用的发行版拥有一个可以自动安装 V2Ray 核心文件的包管理系统，那通过包管理安装 Qv2ray 是最好的选择，因为系统可以自动处理 V2Ray 核心的更新。例如，对于 Arch Linux 用户而言，安装 "),a("code",[v._v("v2ray")]),v._v(" 软件包就足够了。对于其他情形，请接着阅读下面的说明。")])]),v._v(" "),a("p",[v._v("请前往 "),a("a",{attrs:{href:"https://github.com/v2ray/v2ray-core/releases",target:"_blank",rel:"noopener noreferrer"}},[v._v("v2ray/v2ray-core 官方 Release 页面"),a("OutboundLink")],1),v._v("，并下载最新的符合当前系统版本的稳定版软件包。比如，64 位 Windows 用户可以下载 "),a("code",[v._v("v2ray-windows-64.zip")]),v._v(" ；MacOS 用户可以下载 "),a("code",[v._v("v2ray-macos.zip")]),v._v(" ；大多数 Linux 用户可以下载 "),a("code",[v._v("v2ray-linux-64.zip")]),v._v("。")]),v._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[v._v("擦亮眼睛")]),v._v(" "),a("p",[v._v("如果你在 "),a("code",[v._v("x86_64")]),v._v("（"),a("code",[v._v("amd64")]),v._v("）平台上运行 Qv2ray，请不要下载 "),a("code",[v._v("v2ray-linux-arm64.zip")]),v._v("。明确地说，"),a("code",[v._v("arm64")]),v._v(" 和 "),a("code",[v._v("amd64")]),v._v(" 完全不同。请确保你不会这样做。")])]),v._v(" "),a("h2",{attrs:{id:"放置你的-v2ray-核心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#放置你的-v2ray-核心"}},[v._v("#")]),v._v(" 放置你的 V2Ray 核心")]),v._v(" "),a("p",[v._v("将下载到的核心文件解压缩到一个固定的位置。默认情况下，我们建议将文件提取到 "),a("code",[v._v("$QV2RAY_CONFIG_PATH/vcore")]),v._v(" 中，其中 "),a("code",[v._v("$QV2RAY_CONFIG_PATH")]),v._v(" 是 Qv2ray 存储其数据的目录。")]),v._v(" "),a("p",[v._v("目录 "),a("code",[v._v("vcore")]),v._v(" 可以在下面的任一位置：")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("./config/")]),v._v(" （在 Qv2ray 可执行文件旁边的 "),a("code",[v._v("config")]),v._v(" 子文件夹内，建议 Windows 用户使用）")]),v._v(" "),a("li",[a("code",[v._v("~/.qv2ray/")]),v._v("（在 home 文件夹的独立目录中）")]),v._v(" "),a("li",[a("code",[v._v("~/.config/qv2ray/")]),v._v(" （标准 XDG 配置路径）")])]),v._v(" "),a("p",[v._v("之后，请确保这些文件直接存在于 "),a("code",[v._v("vcore")]),v._v(" 目录中:")]),v._v(" "),a("ol",[a("li",[a("code",[v._v("v2ray")]),v._v(" 或 "),a("code",[v._v("v2ray.exe")]),v._v("：核心可执行文件")]),v._v(" "),a("li",[a("code",[v._v("v2ctl")]),v._v(" 或 "),a("code",[v._v("v2ctl.exe")]),v._v("：核心控制程序")]),v._v(" "),a("li",[a("code",[v._v("geoip.dat")]),v._v("：IP 规则数据库")]),v._v(" "),a("li",[a("code",[v._v("geosite.dat")]),v._v("：域名规则数据库")])]),v._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[v._v("对于 Linux / macOS 用户的温馨提示")]),v._v(" "),a("p",[v._v("您应该始终为 "),a("code",[v._v("v2ray")]),v._v(" 和 "),a("code",[v._v("v2ctl")]),v._v(" 授予"),a("strong",[v._v("可执行权限")]),v._v("。这通常通过对这些文件执行 "),a("code",[v._v("chmod +x")]),v._v(" 来完成。")])]),v._v(" "),a("h2",{attrs:{id:"配置-qv2ray-去使用核心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-qv2ray-去使用核心"}},[v._v("#")]),v._v(" 配置 Qv2ray 去使用核心")]),v._v(" "),a("p",[v._v("打开 Qv2ray 并进入"),a("strong",[v._v("首选项")]),v._v("窗口。在 "),a("strong",[v._v("一般设置 - V2Ray 设置")]),v._v(" 中，配置如下：")]),v._v(" "),a("ul",[a("li",[a("p",[a("strong",[v._v("核心可执行文件路径")]),v._v("：将此设置为您的 V2Ray 可执行文件所在的位置。 这可以是 Windows 上的 "),a("code",[v._v("v2ray.exe")]),v._v(" 的完整路径，也可以是 Linux / macOS 上的 "),a("code",[v._v("v2ray")]),v._v(" 可执行文件的完整路径。")])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("V2ray 资源目录")]),v._v("：将其设置为 "),a("code",[v._v("geoip.dat")]),v._v(" 和 "),a("code",[v._v("geosite.dat")]),v._v(" 所在的位置。")])])]),v._v(" "),a("p",[v._v("配置完成后，你可以点击 "),a("strong",[v._v("检查 V2Ray 核心设置")]),v._v(" 按钮来验证你的 V2Ray 核心设置。 重复尝试，直到你通过了检查。")]),v._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[v._v("严禁套娃！")]),v._v(" "),a("p",[v._v("永远不要把 "),a("strong",[v._v("核心可执行文件路径")]),v._v(" 指向 "),a("strong",[v._v("Qv2ray 程序本体")]),v._v("！\n好在 Qv2ray 本身是单例模式运行的，你不会因此而引发 fork 炸弹。\n一定要注意，V2Ray 核心可执行文件是 "),a("code",[v._v("v2ray")]),v._v(" 或者 "),a("code",[v._v("v2ray.exe")]),v._v("，而不是 "),a("code",[v._v("qv2ray")]),v._v(" 或 "),a("code",[v._v("qv2ray.exe")]),v._v("！")])]),v._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[v._v("给 Arch Linux 用户的提示")]),v._v(" "),a("p",[v._v("若您使用 "),a("code",[v._v("v2ray")]),v._v(" 软件包，推荐的路径配置如下：")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("核心可执行文件路径")]),v._v(": "),a("code",[v._v("/usr/bin/v2ray")])]),v._v(" "),a("li",[a("strong",[v._v("V2ray 资源目录")]),v._v(": "),a("code",[v._v("/usr/lib/v2ray")])])])])])}),[],!1,null,null,null);_.default=r.exports}}]);