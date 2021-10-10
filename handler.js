'use strict';
const AWS= require('aws-sdk');
module.exports.hello = async event => {
 const dynamoDB = new AWS.DynamoDB.DocumentClient({
   region: 'us-west-2'
 })

 const params = {
  TableName: 'test-table',
  KeyConditionExpression: 'partitionAndId = :id',
  Limit: 1,
  ScanIndexForward: false, // ensure we get newest version
  ExpressionAttributeValues: {
    ':id': "101"
  }
};
const data = await dynamoDB.query(params).promise();
console.log(`data...${JSON.stringify(data, 0, 4)}`);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};




