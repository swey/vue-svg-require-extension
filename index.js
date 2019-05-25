const fs = require('fs');

require.extensions['.svg'] = (module, filename) => {
	const content = fs.readFileSync(filename, 'utf8');

	// Get svg string without <?xml?> declaration
	const svgString = content.replace(/<\?(.+?)\?>\n*/g, '');

	// Create the export with the structure of a Vue component
	const vueComponentExport = `module.exports = {
			template: ${JSON.stringify(svgString)},
			__file: '${filename}'
		}`;

	module._compile(vueComponentExport, filename);
};