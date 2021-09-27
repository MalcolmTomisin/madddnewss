import axios from 'axios';

export default class NewsService {
  instance = axios.create({
    baseURL: 'https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane',
  });

  PAGINATED_ROUTE: string = '/news?page=';

  getPaginatedNews = async (page: number) =>
    await this.instance.get(`${this.PAGINATED_ROUTE}${page}&limit=10`);

  getImageForNews = async (newsId: number) =>
    await this.instance.get(`/news/${newsId}/images`);

  createNews = async (body: object) => await this.instance.post('/news', body);

  updateNews = async ( body, id) => await this.instance.put(`/news/${id}`, body);
}
