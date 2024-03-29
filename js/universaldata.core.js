/**
 * This content file (app.js)
 * @version: v0.1
 * @author: Eduardo Sant'Anna  Martins
 *
 * Created by Eduardo Sant'Anna Martins on 2016-11-14.
 * Please report any bug at eduardo@universaldata.com.br
 *
 * Copyright (c) 2016 Eduardo Sant'Anna Martins https://universaldata.com.br
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

'use strict';

var UniversalData = {
    // Version
    version: "0.1",
    _plugins: [],

    addPlugin: function (plugin, name) {
        var className = (name || plugin.name);
        this[className] = plugin;
        this._plugins.push(plugin);
    },

    init: function () {
        var plugins = this._plugins;
        document.addEventListener('DOMContentLoaded', function () {
            [].forEach.call(plugins, function (plugin) {
                plugin.init();
            });
        }, false);
    }
};


(function (global) {
    global.UniversalData = UniversalData;
})(this);