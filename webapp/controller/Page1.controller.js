sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History"
], function (BaseController, MessageBox, Utilities, History) {
	"use strict";

	return BaseController.extend("com.sap.build.standard.untitledPrototype.controller.Page1", {
		handleRouteMatched: function (oEvent) {
			var sAppId = "App5eb047adcc19661f91af43fb";

			var oParams = {};

			if (oEvent.mParameters.data.context) {
				this.sContext = oEvent.mParameters.data.context;

			} else {
				if (this.getOwnerComponent().getComponentData()) {
					var patternConvert = function (oParam) {
						if (Object.keys(oParam).length !== 0) {
							for (var prop in oParam) {
								if (prop !== "sourcePrototype" && prop.includes("Set")) {
									return prop + "(" + oParam[prop][0] + ")";
								}
							}
						}
					};

					this.sContext = patternConvert(this.getOwnerComponent().getComponentData().startupParameters);

				}
			}

			var oPath;

			if (this.sContext) {
				oPath = {
					path: "/" + this.sContext,
					parameters: oParams
				};
				this.getView().bindObject(oPath);
			}

		},
		_onToggleButtonPress: function (oEvent) {
			var oToolPage = oEvent.getSource().getParent().getParent();
			var oSideNavigation = oToolPage.getAggregation('sideContent');
			var bExpanded = oSideNavigation.getExpanded();
			oSideNavigation.setExpanded(!bExpanded);

		},
		_onButtonPress: function (oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function (fnResolve) {

				this.doNavigate("Page1", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		doNavigate: function (sRouteName, oBindingContext, fnPromiseResolve, sViaRelation) {
			var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
			var oModel = (oBindingContext) ? oBindingContext.getModel() : null;

			var sEntityNameSet;
			if (sPath !== null && sPath !== "") {
				if (sPath.substring(0, 1) === "/") {
					sPath = sPath.substring(1);
				}
				sEntityNameSet = sPath.split("(")[0];
			}
			var sNavigationPropertyName;
			var sMasterContext = this.sMasterContext ? this.sMasterContext : sPath;

			if (sEntityNameSet !== null) {
				sNavigationPropertyName = sViaRelation || this.getOwnerComponent().getNavigationPropertyForNavigationWithContext(sEntityNameSet,
					sRouteName);
			}
			if (sNavigationPropertyName !== null && sNavigationPropertyName !== undefined) {
				if (sNavigationPropertyName === "") {
					this.oRouter.navTo(sRouteName, {
						context: sPath,
						masterContext: sMasterContext
					}, false);
				} else {
					oModel.createBindingContext(sNavigationPropertyName, oBindingContext, null, function (bindingContext) {
						if (bindingContext) {
							sPath = bindingContext.getPath();
							if (sPath.substring(0, 1) === "/") {
								sPath = sPath.substring(1);
							}
						} else {
							sPath = "undefined";
						}

						// If the navigation is a 1-n, sPath would be "undefined" as this is not supported in Build
						if (sPath === "undefined") {
							this.oRouter.navTo(sRouteName);
						} else {
							this.oRouter.navTo(sRouteName, {
								context: sPath,
								masterContext: sMasterContext
							}, false);
						}
					}.bind(this));
				}
			} else {
				this.oRouter.navTo(sRouteName);
			}

			if (typeof fnPromiseResolve === "function") {
				fnPromiseResolve();
			}

		},
		_onNavigationListItemSelect: function (oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function (fnResolve) {

				this.doNavigate("Page4", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onNavigationListItemSelect1: function (oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function (fnResolve) {

				this.doNavigate("Page2", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onNavigationListItemSelect2: function (oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function (fnResolve) {

				this.doNavigate("Page3", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onNavigationListItemSelect3: function (oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function (fnResolve) {

				this.doNavigate("Page4", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onNavigationListItemSelect4: function (oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function (fnResolve) {

				this.doNavigate("Page14", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onNavigationListItemSelect5: function (oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function (fnResolve) {

				this.doNavigate("Page15", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onNavigationListItemSelect6: function (oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function (fnResolve) {

				this.doNavigate("Page16", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onNavigationListItemFirstLevelSelect: function (oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function (fnResolve) {

				this.doNavigate("Page5", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onNavigationListItemFirstLevelSelect1: function (oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function (fnResolve) {

				this.doNavigate("Page6", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		formatDateTimeUTCtoLocale: function (utcDate) {
			return utcDate ? new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate(), utcDate.getUTCHours(), utcDate.getUTCMinutes(),
				utcDate.getUTCSeconds()) : null;

		},
		formatDateTimeUTCtoLocaleForStartDate: function (utcDate) {
			return utcDate ? new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate(), utcDate.getUTCHours(), utcDate.getUTCMinutes(),
				utcDate.getUTCSeconds()) : new Date(864000000000000);

		},
		applyFiltersAndSorters: function (sControlId, sAggregationName, chartBindingInfo) {
			if (chartBindingInfo) {
				var oBindingInfo = chartBindingInfo;
			} else {
				var oBindingInfo = this.getView().byId(sControlId).getBindingInfo(sAggregationName);
			}
			var oBindingOptions = this.updateBindingOptions(sControlId);
			this.getView().byId(sControlId).bindAggregation(sAggregationName, {
				model: oBindingInfo.model,
				path: oBindingInfo.path,
				parameters: oBindingInfo.parameters,
				template: oBindingInfo.template,
				templateShareable: true,
				sorter: oBindingOptions.sorters,
				filters: oBindingOptions.filters
			});

		},
		updateBindingOptions: function (sCollectionId, oBindingData, sSourceId) {
			this.mBindingOptions = this.mBindingOptions || {};
			this.mBindingOptions[sCollectionId] = this.mBindingOptions[sCollectionId] || {};

			var aSorters = this.mBindingOptions[sCollectionId].sorters;
			var aGroupby = this.mBindingOptions[sCollectionId].groupby;

			// If there is no oBindingData parameter, we just need the processed filters and sorters from this function
			if (oBindingData) {
				if (oBindingData.sorters) {
					aSorters = oBindingData.sorters;
				}
				if (oBindingData.groupby || oBindingData.groupby === null) {
					aGroupby = oBindingData.groupby;
				}
				// 1) Update the filters map for the given collection and source
				this.mBindingOptions[sCollectionId].sorters = aSorters;
				this.mBindingOptions[sCollectionId].groupby = aGroupby;
				this.mBindingOptions[sCollectionId].filters = this.mBindingOptions[sCollectionId].filters || {};
				this.mBindingOptions[sCollectionId].filters[sSourceId] = oBindingData.filters || [];
			}

			// 2) Reapply all the filters and sorters
			var aFilters = [];
			for (var key in this.mBindingOptions[sCollectionId].filters) {
				aFilters = aFilters.concat(this.mBindingOptions[sCollectionId].filters[key]);
			}

			// Add the groupby first in the sorters array
			if (aGroupby) {
				aSorters = aSorters ? aGroupby.concat(aSorters) : aGroupby;
			}

			var aFinalFilters = aFilters.length > 0 ? [new sap.ui.model.Filter(aFilters, true)] : undefined;
			return {
				filters: aFinalFilters,
				sorters: aSorters
			};

		},
		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("Page1").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

			var oView = this.getView(),
				oData = {},
				self = this;
			var oModel = new sap.ui.model.json.JSONModel();
			oView.setModel(oModel, "staticDataModel");
			self.oBindingParameters = {};

			oData["sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971"] = {};

			oData["sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971"]["startDate"] = new Date("2020-05-05T07:00:00.000Z");

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-1-appointments-sap_ui_unified_CalendarAppointment-1"
			] = {};

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-1-appointments-sap_ui_unified_CalendarAppointment-1"
			]["startDate"] = new Date("2018-07-01T08:30:00.000Z");

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-1-appointments-sap_ui_unified_CalendarAppointment-1"
			]["endDate"] = new Date("2018-07-01T10:30:00.000Z");

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-1-appointments-sap_ui_unified_CalendarAppointment-2"
			] = {};

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-1-appointments-sap_ui_unified_CalendarAppointment-2"
			]["startDate"] = new Date("2018-07-01T07:00:00.000Z");

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-1-appointments-sap_ui_unified_CalendarAppointment-2"
			]["endDate"] = new Date("2018-07-01T09:30:00.000Z");

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-1-appointments-sap_ui_unified_CalendarAppointment-3"
			] = {};

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-1-appointments-sap_ui_unified_CalendarAppointment-3"
			]["startDate"] = new Date("2018-07-01T11:00:00.000Z");

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-1-appointments-sap_ui_unified_CalendarAppointment-3"
			]["endDate"] = new Date("2018-07-01T13:30:00.000Z");

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-2-appointments-sap_ui_unified_CalendarAppointment-1"
			] = {};

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-2-appointments-sap_ui_unified_CalendarAppointment-1"
			]["startDate"] = new Date("2018-07-01T07:00:00.000Z");

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-2-appointments-sap_ui_unified_CalendarAppointment-1"
			]["endDate"] = new Date("2018-07-01T09:30:00.000Z");

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-2-appointments-sap_ui_unified_CalendarAppointment-2"
			] = {};

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-2-appointments-sap_ui_unified_CalendarAppointment-2"
			]["startDate"] = new Date("2018-07-01T08:00:00.000Z");

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-2-appointments-sap_ui_unified_CalendarAppointment-2"
			]["endDate"] = new Date("2018-07-01T10:00:00.000Z");

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-2-appointments-sap_ui_unified_CalendarAppointment-3"
			] = {};

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-2-appointments-sap_ui_unified_CalendarAppointment-3"
			]["startDate"] = new Date("2018-07-01T12:00:00.000Z");

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-2-appointments-sap_ui_unified_CalendarAppointment-3"
			]["endDate"] = new Date("2018-07-01T14:30:00.000Z");

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-3-appointments-sap_ui_unified_CalendarAppointment-1"
			] = {};

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-3-appointments-sap_ui_unified_CalendarAppointment-1"
			]["startDate"] = new Date("2018-07-01T08:30:00.000Z");

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-3-appointments-sap_ui_unified_CalendarAppointment-1"
			]["endDate"] = new Date("2018-07-01T11:00:00.000Z");

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-3-appointments-sap_ui_unified_CalendarAppointment-2"
			] = {};

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-3-appointments-sap_ui_unified_CalendarAppointment-2"
			]["startDate"] = new Date("2018-07-01T12:00:00.000Z");

			oData[
				"sap_tnt_ToolPage_0-mainContents-sap_m_PlanningCalendar-1588615405971-rows-sap_m_PlanningCalendarRow-3-appointments-sap_ui_unified_CalendarAppointment-2"
			]["endDate"] = new Date("2018-07-01T14:00:00.000Z");

			oView.getModel("staticDataModel").setData(oData, true);

			function dateDimensionFormatter(oDimensionValue, sTextValue) {
				var oValueToFormat = sTextValue !== undefined ? sTextValue : oDimensionValue;
				if (oValueToFormat instanceof Date) {
					var oFormat = sap.ui.core.format.DateFormat.getDateInstance({
						style: "short"
					});
					return oFormat.format(oValueToFormat);
				}
				return oValueToFormat;
			}

		},
		onAfterRendering: function () {

			var oChart,
				self = this,
				oBindingParameters = this.oBindingParameters,
				oView = this.getView();

		}
	});
}, /* bExport= */ true);