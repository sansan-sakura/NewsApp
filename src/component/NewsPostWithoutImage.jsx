export default function NewsPostWithoutImage(props) {
  return (
    <div className="mb-4 ">
      <a className="mx-2 inline-block" href={props.url}>
        ◼️ {props.title}
      </a>
      <hr className="mt-4  border-gray-600" />
    </div>
  );
}
