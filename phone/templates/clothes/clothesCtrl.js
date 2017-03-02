/**
 * Created by hxsd on 2016/12/22.
 */
// 注册一个控制器
angular.module("myapp")
    .controller("clothesCtrl", function ($scope) {
        // 准备商品数据
        $scope.products = [
            {title: "火星商品01", desc: "2016冬季最新流行款", imgsrc: "images/TB1_100x100.jpg"},
            {title: "火星商品02", desc: "2016冬季最新流行款", imgsrc: "images/TB2_100x100.jpg"},
            {title: "火星商品03", desc: "2016冬季最新流行款", imgsrc: "images/TB3_100x100.jpg"},
            {title: "火星商品04", desc: "2016冬季最新流行款", imgsrc: "images/TB4_100x100.jpg"}
        ];
    });