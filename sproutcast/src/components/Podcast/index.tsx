import { PodcastPreviewType } from "@/types/preview";
import Image from "next/image";
import Link from "next/link";

export const PodcastCard = ({ podcast }: { podcast: PodcastPreviewType }) => {
  return (
    <Link href={"/podcast/" + podcast.id}>
      <section className="grid gap-1 justify-center items-center">
        <Image
          className="rounded-full"
          width={250}
          height={250}
          alt={podcast.title}
          src={podcast.image}
        ></Image>
        <span className="text-lg font-bold text-center">{podcast.title}</span>
        <span className="text-white p-1 text-center">Seasons: {podcast.seasons}</span>
      </section>
    </Link>
  );
};
