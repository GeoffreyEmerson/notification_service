import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'us-west-2' });

async function sendMail(event, context) {
  console.log('event:', event);
  const record = event.Records[0];

  const { subject, body, recipient } = record.body;

  //While in AWS Sandbox, both source and destination addresses must be verified.

  const params = {
    Source: 'Geoffrey.Emerson@gmail.com',
    Destination: {
      ToAddresses: [recipient],
    },
    Message: {
      Subject: {
        Data: subject
      },
      Body: {
        Text: {
          Data: body
        }
      }
    }
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;
