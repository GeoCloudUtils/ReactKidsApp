import { appList } from "../appList";
import { AppCard } from "./AppCard";

export const AppGrid: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {appList.map((app) => (
          <AppCard
            key={app.id}
            id={app.id}
            imageSrc={app.imageSrc}
            description={app.description || ""}
          />
        ))}
      </div>
    </div>
  );
};
