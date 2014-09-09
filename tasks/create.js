module.exports = function (grunt) {

	var util = grunt.util || grunt.utils,
		_ = util._;

	grunt.registerMultiTask('create-cli', function(prop) {

		var taskDone = this.async(),
			name = grunt.option('new'),
			targetFiles = (_.isUndefined(this.data.src)) ? this.data : this.data.src,
			options = this.options({
				files: []
			});

		
		for (i = 0; i < targetFiles.length; i++)
		{
			var filePath = targetFiles[i],
				optdir = grunt.template.process(filePath);
				
			grunt.log.write('\nCreated ' + filePath + name + '/\n-------------\n\n');
			

			if (!grunt.file.exists(filePath))
			{	
				grunt.log.error('Folder ' + filePath + ' not found!!!');
				
				return;
			}
			
			if (grunt.file.exists(optdir + '/' + name))
			{	
				grunt.log.error('Project ' + name + ' already exist!');
				
				return;
			}			
					
			grunt.file.mkdir(optdir + '/' + name, '0777');
					
			grunt.log.ok(filePath + name + ' created successfully');
			
 			for (f = 0; f < options.files.length; f++)
			{
				var fileType = options.files[f].type,
					fileContent = options.files[f].content;

				fileType = grunt.template.process(fileType);			
				
				if (f === i)
				{
					grunt.file.write(filePath + '/' + name + '/' + name + "." + fileType, fileContent, '0777');
					grunt.log.ok(filePath + name + '.' + fileType + ' created successfully');
				}

			}; 
			taskDone();
		};
	});
};