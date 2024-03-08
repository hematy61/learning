---
puppeteer:
  printBackground: true
export_on_save:
    puppeteer: true
---

# IAM CLI Commands

## List Users

```bash
aws iam list-users
```

This command will list all the users in the account and their metadata.

Example output:

```json
{
    "Users": [
        {
            "Path": "/",
            "UserName": "Alice",
            "UserId": "AIDAJDPLRKLG7UEXAMPLE",
            "Arn": "arn:aws:iam"
        },
        {
            "Path": "/",
            "UserName": "Bob",
            "UserId": "AIDAJDPLRKLG7UEXAMPLE",
            "Arn": "arn:aws:iam"
        }
    ]
}
```
