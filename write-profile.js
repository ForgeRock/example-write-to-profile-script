/*
  - Data made available by nodes that have already executed are available in the sharedState variable.
  - The script should set outcome to either "true" or "false".
 */

//Pull user out of sharedState
var currentUser = sharedState.get("username");
var attributeToWrite = "mail";
var attributeValueToWrite = requestHeaders.get("user-agent").get(0);

logger.message("Write Profile: " + attributeValueToWrite + " " + attributeToWrite);

//addAttribute adds single value.  setAttribute is for []
idRepository.addAttribute(currentUser,attributeToWrite, attributeValueToWrite);

outcome = "true";
