export function TopBar(): React.ReactElement {
  return (
    <div className="top-bar">
      //add number and email
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <span className="me-3">
              <i className="fa fa-phone me-2"></i>+123 456 7890
            </span>
            <span>
              <i className="fa fa-envelope me-2"></i>info@edukids.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
