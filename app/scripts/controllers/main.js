'use strict';

/**
 * @ngdoc function
 * @name codemotionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codemotionApp
 */
angular.module('codemotionApp')
   .controller('MainCtrl', function ($scope) {//, $sce) {
         // make it a loop based on num. of segments
         $scope.segments = [
            {
               url: 'videos/5aP9Bl9hcqI_2_720p.mp4',
               code: '# main code of first segment'
            },
            {
               url: 'videos/5aP9Bl9hcqI_2_720p.mp4',
               code: '# main code of next segment'
            },
            {
               url: 'videos/5aP9Bl9hcqI_2_720p.mp4',
               code: '# main code of third segment'
            },
            {
               url: 'videos/5aP9Bl9hcqI_2_720p.mp4',
               code: '# main code of last segment'
            }
         ];

         // var i;
         // for (i = 0; i < $scope.segments.length; i++) {
         //    angular.element('aceText'+i).val($scope.segments[i].src);
         // }

         $scope.aceLoaded = function(_editor) {
            // options
            _editor.setReadOnly(true); // does not work
         };
      });
