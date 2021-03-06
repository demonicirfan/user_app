const aws=require('aws-sdk');
const ddb= new aws.DynamoDB();


exports.handler = async(event,context)=>{
  const date=new Date();

  if(event.request.userAttributes.sub){
    const params = {
      Item:{
        'id':{S:event.request.userAttributes.sub},
        '__typename':{S :'User'},
        'username':{S:event.userName},
        'email':{S:event.request.userAttributes.email},
        'createdAt': {S:date.toISOString()},
        'updatedAt': {S:date.toISOString()},
      },
      TableName:process.env.USERTABLE
    }
    try{
      await ddb.putItems(params).promise()
      console.log('Success')
    } catch (err) {
      console.log("Error", err)
    }
    context.done(null,event)
  }else{
    console.log("errorrr bro")
    context.done(null,event)
  }
}
