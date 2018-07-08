exports.get = function(event, context, callback) 
{
    var error = null;
    var NoError = null;
	
	var resultBody = MyLambdaFunction ();
	
	var result = {
    statusCode: 200,
    body: resultBody,
    headers: {'content-type': 'text/html'}
  };
	callback(NoError, result);
}
 
function MyLambdaFunction () 
{
	// MyLambdaFunction logic here
	var Result = 'My Lambda Tester';
	return Result;
}
