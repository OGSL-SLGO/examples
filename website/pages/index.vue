<script setup>
import { ref } from 'vue'

const runtimeConfig = useRuntimeConfig();

const queryResult = await queryContent().where({ _file: "examples.yml" }).only(['body']).find()
const allExamples = queryResult[0].body

function normalizeString(text) {
  return text.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function createWordsList(text, minLength = 3) {
  const wordsList = []
  const regexIterator = normalizeString(text).matchAll(/[-'’\p{L}\p{M}\p{N}]+/giu);
  for (const match of regexIterator) {
    const word = match[0]
    if (word.length < minLength) continue;
    wordsList.push(word)
  }
  return wordsList
}

for (const example of allExamples) {
  let wordsList = []

  for (const tag of example.tags) {
    wordsList = wordsList.concat(createWordsList(tag, 1))
  }
  wordsList = wordsList.concat(createWordsList(example.title))
  wordsList = wordsList.concat(createWordsList(example.description))
  example['words'] = [...new Set(wordsList)];
}

const examplesSearchQuery = ref('')

const filteredExamples = computed(() => {
  if (examplesSearchQuery.value == "") return allExamples;

  return allExamples.filter(example => {
    for (const word of example.words) {
      if (word.includes(normalizeString(examplesSearchQuery.value))) return true
    }
  });
})
</script>

<template>
  <div>
    <div class="header">
      <div><img style="max-height: 30px;" src="~/assets/logo_ogsl.svg" /></div>
      <div><input class="search-box" type="text" placeholder="Rechercher..." v-model="examplesSearchQuery" /></div>
      <div style="text-align: center;font-size: 3em;">Gallerie
        d'exemples</div>
    </div>
    <div class="card-container">
      <div class="card" v-for="example in filteredExamples" :key="example.title">
        <div class="card-image"><img :src="runtimeConfig.app.baseURL + example.card_image_url" /></div>
        <div class="card-description">
          <h1>{{ example.title }}</h1>
          <p style="margin-bottom: 10px">
            {{ example.description }}
          </p>
          <div style="margin-bottom: 10px;"><span class="tag" v-for="tag in example.tags" :key="tag">{{ tag }}</span>
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
.fade {
  transition: all 0.4s ease-out;
  opacity: 0;
}

.header {
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  align-items: center;
}

.search-box {
  border: 3px solid #00adef;
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 15px;
  outline: none;
  color: #6d8379;
  transition: all 200ms ease-out;
  line-height: 20px;
  font-size: 1em;

  &:hover {
    box-shadow: 0 0 6px rgb(35 173 255);
  }
}

.card-container {
  @media screen and (min-width: 550px) {
    display: grid;
    column-gap: 1rem;
    padding: 1px;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
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
    height: 200px;
  }
}

.card-image {
  >img {
    border-radius: 10px;
    width: 100%;
    height: 100px;
    max-height: 200px;
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

  &:before {
    content: '#'
  }
}

.link-button {
  text-decoration: none;
  color: #00adef;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  font-size: small;

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