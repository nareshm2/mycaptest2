//@ui5-bundle com/employeeapp/employee/employeeapp/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/employeeapp/employee/employeeapp/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/employeeapp/employee/employeeapp/model/models"],function(e,o,p){"use strict";return e.extend("com.employeeapp.employee.employeeapp.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(p.createDeviceModel(),"device")}})});
},
	"com/employeeapp/employee/employeeapp/controller/View1.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("com.employeeapp.employee.employeeapp.controller.View1",{onInit:function(){}})});
},
	"com/employeeapp/employee/employeeapp/i18n/i18n.properties":'title=Employee App\nappTitle=Employee App\nappDescription=App Description\n\nflpTitle=Employee App\nflpSubtitle=',
	"com/employeeapp/employee/employeeapp/manifest.json":'{"_version":"1.32.0","sap.app":{"id":"com.employeeapp.employee.employeeapp","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","ach":"ach","dataSources":{"mainService":{"uri":"catalog/","type":"OData","settings":{"odataVersion":"4.0","localUri":"localService/metadata.xml"}}},"crossNavigation":{"inbounds":{"com-employeeapp-employee-employeeapp-inbound":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"EmployeeSO","action":"Display","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","icon":""}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"sap-icon://task","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"rootView":{"viewName":"com.employeeapp.employee.employeeapp.view.View1","type":"XML","async":true,"id":"View1"},"dependencies":{"minUI5Version":"1.94.1","libs":{"sap.ui.core":{},"sap.m":{},"sap.ui.layout":{},"sap.f":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.employeeapp.employee.employeeapp.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"com.employeeapp.employee.employeeapp.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":"RouteView1","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}}},"sap.cloud":{"public":true,"service":"com-employee-employee"},"sap.platform.cf":{"OAuth scopes":["$XSAPPNAME.Display"]}}',
	"com/employeeapp/employee/employeeapp/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"com/employeeapp/employee/employeeapp/view/View1.view.xml":'<mvc:View\n    controllerName="com.employeeapp.employee.employeeapp.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc"\n    displayBlock="true"\n    xmlns="sap.m"\n><Shell id="shell"><App id="app"><pages><Page id="page" title="{i18n>title}"><content><Table id="tablelist" items="{path:\'/Books\'}"><columns><Column ><Label text="ID"/></Column><Column ><Label text="Title"/></Column><Column ><Label text="Stock"/></Column></columns><items><ColumnListItem><cells><Text text="{ID}" /><Text text="{title}" /><Text text="{stock}" /></cells></ColumnListItem></items></Table></content></Page></pages></App></Shell></mvc:View>\n'
}});
