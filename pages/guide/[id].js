import { useRouter } from "next/router";
import Layout from "@/layout/Layout";
import { guides } from "../../guides";
import Image from "next/image";
const BookDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const book = guides.find((guide) => guide.id === Number(id));
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
              <p className="mt-3 fs-4 w-75">{book.description}</p>
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
