<template>
  <Layout>
    <div class="container">
      <p>
        1. Zobacz mordo co tu się stało, wcześniej miałeś 2x header, który
        był zdefiniowany w layouts/Default i tutaj w index - błąd
      </p>
      <p>
        2. Sprawdź sobie <strong>main.js</strong> bo tam definiujesz sobie
        komponenty, które możesz wykorzystać w różnych miejscach na stronie,
        dodałem tam nowy komponent o nazwie Header - linia 12. Zawartość tego
        komponentu importuję w linii 7, kumasz czacze? Teraz w Index albo About
        mógłbyś wjebać <strong>< Header /></strong> ale tego nie zrobisz, czemu?
        Bo mamy już główny layout o nazwie <strong>Default.vue</strong>. W
        Default.vue wpierdalam sobie Header i teraz każda nowa strona będzie
        używać tego layouta (oczywiście jak w template dodasz
        <strong>Layout</strong>)
      </p>
      <p>3. TASK! Otwórz sobie <strong>pages/Index.vue</strong></p>
      <p>Znajdziesz tam ten tekst, który teraz czytasz</p>
      <p>
        Dodałem komentarz pod tym paragragem, weź usuń strzałki, żeby widzieć
        sam <strong>< Header /> (bez spacji pomiędzy < a H)</strong>
      </p>
      <!-- <Header /> -->

      <p>
        Powinieneś zobaczyć to samo co na gorze, czyli cały komponent Header
      </p>
      <p>
        Oczywiście nie będzie on dokładnie taki sam, bo ten tekst jest
        zagnieżdżony w container a header-top nie, ale będziesz widział o co
        kaman.
      </p>
      <p>Pozdro 600</p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Agencja Detektywistyczna Krzysztof Mika",
  },
};
</script>

<style></style>
