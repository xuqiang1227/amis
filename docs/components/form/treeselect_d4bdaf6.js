amis.define('docs/components/form/treeselect.md', function(require, exports, module, define) {

  module.exports = {
    "title": "TreeSelect 树形选择器",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "TreeSelect 树形选择器",
    "icon": null,
    "order": 60,
    "html": "<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" href=\"#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本使用</h2><div class=\"amis-preview\" style=\"height: 600px\"><script type=\"text/schema\" height=\"600\" scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n  \"controls\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree\",\n      \"label\": \"Tree\",\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        },\n        {\n          \"label\": \"Folder E\",\n          \"children\": [\n            {\n              \"label\": \"Folder G\",\n              \"children\": [\n                {\n                  \"label\": \"file H\",\n                  \"value\": 6\n                },\n                {\n                  \"label\": \"file I\",\n                  \"value\": 7\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div>\n<p>更多用法，见 <a href=\"./tree\">Tree</a></p>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本使用",
          "fragment": "%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});