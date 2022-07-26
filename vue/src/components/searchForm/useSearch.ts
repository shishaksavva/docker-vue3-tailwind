import { ref } from 'vue';
import axios from 'axios';

interface Repo {
  id: string;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
  stargazers_count: string;
  language?: string;
}

export const useSearch = () => {
  const query = ref('');
  const repos = ref<Repo[]>([]);

  const search = () => {
    repos.value = [];
    axios
      .get<{ items: Repo[] }>(
        'https://api.github.com/search/repositories?q=' + query.value
      )
      .then(({ data }) => repos.value.push(...data.items));
  };

  return { query, repos, search };
};
