const{log,logE,turnOffNonErrorLogs}=require("../node_modules/simple-log-kit/index");log("This is a normal log message");logE("This is an error log message");function drawChord(){log("log message")}function drawNote(){logE("error log message")}