import { useEffect } from "react";

export default function SoundBoard(props) {
    useEffect(() => {
        document.addEventListener('keydown', logKey);

        function logKey(e) {
            console.log(`${e.code}`);
        }
        function getKey(e) {
            var location = e.location;
            var selector;
            if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
                selector = ['[key-symbol="' + e.keyCode + '-R"]']
            } else {
                var code = e.keyCode || e.which;
                selector = [
                    '[key-symbol="' + code + '"]',
                    '[key-letter*="' + encodeURIComponent(String.fromCharCode(code)) + '"]'
                ].join(',');
            }
            return document.querySelector(selector);
        }

        function pressKey(char) {
            var key = document.querySelector('[key-letter*="' + char.toUpperCase() + '"]');
            if (!key) {
                return console.warn('No key for', char);
            }
            key.setAttribute('key-pressed', 'on');
            setTimeout(function () {
                key.removeAttribute('key-pressed');
            }, 200);
        }
        document.body.addEventListener('keydown', function (e) {
            var key = getKey(e);
            if (!key) {
                return console.warn('No key for', e.keyCode);
            }

            key.setAttribute('key-pressed', 'on');
        });

        document.body.addEventListener('keyup', function (e) {
            var key = getKey(e);
            key && key.removeAttribute('key-pressed');
        });

        function size() {
            var size = keyboard.parentNode.clientWidth / 90;
            keyboard.style.fontSize = size + 'px';
            console.log(size);
        }

        var keyboard = document.querySelector('.keyboard');
        window.addEventListener('resize', function (e) {
            size();
        });
        size();
    });

    return (
        <div className="soundboard-main">
            <div className="button-row black">
                <div className="basic-button-class" key-letter="W">W</div>
                <div className="basic-button-class" key-letter="E">E</div>
                <div className="basic-button-class blank" key-letter=" "> </div>
                <div className="basic-button-class" key-letter="T">T</div>
                <div className="basic-button-class" key-letter="Y">Y</div>
                <div className="basic-button-class" key-letter="U">U</div>
                <div className="basic-button-class blank" key-letter=" "> </div>
                <div className="basic-button-class" key-letter="O">O</div>
                <div className="basic-button-class" key-letter="P">P</div>
            </div>
            <div className="button-row white">
                <div className="basic-button-class container" key-letter="A"><div><div>A</div><div>C<sup></sup></div></div></div>
                <div className="basic-button-class" key-letter="S"><div><div>S</div><div>D<sup></sup></div></div></div>
                <div className="basic-button-class" key-letter="D">D</div>
                <div className="basic-button-class" key-letter="F">F</div>
                <div className="basic-button-class" key-letter="G">G</div>
                <div className="basic-button-class" key-letter="H">H</div>
                <div className="basic-button-class" key-letter="J">J</div>
                <div className="basic-button-class" key-letter="K">K</div>
                <div className="basic-button-class" key-letter="L">L</div>
                <div className="basic-button-class" key-symbol="186">;</div>
            </div>
        </div>
    )
}