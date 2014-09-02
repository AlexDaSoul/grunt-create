# grunt-create

> Create files and folders with name from flag

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-create --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-create');
```

## The "create" task

### Overview
In your project's Gruntfile, add a section named `create` to the data object passed into `grunt.initConfig()`.

```js
var spec = 'describe("Simple object", function() {\n    it("should say hi", function() {\n\r    });\n});'
var script = '(function() {\n\r}()};'
	
create: {
	options: {
		files: [
			{
				'type': 'js',
				'content': script
			},
			{
				'type': 'spec.js',
				'content': spec
			}
		]
	},
	puth: {
		src: ['js/', 'spec/']
	}
},
```

```shell
grunt create --new=newproject
```