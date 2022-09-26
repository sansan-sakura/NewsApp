export default function NewsPost(props) {
  return (
    <div className="border-gray-900  shadow-md py-2 px-4 flex gap-4 flex-col m-2 ">
      <img src={props.image} alt="" className="" />
      <div>
        <a href={props.url} target="_blank">
          <h2 className="text-xl mb-1">{props.title}</h2>
        </a>
        <span className="text-xs mr-12">{props.publishedAt}</span>

        <p className="mt-1 text-sm text-gray-600">{props.description}</p>

        <span>{props.source}</span>
      </div>
    </div>
  );
}
