(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{257:function(e,t,o){"use strict";o.r(t);var a=o(28),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"step-2-configuring-v2ray-core"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-2-configuring-v2ray-core"}},[e._v("#")]),e._v(" Step 2: Configuring V2Ray Core")]),e._v(" "),o("p",[e._v("After a correct and successful installation of Qv2ray onto your system, it is necessary to configure Qv2ray on V2Ray core files before actually using it.")]),e._v(" "),o("h2",{attrs:{id:"download-v2ray-core-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#download-v2ray-core-files"}},[e._v("#")]),e._v(" Download V2Ray Core Files")]),e._v(" "),o("p",[e._v("Due to political reasons, Qv2ray itself "),o("strong",[e._v("does not")]),e._v(" include a distribution of V2Ray executable files, namely the V2Ray core, and most of the time it it required for user themselves to download them.")]),e._v(" "),o("p",[e._v("If you are using a distribution with V2Ray core and assets package(s), it’ll be the best to install through package manager since the system will handle the automatic upgrade of v2ray core. For Arch Linux users, you may install "),o("code",[e._v("v2ray")]),e._v(", "),o("code",[e._v("v2ray-geoip")]),e._v(" and "),o("code",[e._v("v2ray-domain-list-community")]),e._v(" packages, and that's enough. For other distributions, please read below:")]),e._v(" "),o("p",[e._v("Go to "),o("a",{attrs:{href:"https://github.com/v2ray/v2ray-core/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("the official GitHub Release page of v2ray/v2ray-core"),o("OutboundLink")],1),e._v(" and check the recent stable builds. Choose according to your platform in the asset files. For example, Windows 64-bit users may download "),o("code",[e._v("v2ray-windows-64.zip")]),e._v(", Mac OS users may download "),o("code",[e._v("v2ray-macos.zip")]),e._v(", and for most of the Linux users, "),o("code",[e._v("v2ray-linux-64.zip")]),e._v(".")]),e._v(" "),o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("Do not download "),o("code",[e._v("v2ray-linux-arm64.zip")]),e._v(" if you are running Qv2ray on "),o("code",[e._v("x86_64")]),e._v(" ("),o("code",[e._v("amd64")]),e._v(") platform.\nTo make it clear, "),o("code",[e._v("arm64")]),e._v(" is completely different from "),o("code",[e._v("amd64")]),e._v(". Make sure you don't do like this.")])]),e._v(" "),o("h2",{attrs:{id:"place-your-v2ray-core"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#place-your-v2ray-core"}},[e._v("#")]),e._v(" Place Your V2Ray Core")]),e._v(" "),o("p",[e._v("Extract the v2ray core files into a fixed position. As a default, it is suggested to extract the files into "),o("code",[e._v("$QV2RAY_CONFIG_PATH/vcore")]),e._v(", where "),o("code",[e._v("$QV2RAY_CONFIG_PATH")]),e._v(" is the directory where Qv2ray store it’s data.")]),e._v(" "),o("p",[e._v("The directory "),o("code",[e._v("vcore")]),e._v(" could be in one of these locations:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("./")]),e._v(" (aside Qv2ray executable, which is recommended for Windows Users)")]),e._v(" "),o("li",[o("code",[e._v("~/.qv2ray/")]),e._v(" (in a dedicated directory of your home folder)")]),e._v(" "),o("li",[o("code",[e._v("~/.config/qv2ray/")]),e._v(" (standard XDG configuration path)")])]),e._v(" "),o("p",[e._v("Make sure that these files exists directly in your "),o("code",[e._v("vcore")]),e._v(" directory:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("geoip.dat geosite.dat v2ctl v2ray\n")])])]),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Special Hint for Linux / macOS Users")]),e._v(" "),o("p",[e._v("You should always grant "),o("strong",[e._v("executable permission")]),e._v(" to "),o("code",[e._v("v2ray")]),e._v(" and "),o("code",[e._v("v2ctl")]),e._v(".\nThis is usually done by executing "),o("code",[e._v("chmod +x")]),e._v(" on these files.")])]),e._v(" "),o("h2",{attrs:{id:"configure-qv2ray-to-use-the-core"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-qv2ray-to-use-the-core"}},[e._v("#")]),e._v(" Configure Qv2ray to Use the Core")]),e._v(" "),o("p",[e._v("Open Qv2ray and go to Preference Window. In "),o("strong",[e._v("General Settings")]),e._v(" -> "),o("strong",[e._v("V2Ray Settings")]),e._v(", configure as follows:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Core Executable Path")]),e._v(": Set this to where your V2Ray executable exists. This can be the full path of your "),o("code",[e._v("v2ray.exe")]),e._v(" on Windows, or that "),o("code",[e._v("v2ray")]),e._v(" executable file on Linux / macOS.")]),e._v(" "),o("li",[o("strong",[e._v("V2Ray Assets Directory")]),e._v(": Set this to where "),o("code",[e._v("geoip.dat")]),e._v(" and "),o("code",[e._v("geosite.dat")]),e._v(" are located.")])]),e._v(" "),o("p",[e._v("After configuring, you can click on "),o("strong",[e._v("Check V2Ray Core Settings")]),e._v(" button to validate your V2Ray core settings. Repeat trying until you get the check passed.")])])}),[],!1,null,null,null);t.default=r.exports}}]);