sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("com.employeeapp.employee.employeeapp.controller.View1",
      {
        onInit: function () {
            this.oRouter = this.getOwnerComponent().getRouter();
        },
        onListItemPress: function (oEvent) {
		//	var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(1), //flexiblecoulmnlayout code
			var	sBasePartPath = oEvent.getSource().getBindingContext().getPath(),
			sBasePart = sBasePartPath.split("/").slice(-1).pop();
        //commented as flexiblecolumnlayout navigation is disabled for now.
        //	this.oRouter.navTo("SideContent", {layout: oNextUIState.layout, basepart: sBasePart});
            this.getView().byId("idSideContentBox").bindElement({
				path: "/"+sBasePart
            }).setVisible(true);
            
        },
        onSideContentCollapse: function(){
            this.getView().byId("idSideContentBox").setVisible(false);
            
        },
        onSideNavButtonPress: function () {
          var oToolPage = this.byId("toolPage");
          var bSideExpanded = oToolPage.getSideExpanded();

          this._setToggleButtonTooltip(bSideExpanded);

          oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
        },
        _setToggleButtonTooltip: function (bLarge) {
          var oToggleButton = this.byId("sideNavigationToggleButton");
          if (bLarge) {
            oToggleButton.setTooltip("Large Size Navigation");
          } else {
            oToggleButton.setTooltip("Small Size Navigation");
          }
        },
      }
    );
  }
);
