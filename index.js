/**
 * Created by 49001 on 2016/6/24.
 */
(function () {

    function init() {

        $.get("preload.ini").done(function (data) {
            // console.log(data);

            var p=/\[(.*)\]\.*/g;

            while (true) {
                var result = p.exec(data);
                if (result) {
                    console.log(result);
                } else {
                    break;
                }
            }

        });
    }

    init();
})();