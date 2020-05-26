const AWS = require("aws-sdk");
// require("dotenv").config();

function AWSUtils() {
  const mu = {};

  mu.verifyCredentials = () => {
    AWS.config.getCredentials(function (err) {
      if (err) console.log(err.stack);
      // credentials not loaded
      else {
        console.log("Access key:", AWS.config.credentials.accessKeyId);
        console.log(
          "Secret access key:",
          AWS.config.credentials.secretAccessKey
        );
      }
    });
  };

  s3 = new AWS.S3({ apiVersion: "2006-03-01" });

  mu.upload = (fileName, fileContent) => {
    const bucketParams = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: fileName,
      Body: fileContent,
      ACL: "public-read",
    };

    return new Promise((resolve, reject) => {
      s3.upload(bucketParams, function (err, data) {
        if (err) {
          reject(err);
          return;
        }
          console.log("Upload Success", data.Location);
          resolve(data);
        });
    });
  };
  return mu;
}

module.exports = AWSUtils();
