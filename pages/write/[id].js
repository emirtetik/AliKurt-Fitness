import Layout from '@/layout/Layout.js'
import {data} from '../../data.js'
const Detail = ({post}) => {

    return (
     <Layout>
            <section className='m-5'>
          <div id='detail-div' className='w-75 mx-auto '>
           <h1 className='text-center fw-bold'>{post?.header}</h1>
           <p className='h5 fw-semibold  text-center mx-auto mt-5 lh-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo dolore incidunt ex expedita dicta, illum non quasi consectetur nesciunt nisi ut accusantium neque, vitae velit at id cupiditate adipisci!</p>
           <p className='h5 fw-semibold text-center mx-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo dolore incidunt ex expedita dicta, illum non quasi consectetur nesciunt nisi ut accusantium neque, vitae velit at id cupiditate adipisci!</p>
           <p className='h5 fw-semibold text-center mx-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo dolore incidunt ex expedita dicta, illum non quasi consectetur nesciunt nisi ut accusantium neque, vitae velit at id cupiditate adipisci!</p>

           <p className='h5 fw-semibold  text-center mx-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo dolore incidunt ex expedita dicta, illum non quasi consectetur nesciunt nisi ut accusantium neque, vitae velit at id cupiditate adipisci!</p>
           <p className='h5 fw-semibold  text-center mx-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo dolore incidunt ex expedita dicta, illum non quasi consectetur nesciunt nisi ut accusantium neque, vitae velit at id cupiditate adipisci!</p>
           <h2 className='h2 fw-bolder mr-5'>Antrenmanın En Önemli Amacı Nedir?</h2>
           <p className='h5 fw-semibold text-center mx-auto lh-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo dolore incidunt ex expedita dicta, illum non quasi consectetur nesciunt nisi ut accusantium neque, vitae velit at id cupiditate adipisci!</p>
           <p className='h5 fw-semibold  text-center mx-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo dolore incidunt ex expedita dicta, illum non quasi consectetur nesciunt nisi ut accusantium neque, vitae velit at id cupiditate adipisci!</p>
           <p className='h5 fw-semibold  text-center mx-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo dolore incidunt ex expedita dicta, illum non quasi consectetur nesciunt nisi ut accusantium neque, vitae velit at id cupiditate adipisci!</p>
           
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
