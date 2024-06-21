const cccp=require('child_process')
// cccp.execSync('start chrome https://www.scaler.com/topics/course/nodejs/video/973/')

console.log('output: '+cccp.execSync('node test.js'));

