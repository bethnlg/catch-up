import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

/**
 * News API Service
 * @class NewsApiService
 * @description
 * This service is responsible for fetching news data from the News API.
 * It contains the following methods:
 * @method getSources - Fetches the news sources.
 * @method getArticlesBySourceId - Fetches the articles by source ID.
 * @method initArticles - Initializes the articles.
 * @property apiKey: string - The API key for the News API.
 * @property baseUrl: string - The base URL for the News API.
 * @property http: HttpClient - The HTTP client module for making HTTP requests.
 */
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private apiKey: string  = `${environment.newsApiKey}`;
  private baseUrl: string = 'https://newsapi.org/v2';
  private http: HttpClient = inject(HttpClient);

  /**
   * @method getSources
   * @description
   * Fetches the news sources.
   * @returns An observable of the news sources.
   */
  getSources() {
    return this.http.get(`${this.baseUrl}/top-headlines/sources?apiKey=${this.apiKey}`);
  }

  /**
   * @method getArticlesBySourceId
   * @description
   * Fetches the articles by source ID.
   * @param sourceId - The ID of the source.
   * @returns An observable of the articles for the given source id.
   */
  getArticlesBySourceId(sourceId: string) {
    return this.http.get(`${this.baseUrl}/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
  }

  /**
   * @method initArticles
   * @description
   * Initializes the articles.
   * @returns An observable of the articles for the given literal source id parameter.
   */
  initArticles() {
    return this.getArticlesBySourceId('bbc-news');
  }
}
