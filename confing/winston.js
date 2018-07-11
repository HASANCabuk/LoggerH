const winston = require('winston');
const  options={
    file:{
        level:'info',
        filename:'logs.log',
        handleExceptions:true,
        json:true,
        maxsize:5242880,//5mb
        maxFiles:5,
        colorize:true,
    },
    console:{
        level:'debug',
        handleExceptions:true,
        json:true,
        colorize:false,
    }
};
const logger=winston.createLogger({
    transports:[
        new winston.transports.File(options.file),//Dosyaya yazma
        
       //  new winston.transports.Console(options.console)//console yazırma
    ],
    exitOnError:true,
});
 logger.stream={
    write:(mess,enc)=>{
  logger.info(mess);
    },
};
module.exports=logger;

