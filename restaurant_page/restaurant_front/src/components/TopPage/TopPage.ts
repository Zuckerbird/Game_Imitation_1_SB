// import HomeApiService from "@/services/HomeApiService";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "TopPage",
  data() {
    return {
      response: "", // レスポンスを表示するための変数
    };
  },
  async sendGetRequest() {
    try {
      const response = await axios.get("/api/get_update_news");
      this.response = response.data; // レスポンスをセット
    } catch (error) {
      console.error("エラー:", error);
      this.response = "エラーが発生しました"; // エラーメッセージを表示
    }
  },
});
