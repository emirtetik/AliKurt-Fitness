import Layout from '@/layout/Layout.js'
import {data} from '../../data.js'
const Detail = ({post}) => {

    return (
     <Layout>
            <section className=' m-5'>
          <div id='detail-div' className='container w-100 mx-auto '>
           <h1 className='text-center fw-bold'>{post?.header}</h1>
           <p className='h5   text-justify mx-auto mt-5 lh-base'>{post?.text}</p>
           <p className='h5  text-left mx-auto lh-base'>{post?.text2}</p>
           <p className='h5 text-left mx-auto lh-base'>{post?.text3}</p>
           <p className='h5  text-left mx-auto lh-base'>{post?.li_text}</p>
           <ul className=' py-4 d-grid text-start justify-content-start '>
                      <li>{post?.li5}</li>
                      <li>{post?.li6}</li>
                      <li>{post?.li7}</li>
                      <li>{post?.li8}</li>
                    </ul>
                    <p className='h5  text-left mx-auto lh-base'>{post?.content}</p>
                    <p className='h5  text-left mx-auto lh-base'>{post?.content1}</p>
                    <p className='h5  text-left mx-auto lh-base'>{post?.content2}</p>


           <h2 className='h2 fw-bolder mr-5'>{post?.header1}</h2>
           <ul className=' py-4 d-grid  justify-content-start '>
                      <li>{post?.li9}</li>
                      <li>{post?.li10}</li>
                      <li>{post?.li11}</li>
                      <li>{post?.li12}</li>
                      <li>{post?.li13}</li>
                      <li>{post?.li13}</li>
                      <li>{post?.li15}</li>
                      <li>{post?.li16}</li>
                      <li>{post?.li17}</li>

                    </ul>
           <p className='h5   text-left mx-auto lh-base'>{post?.text4}</p>
            <ul>
            <ul className=' py-4 d-grid  justify-content-start '>
                      <li>{post?.li1}</li>
                      <li>{post?.li2}</li>
                      <li>{post?.li3}</li>
                      <li>{post?.li4}</li>
                    </ul>
            </ul>
           <h2 className='h2 fw-bolder mr-5'>{post?.header2}</h2>

           <p className='h5  text-left mx-auto lh-base'>{post?.text5}</p>
           
           </div>
           </section>


     </Layout>




    )
}


export default Detail

 
export const getStaticPaths = async () => {
  const ids = data.map(({ id }) => id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const post = data[context.params.id - 1]; 

  return {
    props: {
      data,
      post,
    },
  };
};
