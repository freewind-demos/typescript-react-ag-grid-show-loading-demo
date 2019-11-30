TypeScript React "Ag Grid" Show Loading Demo
=============================================

Ag-grid的文档中说，当rowData为null或undefined的时候，会显示loading；当为`[]`时，会显示No Data。

但是实际上这里有个bug，只有在初始化的时候有此行为，后来rowData如果被设置为了null/undefined，它依然会被当成No data。

参看：https://github.com/ag-grid/ag-grid/issues/1665

所以我们必须在onRowDataChanged里手动处理，很讨厌。 

```
npm install
npm run demo
```

It will open page on browser automatically.
