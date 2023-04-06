import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function PrestationsCard({ prestation }) {
  const { title, imageCard, description } = prestation.fields;
  const { url } = imageCard.fields.file;
  const { width, height } = imageCard.fields.file.details.image;
const {tarif}= prestation.fields;
  return (
    <article className="h-full">
    <div className="flex flex-col sm:flex-row items-center bg-[#47555E] border-stone-700  rounded-lg shadow-xl max-w-xl h-full">
      <Image
        alt={title}
        src={`https:` + url}
        width={250}
        height={200}
        className="object-cover rounded-lg min-h-20 w-48"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-cyan-200">{title}</h3>
        <div className="mb-3 font-normal text-cyan-200">
          {documentToReactComponents(description)}
        </div>
        <span className="mb-3 font-normal text-cyan-200">Tarif : {tarif}</span>
      </div>
    </div>
    </article>
  );
}
