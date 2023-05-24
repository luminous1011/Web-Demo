import { defineAsyncComponent } from "vue";
const Home = defineAsyncComponent(() => import("./Home.vue"));
export default Home;
