import { useRouter } from "next/router";
import Layout from "@/layout/Layout";
import { guides } from "../../guides";
import Image from "next/image";
const BookDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const book = guides.find((guide) => guide.slug === slug);
  return (
    <Layout>
      <div className="container  mt-5 mb-5">
        <div className="row ">
          <div className="col d-flex justify-content-center">
          {book && (
              <Image
                src={book.image}
                alt={book.alt}
                width={400}
                height={550}
                className="images_detail"
              />
            )}
          </div>
          {book && (
            <div className="col d-flex flex-column justify-content-start">
              <h1 className="fw-bold">{book.title}</h1>
              <p style={{lineHeight:'35px'}} className="mt-3 fs-5  w-75">{book.description}</p>
              <a
                href={book.pdf}
                download={"GeriDönüşProgramı.pdf"}
                className='downloadButton' 
              >İndir</a>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BookDetails;
