// Generated by LiveScript 1.5.0
(function(){
  module.exports = {
    blocks: {
      copyright: {
        process: function(blk){
          var copyrightLine, license;
          copyrightLine = 'Copyright (C) ' + new Date().getFullYear();
          if (blk.kwargs.year && blk.kwargs.by) {
            if (blk.kwargs.license) {
              license = require('./LICENSE');
              return copyrightLine = 'Copyright (C) ' + blk.kwargs.year + ' ' + blk.kwargs.by + ' All Rights Reserved.\n\n' + license;
            } else {
              return copyrightLine = 'Copyright (C) ' + blk.kwargs.year + ' ' + blk.kwargs.by + ' All Rights Reserved.';
            }
          } else {
            return copyrightLine;
          }
        }
      }
    }
  };
}).call(this);
