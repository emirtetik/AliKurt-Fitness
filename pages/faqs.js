import Layout from '@/layout/Layout'
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Meta from '@/components/Meta';
function faqs() {
  return (
    <Layout>
       <Meta 
      title={"SSS"}
      keywords={""}
      description={""}
      
      />
     <section id='sss' className='d-flex justify-content-center align-content-center'>
    <Accordion defaultActiveKey="0" flush className='mt-5 p-3  ' >
    <h2 id='sss-head' className='items-center mt-5 mx-auto border-bottom border-dark mb-3'>Sıkça Sorulan Sorular</h2>
      
      <Accordion.Item eventKey="0" className='item mb-3'>
        <Accordion.Header>1. Koçluk Geri Ödemesi ve Duraklatma Hakkında</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>
            Bir danışmanlık randevusu ayarladınız ve ücretini ödediniz, ancak daha sonra iptal etmeye
             karar verirseniz bana bu konuda bilgi verdikten sonra birkaç gün içinde geri ödeme alırsınız
             . Koçluk veya programlama hizmetim için, paketi satın aldıysanız ve beraber çalışmaya zaten 
             başladıysak, (antrenmanınızın ilk günü) ilk ay için geri ödeme yapamayacağım. Çünkü bu
              noktaya kadar zaten çok fazla zaman ve çaba harcamış bulunmaktayım.Bununla birlikte, 
              herhangi bir olağan dışı faktörle koçluğa katılamayacağanız bir durum meydana gelirse,
               daha sonraki katılamayacağınız ayların iadesini alma opsiyonunuz vardır. Ayrıca koçluğu,
                geri dönebileceğiniz zamana kadar duraklatma seçeneği de vardır. Sadece bana haber verin
                 ve en iyi seçeneği beraber bulalım.

            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='item'>
        <Accordion.Header>2. Koçluk için herhangi bir gereklilik var mı?</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>
            Genel kuvvet sporları (powerlifting,streetlifting), calisthenics veya vücut geliştirme 
            için koçluk almakla ilgilenen kişiyseniz, hizmete katılmanın tek şartı, satın aldıktan 
            sonra size göndereceğim sözleşmeye kaydolmaktır. Nadir durumlarda birine koçluk yapmayı
             reddediyorum çünkü belirli bir konuda onlara benden çok daha fazla yardımcı olacak insanlar
              olduğuna inanıyorum (örneğin: uzun mesafe koşucusu ya da halter sporcusu gibi). 
              Örneğin hem iyi bir kondisyon hem de genel olarak güçlenmek isteyen bir kişi için ise 
              bu spefisik konularda elimden geleni sonuna kadar yaparım.

            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      {/* <Accordion.Item eventKey="2" className='item'>
        <Accordion.Header>3. deserunt mollit anim id est laborum.</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          </li>
        </ul>
        </Accordion.Body>
      </Accordion.Item> */}
      {/* <Accordion.Item eventKey="3" className='item'>
        <Accordion.Header>4. deserunt mollit anim id est laborum.</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          </li>
        </ul>
        </Accordion.Body>
      </Accordion.Item> */}
      {/* <Accordion.Item eventKey="4" className='item'>
        <Accordion.Header>5. deserunt mollit anim id est laborum.</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          </li>
        </ul>
        </Accordion.Body>
      </Accordion.Item> */}
    </Accordion>
    </section>
    </Layout>
  )
}

export default faqs