var fs = require('fs');

var fileRename = ['hosts','hosts.bak'];

var duration = process.argv[2] *60 *1000;


fs.stat("C:\\Windows\\System32\\drivers\\etc\\" + fileRename[1], function(err,stat){
    if(err == null) {
        nameBack();
        console.log("Time to get to work!");
        setTimeout(rename, duration);
    } else if(err.code == 'ENOENT') {
        
        console.log("Time to get to work!");
        setTimeout(rename, duration);
        
    } else {
        console.log('Some other error: ', err.code);
    }
})








function rename() {

    fs.rename("C:\\Windows\\System32\\drivers\\etc\\" + fileRename[0],
              "C:\\Windows\\System32\\drivers\\etc\\" + fileRename[1],
              function (err) {
                if (err) throw err;
              }
    );
}


function nameBack() {

    fs.rename("C:\\Windows\\System32\\drivers\\etc\\" + fileRename[1],
              "C:\\Windows\\System32\\drivers\\etc\\" + fileRename[0],
              function (err) {
                if (err) throw err;
              }
    );
    
    
}