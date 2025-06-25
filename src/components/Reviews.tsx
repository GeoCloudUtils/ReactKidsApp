export function Reviews(): React.ReactElement {
  return (
    <section className="py-5" style={{ backgroundColor: "#eaf8fb" }}>
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col">
            <h2 className="display-6 text-primary">What Parents Are Saying</h2>
          </div>
        </div>
        <div className="row gy-4">
          <div className="col-md-4">
            <div className="p-4 h-100 bg-white rounded shadow-sm">
              <div className="mb-3 text-primary fs-1">“</div>
              <p className="fw-semibold text-dark">
                My daughter loves this game. It’s so easy to learn but also very
                engaging. I like that it’s not just a mindless game but focuses
                on skills, creativity and thought.
              </p>
              <p className="text-muted mt-3">– Parent, LEGO DUPLO WORLD</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 h-100 bg-white rounded shadow-sm">
              <div className="mb-3 text-primary fs-1">“</div>
              <p className="fw-semibold text-dark">
                My son loves this game so much every time I come to see him he’s
                on his iPad playing this game! If I could give this 1M+ stars I
                would it’s so amazing.
              </p>
              <p className="text-muted mt-3">– Parent, Disney Coloring World</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 h-100 bg-white rounded shadow-sm">
              <div className="mb-3 text-primary fs-1">“</div>
              <p className="fw-semibold text-dark">
                My almost three year old is learning so much from this app. I
                found it after she became obsessed with the hungry caterpillar
                book. Thank you so much for creating such a great learning tool.
              </p>
              <p className="text-muted mt-3">
                – Parent, Hungry Caterpillar Play School
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
