AWS Function for Sending Email Using Serverless Framework

Based on code from Ariel at Codingly.

Example test object:

```
{
  "Records": [
    {
      "body": {
        "subject": "Test email from email lambda",
        "body": "Test please ignore",
        "recipient": "Geoffrey.Emerson@gmail.com"
      }
    }
  ]
}
```

Sender and recipient must be verified while in AWS Sandbox mode.