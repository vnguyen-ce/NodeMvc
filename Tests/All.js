var reporter = require('nodeunit').reporters.minimal;


reporter.run(['NodeMvc/Tests/System']);
reporter.run(['NodeMvc/Tests/System/Web']);
reporter.run(['NodeMvc/Tests/System/Web/Routing']);
reporter.run(['NodeMvc/Tests/System/Web/Mvc']);