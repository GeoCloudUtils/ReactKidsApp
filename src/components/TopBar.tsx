export function TopBar(): React.ReactElement {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-md-6"></div> {/* Empty column for spacing */}
          <div className="col-md-6 text-md-end text-center">
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
