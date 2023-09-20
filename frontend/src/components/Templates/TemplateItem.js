import Card from "../ui/Card";

function TemplateItem(props) {
  return (
    <li>
      <Card>
        <div>{props.id}</div>
        <div>{props.meta}</div>
      </Card>
    </li>
  );
}

export default TemplateItem;
