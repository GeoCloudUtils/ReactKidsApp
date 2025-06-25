import { useParams } from "react-router-dom";
import { appList } from "../appList";

export default function AppDetailPage(): React.ReactElement {
  const { id } = useParams();
  const app = appList.find((app) => app.id === id);

  if (!app) return <h2>App not found</h2>;

  return (
    <div className="container py-5">
      <h1>{app.title}</h1>
      <img
        src={app.imageSrc}
        alt={app.alt || app.title}
        className="img-fluid"
      />
      <p className="mt-4">{app.description}</p>
    </div>
  );
}
