import React, { useEffect, useState } from 'react'
import SaoJoseLogo from "../../assets/logosaojosenav.png"
import asset1 from "../../assets/01.png"
import asset2 from "../../assets/02.png"
import asset3 from "../../assets/03.png"
import asset4 from "../../assets/04.png"
import asset5 from "../../assets/05.png"










import NavBar from '../../components/NavBar/NavBar'
import "./Landing.css"
import { StrapiGet } from '../../configuration/strapiApi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomePageCarrossels } from '../../types/StrapiTypes'
import Carrossel from '../../components/Carrossel/Carrossel'
let baseUrl = import.meta.env.VITE_StrapiAdress





export default function Landing() {
  const [carrosselLanding, setCarroselLanding] = useState<any>({})
  const [banners, setBanners] = useState<HomePageCarrossels[]>([])


  useEffect(() => {
    StrapiGet("Homepage-Carrossels").then((res: any) => {
      setBanners(res.data)
      console.log(res.data)
    })

  }, [])
  console.log(banners)

  const url = `${import.meta.env.VITE_StrapiAdress}`;


  return (
    <>
      <NavBar />
      <div className="imageNews">
        <Carrossel>
          {banners.map((iten) => (
            <div className='imageNewsIten'>
              <a href={iten.Link || "#"} target={iten.Link?"_blank": ""}>
              <img src={`${url}${iten.ImagemVideo.formats.medium?.url}`} alt="Banner" width={"100%"} height={"100%"} style={{ flex: 1, objectFit: 'fill', height: "100%" }} />
              </a>
            </div>

          ))}
        </Carrossel>
      </div>
      <section className='section-apresentacao'>
        <h1>Granjas São José</h1>
        <div className='itens'>
          <div>
            <img src={asset1} alt="" width={"30%"} height={"auto"} />
            <h2>Sabor e qualidade</h2>
            <p>A nutrição do seu dia-a-dia</p>
          </div>
          <div>
            <img src={asset2} alt="" width={"30%"} height={"auto"} />
            <h2>Criação que faz a diferença
            </h2>
            <p>Mais espaço, mais saúde, mais sabor
            </p>
          </div>
          <div>
            <img src={asset3} alt="" width={"30%"} height={"auto"} />
            <h2>Mais que ovos
            </h2>
            <p>É dedicação e compromisso com você
            </p>
          </div>
          <div>
            <img src={asset4} alt="" width={"30%"} height={"auto"} />
            <h2>Bem-estar animal
            </h2>
            <p>Responsabilidade em cada etapa
            </p>
          </div>
          <div>
            <img src={asset5} alt="" width={"30%"} height={"auto"} />
            <h2>Do campo pra mesa
            </h2>
            <p>produção que reflete carinho e transparência.

            </p>
          </div>
        </div>
      </section>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus nulla sunt atque repudiandae, ipsa ut suscipit esse incidunt odit maiores itaque obcaecati perspiciatis? Aperiam inventore quisquam incidunt eaque. Facilis.
        Ab, consequuntur iste laudantium eius culpa quam labore soluta rem velit? Sunt nihil ipsum magnam dolorum mollitia odit reiciendis illum sint, ex, recusandae facilis soluta, quod similique culpa illo vero!
        Dolorum eaque dolorem perferendis eum earum labore in, explicabo molestias cupiditate quibusdam dicta, doloremque exercitationem nesciunt, enim voluptatum? Possimus incidunt ratione asperiores non ipsam totam, itaque placeat qui cum assumenda?
        Ipsa tempora excepturi mollitia nemo perspiciatis ab. Temporibus ratione aliquid cum eveniet explicabo! Ipsa saepe harum consequuntur maiores, veritatis dicta dolore laboriosam labore dolores, voluptates voluptate quae mollitia molestiae et.
        Nostrum itaque praesentium laboriosam, ducimus vero doloremque provident exercitationem recusandae officiis accusantium fuga suscipit culpa amet nesciunt alias quisquam nam, velit voluptatum maxime. Dicta, itaque aut. Neque officia odio perferendis.
        Illum, nam atque. Odio deserunt nesciunt dolores ab neque eum esse animi vel unde corrupti error harum, vitae exercitationem molestiae voluptatum rerum facere, reprehenderit perferendis voluptatem, magnam dolor nam? Dolores?
        Vel voluptates natus quam. Nobis ad ipsam enim unde dolores. Iusto maxime quo doloribus animi cumque? Optio nobis laboriosam delectus commodi sint suscipit ipsam. Explicabo consectetur cumque impedit dicta qui.
        Ipsum exercitationem vitae possimus aperiam consectetur iusto illum aspernatur, nesciunt reprehenderit obcaecati nobis tenetur enim quod in numquam perspiciatis quas, tempora aut voluptatem. Libero illo ex optio voluptatibus non laborum.
        Eveniet consectetur delectus rem, fugiat numquam laboriosam nulla ipsa cupiditate blanditiis sed nam quam impedit quasi nihil voluptatibus eos sapiente eius magni praesentium sunt ea. Voluptatum veniam vero consectetur amet.
        A ipsa tempora voluptate tenetur similique facere, quis ducimus magnam accusantium pariatur aut beatae quod necessitatibus. Voluptas aspernatur cum beatae optio nobis expedita numquam obcaecati ex, illum nulla et laborum.
        Repellat amet eos quo tempore, quod voluptatem sit praesentium adipisci inventore eius a eum, assumenda consectetur aliquid animi commodi, ratione quaerat laudantium porro consequatur hic omnis? Laborum suscipit consectetur placeat!
        Fugit mollitia molestias aut quaerat hic, pariatur id repudiandae quidem repellat omnis assumenda sequi magnam beatae adipisci sunt dolore recusandae voluptate odio quasi provident corporis. Cupiditate totam vero suscipit quo.
        Ipsum reprehenderit nihil aut, deserunt repellendus adipisci labore tempora doloremque esse, et tempore odio voluptatibus magnam! Dolor illum doloremque neque fugiat unde saepe similique. Nulla perferendis officiis nemo impedit natus!
        Aliquid, odio voluptates atque qui minima dolorem officia tenetur tempore perferendis sequi dolor enim, sapiente excepturi obcaecati. Nobis soluta odio minima laborum quidem, blanditiis deleniti optio ad voluptatibus similique voluptate!
        Quaerat distinctio voluptatem exercitationem neque aliquid accusantium sapiente ducimus ipsa vero debitis consectetur corrupti, labore adipisci facilis quam dolore itaque quis? Quaerat totam nihil amet culpa quo quasi a praesentium.
        Cumque, ducimus deleniti ex fuga laudantium modi et maiores id voluptate labore sunt hic. Delectus, a. Aut ducimus, earum sequi ipsa quibusdam, similique corrupti, incidunt id saepe minus reiciendis modi.
        Non neque blanditiis voluptatibus incidunt, libero voluptatem at ipsum placeat, eum veritatis voluptates! Deleniti ratione, blanditiis ut eius culpa repellat earum? Repudiandae enim sunt asperiores, neque magnam porro commodi in!
        Sed molestiae, voluptate incidunt illo, hic assumenda sapiente similique veritatis consequuntur reiciendis dolores rerum deleniti quas aspernatur architecto quibusdam tempora cum ipsa unde. Ad nobis voluptatibus inventore hic sapiente corporis.
        Possimus placeat voluptatibus, modi amet dolor labore nostrum nesciunt, repellat, voluptates velit illum. Facilis sapiente eligendi quae soluta facere accusantium rerum enim? Deleniti sequi quasi, atque iusto cum perspiciatis ab!
        Vitae impedit accusantium repellat eaque cupiditate eveniet cumque! Delectus repellendus dicta consectetur! Quaerat eius voluptatibus minima! Sunt dolore temporibus sit, iusto culpa maxime, rerum mollitia incidunt, officia nobis doloremque ea?
        Quam quaerat explicabo eligendi placeat deserunt quas, eum optio aliquam veritatis ipsam a inventore, nemo sequi! Eligendi magnam maiores debitis vel quisquam autem sunt, totam delectus hic vitae quibusdam obcaecati.
        Explicabo cum sapiente aliquid quaerat dolorem tenetur, illum architecto perspiciatis ipsum voluptatibus, ad porro consequuntur cupiditate nam adipisci. Ipsum nesciunt quaerat sed minus provident corrupti. Consequatur impedit enim quis? Harum!
        Quam, animi ipsum delectus corporis minima suscipit nobis eaque inventore. Laudantium doloremque mollitia facere expedita commodi est odio, animi temporibus! Facere sequi veritatis incidunt illum pariatur officiis corrupti. Fugiat, dignissimos.
        Neque, rem dolorem? Illum tenetur autem sit? Aperiam iste maxime vel tenetur animi voluptatum maiores vitae, temporibus nesciunt impedit provident. Molestias, magnam corrupti eligendi architecto libero a qui voluptatibus eveniet!
        Modi praesentium iusto molestiae optio ex ab aperiam, debitis temporibus laudantium neque perspiciatis incidunt minus eius consectetur, earum corrupti. Aspernatur alias praesentium eos magnam. Deserunt incidunt tempora ratione magni non?
        Sit, atque dignissimos. Maiores esse voluptatum voluptas cum, magni magnam adipisci asperiores libero, harum blanditiis natus veniam id sint modi recusandae minus eum molestias iusto. Sequi numquam impedit quos porro.
        Inventore unde earum eaque quia! Odio alias veniam, quae veritatis architecto corrupti dolorem animi, blanditiis sint, consequuntur eveniet voluptate nesciunt quas quis delectus facere dolore adipisci aliquid magni quia voluptatem!
        Ratione, inventore assumenda nam sed accusamus asperiores! Laborum perferendis optio fugiat amet dolores eius praesentium enim est, cumque, quidem repellat accusantium, nam quos. Delectus culpa unde, at mollitia ex iure!
        Veritatis aspernatur perspiciatis, similique iure facere quam repellendus corrupti eos rerum delectus adipisci ab sequi, vero consectetur, soluta voluptate repudiandae eius nemo velit. Nisi eligendi delectus qui possimus aperiam veniam!
        Maiores iure et accusamus voluptatum aspernatur repellendus magni praesentium esse, porro facere dolores consequuntur ipsa itaque impedit, rerum repellat delectus aliquid provident, excepturi placeat fuga veritatis blanditiis. Ratione, assumenda quia!
        Quas recusandae nesciunt minima et! Dolorum nam ea ex quam ipsam eum voluptatem sapiente excepturi, officia quia, praesentium beatae expedita! Nihil assumenda quod ullam, possimus iure accusantium illum consectetur pariatur.
        Ipsum vel dolores, ducimus doloribus minima distinctio pariatur cum enim asperiores iste! Laudantium, exercitationem voluptatum. Id facilis mollitia quos delectus deleniti fugit! In quam dicta eaque neque sit repudiandae quae.
        Illum tempore eveniet, voluptates odio voluptas sapiente, mollitia cupiditate autem ex fugiat neque provident magni laboriosam a accusamus in, nihil est praesentium error esse adipisci. Debitis ad vitae praesentium a!
        Ut molestias, explicabo enim optio voluptatem odio, nulla modi minima nostrum alias quae similique pariatur, quos doloribus ducimus accusantium ipsa magnam? Labore voluptas rerum voluptatem iste blanditiis nostrum culpa non!
        Voluptatibus alias recusandae accusamus beatae libero, ullam eos tenetur dolor inventore aliquid animi et exercitationem qui, veritatis velit placeat? Molestiae quibusdam amet ad dolor necessitatibus ullam, est esse fugiat consequuntur!
        Temporibus laboriosam voluptates ea omnis id! Similique laborum dolore at asperiores, illo, distinctio commodi vero praesentium magnam eligendi nesciunt repudiandae iste dolor aspernatur quam porro, perferendis atque inventore iusto. Nesciunt.
        In fugit, odio architecto odit fuga ex vitae eius, quaerat quisquam corporis explicabo culpa quis repudiandae animi iure eum tempore nostrum quae aliquam ipsum provident voluptates suscipit! Corrupti, est fugit.
        Fugiat vero nihil nisi repellendus, exercitationem nesciunt magnam aliquam, et earum ab mollitia numquam est! Odit repudiandae unde doloribus iusto quasi quas enim, soluta dicta inventore iste, amet numquam voluptatibus?
        Nesciunt laudantium vel, pariatur assumenda officiis iste est illum, fugit possimus consectetur ex natus enim ipsam? Modi eius, culpa minus praesentium iusto debitis aliquid nemo molestias facilis vel veniam nulla!
        Illum eaque saepe dicta illo cupiditate dolorum fuga ab, iusto aliquam quos, minus doloremque earum eveniet totam facilis possimus officiis laudantium suscipit commodi ex consequatur? Et consequuntur fugit officia quos!
        Molestiae iste doloremque, provident veritatis hic dolor nemo nam illo vero suscipit ipsam itaque rem. Culpa ea tenetur incidunt rem, ipsa nihil autem explicabo reiciendis suscipit exercitationem magni vitae nemo?
        Quia similique repellendus laborum est. Quasi nesciunt laborum accusamus. Repellendus, dolores aut, maiores ipsa adipisci culpa accusamus alias esse excepturi numquam veniam nisi minus velit perferendis, corrupti odio temporibus placeat!
        Debitis rerum aut impedit officia eos vitae vel aspernatur. Eos, porro fuga? Officiis totam, esse debitis repellendus pariatur vero quaerat modi doloremque nulla est numquam veritatis explicabo corrupti hic saepe?
        Animi consequatur, dicta necessitatibus reiciendis quos, minus iure itaque nulla dolore facere maxime ad beatae expedita quo fuga magnam nam nesciunt? Nobis mollitia, sunt eum provident quisquam iste delectus repudiandae!
        Harum rerum aliquam eos, nemo tempora dolores eius placeat nisi beatae qui esse expedita molestiae itaque iste repudiandae? Asperiores laudantium ipsum alias quod eos sit. Quam debitis ratione iste praesentium?
        Nostrum, officiis in? Eligendi voluptatibus iure assumenda eos voluptates sapiente eaque nemo tempore, enim quis deserunt inventore ipsa repellendus. Blanditiis voluptate unde commodi officia fuga ipsa explicabo modi non a.
        Impedit quod, sed quae sequi dolores maxime totam nemo blanditiis, esse reiciendis et quas eligendi rerum tempora incidunt optio animi odit obcaecati repellendus, quaerat praesentium tenetur voluptates perspiciatis! Asperiores, delectus?
        Dolore similique excepturi corrupti in quae quibusdam aspernatur, ducimus distinctio, porro iste expedita ipsa officiis tempora sapiente voluptates fugiat ullam nemo praesentium! Neque harum distinctio, odio velit excepturi eveniet incidunt.
        Ducimus labore reiciendis illo recusandae omnis. Ipsam quam fugit quas eius laudantium reprehenderit eaque cupiditate illum praesentium laboriosam provident quidem natus, dolorum et suscipit sapiente ex velit id tempore nulla?
        Quos magni tenetur porro odio cum cupiditate aliquid. Consequatur aliquid at porro culpa fuga illum, ducimus ad non unde inventore quas dolorem suscipit aliquam minima! Suscipit quibusdam consectetur quasi facere!
        Ratione repudiandae ut error odio, officia earum voluptas in ipsum explicabo, omnis natus. Nulla veritatis inventore suscipit, molestias voluptatibus eum nobis nihil iusto tenetur amet hic ex natus qui delectus.
        Ab cupiditate dolor cum aut voluptas. Perspiciatis error, iure voluptate autem sapiente, aperiam reprehenderit dolor ullam eos unde ea eligendi obcaecati tenetur delectus. Iste incidunt impedit harum nemo, nisi beatae.
        Alias quod nam exercitationem nostrum nobis facilis consequatur doloremque aperiam asperiores nesciunt ex hic sequi eligendi veniam possimus nulla voluptatibus repudiandae error magni, dolore deleniti. Repellat placeat eum quidem modi.
        Iste corporis nulla expedita suscipit quaerat atque officiis aliquam odio ad placeat facere incidunt, culpa dolore provident a? Deserunt consequuntur porro ipsam quibusdam sit sint sequi assumenda accusantium ex atque?
        Atque quaerat a minima laudantium soluta sapiente quisquam debitis deserunt, cupiditate, non fugiat reprehenderit optio ipsam sed impedit repellat. Quasi labore recusandae odio architecto ipsum quis laboriosam harum aliquam expedita!
        Quam laborum aliquam necessitatibus, fuga nulla perferendis dignissimos odit debitis, totam id temporibus maxime quia quaerat, est doloremque laboriosam atque nihil neque voluptates consequuntur! Culpa architecto id adipisci sunt illo.
        Sapiente consequuntur numquam vel deserunt perferendis amet officiis nesciunt esse iure facere tenetur, quibusdam rem aut molestiae iusto dolore corrupti totam, suscipit fuga eligendi qui eaque repudiandae mollitia? Adipisci, nostrum.
        Labore a veritatis odio ad fugit unde, iste quisquam aut assumenda, similique provident! Aliquid harum esse voluptate quibusdam est eaque inventore ducimus natus illum cum quia, accusamus, numquam modi deleniti.
        Dolores pariatur molestiae veniam. Officiis placeat, possimus maxime labore architecto dolore voluptatem dicta tenetur praesentium! Quos odit quod vel voluptatum, at repellat suscipit delectus dolores natus, vero reprehenderit laudantium aliquam.
        Aliquid rerum corrupti, ex eveniet molestias labore necessitatibus quae, voluptates nihil recusandae cumque dolores ut unde doloribus nostrum reiciendis harum eaque temporibus nisi veniam voluptatibus? Necessitatibus porro debitis quas impedit?
        Numquam obcaecati libero vel natus, totam corporis? Molestiae, odio amet consequuntur asperiores vel provident ratione harum error cupiditate est facilis iure vero temporibus necessitatibus voluptates rerum adipisci corporis repellat debitis!
        Sit quae placeat debitis quo ea quos mollitia. Nihil quisquam cum suscipit maxime quas. Fugiat recusandae dolorum inventore necessitatibus voluptatum alias nisi consequuntur, saepe nam qui sapiente quos odio dolores.
        Corporis saepe nam reiciendis consequuntur reprehenderit quia ut hic, possimus, quasi modi, facere asperiores veritatis? Repudiandae, mollitia. Quaerat voluptas, praesentium porro rem unde commodi debitis ut exercitationem, laborum corrupti quas?
        Eius vitae atque quo sint? Esse quasi pariatur dicta reiciendis quis. Vitae quibusdam dicta numquam asperiores iste, reprehenderit architecto nostrum perspiciatis soluta cupiditate corporis velit placeat debitis dolores nobis libero.
        Perferendis voluptate, consequuntur doloribus officiis asperiores voluptatum saepe omnis obcaecati quo! Porro, deleniti non facilis alias laboriosam, modi vero eaque blanditiis ipsa quo nam et natus, atque odio laudantium voluptates!
        Beatae molestias doloremque libero ipsum, aperiam perspiciatis velit eaque ullam neque, error, nobis dolore. Enim nemo necessitatibus modi. Nam officiis ducimus quibusdam hic rem reiciendis autem, omnis neque atque cum!
        Aliquam ab, dicta qui consequatur molestias repellat a sit nostrum ducimus laboriosam sequi consectetur eaque ut inventore maiores deleniti quo exercitationem sint architecto beatae est eveniet modi ad. Explicabo, tempora!
        Ab recusandae aliquam soluta fugiat ipsum beatae quas dicta officia eveniet adipisci culpa asperiores accusamus, illo dolorum ducimus repellendus quis aliquid blanditiis, vero, quo unde officiis. Nulla officia quisquam cumque!
        Totam sed officiis laboriosam recusandae assumenda reiciendis ea eligendi, voluptatibus voluptas natus ratione doloremque eum aperiam incidunt consequuntur quo veniam minima aut quaerat deserunt optio? Optio est repudiandae culpa eaque!
        Minus amet optio voluptas eius eaque? Tenetur iure voluptatum laudantium, enim sequi asperiores autem magnam aliquid quisquam accusantium delectus aliquam dolorum ex impedit exercitationem! In assumenda atque consequatur voluptates culpa?
        Assumenda tenetur sunt nemo incidunt aliquam quas eos dicta ut harum distinctio commodi illo magnam error libero laboriosam iste expedita accusantium repellendus, praesentium atque quibusdam consequatur nostrum mollitia! Cumque, ad?
        Impedit numquam exercitationem, deserunt consequuntur illum eos iste iusto nesciunt ratione aliquam error ad assumenda eaque suscipit quas similique temporibus beatae perferendis, quia consequatur itaque accusantium. Impedit distinctio eligendi aliquam!
        Nisi facere temporibus dolorum quae, numquam harum sint reiciendis et at vel veritatis sed excepturi culpa aperiam nesciunt? Amet laudantium numquam nesciunt quam saepe reprehenderit accusantium sint porro voluptatum nemo!
        Esse sapiente accusantium corrupti qui voluptatem voluptas maiores quidem, deserunt in officia incidunt alias reprehenderit est provident quam assumenda tempore, illum quasi error! Reiciendis molestiae cupiditate aperiam, praesentium assumenda nam!
        Accusantium maiores, mollitia saepe inventore ipsum numquam delectus asperiores illum voluptates culpa nesciunt dicta veniam soluta aperiam, iste itaque. Adipisci velit voluptatum odit possimus reiciendis autem consectetur ex, totam sapiente!
        Nostrum velit perferendis, ratione magni repellat aliquam aut, cum iure molestiae natus ducimus? Error autem iste quia atque voluptates, porro nemo tempore doloremque ratione ducimus ipsum beatae dolor quisquam placeat.
        Nesciunt magni perferendis sequi officia eius temporibus provident cupiditate aliquam dolor ex nam vero, quae vel sint possimus maxime quaerat modi quos rem aliquid. Officia expedita tempora quaerat fugiat libero.
        Voluptates modi atque ipsum eaque eveniet temporibus porro impedit fugit doloribus, natus unde distinctio culpa at hic sed reprehenderit autem deserunt vero eligendi, explicabo voluptatum nemo ullam? Labore, unde recusandae?
        Minus, iste? A nam odit tempora accusamus quos beatae cumque illo eius dolores perspiciatis nesciunt deserunt nemo obcaecati minima animi magnam officiis eaque, commodi quaerat debitis optio voluptatem corporis iste.
        Nemo eveniet adipisci ipsam similique facilis omnis ipsa unde at? Excepturi quasi accusamus reprehenderit, illo, enim facilis sunt, voluptates ex laudantium in mollitia similique et. Sapiente cumque atque aliquam id?
        Cumque minima maiores mollitia inventore ratione? Soluta dolor porro, saepe atque eaque non iste nostrum nulla at libero ratione doloremque enim eligendi doloribus aliquam rerum ipsa id? Ipsa, ullam veritatis.
        Eligendi, architecto repellat, est suscipit aliquam laboriosam dolore ipsam similique aut voluptatibus nemo ab quas. Beatae modi voluptatibus eligendi laudantium ut quam doloremque itaque, laborum impedit a! Atque, corrupti dicta.
        Non veniam eius culpa, laudantium aspernatur officiis facere? Ab, inventore nobis repellat earum maxime corporis voluptatibus quam porro nam? Mollitia totam quaerat maxime alias ex animi deserunt sint, possimus facere.
        Dolor, in earum? Doloremque saepe ipsam eum esse placeat repudiandae deleniti accusantium quis nemo blanditiis vero error nam natus consequuntur aliquam officia, beatae non temporibus recusandae quam? Dolorum, natus saepe!
        Error debitis eum qui, consectetur harum blanditiis earum mollitia aspernatur. Nesciunt perferendis delectus commodi autem voluptatem quaerat dolores dicta illo numquam maiores tempore quo culpa asperiores quidem, provident deserunt ratione!
        Modi deserunt blanditiis esse quos, tenetur dolores! Totam reprehenderit modi optio earum nobis vel dolor laudantium enim repudiandae nulla accusamus sapiente itaque perferendis, hic doloremque odit mollitia quod quo ipsum!
        Quia et eos aliquam totam veritatis. Excepturi qui nam quidem voluptatibus numquam doloribus asperiores odio consequuntur omnis impedit dicta incidunt fugit architecto maxime explicabo optio exercitationem, vel aut tempore doloremque?
        Minus magni debitis accusamus neque dicta vel cumque? Illo quod numquam, atque debitis quo eius cupiditate dolores commodi omnis iure illum voluptate optio eos vitae voluptatibus saepe, culpa reprehenderit reiciendis.
        Officia minus enim in pariatur tempora, commodi at nesciunt odio ipsa labore, blanditiis laborum, consectetur quam consequatur rerum molestias veritatis alias? Doloribus, perferendis debitis ipsam tempora fugit inventore porro vitae!
        Expedita, cupiditate amet. Laborum veniam perspiciatis quasi alias cum minus libero quas veritatis vel debitis, at ipsum enim voluptatum eligendi, cupiditate tempore consequatur earum in blanditiis asperiores illum excepturi quaerat?
        Suscipit, corrupti deleniti similique laboriosam nihil tempora cupiditate libero perferendis natus quo possimus sapiente itaque distinctio quaerat quos nobis explicabo quisquam voluptatem? Saepe, accusamus eligendi doloremque officia aperiam et laudantium.
        Atque adipisci eius sit provident quis placeat sunt nemo voluptas voluptate cum dolorum qui blanditiis, ex veritatis. Corrupti non eaque voluptates quam pariatur. Voluptatum quae numquam suscipit possimus dolor deleniti?
        Illum reprehenderit, recusandae quos adipisci non voluptates officia odio deleniti similique alias. Velit nemo natus veritatis. Vel placeat voluptatem eos assumenda, quasi dicta perferendis, ipsum suscipit labore molestiae eius commodi?
        Velit doloremque molestiae natus, perferendis deserunt necessitatibus, officiis ipsa, nobis harum eveniet a non tempora voluptatum distinctio repudiandae aut alias fugit dolor cupiditate cum nemo quas. Dolore optio nam sed!
        Eaque, consectetur. Recusandae, tempore repellat molestiae, fugit iusto vitae soluta maiores sint distinctio quis natus veniam! Eaque possimus facilis tempora accusamus obcaecati, fugiat porro. Distinctio nisi sed dolorum aliquam animi!
        Quo recusandae vitae ratione, velit error nobis nostrum magnam dignissimos ex, veniam repudiandae sit eius, voluptas nam ut impedit totam ad adipisci. Nesciunt nobis sequi consequuntur nihil magni error officiis.
        Asperiores quaerat vero tempora, rerum praesentium quos error illo dolorum, quisquam omnis delectus nihil vitae atque a aut iure quidem suscipit recusandae dignissimos, consectetur soluta ut amet. Ex, vero omnis.
        Corrupti, eligendi. In est maxime distinctio commodi sint quia sit corrupti mollitia sequi, perspiciatis, fuga beatae. Libero molestiae dolorum facilis perferendis magnam excepturi tempore nisi porro itaque adipisci, sint deserunt.
        Neque maiores commodi, ratione nulla expedita ipsa sequi recusandae atque libero ad deserunt doloremque aperiam tenetur quod necessitatibus repudiandae molestias voluptatibus veritatis, magnam quis, perspiciatis dolorem at ex? Doloribus, harum.
        Reiciendis exercitationem laboriosam facere vel perferendis aliquam ad. Quis aliquam odit magnam, dolores nihil omnis deserunt veniam necessitatibus est, sed possimus voluptas dolore sint temporibus cum ducimus impedit eum nemo.
      </div>


    </>

  )
}
