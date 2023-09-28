import TemplateItem from "./TemplateItem";

function TemplateList(props) {
  return (
    <ul>
      {props.templates.map((template) => (
        <TemplateItem key={template.id} id={template.id} meta={template.meta} />
      ))}
    </ul>
  );
}

export default TemplateList;
