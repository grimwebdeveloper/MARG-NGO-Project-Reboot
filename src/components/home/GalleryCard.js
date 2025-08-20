// components/TakeALook.js
import Image from "next/image";
import Link from "next/link";

export default function TakeALook() {
  // Dynamic data (you can fetch from API or CMS later)
  const galleryItems = [
    {
      id: 1,
      title: "View Photo Gallery",
      link: "#",
      img: "/tmm.jpg",
    },
    {
      id: 2,
      title: "View Video Gallery",
      link: "#",
      img: "/tmm2.jpg",
    },
  ];

  return (
    <section className="section_wrapper py-12">
      <div className="wrap max-w-6xl mx-auto px-4">
        <div className="mcb-wrap-inner">
          <div className="column text-center mb-10">
            <div className="column_attr">
              <h2 className="text-3xl font-bold">
                <span>Take a Look</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="photo_box bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="image_frame">
                  <div className="image_wrapper relative group">
                    <Link href={item.link}>
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={600}
                        height={350}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>
                  </div>
                </div>
                <div className="desc text-center py-6">
                  <Link
                    href={item.link}
                    className="inline-block bg-orange-600 text-white font-semibold px-6 py-3 rounded hover:bg-orange-700 transition"
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
