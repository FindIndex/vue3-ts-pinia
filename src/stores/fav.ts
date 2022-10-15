import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useFavStore = defineStore("fav", () => {
  let recipeFav = ref(JSON.parse(localStorage.getItem("recipeFav")) || []);
  let noteFav = ref(JSON.parse(localStorage.getItem("noteFav")) || []);

  function addRecipeFav({ recipe }) {
    // console.log(recipeFav.value, recipe);

    recipeFav.value = [...recipeFav.value, recipe];
  }

  function removeRecipeFav({ recipeId }) {
    recipeFav.value = recipeFav.value.filter((o) => o.id !== recipeId);
  }

  function addNoteFav({ note }) {
    noteFav.value = [...noteFav.value, note];
  }

  function removeNoteFav({ noteId }) {
    noteFav.value = noteFav.value.filter((o) => o.id !== noteId);
  }

  return {
    recipeFav,
    addRecipeFav,
    removeRecipeFav,
    noteFav,
    addNoteFav,
    removeNoteFav,
  };
});
