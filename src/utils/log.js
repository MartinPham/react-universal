const log = (function() {
	if (!console || !console.log) {
		return () => {};
	} else if (process.env.NODE_ENV ==='production') {
		return () => {};
	}
	return Function.prototype.bind.call(console.log, console);
})();


log.group = function(name, callback) {
	if (!console || !console.group) {
		log('[' + name + ']');
		return callback();
	} else if (process.env.NODE_ENV ==='production') {
		return () => {};
	}
	
	console.groupCollapsed(name);

	callback();

	console.groupEnd();
};

log.table = (function() {
	if (!console || !console.table) {
		return Function.prototype.bind.call(log, console);
	} else if (process.env.NODE_ENV ==='production') {
		return () => {};
	}
	return Function.prototype.bind.call(console.table, console);
})();

log.trace = (function() {
	if (!console || !console.trace) {
		return Function.prototype.bind.call(log, console);
	} else if (process.env.NODE_ENV ==='production') {
		return () => {};
	}
	return Function.prototype.bind.call(console.trace, console);
})();


log.info = (function() {
	if (!console || !console.info) {
		return Function.prototype.bind.call(log, console);
	} else if (process.env.NODE_ENV ==='production') {
		return () => {};
	}
	return Function.prototype.bind.call(console.info, console);
})();


log.warn = (function() {
	if (!console || !console.warn) {
		return Function.prototype.bind.call(log, console);
	} else if (process.env.NODE_ENV ==='production') {
		return () => {};
	}
	return Function.prototype.bind.call(console.warn, console);
})();

log.error = (function() {
	if (!console || !console.error) {
		return Function.prototype.bind.call(log, console);
	} else if (process.env.NODE_ENV ==='production') {
		return () => {};
	}
	return Function.prototype.bind.call(console.error, console);
})();



export default log;