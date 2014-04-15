'use strict';

angular.module('scouterApp')
    .directive('inviroGrid', function ($compile, $timeout, toolsService) {
        return {
            template: '<table class="table m-b-none"></table>',
            restrict: 'A',
            replace : true,
            scope   : {
                columns: "=",
                data   : "=",
                title  : '@'
            },
            link    : function (scope, element, attrs, controller) {

                var rowCompiler = function (nRow, aData, iDataIndex) {
                    var element, linker;
                    linker = $compile(nRow);
                    element = linker(scope.$parent);
                    return nRow = element;
                };

                var options = {
                    bProcessing    : true,
                    sDom           : "<'row'<'col-sm-6'l><'col-sm-6'Tf>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>",
                    sPaginationType: 'full_numbers',
                    aoColumns      : [],
                    aoColumnDefs   : [],
                    fnCreatedRow   : rowCompiler,
                    aaSorting      : []
                };

                var index = 0;
                var rowProcessors = [];
                var exportColumns = [];

                _.each(scope.columns, function (column) {

                    var aoColumn = {
                        mData          : column.field,
                        sTitle         : column.title || '',
                        bSortable      : column.sortable || false,
                        bVisible       : column.visible !== false,
                        sDefaultContent: column.default || ''
                    };

                    if (column.width) {
                        aoColumn.sWidth = column.width;
                    }

                    if (column.export) {
                        exportColumns.push(index);
                    }

                    if (column.sort_order) {
                        aoColumn.asSorting = [column.sort_order];
                        options.aaSorting.push([index, column.sort_order]);
                    }

                    if (column.row_processing) {
                        if (column.row_processing.type === 'class') {

                            var data_key = column.row_processing.data_key;
                            var action = column.row_processing.action;

                            _.each(column.row_processing.conditions, function (condition) {
                                rowProcessors.push({
                                    type    : 'class',
                                    action  : action,
                                    column  : index,
                                    data_key: data_key,
                                    value   : condition.value,
                                    result  : condition.result
                                })
                            });
                        }
                    }

                    if (column.options) {

                        var item = column.options;

                        var columnDef = {
                            aTargets: [ index ],
                            mRender : function (data, type, obj) {

                                var args = [];

                                _.each(item.values, function (itemValue) {

                                    var replacements = _.filter(item.replace, function (replacement) {
                                        return replacement.data_key === itemValue;
                                    });

                                    if (replacements && replacements.length > 0) {

                                        _.each(replacements, function (replacement) {
                                            if (replacement.data_key === itemValue) {
                                                if (obj[itemValue] === replacement.value) {
                                                    args.push(replacement.result);
                                                }
                                            }
                                        });

                                    }
                                    else {
                                        args.push(obj[itemValue]);
                                    }
                                });

                                return toolsService.formatString(item.render, args);
                            }
                        };

                        options.aoColumnDefs.push(columnDef);

                    }

                    options.aoColumns.push(aoColumn);
                    index++;
                });

                // if row processing needs to happen
                options.fnRowCallback = function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {

                    // nRow has cells (count)
                    // colour the alternate rows  if no specific styling applied

                    _.each(rowProcessors, function (item) {
                        if (aData[item.data_key] === item.value) {
                            if (item.action === 'all_columns') {
                                $('td', nRow).addClass(item.result);
                            } else {
                                $('td:eq(' + item.column + ')', nRow).addClass(item.result);
                            }
                        }
                    });

                    if (rowProcessors.length === 0) {
                        if (iDisplayIndex % 2 === 1) {
                            $('td', nRow).css('background-color', '#fcfdfe');
                        }
                    }

                };

                // export buttons

                options.oTableTools = {
                    aButtons: [
                        {
                            sExtends: 'copy',
                            mColumns: exportColumns
                        },
                        {
                            sExtends     : 'csv',
                            sButtonText  : 'Download',
                            mColumns     : exportColumns,
                            sTitle       : scope.title || 'data',
                            oSelectorOpts: {
                                filter: 'applied'
                            }
                        },
                        {
                            sExtends     : 'print',
                            mColumns     : exportColumns,
                            sTitle       : scope.title || 'data',
                            oSelectorOpts: {
                                filter: 'applied'
                            }
                        }
                    ]
                };

                var dataTable = element.dataTable(options);

                scope.$watch('data', function (newValue, oldValue) {

                    if (newValue && newValue.length > 0) {


                        dataTable.fnClearTable();
                        dataTable.fnAddData(newValue);
                        dataTable.$('a').tooltip()

                        // this is important to enable the buttons when they start off hidden
                        var resetTableToolButtons = function () {

                            var ttInstances = $.fn.DataTable.TableTools.fnGetMasters();

                            for (var i in ttInstances) {
                                if (ttInstances[i].fnResizeRequired()) {
                                    ttInstances[i].fnResizeButtons();
                                }
                            }
                        };

                        // set timeout so that the tab has time to load
                        $timeout(resetTableToolButtons, 1000);

                    } else {
                        dataTable.fnClearTable();
                    }

                });

                scope.$watch('refresh', function (newVal, oldVal) {

                });


            }

    };

    });
