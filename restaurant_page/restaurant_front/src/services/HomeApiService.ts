import http from "@/http_common";

class HomeApiService {
  get_update_news(): Promise<any> {
    return http.get("/api/get_update_news");
  }

  get_access_information(): Promise<any> {
    return http.get("/api/get_access_information");
  }

  get_business_calendar(): Promise<any> {
    return http.get("/api/get_business_calendar");
  }
}
export default HomeApiService;
