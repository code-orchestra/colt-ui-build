module.exports = function(grunt) {

  grunt.initConfig({
    nodewebkit: {
      options: {
        app_name: 'colt',
        app_version: '2.0.0',
        build_dir: './build', // Where the build version of my node-webkit app is saved
        mac: true,
        mac_icns: './colticon.icns',
        win: true,
        linux32: false,
        linux64: false,
        keep_nw: true,
        zip: false
      },
      src: ['../colt-ui/**/*',
          '!../colt-ui/.git/**',
          '!../colt-ui/*.colt',
          '!../colt-ui/projects/**',
          '!../colt-ui/*.dll', '!../colt-ui/*.exe', '!../colt-ui/*.pak','!../colt-ui/*.app',
          '!../colt-ui/*.iml'] // Your node-webkit app
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['nodewebkit']);
};