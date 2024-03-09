import React from "react";
import Image from "next/image";
import Meta from "@/components/Meta";
import Layout from "@/layout/Layout";
import { BsFillCloudDownloadFill } from "react-icons/bs";
const eBook = () => {
  const cards = [
    {
      image: "/images/ali_book.png",
      price: "ücretsiz",
      title: "Geri Dönüş Programı",
    },
  ];
  return (
    <Layout>
      <Meta
        title={"e-Book"}
        description={`Merhaba! ben Ali Kurt
          Beni alieswolf olarak da tanıyor olabilirsiniz. Bu e-kitap aracılığıyla sizlere ulaşmaktan ve spora geri
          dönmeyi hedefleyen kişiler için özel olarak tasarlanmış bu rehberi sizlere sunmaktan mutluluk duyuyorum. `}
      />
      <div className="container">
        <div className="w-75 m-5">
          <div className="row">
            {cards.map((card, index) => (
              <div key={index} className="col-lg-4 col-md-4 mb-5">
                <div className="card-body">
                  <Image
                    width={300}
                    height={400}
                    src={card.image}
                    alt={`ebook${index + 1}`}
                    className="img-fluid images"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-title">{card.price}</p>
                  </div>
                  <a href="/images/comeback-ebook.pdf" download={'comeback-ebook.pdf'}>
                  <BsFillCloudDownloadFill  className="m-4 icon-download" size={26}/>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default eBook;
