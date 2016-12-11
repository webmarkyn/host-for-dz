var myModule = (function () {
    
    //Инициализация модуля
    var init = function () {
        _setUpListners();
    };
    
    //Прослушка событий
    var _setUpListners = function () {
    	_flipElem('authorize', 'flipWrap');
    	_flipElem('backToMain', 'flipWrap');
    }

    // Flip func
    var _flipElem = function(buttonId, containerID) {
    	$('#' + buttonId).on("click", function(e){e.preventDefault();$("#" + containerID).toggleClass("hover");})
    };

    //Публичные методы
    return {
        init: init
    }
})();
myModule.init();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG15TW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBcbiAgICAvL9CY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC80L7QtNGD0LvRj1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc2V0VXBMaXN0bmVycygpO1xuICAgIH07XG4gICAgXG4gICAgLy/Qn9GA0L7RgdC70YPRiNC60LAg0YHQvtCx0YvRgtC40LlcbiAgICB2YXIgX3NldFVwTGlzdG5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgXHRfZmxpcEVsZW0oJ2F1dGhvcml6ZScsICdmbGlwV3JhcCcpO1xuICAgIFx0X2ZsaXBFbGVtKCdiYWNrVG9NYWluJywgJ2ZsaXBXcmFwJyk7XG4gICAgfVxuXG4gICAgLy8gRmxpcCBmdW5jXG4gICAgdmFyIF9mbGlwRWxlbSA9IGZ1bmN0aW9uKGJ1dHRvbklkLCBjb250YWluZXJJRCkge1xuICAgIFx0JCgnIycgKyBidXR0b25JZCkub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7JChcIiNcIiArIGNvbnRhaW5lcklEKS50b2dnbGVDbGFzcyhcImhvdmVyXCIpO30pXG4gICAgfTtcblxuICAgIC8v0J/Rg9Cx0LvQuNGH0L3Ri9C1INC80LXRgtC+0LTRi1xuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXRcbiAgICB9XG59KSgpO1xubXlNb2R1bGUuaW5pdCgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
