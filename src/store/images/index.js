import { action } from "easy-peasy";

export const imagesStore = {

  images: [],
  image: '',

  addImage: action((state, payload) => {
    console.log(payload)
    state.images.push({link: payload});
  }),

  loadImage: action((state, payload) => {
    state.image = payload
  })

};