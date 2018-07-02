/**
 * Created by thomasmoore on 5/29/17.
 */
var windw = this;

$.fn.followTo = function (pos) {
    var $this = this,
        $window = $(windw);

    $window.scroll(function (e) {
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 0
            });
        }
    });
};

$('.sidebar-bomb').followTo(250);
