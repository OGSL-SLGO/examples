<script setup>
import { createTextSearchRegex } from "@/utils/regex"

useHead({
  title: "Gallerie d'exemples",
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: "Exemples, supports de formations, outils pédagogiques autour de l'utilisation de données ouverte" }],
  link: [{ rel: 'icon', type: 'image/png', href: 'ofavicon.ico' }],
})

const queryResult = await queryContent().where({ _file: "examples.yml" }).only(['body']).find()
const allExamples = queryResult[0].body

const examplesSearchQuery = ref('')

const filteredExamples = computed(() => {
  if (examplesSearchQuery.value === "") return allExamples;

  let filter_ = null;
  switch (true) {
    case examplesSearchQuery.value.startsWith("#"):
      filter_ = function (example) {
        for (const tag of example.tags) {
          if (tag.includes(examplesSearchQuery.value.substring(1))) return true
        }
      }
      break;
    default:
      filter_ = function (example) {
        for (const text of [example.title, example.description, ...example.tags]) {
          if (text.match(searchRegex.value)) return true
        }
      }
  }
  return allExamples.filter(filter_)

})

const searchRegex = computed(() => {
  if (examplesSearchQuery.value === "") return null;

  return createTextSearchRegex(examplesSearchQuery.value);
})
</script>

<template>
  <div>
    <div class="header">
      <div class="site-title">Gallerie d'exemples</div>
      <div class="ogsl-logo"><img src="~/assets/logo_ogsl.svg" /></div>
      <div class="search-box">
        <SearchBox v-model="examplesSearchQuery" />
      </div>
    </div>
    <div class="card-container">
      <div class="card" v-for="example in filteredExamples" :key="example.title">
        <div class="card-image"><img :src="example.card_image_url" />
        </div>
        <div class="card-description">
          <h1>
            <Highlighted :content="example.title" :highlightRegex="searchRegex" />
          </h1>
          <p style="margin-bottom: 10px">
            <Highlighted :content="example.description" :highlightRegex="searchRegex" />
          </p>
          <div style="margin-bottom: 10px;">
            <Highlighted class="tag" v-for="tag in example.tags" :key="tag" @click="examplesSearchQuery = '#' + tag"
              :content="'#' + tag" :highlightRegex="searchRegex" />
          </div>
          <a target="_blank" :href="example.context_url" class="link-button" style="margin-right: 10px;">Contexte</a>
          <a target="_blank" :href="example.source_url" class="link-button" style="margin-right: 10px;">Aller vers
            le notebook</a>
          <a target="_blank" :href="example.binder_url" class="link-button">Lancer avec Binder</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "logo title"
    "search search";
  row-gap: 5px;
  align-items: center;

  @media screen and (min-width: 550px) {
    padding: 10px;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-areas:
      "logo search title";
  }
}

.site-title {
  grid-area: title;
  text-align: center;
  font-size: 1.5em;

  @media screen and (min-width: 550px) {
    font-size: 3em;
  }
}

.ogsl-logo {
  grid-area: logo;

  >img {
    max-height: 20px;
  }

  @media screen and (min-width: 550px) {
    >img {
      max-height: 30px;
    }
  }
}

.search-box {
  grid-area: search;
}

.card-container {
  margin-top: 10px;

  @media screen and (min-width: 550px) {
    padding: 1px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    column-gap: 1rem;
  }
}

.card {
  border: 1px solid #dddddd;
  border-radius: 10px;
  background-color: #f1faff;
  margin-bottom: 10px;

  @media screen and (min-width: 550px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    max-width: 1000px;
  }
}

.card-image {
  >img {
    border-radius: 10px;
    width: 100%;
    height: 100px;
    object-fit: cover;
  }

  @media screen and (min-width: 550px) {
    grid-column: 1;

    >img {
      height: 100%;
    }
  }
}

.card-description {
  padding: 10px;

  >h1 {
    font-size: 1.2em;
    margin-top: 0px;
    color: #00adef
  }

  @media screen and (min-width: 550px) {
    grid-column: 2;
    padding: 20px;

    >h1 {
      font-size: 1.5em;
    }
  }

}

.tag {
  display: inline-block;
  margin-right: 5px;
  font-style: italic;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
}

.link-button {
  text-decoration: none;
  color: #00adef;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  font-size: small;
  display: inline-block;

  &:not(:last-child) {
    $separator: '\00a0\00a0\25CF';

    &:after {
      content: $separator;
    }

    &:hover:after {
      content: " <" + $separator;
    }
  }

  &:hover {
    color: #1e4659;

    &:before {
      content: "> "
    }

    &:after {
      content: " <"
    }
  }
}
</style>
