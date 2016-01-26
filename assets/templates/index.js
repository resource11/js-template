'use strict';

var req = require.context('./', true, /\.hbs$/);
req.keys().forEach(req);

// $(document).on('ready', content);
