import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useStoreState } from 'easy-peasy'

const defaultImage = require("../assets/images/champ.jpg")

export default function HomePage({ navigation }) {

  const [image, setImage] = useState(defaultImage)

  const newImage = useStoreState((state) => state.images.image)

  useEffect(() => {
    console.log('ici')
    if (newImage !== '') {
      setImage({uri: newImage})
    }
  }, [newImage])

  return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{ navigation.navigate('Camera') }}>
              <Image style={styles.image} source={image}/>
            </TouchableOpacity>
          </View>
          <View style={[styles.headerContainer, styles.titles]}>
            <Text>Mon titre</Text>
            <Text>Ma description</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam optio eum suscipit cupiditate natus, delectus vitae quibusdam nobis nulla minus accusantium doloribus. Consectetur nulla temporibus fugiat dolorem consequatur ea doloremque.
          Hic natus impedit optio exercitationem maxime explicabo, dicta ab consequatur incidunt labore nam quidem minus ratione atque id quis, quaerat nostrum iusto totam nesciunt. Officia numquam neque quibusdam rem labore.
          Fugiat quis ducimus neque tempora ratione cum quos iste similique porro itaque, voluptatum provident dignissimos praesentium ipsum rerum, qui blanditiis consequuntur possimus inventore magni eos! Adipisci inventore non explicabo enim?
          Alias distinctio eos rem at dolores perferendis atque laborum consequatur blanditiis totam itaque, non, voluptas, voluptate aliquid aspernatur nisi expedita numquam adipisci eius? Repellendus exercitationem laborum perspiciatis praesentium. Corrupti, praesentium.
          Ipsum, omnis ex quibusdam velit placeat corporis, libero perspiciatis dolorum mollitia quod ea, possimus numquam. Cum beatae error numquam amet exercitationem et cupiditate ad nihil, quod itaque dolorem quas. Nulla?
          Optio perspiciatis architecto placeat suscipit consectetur atque! Reiciendis maiores blanditiis inventore in dolorum necessitatibus incidunt praesentium cum quasi, quidem nam iusto esse illum, quibusdam, labore eos consequuntur. Laborum, pariatur a?
          Ut tempore alias dolores cupiditate? Harum perferendis neque quae eaque. Asperiores nobis officiis consectetur in, repellat aut quidem, mollitia quasi porro nesciunt doloribus sit accusamus, nihil eos quo pariatur blanditiis!
          Quibusdam, impedit dicta est officiis harum voluptatum ea amet optio asperiores eveniet consectetur perspiciatis accusantium temporibus. Ab blanditiis recusandae totam corrupti omnis quasi amet vero, officiis nemo optio itaque! Ipsum!
          Ex, laudantium dolores voluptas, delectus saepe praesentium eaque cum natus ipsum sed asperiores veritatis similique. Ducimus delectus quibusdam quo ullam in magnam ea? Perferendis quas tempore accusantium similique nulla quidem!
          Delectus nemo facilis impedit, ducimus animi neque exercitationem atque esse repudiandae aut! Voluptatum, eius iure accusantium iusto maiores voluptatem saepe ipsa dicta nesciunt nisi quia perferendis explicabo recusandae obcaecati velit.
          Amet magnam, vitae voluptas odit praesentium neque exercitationem inventore dolores nisi alias ipsam commodi eveniet minus velit eaque, libero et, repellendus nulla repudiandae. Voluptates accusantium, quisquam quasi magnam voluptas sapiente?
          Praesentium sit aliquid nostrum cupiditate labore voluptatum dolorem eligendi iusto provident temporibus error aliquam a beatae dolores vitae, hic perferendis deserunt eius fugiat aperiam obcaecati laudantium facilis! Labore, laborum autem.
          Praesentium totam, tempore minus amet magni nostrum voluptatum vel a aperiam ab, quod saepe tenetur nulla at dolorem qui dignissimos repellendus. Nisi, illo ipsa? Odio officiis corporis ea officia ratione.
          Fuga ducimus optio hic totam praesentium, exercitationem vero veritatis deleniti assumenda obcaecati ipsam, quasi minima reiciendis eveniet quaerat beatae magni id. Culpa beatae, ab eaque vero in quae nulla a?
          Fuga, ut iure. Reprehenderit culpa quae excepturi ratione voluptas earum ad sequi obcaecati accusamus incidunt aut eos, minus accusantium impedit alias quibusdam quia id officia magni, velit vero necessitatibus autem?
          Voluptate accusantium reiciendis corrupti assumenda natus illum possimus, voluptatibus cumque aliquid architecto! Praesentium quaerat nemo dolorum similique officiis, qui unde! Praesentium earum eveniet ea accusantium doloribus consectetur, fugit in error.
          Nostrum harum, repudiandae incidunt nesciunt, quas dolorem praesentium eaque pariatur architecto velit numquam ad quia asperiores quos sint perspiciatis labore repellat natus distinctio eum, obcaecati doloremque libero vero a. Magnam!
          Beatae veritatis voluptate unde iusto recusandae minus iste facere perspiciatis illum quo! Temporibus ratione mollitia doloremque nesciunt perferendis officia sed, assumenda aliquid quae, nam iste quia eius, blanditiis reiciendis odio.
          Impedit illum eligendi laborum nostrum quo dolorem, perspiciatis distinctio laboriosam est blanditiis eaque ad facilis provident labore reprehenderit vel velit accusantium ut commodi dolores? Est, atque! Praesentium aut aspernatur pariatur.
          Enim minima velit aliquid ipsa! Aperiam harum ipsa dignissimos maiores eveniet iusto magni nemo laboriosam neque voluptatibus et, cum consequatur, est velit qui distinctio! Debitis earum sapiente similique amet dolore!
          Animi reiciendis cumque sapiente doloremque error ut quas dolorum iure odit illo quo, nemo optio dolor mollitia distinctio quaerat dignissimos voluptatem repellendus. Quasi fugiat odio, exercitationem reiciendis temporibus maiores deserunt?
          Aspernatur culpa, architecto nisi voluptates odio rerum quod accusamus aut tenetur? Temporibus quibusdam ea dolorem eaque qui, ad fuga aliquam. Expedita voluptatum veniam explicabo laudantium pariatur, ad minima quasi corporis.
          Eius libero quo vitae suscipit enim magni sequi debitis quas vero recusandae eveniet atque id nam neque deserunt laborum, fugiat soluta odio. Facilis molestiae quos accusantium. Esse voluptates vel eos.
          Commodi ea modi officiis, repellendus alias porro nulla expedita officia impedit autem cupiditate consequatur ipsa libero ipsum reiciendis iste tempore reprehenderit, eaque amet non. Tempora ipsa voluptatibus consectetur suscipit corrupti.
          Iusto, ducimus! Nulla odio iusto, expedita culpa sed nihil quibusdam voluptatibus at qui obcaecati ad tempore ea numquam, pariatur aliquam. Est repudiandae dicta provident ut molestias nam reprehenderit consectetur mollitia.
          Numquam labore laborum perferendis dolorum saepe quo. Adipisci laudantium cupiditate, praesentium illum id doloremque ipsam vel blanditiis non nostrum labore. Quis eum tenetur officia neque placeat impedit, iusto harum quae.
          Explicabo perferendis doloremque adipisci dicta ea dolorum eius atque nobis iste animi perspiciatis mollitia architecto est voluptate porro quam odit officia aut veniam cum laudantium, tempore, necessitatibus dolor tempora! Non.
          Impedit possimus, a animi quibusdam libero fugiat architecto, quia exercitationem illo sint numquam nam temporibus maxime velit ullam! Ipsa sapiente dignissimos unde architecto ipsam sit illum facere explicabo minus quaerat!
          Eum molestiae delectus tenetur consequuntur? Aspernatur, odit facere. Explicabo eligendi debitis alias laborum vero blanditiis architecto neque hic? Velit nostrum officia totam ex? Perferendis accusamus quis cupiditate, facere est nisi!
          Vero excepturi suscipit laudantium distinctio assumenda, quia aspernatur ea officia totam fuga facere iusto nisi vitae reprehenderit recusandae culpa illum, placeat perspiciatis ex iure dolor dolores error. Corporis, aspernatur nisi.
          Consequuntur, suscipit. Quam doloremque odit ratione numquam minima culpa quasi nemo, ad molestias dolore laborum, accusantium soluta alias earum odio itaque qui voluptate adipisci! Fugit architecto est aperiam beatae nobis.
          Hic sed dolorum tenetur ratione aliquam excepturi alias repellendus! Possimus deserunt vitae mollitia dolore iste. Nam deserunt vero magni aut. Fugit molestias assumenda aut ullam esse porro, quidem voluptatibus in!
          Quo cupiditate tempora tempore unde, molestiae harum voluptates quibusdam officia, eveniet molestias, excepturi ex dolores error? Illo, doloremque asperiores ullam, in expedita et officiis distinctio rerum corrupti at quia assumenda!
          Temporibus modi illum, voluptatum beatae architecto itaque dolorum id obcaecati amet reiciendis aliquam recusandae vel deserunt exercitationem. Culpa, cupiditate fugit tempore est ut beatae aliquid placeat delectus facere ipsam quas?
          Porro consequatur dignissimos expedita labore eaque velit esse quasi quidem magnam ipsam officiis sint, laboriosam minima quaerat amet ut itaque tempore repellat dolorem asperiores? Similique reprehenderit nostrum soluta odit cum!
          Quo consequatur earum, consectetur error aspernatur repellat! Unde dolorum, sed aliquam iste omnis facilis soluta ad voluptatibus dignissimos necessitatibus in illum, animi laudantium iusto a, explicabo expedita quaerat officia eaque?
          Atque quibusdam possimus temporibus exercitationem sint quae, omnis recusandae repudiandae ea facere ipsum voluptatum cupiditate quos nisi qui sit natus quisquam eligendi voluptatem ipsam doloremque cum. Est perspiciatis tempora voluptates?
          Minus, earum. Odio numquam animi totam placeat provident amet aut voluptatem porro? Hic eos modi similique vel rem quis eligendi facere iste? Fugit vitae, ipsam accusamus aliquid repellat sapiente veniam.
          Facere soluta, omnis recusandae quaerat atque natus iste inventore obcaecati et nam dolor mollitia assumenda sit eaque, id molestiae. Praesentium, maxime aliquam mollitia quo possimus illum dolore ratione incidunt est!
          Quam dolorum at magni libero assumenda, error, doloremque minima ex eveniet numquam perferendis illo laborum maxime, consequatur sint repellat eius alias sequi eaque rem accusantium! Illo libero ratione necessitatibus quaerat.
          Eaque natus fugiat hic ea similique repudiandae, adipisci aut pariatur distinctio ut consequuntur, repellat laudantium quasi sit omnis neque? Officia ratione enim deleniti, eum nobis labore quibusdam magnam iure quae?
          Aut et autem, quam optio similique ad cupiditate blanditiis incidunt, possimus suscipit consequuntur repellat provident, reprehenderit accusamus eum sint aliquam adipisci corrupti! Quisquam, quae? Accusantium voluptatem accusamus optio excepturi deleniti?
          Ratione, at veniam accusamus deleniti adipisci, omnis ab quasi nisi autem totam voluptatum quibusdam explicabo asperiores sapiente ipsum consectetur debitis delectus culpa. Perspiciatis dolorum itaque sed accusamus, voluptatem repellendus tempore?
          Ratione quibusdam non laboriosam repellendus, aut et facilis, id deserunt ea mollitia, facere hic impedit quam dicta! Est, error, ducimus facere vitae impedit cupiditate veritatis pariatur nisi aliquam, natus aperiam!
          Magni iusto ducimus quo! Vitae exercitationem sit id. Error neque ea saepe maiores, consectetur reprehenderit, mollitia quisquam sint nisi voluptates sunt dolore necessitatibus id nostrum aliquid perspiciatis tenetur ipsa impedit!
          Expedita fuga tenetur earum quo qui, saepe maxime sunt unde odio aut eaque, est eveniet, amet autem doloribus repudiandae dicta quasi? Veniam, deleniti repudiandae! Qui sed earum veniam animi ad.
          Facilis at provident, distinctio pariatur animi itaque laboriosam libero dicta minima vitae facere corporis a cupiditate tenetur quis consequuntur, voluptate id dolores, esse vel nihil assumenda. Libero architecto debitis nam?
          Veniam hic iure molestias praesentium, amet itaque nam ea ratione cumque eaque quis molestiae, reiciendis dolor a minima soluta vel? Quidem similique quibusdam rem dolor reprehenderit facilis dicta accusamus culpa.
          Iste saepe aperiam laboriosam est necessitatibus reiciendis pariatur voluptatum fuga cupiditate veritatis facere iure nisi aliquid, quisquam alias magni harum inventore tenetur corrupti possimus, aspernatur nam adipisci. Necessitatibus, delectus dolorem!
          Quisquam magni amet eligendi hic eveniet minima excepturi quia placeat unde consequatur soluta quibusdam, ratione error nobis ullam tenetur. Sunt excepturi itaque nostrum nihil recusandae eaque hic omnis repudiandae fugiat?</Text>
        </View>
      </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10
  },
  headerContainer: {
    width: '50%',
  },
  titles: {
    flex: 1
  },
  content: {
    flex: 2,
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200
  },
  image: {
    padding: 10,
    width: '100%',
    height: '100%',
    borderRadius: 20,
  }
});