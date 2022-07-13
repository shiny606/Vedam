import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class RestapiserviceService {
  results;
  constructor(public http: HttpClient) {}

  apiUrl = "https://szwebprofile.com/Vedam/api/";

  
  dailyVerses(params) {
    let apiUrl_calling = this.apiUrl + "verses";
    return new Promise((resolve) => {
      console.log("*****verses api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }
  dailyFacts(params) {
    let apiUrl_calling = this.apiUrl + "daily_facts";
    return new Promise((resolve) => {
      console.log("*****daily_facts api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }
  exploreList(params) {
    let apiUrl_calling = this.apiUrl + "explore_category";
    return new Promise((resolve) => {
      console.log("*****explore_category api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }
  coursesList(params) {
    let apiUrl_calling = this.apiUrl + "all_grades";
    return new Promise((resolve) => {
      console.log("*****coursesList api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }

  explorecategory(params) {
    let apiUrl_calling = this.apiUrl + "explore_category_detail";
    return new Promise((resolve) => {
      console.log("*****explorecategory api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }

  exploreTopic(params) {
    let apiUrl_calling = this.apiUrl + "explore_topic_detail";
    return new Promise((resolve) => {
      console.log("*****exploreTopic api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }

  bibleTopics(params) {
    let apiUrl_calling = this.apiUrl + "all_books_chapters_verses";
    return new Promise((resolve) => {
      console.log("*****bibleTopics api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }
  bibleContents(params) {
    let apiUrl_calling = this.apiUrl + "bible_details";
    return new Promise((resolve) => {
      console.log("*****bibleContents api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }

  courseGrades(params) {
    let apiUrl_calling = this.apiUrl + "all_terms";
    return new Promise((resolve) => {
      console.log("*****courseGrades api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }
  courseTerms(params) {
    let apiUrl_calling = this.apiUrl + "all_topics";
    return new Promise((resolve) => {
      console.log("*****courseTerms api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }
  contactUs(params) {
    let apiUrl_calling = this.apiUrl + "contact_form";
    return new Promise((resolve) => {
      console.log("*****contactUs api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }
  bookmarkList(params) {
    let apiUrl_calling = this.apiUrl + "bookmark_detail";
    return new Promise((resolve) => {
      console.log("*****bookmarkList api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }
  bookmark(params) {
    let apiUrl_calling = this.apiUrl + "bookmark";
    return new Promise((resolve) => {
      console.log("*****bookmark api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }
  courseDetails(params) {
    let apiUrl_calling = this.apiUrl + "course_details";
    return new Promise((resolve) => {
      console.log("*****course_details api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }

  contactAdmin(params) {
    let apiUrl_calling = this.apiUrl + "connect_admin";
    return new Promise((resolve) => {
      console.log("*****connect_admin api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }

  versesList(params) {
    let apiUrl_calling = this.apiUrl + "verses_facts_gallery";
    return new Promise((resolve) => {
      console.log("*****verses api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }

  notificationSet(params) {
    let apiUrl_calling = this.apiUrl + "notification_settings";
    return new Promise((resolve) => {
      console.log("*****notification_settings api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }

  otpVerify(params) {
    let apiUrl_calling = this.apiUrl + "verify_mobile";
    return new Promise((resolve) => {
      console.log("*****verify_mobile api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }

  sendOTP(params) {
    let apiUrl_calling = this.apiUrl + "send_otp_mobile";
    return new Promise((resolve) => {
      console.log("*****send_otp_mobile api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }

  profileDetails(params) {
    let apiUrl_calling = this.apiUrl + "profile_list";
    return new Promise((resolve) => {
      console.log("*****profile_list api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }

  profileUpdate(params) {
    let apiUrl_calling = this.apiUrl + "update_profile";
    return new Promise((resolve) => {
      console.log("*****update_profile api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }

  onRegister(params) {
    let apiUrl_calling = this.apiUrl + "user_register";
    return new Promise((resolve) => {
      console.log("*****user_register api url " + apiUrl_calling);
      this.http
        .post(apiUrl_calling, params)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }

  curVersion() {
    let apiUrl_calling = this.apiUrl + "current_version";
    return new Promise((resolve) => {
      console.log("*****curVersion api url " + apiUrl_calling);
      this.http
        .get(apiUrl_calling)
        .subscribe((data) => {
          this.results = data;
          resolve(this.results);
        });
    });
  }
 
}
