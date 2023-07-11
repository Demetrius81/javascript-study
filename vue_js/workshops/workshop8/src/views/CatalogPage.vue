<template>
  <div>
    <div class="text">Catalog</div>
    <card-box-component :products="productsOnPage"></card-box-component>
    <div class="links">
      <router-link
        v-for="page in pagesArray"
        :key="page"
        :to="{ name: 'catalog', params: { id: page } }"
      >
        {{ page }}
      </router-link>
    </div>
  </div>
</template>

<script>
import CardBoxComponent from "@/components/CardBoxComponent.vue";

export default {
  components: { CardBoxComponent },
  name: "CatalogPage",

  data() {
    return {
      products: [
        {
          id: 1,
          product: "ac mattis",
          description:
            "orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce",
          price: 179,
        },
        {
          id: 2,
          product: "tellus faucibus",
          description:
            "pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus",
          price: 915,
        },
        {
          id: 3,
          product: "congue. In",
          description:
            "vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros",
          price: 421,
        },
        {
          id: 4,
          product: "eu, ultrices",
          description:
            "consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus",
          price: 838,
        },
        {
          id: 5,
          product: "est. Nunc",
          description:
            "aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper.",
          price: 165,
        },
        {
          id: 6,
          product: "tristique senectus",
          description:
            "molestie in, tempus eu, ligula. Aenean euismod mauris eu elit.",
          price: 836,
        },
        {
          id: 7,
          product: "sagittis. Duis",
          description:
            "dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est",
          price: 499,
        },
        {
          id: 8,
          product: "blandit. Nam",
          description:
            "tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac",
          price: 301,
        },
        {
          id: 9,
          product: "mauris sagittis",
          description:
            "neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce",
          price: 536,
        },
        {
          id: 10,
          product: "amet, risus.",
          description:
            "orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras",
          price: 996,
        },
        {
          id: 11,
          product: "aliquam eu,",
          description:
            "dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc",
          price: 562,
        },
        {
          id: 12,
          product: "eros. Nam",
          description:
            "varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla",
          price: 204,
        },
        {
          id: 13,
          product: "orci luctus",
          description:
            "nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse",
          price: 840,
        },
        {
          id: 14,
          product: "neque non",
          description:
            "semper erat, in consectetuer ipsum nunc id enim. Curabitur massa.",
          price: 483,
        },
        {
          id: 15,
          product: "at sem",
          description: "Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis",
          price: 940,
        },
        {
          id: 16,
          product: "egestas. Aliquam",
          description:
            "Donec nibh enim, gravida sit amet, dapibus id, blandit at,",
          price: 650,
        },
        {
          id: 17,
          product: "nulla magna,",
          description:
            "in faucibus orci luctus et ultrices posuere cubilia Curae Donec",
          price: 998,
        },
        {
          id: 18,
          product: "parturient montes,",
          description:
            "aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non,",
          price: 238,
        },
        {
          id: 19,
          product: "Mauris nulla.",
          description:
            "aliquam eros turpis non enim. Mauris quis turpis vitae purus",
          price: 141,
        },
        {
          id: 20,
          product: "porta elit,",
          description:
            "nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor",
          price: 949,
        },
        {
          id: 21,
          product: "tellus non",
          description:
            "Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae",
          price: 771,
        },
        {
          id: 22,
          product: "montes, nascetur",
          description:
            "elit elit fermentum risus, at fringilla purus mauris a nunc.",
          price: 957,
        },
        {
          id: 23,
          product: "Donec porttitor",
          description:
            "ante ipsum primis in faucibus orci luctus et ultrices posuere",
          price: 911,
        },
        {
          id: 24,
          product: "Quisque varius.",
          description:
            "egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede.",
          price: 788,
        },
        {
          id: 25,
          product: "non ante",
          description:
            "interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt",
          price: 480,
        },
        {
          id: 26,
          product: "dignissim lacus.",
          description:
            "id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor,",
          price: 934,
        },
        {
          id: 27,
          product: "aliquet, sem",
          description:
            "Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet",
          price: 163,
        },
        {
          id: 28,
          product: "imperdiet non,",
          description:
            "lectus. Cum sociis natoque penatibus et magnis dis parturient montes,",
          price: 135,
        },
        {
          id: 29,
          product: "augue porttitor",
          description:
            "odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque",
          price: 145,
        },
        {
          id: 30,
          product: "condimentum eget,",
          description:
            "In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede",
          price: 964,
        },
        {
          id: 31,
          product: "felis purus",
          description:
            "Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis",
          price: 753,
        },
        {
          id: 32,
          product: "amet risus.",
          description:
            "Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis",
          price: 461,
        },
        {
          id: 33,
          product: "vel nisl.",
          description: "justo sit amet nulla. Donec non justo. Proin non massa",
          price: 238,
        },
        {
          id: 34,
          product: "amet ornare",
          description:
            "tellus lorem eu metus. In lorem. Donec elementum, lorem ut",
          price: 535,
        },
        {
          id: 35,
          product: "nulla. Integer",
          description:
            "rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac",
          price: 710,
        },
        {
          id: 36,
          product: "in faucibus",
          description:
            "purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam",
          price: 145,
        },
        {
          id: 37,
          product: "lacinia vitae,",
          description:
            "adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu",
          price: 671,
        },
        {
          id: 38,
          product: "a ultricies",
          description:
            "ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet",
          price: 238,
        },
        {
          id: 39,
          product: "Nam porttitor",
          description: "et nunc. Quisque ornare tortor at risus. Nunc ac sem",
          price: 695,
        },
        {
          id: 40,
          product: "Aliquam nec",
          description:
            "Ut tincidunt vehicula risus. Nulla eget metus eu erat semper",
          price: 100,
        },
        {
          id: 41,
          product: "consectetuer mauris",
          description:
            "nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut",
          price: 880,
        },
        {
          id: 42,
          product: "turpis. In",
          description:
            "at arcu. Vestibulum ante ipsum primis in faucibus orci luctus",
          price: 669,
        },
        {
          id: 43,
          product: "Sed eu",
          description:
            "ultrices a, auctor non, feugiat nec, diam. Duis mi enim,",
          price: 461,
        },
        {
          id: 44,
          product: "cursus non,",
          description:
            "eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer",
          price: 310,
        },
        {
          id: 45,
          product: "Nunc ullamcorper,",
          description:
            "neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede",
          price: 768,
        },
        {
          id: 46,
          product: "turpis egestas.",
          description:
            "feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem",
          price: 990,
        },
        {
          id: 47,
          product: "suscipit nonummy.",
          description:
            "non, luctus sit amet, faucibus ut, nulla. Cras eu tellus",
          price: 672,
        },
        {
          id: 48,
          product: "urna. Nullam",
          description:
            "sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem",
          price: 189,
        },
        {
          id: 49,
          product: "Phasellus nulla.",
          description:
            "ultricies ornare, elit elit fermentum risus, at fringilla purus mauris",
          price: 121,
        },
        {
          id: 50,
          product: "iaculis enim,",
          description: "luctus sit amet, faucibus ut, nulla. Cras eu tellus eu",
          price: 154,
        },
      ],
      totalCards: 8,
    };
  },

  computed: {
    currentPage() {
      return this.$route.params.id;
    },
    totalPages() {
      return Math.ceil(this.products.length / this.totalCards);
    },
    pagesArray() {
      let result = [];
      for (let i = 1; i <= this.totalPages; i++) {
        result.push(i);
      }
      return result;
    },
    productsOnPage() {
      return this.products.slice(
        (this.currentPage - 1) * this.totalCards,
        this.currentPage * this.totalCards
      );
    },
  },

  methods: {
    changePage(page) {
      this.currentPage = page;
      console.log(page);
      this.$router2.push({ name: "catalog", params: { id: page } });
    },
  },
};
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
