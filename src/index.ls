module.exports = {
	blocks:
		copyright:
			process: (blk) ->
				copyrightLine = 'Copyright (C) ' + new Date!getFullYear!
				if blk.kwargs.year and blk.kwargs.by
					if blk.kwargs.license
						license = require \./LICENSE
						return copyrightLine = 'Copyright (C) ' + blk.kwargs.year + ' ' + blk.kwargs.by + ' All Rights Reserved.\n\n' + license
					else
						return copyrightLine = 'Copyright (C) ' + blk.kwargs.year + ' ' + blk.kwargs.by + ' All Rights Reserved.'
				else
					return copyrightLine
}