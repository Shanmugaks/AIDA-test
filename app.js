exports.handler = function(event, context, callback) 
{
    var error = null;
    var NoError = null;
	
	var result = MyLambdaFunction ();
 
	
	callback(error, result);
}
 
function MyLambdaFunction () 
{
	// MyLambdaFunction logic here
	var Result = 'My Lambda Tester';
	return Result;
}
