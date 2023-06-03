import React from 'react'
import { useState } from 'react'
import Image from 'next/image';

function Card() {

    const [cards, setCards] = useState([
      {
        id: 1,
        images: '/images/ahmet.jpg',
        content: 'Ali ile tanıştığım için çok şanslıyım. Kendisi dürüst,ahlaklı, işinin ehli ve gerçek bir sporcu. Her şeyden önce bir dost. Beraber çalışmaya başlamadan önce de hiçbir sorumu yanıtsız bırakmazdı ve neyi neden yapmam gerektiğini detayları dahilinde anlatırdı. Eğitim aldığım süreçte ise günlük detaylandırdığı programlar sayesinde aldığım sonuçlardan fazlasıyla memnunum.  Her şey için teşekkürler hocam, daha uzun zamanlar beraber olmak dileğiyle',
        person: 'Ahmet',
        isVisible: true
      },
      {
        id: 2,
        images: '/images/caca.jpeg',
        content: `Vücut geliştirme sporuna 2018 yılında başlamaya karar verdim. Ali'nin de uzun süredir  bu sporla ilgilendiğini ve bu sporu araştırarak, bilinçli olarak yaptığını bildiğim için ilk olarak onunla iletişime geçtim. Nihayetinde beraber aynı salonda spor yapmaya başladık. En temel seviyeden başlayarak, sıfırdan başlayan birinin dahi kolayca anlayabileceği şekilde bildiklerini benimle paylaştı. 3 ay gibi kısa bir sürede, bu spor ile daha önce uğraşmamış olmama rağmen en temel konularda; hareketlerin doğru formlarının nasıl olduğu, sürekli ve kontrollü bir ilerleyiş nasıl sağlanacağı, oto kontrolün önemi, deload mantığı vb. konularda ciddi ilerlemeler kaydettim. Bütün bunlar spora yeni başlayanların düştüğü hatalardan kaçınarak hızlı bir gelişim elde etmemin yanı sıra, bilinçli ve mental olarak güçlü bir sporcu olmama da yardımcı oldu. Vücut geliştirmenin spor disiplinine hem pratikte hem de teoride hakim olan bir arkadaş ile başlamanın avantajını ciddi anlamda yaşadım. Başlangıçta sağlam bir temel attıktan sonra uzun bir süre de aynı spor salonunda birlikte çalışmaya devam ettik. Bu uzun sürede, gelişimimin tıkandığı noktalarda veya kendi isteklerim, hedeflerim doğrultusunda farklı yetenekler (handstand gibi) açmak istediğimde doğru tavsiyeler ve program değişiklikleri ile tüm hedeflerime sağlıklı bir şekilde ulaşmama da yardımcı oldu. Şu anda uzun süredir spor yapmamama rağmen temelleri çok sağlam attığımız için kuvvetimi muhafaza edebiliyorum ve yeniden spora başladığım zaman eski seviyeme kısa bir sürede dönebileceğimi biliyorum. Özetle, birlikte uzun soluklu bir spor geçmişimiz oldu, amatör seviyeden orta-ileri seviye bir sporcu olma sürecimde, Ali'nin bilimsel temellere dayanan tavsiye ve programları ile hızlı ve kalıcı sonuçlar elde etmemin yanı sıra salonda geçirdiğimiz eğlenceli vakit ve ettiğimiz kaliteli muhabbet ile de çok güzel anılarım oldu ve ciddi kazanımlar elde ettim. Spora yeni başlayacak olanların veya belli noktalarda gelişimi tıkanmış ve kendisine bir yol haritası çizemeyen kişilere Ali'nin tavsiyelerinin, koçluğunun çok yararlı olacağını gönül rahatlığı ile söyleyebilirim. Yıllardan beridir elde ettiği bilgi birikimi ile hem sporu sevmenize, spor disiplinine sahip olmanıza hem de bu sporu en doğru şekilde yapmanıza yardımcı olacaktır.`,
        person: 'Çağatay',
        isVisible: true
      },
      {
        id: 3,
        images:"/images/Emre.jpeg",
        content:`Spora başlamadan önce hangi konuda nasıl ilerleyeceğimi; hangi hareketleri yapmam gerektiğini, doğru formun nasıl olduğunu ve kaç tekrar yapmam gerektiğini kısacası çoğu şeyi 
        bilmiyordum. Ali hocanın içten ve samimi rehberliği sayesinde bunların hepsini öğrenmeye başladım ve bunların dışında benim sporla alakalı kısa ve uzun vadeli plan,program çıkarımının nasıl olduğunun ve hedef seçimlerinin nasıl yapıldığının farkına vardım, öğrendim. Vücudumu güzelleştirmeye, kaslanmaya devam ediyorum. Spora başlamadan önce 63 kiloydum ve 45kg bench pressi kötü formda yapabiliyordum  Şuan 68 kiloyum ve 70kg  bench pressi düzgün formda setlerle  yapabiliyorum. Ali ile çalışırken şunun farkına vardım, benim vücudumu kendi vücudu gibi önemsiyor ve gelişmesini görmekten keyif alıyor adamsın Ali.
        `,
        person: 'Emre',
        isVisible: false
      },
      {
        id: 4,
        images:"/images/yusuff.jpeg",
        
        content: `Herkes gibi ben de güzel fizik ve yağsız görünüm hayaliyle spora başladım. İlk başlarda popüler olan tüm programları denedim. Bu süreç bir buçuk yıl civarında sürdü. İlk altı ay ciddi anlamda benim için çok keyifliydi. 
        Hızlıca geliştiğimi sanıyordum. Sonrasında herkes gibi ben de internetteki bilgi çöplüğünde kayboldum. Birinci yılımın sonuna yaklaşmıştım. Bir yılda (özellikle yeni başlayan biri olarak) bench pressimi 50 kgye çıkartabilmiştim
         ve son üç ay görüntümde hiçbir değişiklik olmamıştı. Spora olan tutkum gün geçtikçe azalıyordu. Verdiğim emeğin ve zamanın karşılığını alamamak beni spordan itiyordu. bu durum beni tersi yönde hırslandırmıştı. Sporu artık hobiden 
         daha çok görev olarak görmeye başlamıştım. Her antrenman tükenişe hatta bazen tükenişin ötesine geçiyordum. Yorgunluk yönetimim yoktu. İnanılmaz derecede  iş yükü yüklüyordum. Her sabah kalktığımda eklem ve kas ağrıları çekiyordum.
          Bu durum mental sağlığımı dahi bozmuştu. Bir amacım var istiyorum fakat başaramıyorum. Nasıl yapacağımı bilmiyorum. Fitness hakkındaki bilgi kirliliği içinde kaybolmuştum. Sporun bana göre olmadığını düşünmeye başladım. Sonuç olarak 
          bir buçuk yıllık bir amatördüm ve daha kötüsü kendimi amatör olarak görmüyordum. Sporu bırakmayı düşündüğüm sırada Ali ile spor salonunda denk geldik. Salondaki nezaketi alçak gönüllüğü ve spordan aldığı keyif beni çok etkilemişti. Sporun
           bana göre olmadığından bahsettiğimde dehşet içinde kalmıştı. Bunun bir yolu olduğundan bahsetti. Herkes amacına göre spor yapabilir ve birden fazla hedefi aynı anda başarabilir. Bir buçuk yıllık amatör olarak ümidimi öyle kaybetmiştim ki başlarda
            bana hiç inandırıcı gelmiyordu. Bir süre salona spor yapmaktansa aliyi izlemeye gidiyordum. Bir hafta sadece aliyi izledim ara ara yanına gidip neden bunu bu şekilde yaptığını sordum. Beni hiçbir zaman kırmayıp nazikçe tüm sorularımı cevapladı. spora
             olan isteğim artmaya başlamıştı. Sonrasında ona hedeflerimden bahsettim ve birlikte çalışmaya başladık. ilk amacım bench pressimi 100kgye çıkartmaktı. Başaramayacağımı düşünüyordum hayal gibi geliyordu. 6 ay içerisinde 60 kg yarım form bench pressimi
              115 kg düz forma çıkartmıştık (bu süreçte kilo düşmeme rağmen). Bu sürede mental sağlığım yerine gelmişti. Ağrı çekmiyordum. Her sabah uyandığımda spora gitmek için can atıyordum. Sporu olduğu için o günü sevmeyen birinden sporu arzulayan birine dönüştüm.
               Aynadaki görüntüm değişti. İstediğim her şeyi başarabileceğimi öğr   etti gösterdi ve kanıtladı. Kendime olan inancım tekrar yeşerdi. Özgüvenim arttı. Bana hem dost hem ilham kaynağı olduğun için teşekkür ederim koç.`,
        person: `Yusuf`,
        isVisible: false
      },
      {
        id: 5,
        images:"/images/soner.jpeg",
        content: 'Bu sporu senelerdir bilinçli yapıyorum zannediyordum Ali hayatıma girene kadar. Bana sadece kas kütlesi katmadı. Bilim, bilgi ve tecrübe kattı bir hareketi yaptırırken neden yaptırdığını bilimsel olarak anlatan tek kişi olabilir sıradan bir ‘’pt’’ değil.  Ali hocamın bana kattıkları ve çizdiği yol haritaları için çok teşekkür ederim. Haydiii BAAAASS !',
        person: 'Soner',
        isVisible: false
      },
      {
        id: 6,
        images: '/images/Turgut.jpeg',
        content: 'Hayatta bazı insanlar vardır, her zaman yanınızda olan, sizi motive eden ve başarılı olmanıza yardımcı olan insanlar. Spor hayatımda benim yanımda olan kişi ise Ali Hocam oldu. Yoğun iş temposu nedeniyle spora gidecek vakit bulamıyordum ancak Ali hoca bana evde vücut ağırlığımla yapabileceğim harika bir program hazırladı. (Bacak bile çalışıyorum ve gelişiyor) Bu program sayesinde daha fit ve zinde hissediyorum hem de mental sağlığım da çok daha iyi durumda. Kasım ayında kalori takibi ve antrenmanlara başladık. 84 kiloydum ve bel çevrem 93 santimdi. 4 ay gibi bir sürede 75 kiloya indik ve bel çevrem 84 cm’lere indi. Bunun yanında kol, boyun, bacak ölçülerim aynı kaldı ya da biraz büyüdü. Hocam buradan tekrar teşekkür ediyorum emekleriniz için.',
        person: 'Turgut',
        isVisible: false
      },
        {
          id: 7,
          images: '/images/eren.jpeg',
          content: 'Verdigim parayi sonuna kadar hakediyor kocluk icerisinde gercekten ilgilenildigimi hissettim gerek spor ici gerek gunluk hayattan abi-kardes iliskisindeki sorulari olsun cok samimi hissettirdi. Ayrica koclukta kazandigim bilgiler sayesinde kendi programimi yaratip takip edebilecek potansiyele sahip oldugumu dusunuyorum',
          person: 'Eren',
          isVisible: false
        },
      ]);
    
      const [visibleCards, setVisibleCards] = useState(cards.filter((card) => card.isVisible));
      const [showAll, setShowAll] = useState(false);
    
      const toggleCardVisibility = () => {
        setShowAll((prevState) => !prevState);
      };
    
      const getVisibleCards = () => {
        if (showAll) {
          return cards;
        } else {
          return visibleCards;
        }
      };

  return (
    <section className=' mt-5 d-grid  '>
                  
  

    <div className="container  ">
    <h2 className=" text-center mb-5 text-black" id='comment-more' >Danışan Yorumları</h2>

    <div className='w-100'>

      <div className="row"  data-aos="zoom-in" >
         
      {getVisibleCards().map((card) => (
                <div className="col-lg-6 col-md-6 mb-5" key={card.id}>
                <div className='card testimonial mx-auto'>
                               <div className='testimonial-card  card-body'>
                               <div className="circle-image">
                               <Image   src={card.images} alt="profile"  width={120} height={120}/>
                               </div>
                               <h5 className="card-title text-center  ">{card.person}</h5>
                                  <p className=" card-text text-center   ">{card.content}</p>
                               </div>
                               </div>
                         </div>
           ))}
            
              </div>

                <div className="text-center">
          <button onClick={toggleCardVisibility} className="btn-more">
              {showAll ? "Gizle" : "Tümünü Gör"}
            </button>   
             </div>
   </div>

</div>

                </section>
  )
}
export default Card






