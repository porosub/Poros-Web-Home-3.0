// pages/blog/[id].tsx
import type { NextPage } from "next";
import Image from "next/image";
import { Card } from "@/components/ui/card-blog";

const BlogDetailPage: NextPage = () => {
  const postData = {
    id: "1",
    image: "/img/proker-codex.jpg",
    title: "Prestasi Lain di Ajang Tekno",
    date: "Senin, 28 Oktober 2024",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel lobortis lectus. Maecenas fermentum mauris ullamcorper, tincidunt nisl porttitor, iaculis nulla. Mauris commodo nisi vitae quam mollis, quis mollis odio elementum. Morbi gravida augue vitae porta auctor. Suspendisse euismod dignissim lectus, et mattis purus maximus quis. Proin vitae tristique libero, et imperdiet ipsum. Cras pellentesque molestie aliquam. Nullam et mauris vel enim vulputate rutrum. Vivamus orci purus, fringilla nec dignissim sed, dignissim vel augue. Aliquam hendrerit, nisl vel maximus vehicula, tortor velit luctus lorem, vel pretium lacus sem eget massa. Etiam convallis, nunc a scelerisque aliquet, mi mauris rutrum leo, sit amet congue justo urna et metus. Nam tincidunt eleifend turpis vel sollicitudin. Etiam pellentesque varius ipsum, ut porttitor urna egestas a. Curabitur vel tempus nisl. Etiam auctor diam id ante feugiat, at iaculis sem cursus.",
      "Donec id semper libero. Vivamus vel consequat nisl. Integer fermentum fermentum odio, non iaculis metus elementum et. Nunc sagittis velit interdum, consequat odio id, cursus eros. Aenean diam diam, laoreet eu nibh in, imperdiet mollis tellus. Mauris congue tellus in consectetur eleifend. Pellentesque turpis nisi, pharetra id hendrerit eget, scelerisque a libero. Donec eleifend lorem quis elit eleifend, vel interdum justo lobortis. Quisque gravida quis est id facilisis. Duis lectus nulla, ultricies nec scelerisque nec, tincidunt non magna.",
      "Nulla molestie, ipsum ac varius lobortis, lacus dolor interdum lacus, eu dignissim risus ante at nunc. Donec condimentum id nulla at imperdiet. Nullam porta sed nisi sed rhoncus. Morbi at arcu vel massa facilisis tempus in a ipsum. Duis suscipit dapibus ligula. Duis finibus accumsan purus, nec euismod erat viverra et. Maecenas malesuada, magna vel suscipit semper, magna libero pharetra neque, sit amet faucibus odio nisl quis enim. Nulla semper aliquet egestas. Phasellus hendrerit blandit enim non mattis. Phasellus ornare consequat odio, eget accumsan ante fringilla nec. Fusce urna velit, dictum ac tempor at, vulputate eu orci. Vivamus hendrerit vestibulum sapien, at consectetur ex tristique ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam molestie odio ac luctus pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vel pretium felis, eu gravida dui.",
    ],
    imageAuthor: "/img/proker-codex.jpg",
    author: "Jane Doe",
    tags: ["tagar1", "tagar2", "tagar3"],
  };
  return (
    <main className="overflow-hidden flex flex-col gap-8 p-16 md:p-32 ">
      <section className="w-full h-80 flex items-center justify-center">
        <Image
          src={postData.image}
          alt="Blog Header Image"
          height={384}
          width={384}
          className="object-cover h-full w-auto"
        />
      </section>
      <section>
        <h1 className="font-bold text-[24px] md:text-[32px]">
          {postData.title}
        </h1>
        <p className="text-[14px] md:text-base">{postData.date}</p>
      </section>
      <section className="flex flex-col gap-4 text-[14px] md:text-base">
        {postData.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
      <section className="flex flex-row gap-4 items-center">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <Image
            src={postData.imageAuthor}
            alt="Foto Profil"
            width={56}
            height={56}
            className="object-cover h-full w-auto"
          />
        </div>
        <div className="text-[14px] md:text-base">
          <h2 className="font-bold">{postData.author}</h2>
          <p className="text-gray-600">
            Tag Blog:
            {postData.tags.map((tag, index) => (
              <span key={index}>
                <a href="#" className="underline">
                  {tag}
                </a>
                {index < postData.tags.length - 1 && ", "}
              </span>
            ))}
          </p>
        </div>
      </section>
      <section>
        <h1 className="font-bold text-[24px] md:text-[32px]">Blog Lainnya</h1>
        <div className="flex flex-row gap-4 py-4 px-8">
          <Card
            className="w-[350px] h-[300px]"
            gambar={postData.image}
            judul={postData.title}
            penulis={postData.author}
            tanggal={postData.date}
            deskripsi={postData.content[0]}
          />
        </div>
      </section>
    </main>
  );
};

export default BlogDetailPage;
