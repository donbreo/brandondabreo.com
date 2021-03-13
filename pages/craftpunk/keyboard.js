import { useEffect,useState } from "react"

export default function KeyBoard(props){
    const [count, setCount] = useState(0);
    useEffect(() => {
                function getKey (e) {
                var location = e.location;
                var selector;
                if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
                    selector = ['[data-key="' + e.keyCode + '-R"]']
                } else {
                    var code = e.keyCode || e.which;
                    selector = [
                        '[data-key="' + code + '"]',
                        '[data-char*="' + encodeURIComponent(String.fromCharCode(code)) + '"]'
                    ].join(',');
                }
                return document.querySelector(selector);
            }
    
            function pressKey (char) {
                var key = document.querySelector('[data-char*="' + char.toUpperCase() + '"]');
                if (!key) {
                    return console.warn('No key for', char);
                }
                key.setAttribute('data-pressed', 'on');
                setTimeout(function () {
                    key.removeAttribute('data-pressed');
                }, 200);
            }    
            document.body.addEventListener('keydown', function (e) {
                var key = getKey(e);
                if (!key) {
                    return console.warn('No key for', e.keyCode);
                }
    
                key.setAttribute('data-pressed', 'on');
            });
    
            document.body.addEventListener('keyup', function (e) {
                var key = getKey(e);
                key && key.removeAttribute('data-pressed');
            });
    
            function size () {
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
    return(<>
<div className="keyboard">
  <div className="keyboard__row keyboard__row--h1">
    <div data-key="27" className="key--word">
      <span>esc</span>
    </div>
    <div data-key="112" className="key--fn">
      <span>F1</span>
    </div>
    <div data-key="113" className="key--fn">
      <span>F2</span>
    </div>
    <div data-key="114" className="key--fn">
      <span>F3</span>
    </div>
    <div data-key="115" className="key--fn">
      <span>F4</span>
    </div>
    <div data-key="116" className="key--fn">
      <span>F5</span>
    </div>
    <div data-key="117" className="key--fn">
      <span>F6</span>
    </div>
    <div data-key="118" className="key--fn">
      <span>F7</span>
    </div>
    <div data-key="119" className="key--fn">
      <span>F8</span>
    </div>
    <div data-key="120" className="key--fn">
      <span>F9</span>
    </div>
    <div data-key="121" className="key--fn">
      <span>F10</span>
    </div>
    <div data-key="122" className="key--fn">
      <span>F11</span>
    </div>
    <div data-key="123" className="key--fn">
      <span>F12</span>
    </div>
    <div data-key="n/a" className="key--word">
      <span>pwr</span>
    </div>
  </div>
  <div className="keyboard__row">
    <div className="key--double" data-key="192">
      <div>~</div>
      <div>`</div>
    </div>
    <div className="key--double" data-key="49">
      <div>!</div>
      <div>1</div>
    </div>
    <div className="key--double" data-key="50">
      <div>@</div>
      <div>2</div>
    </div>
    <div className="key--double" data-key="51">
      <div>#</div>
      <div>3</div>
    </div>
    <div className="key--double" data-key="52">
      <div>$</div>
      <div>4</div>
    </div>
    <div className="key--double" data-key="53">
      <div>%</div>
      <div>5</div>
    </div>
    <div className="key--double" data-key="54">
      <div>^</div>
      <div>6</div>
    </div>
    <div className="key--double" data-key="55">
      <div>&</div>
      <div>7</div>
    </div>
    <div className="key--double" data-key="56">
      <div>*</div>
      <div>8</div>
    </div>
    <div className="key--double" data-key="57">
      <div>(</div>
      <div>9</div>
    </div>
    <div className="key--double" data-key="48">
      <div>)</div>
      <div>0</div>
    </div>
    <div className="key--double" data-key="189">
      <div>_</div>
      <div>-</div>
    </div>
    <div className="key--double" data-key="187">
      <div>+</div>
      <div>=</div>
    </div>
    <div className="key--bottom-right key--word key--w4" data-key="8">
      <span>delete</span>
    </div>
  </div>
  <div className="keyboard__row">
    <div className="key--bottom-left key--word key--w4" data-key="9">
      <span>tab</span>
    </div>
    <div className="key--letter" data-char="Q">Q</div>
    <div className="key--letter" data-char="W">W</div>
    <div className="key--letter" data-char="E">E</div>
    <div className="key--letter" data-char="R">R</div>
    <div className="key--letter" data-char="T">T</div>
    <div className="key--letter" data-char="Y">Y</div>
    <div className="key--letter" data-char="U">U</div>
    <div className="key--letter" data-char="I">I</div>
    <div className="key--letter" data-char="O">O</div>
    <div className="key--letter" data-char="P">P</div>
    <div className="key--double" data-key="219" data-char="{[">
      <div>{`{`}</div>
      <div>{`[`}[</div>
    </div>
    <div className="key--double" data-key="221" data-char="}]">
      <div>{`}`}</div>
      <div>{`]`}</div>
    </div>
    <div className="key--double" data-key="220" data-char="|\">
      <div>{`|`}</div>
      <div>{`\\`}</div>
    </div>
  </div>
  <div className="keyboard__row">
    <div className="key--bottom-left key--word key--w5" data-key="20">
      <span>caps lock</span>
    </div>
    <div className="key--letter" data-char="A">A</div>
    <div className="key--letter" data-char="S">S</div>
    <div className="key--letter" data-char="D">D</div>
    <div className="key--letter" data-char="F">F</div>
    <div className="key--letter" data-char="G">G</div>
    <div className="key--letter" data-char="H">H</div>
    <div className="key--letter" data-char="J">J</div>
    <div className="key--letter" data-char="K">K</div>
    <div className="key--letter" data-char="L">L</div>
    <div className="key--double" data-key="186">
      <div>:</div>
      <div>;</div>
    </div>
    <div className="key--double" data-key="222">
      <div>"</div>
      <div>'</div>
    </div>
    <div className="key--bottom-right key--word key--w5" data-key="13">
      <span>return</span>
    </div>
  </div>
  <div className="keyboard__row">
    <div className="key--bottom-left key--word key--w6" data-key="16">
      <span>shift</span>
    </div>
    <div className="key--letter" data-char="Z">Z</div>
    <div className="key--letter" data-char="X">X</div>
    <div className="key--letter" data-char="C">C</div>
    <div className="key--letter" data-char="V">V</div>
    <div className="key--letter" data-char="B">B</div>
    <div className="key--letter" data-char="N">N</div>
    <div className="key--letter" data-char="M">M</div>
    <div className="key--double" data-key="188">
      <div>&lt;</div>
      <div>,</div>
    </div>
    <div className="key--double" data-key="190">
      <div>&gt;</div>
      <div>.</div>
    </div>
    <div className="key--double" data-key="191">
      <div>?</div>
      <div>/</div>
    </div>
    <div className="key--bottom-right key--word key--w6" data-key="16-R">
      <span>shift</span>
    </div>
  </div>
  <div className="keyboard__row keyboard__row--h3">
    <div className="key--bottom-left key--word">
      <span>fn</span>
    </div>
    <div className="key--bottom-left key--word key--w1" data-key="17">
      <span>control</span>
    </div>
    <div className="key--bottom-left key--word key--w1" data-key="18">
      <span>option</span>
    </div>
    <div className="key--bottom-right key--word key--w3" data-key="91">
      <span>command</span>
    </div>
    <div className="key--double key--right key--space" data-key="32" data-char=" ">
      &nbsp;
    </div>
    <div className="key--bottom-left key--word key--w3" data-key="93-R">
      <span>command</span>
    </div>
    <div className="key--bottom-left key--word key--w1" data-key="18-R">
      <span>option</span>
    </div>
    <div data-key="37" className="key--arrow">
      <span>&#9664;</span>
    </div>
    <div className="key--double key--arrow--tall" data-key="38">
      <div>&#9650;</div>
      <div>&#9660;</div>
    </div>
    <div data-key="39" className="key--arrow">
      <span>&#9654;</span>
    </div>
  </div>
</div>

{/* 
Copyright (c) 2021 by Gregory Schier (https://codepen.io/gschier/pen/VKgyaY)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


*/}
</>)
}

