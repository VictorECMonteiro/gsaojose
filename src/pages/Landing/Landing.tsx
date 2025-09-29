import { useEffect, useState } from 'react'
import SaoJoseLogo from "../../assets/logosaojosenav.png"
import NavBar from '../../components/NavBar/NavBar'
import "./Landing.css"
import { StrapiGet } from '../../configuration/strapiApi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomePageCarrossels } from '../../types/StrapiTypes'
import paisagem1Png from "../../assets/apresentacaoImg/paisagem1.png"
import Carrossel from '../../components/Carrossel/Carrossel'
// const baseUrl = import.meta.env.VITE_StrapiAdress


//Não excluir estas 2 linhas, elas garantem que nao de erro no build do VITE
console.log(SaoJoseLogo)
console.log(paisagem1Png)

export default function Landing() {
  const [banners, setBanners] = useState<HomePageCarrossels[]>([])


  useEffect(() => {
    StrapiGet("homepage-carrossels").then((res: any) => {
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

        {/* <img src={paisagem1Png} alt="Banner" width={"100%"} height={"100%"} style={{flex: 1, objectFit: 'fill',height: "100%"}}/> */}
        
        <Carrossel>
          {banners.map((iten) => (
            <div className='imageNewsIten' key={iten.documentId}>
              <img src={`${url}${iten.ImagemVideo.url}`} alt="Banner" width={"100%"} height={"auto"} style={{objectFit: 'contain'}}/>
            </div>
          ))}
        </Carrossel>
      </div>
      <h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit distinctio est corporis modi, aperiam repudiandae totam quisquam quis veritatis vero ullam consequatur dolor, quod laudantium eaque perspiciatis culpa ipsum soluta.
        Deserunt sapiente inventore at nihil minima sint excepturi neque repellendus voluptates quos, similique nesciunt unde magni magnam aut velit maxime ipsa, consequuntur veniam, odit eum necessitatibus! Quis quam nulla non.
        Fugit recusandae dolores aliquam temporibus odio eveniet earum voluptate incidunt laboriosam sed quasi quae nostrum sapiente labore repudiandae laudantium fugiat nobis non itaque qui explicabo dicta, provident vitae. Itaque, id?
        Eius distinctio odio obcaecati aperiam, nobis officiis, quasi cum at quae libero iusto laborum architecto ut quis in. Explicabo perspiciatis molestiae odit, tempore ea mollitia eligendi rem dolores nisi adipisci?
        Eum modi nulla vero sit voluptates aliquam quibusdam, beatae, veritatis, quas odit facere nam voluptas nihil! Aliquam debitis exercitationem ducimus expedita! Nam deleniti tempore saepe sapiente. Culpa beatae velit cum.
        Animi corporis praesentium eaque delectus ea reprehenderit. Ipsum tenetur laboriosam impedit dolore exercitationem minus fugiat nisi ad vitae, cumque necessitatibus sit adipisci officiis iste, magnam cum. Aperiam tempora modi harum!
        Aperiam porro ipsa, molestiae repellat fugiat earum inventore tempora quas odio aspernatur deserunt veniam! Saepe nisi doloremque laboriosam non modi nulla unde ea. Ea ab similique earum fugiat ut magnam!
        Enim eligendi inventore explicabo expedita recusandae at aperiam quos, nostrum ut natus id saepe aliquid mollitia minima magni, voluptatem ipsum quae a fuga repellat quisquam officia asperiores exercitationem architecto! Aut!
        Minus corrupti quia laudantium aperiam fugit expedita aliquam, beatae corporis esse dolores quibusdam quaerat praesentium error optio sint eum doloribus aut delectus totam facere maiores nostrum soluta unde labore. Laborum?
        Blanditiis sapiente eligendi enim? Nesciunt similique quia vel id officiis nobis, consequatur sapiente rerum expedita? Provident itaque doloribus odit? Voluptatum expedita, modi beatae tenetur quis sint animi consequuntur ipsam omnis.
        Repellat consequatur perspiciatis, exercitationem, minus tempora obcaecati delectus numquam optio voluptatem placeat officiis assumenda et dolorum eos dolores autem voluptate maiores incidunt impedit quae consequuntur, nulla debitis facilis dignissimos! Voluptatem!
        Sed laborum illo quis veritatis quisquam enim voluptatibus atque mollitia consequuntur itaque dolor, pariatur dolores suscipit est reiciendis, tenetur inventore autem iusto culpa iure cumque placeat nobis illum? Accusantium, quisquam!
        In labore suscipit quis dolorem unde reiciendis. Odit eos repellat eligendi id atque, eaque a nemo reprehenderit, non neque sint maxime officiis necessitatibus sequi corrupti numquam minima veritatis beatae? Magni.
        Quibusdam totam praesentium quaerat rerum repellendus, voluptatum porro voluptas placeat delectus dignissimos amet dolorem necessitatibus ipsa culpa, optio, est eius facere! Consequatur voluptas ab est a ratione fugit blanditiis exercitationem!
        Saepe facere eligendi suscipit adipisci, impedit nihil dolor corrupti quos ab? Corporis recusandae aspernatur facilis iusto, qui nulla at perferendis neque? Ullam ipsa tempora culpa, cum nulla obcaecati adipisci reprehenderit?
        Quisquam eaque cupiditate consequatur? Provident, facilis ullam officiis ipsa dolorum nihil, sed optio ex a minus ratione quod assumenda obcaecati rerum suscipit debitis est mollitia minima, vero odit sint consectetur.
        Quaerat, ea? Molestias quisquam natus recusandae, corporis ullam delectus soluta dolorum odio illo, fugiat alias repellendus vel deleniti saepe. Fuga pariatur dolore libero minus enim fugiat velit vitae perferendis delectus.
        Amet omnis maiores nisi odio, accusantium a vero! Suscipit, labore non temporibus quos quia iure laudantium odio optio officia pariatur voluptate, voluptatem doloremque ex iste inventore nulla blanditiis voluptatibus sed?
        Rem odit doloribus error repudiandae nesciunt repellat nostrum ea culpa, libero doloremque commodi omnis cupiditate aut, maiores amet quis sapiente qui. Dolor adipisci sequi, minus voluptatem explicabo cupiditate velit reiciendis?
        Nulla officiis culpa eaque temporibus. Sed qui sint voluptates suscipit, perspiciatis enim voluptatum adipisci earum eum corrupti ad ipsam laborum facere temporibus unde dolorum tempora quod laboriosam rem sapiente. Reprehenderit?
        Voluptates quis cum vitae dolor ea, ducimus vero minima quos, eos ipsum odit facilis ad totam incidunt. Unde quod odit temporibus laudantium commodi quidem ullam adipisci incidunt, eligendi rem voluptas.
        Quas repellat asperiores magnam earum aspernatur quo in dolor facilis quis neque corrupti, explicabo quaerat a accusamus id tenetur dignissimos sequi illo enim officiis nam porro! Animi nihil aspernatur earum!
        Accusantium quod nisi iure reiciendis modi odio aut eum cumque, impedit dolore provident perferendis maiores architecto. Reiciendis, aspernatur velit quas et quae, animi cupiditate ut sunt maiores omnis consectetur expedita.
        Assumenda quia, illum deleniti cumque, nobis excepturi ea id pariatur facere incidunt quasi rem consequuntur error corrupti iusto odio? Eaque obcaecati praesentium nostrum rem eveniet velit porro nisi aliquam magni.
        Reprehenderit non delectus rem molestiae recusandae nisi natus corrupti vitae distinctio veniam dolorem perferendis officia voluptatem quae autem quo eos, maiores, illum blanditiis quod quam. Nesciunt quibusdam vero eaque odio?
        Modi deleniti sapiente nobis illum consectetur vero odio non! Accusamus, minus rerum? Alias, consequuntur aliquid! Molestiae minus animi illum incidunt, soluta hic sit necessitatibus fugit, consectetur enim nam ducimus odio?
        Ad expedita sequi doloremque quis aut necessitatibus hic iure! Cum eligendi eaque quo saepe iste velit doloribus! Quas quasi exercitationem, est doloremque modi ipsam error, doloribus iusto culpa tempora quibusdam.
        Rerum placeat neque harum, voluptas, quidem dignissimos tempora ipsam, exercitationem deserunt eligendi modi. Quia sunt laudantium quasi odio. Hic consectetur, eum excepturi similique possimus perferendis repellendus numquam autem sapiente neque.
        Doloremque tempore debitis eligendi enim suscipit ducimus laudantium eos, totam, dicta sed quos. Eveniet numquam aut fugit facilis asperiores necessitatibus illo, architecto magnam sint nostrum ducimus similique esse unde repellendus.
        Nisi mollitia reiciendis quaerat libero voluptatibus minus qui hic. Quisquam et nisi nesciunt accusantium amet perspiciatis illum laudantium atque beatae cumque laboriosam quibusdam autem sunt excepturi totam, quod hic reiciendis!
        Repellat vero, ex illo perspiciatis consequuntur tempore laudantium? Et architecto rem sed atque, ex cupiditate quod eligendi. Illum, facilis aperiam ipsa recusandae provident, sapiente aspernatur necessitatibus nulla quas quam quo!
        In itaque odio sed dicta libero minima esse, laborum sequi inventore, similique dignissimos iste quaerat est adipisci neque suscipit consectetur eum rerum voluptatum officia ab sunt quo? Cumque, exercitationem expedita.
        Aut deserunt similique natus veritatis odit consectetur maiores consequatur quia perferendis! Fuga debitis error ea quibusdam consequuntur id laborum, assumenda quidem sint aspernatur facere nihil dicta neque porro labore accusamus.
        Similique esse veritatis ad quam aliquid. Mollitia, quod eius. Nam, architecto sunt fuga, culpa consectetur dolores nisi voluptatem fugit mollitia provident quae numquam earum voluptates aliquam itaque magnam veniam dolorum.
        Soluta expedita veniam, magni numquam officia, est accusamus cum ipsa mollitia nostrum perferendis, sunt culpa voluptatibus quidem quas tempore maiores. Tempore sed maiores fugiat qui sapiente labore officiis voluptates molestiae?
        Quas velit consectetur facilis ad nam aut consequatur similique rem quam delectus veniam molestiae, quos in dolor recusandae voluptatem, eligendi magnam alias culpa, perspiciatis minima ipsum ab illo. Fuga, cumque.
        Ipsa, omnis numquam magni vitae asperiores, dicta ut vero fuga quia ex quam, ad explicabo voluptates. Explicabo ad consequatur expedita, alias saepe, quibusdam laborum atque nobis dolore labore earum laboriosam.
        Ducimus aperiam nobis dolor optio magnam reiciendis atque nihil cumque? Totam, cupiditate, nobis aliquam voluptatem temporibus quae ullam fuga quibusdam sapiente labore asperiores veritatis exercitationem sed sit doloribus quis vel.
        Asperiores ipsum sequi, placeat architecto sunt eveniet voluptatum praesentium dignissimos quisquam nihil recusandae eligendi! Dolor vitae nisi voluptatem sit quo saepe maxime veritatis reiciendis praesentium, non aspernatur dicta repellat nobis.
        Nulla molestiae architecto nihil similique, accusantium corporis est! Consectetur dolorem corporis cupiditate voluptate accusamus magni quae, perferendis, rem pariatur eveniet consequuntur et esse qui veritatis! Harum veritatis obcaecati dolorem iste!
        Accusantium, rem ut quibusdam repellat eum totam similique nam ipsam omnis at molestiae quas quisquam laudantium voluptatibus quam voluptas sequi atque culpa reiciendis nemo est temporibus. Laudantium quidem provident maxime.
        Ipsam libero velit iste praesentium porro culpa, eligendi beatae, ducimus cupiditate voluptatum dolorem, maxime voluptates laboriosam eum consectetur. Distinctio quod dolore ducimus ipsam ad vero enim corporis reprehenderit odit nesciunt.
        Ipsum sunt, perferendis magni cum eaque fugiat veritatis provident alias eum ipsam molestiae, unde fuga earum beatae obcaecati quibusdam aperiam omnis maxime illum vitae nam. Mollitia officiis qui unde iure.
        Dolor soluta illum praesentium laudantium, quam maxime tenetur fugiat, vero adipisci magni illo sit eius quis. Dolorem, debitis rerum numquam architecto maiores alias. Quidem odio quisquam ducimus dolorem voluptatum. Hic!
        Inventore est ratione quas quisquam veniam optio, laborum culpa tempora quaerat iusto repellendus pariatur! Explicabo, corrupti et, suscipit sed quae veniam non nulla obcaecati minus doloribus eaque, consequatur quisquam nihil?
        Provident, ipsam iste. Veritatis, unde. Eveniet nisi, quis facilis consectetur earum ipsam nam aperiam. Iure, dolorem aliquam. Blanditiis corporis facilis molestiae non expedita magni repudiandae? Ipsum, soluta. Accusamus, debitis placeat?
        Labore odit porro fugit sit hic neque consequatur tenetur consectetur accusantium assumenda magnam aspernatur nisi eligendi animi deleniti, ipsum, rerum impedit? Aspernatur necessitatibus corporis voluptatibus asperiores placeat excepturi magnam veritatis!
        Tempore accusamus fugit natus a vero magnam voluptatibus, odit molestiae autem labore impedit blanditiis facere molestias explicabo, vitae voluptas cupiditate culpa, eaque sint. Laboriosam dignissimos eius dolor sed, ipsam eveniet.
        Cumque doloremque, nesciunt ut eligendi repellat dolore aut animi alias inventore provident voluptates non porro expedita autem eaque vitae impedit. Eligendi cum sequi possimus culpa ullam dicta vel autem similique.
        Iure quibusdam optio ipsam quam, unde laboriosam modi odio! Architecto, nemo quos. Dolor iusto nisi mollitia qui sunt necessitatibus aliquid culpa id. Officiis nisi ipsam itaque dolorum quibusdam et nam.
        Quia debitis, atque eum doloribus quasi sequi? Dignissimos, similique cumque quibusdam repudiandae quidem itaque excepturi accusamus quos rerum eveniet vero magnam necessitatibus? Libero ab excepturi deserunt officiis, minus animi pariatur.
        Officiis incidunt quos, maiores ad velit, dolorem quibusdam excepturi esse distinctio ullam a veniam quis ab! Est voluptatum hic doloremque quo laboriosam iusto quidem aperiam vero quod ut, obcaecati rerum.
        Distinctio a assumenda excepturi nulla reprehenderit blanditiis dolorum earum error molestias saepe eaque qui quaerat quis, officiis, ullam voluptatibus ipsum, deleniti aspernatur doloribus natus necessitatibus. Sequi explicabo dignissimos beatae dolores.
        Ex laborum ipsam at mollitia eum cumque laboriosam, explicabo deserunt dolorum aliquam veniam iure nesciunt accusantium quod, molestiae voluptate expedita recusandae suscipit repudiandae architecto nostrum, exercitationem debitis ad? Tempore, amet?
        Assumenda sint qui aliquid dolores minus similique praesentium ea cumque est expedita excepturi enim voluptate autem delectus, dolore et dolorem vitae ex dolor iure at eligendi eius minima! Officia, deleniti!
        Repudiandae, praesentium consectetur iure error temporibus nisi a atque, quasi, distinctio veniam dolorem suscipit. Assumenda suscipit voluptas nihil, dignissimos corporis cumque iure cum obcaecati soluta quisquam aliquam! Dolores, culpa tenetur.
        Tempore quaerat perferendis corporis enim voluptates, dicta deleniti, et doloribus modi voluptatibus placeat. Unde, accusamus. Tenetur sint illo ab ducimus itaque, aut ipsum blanditiis fugiat eos, quasi beatae quis officia!
        Quaerat animi commodi esse ab, officia rerum voluptatibus sint beatae neque nisi minima sapiente ducimus libero quo, deserunt obcaecati exercitationem voluptatum itaque voluptatem minus facilis accusamus molestias doloremque vel. Tempora!
        Similique corporis perferendis tenetur blanditiis aperiam fugit quasi. Ipsum architecto nam commodi sint odit unde recusandae sequi excepturi eum, saepe est natus minima exercitationem quisquam vel minus soluta repellat dicta.
        Maxime facere reiciendis perspiciatis neque quaerat quis eos pariatur vel natus cumque, incidunt optio delectus. Quam temporibus dicta nam ipsam dolor veniam incidunt non? Culpa veritatis expedita a incidunt praesentium?
        Quaerat aspernatur nulla illum. Pariatur illum a placeat veniam provident dicta, quaerat ipsum esse quidem facilis consequuntur officia recusandae inventore obcaecati eligendi possimus incidunt enim sunt qui. Exercitationem, esse consequatur!
        Dignissimos alias odit ipsum eaque iure qui pariatur, ducimus doloribus praesentium dolorem laudantium quia a nobis quidem enim voluptatem corrupti eveniet accusantium nesciunt error? Temporibus atque praesentium odit nisi soluta.
        Rerum eaque quidem alias nisi doloribus inventore, assumenda repellat dolor hic, deserunt quod incidunt sunt veritatis repudiandae nobis explicabo atque, rem quibusdam modi! Adipisci amet, tenetur repellat voluptatum qui maiores!
        Esse, saepe similique? Fugit fuga quas, porro consequatur cupiditate assumenda voluptatibus ducimus aliquid pariatur facere, dolore mollitia cum dicta accusantium natus ipsa molestiae quae, unde magnam expedita sapiente minus? Sit.
        Enim, soluta. Culpa voluptatibus nulla possimus minus delectus quos neque sunt alias quae, fuga voluptatem illo, libero magnam, consequatur facere! Alias quidem cumque tempore accusamus consequatur vel ab, vitae voluptatum!
        Animi tempore pariatur amet illum modi ea, quas voluptates laudantium dolores rerum natus voluptatibus placeat veniam mollitia, facilis quisquam vero. Molestias illo voluptates et tenetur similique voluptate dolor vel iusto?
        Minus, at aliquid! Iure recusandae rem aliquam porro fugit ullam, optio repellat! Quis, non itaque. Possimus voluptas at nisi beatae praesentium accusantium unde autem distinctio, corporis consequatur quo quas. At.
        Cupiditate ab adipisci doloremque ipsam id eius odit suscipit blanditiis voluptatum iure, animi facilis nihil laborum non, molestiae totam repudiandae quasi aperiam expedita quibusdam error mollitia laudantium dignissimos? Voluptates, velit?
        Et maxime nisi ab perferendis ipsum, ex, debitis eveniet minima neque dicta impedit ratione facere ipsam laudantium blanditiis vero ducimus enim voluptatibus quo vel. Cumque doloribus soluta atque ratione ut.
        Pariatur obcaecati corporis vero quasi amet, ducimus sapiente nihil soluta ad minima architecto adipisci placeat mollitia nam natus non corrupti suscipit, dolore tenetur nostrum. Molestias consequuntur repellendus voluptate beatae sint?
        Repudiandae molestias magni dolorum cum, fugiat nam odit? Recusandae laborum dolor sapiente cum nesciunt veritatis itaque. Voluptatum, modi quam. Minima ducimus corporis dolore velit perspiciatis natus obcaecati excepturi consectetur ex.
        In nostrum eligendi, fugit quos nesciunt inventore a eum at corporis aliquid adipisci doloribus facere, fugiat, ipsam quo vel exercitationem nulla placeat expedita cupiditate perferendis cum eaque quidem temporibus. Harum?
        Perferendis laborum sed iste cupiditate consequatur. Suscipit, eos doloribus? Ut qui, neque perspiciatis hic quasi aspernatur sequi illum iusto quidem temporibus adipisci animi beatae maxime voluptatem atque tenetur dicta pariatur.
        Est molestiae numquam repellat necessitatibus laborum facere, sed non eius at itaque, blanditiis quibusdam voluptas quo. Consectetur sed molestiae fugit vero culpa cum, consequuntur optio unde inventore nesciunt omnis earum!
        Veritatis facere cupiditate unde. In, cupiditate quisquam? Veniam quo ullam ratione facilis, nam, distinctio reprehenderit nesciunt aut eaque perspiciatis aliquid provident aperiam similique sit dolorum voluptatum accusantium dolore autem laborum.
        At corporis numquam eum magni velit! Tenetur quo saepe doloribus nobis commodi nulla laborum ex sapiente earum. Tempora, laboriosam cumque quam dolor atque debitis iusto exercitationem! Voluptatibus, modi at. Tempore.
        Pariatur, molestiae alias cumque quasi reiciendis accusantium quia commodi dolorum quidem ab enim iusto. Ut corrupti officiis incidunt ipsam quasi quod pariatur cumque atque mollitia. Delectus beatae unde harum dolorum.
        Vitae eius dolor sunt libero odio commodi. Maxime minima nisi nostrum dignissimos debitis facilis sint ea ipsam corrupti perferendis quisquam in blanditiis quibusdam quod alias, culpa, labore iure eius temporibus.
        Debitis inventore nobis quae. Temporibus iusto natus cumque, blanditiis consequatur sint error impedit, illo illum molestiae fugit itaque. Error, libero quis laborum dolores voluptatibus quia? A, facere eius. Obcaecati, consectetur?
        Nobis itaque, et eum quam ipsa, quos id quasi nam tenetur mollitia expedita consequatur earum aut voluptas maiores quis eligendi ratione laboriosam quisquam sit ea harum placeat! Qui, quos impedit?
        Obcaecati quae deserunt consequuntur. Dicta dolor asperiores id ducimus officia, quia autem, obcaecati magni aliquam, neque velit sint dolorum? Tempore sapiente voluptates at earum, in iste doloribus eligendi nemo necessitatibus?
        Distinctio atque laborum natus eaque nihil, officiis facere mollitia dolorem qui dolore est doloribus reprehenderit voluptatum consectetur! Provident doloribus expedita, nihil voluptatibus quisquam, deserunt odio blanditiis illo, minus id consequatur?
        Dolore odit laboriosam delectus, harum facilis iure vero perspiciatis. Ducimus delectus nobis ad sit temporibus! Doloremque ducimus dolorum, quasi, cumque eaque facere nisi fugiat, nobis voluptate dolorem quaerat aperiam cupiditate!
        Minima rem, perspiciatis repellat accusantium unde voluptate distinctio veniam qui obcaecati soluta molestias dolor doloribus eum quam ducimus architecto sapiente, autem rerum amet, culpa ea. Eaque dolorem neque porro autem.
        Vitae cumque nostrum molestias omnis, excepturi, sed rem ipsam distinctio ipsa earum facere itaque quidem, dicta dolor ullam animi magni voluptatem non aut quibusdam inventore. Voluptatibus officiis perferendis nihil optio?
        Accusamus eligendi veniam repudiandae nulla architecto facilis eveniet, eum ducimus aliquam perspiciatis nisi laborum. Hic ipsum nihil consectetur, optio fuga nulla placeat voluptate suscipit, molestias veritatis dolores sit eligendi sunt.
        Voluptas consequatur exercitationem dolores eius! Explicabo voluptatem eveniet doloribus. Quasi ab perspiciatis aspernatur aliquam, nesciunt iure culpa voluptates obcaecati, molestiae harum suscipit expedita? Ipsa veniam obcaecati omnis amet saepe quaerat.
        Ab magni illo quidem nulla! Alias beatae mollitia culpa magni laboriosam aliquam aut eveniet dolorum reprehenderit, ipsum ex, deleniti perferendis, ducimus vitae non maiores hic nostrum rerum. Odio, totam molestias!
        Labore aliquid deserunt facere, similique tenetur provident dolores earum qui atque id nostrum ipsum eaque. Vel, voluptatibus inventore odio, itaque mollitia sit, pariatur nisi rerum blanditiis nemo sequi ipsam exercitationem.
        Quis laudantium, repellendus quam id, molestiae adipisci laboriosam consequuntur veritatis illo odit earum? Expedita, itaque voluptatem cupiditate harum eligendi fugiat id maiores consequatur accusantium ad minus ut ducimus neque adipisci.
        Eligendi magni eaque nihil quibusdam saepe accusantium ipsum tempore, pariatur quisquam molestiae dolore provident, rem itaque eum inventore facilis, dolorum suscipit. Ex libero natus vel dolores, rem rerum quisquam consequatur.
        Ipsum, perferendis officiis. Quidem iure, corrupti odit maxime temporibus fugiat explicabo. Fugiat quo doloribus ea omnis voluptate culpa corrupti ipsam. Sunt ratione vero accusamus culpa illo qui. Aliquam, reprehenderit sequi?
        Dolor nihil nobis totam itaque quos maiores fuga magni, iure molestiae reprehenderit ut corrupti doloremque reiciendis esse hic cumque dolorum numquam eveniet voluptas tempora voluptate? Magni voluptatum voluptas voluptate illo?
        Fuga rerum unde fugit. Obcaecati deserunt reiciendis neque quam saepe cum esse exercitationem. Suscipit a quisquam architecto delectus consectetur! Repellat in quam quos id accusantium reprehenderit necessitatibus saepe itaque consequuntur!
        Aut nihil quis autem quisquam quasi. Quaerat dolorem labore nostrum obcaecati exercitationem, aliquid distinctio rerum repellendus quisquam laborum, pariatur blanditiis fugiat praesentium aperiam saepe. Ex natus error neque eos atque.
        Impedit assumenda voluptate quaerat repudiandae nemo eos, ullam voluptatum deserunt tempora modi provident quia doloribus eum error molestias et reiciendis. Distinctio vero ad consequatur velit eaque reprehenderit iusto recusandae repudiandae.
        Rerum quo fugit laborum. Reprehenderit praesentium ipsum id quia soluta nesciunt, cumque consequuntur ullam veritatis laborum repellendus blanditiis velit incidunt nulla saepe facere molestiae adipisci laudantium nobis vitae magnam alias.
        Repellendus mollitia optio soluta commodi culpa iusto saepe alias recusandae omnis aut. Omnis officiis, non soluta atque facere voluptatibus maiores cum reiciendis aperiam eos accusantium animi aliquam dolorem illo enim.
        Minus, ea consequatur assumenda deserunt quasi magni iure odit asperiores? Velit a laboriosam quod odio accusamus cumque illo ipsam similique sed ex quasi, ducimus quis maxime aut aperiam! Excepturi, exercitationem?
        Harum repudiandae similique alias magni quae quibusdam quos aperiam natus minima aliquam. Est, at quo! Ad nesciunt quaerat maxime commodi quo assumenda ex deleniti omnis minima qui. Iste, aliquid vitae.
      </h1>

    </>

  )
}
