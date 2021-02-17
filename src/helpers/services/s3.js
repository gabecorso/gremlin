import aws from 'aws-sdk';
const signS3 = (req, res) => {
  // const s3 = new aws.S3();
  const s3 = new aws.S3({ signatureVersion: 'v4', region: 'us-east-1' });
  //add a unique identifier for each file upload to handle duplicate file names
  const fileName = `${req.query['file-name']}`;
  // const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: fileName,
    Expires: 60,
    // ContentType: fileType,
    ACL: 'public-read',
  };
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    console.log(err, 'error s3');
    if (err) { res.send(err).end(); }

    const returnData = {
      signedRequest: data,
      url: `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`,
    };
    return (res.send(JSON.stringify(returnData)));
  });
};

export default signS3;