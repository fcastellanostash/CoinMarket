/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.7
Version: 2.1.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v2.1/admin/angularjs/
*/

/* Global Setting
------------------------------------------------ */

app.factory('setting', ['$rootScope', function ($rootScope) {
    var setting = {
        layout: {
            pageSidebarMinified: false,
            pageFixedFooter: false,
            pageRightSidebar: false,
            pageTwoSidebar: false,
            pageTopMenu: false,
            pageBoxedLayout: false,
            pageWithoutSidebar: false,
            pageContentFullHeight: false,
            pageContentFullWidth: false,
            pageContentInverseMode: true,
            pageSidebarTransparent: false,
            pageWithFooter: false,
            pageLightSidebar: false,
            pageMegaMenu: false,
            pageBgWhite: false,
            pageWithoutHeader: false,
            paceTop: false
        }
    };
    
    return setting;
}]);