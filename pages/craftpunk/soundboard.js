import { useEffect } from "react";

export default function SoundBoard(props) {
    useEffect(() => {
        /* document.addEventListener('keydown', logKey);

        function logKey(e) {
            console.log(`${e.code}`);
        } */

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

        
        document.body.addEventListener('keydown', function (e) {
            var key = getKey(e);
            if (!key) {
                return console.warn('No key for', e.keyCode);
            }
            if((key.getAttribute('key-pressed'))!="on"){
                console.log("key pressed",key.getAttribute('key-letter'))
                triggerMouseEvent (key, "mousedown");
                playtone(261.6, 'sine')
            }
            key.setAttribute('key-pressed', 'on');
        });

        document.body.addEventListener('keyup', function (e) {
            var key = getKey(e);
            if((key.getAttribute('key-pressed'))=="on"){
                console.log("key released",key.getAttribute('key-letter'))
                key.removeAttribute('key-pressed');
                triggerMouseEvent (key, "mouseup");
            }
        });
    });
    
    if (typeof window !== "undefined") {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        var context = new AudioContext()
      }
    const playtone = async (frequency, type)=> {
        var o = null
        var g = null
        o = context.createOscillator()
        g = context.createGain()
        o.type = type
        o.connect(g)
        o.frequency.value = frequency
        g.connect(context.destination)
        o.start(0)
        g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
    }
    function triggerMouseEvent (node, eventType) {
        var clickEvent = document.createEvent ('MouseEvents');
        clickEvent.initEvent (eventType, true, true);
        node.dispatchEvent (clickEvent);
    }
   /*  function pressKey(char) {
        var key = document.querySelector('[key-letter*="' + char.toUpperCase() + '"]');
        if (!key) {
            return console.warn('No key for', char);
        }
        key.setAttribute('key-pressed', 'on');
        setTimeout(function () {
            key.removeAttribute('key-pressed');
        }, 200);
    } */
/* ♯ ♭ */
    return (
        <div className="soundboard-main">
            <div className="button-row black">
                <div className="basic-button-class" onClick={()=>{playtone(277.2, 'sine')}} key-letter="W"><div><div>W</div><div>C<sup>♯</sup></div></div></div>
                <div className="basic-button-class" onClick={()=>{playtone(261.6, 'sine')}} key-letter="E"><div><div>E</div><div>E<sup>♭</sup></div></div></div>
                <div className="basic-button-class blank" key-letter=" "> </div>
                <div className="basic-button-class" onClick={()=>{playtone(261.6, 'sine')}} key-letter="T"><div><div>T</div><div>F<sup>♯</sup></div></div></div>
                <div className="basic-button-class" onClick={()=>{playtone(261.6, 'sine')}} key-letter="Y"><div><div>Y</div><div>G<sup>♯</sup></div></div></div>
                <div className="basic-button-class" onClick={()=>{playtone(261.6, 'sine')}} key-letter="U"><div><div>U</div><div>B<sup>♭</sup></div></div></div>
                <div className="basic-button-class blank" key-letter=" "> </div>
                <div className="basic-button-class" onClick={()=>{playtone(261.6, 'sine')}} key-letter="O"><div><div>O</div><div>C<sup>♯</sup></div></div></div>
                <div className="basic-button-class" onClick={()=>{playtone(261.6, 'sine')}} key-letter="P"><div><div>P</div><div>E<sup>♭</sup></div></div></div>
            </div>
            <div className="button-row white">
                <div className="basic-button-class" onMouseDown={()=>{/* playtone(261.6, 'sine') */}} key-letter="A"><div><div>A</div><div>C</div></div></div>
                <div className="basic-button-class" onMouseDown={()=>{playtone(261.6, 'sine')}} key-letter="S"><div><div>S</div><div>D</div></div></div>
                <div className="basic-button-class" onClick={()=>{playtone(261.6, 'sine')}} key-letter="D"><div><div>D</div><div>E</div></div></div>
                <div className="basic-button-class" onClick={()=>{playtone(261.6, 'sine')}} key-letter="F"><div><div>F</div><div>F</div></div></div>
                <div className="basic-button-class" onClick={()=>{playtone(261.6, 'sine')}} key-letter="G"><div><div>G</div><div>G</div></div></div>
                <div className="basic-button-class" onClick={()=>{playtone(261.6, 'sine')}} key-letter="H"><div><div>H</div><div>A</div></div></div>
                <div className="basic-button-class" onClick={()=>{playtone(261.6, 'sine')}} key-letter="J"><div><div>J</div><div>B</div></div></div>
                <div className="basic-button-class" onClick={()=>{playtone(261.6, 'sine')}} key-letter="K"><div><div>K</div><div>C</div></div></div>
                <div className="basic-button-class" onClick={()=>{playtone(261.6, 'sine')}} key-letter="L"><div><div>L</div><div>D</div></div></div>
                <div className="basic-button-class" onClick={()=>{playtone(261.6, 'sine')}} key-symbol="186"><div><div>;</div><div>E</div></div></div>
            </div>
        </div>
    )
}