import React from "react";
import Image from "next/image";
import Meta from "@/components/Meta";
import Layout from "@/layout/Layout";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import Link from "next/link";
import {guides} from '../../guides'
const eBook = ({guides}) => {
  return (
    <Layout>
      <Meta
        title={"e-Book"}
        description={`Merhaba! ben Ali Kurt
          Beni alieswolf olarak da tanıyor olabilirsiniz. Bu e-kitap aracılığıyla sizlere ulaşmaktan ve spora geri
          dönmeyi hedefleyen kişiler için özel olarak tasarlanmış bu rehberi sizlere sunmaktan mutluluk duyuyorum. `}
      />
      <div className="container w-75">
        <h1 className="text-center w-100 mt-5  text-black" >Ücretsiz Rehberler, E-kitaplar ve Antrenman Programları</h1>
          <div className="bar"></div>
        <div className="w-75 ">
          <div className="row">
            {guides.map((guide, index) => (
              <div key={index} className="col-lg-4 col-md-4 mb-5 ">
                <div className="card  ">
                  <div className="card-body d-flex flex-column align-items-center">
                  <Image
                    width={230}
                    height={300}
                    src={guide.image}
                    alt={guide.alt}
                    className="img-fluid images"
                  />
                <div className="mt-2 text-center">
                    <h5 className="card-title mb-2">{guide.title}</h5>
                    <Link href={`/guide/${guide.id}`} className="btn-book d-flex align-items-center justify-content-center text-white">
                      Detayları Gör
                    </Link>
                  </div>
                  </div>

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

export const getStaticProps = async (context) => {
  return{
    props:{
      guides,
    }
  }
}
