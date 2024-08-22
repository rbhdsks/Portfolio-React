import Alert from 'react-bootstrap/Alert';

function LinksExample() {
  return (
    <div className='news'>
      {[
        'success'
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Submitted a paper titled "An Efficient ADAS Framework for Cross-Domain Image Translation and Feature Preservation Utilizing GAN" to INDICON2024, 
          <br />showcasing advancements in image translation technologies.
          {/* <Alert.Link href="#">an example link</Alert.Link>. Give it a click if */}
          {/* you like. */}
        </Alert>
      ))}
    </div>
  );
}

export default LinksExample;