import { PodcastPreviewType } from "@/types/preview";
import Image from "next/image";
import Link from "next/link";

export const PodcastCard = ({ podcast }: { podcast: PodcastPreviewType }) => {
  return (
    <Link href={"/podcast/" + podcast.id}>
      <section className="grid gap-1">
        <Image
          className="rounded-lg"
          width={250}
          height={250}
          alt={podcast.title}
          src={podcast.image}
        ></Image>
        <span className="text-lg font-bold">{podcast.title}</span>
        <span className="text-gray-500 text-blue-500 p-1">Seasons: {podcast.seasons}</span>
      </section>
    </Link>
  );
};
