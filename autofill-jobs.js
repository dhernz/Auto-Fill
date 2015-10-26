var x =  require('casper').selectXPath;


// casper.start('https://angel.co/jobs',function(){
//   console.log('searching')
//   this.fillXPath('//*[@id="startups_content"]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]',{
//     '//*[@id="startups_content"]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]': 'Remote OK',
//     '//*[@id="startups_content"]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]': 'Full-Stack Developer'
//   },true)

// });

// casper.start('https://angel.co/jobs');

// casper.evaluate(function(username, password) {
//     document.querySelector('#username').value = username;
//     document.querySelector('#password').value = password;
//     document.querySelector('#submit').click();
// }, 'sheldon.cooper', 'b4z1ng4');

// casper.wait(2000,function(){
//   casper.capture('checking.png')
// });

// casper.run();