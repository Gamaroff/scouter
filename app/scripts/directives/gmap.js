'use strict';

angular.module('scouterApp')
    .directive('gmap', function () {
        return {
            restrict: 'EAC',
            replace : true,
            template: '<div></div>',
            scope   : {
                zoom     : '=',
                center   : '=',
                refresh  : '=',
                points   : '=',
                waypoints: '=',
                select   : '&',
                close    : '&'
            },
            link    : function (scope, element, attrs) {

                var routeLine;

                var defaultMap = new google.maps.LatLng(-26.1583395, 28.1278707);
                var markers = [];

                var myOptions = {
                    zoom     : scope.zoom,
                    center   : defaultMap,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                var map = new google.maps.Map(document.getElementById(attrs.id), myOptions);

                scope.$watch('refresh', function (newValue, oldValue) {

                    if (scope.points.length <= 1) {
                        return;
                    }

                    google.maps.event.trigger(map, 'resize');
                    var bounds = new google.maps.LatLngBounds();
                    _.each(scope.points, function (point) {
                        bounds.extend(new google.maps.LatLng(point.lat, point.lng));
                        map.fitBounds(bounds);
                    });
                });

                scope.$watch('center', function (newValue, oldValue) {
                    if (scope.center && scope.center.lat && scope.center.lng) {
                        map.setCenter(new google.maps.LatLng(scope.center.lat, scope.center.lng));
                    }
                });

                scope.$watch('points', function (newValue, oldValue) {
                    if (scope.points) {

                        deleteMarkers();

                        _.each(scope.points, function (point) {
                            addMarker(point.name, point.lat, point.lng, point.data);

                            if (scope.points.length > 1) {
                                var bounds = new google.maps.LatLngBounds();
                                bounds.extend(new google.maps.LatLng(point.lat, point.lng));
                                map.fitBounds(bounds);
                            }
                        });

                    }
                });

                scope.$watch('waypoints', function (newValue, oldValue) {
                    if (newValue != oldValue) {

//
//                        var directionsDisplay = new google.maps.DirectionsRenderer();
//                        directionsDisplay.setDirections(newValue);
//                        directionsDisplay.setMap(map);
//                        map.fitBounds(newValue.routes[0].bounds);
//
//                        if (routeLine) {
//                            routeLine.setMap(null)
//                        }

                        //createPolyline(newValue);

                        // scope.close();

                    }
                });

//                function createPolyline(directionResult) {
//                    routeLine = new google.maps.Polyline({
//                        path         : directionResult.routes[0].overview_path,
//                        strokeColor  : '#FF0000',
//                        strokeOpacity: 0.5,
//                        strokeWeight : 4
//                    });
//
//                    routeLine.setMap(map);
//
//                }

                // Add a marker to the map and push to the array.
                function addMarker(name, lat, lng, data) {
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(lat, lng),
                        map     : map,
                        title   : name
                    });

                    google.maps.event.addListener(marker, 'click', function () {

                        scope.select(data);
                        var func = scope.select();
                        func(data);
                        return;

                        var branchData = function (data) {
                            return '<div class="panel panel-default">' +
                                '<div class="panel-heading">' +
                                '<h3 class="panel-title black">Contact Details</h3>' +
                                '</div>' +
                                '<div class="panel-body">' +
                                '   <address>' +
                                '      <address>' +
                                '         <strong>Tel:</strong> ' + data.telephone1 + '<br/>' +
                                '        <strong>Fax:</strong> ' + data.fax + '<br/>' +
                                '       <strong>Email:</strong> ' + data.email + '<br/>' +
                                '      <strong>Contact:</strong> ' + data.contact_person + '<br/>' +
                                '</address>' +
                                '</address>' +
                                '</div>' +
                                '</div>' +
                                '   <div class="panel panel-default">' +
                                '      <div class="panel-heading">' +
                                '         <h3 class="panel-title black">Physical Address</h3>' +
                                '    </div>' +
                                '   <div class="panel-body">' +
                                '      <address>' +
                                data.physical_address +
                                '    </address>' +
                                '</div>' +
                                '</div>' +
                                '<div class="panel panel-default">' +
                                '<div class="panel-heading">' +
                                '   <h3 class="panel-title black">Postal Address</h3>' +
                                '</div>' +
                                '<div class="panel-body">' +
                                '<address>' +
                                data.postal_address +
                                '</address>' +
                                '</div>' +
                                '</div>';
                        };

                        var str = branchData(data);

                        var infowindow = new google.maps.InfoWindow({
                            content: str
                        });

                        infowindow.open(map, marker);
                    });

                    markers.push(marker);
                }

                // Sets the map on all markers in the array.
                function setAllMap(map) {
                    for (var i = 0; i < markers.length; i++) {
                        markers[i].setMap(map);
                    }
                }

                // Removes the markers from the map, but keeps them in the array.
                function clearMarkers() {
                    setAllMap(null);
                }

                // Shows any markers currently in the array.
                function showMarkers() {
                    setAllMap(map);
                }

                // Deletes all markers in the array by removing references to them.
                function deleteMarkers() {
                    clearMarkers();
                    markers = [];
                }

            }
        };
    });
