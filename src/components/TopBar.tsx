export function TopBar(): React.ReactElement {
  return (
    <div className="top-bar bg-primary text-white">
      <div className="row">
        <div className="col-md-12 text-md-end text-center">
          <span className="me-3">
            <i className="fa fa-phone me-2"></i>+123 456 7890
          </span>
          <span className="m-2">
            <i className="fa fa-envelope me-2"></i>info@edukids.com
          </span>
        </div>
      </div>
    </div>
  );
}
