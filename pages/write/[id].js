import Layout from '@/layout/Layout.js'
import Meta from "../../components/Meta"
import {data} from '../../data.js'
const Detail = ({post}) => {

    return (
     <Layout>
      
<Meta 
      title={"Blogs"}
      keywords={""}
      description={""}
      
      />

            <section className=' mt-5 mb-5'>
          <div id='detail-div' className='container w-100 mx-auto '>

           <h1 className='text-center '>{post?.header}</h1>

           <p className='   mx-auto mt-5 '>{post?.text}</p>

           <h4 className='m-3'>{post?.header_list}</h4>

           <p className='  mx-auto '>{post?.text1}</p>

           <ul className=' py-4 d-grid text-start justify-content-start '>
                      <li>{post?.li_1}</li>
                      <li>{post?.li_2}</li>
                      <li>{post?.li_3}</li>
                      <li>{post?.li_4}</li>
                      <li>{post?.li_5}</li>
                      <li>{post?.li_6}</li>

                    </ul>

           <h2 className='  '>{post?.header1}</h2>

           <p className='  mx-auto '>{post?.text2}</p>
           <p className='   mx-auto'>{post?.li_text}</p>

           <ul className=' py-4 d-grid text-start justify-content-start '>
                      <li>{post?.li1}</li>
                      <li>{post?.li2}</li>
                      <li>{post?.li3}</li>
                      <li>{post?.li4}</li>
                    </ul>
                    
          <p className='  mx-auto '>{post?.text3}</p>

          <ul className=' py-4 d-grid text-start justify-content-start '>
                      <li>{post?.li_1}</li>
                      <li>{post?.li_2}</li>
                      <li>{post?.li_3}</li>
                      <li>{post?.li_4}</li>
                      <li>{post?.li_5}</li>
                      <li>{post?.li_6}</li>

                    </ul>

          <h4 className='m-3 '>{post?.header_list1}</h4>

          <p className='  mx-auto '>{post?.text4}</p>
          <p className=' mx-auto mb-5'>{post?.text5}</p>

          <h4 className=' m-3'>{post?.header_list2}</h4>

          <p className='   mx-auto '>{post?.text6}</p>
          <p className='  mx-auto '>{post?.text7}</p>

          <h2 className=' mt-3'>{post?.header2}</h2>

               <ul className=' py-4 d-grid  justify-content-start '>
                      <li>{post?.list1}</li>
                      <li>{post?.list2}</li>
                      <li>{post?.list3}</li>
                      <li>{post?.list4}</li>
                      <li>{post?.list5}</li>
                      <li>{post?.list6}</li>
                      <li>{post?.list7}</li>
                      <li>{post?.list8}</li>
                      <li>{post?.list9}</li>

                    </ul>

          <h2 className=' '>{post?.result}</h2>
      
           
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
