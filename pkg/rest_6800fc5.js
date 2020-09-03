;/*!schemas/convert.js*/
// page SubRenderer 类型
(function () {
  const renderers = [
    '/schemas/action.json#',
    '/schemas/button-group.json#',
    '/schemas/cards.json#',
    '/schemas/chart.json#',
    '/schemas/collapse.json#',
    '/schemas/divider.json#',
    '/schemas/crud.json#',
    '/schemas/date.json#',
    // '/schemas/dialog.json#',
    // '/schemas/drawer.json#',
    '/schemas/dropdown-button.json#',
    '/schemas/form.json#',
    '/schemas/grid.json#',
    '/schemas/hbox.json#',
    '/schemas/iframe.json#',
    '/schemas/image.json#',
    '/schemas/json.json#',
    '/schemas/list.json#',
    '/schemas/mapping.json#',
    '/schemas/nav.json#',
    '/schemas/operation.json#',
    // 自己不能放在其他地方 '/schemas/page.json#',
    '/schemas/panel.json#',
    '/schemas/plain.json#',
    '/schemas/progress.json#',
    '/schemas/service.json#',
    '/schemas/status.json#',
    '/schemas/switch.json#',
    '/schemas/table.json#',
    '/schemas/tabs.json#',
    '/schemas/tasks.json#',
    '/schemas/tpl.json#',
    '/schemas/video.json#',
    '/schemas/wizard.json#',
    '/schemas/wrapper.json#',
    '/schemas/page.json#/definitions/customRenderer'
  ];

  const root = {};
  let last = renderers.pop();
  let current = root;

  while (renderers.length) {
    const renderer = renderers.shift().replace(/#$/, '');

    current.if = {
      $ref: `${renderer}#/definitions/test`
    };

    current.then = {
      $ref: `${renderer}#/definitions/common`
    };

    current = current.else = {};
  }

  current['$ref'] = last;

  console.log(JSON.stringify(root, null, 4));
})();

// Cards 里面 field 类型
(function () {
  const renderers = [
    '/schemas/tpl.json#',
    '/schemas/image.json#',
    '/schemas/date.json#',
    '/schemas/status.json#',
    '/schemas/mapping.json#',
    '/schemas/progress.json#',
    '/schemas/switch.json#',
    '/schemas/hbox.json#',
    '/schemas/grid.json#',
    '/schemas/json.json#',
    '/schemas/list.json#',
    '/schemas/operation.json#',
    '/schemas/plain.json#'
  ];

  const root = {};
  let last = renderers.pop().replace(/#$/, '');
  let current = root;

  while (renderers.length) {
    const renderer = renderers.shift().replace(/#$/, '');

    current.if = {
      $ref: `${renderer}#/definitions/test`
    };

    current.then = {
      $ref: `${renderer}#/definitions/common`
    };

    current = current.else = {};
  }

  current['$ref'] = `${last}#/definitions/common`;

  console.log(JSON.stringify(root, null, 4));
})();

// Control 里面各种类型
(function () {
  const renderers = [
    '/schemas/form/array.json#',
    '/schemas/form/button-group.json#',
    '/schemas/form/button-toolbar.json#',
    '/schemas/form/button.json#',
    '/schemas/form/chained-select.json#',
    '/schemas/form/checkbox.json#',
    '/schemas/form/checkboxes.json#',
    '/schemas/form/color.json#',
    '/schemas/form/combo.json#',
    '/schemas/form/control.json#',
    '/schemas/form/date-range.json#',
    '/schemas/form/date.json#',
    '/schemas/form/datetime.json#',
    '/schemas/form/editor.json#',
    '/schemas/form/email.json#',
    '/schemas/form/fieldSet.json#',
    '/schemas/form/file.json#',
    '/schemas/form/formula.json#',
    '/schemas/form/grid.json#',
    '/schemas/form/group.json#',
    '/schemas/form/hbox.json#',
    '/schemas/form/hidden.json#',
    '/schemas/form/image.json#',
    '/schemas/form/list.json#',
    '/schemas/form/matrix.json#',
    '/schemas/form/number.json#',
    '/schemas/form/tag.json#',
    '/schemas/form/panel.json#',
    '/schemas/form/password.json#',
    '/schemas/form/picker.json#',
    '/schemas/form/radios.json#',
    '/schemas/form/range.json#',
    '/schemas/form/repeat.json#',
    '/schemas/form/reset.json#',
    '/schemas/form/rich-text.json#',
    '/schemas/form/select.json#',
    '/schemas/form/service.json#',
    '/schemas/form/static.json#',
    '/schemas/form/sub-form.json#',
    '/schemas/form/submit.json#',
    '/schemas/form/switch.json#',
    '/schemas/form/table.json#',
    '/schemas/form/tabs.json#',
    '/schemas/form/text.json#',
    '/schemas/form/textarea.json#',
    '/schemas/form/time.json#',
    '/schemas/form/tree-select.json#',
    '/schemas/form/tree.json#',
    '/schemas/form/url.json#',

    // 其他 renderers
    '/schemas/divider.json#',
    '/schemas/cards.json#',
    '/schemas/chart.json#',
    '/schemas/collapse.json#',
    '/schemas/crud.json#',
    '/schemas/iframe.json#',
    '/schemas/nav.json#',
    '/schemas/tasks.json#',
    '/schemas/video.json#',
    '/schemas/wrapper.json#',

    '/schemas/form.json#/definitions/customControlItem'
  ];

  const root = {};
  let last = renderers.pop().replace(/#$/, '');
  let current = root;

  while (renderers.length) {
    const renderer = renderers.shift().replace(/#$/, '');

    current.if = {
      $ref: `${renderer}#/definitions/test`
    };

    current.then = {
      $ref: `${renderer}#/definitions/common`
    };

    current = current.else = {};
  }

  current['$ref'] = `${last}`;

  console.log(JSON.stringify(root, null, 4));
})();

;/*!examples/index.jsx*/
amis.define("ca626e1",function(e,t){"use strict";function o(e){l.render(a.default.createElement(n.default,null),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.bootstrap=void 0;var d=e("node_modules/tslib/tslib"),a=d.__importDefault(e("node_modules/react/index")),l=e("node_modules/react-dom/index"),n=d.__importDefault(e("5f106aa"));t.bootstrap=o});
;/*!examples/polyfills/Object.assign.ts*/
amis.define("d89b1f2",function(){"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),t=1;t<arguments.length;t++){var r=arguments[t];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},writable:!0,configurable:!0})});
;/*!examples/polyfills/Array.from.ts*/
amis.define("804ccfd",function(){Array.from||(Array.from=function(){var r=Object.prototype.toString,n=function(n){return"function"==typeof n||"[object Function]"===r.call(n)},e=function(r){var n=Number(r);return isNaN(n)?0:0!==n&&isFinite(n)?(n>0?1:-1)*Math.floor(Math.abs(n)):n},t=Math.pow(2,53)-1,o=function(r){var n=e(r);return Math.min(Math.max(n,0),t)};return function(r){var e=this,t=Object(r);if(null==r)throw new TypeError("Array.from requires an array-like object - not null or undefined");var a,i=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof i){if(!n(i))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(a=arguments[2])}for(var u,f=o(t.length),c=n(e)?Object(new e(f)):new Array(f),h=0;f>h;)u=t[h],c[h]=i?"undefined"==typeof a?i(u,h):i.call(a,u,h):u,h+=1;return c.length=f,c}}())});
;/*!examples/polyfills/Array.find.ts*/
amis.define("5982bcf",function(){Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(r){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),t=e.length>>>0;if("function"!=typeof r)throw new TypeError("predicate must be a function");for(var n=arguments[1],i=0;t>i;){var o=e[i];if(r.call(n,o,i,e))return o;i++}return void 0},configurable:!0,writable:!0})});
;/*!examples/polyfills/cloest.ts*/
amis.define("ba41ebe",function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement}while(null!==t);return null})});
;/*!examples/polyfills/index.ts*/
amis.define("835699d",function(e,d){"use strict";Object.defineProperty(d,"__esModule",{value:!0}),e("d89b1f2"),e("804ccfd"),e("5982bcf"),e("ba41ebe"),e("node_modules/promise/polyfill"),e("node_modules/es6-symbol/implement")});
;/*!examples/embed.tsx*/
amis.define("2ab197b",function(e,t){"use strict";function n(e,t,n,c){if("string"==typeof e&&(e=document.querySelector(e)),!e)return void console.error("选择器不对，页面上没有此元素");if("BODY"===e.tagName){var l=document.createElement("div");e.appendChild(l),e=l}e.classList.add("amis-scope");var f,p=function(e){e=e||"";var t=window.location;e&&"#"===e[0]?e=t.pathname+t.search+e:e&&"?"===e[0]&&(e=t.pathname+e);var n=e.indexOf("?"),r=e.indexOf("#"),o=~n?e.substring(0,n):~r?e.substring(0,r):e,a=~n?e.substring(n,~r?r:void 0):"",i=~r?e.substring(r):t.hash;if(o){if("/"!=o[0]&&!/^https?\:\/\//.test(o)){var s=t.pathname,u=s.split("/");u.pop();for(var d=void 0;d=/^\.\.?\//.exec(o);)"../"===d[0]&&u.pop(),o=o.substring(d[0].length);o=u.concat(o).join("/")}}else o=t.pathname;return o+a+i},m=function(e){return function(t){var n=t.data;if(c&&c.responseAdpater){var o=(e.url,e.url.indexOf("?")),a=~o?u.default.parse(e.url.substring(o)):{},i=r.__assign(r.__assign({},e),{query:a,body:e.data});n=c.responseAdpater(e,n,a,i)}else n.hasOwnProperty("errno")?(n.status=n.errno,n.msg=n.errmsg):n.hasOwnProperty("no")&&(n.status=n.no,n.msg=n.error);var s=r.__assign(r.__assign({},t),{data:n});return s}};return a.render(o.default.createElement("div",{className:"amis-routes-wrapper"},o.default.createElement(d.ToastComponent,{position:c&&c.toastPosition||"top-right",closeButton:!1,timeOut:5e3,extendedTimeOut:3e3}),o.default.createElement(d.AlertComponent,{container:e}),d.render(t,r.__assign(r.__assign({},n),{scopeRef:function(e){return f=e}}),r.__assign({getModalContainer:function(){return document.querySelector(".amis-scope")},notify:function(e,t){return d.toast[e]?d.toast[e](t,"error"===e?"系统错误":"系统消息"):console.warn("[Notify]",e,t)},alert:d.alert,confirm:d.confirm,updateLocation:function(e,t){return"goBack"===e?window.history.back():void(t||(location.href=p(e)))},isCurrentUrl:function(e){var t=p(e),n=window.location,r=t,o="",a=t.indexOf("?");if(~a&&(r=t.substring(0,a),o=t.substring(a)),o){if(r!==n.pathname||!n.search)return!1;var i=u.default.parse(o.substring(1)),s=u.default.parse(n.search.substring(1));return Object.keys(i).every(function(e){return i[e]===s[e]})}return r===n.pathname?!0:!1},jumpTo:function(e,t){return"goBack"===e?window.history.back():(e=p(e),t&&"url"===t.actionType?void(t.blank===!1?window.location.href=e:window.open(e)):void(/^https?:\/\//.test(e)?window.location.replace(e):location.href=e))},fetcher:function(e){var t=e.url,n=e.method,r=e.data,o=e.responseType,a=e.config,s=e.headers;return a=a||{},a.withCredentials=!0,o&&(a.responseType=o),a.cancelExecutor&&(a.cancelToken=new i.default.CancelToken(a.cancelExecutor)),a.headers=s||{},a.method=n,"get"===n&&r?a.params=r:r&&r instanceof FormData||!r||"string"==typeof r||r instanceof Blob||r instanceof ArrayBuffer||(r=JSON.stringify(r),a.headers["Content-Type"]="application/json"),r&&(a.data=r),i.default(t,a).then(m(e))},isCancel:function(e){return i.default.isCancel(e)},copy:function(e,t){void 0===t&&(t={});var n=s.default(e,t);return n&&t.shutup!==!0&&d.toast.info("内容已拷贝到剪切板"),n},richTextToken:"",affixOffsetBottom:0},c))),e),f}Object.defineProperty(t,"__esModule",{value:!0}),t.embed=void 0;var r=e("node_modules/tslib/tslib");e("835699d");var o=r.__importDefault(e("node_modules/react/index")),a=e("node_modules/react-dom/index"),i=r.__importDefault(e("node_modules/axios/index")),s=r.__importDefault(e("node_modules/copy-to-clipboard/index")),u=r.__importDefault(e("node_modules/qs/lib/index")),d=e("d019970");t.embed=n});
;/*!examples/loader.ts*/
amis.define("3be4436",function(){function e(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];var n=e.shift();return n=Array.isArray(n)?n.map(function(e){return d[e]||e}):d[n]||n,e.unshift(n),amis.require.apply(this,e)}var d={jquery:"node_modules/jquery/dist/jquery",react:"node_modules/react/index","react-dom":"node_modules/react-dom/index","react-addons-update":"node_modules/react-addons-update/index","immutability-helper":"node_modules/react-addons-update/index","react-cropper":"node_modules/react-cropper/dist/react-cropper","react-dropzone":"node_modules/react-dropzone/dist/index",classnames:"node_modules/classnames/index",axios:"node_modules/axios/index",moment:"node_modules/moment/moment",mobx:"node_modules/mobx/lib/index","mobx-state-tree":"node_modules/mobx-state-tree/dist/mobx-state-tree","react-transition-group":"node_modules/react-transition-group/index",echarts:"node_modules/echarts/index",zrender:"node_modules/zrender/index",sortablejs:"node_modules/sortablejs/Sortable",amis:"d019970","amis/embed":"2ab197b","prop-types":"node_modules/prop-types/index","async/mapLimit":"node_modules/async/mapLimit",qs:"node_modules/qs/lib/index"};window.amisRequire=e});
;/*!src/components/RichText.tsx*/
amis.define("1e5b785",function(e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=e("node_modules/tslib/tslib"),o=t.__importDefault(e("node_modules/react/index")),n=t.__importDefault(e("node_modules/jquery/dist/jquery"));[e("node_modules/froala-editor/js/froala_editor.min"),e("node_modules/froala-editor/js/plugins/align.min"),e("node_modules/froala-editor/js/plugins/char_counter.min"),e("node_modules/froala-editor/js/plugins/code_beautifier.min"),e("node_modules/froala-editor/js/plugins/code_view.min"),e("node_modules/froala-editor/js/plugins/colors.min"),e("node_modules/froala-editor/js/plugins/draggable.min"),e("node_modules/froala-editor/js/plugins/emoticons.min"),e("node_modules/froala-editor/js/plugins/entities.min"),e("node_modules/froala-editor/js/plugins/font_family.min"),e("node_modules/froala-editor/js/plugins/font_size.min"),e("node_modules/froala-editor/js/plugins/forms.min"),e("node_modules/froala-editor/js/plugins/fullscreen.min"),e("node_modules/froala-editor/js/plugins/help.min"),e("node_modules/froala-editor/js/plugins/image.min"),e("node_modules/froala-editor/js/plugins/image_manager.min"),e("node_modules/froala-editor/js/plugins/inline_class.min"),e("node_modules/froala-editor/js/plugins/inline_style.min"),e("node_modules/froala-editor/js/plugins/line_breaker.min"),e("node_modules/froala-editor/js/plugins/line_height.min"),e("node_modules/froala-editor/js/plugins/link.min"),e("node_modules/froala-editor/js/plugins/lists.min"),e("node_modules/froala-editor/js/plugins/paragraph_format.min"),e("node_modules/froala-editor/js/plugins/paragraph_style.min"),e("node_modules/froala-editor/js/plugins/print.min"),e("node_modules/froala-editor/js/plugins/quick_insert.min"),e("node_modules/froala-editor/js/plugins/quote.min"),e("node_modules/froala-editor/js/plugins/save.min"),e("node_modules/froala-editor/js/plugins/special_characters.min"),e("node_modules/froala-editor/js/plugins/table.min"),e("node_modules/froala-editor/js/plugins/url.min"),e("node_modules/froala-editor/js/plugins/video.min"),e("node_modules/froala-editor/js/plugins/word_paste.min")].forEach(function(e){return e()});var a=e("67d35e6"),l=function(e){function i(i){var t=e.call(this,i)||this;return t.listeningEvents=[],t.$element=null,t.$editor=null,t.config={immediateReactModelUpdate:!1,reactIgnoreAttrs:null},t.editorInitialized=!1,t.oldModel=null,t.textareaRef=t.textareaRef.bind(t),t}return t.__extends(i,e),i.prototype.componentDidUpdate=function(){JSON.stringify(this.oldModel)!=JSON.stringify(this.props.model)&&this.setContent()},i.prototype.textareaRef=function(e){e?this.createEditor(e):this.destroyEditor()},i.prototype.createEditor=function(e){this.editorInitialized||(this.config=this.props.config||this.config,this.$element=n.default(e),this.setContent(!0),this.registerEvents(),a.resizeSensor(e.parentElement,function(){n.default(e).prev(".fr-box").find(".fr-toolbar").css("width","")}),this.$editor=this.$element.froalaEditor(this.config).data("froala.editor").$el,this.initListeners(),this.editorInitialized=!0)},i.prototype.setContent=function(e){void 0===e&&(e=!1),(this.editorInitialized||e)&&(this.props.model||""==this.props.model)&&(this.oldModel=this.props.model,this.setNormalTagContent(e))},i.prototype.setNormalTagContent=function(e){function i(){t.$element.froalaEditor("html.set",t.props.model||"",!0),t.$element.froalaEditor("undo.reset"),t.$element.froalaEditor("undo.saveStep")}var t=this;e?this.registerEvent(this.$element,"froalaEditor.initialized",i):i()},i.prototype.getEditor=function(){return this.$element?this.$element.froalaEditor.bind(this.$element):null},i.prototype.updateModel=function(){if(this.props.onModelChange){var e="",i=this.$element.froalaEditor("html.get");"string"==typeof i&&(e=i),this.oldModel=e,this.props.onModelChange(e)}},i.prototype.initListeners=function(){var e=this;this.registerEvent(this.$element,"froalaEditor.contentChanged",function(){e.updateModel()}),this.config.immediateReactModelUpdate&&this.registerEvent(this.$editor,"keyup",function(){e.updateModel()})},i.prototype.registerEvent=function(e,i,t){e&&i&&t&&(this.listeningEvents.push(i),e.on(i,t))},i.prototype.registerEvents=function(){var e=this.config.events;if(e)for(var i in e)e.hasOwnProperty(i)&&this.registerEvent(this.$element,i,e[i])},i.prototype.destroyEditor=function(){this.$element&&(this.listeningEvents&&this.$element.off(this.listeningEvents.join(" ")),this.$editor.off("keyup"),this.$element.froalaEditor("destroy"),this.listeningEvents.length=0,this.$element=null,this.editorInitialized=!1)},i.prototype.render=function(){return o.default.createElement("textarea",{ref:this.textareaRef})},i}(o.default.Component);i.default=l,n.default.FE.VIDEO_PROVIDERS=[{test_regex:/.*/,url_regex:"",url_text:"",html:'<span class="fr-video fr-dvb fr-draggable" contenteditable="false" draggable="true"><video class="fr-draggable" controls="" data-msg="ok" data-status="0" src="{url}" style="width: 600px;"></video></span>'}],n.default.FE.LANGUAGE.zh_cn={translation:{"Type something":"输入一些内容",Bold:"粗体",Italic:"斜体",Underline:"下划线",Strikethrough:"删除线",Insert:"插入",Delete:"删除",Cancel:"取消",OK:"确定",Back:"背部",Remove:"去掉",More:"更多",Update:"更新",Style:"风格","Font Family":"字体","Font Size":"字号",Colors:"颜色",Background:"背景",Text:"文字","Paragraph Format":"格式",Normal:"正常",Code:"代码","Heading 1":"标题1","Heading 2":"标题2","Heading 3":"标题3","Heading 4":"标题4","Paragraph Style":"段落样式","Inline Style":"内联样式",Align:"对齐方式","Align Left":"左对齐","Align Center":"居中","Align Right":"右对齐","Align Justify":"两端对齐",None:"无","Ordered List":"编号列表","Unordered List":"项目符号","Decrease Indent":"减少缩进","Increase Indent":"增加缩进","Insert Link":"插入链接","Open in new tab":"开启在新标签页","Open Link":"打开链接","Edit Link":"编辑链接",Unlink:"删除链接","Choose Link":"选择链接","Insert Image":"插入图片","Upload Image":"上传图片","By URL":"通过网址",Browse:"浏览","Drop image":"图像拖放","or click":"或点击","Manage Images":"管理图像",Loading:"载入中",Deleting:"删除",Tags:"标签","Are you sure? Image will be deleted.":"你确定吗？图像将被删除。",Replace:"更换",Uploading:"上传","Loading image":"导入图像",Display:"显示",Inline:"排队","Break Text":"断开文本","Alternate Text":"备用文本","Change Size":"尺寸变化",Width:"宽度",Height:"高度","Something went wrong. Please try again.":"出了些问题。 请再试一次。","Insert Video":"插入视频","Embedded Code":"嵌入式代码","Insert Table":"插入表格","Table Header":"表头","Remove Table":"删除表","Table Style":"表格样式","Horizontal Align":"水平对齐方式",Row:"行","Insert row above":"在上方插入","Insert row below":"在下方插入","Delete row":"删除行",Column:"列","Insert column before":"在左侧插入","Insert column after":"在右侧插入","Delete column":"删除列",Cell:"单元格","Merge cells":"合并单元格","Horizontal split":"水平分割","Vertical split":"垂直分割","Cell Background":"单元格背景","Vertical Align":"垂直对齐方式",Top:"最佳",Middle:"中间",Bottom:"底部","Align Top":"顶部对齐","Align Middle":"中间对齐","Align Bottom":"底部对齐","Cell Style":"单元格样式","Upload File":"上传文件","Drop file":"文件拖放",Emoticons:"表情","Grinning face":"脸上笑嘻嘻","Grinning face with smiling eyes":"","Face with tears of joy":"笑嘻嘻的脸，含笑的眼睛","Smiling face with open mouth":"笑脸张开嘴","Smiling face with open mouth and smiling eyes":"笑脸张开嘴微笑的眼睛","Smiling face with open mouth and cold sweat":"笑脸张开嘴，一身冷汗","Smiling face with open mouth and tightly-closed eyes":"笑脸张开嘴，紧紧闭着眼睛","Smiling face with halo":"笑脸晕","Smiling face with horns":"微笑的脸角","Winking face":"眨眼表情","Smiling face with smiling eyes":"面带微笑的眼睛","Face savoring delicious food":"面对品尝美味的食物","Relieved face":"面对如释重负","Smiling face with heart-shaped eyes":"微笑的脸，心脏形的眼睛","Smiling face with sunglasses":"笑脸太阳镜","Smirking face":"面对面带笑容","Neutral face":"中性面","Expressionless face":"面无表情","Unamused face":"一脸不快的脸","Face with cold sweat":"面对冷汗","Pensive face":"沉思的脸","Confused face":"面对困惑","Confounded face":"该死的脸","Kissing face":"面对接吻","Face throwing a kiss":"面对投掷一个吻","Kissing face with smiling eyes":"接吻脸，含笑的眼睛","Kissing face with closed eyes":"接吻的脸闭着眼睛","Face with stuck out tongue":"面对伸出舌头","Face with stuck out tongue and winking eye":"面对伸出舌头和眨动的眼睛","Face with stuck out tongue and tightly-closed eyes":"面对伸出舌头和紧闭的眼睛","Disappointed face":"面对失望","Worried face":"面对担心","Angry face":"愤怒的脸","Pouting face":"面对噘嘴","Crying face":"哭泣的脸","Persevering face":"怎奈脸","Face with look of triumph":"面带看的胜利","Disappointed but relieved face":"失望，但脸上释然","Frowning face with open mouth":"面对皱着眉头张口","Anguished face":"面对痛苦","Fearful face":"可怕的脸","Weary face":"面对厌倦","Sleepy face":"面对困","Tired face":"疲惫的脸","Grimacing face":"狰狞的脸","Loudly crying face":"大声哭脸","Face with open mouth":"面对张开嘴","Hushed face":"安静的脸","Face with open mouth and cold sweat":"","Face screaming in fear":"面对张开嘴，一身冷汗","Astonished face":"面对惊讶","Flushed face":"红扑扑的脸蛋","Sleeping face":"熟睡的脸","Dizzy face":"面对眩","Face without mouth":"脸上没有嘴","Face with medical mask":"面对医疗口罩",Break:"破",Subscript:"下标",Superscript:"上标",Fullscreen:"全屏","Insert Horizontal Line":"插入水平线","Clear Formatting":"格式化删除",Undo:"撤消",Redo:"重复","Select All":"全选","Code View":"代码视图",Quote:"引用",Increase:"增加引用",Decrease:"删除引用","Quick Insert":"快插"},direction:"ltr"}});
;/*!examples/loadMonacoEditor.ts*/
amis.define("b961301",function(s,a){"use strict";function i(s){var a="/amis/n/monaco-editor/min/vs/loader_8503809.js",i=amis.require.loadJs(n(a));i.onload=function(){return e(window.require,s)}}function n(s){return s}function e(s,a){var i={"vs/nls":{availableLanguages:{"*":"zh-cn"}},paths:{vs:"/amis/n/monaco-editor/min/vs/editor/editor.main_b05b5fe.js".replace(/\/vs\/.*$/,""),"vs/base/worker/workerMain":"/amis/n/monaco-editor/min/vs/base/worker/workerMain_ce453a4.js","vs/basic-languages/apex/apex":"/amis/n/monaco-editor/min/vs/basic-languages/apex/apex_d4ae4dd.js","vs/basic-languages/azcli/azcli":"/amis/n/monaco-editor/min/vs/basic-languages/azcli/azcli_1b0ef3f.js","vs/basic-languages/clojure/clojure":"/amis/n/monaco-editor/min/vs/basic-languages/clojure/clojure_903e94b.js","vs/basic-languages/bat/bat":"/amis/n/monaco-editor/min/vs/basic-languages/bat/bat_9d67e6c.js","vs/basic-languages/coffee/coffee":"/amis/n/monaco-editor/min/vs/basic-languages/coffee/coffee_ed86fc7.js","vs/basic-languages/cpp/cpp":"/amis/n/monaco-editor/min/vs/basic-languages/cpp/cpp_4f3f527.js","vs/basic-languages/csharp/csharp":"/amis/n/monaco-editor/min/vs/basic-languages/csharp/csharp_6d526d9.js","vs/basic-languages/css/css":"/amis/n/monaco-editor/min/vs/basic-languages/css/css_9b5d23e.js","vs/basic-languages/dockerfile/dockerfile":"/amis/n/monaco-editor/min/vs/basic-languages/dockerfile/dockerfile_ae15175.js","vs/basic-languages/fsharp/fsharp":"/amis/n/monaco-editor/min/vs/basic-languages/fsharp/fsharp_899ae6c.js","vs/basic-languages/go/go":"/amis/n/monaco-editor/min/vs/basic-languages/go/go_c9012ae.js","vs/basic-languages/handlebars/handlebars":"/amis/n/monaco-editor/min/vs/basic-languages/handlebars/handlebars_3b4ba3a.js","vs/basic-languages/html/html":"/amis/n/monaco-editor/min/vs/basic-languages/html/html_cae751f.js","vs/basic-languages/ini/ini":"/amis/n/monaco-editor/min/vs/basic-languages/ini/ini_d156643.js","vs/basic-languages/java/java":"/amis/n/monaco-editor/min/vs/basic-languages/java/java_d1eb191.js","vs/basic-languages/javascript/javascript":"/amis/n/monaco-editor/min/vs/basic-languages/javascript/javascript_b58352d.js","vs/basic-languages/less/less":"/amis/n/monaco-editor/min/vs/basic-languages/less/less_a309479.js","vs/basic-languages/lua/lua":"/amis/n/monaco-editor/min/vs/basic-languages/lua/lua_c8b58eb.js","vs/basic-languages/markdown/markdown":"/amis/n/monaco-editor/min/vs/basic-languages/markdown/markdown_7c5bc2f.js","vs/basic-languages/msdax/msdax":"/amis/n/monaco-editor/min/vs/basic-languages/msdax/msdax_d5bc491.js","vs/basic-languages/objective-c/objective-c":"/amis/n/monaco-editor/min/vs/basic-languages/objective-c/objective-c_1fec7dc.js","vs/basic-languages/php/php":"/amis/n/monaco-editor/min/vs/basic-languages/php/php_b5da4f5.js","vs/basic-languages/postiats/postiats":"/amis/n/monaco-editor/min/vs/basic-languages/postiats/postiats_20abb55.js","vs/basic-languages/powershell/powershell":"/amis/n/monaco-editor/min/vs/basic-languages/powershell/powershell_d8ffc04.js","vs/basic-languages/pug/pug":"/amis/n/monaco-editor/min/vs/basic-languages/pug/pug_a30d087.js","vs/basic-languages/python/python":"/amis/n/monaco-editor/min/vs/basic-languages/python/python_5acdbdf.js","vs/basic-languages/r/r":"/amis/n/monaco-editor/min/vs/basic-languages/r/r_079ab6e.js","vs/basic-languages/razor/razor":"/amis/n/monaco-editor/min/vs/basic-languages/razor/razor_7730201.js","vs/basic-languages/redis/redis":"/amis/n/monaco-editor/min/vs/basic-languages/redis/redis_26463cb.js","vs/basic-languages/redshift/redshift":"/amis/n/monaco-editor/min/vs/basic-languages/redshift/redshift_13e3c26.js","vs/basic-languages/ruby/ruby":"/amis/n/monaco-editor/min/vs/basic-languages/ruby/ruby_3457027.js","vs/basic-languages/rust/rust":"/amis/n/monaco-editor/min/vs/basic-languages/rust/rust_13de2a3.js","vs/basic-languages/sb/sb":"/amis/n/monaco-editor/min/vs/basic-languages/sb/sb_902b8f0.js","vs/basic-languages/scheme/scheme":"/amis/n/monaco-editor/min/vs/basic-languages/scheme/scheme_3e818b9.js","vs/basic-languages/scss/scss":"/amis/n/monaco-editor/min/vs/basic-languages/scss/scss_709c082.js","vs/basic-languages/shell/shell":"/amis/n/monaco-editor/min/vs/basic-languages/shell/shell_c765862.js","vs/basic-languages/solidity/solidity":"/amis/n/monaco-editor/min/vs/basic-languages/solidity/solidity_ed089ae.js","vs/basic-languages/sql/sql":"/amis/n/monaco-editor/min/vs/basic-languages/sql/sql_0164782.js","vs/basic-languages/st/st":"/amis/n/monaco-editor/min/vs/basic-languages/st/st_7af06b2.js","vs/basic-languages/swift/swift":"/amis/n/monaco-editor/min/vs/basic-languages/swift/swift_ac12a14.js","vs/basic-languages/typescript/typescript":"/amis/n/monaco-editor/min/vs/basic-languages/typescript/typescript_b47f441.js","vs/basic-languages/vb/vb":"/amis/n/monaco-editor/min/vs/basic-languages/vb/vb_ee7309d.js","vs/basic-languages/xml/xml":"/amis/n/monaco-editor/min/vs/basic-languages/xml/xml_9dfe430.js","vs/basic-languages/yaml/yaml":"/amis/n/monaco-editor/min/vs/basic-languages/yaml/yaml_02e29fb.js","vs/editor/editor.main":"/amis/n/monaco-editor/min/vs/editor/editor.main_b05b5fe.js","vs/editor/editor.main.css":"/amis/n/monaco-editor/min/vs/editor/editor.main_9e19735.css","vs/editor/editor.main.nls":"/amis/n/monaco-editor/min/vs/editor/editor.main.nls_e982b88.js","vs/editor/editor.main.nls.zh-cn":"/amis/n/monaco-editor/min/vs/editor/editor.main.nls.zh-cn_dde971a.js","vs/language/typescript/tsMode":"/amis/n/monaco-editor/min/vs/language/typescript/tsMode_3dc8f50.js","vs/language/typescript/tsWorker":"/amis/n/monaco-editor/min/vs/language/typescript/tsWorker_a0d7746.js","vs/language/json/jsonMode":"/amis/n/monaco-editor/min/vs/language/json/jsonMode_999a98d.js","vs/language/json/jsonWorker":"/amis/n/monaco-editor/min/vs/language/json/jsonWorker_1d6259b.js","vs/language/html/htmlMode":"/amis/n/monaco-editor/min/vs/language/html/htmlMode_825d6c1.js","vs/language/html/htmlWorker":"/amis/n/monaco-editor/min/vs/language/html/htmlWorker_9d83687.js","vs/language/css/cssMode":"/amis/n/monaco-editor/min/vs/language/css/cssMode_b2e5099.js","vs/language/css/cssWorker":"/amis/n/monaco-editor/min/vs/language/css/cssWorker_0c03514.js"}};Object.keys(i.paths).forEach(function(s){i.paths[s]=n(i.paths[s].replace(/\.js$/,""))}),s.config(i),/^(https?:)?\/\//.test(i.paths.vs)?window.MonacoEnvironment={getWorkerUrl:function(){return"data:text/javascript;charset=utf-8,"+encodeURIComponent("\n              self.MonacoEnvironment = {\n                  baseUrl: '"+i.paths.vs+"',\n                  paths: "+JSON.stringify(i.paths)+"\n              };\n              importScripts('/amis/n/monaco-editor/min/vs/base/worker/workerMain_ce453a4.js');")}}:delete window.MonacoEnvironment,s(["vs/editor/editor.main"],function(s){a(s)})}Object.defineProperty(a,"__esModule",{value:!0}),a.__mod__async__load=void 0,a.__mod__async__load=i});
;/*!examples/components/Play.jsx*/
amis.define("9b1667d",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("node_modules/tslib/tslib"),o=n.__importDefault(e("node_modules/react/index")),a=e("6ae88e0"),s=e("d019970"),i=e("bfe4ee0"),r=n.__importDefault(e("node_modules/axios/index")),l=n.__importDefault(e("node_modules/react-frame-component/lib/index")),d=n.__importDefault(e("node_modules/strip-json-comments/index")),u=n.__importDefault(e("997c87d")),c=n.__importDefault(e("node_modules/copy-to-clipboard/index")),h='{\n    "$schema": "/schemas/page.json#",\n    "type": "page",\n    "title": "Title",\n    "body": "Body",\n    "aside": "Aside",\n    "toolbar": "Toolbar"\n}',p={none:"",body:'{\n        "type": "page",\n        "body": SCHEMA_PLACEHOLDER\n    }',form:'{\n        "type": "page",\n        "body": {\n            "title": "",\n            "type": "form",\n            "autoFocus": false,\n            "api": "https://houtai.baidu.com/api/mock2/saveForm?waitSeconds=1",\n            "mode": "horizontal",\n            "controls": SCHEMA_PLACEHOLDER,\n            "submitText": null,\n            "actions": []\n        }\n    }',"form-item":'{\n        "type": "page",\n        "body": {\n            "title": "",\n            "type": "form",\n            "mode": "horizontal",\n            "autoFocus": false,\n            "controls": [\n                SCHEMA_PLACEHOLDER\n            ],\n            "submitText": null,\n            "actions": []\n        }\n    }'},m=function(e){function t(t){var o=e.call(this,t)||this;o.state=null,o.startX=0,o.oldContents="";var s=t.router,l=o.buildSchema(t.code||h,t);o.state={asideWidth:t.asideWidth||Math.max(300,.3*window.innerWidth),schema:l,schemaCode:JSON.stringify(l,null,2)},o.handleMouseDown=o.handleMouseDown.bind(o),o.handleMouseMove=o.handleMouseMove.bind(o),o.handleMouseUp=o.handleMouseUp.bind(o),o.removeWindowEvents=o.removeWindowEvents.bind(o),o.handleChange=o.handleChange.bind(o),o.schemaProps={style:{height:"100%"}};var d=function(e){e=e||"";var t=s.getCurrentLocation();e&&"#"===e[0]?e=t.pathname+t.search+e:e&&"?"===e[0]&&(e=t.pathname+e);var n=e.indexOf("?"),o=e.indexOf("#"),a=~n?e.substring(0,n):~o?e.substring(0,o):e,i=~n?e.substring(n,~o?o:void 0):"",r=~o?e.substring(o):t.hash;if(a){if("/"!=a[0]&&!/^https?:\/\//.test(a)){var l=t.pathname,d=l.split("/");d.pop();for(var u=void 0;u=/^\.\.?\//.exec(a);)"../"===u[0]&&d.pop(),a=a.substring(u[0].length);a=d.concat(a).join("/")}}else a=t.pathname;return a+i+r};o.env={session:"doc",updateLocation:function(e,t){s[t?"replace":"push"](d(e))},isCurrentUrl:function(e){var t=d(e);return s.isActive(t)},jumpTo:function(e,t){return e=d(e),t&&"url"===t.actionType?void(t.blank===!1?window.location.href=e:window.open(e)):void(/^https?:\/\//.test(e)?window.location.replace(e):s.push(e))},fetcher:function(e){return e=n.__assign({dataType:"json"},e),"json"===e.dataType&&e.data&&(e.data=JSON.stringify(e.data),e.headers=e.headers||{},e.headers["Content-Type"]="application/json"),r.default[e.method](e.url,e.data,e)},isCancel:function(e){return r.default.isCancel(e)},notify:function(e,t){return a.toast[e]?a.toast[e](t,"error"===e?"系统错误":"系统消息"):console.warn("[Notify]",e,t)},alert:i.alert,confirm:i.confirm,copy:function(e){c.default(e),a.toast.success("内容已复制到粘贴板")}};var u=[].slice.call(document.head.querySelectorAll("link,style")).map(function(e){return e.outerHTML});return o.frameTemplate="<!DOCTYPE html><html><head>"+u.join("")+"</head><body><div></div></body></html>",o}return n.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this.props;if(t.code!==e.code){var n=this.buildSchema(e.code||h,e);this.setState({schema:n,schemaCode:JSON.stringify(n,null,2)})}},t.prototype.componentDidMount=function(){this.props.setAsideFolded&&this.props.setAsideFolded(!0)},t.prototype.componentWillUnmount=function(){this.props.setAsideFolded&&this.props.setAsideFolded(!1)},t.prototype.buildSchema=function(e,t){void 0===t&&(t=this.props);var o=t.location.query;try{var a=o.scope||t.scope;a&&p[a]&&(e=p[a].replace("SCHEMA_PLACEHOLDER",e)),e=d.default(e).replace(/('|")raw:/g,"$1");var s=n.__assign({$schema:window.location.protocol+"//"+window.location.host+"/schemas/page.json#"},JSON.parse(e));return s}catch(i){console.error(this.formatMessage(i.message,e))}return{}},t.prototype.formatMessage=function(e,t){if(/position\s?(\d+)$/.test(e)){var n=t.substring(0,parseInt(RegExp.$1,10)).split(/\n|\r\n|\r/);e="Json 语法错误，请检测。出错位置："+n.length+"，列："+n[n.length-1].length+"。"}return e},t.prototype.renderPreview=function(){var e=this.state.schema,t=n.__assign(n.__assign({},this.schemaProps),{theme:this.props.theme,locale:this.props.locale,affixHeader:!1,affixFooter:!1});return this.props.useIFrame?o.default.createElement(l.default,{width:"100%",height:"100%",frameBorder:0,initialContent:this.frameTemplate},s.render(e,t,this.env)):s.render(e,t,this.env)},t.prototype.handleChange=function(e){this.setState({schemaCode:e});try{var t=JSON.parse(e);this.setState({schema:t})}catch(n){}},t.prototype.handleMouseDown=function(e){return this.startX=e.clientX,this.startWidth=this.state.asideWidth,window.addEventListener("mouseup",this.handleMouseUp),window.addEventListener("mousemove",this.handleMouseMove),!1},t.prototype.handleMouseMove=function(e){var t=this.startX-e.clientX;e.preventDefault(),this.setState({asideWidth:Math.min(800,Math.max(200,this.startWidth+t))})},t.prototype.handleMouseUp=function(){this.removeWindowEvents()},t.prototype.removeWindowEvents=function(){window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("mousemove",this.handleMouseMove)},t.prototype.renderEditor=function(){return o.default.createElement(u.default,{value:this.state.schemaCode,onChange:this.handleChange,language:"json"})},t.prototype.render=function(){var e=this.props.vertical;return e?o.default.createElement("div",{className:"vbox"},o.default.createElement("div",{className:"row-row"},o.default.createElement("div",{className:"cell pos-rlt"},o.default.createElement("div",{className:"scroll-y h-full pos-abt w-full"},this.renderPreview()))),o.default.createElement("div",{className:"row-row b-t",style:{height:200}},o.default.createElement("div",{className:"cell"},this.renderEditor()))):o.default.createElement("div",{style:{position:"absolute",top:50,bottom:0}},o.default.createElement("div",{className:"hbox"},o.default.createElement("div",{className:"col pos-rlt"},o.default.createElement("div",{className:"scroll-y h-full pos-abt w-full"},this.renderPreview())),o.default.createElement("div",{className:"col bg-light lter b-l bg-auto pos-rlt",style:{width:this.state.asideWidth}},o.default.createElement("div",{className:"resizer",onMouseDown:this.handleMouseDown}),this.renderEditor())))},t.defaultProps={useIFrame:!1,vertical:!1},t}(o.default.Component);t.default=m});