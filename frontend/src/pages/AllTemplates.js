import { useEffect, useState } from "react";

import TemplateList from "../components/Templates/TemplateList";

function AllTemplates() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTemplates, setLoadedTemplates] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(process.env.REACT_APP_BACKEND_URL + "templates")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const templates = [];
        for (const key in data["templates"]) {
          const template = {
            id: data["templates"][key]["id"],
            meta: data["templates"][key]["some_test_meta"],
          };

          templates.push(template);
        }

        setIsLoading(false);
        setLoadedTemplates(templates);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Templates</h1>
      <TemplateList templates={loadedTemplates} />
    </section>
  );
}

export default AllTemplates;
